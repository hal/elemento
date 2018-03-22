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
package org.jboss.gwt.elemento.sample.dagger.client;

import javax.annotation.PostConstruct;
import javax.inject.Provider;

import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLInputElement;
import elemental2.dom.KeyboardEvent;
import org.jboss.gwt.elemento.core.Elements;
import org.jboss.gwt.elemento.core.IsElement;
import org.jboss.gwt.elemento.core.Key;
import org.jboss.gwt.elemento.sample.common.Application;
import org.jboss.gwt.elemento.sample.common.Filter;
import org.jboss.gwt.elemento.sample.common.TodoItem;
import org.jboss.gwt.elemento.sample.common.TodoItemRepository;
import org.jboss.gwt.elemento.template.DataElement;
import org.jboss.gwt.elemento.template.Templated;

import static elemental2.dom.DomGlobal.console;
import static org.jboss.gwt.elemento.core.EventType.bind;
import static org.jboss.gwt.elemento.core.EventType.change;
import static org.jboss.gwt.elemento.core.EventType.click;
import static org.jboss.gwt.elemento.core.EventType.keydown;

@Templated("Todo.html#todos")
@SuppressWarnings({"WeakerAccess", "unused"})
abstract class ApplicationElement implements IsElement<HTMLElement> {

    // @formatter:off
    static ApplicationElement create(TodoItemRepository repository, Provider<TodoItemElement> itemElement) {
        return new Templated_ApplicationElement(repository, itemElement);
    }

    abstract TodoItemRepository repository();
    abstract Provider<TodoItemElement> itemElement();
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
        console.log("Reset todos in gin-sample");
        Elements.removeChildrenFrom(list);
        for (TodoItem item : repository().items()) {
            TodoItemElement itemElement = itemElement().get();
            itemElement.init(item);
            list.appendChild(itemElement.asElement());
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
                TodoItemElement itemElement = itemElement().get();
                itemElement.init(item);
                list.appendChild(itemElement.asElement());
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
