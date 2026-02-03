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
package org.jboss.elemento.sample.flow;

import org.jboss.elemento.IsElement;
import org.jboss.elemento.flow.FlowStatus;
import org.patternfly.component.tooltip.Tooltip;

import elemental2.dom.HTMLElement;

import static org.jboss.elemento.Elements.failSafeRemoveFromParent;
import static org.patternfly.component.progress.MeasureLocation.none;
import static org.patternfly.component.progress.Progress.progress;
import static org.patternfly.component.tooltip.Tooltip.tooltip;
import static org.patternfly.style.Size.sm;
import static org.patternfly.style.Status.danger;
import static org.patternfly.style.Status.info;
import static org.patternfly.style.Status.success;
import static org.patternfly.style.Status.warning;

class ProgressWrapper implements org.jboss.elemento.flow.Progress, IsElement<HTMLElement> {

    private final org.patternfly.component.progress.Progress progress;
    private int value;
    private int total;
    private Tooltip tooltip;

    ProgressWrapper() {
        progress = progress().size(sm).measureLocation(none);
    }

    @Override
    public HTMLElement element() {
        return progress.element();
    }

    @Override
    public void reset() {
        reset(0);
    }

    @Override
    public void reset(final int max, final String label) {
        value = 0;
        total = max;
        progress.range(0, max);
        failSafeRemoveFromParent(tooltip);
    }

    @Override
    public void tick(final String label) {
        if (value < total) {
            value++;
            progress.value(value);
        }
    }

    @Override
    public void finish() {
        progress.value(total);
    }

    public void status(FlowStatus status) {
        switch (status) {
            case NOT_STARTED, IN_PROGRESS:
                progress.status(info);
                break;
            case SUCCESS:
                progress.status(success);
                tooltip(element(), "Finished").appendToBody();
                break;
            case TIMEOUT:
                progress.status(warning);
                tooltip(element(), "Timeout").appendToBody();
                break;
            case FAILURE:
                progress.status(danger);
                tooltip(element(), "Failure").appendToBody();
                break;
        }
    }
}
