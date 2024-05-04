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
import static org.jboss.elemento.router.Parameter.hasParameter;
import static org.jboss.elemento.router.Path.normalize;

/**
 * Represents a place in an application. A place is identified by a route, and can have an optional title and a custom root
 * element.
 * <p>
 * If a title is given, the {@link PlaceManager} will change the document title accordingly. If a custom root selector or
 * element is given, the {@link PlaceManager} will replace the contents of that element with the {@link Page} registered for
 * this place.
 */
public class Place {

    // ------------------------------------------------------ factory

    public static Place place(String route) {
        return new Place(route);
    }

    // ------------------------------------------------------ instance

    public final String route;
    public String title;

    final boolean hasParameter;
    Supplier<HTMLElement> root;
    Loader<?> loader;

    Place(String route) {
        if (route == null || route.isEmpty() || route.isBlank()) {
            throw new IllegalArgumentException("Route must not be null or empty!");
        }
        this.route = normalize(route);
        this.hasParameter = hasParameter(route);
        this.title = null;
        this.root = null;
    }

    // copy constructor
    Place(String route, Place other) {
        this.route = route;
        this.title = other.title;
        this.root = other.root;
        this.hasParameter = other.hasParameter;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {return true;}
        if (o == null || getClass() != o.getClass()) {return false;}
        Place place = (Place) o;
        return Objects.equals(route, place.route);
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(route);
    }

    @Override
    public String toString() {
        StringBuilder builder = new StringBuilder();
        builder.append("Place('").append(route).append("'");
        if (title != null) {
            builder.append(", '").append(title).append("'");
        }
        if (root != null) {
            builder.append(", custom root");
        }
        if (loader != null) {
            builder.append(", with loader");
        }
        builder.append(')');
        return builder.toString();
    }

    // ------------------------------------------------------ builder

    public Place title(String title) {
        this.title = title;
        return this;
    }

    public Place root(String selector) {
        return root(() -> Elements.find(document, By.selector(selector)));
    }

    public Place root(By selector) {
        return root(() -> Elements.find(document, selector));
    }

    public Place root(HTMLElement element) {
        return root(() -> element);
    }

    public Place root(Supplier<HTMLElement> root) {
        this.root = root;
        return this;
    }

    public Place loader(Loader<?> loader) {
        this.loader = loader;
        return this;
    }
}
