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

import org.jboss.elemento.IsElement;
import org.jboss.elemento.TypedBuilder;

/**
 * Provides methods and default implementations for modifying the style of SVG elements.
 */
public interface SVGElementStyleMethods<E extends SVGElement, B extends TypedBuilder<E, B>>
        extends TypedBuilder<E, B>, IsElement<E> {

    /** Appends the given style to the existing styles of this element. */
    default B style(String style) {
        return style(style, true);
    }

    /** Appends or sets the given style to the styles of this element. */
    default B style(String style, boolean append) {
        if (append) {
            element().style.cssText += style;
        } else {
            element().style.cssText = style;
        }
        return that();
    }

    /** Sets the given style on this element. */
    default B style(String property, int value) {
        return style(property, String.valueOf(value), false);
    }

    /** Sets the given style on this element. */
    default B style(String property, String value) {
        return style(property, value, false);
    }

    /** Sets the given style on this element. */
    default B style(String property, int value, boolean important) {
        return style(property, String.valueOf(value), important);
    }

    /** Sets the given style on this element. */
    default B style(String property, String value, boolean important) {
        String priority = important ? "important" : "";
        element().style.setProperty(property, value, priority);
        return that();
    }
}
