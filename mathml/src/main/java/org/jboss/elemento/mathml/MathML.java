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
package org.jboss.elemento.mathml;

import static elemental2.dom.DomGlobal.document;
import static jsinterop.base.Js.cast;

public final class MathML {

    // ------------------------------------------------------ elements

    public static MathMLContainerMethods<MathMLElement> mathml() {
        return mathMLContainer("mathml", MathMLElement.class);
    }

    // ------------------------------------------------------ factories & wrappers

    /** Returns a builder for the specified SVG element. */
    public static <E extends MathMLElement> MathMLElementBuilder<E> mathMLElement(String element, Class<E> type) {
        return new MathMLElementBuilder<>(createMathMLElement(element, type));
    }

    /** Returns a builder for the existing SVG element. */
    public static <E extends MathMLElement> MathMLElementBuilder<E> wrapMathMLElement(E element) {
        return new MathMLElementBuilder<>(element);
    }

    /** Returns a builder for the specified SVG container. */
    public static <E extends MathMLElement> MathMLContainerMethods<E> mathMLContainer(String element, Class<E> type) {
        return new MathMLContainerMethods<>(createMathMLElement(element, type));
    }

    /** Returns a builder for the existing SVG container. */
    public static <E extends MathMLElement> MathMLContainerMethods<E> wrapMathMLContainer(E element) {
        return new MathMLContainerMethods<>(element);
    }

    /** Creates the specified SVG element. */
    public static <E extends MathMLElement> E createMathMLElement(String element, Class<E> type) {
        return cast(document.createElementNS(MathMLElement.NAMESPACE, element));
    }

    // ------------------------------------------------------ instance

    // this is a static helper class, which must never be instantiated!
    private MathML() {
    }
}
