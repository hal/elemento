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
package org.jboss.elemento.svg;

import static elemental2.dom.DomGlobal.document;
import static jsinterop.base.Js.cast;

public final class SVG {

    // ------------------------------------------------------ elements

    public static SVGContainerBuilder<SVGElement> svg() {
        return svgContainer("svg", SVGElement.class);
    }

    public static SVGContainerBuilder<SVGCircleElement> circle() {
        return svgContainer("circle", SVGCircleElement.class);
    }

    public static SVGContainerBuilder<SVGEllipseElement> ellipse() {
        return svgContainer("ellipse", SVGEllipseElement.class);
    }

    public static SVGContainerBuilder<SVGGElement> g() {
        return svgContainer("g", SVGGElement.class);
    }

    public static SVGContainerBuilder<SVGLineElement> line() {
        return svgContainer("line", SVGLineElement.class);
    }

    public static SVGContainerBuilder<SVGPathElement> path() {
        return svgContainer("path", SVGPathElement.class);
    }

    public static SVGContainerBuilder<SVGPolygonElement> polygon() {
        return svgContainer("polygon", SVGPolygonElement.class);
    }

    public static SVGContainerBuilder<SVGRectElement> rect() {
        return svgContainer("rect", SVGRectElement.class);
    }

    public static SVGContainerBuilder<SVGTextElement> text() {
        return svgContainer("text", SVGTextElement.class);
    }

    // ------------------------------------------------------ factories & wrappers

    /** Returns a builder for the specified SVG element. */
    public static <E extends SVGElement> SVGElementBuilder<E> svgElement(String element, Class<E> type) {
        return new SVGElementBuilder<>(createSvgElement(element, type));
    }

    /** Returns a builder for the existing SVG element. */
    public static <E extends SVGElement> SVGElementBuilder<E> wrapSvgElement(E element) {
        return new SVGElementBuilder<>(element);
    }

    /** Returns a builder for the specified SVG container. */
    public static <E extends SVGElement> SVGContainerBuilder<E> svgContainer(String element, Class<E> type) {
        return new SVGContainerBuilder<>(createSvgElement(element, type));
    }

    /** Returns a builder for the existing SVG container. */
    public static <E extends SVGElement> SVGContainerBuilder<E> wrapSvgContainer(E element) {
        return new SVGContainerBuilder<>(element);
    }

    /** Creates the specified SVG element. */
    public static <E extends SVGElement> E createSvgElement(String element, Class<E> type) {
        return cast(document.createElementNS(SVGElement.NAMESPACE, element));
    }

    // ------------------------------------------------------ instance

    // this is a static helper class, which must never be instantiated!
    private SVG() {
    }
}
