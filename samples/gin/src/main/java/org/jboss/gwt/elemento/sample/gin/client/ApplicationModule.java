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
package org.jboss.gwt.elemento.sample.gin.client;

import com.google.gwt.inject.client.AbstractGinModule;
import com.google.inject.Provides;
import com.google.inject.Singleton;
import org.jboss.gwt.elemento.sample.common.I18n;
import org.jboss.gwt.elemento.sample.common.TodoConstants;
import org.jboss.gwt.elemento.sample.common.TodoItemRepository;
import org.jboss.gwt.elemento.sample.common.TodoMessages;

/**
 * @author Harald Pehl
 */
public class ApplicationModule extends AbstractGinModule {

    @Override
    protected void configure() {
        bind(ApplicationElement.class).toProvider(Templated_ApplicationElement_Provider.class).in(Singleton.class);
        bind(FooterElement.class).toProvider(Templated_FooterElement_Provider.class).in(Singleton.class);
        bind(TodoItemElement.class).toProvider(Templated_TodoItemElement_Provider.class);
    }

    @Provides
    I18n provideI18n(TodoConstants constants, TodoMessages messages) {
        return new I18n(constants, messages);
    }
}
