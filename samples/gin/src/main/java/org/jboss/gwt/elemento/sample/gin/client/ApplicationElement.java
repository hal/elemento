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
package org.jboss.gwt.elemento.sample.gin.client;

import javax.annotation.PostConstruct;

import com.google.inject.Provider;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLInputElement;
import elemental2.dom.KeyboardEvent;
import org.jboss.gwt.elemento.core.DataElement;
import org.jboss.gwt.elemento.core.Elements;
import org.jboss.gwt.elemento.core.IsElement;
import org.jboss.gwt.elemento.core.Templated;
import org.jboss.gwt.elemento.sample.common.Application;
import org.jboss.gwt.elemento.sample.common.Filter;
import org.jboss.gwt.elemento.sample.common.I18n;
import org.jboss.gwt.elemento.sample.common.TodoItem;
import org.jboss.gwt.elemento.sample.common.TodoItemRepository;

import static org.jboss.gwt.elemento.core.EventType.bind;
import static org.jboss.gwt.elemento.core.EventType.change;
import static org.jboss.gwt.elemento.core.EventType.click;
import static org.jboss.gwt.elemento.core.EventType.keydown;

@Templated("Todo.html#todos")
@SuppressWarnings("WeakerAccess")
abstract class ApplicationElement implements IsElement {

    // @formatter:off
    static ApplicationElement create(TodoItemRepository repository, I18n i18n, Provider<TodoItemElement> itemElement) {
        return new Templated_ApplicationElement(repository, i18n, itemElement);
    }

    abstract TodoItemRepository repository();
    abstract I18n i18n();
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
        DomGlobal.window.console.log("Reset todos in gin-sample");
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
        if ("Enter".equals(event.key)) {
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
        Application.update(filter, i18n(), list, main, footer, toggleAll, count, clearCompleted);
    }
}
