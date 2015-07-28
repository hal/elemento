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
import elemental.html.InputElement;
import org.jboss.gwt.elemento.core.Elements;
import org.jboss.gwt.elemento.core.InputType;
import org.jboss.gwt.elemento.core.IsElement;

import static elemental.events.KeyboardEvent.KeyCode.ENTER;
import static elemental.events.KeyboardEvent.KeyCode.ESC;
import static org.jboss.gwt.elemento.core.EventType.*;
import static org.jboss.gwt.elemento.core.InputType.checkbox;

class Item implements IsElement {

    private final Todos parent;
    private final Element li;
    private final InputElement toggle;
    private final Element label;
    private final InputElement input;
    private boolean escape;

    Item(Todos parent, String text) {
        // @formatter:off
        Elements.Builder builder = new Elements.Builder()
        .li()
            .div().css("view")
                .input(checkbox).on(change, event -> toggle()).rememberAs("toggle").css("toggle")
                .label().on(dblclick, (event) -> edit()).innerText(text).rememberAs("label").end()
                .button().on(click, (event) -> destroy()).css("destroy").end()
            .end()
            .input(InputType.text).on(keydown, this::keyDown).on(blur, event -> blur()).css("edit").rememberAs("input")
        .end();
        // @formatter:on

        this.parent = parent;
        this.li = builder.build();
        this.toggle = builder.referenceFor("toggle");
        this.label = builder.referenceFor("label");
        this.input = builder.referenceFor("input");
    }

    @Override
    public Element asElement() {
        return li;
    }


    // ------------------------------------------------------ event handler

    private void toggle() {
        if (toggle.isChecked()) {
            li.getClassList().add("completed");
        } else {
            li.getClassList().remove("completed");
        }
        parent.update();
    }

    private void edit() {
        escape = false;
        li.getClassList().add("editing");
        input.setValue(label.getInnerText());
        input.focus();
    }

    private void destroy() {
        li.getParentElement().removeChild(li);
        parent.update();
    }

    private void keyDown(Event event) {
        KeyboardEvent keyboardEvent = (KeyboardEvent) event;
        if (keyboardEvent.getKeyCode() == ESC) {
            escape = true;
            li.getClassList().remove("editing");

        } else if (keyboardEvent.getKeyCode() == ENTER) {
            blur();
        }
    }

    private void blur() {
        String value = input.getValue().trim();
        if (value.length() == 0) {
            destroy();
        } else {
            li.getClassList().remove("editing");
            if (!escape) {
                label.setInnerText(value);
            }
        }
    }
}
