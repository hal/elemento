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

import elemental2.promise.Promise;

/**
 * Interface for the execution of an asynchronous task.
 * <p>
 * Task implementations can use {@link FlowContext#resolve()}, {@link FlowContext#resolve(Object)} and
 * {@link FlowContext#resolve(String, Object)} as a shortcut to push or put a value on the stack or the map and return a
 * resolved promise.
 * <p>
 * In case of an error task implementations can use {@link FlowContext#reject(Object)} to return a rejected promise. Rejected
 * promises are caught by the enclosing {@link Flow} methods and returned as a resolved promise.
 *
 * @param <C> the type of the {@linkplain FlowContext context} shared between tasks
 */
@FunctionalInterface
public interface Task<C extends FlowContext> {

    /**
     * Executes the task.
     *
     * @param context the context shared between tasks
     * @return a promise containing the shared context
     */
    Promise<C> apply(C context);
}
