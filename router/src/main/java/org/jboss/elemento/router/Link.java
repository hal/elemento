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

import org.jboss.elemento.HTMLContainerBuilder;

import elemental2.dom.HTMLAnchorElement;

import static org.jboss.elemento.Elements.a;

public class Link extends HTMLContainerBuilder<HTMLAnchorElement> {

    // ------------------------------------------------------ factory

    public static Link link(PlaceManager placeManager, String route) {
        return new Link(placeManager, route);
    }

    // ------------------------------------------------------ instance

    public Link(PlaceManager placeManager, String route) {
        super(a(placeManager.href(route)).element());
    }

    // ------------------------------------------------------ builder

    @Override
    public Link that() {
        return this;
    }
}
