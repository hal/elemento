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
/**
 * Provides support for creating and manipulating MathML (Mathematical Markup Language) elements using a fluent builder API.
 *
 * <h2>Overview</h2>
 * <p>
 * This package enables creation of MathML elements for rendering mathematical notation in web applications. MathML elements are
 * created using factory methods in the {@link org.jboss.elemento.mathml.MathML} class and follow the same fluent builder pattern
 * as HTML elements in Elemento's core package.
 *
 * <h2>Creating MathML Elements</h2>
 * <p>
 * Use the static methods in {@link org.jboss.elemento.mathml.MathML} to create MathML elements:
 *
 * {@snippet :
 * import static org.jboss.elemento.mathml.MathML.*;
 *
 * // Create a MathML element
 * MathMLElement element = mathml()
 *         .add(mi().text("x"))
 *         .add(mo().text("="))
 *         .add(mn().text("42"))
 *         .element();
 * }
 *
 * <h2>Builder API</h2>
 * <p>
 * The package provides two main builder types:
 * <ul>
 * <li>{@link org.jboss.elemento.mathml.MathMLElementBuilder} - for simple MathML elements
 * <li>{@link org.jboss.elemento.mathml.MathMLContainerMethods} - for container elements that can hold children
 * </ul>
 *
 * <p>
 * All builders support common operations through method interfaces like {@link org.jboss.elemento.mathml.MathMLElementStyleMethods}
 * for style manipulation and standard builder methods for element configuration.
 *
 * <h2>Element Creation</h2>
 * <p>
 * The {@link org.jboss.elemento.mathml.MathML} class provides factory methods for creating MathML elements:
 * <ul>
 * <li>{@link org.jboss.elemento.mathml.MathML#mathml()} - create the root {@code <math>} element
 * <li>{@link org.jboss.elemento.mathml.MathML#mathMLElement(String, Class)} - create any MathML element by tag name
 * <li>{@link org.jboss.elemento.mathml.MathML#mathMLContainer(String, Class)} - create a container MathML element
 * <li>{@link org.jboss.elemento.mathml.MathML#wrapMathMLElement(MathMLElement)} - wrap an existing MathML element
 * <li>{@link org.jboss.elemento.mathml.MathML#wrapMathMLContainer(MathMLElement)} - wrap an existing MathML container
 * </ul>
 *
 * <h2>MathML Namespace</h2>
 * <p>
 * All MathML elements are created in the MathML namespace ({@code http://www.w3.org/1998/Math/MathML}). The
 * {@link org.jboss.elemento.mathml.MathMLElement} class defines this namespace constant and provides access to common MathML
 * properties like {@code className}, {@code dataset}, {@code displaystyle}, {@code style}, and {@code tabIndex}.
 *
 * @see org.jboss.elemento.mathml.MathML
 * @see org.jboss.elemento.mathml.MathMLElement
 * @see org.jboss.elemento.mathml.MathMLElementBuilder
 * @see org.jboss.elemento.mathml.MathMLContainerMethods
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/MathML">MathML Reference</a>
 * @see <a href="https://www.w3.org/TR/mathml-core/">MathML Core Specification</a>
 */
package org.jboss.elemento.mathml;