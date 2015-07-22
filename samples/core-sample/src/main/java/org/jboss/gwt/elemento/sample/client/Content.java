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
import elemental.dom.Element;
import org.jboss.gwt.elemento.core.DataElement;
import org.jboss.gwt.elemento.core.Elements;
import org.jboss.gwt.elemento.core.IsElement;
import org.jboss.gwt.elemento.core.Templated;

import javax.annotation.PostConstruct;

/**
 * @author Harald Pehl
 */
@Templated("MainLayout.html#content")
public abstract class Content implements IsElement {

    interface ReplacedHtml extends SafeHtmlTemplates {

        @SafeHtmlTemplates.Template("content replaced by {0} <code>{1}</code> @ {2}")
        SafeHtml replaced(String kind, String name, long at);
    }


    final static ReplacedHtml HTML = GWT.create(ReplacedHtml.class);

    public static Content create() {
        return new Templated_Content();
    }

    @DataElement Element resolvedElement;
    @DataElement Element replacedFieldElement = new Elements.Builder().p().innerHtml(
            HTML.replaced("field", "replacedFieldElement", System.currentTimeMillis())).end().build();

    @DataElement
    Element replacedMethodElement() {
        return new Elements.Builder().p().innerHtml(
                HTML.replaced("method", "replacedMethodElement", System.currentTimeMillis())).end().build();
    }

    @DataElement IsElement resolvedIsElement;
    @DataElement IsElement replacedFieldIsElement = () -> new Elements.Builder().p().innerHtml(
            HTML.replaced("field", "replacedFieldIsElement", System.currentTimeMillis())).end().build();

    @DataElement
    IsElement replacedMethodIsElement() {
        return () -> new Elements.Builder().p().innerHtml(
                HTML.replaced("method", "replacedMethodIsElement", System.currentTimeMillis())).end().build();
    }

    @DataElement Element turnToGreen;

    @PostConstruct
    void init() {
        turnToGreen.getStyle().setColor("#339933");
    }
}
