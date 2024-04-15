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

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.function.Supplier;

import org.jboss.elemento.By;
import org.jboss.elemento.Elements;

import elemental2.dom.Element;
import elemental2.dom.Event;
import elemental2.dom.EventTarget;
import elemental2.dom.HTMLAnchorElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.URL;

import static elemental2.dom.DomGlobal.document;
import static elemental2.dom.DomGlobal.history;
import static elemental2.dom.DomGlobal.location;
import static elemental2.dom.DomGlobal.window;
import static java.util.Collections.singletonList;
import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.h;
import static org.jboss.elemento.Elements.p;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.EventType.bind;
import static org.jboss.elemento.EventType.click;
import static org.jboss.elemento.EventType.popstate;

/**
 * The place manager is the central part of the router. It keeps track of registered places, handles navigation events, and
 * updates the DOM accordingly. The place manager can be customized using builder like methods and has a {@link #start()} method
 * to show the initial page.
 * <p>
 * {@snippet class = PlaceManagerDemo region = placeManager}
 *
 * @see <a href=
 *      "https://developer.mozilla.org/en-US/docs/Web/API/History_API/Working_with_the_History_API">https://developer.mozilla.org/en-US/docs/Web/API/History_API/Working_with_the_History_API</a>
 */
public class PlaceManager {

    // ------------------------------------------------------ instance

    private static final Place NOT_FOUND = new Place("org.jboss.elemento.router.notFound");

    private final Map<String, Place> routes;
    private final Map<Place, Supplier<Page>> places;
    private final List<BeforePlaceHandler> beforeHandlers;
    private final List<AfterPlaceHandler> afterHandlers;
    private Base base;
    private Place current;
    private Supplier<HTMLElement> root;
    private Function<String, String> title;
    private Function<Place, Page> notFound;
    private LinkSelector linkSelector;
    private String failedRoute;

    public PlaceManager() {
        this.routes = new HashMap<>();
        this.places = new HashMap<>();
        this.beforeHandlers = new ArrayList<>();
        this.afterHandlers = new ArrayList<>();
        this.base = new Base("/");
        this.current = NOT_FOUND;
        this.root = () -> document.body;
        this.title = Function.identity();
        this.notFound = place -> new DefaultNotFound();
        this.linkSelector = new LinkSelector();
        this.failedRoute = null;
    }

    // ------------------------------------------------------ builder

    public PlaceManager base(String base) {
        this.base = new Base(base);
        return this;
    }

    public PlaceManager root(String selector) {
        return root(() -> Elements.find(document, By.selector(selector)));
    }

    public PlaceManager root(By selector) {
        return root(() -> Elements.find(document, selector));
    }

    public PlaceManager root(HTMLElement element) {
        return root(() -> element);
    }

    public PlaceManager root(Supplier<HTMLElement> root) {
        this.root = root;
        return this;
    }

    public PlaceManager title(Function<String, String> title) {
        this.title = title;
        return this;
    }

    public PlaceManager notFound(Function<Place, Page> notFound) {
        this.notFound = notFound;
        return this;
    }

    public PlaceManager beforePlace(BeforePlaceHandler beforePlace) {
        beforeHandlers.add(beforePlace);
        return this;
    }

    public PlaceManager afterPlace(AfterPlaceHandler afterPlace) {
        afterHandlers.add(afterPlace);
        return this;
    }

    public PlaceManager linkSelector(String selector) {
        return linkSelector(By.selector(selector), false);
    }

    public PlaceManager linkSelector(String selector, boolean not) {
        return linkSelector(By.selector(selector), not);
    }

    public PlaceManager linkSelector(By selector) {
        return linkSelector(selector, false);
    }

    public PlaceManager linkSelector(By selector, boolean not) {
        this.linkSelector = new LinkSelector(selector, not);
        return this;
    }

    public PlaceManager register(Place place, Supplier<Page> page) {
        routes.put(place.route, place);
        places.put(place, page);
        return this;
    }

    public PlaceManager register(Map<Place, Supplier<Page>> pages) {
        for (Map.Entry<Place, Supplier<Page>> entry : pages.entrySet()) {
            register(entry.getKey(), entry.getValue());
        }
        return this;
    }

    // ------------------------------------------------------ api

    public Place current() {
        return current;
    }

    public Place place(String route) {
        Place place = findPlace(route);
        return NOT_FOUND.equals(place) ? null : place;
    }

