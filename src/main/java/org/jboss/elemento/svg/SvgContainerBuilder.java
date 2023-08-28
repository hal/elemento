/*
 *  Copyright 2022 Red Hat
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

import org.jboss.elemento.Container;
import org.jboss.elemento.Finder;
import org.jboss.elemento.HasElement;

import static java.util.Objects.requireNonNull;

/**
 * Builder for container-like SVG elements.
 * <p>
 * {@snippet class = SvgDemo region = svg}
 */
public class SvgContainerBuilder<E extends SVGElement>
        implements HasElement<E, SvgContainerBuilder<E>>, HasSvgElement<E, SvgContainerBuilder<E>>, Finder<E>,
        Container<E, SvgContainerBuilder<E>> {

    private final E element;

    public SvgContainerBuilder(E element) {
        this.element = requireNonNull(element, "element required");
    }

    @Override
    public SvgContainerBuilder<E> that() {
        return this;
    }

    @Override
    public E element() {
        return element;
    }
}