/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package org.jboss.elemento.router;

import java.lang.annotation.Documented;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

/**
 * This class is an annotation that can be used to decorate classes with routing information. It is used in conjunction with the
 * {@link PlaceManager} and {@link Page} interfaces to define routes within an application.
 *
 * <p>
 * Usage example:
 * </p>
 * {@code
 *
 * @Route(value = "/home", title = "Home Page", selector = "#app-home") public class HomePage implements Page { //
 * Implementation details... } }
 *
 * <p>
 * The {@code Route} annotation has the following attributes:
 * </p>
 * <ul>
 * <li>{@code value}: Specifies the URL that should match the route.</li>
 * <li>{@code title}: Specifies the title of the page associated with the route.</li>
 * <li>{@code selector}: Specifies the CSS selector that identifies the element whose child elements are replaced by the
 * elements of the page.</li>
 * </ul>
 *
 * <p>
 * The annotated class must implement the {@link Page} interface to be properly registered with the {@link PlaceManager}.
 * </p>
 */
@Documented
@Target(ElementType.TYPE)
@Retention(RetentionPolicy.RUNTIME)
public @interface Route {

    String value() default "";

    String title() default "";

    String selector() default "";

    String loader() default "";
}
