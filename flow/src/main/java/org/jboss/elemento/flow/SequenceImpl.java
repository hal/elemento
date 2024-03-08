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

import java.util.Iterator;
import java.util.List;

import elemental2.promise.Promise;
import elemental2.promise.Promise.PromiseExecutorCallbackFn.RejectCallbackFn;
import elemental2.promise.Promise.PromiseExecutorCallbackFn.ResolveCallbackFn;

import static elemental2.dom.DomGlobal.clearTimeout;
import static elemental2.dom.DomGlobal.setTimeout;

class SequenceImpl<C extends FlowContext> extends FlowRunner<C> implements Sequence<C> {

    enum Mode {
        PARALLEL, SEQUENTIAL
    }

    private final Mode mode;
    private final List<Task<C>> tasks;
    private final Iterator<Task<C>> iterator;
    private boolean failFast;
    private long timeout;
    private double timeoutHandle;
    private boolean timedOut;

    SequenceImpl(Mode mode, C context, List<Task<C>> tasks) {
        super(context, tasks.size());
        this.mode = mode;
        this.tasks = tasks;
        this.iterator = tasks.iterator();
        this.failFast = DEFAULT_FAIL_FAST;
        this.timeout = DEFAULT_TIMEOUT;
        this.timeoutHandle = 0;
        this.timedOut = false;
    }

    // ------------------------------------------------------ sequence API

    @Override
    public Sequence<C> failFast(boolean failFast) {
        this.failFast = failFast;
        return this;
    }

    @Override
    public Sequence<C> timeout(long timeout) {
        this.timeout = timeout;
        return this;
    }

    // ------------------------------------------------------ run

    @Override
    Promise<C> run() {
        if (tasks.isEmpty()) {
            return Promise.resolve(context);
        } else {
            switch (mode) {
                case PARALLEL:
                    return parallel();
                case SEQUENTIAL:
                    return sequential();
                default:
                    throw new IllegalStateException("Unexpected flow execution mode: " + mode);
            }
        }
    }

    // ------------------------------------------------------ run parallel

    @SuppressWarnings("unchecked")
    private Promise<C> parallel() {
        Promise<C>[] promises = tasks.stream()
                .map(task -> task.apply(context).then(c -> {
                    context.progress.tick();
                    return Promise.resolve(c);
                }))
                .toArray(Promise[]::new);
        if (failFast) {
            return FlowPromise.all(promises).then(__ -> {
                context.progress.finish();
                return Promise.resolve(context);
            });
        } else {
            return FlowPromise.allSettled(promises).then(__ -> {
                context.progress.finish();
                return Promise.resolve(context);
            });
        }
    }

    // ------------------------------------------------------ run sequential

    private Promise<C> sequential() {
        return new Promise<C>((resolve, reject) -> {
            if (timeout > 0) {
                timeoutHandle = setTimeout(__ -> rejectWithTimeout(reject), timeout);
            }
            next(resolve, reject);
        }).then(c -> {
            context.progress.finish();
            return Promise.resolve(context);
        }).catch_(Promise::reject);
    }

    private void next(ResolveCallbackFn<C> resolve, RejectCallbackFn reject) {
        if (timedOut) {
            reject.onInvoke(TIMEOUT_ERROR);
        } else {
            iterator.next().apply(context)
                    .then(c -> {
                        if (timedOut) {
                            reject.onInvoke(TIMEOUT_ERROR);
                        } else {
                            if (iterator.hasNext()) {
                                c.progress.tick();
                                next(resolve, reject);
                            } else {
                                resolve.onInvoke(c);
                            }
                        }
                        return null;
                    })
                    .catch_(error -> {
                        if (failFast) {
                            reject.onInvoke(error);
                        } else {
                            if (iterator.hasNext()) {
                                context.progress.tick();
                                next(resolve, reject);
                            } else {
                                resolve.onInvoke(context);
                            }
                        }
                        return null;
                    });
        }
    }

    // ------------------------------------------------------ helper methods

    private void rejectWithTimeout(RejectCallbackFn reject) {
        clearTimeout(timeoutHandle);
        timedOut = true;
        reject.onInvoke(TIMEOUT_ERROR);
    }
}
