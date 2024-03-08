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

/**
 * An interface to subscribe to the outcome of the execution of {@linkplain Task asynchronous tasks}.
 * <p>
 * <b>Error Handling</b><br/>
 * When using the methods in this interface, errors in tasks are caught and are stored in the {@linkplain FlowContext context}.
 * The context provides methods to check if the execution was {@linkplain FlowContext#successful() successful}, ran into a
 * {@linkplain FlowContext#timeout() timeout} or {@linkplain FlowContext#failure() failed} with an
 * {@linkplain FlowContext#failureReason() error}. This is different from the methods in {@link Promisable} that propagates
 * errors to the closest catch handler.
 *
 * @param <C> the type of the {@linkplain FlowContext context} shared between tasks
 */
public interface Subscription<C extends FlowContext> {

    /**
     * Subscribes to the outcome of the execution of {@linkplain Task asynchronous tasks}.
     */
    void subscribe(FlowCallback<C> callback);
}
