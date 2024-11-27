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
 * A callback for the outcome of the execution of {@linkplain Task asynchronous tasks}.
 * <p>
 * The context provides methods to check if the execution was {@linkplain FlowContext#isSuccessful() successful}, ran into a
 * {@linkplain FlowContext#isTimeout() timeout} or {@linkplain FlowContext#failure() failed} with an
 * {@linkplain FlowContext#failureReason() error}.
 *
 * @param <C> the type of the {@linkplain FlowContext context} shared between the tasks
 */
@FunctionalInterface
public interface FlowCallback<C extends FlowContext> {

    /**
     * Called when the execution of the {@linkplain Task asynchronous tasks} has been completed.
     * <p>
     * The context provides methods to check if the execution was {@linkplain FlowContext#isSuccessful() successful}, ran into a
     * {@linkplain FlowContext#isTimeout() timeout} or {@linkplain FlowContext#failure() failed} with an
     * {@linkplain FlowContext#failureReason() error}.
     *
     * @param context the context shared between the tasks
     */
    void finish(C context);
}
