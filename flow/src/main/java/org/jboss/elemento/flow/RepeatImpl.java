/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package org.jboss.elemento.flow;

import java.util.function.Predicate;

import elemental2.promise.Promise;
import elemental2.promise.Promise.PromiseExecutorCallbackFn.RejectCallbackFn;
import elemental2.promise.Promise.PromiseExecutorCallbackFn.ResolveCallbackFn;

import static elemental2.dom.DomGlobal.clearTimeout;
import static elemental2.dom.DomGlobal.setTimeout;

class RepeatImpl<C extends FlowContext> extends FlowRunner<C> implements Repeat<C> {

    private final Task<C> task;
    private Predicate<C> predicate;
    private boolean finished;
    private boolean failFast;
    private long interval;
    private long timeout;
    private int iterations;
    private int index;
    private String lastFailure;
    private double timeoutHandle;
    private double intervalHandle;

    RepeatImpl(C context, Task<C> task) {
        super(context, 1);
        this.task = task;
        this.predicate = __ -> true;
        this.finished = false;
        this.failFast = DEFAULT_FAIL_FAST;
        this.interval = DEFAULT_INTERVAL;
        this.timeout = DEFAULT_TIMEOUT;
        this.iterations = DEFAULT_ITERATIONS;
        this.index = 0;
        this.lastFailure = null;
        this.timeoutHandle = 0;
        this.intervalHandle = 0;
    }

    // ------------------------------------------------------ repeat API

    @Override
    public Repeat<C> while_(Predicate<C> predicate) {
        this.predicate = predicate;
        return this;
    }

    @Override
    public Repeat<C> failFast(boolean failFast) {
        this.failFast = failFast;
        return this;
    }

    @Override
    public Repeat<C> interval(long interval) {
        this.interval = interval;
        return this;
    }

    @Override
    public Repeat<C> timeout(long timeout) {
        this.timeout = timeout;
        return this;
    }

    @Override
    public Repeat<C> iterations(int iterations) {
        this.iterations = iterations;
        return this;
    }

    // ------------------------------------------------------ run

    @Override
    Promise<C> run() {
        return new Promise<>((resolve, reject) -> {
            timeoutHandle = setTimeout(__ -> cancel(reject, TIMEOUT_ERROR), timeout);
            if (!predicate.test(context)) {
                finish(resolve, context);
            }
            until(resolve, reject);
        });
    }

    private void until(ResolveCallbackFn<C> resolve, RejectCallbackFn reject) {
        if (!finished) {
            if (failFast && lastFailure != null) {
                cancel(reject, lastFailure);
            } else {
                task.apply(context)
                        .then(c -> {
                            index++;
                            c.progress.tick();
                            if (areWeDone(c)) {
                                finish(resolve, c);
                            }
                            if (interval != 0) {
                                intervalHandle = setTimeout(__ -> until(resolve, reject), interval);
                            } else {
                                until(resolve, reject);
                            }
                            return null;
                        })
                        .catch_(error -> {
                            lastFailure = String.valueOf(error);
                            if (failFast) {
                                cancel(reject, lastFailure);
                            }
                            return null;
                        });
            }
        }
    }

    // ------------------------------------------------------ helper methods

    private boolean areWeDone(C context) {
        if (iterations > 0) {
            return index == iterations || !predicate.test(context);
        } else {
            return !predicate.test(context);
        }
    }

    private void finish(ResolveCallbackFn<C> resolve, C context) {
        finished = true;
        cleanup();
        context.progress.finish();
        resolve.onInvoke(context);
    }

    private void cancel(RejectCallbackFn reject, String reason) {
        cleanup();
        reject.onInvoke(reason);
    }

    private void cleanup() {
        clearTimeout(intervalHandle);
        clearTimeout(timeoutHandle);
    }
}
