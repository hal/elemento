/*
 * JBoss, Home of Professional Open Source.
 * Copyright 2010, Red Hat, Inc., and individual contributors
 * as indicated by the @author tags. See the copyright.txt file in the
 * distribution for a full listing of individual contributors.
 *
 * This is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation; either version 2.1 of
 * the License, or (at your option) any later version.
 *
 * This software is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this software; if not, write to the Free
 * Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA
 * 02110-1301 USA, or see the FSF site: http://www.fsf.org.
 */
package org.jboss.gwt.elemento.sample.templated.client;

import elemental.dom.Element;
import elemental.events.KeyboardEvent;
import elemental.html.ButtonElement;
import elemental.html.InputElement;
import org.jboss.gwt.elemento.core.DataElement;
import org.jboss.gwt.elemento.core.Elements;
import org.jboss.gwt.elemento.core.EventHandler;
import org.jboss.gwt.elemento.core.IsElement;
import org.jboss.gwt.elemento.core.Templated;
import org.jboss.gwt.elemento.sample.common.TodoItem;
import org.jboss.gwt.elemento.sample.common.TodoItemRepository;
import org.jboss.gwt.elemento.sample.common.TodoMessages;

import javax.annotation.PostConstruct;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

import static elemental.events.KeyboardEvent.KeyCode.ENTER;
import static org.jboss.gwt.elemento.core.EventType.*;
import static org.jboss.gwt.elemento.sample.templated.client.Filter.ACTIVE;
import static org.jboss.gwt.elemento.sample.templated.client.Filter.COMPLETED;

@Templated("Todo.html#todos")
abstract class AppElement implements IsElement {

    static AppElement create(TodoItemRepository repository, TodoMessages messages) {
        return new Templated_AppElement(repository, messages);
    }

    abstract TodoItemRepository repository();

    abstract TodoMessages messages();


    Filter filter;

    @DataElement InputElement newTodo;
    @DataElement Element main;
    @DataElement InputElement toggleAll;
    @DataElement Element list;
    @DataElement Element footer;
    @DataElement Element count;
    @DataElement("all") Element filterAll;
    @DataElement("active") Element filterActive;
    @DataElement("completed") Element filterCompleted;
    @DataElement ButtonElement clearCompleted;

    @PostConstruct
    void init() {
        Elements.removeChildrenFrom(list);
        for (TodoItem item : repository().items()) {
            list.appendChild(TodoItemElement.create(this, item, repository()).asElement());
        }
        update();
    }

    @EventHandler(element = "newTodo", on = keydown)
    void newTodo(KeyboardEvent event) {
        if (event.getKeyCode() == ENTER) {
            String text = newTodo.getValue().trim();
            if (text.length() != 0) {
                TodoItem item = repository().add(text);
                list.appendChild(TodoItemElement.create(this, item, repository()).asElement());
                newTodo.setValue("");
                update();
            }
        }
    }

    @EventHandler(element = "toggleAll", on = change)
    void toggleAll() {
        boolean checked = toggleAll.isChecked();
        for (Element li : Elements.children(list)) {
            if (checked) {
                li.getClassList().add("completed");
            } else {
                li.getClassList().remove("completed");
            }
            InputElement checkbox = (InputElement) li.getFirstElementChild().getFirstElementChild();
            checkbox.setChecked(checked);
        }
        repository().completeAll(checked);
        update();
    }

    @EventHandler(element = "clearCompleted", on = click)
    void clearCompleted() {
        Set<String> ids = new HashSet<>();
        for (Iterator<Element> iterator = Elements.iterator(list); iterator.hasNext(); ) {
            Element li = iterator.next();
            if (li.getClassList().contains("completed")) {
                String id = String.valueOf(li.getDataset().at("item"));
                if (id != null) {
                    ids.add(id);
                }
                iterator.remove();
            }
        }
        repository().removeAll(ids);
        update();
    }

    void filter(String token) {
        filter = Filter.parseToken(token);
        switch (filter) {
            case ALL:
                filterAll.getClassList().add("selected");
                filterActive.getClassList().remove("selected");
                filterCompleted.getClassList().remove("selected");
                break;
            case ACTIVE:
                filterAll.getClassList().remove("selected");
                filterActive.getClassList().add("selected");
                filterCompleted.getClassList().remove("selected");
                break;
            case COMPLETED:
                filterAll.getClassList().remove("selected");
                filterActive.getClassList().remove("selected");
                filterCompleted.getClassList().add("selected");
                break;
        }
        update();
    }

    void update() {
        int activeCount = 0;
        int completedCount = 0;
        int size = list.getChildElementCount();

        Elements.setVisible(main, size > 0);
        Elements.setVisible(footer, size > 0);
        for (Element li : Elements.children(list)) {
            if (li.getClassList().contains("completed")) {
                completedCount++;
                Elements.setVisible(li, filter != ACTIVE);
            } else {
                Elements.setVisible(li, filter != COMPLETED);
                activeCount++;
            }
        }
        toggleAll.setChecked(size == completedCount);
        Elements.innerHtml(count, messages().items(activeCount));
        Elements.setVisible(clearCompleted, completedCount != 0);
    }
}
