/*
 * Copyright 2015-2016 Red Hat, Inc, and individual contributors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.elemento.template;

import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

import org.elemento.widget.IsElement;

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
 * elemental2.dom.HTMLElement}, {@link IsElement}, {@code com.google.gwt.user.client.ui.Widget}, or {@code
 * com.google.gwt.user.client.ui.IsWidget}.</dd>
 * <dt>Methods</dt>
 * <dd>The element in the HTML template is replaced with the return value of the method. The method must return one of:
 * {@link elemental2.dom.HTMLElement}, {@link IsElement}, {@code com.google.gwt.user.client.ui.Widget}, or {@code
 * com.google.gwt.user.client.ui.IsWidget} and must not have any parameters.</dd>
 * </dl>
 */
@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.FIELD, ElementType.METHOD})
public @interface DataElement {

    /** The value of the {@code data-element} attribute which is the name of the annotated field / method by default. */
    String value() default "";
}
