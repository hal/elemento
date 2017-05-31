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
package org.jboss.gwt.elemento.sample.builder.client;

import elemental2.dom.Event;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLInputElement;
import elemental2.dom.KeyboardEvent;
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

    private final HTMLElement container;
    private final HTMLInputElement toggle;
    private final HTMLElement label;
    private final HTMLInputElement summary;

    private boolean escape;

    TodoItemElement(ApplicationElement application, TodoItemRepository repository, TodoItem item) {
        this.application = application;
        this.repository = repository;
        this.item = item;
        this.container = li().data("item", item.id)
                .add(div().css("view")
                        .add(toggle = input(checkbox).on(change, ev -> toggle()).css("toggle").asElement())
                        .add(label = label().on(dblclick, ev -> edit()).textContent(item.text).asElement())
                        .add(button().on(click, ev -> destroy()).css("destroy")))
                .add(summary = input(text).on(keydown, this::keyDown).on(blur, ev -> blur()).css("edit").asElement())
                .asElement();
        this.container.classList.toggle("completed", item.completed);
        this.toggle.checked = item.completed;
    }

    @Override
    public HTMLElement asElement() {
        return container;
    }


    // ------------------------------------------------------ event handler

    private void toggle() {
        container.classList.toggle("completed", toggle.checked);
        repository.complete(item, toggle.checked);
        application.update();
    }

    private void edit() {
        escape = false;
        container.classList.add("editing");
        summary.value = label.textContent;
        summary.focus();
    }

    private void destroy() {
        container.parentNode.removeChild(container);
        repository.remove(item);
        application.update();
    }

    private void keyDown(Event event) {
        KeyboardEvent keyboardEvent = (KeyboardEvent) event;
        if ("Escape".equals(keyboardEvent.code)) {
            escape = true;
            container.classList.remove("editing");

        } else if ("Enter".equals(keyboardEvent.key)) {
            blur();
        }
    }

    private void blur() {
        String value = summary.value.trim();
        if (value.length() == 0) {
            destroy();
        } else {
            container.classList.remove("editing");
            if (!escape) {
                label.textContent = value;
                repository.rename(item, value);
            }
        }
    }
}
