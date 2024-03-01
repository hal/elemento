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

import java.util.Objects;
import java.util.function.Supplier;

import org.jboss.elemento.By;
import org.jboss.elemento.Elements;

import elemental2.dom.HTMLElement;

import static elemental2.dom.DomGlobal.document;

/**
 * Represents a place in an application. A place is identified by a route, and can have an optional title and a custom root
 * element.
 * <p>
 * If a title is given, the {@link PlaceManager} will change the document title accordingly. If a custom root selector or
 * element is given, the {@link PlaceManager} will replace the contents of that element with the {@link Page} registered for
 * this place.
 */
public class Place {

    public final String route;
    public final String title;
    public final Supplier<HTMLElement> root;

    public Place(String route) {
        this(route, null, (Supplier<HTMLElement>) null);
    }

    public Place(String route, String title) {
        this(route, title, (Supplier<HTMLElement>) null);
    }

    public Place(String route, String title, String selector) {
        this(route, title, () -> Elements.find(document, By.selector(selector)));
    }

    public Place(String route, String title, By selector) {
        this(route, title, () -> Elements.find(document, selector));
    }

    public Place(String route, String title, HTMLElement element) {
        this(route, title, () -> element);
    }

    public Place(String route, String title, Supplier<HTMLElement> root) {
        this.route = route;
        this.title = title;
        this.root = root;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Place place = (Place) o;
        return Objects.equals(route, place.route);
    }

    @Override
    public int hashCode() {
        return Objects.hash(route);
    }

    @Override
    public String toString() {
        StringBuilder builder = new StringBuilder();
        builder.append("Place(").append(route);
        if (title != null) {
            builder.append(", ").append(title);
        }
        if (root != null) {
            builder.append(", custom root");
        }
        builder.append(')');
        return builder.toString();
    }
}
