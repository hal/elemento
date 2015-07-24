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
package org.jboss.gwt.elemento.sample.client;

import com.google.gwt.core.client.GWT;
import com.google.gwt.safehtml.client.SafeHtmlTemplates;
import com.google.gwt.safehtml.shared.SafeHtml;
import com.google.gwt.user.client.Window;
import com.google.gwt.user.client.ui.HTML;
import com.google.gwt.user.client.ui.IsWidget;
import elemental.dom.Element;
import elemental.events.Event;
import org.jboss.gwt.elemento.core.DataElement;
import org.jboss.gwt.elemento.core.Elements;
import org.jboss.gwt.elemento.core.EventHandler;
import org.jboss.gwt.elemento.core.IsElement;
import org.jboss.gwt.elemento.core.Templated;

import javax.annotation.PostConstruct;

import static org.jboss.gwt.elemento.core.EventType.click;

/**
 * @author Harald Pehl
 */
@Templated("MainLayout.html#content")
public abstract class Content implements IsElement {

    interface Html extends SafeHtmlTemplates {

        @SafeHtmlTemplates.Template("content replaced by <code>{0}</code> @ {1}")
        SafeHtml content(String name, long at);
    }


    final static Html HTML = GWT.create(Html.class);

    public static Content create() {
        return new Templated_Content();
    }


    // ------------------------------------------------------ Element

    @DataElement Element turnToGreen;
    @DataElement Element elementHtmlToField;
    @DataElement Element elementFieldToHtml = new Elements.Builder().div().innerHtml(
            HTML.content("elementFieldToHtml", System.currentTimeMillis())).end().build();

    @DataElement
    Element elementMethodToHtml() {
        return new Elements.Builder().div().innerHtml(
                HTML.content("elementMethodToHtml", System.currentTimeMillis())).end().build();
    }


    // ------------------------------------------------------ IsElement

    @DataElement IsElement isElementFieldToHtml = () -> new Elements.Builder().div().innerHtml(
            HTML.content("isElementFieldToHtml", System.currentTimeMillis())).end().build();

    @DataElement
    IsElement isElementMethodToHtml() {
        return () -> new Elements.Builder().div().innerHtml(
                HTML.content("isElementMethodToHtml", System.currentTimeMillis())).end().build();
    }


    // ------------------------------------------------------ Widget

    @DataElement HTML widgetFieldToHtml = new HTML(
            HTML.content("widgetFieldToHtml", System.currentTimeMillis()));

    @DataElement
    HTML widgetMethodToHtml() {
        return new HTML(HTML.content("widgetMethodToHtml", System.currentTimeMillis()));
    }


    // ------------------------------------------------------ IsWidget

    @DataElement IsWidget isWidgetFieldToHtml = new HTML(
            HTML.content("isWidgetFieldToHtml", System.currentTimeMillis()));

    @DataElement
    IsWidget isWidgetMethodToHtml() {
        return new HTML(HTML.content("isWidgetMethodToHtml", System.currentTimeMillis()));
    }


    // ------------------------------------------------------ @PostConstruct and @EventHandler

    @PostConstruct
    void init() {
        turnToGreen.getStyle().setColor("#339933");
    }

    @EventHandler(element = "sayHello", on = click)
    void onSayHello(Event event) {
        Window.alert("Hello!");
    }
}
