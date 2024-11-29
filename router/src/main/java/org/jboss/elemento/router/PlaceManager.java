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
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
import java.util.function.Supplier;

import org.jboss.elemento.By;
import org.jboss.elemento.Elements;
import org.jboss.elemento.logger.Logger;

import elemental2.dom.Element;
import elemental2.dom.Event;
import elemental2.dom.EventTarget;
import elemental2.dom.HTMLAnchorElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.URL;
import elemental2.promise.Promise;

import static elemental2.dom.DomGlobal.document;
import static elemental2.dom.DomGlobal.history;
import static elemental2.dom.DomGlobal.location;
import static elemental2.dom.DomGlobal.window;
import static java.util.Collections.singletonList;
import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.h;
import static org.jboss.elemento.Elements.p;
import static org.jboss.elemento.Elements.pre;
import static org.jboss.elemento.Elements.querySelector;
import static org.jboss.elemento.Elements.removeChildrenFrom;
import static org.jboss.elemento.EventType.bind;
import static org.jboss.elemento.EventType.click;
import static org.jboss.elemento.EventType.popstate;
import static org.jboss.elemento.router.Parameter.match;

/**
 * The place manager is the central part of the router. It keeps track of registered places, handles navigation events, and
 * updates the DOM accordingly. The place manager can be customized using builder like methods and has a {@link #start()} method
 * to show the initial page.
 * <p>
 * {@snippet class = PlaceManagerDemo region = placeManager}
 *
 * @see <a href=
 * "https://developer.mozilla.org/en-US/docs/Web/API/History_API/Working_with_the_History_API">https://developer.mozilla.org/en-US/docs/Web/API/History_API/Working_with_the_History_API</a>
 */
public class PlaceManager {

    // ------------------------------------------------------ instance

    private static final Logger logger = Logger.getLogger(PlaceManager.class.getName());
    private static final Place NOT_FOUND = new Place("org.jboss.elemento.router.notFound");

    private final Map<String, Place> places;
    private final Map<Place, Supplier<Page>> pages;
    private final List<BeforePlaceHandler> beforeHandlers;
    private final List<AfterPlaceHandler> afterHandlers;
    private Base base;
    private Place currentPlace;
    private Page currentPage;
    private Supplier<HTMLElement> root;
    private Function<String, String> title;
    private Supplier<Page> notFound;
    private Supplier<Page> noData;
    private LinkSelector linkSelector;

    public PlaceManager() {
        this.places = new HashMap<>();
        this.pages = new HashMap<>();
        this.beforeHandlers = new ArrayList<>();
        this.afterHandlers = new ArrayList<>();
        this.base = new Base("/");
        this.currentPlace = null;
        this.currentPage = null;
        this.root = () -> document.body;
        this.title = Function.identity();
        this.notFound = DefaultNotFound::new;
        this.noData = DefaultNoData::new;
        this.linkSelector = new LinkSelector();
    }

    // ------------------------------------------------------ builder

    public PlaceManager base(String base) {
        this.base = new Base(base);
        return this;
    }

    public PlaceManager root(String selector) {
        return root(() -> querySelector(document, By.selector(selector)));
    }

