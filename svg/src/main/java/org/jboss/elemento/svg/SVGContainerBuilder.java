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

import org.jboss.elemento.ElementAttributeMethods;
import org.jboss.elemento.ElementClassListMethods;
import org.jboss.elemento.ElementConsumerMethods;
import org.jboss.elemento.ElementContainerMethods;
import org.jboss.elemento.ElementEventMethods;
import org.jboss.elemento.ElementIdMethods;
import org.jboss.elemento.ElementQueryMethods;
import org.jboss.elemento.ElementTextMethods;

import static java.util.Objects.requireNonNull;

/**
 * Builder for container-like SVG elements.
 * <p>
 * {@snippet class = SVGDemo region = svg}
 */
public class SVGContainerBuilder<E extends SVGElement> implements
        ElementAttributeMethods<E, SVGContainerBuilder<E>>,
        ElementClassListMethods<E, SVGContainerBuilder<E>>,
        ElementConsumerMethods<E, SVGContainerBuilder<E>>,
        ElementContainerMethods<E, SVGContainerBuilder<E>>,
        ElementEventMethods<E, SVGContainerBuilder<E>>,
        ElementIdMethods<E, SVGContainerBuilder<E>>,
        ElementQueryMethods<E>,
        ElementTextMethods<E, SVGContainerBuilder<E>>,
        SVGElementDataMethods<E, SVGContainerBuilder<E>>,
        SVGElementStyleMethods<E, SVGContainerBuilder<E>> {

    private final E element;

    public SVGContainerBuilder(E element) {
        this.element = requireNonNull(element, "element required");
    }

    @Override
    public SVGContainerBuilder<E> that() {
        return this;
    }

    @Override
    public E element() {
        return element;
    }
}
