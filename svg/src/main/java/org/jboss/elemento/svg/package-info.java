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
 * Provides classes and interfaces for creating and manipulating SVG (Scalable Vector Graphics) elements using a fluent
 * builder API.
 *
 * <p>This package offers a type-safe, builder-based approach to working with SVG elements in GWT and J2CL applications.
 * It provides factory methods, element wrappers, and builder interfaces for common SVG elements and containers.
 *
 * <h2>Key Classes</h2>
 * <dl>
 * <dt>{@link org.jboss.elemento.svg.SVG}</dt>
 * <dd>Main entry point with static factory methods for creating SVG elements (svg, circle, rect, path, etc.)</dd>
 *
 * <dt>{@link org.jboss.elemento.svg.SVGElement}</dt>
 * <dd>Base interface for all SVG DOM elements, corresponding to the W3C SVGElement specification</dd>
 *
 * <dt>{@link org.jboss.elemento.svg.SVGElementBuilder}</dt>
 * <dd>Builder for simple SVG elements with methods for attributes, classes, events, and styling</dd>
 *
 * <dt>{@link org.jboss.elemento.svg.SVGContainerBuilder}</dt>
 * <dd>Builder for container-like SVG elements that can hold child elements</dd>
 * </dl>
 *
 * <p>Use the static methods in {@link org.jboss.elemento.svg.SVG} to create SVG elements:
 * {@snippet class = SVGDemo region = svg}
 *
 * <h2>Supported Elements</h2>
 * <p>The package provides factory methods for the following SVG elements:
 * <ul>
 * <li>{@code svg} - Root SVG container</li>
 * <li>{@code circle} - Circle shape</li>
 * <li>{@code ellipse} - Ellipse shape</li>
 * <li>{@code g} - Group container</li>
 * <li>{@code line} - Line shape</li>
 * <li>{@code path} - Path shape with complex curves and lines</li>
 * <li>{@code polygon} - Polygon shape</li>
 * <li>{@code rect} - Rectangle shape</li>
 * <li>{@code text} - Text element</li>
 * </ul>
 *
 * @see org.jboss.elemento.svg.SVG
 * @see org.jboss.elemento.svg.SVGElement
 * @see org.jboss.elemento.svg.SVGElementBuilder
 * @see org.jboss.elemento.svg.SVGContainerBuilder
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/SVG">MDN SVG Documentation</a>
 */
package org.jboss.elemento.svg;