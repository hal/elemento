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
package org.jboss.gwt.elemento.core;

import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * Maps a class to a HTML template. The HTML template needs to contains {@code data-element} attributes which are used
 * to select and map elements between the HTML template and the annotated class.
 * <p>
 * if no value is provided, Elemento looks in the current package for a parallel ".html" template next to the annotated
 * class and use the first child of the `<body>` as root element. This can be overridden by specifying a template file
 * and/or selector:
 * <pre>
 * {@code @}Templated("Todos.html#todos")
 * abstract class Todos implements IsElement {
 *
 *     static Todos create() {
 *         return new Templated_Todos();
 *     }
 * }
 * </pre>
 * This maps to a HTML template called "Todos.html" in the current package and uses the root element which is returned
 * by the CSS selector {@code [data-element=todos]}.
 * <p>
 * The annotated class must be an abstract class which contains a static factory method. See <a
 * href="https://github.com/google/auto/tree/master/value#how-to-use-autovalue">Google AutoValue</a> for more details.
 *
 * @author Harald Pehl
 */
@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
public @interface Templated {

    String value() default "";
}
