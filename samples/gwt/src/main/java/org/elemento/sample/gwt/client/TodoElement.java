/*
 * Copyright 2015-2016 Red Hat, Inc, and individual contributors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.elemento.sample.gwt.client;

import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLInputElement;
import elemental2.dom.KeyboardEvent;
import elemental2.dom.MutationRecord;
import org.elemento.Attachable;
import org.elemento.IsElement;
import org.elemento.Key;
import org.gwtproject.event.shared.HandlerRegistration;
import org.gwtproject.event.shared.HandlerRegistrations;

import static org.elemento.Elements.input;
import static org.elemento.Elements.*;
import static org.elemento.EventType.*;
import static org.elemento.InputType.checkbox;
import static org.elemento.InputType.text;

class TodoElement implements IsElement<HTMLElement>, Attachable {

    private final Todo item;
    private final ApplicationElement application;
    private final TodoRepository repository;

    private final HTMLElement root;
    private final HTMLInputElement toggle;
    private final HTMLElement label;
    private final HTMLButtonElement destroy;
    private final HTMLInputElement summary;
    private HandlerRegistration handlerRegistration;

    private boolean escape;

    TodoElement(ApplicationElement application, TodoRepository repository, Todo item) {
        this.application = application;
        this.repository = repository;
        this.item = item;
        this.root = li().data("item", item.id)
                .add(div().css("view")
                        .add(toggle = input(checkbox).css("toggle").element())
                        .add(label = label().textContent(item.text).element())
                        .add(destroy = button().css("destroy").element()))
                .add(summary = input(text).css("edit").element()).element();
        this.root.classList.toggle("completed", item.completed);
        this.toggle.checked = item.completed;
        Attachable.register(this, this);
    }

    @Override
    public HTMLElement element() {
        return root;
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        handlerRegistration = HandlerRegistrations.compose(
                bind(toggle, change, ev -> toggle()),
                bind(label, dblclick, ev -> edit()),
                bind(destroy, click, ev -> destroy()),
                bind(summary, keydown, this::keyDown),
                bind(summary, blur, ev -> blur()));
    }

    @Override
    public void detach(MutationRecord mutationRecord) {
        if (handlerRegistration != null) {
            handlerRegistration.removeHandler();
        }
    }

    // ------------------------------------------------------ event handler

    private void toggle() {
        root.classList.toggle("completed", toggle.checked);
        repository.complete(item, toggle.checked);
        application.update();
    }

    private void edit() {
        escape = false;
        root.classList.add("editing");
        summary.value = label.textContent;
        summary.focus();
    }

    private void destroy() {
        root.parentNode.removeChild(root);
        handlerRegistration.removeHandler();
        repository.remove(item);
        application.update();
    }

    private void keyDown(KeyboardEvent event) {
        if (Key.Escape.match(event)) {
            escape = true;
            root.classList.remove("editing");
        } else if (Key.Enter.match(event)) {
            blur();
        }
    }

    private void blur() {
        String value = summary.value.trim();
        if (value.length() == 0) {
            destroy();
        } else {
            root.classList.remove("editing");
            if (!escape) {
                label.textContent = value;
                repository.rename(item, value);
            }
        }
    }
}
