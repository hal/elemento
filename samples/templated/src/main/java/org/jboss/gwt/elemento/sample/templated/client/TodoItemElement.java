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

import com.intendia.rxgwt.elemental2.RxElemental2;
import elemental2.dom.HTMLButtonElement;
import javax.annotation.PostConstruct;

import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLInputElement;
import elemental2.dom.KeyboardEvent;
import jsinterop.base.Js;
import org.jboss.gwt.elemento.core.DataElement;
import org.jboss.gwt.elemento.core.IsElement;
import org.jboss.gwt.elemento.core.Templated;
import org.jboss.gwt.elemento.sample.common.TodoItem;
import org.jboss.gwt.elemento.sample.common.TodoItemRepository;

@Templated("Todo.html#item")
abstract class TodoItemElement implements IsElement {

    // @formatter:off
    static TodoItemElement create(ApplicationElement application, TodoItemRepository repository, TodoItem item) {
        return new Templated_TodoItemElement(application, repository, item);
    }

    abstract ApplicationElement application();
    abstract TodoItemRepository repository();
    abstract TodoItem item();
    // @formatter:on


    @DataElement HTMLInputElement toggle;
    @DataElement HTMLElement label;
    @DataElement HTMLButtonElement destroy;
    @DataElement HTMLInputElement input;
    boolean escape;

    @PostConstruct
    void init() {
        asElement().dataset.set("item", item().id);
        if (item().completed) {
            asElement().classList.add("completed");
        }
        label.textContent = item().text;
        toggle.checked = item().completed;

        RxElemental2.fromEvent(toggle, RxElemental2.change).subscribe(e -> toggle());
        RxElemental2.fromEvent(label, RxElemental2.dblclick).subscribe(e -> edit());
        RxElemental2.fromEvent(destroy, RxElemental2.click).subscribe(e -> destroy());
        RxElemental2.fromEvent(input, RxElemental2.keydown).subscribe(e -> keyDown(Js.cast(e)));
        RxElemental2.fromEvent(input, RxElemental2.blur).subscribe(e -> blur());
    }

    void toggle() {
        if (toggle.checked) {
            asElement().classList.add("completed");
        } else {
            asElement().classList.remove("completed");
        }
        repository().complete(item(), toggle.checked);
        application().update();
    }

    void edit() {
        escape = false;
        asElement().classList.add("editing");
        input.value = label.textContent;
        input.focus();
    }

    void destroy() {
        asElement().parentNode.removeChild(asElement());
        repository().remove(item());
        application().update();
    }

    @SuppressWarnings("Duplicates")
    void keyDown(final KeyboardEvent event) {
        if ("Esc".equals(event.key)) {
            escape = true;
            asElement().classList.remove("editing");
        } else if ("Enter".equals(event.key)) {
            blur();
        }
    }

    void blur() {
        String value = input.value.trim();
        if (value.length() == 0) {
            destroy();
        } else {
            asElement().classList.remove("editing");
            if (!escape) {
                label.textContent = value;
                repository().rename(item(), value);
            }
        }
    }
}
