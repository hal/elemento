/*
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
package org.jboss.gwt.elemento.sample.builder.client;

import elemental2.dom.Event;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLInputElement;
import elemental2.dom.KeyboardEvent;
import org.jboss.gwt.elemento.core.EventType;
import org.jboss.gwt.elemento.core.IsElement;
import org.jboss.gwt.elemento.sample.common.TodoItem;
import org.jboss.gwt.elemento.sample.common.TodoItemRepository;

import static org.jboss.gwt.elemento.core.Elements.*;
import static org.jboss.gwt.elemento.core.Elements.input;
import static org.jboss.gwt.elemento.core.EventType.*;
import static org.jboss.gwt.elemento.core.InputType.checkbox;
import static org.jboss.gwt.elemento.core.InputType.text;

class TodoItemElement implements IsElement {

    private final TodoItem item;
    private final ApplicationElement application;
    private final TodoItemRepository repository;

    private final HTMLElement root;
    private final HTMLInputElement toggle;
    private final HTMLElement label;
    private final HTMLButtonElement destroy;
    private final HTMLInputElement summary;

    private boolean escape;

    TodoItemElement(ApplicationElement application, TodoItemRepository repository, TodoItem item) {
        this.application = application;
        this.repository = repository;
        this.item = item;
        this.root = li().data("item", item.id)
                .add(div().css("view")
                        .add(toggle = input(checkbox).css("toggle").asElement())
                        .add(label = label().textContent(item.text).asElement())
                        .add(destroy = button().css("destroy").asElement()))
                .add(summary = input(text).css("edit").asElement())
                .asElement();
        this.root.classList.toggle("completed", item.completed);
        this.toggle.checked = item.completed;

        EventType.bind(toggle, change, ev -> toggle());
        EventType.bind(label, dblclick, ev -> edit());
        EventType.bind(destroy, click, ev -> destroy());
        EventType.bind(summary, keydown, this::keyDown);
        EventType.bind(summary, blur, ev -> blur());
    }

    @Override
    public HTMLElement asElement() {
        return root;
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
        repository.remove(item);
        application.update();
    }

    private void keyDown(Event event) {
        KeyboardEvent keyboardEvent = (KeyboardEvent) event;
        if ("Escape".equals(keyboardEvent.code)) {
            escape = true;
            root.classList.remove("editing");

        } else if ("Enter".equals(keyboardEvent.key)) {
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
