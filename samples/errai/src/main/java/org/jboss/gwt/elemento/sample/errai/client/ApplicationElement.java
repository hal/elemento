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
package org.jboss.gwt.elemento.sample.errai.client;

import javax.inject.Inject;
import javax.inject.Singleton;

import elemental2.dom.Event;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLInputElement;
import org.jboss.gwt.elemento.core.Elements;
import org.jboss.gwt.elemento.core.IsElement;
import org.jboss.gwt.elemento.core.Key;
import org.jboss.gwt.elemento.sample.common.Application;
import org.jboss.gwt.elemento.sample.common.Constants;
import org.jboss.gwt.elemento.sample.common.Filter;
import org.jboss.gwt.elemento.sample.common.Messages;
import org.jboss.gwt.elemento.sample.common.TodoItem;
import org.jboss.gwt.elemento.sample.common.TodoItemRepository;

import static org.jboss.gwt.elemento.core.Elements.*;
import static org.jboss.gwt.elemento.core.EventType.bind;
import static org.jboss.gwt.elemento.core.EventType.change;
import static org.jboss.gwt.elemento.core.EventType.click;
import static org.jboss.gwt.elemento.core.EventType.keydown;
import static org.jboss.gwt.elemento.core.InputType.checkbox;
import static org.jboss.gwt.elemento.core.InputType.text;
import static org.jboss.gwt.elemento.sample.common.Filter.ACTIVE;
import static org.jboss.gwt.elemento.sample.common.Filter.ALL;
import static org.jboss.gwt.elemento.sample.common.Filter.COMPLETED;

@Singleton
@SuppressWarnings({"Duplicates", "CdiInjectionPointsInspection"})
public class ApplicationElement implements IsElement<HTMLElement> {

    private static HTMLElement filter(Filter f, String text) {
        return li().add(a().apply(a -> a.href = f.fragment()).textContent(text)).element();
    }

    private final TodoItemRepository repository;
    private Filter filter;

    private final HTMLElement root;
    private final HTMLInputElement newTodo;
    private final HTMLElement main;
    private final HTMLInputElement toggleAll;
    private final HTMLElement list;
    private final HTMLElement footer;
    private final HTMLElement count;
    private final HTMLElement filterAll;
    private final HTMLElement filterActive;
    private final HTMLElement filterCompleted;
    private final HTMLButtonElement clearCompleted;

    @Inject
    public ApplicationElement(TodoItemRepository repository) {
        this.repository = repository;

        this.root = section().css("todoapp")
                .add(header().css("header")
                        .add(h(1).textContent(Constants.TODOS))
                        .add(newTodo = input(text).css("new-todo").apply(input -> {
                            input.placeholder = Constants.NEW_TODO;
                            input.autofocus = true;
                        }).element()))
                .add(main = section().css("main")
                        .add(toggleAll = input(checkbox).css("toggle-all").id("toggle-all").element())
                        .add(label().attr("for", "toggle-all").textContent(Constants.COMPLETE_ALL))
                        .add(list = ul().css("todo-list").element())
                        .element())
                .add(footer = footer().css("footer")
                        .add(count = span().css("todo-count").innerHtml(Messages.items(0)).element())
                        .add(ul().css("filters")
                                .add(filterAll = filter(ALL, Constants.FILTER_ALL))
                                .add(filterActive = filter(ACTIVE, Constants.FILTER_ACTIVE))
                                .add(filterCompleted = filter(COMPLETED, Constants.FILTER_COMPLETED)))
                        .add(clearCompleted = button()
                                .css("clear-completed")
                                .textContent(Constants.CLEAR_COMPLETED)
                                .element())
                        .element())
                .element();

        bind(newTodo, keydown, this::newTodo);
        bind(toggleAll, change, event -> toggleAll());
        bind(clearCompleted, click, event -> clearCompleted());

        reset();
        repository.onExternalModification(this::reset);
    }

    private void reset() {
        Elements.removeChildrenFrom(list);
        for (TodoItem item : repository.items()) {
            list.appendChild(new TodoItemElement(this, repository, item).element());
        }
        update();
    }

    @Override
    public HTMLElement element() {
        return root;
    }


    // ------------------------------------------------------ event / token handler

    private void newTodo(Event event) {
        if (Key.Enter.match(event)) {
            String text = newTodo.value.trim();
            if (text.length() != 0) {
                TodoItem item = repository.add(text);
                list.appendChild(new TodoItemElement(this, repository, item).element());
                newTodo.value = "";
                update();
            }
        }
    }

    private void toggleAll() {
        Application.toggleAll(list, toggleAll.checked);
        repository.completeAll(toggleAll.checked);
        update();
    }

    private void clearCompleted() {
        repository.removeAll(Application.getCompleted(list));
        update();
    }

    void filter(String token) {
        filter = Filter.parseToken(token);
        Application.filter(filter, filterAll, filterActive, filterCompleted);
        update();
    }


    // ------------------------------------------------------ state update

    void update() {
        Application.update(filter, list, main, footer, toggleAll, count, clearCompleted);
    }
}