    public void start() {
        bindClickHandler();
        bindHistoryHandler();
        Place place = findPlace(location.pathname);
        if (internalGoto(place)) {
            updateHistory(place, false);
        }
    }

    public void goTo(String route) {
        goTo(findPlace(route));
    }

    public void goTo(Place place) {
        if (place != null) {
            if (internalGoto(place)) {
                updateHistory(place, true);
            }
        }
    }

    public String href(String route) {
        return href(findPlace(route));
    }

    public String href(Place place) {
        if (place != null) {
            return NOT_FOUND.equals(place) ? "#" : base.absolute(place.route);
        }
        return "#";
    }

    // ------------------------------------------------------ internal

    private void bindClickHandler() {
        bind(document, click, e -> {
            HTMLAnchorElement a = anchorElement(e);
            if (a != null) {
                URL url = new URL(a.href, location.origin);
                if (shouldHandleLink(a, url)) {
                    Place place = findPlace(url.pathname);
                    e.preventDefault();
                    if (internalGoto(place)) {
                        updateHistory(place, true);
                    }
                }
            }
        });
    }

    private HTMLAnchorElement anchorElement(Event event) {
        HTMLAnchorElement anchorElement = null;
        EventTarget target = event.target;
        if (target instanceof HTMLAnchorElement) {
            anchorElement = ((HTMLAnchorElement) target);
        } else {
            HTMLElement closest = Elements.closest(((Element) target), By.element("a"));
            if (closest instanceof HTMLAnchorElement) {
                anchorElement = ((HTMLAnchorElement) closest);
            }
        }
        return anchorElement;
    }

    private boolean shouldHandleLink(HTMLAnchorElement a, URL url) {
        if (url.origin.equals(location.origin) && url.hash.isEmpty()) { // only links of this origin w/o a hash
            return linkSelector.matches(a);
        }
        return false;
    }

    private void bindHistoryHandler() {
        bind(window, popstate, event -> {
            if (event.state != null) {
                String route = String.valueOf(event.state);
                Place place = findPlace(route);
                internalGoto(place);
            }
        });
    }

    private Place findPlace(String route) {
        String relative = base.relative(route);
        // TODO Find not only exact matches, but also closest matches
        // like /a/b/c -> /a/b
        Place place = routes.getOrDefault(relative, NOT_FOUND);
        if (NOT_FOUND.equals(place)) {
            failedRoute = route;
        }
        return place;
    }

    private boolean internalGoto(Place place) {
        for (BeforePlaceHandler handler : beforeHandlers) {
            if (!handler.shouldGoTo(this, place)) {
                return false;
            }
        }
        Page page = findPage(place);
        if (place.title != null) {
            document.title = this.title.apply(place.title);
        }
        HTMLElement rootElement = place.root != null ? place.root.get() : root.get();
        if (rootElement == null) {
            return false; // TODO let the caller know there's no root
        }
        removeChildrenFrom(rootElement);
        for (HTMLElement e : page.elements()) {
            rootElement.appendChild(e);
        }

        if (NOT_FOUND.equals(place)) {
            return false;
        } else {
            current = place;
            for (AfterPlaceHandler handler : afterHandlers) {
                handler.afterPlace(this, place, page);
            }
            return true;
        }
    }

    private Page findPage(Place place) {
        if (places.containsKey(place)) {
            Supplier<Page> supplier = places.get(place);
            return supplier.get();
        } else {
            return notFound();
        }
    }

    private Page notFound() {
        if (notFound != null) {
            return notFound.apply(new Place(failedRoute, "Not found"));
        } else {
            return new DefaultNotFound();
        }
    }

    private void updateHistory(Place place, boolean push) {
        String absolute = base.absolute(place.route);
        if (push) {
            history.pushState(place.route, "", absolute);
        } else {
            history.replaceState(place.route, "", absolute);
        }
    }

    private static class DefaultNotFound implements Page {

        @Override
        public Iterable<HTMLElement> elements() {
            return singletonList(div().style("display:grid;place-items:center;height:100vh")
                    .add(div().style("width:50%;height:50%;")
                            .add(h(1, "Error 404").style("font-size:3rem;text-align:center"))
                            .add(p().style("font-size:1.5rem;text-align:center")
                                    .add("You're lost. Please take a step ")
                                    .add(a("javascript:history.back()").textContent("back"))
                                    .add(".")))
                    .element());
        }
    }
}
