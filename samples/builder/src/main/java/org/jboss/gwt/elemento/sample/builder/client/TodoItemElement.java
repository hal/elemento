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
import org.jboss.gwt.elemento.core.AttachableElement;
import org.jboss.gwt.elemento.core.Elements;
import org.jboss.gwt.elemento.core.IsElement;
import org.jboss.gwt.elemento.sample.common.TodoItem;
import org.jboss.gwt.elemento.sample.common.TodoItemRepository;

import static org.jboss.gwt.elemento.core.EventType.*;
import static org.jboss.gwt.elemento.core.InputType.checkbox;
import static org.jboss.gwt.elemento.core.InputType.text;

class TodoItemElement implements IsElement {

    private final TodoItem item;
    private final ApplicationElement application;
    private final TodoItemRepository repository;

    private final AttachableElement element;
    private final HTMLElement li;
    private final HTMLInputElement toggle;
    private final HTMLElement label;
    private final HTMLInputElement input;

    private boolean escape;

    TodoItemElement(final ApplicationElement application, final TodoItemRepository repository, final TodoItem item) {
        this.application = application;
        this.repository = repository;
        this.item = item;

        // @formatter:off
        Elements.Builder builder = new Elements.Builder()
        .li().css(item.completed ? "completed" : "").data("item", item.id)
            .div().css("view")
                .input(checkbox).on(change, event -> toggle()).rememberAs("toggle").css("toggle")
                .label().on(dblclick, event -> edit()).textContent(item.text).rememberAs("label").end()
                .button().on(click, event -> destroy()).css("destroy").end()
            .end()
            .input(text).on(keydown, this::keyDown).on(blur, event -> blur()).css("edit").rememberAs("input")
        .end();
        // @formatter:on

        this.element = builder.buildAttachable();
        this.li = element.asElement();
        this.toggle = builder.referenceFor("toggle");
        this.toggle.checked = item.completed;
        this.label = builder.referenceFor("label");
        this.input = builder.referenceFor("input");
    }

    @Override
    public HTMLElement asElement() {
        return li;
    }


    // ------------------------------------------------------ event handler

    private void toggle() {
        if (toggle.checked) {
            li.classList.add("completed");
        } else {
            li.classList.remove("completed");
        }
        repository.complete(item, toggle.checked);
        application.update();
    }

    private void edit() {
        escape = false;
        li.classList.add("editing");
        input.value = label.textContent;
        input.focus();
    }

    private void destroy() {
        li.parentNode.removeChild(li);
        element.detach();
        repository.remove(item);
        application.update();
    }

    private void keyDown(Event event) {
        KeyboardEvent keyboardEvent = (KeyboardEvent) event;
        if ("Escape".equals(keyboardEvent.code)) {
            escape = true;
            li.classList.remove("editing");

        } else if ("Enter".equals(keyboardEvent.key)) {
            blur();
        }
    }

    private void blur() {
        String value = input.value.trim();
        if (value.length() == 0) {
            destroy();
        } else {
            li.classList.remove("editing");
            if (!escape) {
                label.textContent = value;
                repository.rename(item, value);
            }
        }
    }
}
