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
