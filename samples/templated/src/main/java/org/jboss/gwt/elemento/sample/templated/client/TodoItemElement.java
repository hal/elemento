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
package org.jboss.gwt.elemento.sample.templated.client;

import javax.annotation.PostConstruct;

import org.gwtproject.event.shared.HandlerRegistration;
import org.gwtproject.event.shared.HandlerRegistrations;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLInputElement;
import elemental2.dom.KeyboardEvent;
import org.jboss.gwt.elemento.core.IsElement;
import org.jboss.gwt.elemento.core.Key;
import org.jboss.gwt.elemento.sample.common.TodoItem;
import org.jboss.gwt.elemento.sample.common.TodoItemRepository;
import org.jboss.gwt.elemento.template.DataElement;
import org.jboss.gwt.elemento.template.Templated;

import static org.jboss.gwt.elemento.core.EventType.*;

@Templated("Todo.html#item")
abstract class TodoItemElement implements IsElement<HTMLElement> {

    // @formatter:off
    static TodoItemElement create(ApplicationElement application, TodoItemRepository repository, TodoItem item) {
        return new Templated_TodoItemElement(application, repository, item);
    }

    abstract ApplicationElement application();
    abstract TodoItemRepository repository();
    abstract TodoItem item();
    // @formatter:on


    @DataElement HTMLInputElement toggle;
    @DataElement HTMLElement label;
    @DataElement HTMLButtonElement destroy;
    @DataElement HTMLInputElement input;
    private HandlerRegistration handlerRegistration;
    private boolean escape;

    @PostConstruct
    void init() {
        asElement().dataset.set("item", item().id);
        if (item().completed) {
            asElement().classList.add("completed");
        }
        label.textContent = item().text;
        toggle.checked = item().completed;

        handlerRegistration = HandlerRegistrations.compose(
                bind(toggle, change, e -> toggle()),
                bind(label, dblclick, e -> edit()),
                bind(destroy, click, e -> destroy()),
                bind(input, keydown, this::keyDown),
                bind(input, blur, e -> blur()));
    }


    // ------------------------------------------------------ event handler

    private void toggle() {
        if (toggle.checked) {
            asElement().classList.add("completed");
        } else {
            asElement().classList.remove("completed");
        }
        repository().complete(item(), toggle.checked);
        application().update();
    }

    private void edit() {
        escape = false;
        asElement().classList.add("editing");
        input.value = label.textContent;
        input.focus();
    }

    private void destroy() {
        asElement().parentNode.removeChild(asElement());
        handlerRegistration.removeHandler();
        repository().remove(item());
        application().update();
    }

    @SuppressWarnings("Duplicates")
    private void keyDown(final KeyboardEvent event) {
        if (Key.Escape.match(event)) {
            escape = true;
            asElement().classList.remove("editing");

        } else if (Key.Enter.match(event)) {
            blur();
        }
    }

    private void blur() {
        String value = input.value.trim();
        if (value.length() == 0) {
            destroy();
        } else {
            asElement().classList.remove("editing");
            if (!escape) {
                label.textContent = value;
                repository().rename(item(), value);
            }
        }
    }
}
