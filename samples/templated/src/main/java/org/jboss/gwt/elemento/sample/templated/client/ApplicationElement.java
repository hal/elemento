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

import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLInputElement;
import elemental2.dom.KeyboardEvent;
import org.elemento.Elements;
import org.elemento.IsElement;
import org.elemento.Key;
import org.jboss.gwt.elemento.sample.common.Application;
import org.jboss.gwt.elemento.sample.common.Filter;
import org.jboss.gwt.elemento.sample.common.TodoItem;
import org.jboss.gwt.elemento.sample.common.TodoItemRepository;
import org.elemento.template.DataElement;
import org.elemento.template.Templated;

import static org.elemento.EventType.bind;
import static org.elemento.EventType.change;
import static org.elemento.EventType.click;
import static org.elemento.EventType.keydown;

@SuppressWarnings("WeakerAccess")
@Templated("Todo.html#todos")
abstract class ApplicationElement implements IsElement<HTMLElement> {

    // @formatter:off
    static ApplicationElement create(TodoItemRepository repository) {
        return new Templated_ApplicationElement(repository);
    }

    abstract TodoItemRepository repository();
    // @formatter:on


    @DataElement HTMLInputElement newTodo;
    @DataElement HTMLElement main;
    @DataElement HTMLInputElement toggleAll;
    @DataElement HTMLElement list;
    @DataElement HTMLElement footer;
    @DataElement HTMLElement count;
    @DataElement("all") HTMLElement filterAll;
    @DataElement("active") HTMLElement filterActive;
    @DataElement("completed") HTMLElement filterCompleted;
    @DataElement HTMLButtonElement clearCompleted;
    Filter filter;

    @PostConstruct
    void init() {
        reset();
        repository().onExternalModification(this::reset);
    }

    private void reset() {
        Elements.removeChildrenFrom(list); // remove the sample items from the template
        for (TodoItem item : repository().items()) {
            list.appendChild(TodoItemElement.create(this, repository(), item).element());
        }
        update();

        bind(newTodo, keydown, this::newTodo);
        bind(toggleAll, change, e -> toggleAll());
        bind(clearCompleted, click, e -> clearCompleted());
    }

    void newTodo(KeyboardEvent event) {
        if (Key.Enter.match(event)) {
            String text = newTodo.value.trim();
            if (text.length() != 0) {
                TodoItem item = repository().add(text);
                list.appendChild(TodoItemElement.create(this, repository(), item).element());
                newTodo.value = "";
                update();
            }
        }
    }

    void toggleAll() {
        Application.toggleAll(list, toggleAll.checked);
        repository().completeAll(toggleAll.checked);
        update();
    }

    void clearCompleted() {
        repository().removeAll(Application.getCompleted(list));
        update();
    }

    void filter(String token) {
        filter = Filter.parseToken(token);
        Application.filter(filter, filterAll, filterActive, filterCompleted);
        update();
    }

    void update() {
        Application.update(filter, list, main, footer, toggleAll, count, clearCompleted);
    }
}
