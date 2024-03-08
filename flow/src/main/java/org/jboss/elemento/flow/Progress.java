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
 * Interface to reflect the progress when executing a list of {@linkplain Task asynchronous tasks} in
 * {@linkplain Flow#parallel(FlowContext, List) parallel}, in {@linkplain Flow#sequential(FlowContext, List) sequence} or
 * {@linkplain Flow#repeat(FlowContext, Task) repeatedly} as long as certain conditions are met.
 * <p>
 * Implementations should use some kind of graphical indicators such as a spinner or
 * <a href="https://developer.mozilla.org/docs/Web/HTML/Element/progress">progress element</a>.
 */
public interface Progress {

    /**
     * Resets the progress indicator. Since now {@code max} value is given, the progress bar is indeterminate; this indicates
     * that an activity is ongoing with no indication of how long it is expected to take.
     */
    void reset();

    /**
     * Resets the progress indicator. The {@code max} parameter describes how many {@linkplain Task tasks} are going to be
     * executed.
     *
     * @param max the number of tasks executed
     */
    default void reset(int max) {
        reset(max, null);
    }

    /**
     * Resets the progress indicator. The {@code max} parameter describes how many {@linkplain Task tasks} are going to be
     * executed.
     *
     * @param max the number of tasks executed
     * @param label a description for the reset state
     */
    void reset(int max, String label);

    /**
     * Indicates progress.
     */
    default void tick() {
        tick(null);
    }

    /**
     * Indicates progress using a description.
     *
     * @param label a description of the progress
     */
    void tick(String label);

    /**
     * Indicates that the progress has been finished.
     */
    void finish();

    /**
     * Noop progress indicator that does nothing.
     */
    Progress NOOP = new Progress() {

        @Override
        public void reset() {
        }

        @Override
        public void reset(int max, String label) {
        }

        @Override
        public void tick(String label) {
        }

        @Override
        public void finish() {
        }
    };
}
