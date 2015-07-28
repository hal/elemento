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

import com.google.gwt.core.client.GWT;
import com.google.gwt.safehtml.client.SafeHtmlTemplates;
import com.google.gwt.safehtml.shared.SafeHtml;
import elemental.dom.Element;
import elemental.events.Event;
import elemental.events.KeyboardEvent;
import elemental.html.ButtonElement;
import elemental.html.InputElement;
import org.jboss.gwt.elemento.core.Elements;
import org.jboss.gwt.elemento.core.IsElement;

import java.util.Iterator;

import static elemental.events.KeyboardEvent.KeyCode.ENTER;
import static org.jboss.gwt.elemento.core.EventType.*;
import static org.jboss.gwt.elemento.core.InputType.checkbox;
import static org.jboss.gwt.elemento.core.InputType.text;
import static org.jboss.gwt.elemento.sample.builder.client.Todos.Filter.*;

class Todos implements IsElement {

    enum Filter {
        ALL("#/"), ACTIVE("#/active"), COMPLETED("#/completed");

        private final String fragment;

        Filter(final String fragment) {
            this.fragment = fragment;
        }

        String fragment() {
            return fragment;
        }

        String filter() {
            return name().toLowerCase();
        }

        public static Filter parseToken(final String token) {
            if (token == null) {
                return ALL;
            } else {
                switch (token) {
                    case "/":
                        return ALL;
                    case "/active":
                        return ACTIVE;
                    case "/completed":
                        return COMPLETED;
                    default:
                        return ALL;
                }
            }
        }
    }


    interface CountHtml extends SafeHtmlTemplates {

        @SafeHtmlTemplates.Template("<strong>{0}</strong> {1} left")
        SafeHtml items(int items, String text);
    }


    static final CountHtml COUNT_HTML = GWT.create(CountHtml.class);

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
    private Filter filter;

    Todos() {
        // @formatter:off
        Elements.Builder builder = new Elements.Builder()
        .start("section").css("todoapp")
            .header().css("header")
                .h(1).innerText("todos").end()
                .input(text)
                    .on(keydown, this::newTodo)
                    .rememberAs("newTodo")
                    .css("new-todo")
                    .attr("placeholder", "What needs to be done?")
                    .attr("autofocus", "autofocus")
            .end()
            .section().css("main").rememberAs("main")
                .input(checkbox).on(change, event -> toggleAll()).css("toggle-all").id("toggle-all").rememberAs("toggleAll")
                .label().attr("for", "toggle-all").innerText("Mark all as complete").end()
                .ul().css("todo-list").rememberAs("list").end()
            .end()
            .footer().css("footer").rememberAs("footer")
                .span().css("todo-count").rememberAs("count").innerHtml(COUNT_HTML.items(0, "items")).end()
                .ul().css("filters")
                    .li()
                        .a().attr("href", ALL.fragment()).innerText("All").rememberAs(ALL.filter()).end()
                    .end()
                    .li()
                        .a().attr("href", ACTIVE.fragment()).innerText("Active").rememberAs(ACTIVE.filter()).end()
                    .end()
                    .li()
                        .a().attr("href", COMPLETED.fragment()).innerText("Completed").rememberAs(COMPLETED.filter()).end()
                    .end()
                .end()
                .button().on(click, (event) -> clearCompleted()).css("clear-completed").rememberAs("clearCompleted")
                    .innerText("Clear completed")
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
            String label = newTodo.getValue().trim();
            if (label.length() != 0) {
                list.appendChild(new Item(this, label).asElement());
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
        update();
    }

    private void clearCompleted() {
        for (Iterator<Element> iterator = Elements.iterator(list); iterator.hasNext(); ) {
            Element li = iterator.next();
            if (li.getClassList().contains("completed")) {
                iterator.remove();
            }
        }
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
        Elements.innerHtml(count, COUNT_HTML.items(activeCount, (activeCount == 1 ? "item" : "items")));
        Elements.setVisible(clearCompleted, completedCount != 0);
    }
}
