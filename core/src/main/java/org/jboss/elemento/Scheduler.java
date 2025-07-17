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
package org.jboss.elemento;

import static elemental2.dom.DomGlobal.clearTimeout;
import static elemental2.dom.DomGlobal.setTimeout;

public final class Scheduler {

    /**
     * Executes the given callback after a specified timeout. If this method is called multiple times within the specified
     * timeout period, the original callback will only be executed once at the end of the timeout.
     *
     * @param timeout  The timeout value in milliseconds.
     * @param callback The callback function to execute.
     * @return A new callback function that debounces the original callback.
     */
    public static Callback debounce(int timeout, Callback callback) {
        double[] handle = new double[1];
        return () -> {
            clearTimeout(handle[0]);
            handle[0] = setTimeout(__ -> callback.call(), timeout);
        };
    }
}
