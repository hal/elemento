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
package org.jboss.gwt.elemento.sample.gwtp.client;

import com.google.gwt.user.client.ui.IsWidget;
import com.gwtplatform.mvp.client.ViewImpl;
import elemental.client.Browser;
import elemental.dom.Element;
import elemental.events.Event;
import elemental.events.KeyboardEvent;
import elemental.html.ButtonElement;
import elemental.html.InputElement;
import org.jboss.gwt.elemento.core.DataElement;
import org.jboss.gwt.elemento.core.Elements;
import org.jboss.gwt.elemento.core.EventHandler;
import org.jboss.gwt.elemento.core.IsElement;
import org.jboss.gwt.elemento.core.Templated;
import org.jboss.gwt.elemento.sample.common.TodoMessages;

import javax.annotation.PostConstruct;
import java.util.Iterator;

import static elemental.events.KeyboardEvent.KeyCode.ENTER;
import static org.jboss.gwt.elemento.core.EventType.*;
import static org.jboss.gwt.elemento.sample.gwtp.client.ApplicationPresenter.SLOT_FOOTER_CONTENT;
import static org.jboss.gwt.elemento.sample.gwtp.client.ApplicationPresenter.SLOT_ITEM_CONTENT;
import static org.jboss.gwt.elemento.sample.gwtp.client.Filter.ACTIVE;
import static org.jboss.gwt.elemento.sample.gwtp.client.Filter.COMPLETED;

@Templated("Todo.html#todos")
public abstract class ApplicationView extends ViewImpl implements ApplicationPresenter.MyView, IsElement {

    public static ApplicationView create(TodoMessages messages) {
        return new Templated_ApplicationView(messages);
    }

    abstract TodoMessages messages();


    ApplicationPresenter presenter;
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
        initWidget(Elements.asWidget(asElement()));
    }

    @Override
    public void setPresenter(ApplicationPresenter presenter) {
        this.presenter = presenter;
    }

    @Override
    public void setInSlot(Object slot, IsWidget content) {
        if (slot == SLOT_FOOTER_CONTENT) {
            Element body = Browser.getDocument().getBody();
            body.insertBefore(Elements.asElement(content), body.getFirstElementChild());
        }
    }

    @Override
    public void addToSlot(Object slot, IsWidget content) {
        if (slot == SLOT_ITEM_CONTENT) {
            list.appendChild(Elements.asElement(content));
        }
    }

    @EventHandler(element = "newTodo", on = keydown)
    void newTodo(Event event) {
        KeyboardEvent keyboardEvent = (KeyboardEvent) event;
        if (keyboardEvent.getKeyCode() == ENTER) {
            String text = newTodo.getValue().trim();
            if (text.length() != 0) {
                presenter.newTodo(text);
                newTodo.setValue("");
            }
        }
    }

    @EventHandler(element = "toggleAll", on = change)
    void toggleAll() {
        presenter.toggleAll(toggleAll.isChecked());
    }

    @EventHandler(element = "clearCompleted", on = click)
    void clearCompleted() {
        for (Iterator<Element> iterator = Elements.iterator(list); iterator.hasNext(); ) {
            Element li = iterator.next();
            if (li.getClassList().contains("completed")) {
                iterator.remove();
            }
        }
        presenter.clearCompleted();
    }

    @Override
    public void filter(Filter filter) {
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
    }

    @Override
    public void update(Filter filter) {
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
