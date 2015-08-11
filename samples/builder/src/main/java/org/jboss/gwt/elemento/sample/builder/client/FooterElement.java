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
import org.jboss.gwt.elemento.core.Elements;
import org.jboss.gwt.elemento.core.IsElement;
import org.jboss.gwt.elemento.sample.common.I18n;
import org.jboss.gwt.elemento.sample.common.Urls;

public class FooterElement implements IsElement {

    private final I18n i18n;

    public FooterElement(final I18n i18n) {this.i18n = i18n;}

    @Override
    public Element asElement() {
        // @formatter:off
        return new Elements.Builder()
        .start("footer").css("info")
            .p().innerText(i18n.constants().double_click_to_edit()).end()
            .p()
                .span().innerText(i18n.constants().created_by() + " ").end()
                .a().attr("href", Urls.HPEHL_INFO).innerText("Harald Pehl").end()
            .end()
            .p()
                .span().innerText(i18n.constants().part_of() + " ").end()
                .a().attr("href", Urls.TODO_MVC).innerText("TodoMVC").end()
            .end()
        .end().build();
    }
}
