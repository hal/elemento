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

import elemental2.dom.Element;
import elemental2.dom.HTMLElement;
import elemental2.promise.Promise;

import static elemental2.dom.DomGlobal.document;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.pre;
import static org.patternfly.component.card.Card.card;
import static org.patternfly.component.card.CardBody.cardBody;
import static org.patternfly.component.card.CardTitle.cardTitle;
import static org.patternfly.style.Classes.util;

class TasksElement implements IsElement<HTMLElement>, Logger {

    private final boolean randomFailure;
    private final boolean failFast;
    private final HTMLElement root;
    private final ProgressWrapper progress;
    private final HTMLElement body;

    TasksElement(final String mode, final boolean randomFailure, final boolean failFast) {
        this.randomFailure = randomFailure;
        this.failFast = failFast;
        this.root = card()
                .css("pf-u-min-width", "pf-u-min-height")
                .style("--pf-u-min-width--MinWidth: 250px;--pf-u-min-height--MinHeight: 285px")
                .addTitle(cardTitle(mode))
                .addBody(cardBody().noFill()
                        .add(progress = new ProgressWrapper()))
                .add(body = cardBody().element())
                .element();
    }

    @Override
    public HTMLElement element() {
        return root;
    }

    void parallel() {
        new Tasks(progress, this, randomFailure, failFast).parallel();
        progress.reset(Tasks.TASKS);
    }

    void sequential() {
        new Tasks(progress, this, randomFailure, failFast).sequential();
        progress.reset(Tasks.TASKS);
    }

    void repeat() {
        new Tasks(progress, this, randomFailure, failFast).repeat();
        progress.reset(Tasks.TASKS);
    }

    void nested() {
        new Tasks(progress, this, randomFailure, failFast).nested();
        progress.reset(3 * Tasks.TASKS);
    }

    // ------------------------------------------------------ logging

    @Override
    public void logStart(final String id, final String message) {
        div(body).add(pre().id(id)
                .css(util("font-size-sm"), util("color-300"), util("text-truncate"))
                .textContent(message));
    }

    @Override
    public void logEnd(final String id, final String message) {
        Element line = document.getElementById(id);
        if (line != null) {
            pre(line).textContent(line.textContent + message);
        }
    }

    @Override
    public void logFailure(final String id, final String message) {
        Element line = document.getElementById(id);
        if (line != null) {
            line.classList.remove("pf-u-color-300");
            pre(line).css(util("danger-color-200")).textContent(line.textContent + message);
        }
    }

    @Override
    public Promise<Void> finish(final FlowStatus status) {
        progress.status(status);
        return Promise.resolve((Void) null);
    }
}
