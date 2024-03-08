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

import java.util.List;

/**
 * An interface to control the {@linkplain Flow#parallel(FlowContext, List) parallel} and
 * {@linkplain Flow#sequential(FlowContext, List) sequential} execution of {@linkplain Task asynchronous tasks}.
 *
 * @param <C> the type of the {@linkplain FlowContext context} shared between tasks
 */
public interface Sequence<C extends FlowContext> extends Promisable<C>, Subscription<C> {

    /**
     * By default, the execution of {@linkplain Task tasks} fail fast.
     */
    boolean DEFAULT_FAIL_FAST = true;

    /**
     * By default, no timeout is used.
     */
    long DEFAULT_TIMEOUT = -1;

    /**
     * Whether the execution of {@linkplain Task tasks} should fail fast or fail last. Defaults to {@value DEFAULT_FAIL_FAST}.
     */
    Sequence<C> failFast(boolean failFast);

    /**
     * The timeout in milliseconds for the sequence. Defaults to no timeout ({@value #DEFAULT_TIMEOUT}).
     * <p>
     * Please note that this only applies to sequential flows. The timeout has no effect for parallel flows. The promise API
     * does not provide a method to cancel running promises.
     */
    Sequence<C> timeout(long timeout);
}
