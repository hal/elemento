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
package org.jboss.gwt.elemento.template;

import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import org.jboss.gwt.elemento.core.IsElement;

/**
 * Declares a mapping between an element from an HTML template and the annotated field / method.
 * <p>
 * If no value is provided, the name of the field / method is taken as default. Elemento uses the
 * following CSS selector to pick elements from the HTML template {@code [data-element=<value()>]}
 * <p>
 * Can be applied to fields and methods. Those fields and methods must not be private. Elemento defines some simple
 * rules when it comes to mapping between the HTML template and the related class:
 * <dl>
 * <dt>Fields w/o an initializer</dt>
 * <dd>The element, its attributes and all children are mapped from the HTML template to the annotated field. The type
 * of the field is restricted to {@link elemental2.dom.HTMLElement} and its subclasses.</dd>
 * <dt>Fields w/ an initializer</dt>
 * <dd>The element in the HTML template is replaced with the initializer. The type of the field can be one of: {@link
 * elemental2.dom.HTMLElement}, {@link IsElement}, {@link com.google.gwt.user.client.ui.Widget}, or {@link
 * com.google.gwt.user.client.ui.IsWidget}.</dd>
 * <dt>Methods</dt>
 * <dd>The element in the HTML template is replaced with the return value of the method. The method must return one of:
 * {@link elemental2.dom.HTMLElement}, {@link IsElement}, {@link com.google.gwt.user.client.ui.Widget}, or {@link
 * com.google.gwt.user.client.ui.IsWidget} and must not have any parameters.</dd>
 * </dl>
 *
 * @author Harald Pehl
 */
@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.FIELD, ElementType.METHOD})
public @interface DataElement {

    /**
     * The value of the {@code data-element} attribute which is the name of the annotated field / method by default.
     */
    String value() default "";
}
