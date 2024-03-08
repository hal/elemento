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

import elemental2.promise.IThenable;
import elemental2.promise.Promise;

abstract class FlowRunner<C extends FlowContext> implements Promisable<C>, Subscription<C> {

    static final String TIMEOUT_ERROR = "flow.timeout";

    final C context;

    protected FlowRunner(C context, int tasks) {
        this.context = context;
        if (tasks > 1) {
            this.context.progress.reset(tasks);
        } else {
            this.context.progress.reset();
        }
    }

    // ------------------------------------------------------ promisable API

    @Override
    public <V> Promise<V> then(IThenable.ThenOnFulfilledCallbackFn<? super C, ? extends V> onFulfilled) {
        return runAndCatch(true).then(onFulfilled);
    }

    @Override
    public <V> Promise<V> then(IThenable.ThenOnFulfilledCallbackFn<? super C, ? extends V> onFulfilled,
            IThenable.ThenOnRejectedCallbackFn<? extends V> onRejected) {
        return runAndCatch(true).then(onFulfilled, onRejected);
    }

    @Override
    public <V> Promise<V> catch_(Promise.CatchOnRejectedCallbackFn<? extends V> onRejected) {
        return runAndCatch(true).catch_(onRejected);
    }

    @Override
    public Promise<C> finally_(Promise.FinallyOnFinallyCallbackFn onFinally) {
        return runAndCatch(true).finally_(onFinally);
    }

    @Override
    public Promise<C> promise() {
        return runAndCatch(true);
    }

    // ------------------------------------------------------ subscription API

    @Override
    public void subscribe(FlowCallback<C> callback) {
        runAndCatch(false).then(c -> {
            callback.finish(c);
            return null;
        });
    }

    // ------------------------------------------------------ run

    Promise<C> runAndCatch(boolean rejectOnError) {
        context.status = FlowStatus.IN_PROGRESS;
        return run()
                .then(c -> {
                    c.status = FlowStatus.SUCCESS;
                    return Promise.resolve(c);
                })
                .catch_(error -> {
                    if (TIMEOUT_ERROR.equals(error)) {
                        context.status = FlowStatus.TIMEOUT;
                    } else {
                        context.status = FlowStatus.FAILURE;
                        context.failure = String.valueOf(error);
                    }
                    if (rejectOnError) {
                        return Promise.reject(error);
                    } else {
                        return Promise.resolve(context);
                    }
                });
    }

    abstract Promise<C> run();
}
