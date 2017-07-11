/*
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
package org.jboss.gwt.elemento.template;

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
 */
@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
public @interface Templated {

    String value() default "";
}
