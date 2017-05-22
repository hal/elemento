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

import com.google.inject.Provider;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLInputElement;
import elemental2.dom.KeyboardEvent;
import org.jboss.gwt.elemento.core.IsElement;
import org.jboss.gwt.elemento.sample.common.TodoItem;
import org.jboss.gwt.elemento.sample.common.TodoItemRepository;
import org.jboss.gwt.elemento.template.DataElement;
import org.jboss.gwt.elemento.template.Templated;

import static org.jboss.gwt.elemento.core.EventType.*;

@Templated("Todo.html#item")
abstract class TodoItemElement implements IsElement {

    // @formatter:off
    // Don't use ApplicationElement directly as this will lead to a dependency cycle in the generated GIN code!
    static TodoItemElement create(Provider<ApplicationElement> application, TodoItemRepository repository) {
        return new Templated_TodoItemElement(application, repository);
    }

    abstract Provider<ApplicationElement> application();
    abstract TodoItemRepository repository();
    // @formatter:on


    @DataElement HTMLInputElement toggle;
    @DataElement HTMLElement label;
    @DataElement HTMLElement destroy;
    @DataElement HTMLInputElement input;
    private TodoItem item;
    private boolean escape;

    // @PostConstruct not possible here since the TodoItem is not injectable!
    void init(TodoItem item) {
        this.item = item;
        asElement().dataset.set("item", item.id);
        if (item.completed) {
            asElement().classList.add("completed");
        }
        label.textContent = item.text;
        toggle.checked = item.completed;

        bind(toggle, change, e -> toggle());
        bind(label, dblclick, e -> edit());
        bind(destroy, click, e -> destroy());
        bind(input, keydown, this::keyDown);
        bind(input, blur, e -> blur());
    }

    // ------------------------------------------------------ event handler

    private void toggle() {
        if (toggle.checked) {
            asElement().classList.add("completed");
        } else {
            asElement().classList.remove("completed");
        }
        repository().complete(item, toggle.checked);
        application().get().update();
    }

    private void edit() {
        escape = false;
        asElement().classList.add("editing");
        input.value = label.textContent;
        input.focus();
    }

    private void destroy() {
        asElement().parentNode.removeChild(asElement());
        repository().remove(item);
        application().get().update();
    }

    @SuppressWarnings("Duplicates")
    private void keyDown(final KeyboardEvent event) {
        if ("Esc".equals(event.key)) {
            escape = true;
            asElement().classList.remove("editing");
        } else if ("Enter".equals(event.key)) {
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
                repository().rename(item, value);
            }
        }
    }
}
