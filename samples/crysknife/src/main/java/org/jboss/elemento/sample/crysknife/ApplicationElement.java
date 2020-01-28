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
package org.jboss.elemento.sample.crysknife;

import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

import javax.annotation.PostConstruct;
import javax.inject.Inject;
import javax.inject.Singleton;

import elemental2.dom.Event;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLInputElement;
import elemental2.dom.HTMLUListElement;
import elemental2.dom.KeyboardEvent;
import elemental2.dom.MouseEvent;
import org.gwtproject.event.dom.client.KeyDownEvent;
import org.jboss.elemento.By;
import org.jboss.elemento.HtmlContentBuilder;
import org.jboss.elemento.Key;
import org.jboss.gwt.elemento.core.IsElement;
import org.treblereel.gwt.crysknife.annotation.DataField;
import org.treblereel.gwt.crysknife.annotation.EventHandler;
import org.treblereel.gwt.crysknife.annotation.ForEvent;
import org.treblereel.gwt.crysknife.annotation.Templated;

import static org.jboss.elemento.Elements.*;
import static org.jboss.elemento.EventType.bind;
import static org.jboss.elemento.EventType.change;
import static org.jboss.elemento.EventType.click;
import static org.jboss.elemento.EventType.keydown;
import static org.jboss.elemento.InputType.checkbox;
import static org.jboss.elemento.InputType.text;
import static org.jboss.elemento.sample.crysknife.Filter.ACTIVE;
import static org.jboss.elemento.sample.crysknife.Filter.COMPLETED;

@Singleton
@Templated("Todo.html")
public class ApplicationElement implements IsElement<HTMLElement> {

    private final TodoRepository repository;
    private Filter filter;

    @DataField HTMLInputElement newTodo;
    @DataField HTMLElement main;
    @DataField HTMLInputElement toggleAll;
    @DataField HTMLUListElement list;
    @DataField HTMLElement footer;
    @DataField HTMLElement count;
    @DataField("all") HTMLElement filterAll;
    @DataField("active") HTMLElement filterActive;
    @DataField("completed") HTMLElement filterCompleted;
    @DataField HTMLButtonElement clearCompleted;

    @Inject
    public ApplicationElement(TodoRepository repository) {
        this.repository = repository;
    }

    @PostConstruct
    void init() {
        reset();
        update();
    }

    // ------------------------------------------------------ event / token handler

    @EventHandler("newTodo")
    void newTodo(@ForEvent("keydown") KeyboardEvent event) {
        if (Key.Enter.match(event)) {
            String text = newTodo.value.trim();
            if (text.length() != 0) {
                Todo item = repository.add(text);
                list.appendChild(new TodoElement(this, repository, item).element());
                newTodo.value = "";
                update();
            }
        }
    }

    @EventHandler("newTodo")
    void toggleAll(@ForEvent("change") Event event) {
        for (HTMLElement li : children(list)) {
            toggle(li, "completed", toggleAll.checked);
            HTMLInputElement cb = find(li, By.classname("toggle"));
            if (cb != null) {
                cb.checked = toggleAll.checked;
            }
        }
        repository.completeAll(toggleAll.checked);
        update();
    }

    @EventHandler("newTodo")
    void clearCompleted(@ForEvent("click") Event event) {
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

    void filter(String token) {
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

    // ------------------------------------------------------ state update

    private void reset() {
        removeChildrenFrom(list);
        for (Todo item : repository.items()) {
            list.appendChild(new TodoElement(this, repository, item).element());
        }
    }

    void update() {
        int activeCount = 0;
        int completedCount = 0;
        int size = (int)list.childElementCount;

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
