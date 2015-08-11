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

import elemental.dom.Element;
import elemental.events.Event;
import elemental.events.KeyboardEvent;
import elemental.html.ButtonElement;
import elemental.html.InputElement;
import org.jboss.gwt.elemento.core.Elements;
import org.jboss.gwt.elemento.core.IsElement;
import org.jboss.gwt.elemento.sample.common.I18n;
import org.jboss.gwt.elemento.sample.common.TodoItem;
import org.jboss.gwt.elemento.sample.common.TodoItemRepository;

import java.util.HashSet;
import java.util.Iterator;
import java.util.Set;

import static elemental.events.KeyboardEvent.KeyCode.ENTER;
import static org.jboss.gwt.elemento.core.EventType.*;
import static org.jboss.gwt.elemento.core.InputType.checkbox;
import static org.jboss.gwt.elemento.core.InputType.text;
import static org.jboss.gwt.elemento.sample.builder.client.Filter.*;

class ApplicationElement implements IsElement {

    private final Element root;
    private final InputElement newTodo;
    private final Element main;
    private final InputElement toggleAll;
    private final Element list;
    private final Element footer;
    private final Element count;
    private final Element filterAll;
    private final Element filterActive;
    private final Element filterCompleted;
    private final ButtonElement clearCompleted;

    private final TodoItemRepository repository;
    private final I18n i18n;
    private Filter filter;

    ApplicationElement(TodoItemRepository repository, I18n i18n) {
        this.repository = repository;
        this.i18n = i18n;

        // @formatter:off
        Elements.Builder builder = new Elements.Builder()
        .section().css("todoapp")
            .header().css("header")
                .h(1).innerText(i18n.constants().todos()).end()
                .input(text)
                    .on(keydown, this::newTodo)
                    .rememberAs("newTodo")
                    .css("new-todo")
                    .attr("placeholder", i18n.constants().new_todo())
                    .attr("autofocus", "autofocus")
            .end()
            .section().css("main").rememberAs("main")
                .input(checkbox).on(change, event -> toggleAll()).css("toggle-all").id("toggle-all").rememberAs("toggleAll")
                .label().attr("for", "toggle-all").innerText(i18n.constants().complete_all()).end()
                .ul().css("todo-list").rememberAs("list").end()
            .end()
            .footer().css("footer").rememberAs("footer")
                .span().css("todo-count").rememberAs("count").innerHtml(i18n.messages().items(0)).end()
                .ul().css("filters")
                    .li()
                        .a()
                            .attr("href", ALL.fragment())
                            .innerText(i18n.constants().filter_all())
                            .rememberAs(ALL.filter())
                        .end()
                    .end()
                    .li()
                        .a()
                            .attr("href", ACTIVE.fragment())
                            .innerText(i18n.constants().filter_active())
                            .rememberAs(ACTIVE.filter())
                        .end()
                    .end()
                    .li()
                        .a()
                            .attr("href", COMPLETED.fragment())
                            .innerText(i18n.constants().filter_completed())
                            .rememberAs(COMPLETED.filter())
                        .end()
                    .end()
                .end()
                .button().on(click, (event) -> clearCompleted()).css("clear-completed").rememberAs("clearCompleted")
                    .innerText(i18n.constants().clear_completed())
                .end()
            .end()
        .end();
        // @formatter:on

        this.root = builder.build();
        this.newTodo = builder.referenceFor("newTodo");
        this.main = builder.referenceFor("main");
        this.toggleAll = builder.referenceFor("toggleAll");
        this.list = builder.referenceFor("list");
        this.footer = builder.referenceFor("footer");
        this.count = builder.referenceFor("count");
        this.filterAll = builder.referenceFor(ALL.filter());
        this.filterActive = builder.referenceFor(ACTIVE.filter());
        this.filterCompleted = builder.referenceFor(COMPLETED.filter());
        this.clearCompleted = builder.referenceFor("clearCompleted");

        reset();
        repository.onExternalModification(this::reset);
    }

    private void reset() {
        Elements.removeChildrenFrom(list);
        for (TodoItem item : repository.items()) {
            list.appendChild(new TodoItemElement(this, repository, item).asElement());
        }
        update();
    }

    @Override
    public Element asElement() {
        return root;
    }


    // ------------------------------------------------------ event / token handler

    private void newTodo(Event event) {
        KeyboardEvent keyboardEvent = (KeyboardEvent) event;
        if (keyboardEvent.getKeyCode() == ENTER) {
            String text = newTodo.getValue().trim();
            if (text.length() != 0) {
                TodoItem item = repository.add(text);
                list.appendChild(new TodoItemElement(this, repository, item).asElement());
                newTodo.setValue("");
                update();
            }
        }
    }

    private void toggleAll() {
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
        repository.completeAll(checked);
        update();
    }

    private void clearCompleted() {
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
        repository.removeAll(ids);
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


    // ------------------------------------------------------ state update

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
        Elements.innerHtml(count, i18n.messages().items(activeCount));
        Elements.setVisible(clearCompleted, completedCount != 0);
    }
}
