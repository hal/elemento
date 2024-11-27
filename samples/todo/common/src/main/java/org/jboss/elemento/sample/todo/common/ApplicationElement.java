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
package org.jboss.elemento.sample.todo.common;

import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

import org.jboss.elemento.By;
import org.jboss.elemento.HTMLContainerBuilder;
import org.jboss.elemento.IsElement;
import org.jboss.elemento.Key;

import elemental2.dom.Event;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLInputElement;
import elemental2.dom.HTMLUListElement;

import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.button;
import static org.jboss.elemento.Elements.children;
import static org.jboss.elemento.Elements.footer;
import static org.jboss.elemento.Elements.h;
import static org.jboss.elemento.Elements.header;
import static org.jboss.elemento.Elements.innerHtml;
import static org.jboss.elemento.Elements.input;
import static org.jboss.elemento.Elements.iterator;
import static org.jboss.elemento.Elements.label;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.querySelector;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.Elements.section;
import static org.jboss.elemento.Elements.setVisible;
import static org.jboss.elemento.Elements.span;
import static org.jboss.elemento.Elements.toggle;
import static org.jboss.elemento.Elements.ul;
import static org.jboss.elemento.EventType.bind;
import static org.jboss.elemento.EventType.change;
import static org.jboss.elemento.EventType.click;
import static org.jboss.elemento.EventType.keydown;
import static org.jboss.elemento.InputType.checkbox;
import static org.jboss.elemento.InputType.text;
import static org.jboss.elemento.sample.todo.common.Filter.ACTIVE;
import static org.jboss.elemento.sample.todo.common.Filter.COMPLETED;

public class ApplicationElement implements IsElement<HTMLElement> {

    private final TodoRepository repository;
    private Filter filter;

    private final HTMLElement root;
    private final HTMLInputElement newTodo;
    private final HTMLElement main;
    private final HTMLInputElement toggleAll;
    private final HTMLContainerBuilder<HTMLUListElement> list;
    private final HTMLElement footer;
    private final HTMLElement count;
    private final HTMLElement filterAll;
    private final HTMLElement filterActive;
    private final HTMLElement filterCompleted;
    private final HTMLButtonElement clearCompleted;

    public ApplicationElement(TodoRepository repository) {
        this.repository = repository;
        this.root = section().css("todoapp")
                .add(header().css("header")
                        .add(h(1).textContent("todos"))
                        .add(newTodo = input(text).css("new-todo")
                                .autofocus(true)
                                .placeholder("What needs to be done?")
                                .element()))
                .add(main = section().css("main")
                        .add(toggleAll = input(checkbox).css("toggle-all").id("toggle-all").element())
                        .add(label().apply(l -> l.htmlFor = "toggle-all").textContent("Mark all as complete"))
                        .add(list = ul().css("todo-list"))
                        .element())
                .add(footer = footer().css("footer")
                        .add(count = span().css("todo-count").innerHtml(Messages.items(0)).element())
                        .add(ul().css("filters")
                                .add(li().add(filterAll = a(Filter.ALL.fragment()).textContent("All").element()))
                                .add(li().add(filterActive = a(ACTIVE.fragment()).textContent("Active").element()))
                                .add(li().add(
                                        filterCompleted = a(COMPLETED.fragment()).textContent("Completed").element())))
                        .add(clearCompleted = button()
                                .css("clear-completed")
                                .textContent("Clear completed")
                                .element())
                        .element())
                .element();

        bind(newTodo, keydown, this::newTodo);
        bind(toggleAll, change, event -> toggleAll());
        bind(clearCompleted, click, event -> clearCompleted());
        reset();
        update();
    }

    private void reset() {
        removeChildrenFrom(list);
        for (Todo item : repository.items()) {
            list.add(new TodoElement(this, repository, item).element());
        }
    }

    @Override
    public HTMLElement element() {
        return root;
    }

    // ------------------------------------------------------ event / token handler

    public void filter(String token) {
        filter = Filter.parseToken(token);
        switch (filter) {
            case ALL:
                filterAll.classList.add("selected");
                filterActive.classList.remove("selected");
                filterCompleted.classList.remove("selected");
                break;
            case ACTIVE:
                filterAll.classList.remove("selected");
                filterActive.classList.add("selected");
                filterCompleted.classList.remove("selected");
                break;
            case COMPLETED:
                filterAll.classList.remove("selected");
                filterActive.classList.remove("selected");
                filterCompleted.classList.add("selected");
                break;
            default:
                break;
        }
        update();
    }

    private void newTodo(Event event) {
        if (Key.Enter.match(event)) {
            String text = newTodo.value.trim();
            if (!text.isEmpty()) {
                Todo item = repository.add(text);
                list.add(new TodoElement(this, repository, item));
                newTodo.value = "";
                update();
            }
        }
    }

    private void toggleAll() {
        for (HTMLElement li : children(list)) {
            toggle(li, "completed", toggleAll.checked);
            HTMLInputElement cb = querySelector(li, By.classname("toggle"));
            if (cb != null) {
                cb.checked = toggleAll.checked;
            }
        }
        repository.completeAll(toggleAll.checked);
        update();
    }

    private void clearCompleted() {
        Set<String> ids = new HashSet<>();
        for (Iterator<HTMLElement> iterator = iterator(list); iterator.hasNext(); ) {
            HTMLElement li = iterator.next();
            if (li.classList.contains("completed")) {
                String id = String.valueOf(li.dataset.get("item"));
                if (id != null) {
                    ids.add(id);
                }
                iterator.remove();
            }
        }
        repository.removeAll(ids);
        update();
    }

    // ------------------------------------------------------ state update

    void update() {
        int activeCount = 0;
        int completedCount = 0;
        int size = list.element().childElementCount;

        setVisible(main, size > 0);
        setVisible(footer, size > 0);
        for (HTMLElement li : children(list)) {
            if (li.classList.contains("completed")) {
                completedCount++;
                setVisible(li, filter != ACTIVE);
            } else {
                activeCount++;
                setVisible(li, filter != COMPLETED);
            }
        }
        toggleAll.checked = (size == completedCount);
        innerHtml(count, Messages.items(activeCount));
        setVisible(clearCompleted, completedCount != 0);
    }
}