    public PlaceManager root(By selector) {
        return root(() -> querySelector(document, selector));
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

    public PlaceManager notFound(Supplier<Page> notFound) {
        this.notFound = notFound;
        return this;
    }

    public PlaceManager noData(Supplier<Page> noData) {
        this.noData = noData;
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
        places.put(place.route, place);
        pages.put(place, page);
        return this;
    }

    public PlaceManager register(Places places) {
        for (Map.Entry<Place, Supplier<Page>> entry : places) {
            register(entry.getKey(), entry.getValue());
        }
        return this;
    }

    // ------------------------------------------------------ api

    public Place current() {
        return currentPlace;
    }

    public Place place(String path) {
        Place place = findPlace(path).place;
        return NOT_FOUND.equals(place) ? null : place;
    }

    public void start() {
        bindClickHandler();
        bindHistoryHandler();
        PlaceManagerStruct pms = findPlace(location.pathname);
        gotoPlace(pms).then(success -> {
            if (success) {
                updateHistory(pms.place, false);
            } else {
                logger.error("Unable to start place manager with " + pms.place);
            }
            return null;
        });
    }

    public void goTo(String path) {
        PlaceManagerStruct pms = findPlace(path);
        gotoPlace(pms).then(success -> {
            if (success) {
                updateHistory(pms.place, true);
            } else {
                logger.error("Unable to go to " + pms.place);
            }
            return null;
        });
    }

    public String href(String path) {
        Place place = findPlace(path).place;
        return NOT_FOUND.equals(place) ? "#" : base.absolute(place.route);
    }

    // ------------------------------------------------------ event handling

    private void bindClickHandler() {
        bind(document, click, e -> {
            HTMLAnchorElement a = anchorElement(e);
            if (a != null) {
                URL url = new URL(a.href, location.origin);
                if (shouldHandleLink(a, url)) {
                    PlaceManagerStruct pms = findPlace(url.pathname);
                    e.preventDefault();
                    gotoPlace(pms).then(success -> {
                        if (success) {
                            updateHistory(pms.place, true);
                        } else {
                            logger.error("Unable to go to " + pms.place);
                        }
                        return null;
                    });
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
                gotoPlace(findPlace(route));
            }
        });
    }

    // ------------------------------------------------------ place and page handling

    private PlaceManagerStruct findPlace(String path) {
        PlaceManagerStruct pms = new PlaceManagerStruct();
        logger.debug("Find place for '%s'", path);
        if (path != null) {
            String relativePath = base.relative(path);
            pms.place = places.get(relativePath);
            if (pms.place == null) {
                logger.debug("No direct match for '%s'. Looking for parameterized place.", path);
                for (Iterator<Place> iterator = places.values().iterator(); iterator.hasNext() && pms.place == null; ) {
                    Place possiblePlace = iterator.next();
                    if (possiblePlace.hasParameter && match(possiblePlace.route, relativePath)) {
                        pms.place = possiblePlace;
                        pms.parameter = new Parameter(pms.place.route, relativePath);
                    }
                }
            }
        }
        if (pms.place == null) {
            pms.place = NOT_FOUND;
        }
        logger.debug("Found %s", pms.place);
        return pms;
    }

    private Promise<Boolean> gotoPlace(PlaceManagerStruct pms) {
        logger.debug("Goto %s", pms.place);
        for (BeforePlaceHandler handler : beforeHandlers) {
            if (!handler.shouldGoTo(this, pms.place)) {
                logger.debug("Navigation canceled by before-handler for %s", pms.place);
                return Promise.resolve(false);
            }
        }
        logger.debug("Find page for %s", pms.place);
        if (pages.containsKey(pms.place)) {
            Supplier<Page> pageSupplier = pages.get(pms.place);
            if (pms.place.loader == null) {
                logger.debug("Create page for %s", pms.place);
                pms.page = pageSupplier.get();
                return gotoPage(pms);
            } else {
                logger.debug("Load data for %s", pms.place);
                return pms.place.loader.load(pms.place, pms.parameter)
                        .then(data -> {
                            logger.debug("Data loaded successfully. Create page for %s", pms.place);
                            pms.data = new LoadedData(data);
                            pms.page = pageSupplier.get();
                            return gotoPage(pms);
                        })
                        .catch_(error -> {
                            String errorAsString = String.valueOf(error);
                            logger.error("Unable to load page for %s: %s", pms.place, errorAsString);
                            pms.data = new LoadedData(errorAsString);
                            pms.page = noData(pms.place);
                            return gotoPage(pms);
                        });
            }
        } else {
            pms.page = notFound(pms.place);
            return gotoPage(pms);
        }
    }

    private Promise<Boolean> gotoPage(PlaceManagerStruct pms) {
        HTMLElement rootElement = pms.place.root != null ? pms.place.root.get() : root.get();
        if (rootElement == null) {
            logger.error("Unable to find root element for %s", pms.place);
            return Promise.resolve(false);
        }

        if (pms.place.title != null) {
            document.title = this.title.apply(pms.place.title);
        }
        removeChildrenFrom(rootElement);
        if (currentPage != null) {
            currentPage.detach();
        }
        for (HTMLElement e : pms.page.elements(pms.place, pms.parameter, pms.data)) {
            rootElement.appendChild(e);
        }
        currentPage = pms.page;
        pms.page.attach();

        if (NOT_FOUND.equals(pms.place)) {
            return Promise.resolve(false);
        } else {
            currentPlace = pms.place;
            for (AfterPlaceHandler handler : afterHandlers) {
                handler.afterPlace(this, pms.place);
            }
            logger.info("Navigation to %s", pms.place);
            return Promise.resolve(true);
        }
    }

    private Page notFound(Place place) {
        logger.debug("No page found for %s", place);
        if (notFound != null) {
            return notFound.get();
        } else {
            return new DefaultNotFound();
        }
    }

    private Page noData(Place place) {
        logger.debug("No data for %s", place);
        if (noData != null) {
            return noData.get();
        } else {
            return new DefaultNoData();
        }
    }

    private void updateHistory(Place place, boolean push) {
        String url = base.absolute(place.route);
        if (push) {
            history.pushState(place.route, "", url);
        } else {
            history.replaceState(place.route, "", url + location.search);
        }
    }

    // ------------------------------------------------------ internal classes

    private static class PlaceManagerStruct {

        private Place place;
        private Parameter parameter = Parameter.EMPTY;
        private LoadedData data = LoadedData.NONE;
        private Page page;
    }

    private static final String ROOT_STYLE = "display:grid;place-items:center;height:100vh";
    private static final String CONTAINER_STYLE = "width:50%;height:50%;";
    private static final String HEADER_STYLE = "font-size:3rem;text-align:center;margin-bottom:1rem";
    private static final String PARAGRAPH_STYLE = "font-size:1.5rem;text-align:center;margin-bottom:1rem";
    private static final String ERROR_STYLE = "font-size:1.2rem;text-align:center;text-wrap:wrap;";

    private static class DefaultNotFound implements Page {

        @Override
        public Iterable<HTMLElement> elements(Place place, Parameter parameter, LoadedData data) {
            return singletonList(div().style(ROOT_STYLE)
                    .add(div().style(CONTAINER_STYLE)
                            .add(h(1, "Error 404").style(HEADER_STYLE))
                            .add(p().style(PARAGRAPH_STYLE)
                                    .add("You're lost! Page '" + place.route + "' was not found. Please take a step ")
                                    .add(a("javascript:history.back()").text("back"))
                                    .add(".")))
                    .element());
        }
    }

    private static class DefaultNoData implements Page {

        @Override
        public Iterable<HTMLElement> elements(Place place, Parameter parameter, LoadedData data) {
            String error = data.get();
            return singletonList(div().style(ROOT_STYLE)
                    .add(div().style(CONTAINER_STYLE)
                            .add(h(1, "No data").style(HEADER_STYLE))
                            .add(p().style(PARAGRAPH_STYLE)
                                    .add("The data for page '" + place.route + "' could not be loaded."))
                            .add(pre().style(ERROR_STYLE).text(error)))
                    .element());
        }
    }
}
