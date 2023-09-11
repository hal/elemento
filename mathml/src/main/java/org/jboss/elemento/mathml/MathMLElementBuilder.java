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

import org.jboss.elemento.Finder;
import org.jboss.elemento.HasElement;

import static java.util.Objects.requireNonNull;

/**
 * Builder for simple SVG elements.
 * <p>
 * {@snippet class = MathMLDemo region = math}
 */
public class MathMLElementBuilder<E extends MathMLElement>
        implements HasElement<E, MathMLElementBuilder<E>>, HasMathMLElement<E, MathMLElementBuilder<E>>, Finder<E> {

    private final E element;

    public MathMLElementBuilder(E element) {
        this.element = requireNonNull(element, "element required");
    }

    @Override
    public MathMLElementBuilder<E> that() {
        return this;
    }

    @Override
    public E element() {
        return element;
    }
}
