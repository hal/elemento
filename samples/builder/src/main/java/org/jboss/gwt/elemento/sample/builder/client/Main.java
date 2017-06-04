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

import com.google.gwt.core.client.EntryPoint;
import com.google.gwt.core.client.GWT;
import com.google.gwt.user.client.History;
import org.jboss.gwt.elemento.core.Elements;
import org.jboss.gwt.elemento.sample.common.I18n;
import org.jboss.gwt.elemento.sample.common.TodoConstants;
import org.jboss.gwt.elemento.sample.common.TodoItemRepository;
import org.jboss.gwt.elemento.sample.common.TodoMessages;

import static elemental2.dom.DomGlobal.document;

public class Main implements EntryPoint {

    private static final TodoConstants CONSTANTS = GWT.create(TodoConstants.class);
    private static final TodoMessages MESSAGES = GWT.create(TodoMessages.class);

    @Override
    public void onModuleLoad() {
        I18n i18n = new I18n(CONSTANTS, MESSAGES);
        TodoItemRepository repository = new TodoItemRepository();
        ApplicationElement application = new ApplicationElement(repository, i18n);
        FooterElement footer = new FooterElement(i18n);

        Elements.body().add(application).add(footer);

        History.addValueChangeHandler(event -> application.filter(event.getValue()));
        History.fireCurrentHistoryState();
    }
}
