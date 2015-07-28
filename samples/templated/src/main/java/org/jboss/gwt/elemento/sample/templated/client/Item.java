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
import elemental.html.InputElement;
import org.jboss.gwt.elemento.core.DataElement;
import org.jboss.gwt.elemento.core.EventHandler;
import org.jboss.gwt.elemento.core.IsElement;
import org.jboss.gwt.elemento.core.Templated;

import javax.annotation.PostConstruct;

import static elemental.events.KeyboardEvent.KeyCode.ENTER;
import static elemental.events.KeyboardEvent.KeyCode.ESC;
import static org.jboss.gwt.elemento.core.EventType.*;

@Templated("Todo.html#item")
abstract class Item implements IsElement {

    static Item create(Todo parent, String text) {
        return new Templated_Item(parent, text);
    }

    abstract Todo parent();

    abstract String text();

    @DataElement InputElement toggle;
    @DataElement Element label;
    @DataElement InputElement input;
    boolean escape;

    @PostConstruct
    void init() {
        label.setInnerText(text());
    }

    @EventHandler(element = "toggle", on = change)
    void toggle() {
        if (toggle.isChecked()) {
            asElement().getClassList().add("completed");
        } else {
            asElement().getClassList().remove("completed");
        }
        parent().update();
    }

    @EventHandler(element = "label", on = dblclick)
    void edit() {
        escape = false;
        asElement().getClassList().add("editing");
        input.setValue(label.getInnerText());
        input.focus();
    }

    @EventHandler(element = "destroy", on = click)
    void destroy() {
        asElement().getParentElement().removeChild(asElement());
        parent().update();
    }

    @EventHandler(element = "input", on = keydown)
    void keyDown(final KeyboardEvent event) {
        if (event.getKeyCode() == ESC) {
            escape = true;
            asElement().getClassList().remove("editing");

        } else if (event.getKeyCode() == ENTER) {
            blur();
        }
    }

    @EventHandler(element = "input", on = blur)
    void blur() {
        String value = input.getValue().trim();
        if (value.length() == 0) {
            destroy();
        } else {
            asElement().getClassList().remove("editing");
            if (!escape) {
                label.setInnerText(value);
            }
        }
    }
}
