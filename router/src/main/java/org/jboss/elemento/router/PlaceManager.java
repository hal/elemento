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
import java.util.function.BiFunction;
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

    private final Map<String, Place> places;
    private final Map<Place, Supplier<Page>> pages;
    private final List<BeforePlaceHandler> beforeHandlers;
    private final List<AfterPlaceHandler> afterHandlers;
    private Base base;
    private Place currentPlace;
    private Page currentPage;
    private Supplier<HTMLElement> root;
    private Function<String, String> title;
    private Function<Place, Page> notFound;
    private Supplier<Page> noData;
    private BiFunction<Place, String, Page> errorPage;
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
        this.errorPage = DefaultErrorPage::new;
        this.linkSelector = new LinkSelector();
    }

    // ------------------------------------------------------ builder

    /**
     * The base URL for all locations. If your app is served from a subdirectory on your server, you’ll want to set this to the
     * subdirectory. A properly formatted basename should have a leading slash but no trailing slash.
     */
    public PlaceManager base(String base) {
        this.base = new Base(base);
        return this;
    }

    /**
     * Sets the root HTMLElement for the application's UI using a CSS selector.
     *
     * @param selector a CSS selector string used to identify the root element
     */
    public PlaceManager root(String selector) {
        return root(() -> querySelector(document, By.selector(selector)));
    }

    /**
     * Sets the root HTMLElement for the application's UI using a {@link By} selector.
     *
     * @param selector a {@link By} selector used to identify the root element
     */
    public PlaceManager root(By selector) {
        return root(() -> querySelector(document, selector));
    }

    /**
     * Sets the root HTMLElement for the application's UI.
     *
     * @param element the HTMLElement to be used as the root of the application's UI
     */
    public PlaceManager root(HTMLElement element) {
        return root(() -> element);
    }

    /**
     * Sets the root HTMLElement for the application's UI using a supplier. The supplier provides an instance of the HTMLElement
     * that serves as the root container for the UI. This method allows dynamic determination of the root element at runtime.
     *
     * @param root a Supplier that provides an HTMLElement to be used as the root of the application's UI
     */
    public PlaceManager root(Supplier<HTMLElement> root) {
        this.root = root;
        return this;
    }

    /**
     * Sets the function to resolve or modify the title for the current place or page. This function can be used to dynamically
     * determine the title based on the input.
     *
     * @param title a {@link Function} that takes a {@link String} and returns a {@link String}, representing the dynamic
     *              resolution or modification of the title.
     */
    public PlaceManager title(Function<String, String> title) {
        this.title = title;
        return this;
    }

    /**
     * Sets the callback function to handle cases where no matching place is found.
     *
     * @param notFound a {@link Function} that takes a {@link Place} as input and returns a {@link Page}. This function will be
     *                 called to provide a fallback page when a requested place doesn't match any registered routes.
     */
    public PlaceManager notFound(Function<Place, Page> notFound) {
        this.notFound = notFound;
        return this;
    }

    /**
     * Sets the callback function to handle cases where no data is available for a given place. This function is invoked to
     * provide a fallback {@link Page} when there is an absence of data.
     *
     * @param noData a {@link Supplier} that provides a fallback {@link Page} in scenarios where no data is available.
     */
    public PlaceManager noData(Supplier<Page> noData) {
        this.noData = noData;
        return this;
    }

    /**
     * Sets the callback function to handle error scenarios. This function is invoked to provide a fallback {@link Page} when an
     * error occurs during navigation or page rendering.
     *
     * @param errorPage a {@link BiFunction} that takes a {@link Place} and a {@link String} (representing the error message) as
     *                  input and returns a {@link Page} to be used as the fallback error page.
     * @return the current {@link PlaceManager} instance for method chaining.
     */
    public PlaceManager errorPage(BiFunction<Place, String, Page> errorPage) {
        this.errorPage = errorPage;
        return this;
    }

    /**
     * Registers a handler that is executed before a place transition occurs. The provided {@link BeforePlaceHandler} can
     * perform pre-processing, validation, or cancellation of the transition based on its implementation.
     *
     * @param beforePlace the {@link BeforePlaceHandler} to be executed before the place transition
     */
    public PlaceManager beforePlace(BeforePlaceHandler beforePlace) {
        beforeHandlers.add(beforePlace);
        return this;
    }

    /**
     * Registers a handler to be executed after a place transition occurs. The provided {@link AfterPlaceHandler} can perform
     * post-processing or additional actions based on the new place state.
     *
     * @param afterPlace the {@link AfterPlaceHandler} to be executed after the place transition
     * @return the current {@link PlaceManager} instance for method chaining
     */
    public PlaceManager afterPlace(AfterPlaceHandler afterPlace) {
        afterHandlers.add(afterPlace);
        return this;
    }

    /**
     * Sets the link selector for selecting links that should be monitored by this place manager. This method uses a CSS
     * selector string to define the selector.
     *
     * @param selector a CSS selector string used to identify links
     */
    public PlaceManager linkSelector(String selector) {
        return linkSelector(By.selector(selector), false);
    }

    /**
     * Sets the link selector for selecting links that should be monitored by this place manager. This method uses a {@link By}
     * selector to define the selector and allows specifying whether the selection should be negated.
     *
     * @param selector a {@link By} selector used to identify links
     * @param not      a boolean flag indicating whether the selector should be negated
     */
    public PlaceManager linkSelector(String selector, boolean not) {
        return linkSelector(By.selector(selector), not);
    }

    /**
     * Sets the link selector for links that should be monitored by this place manager. This method uses a {@link By} selector
     * to define the links to be selected.
     *
     * @param selector a {@link By} selector used to identify links
     */
    public PlaceManager linkSelector(By selector) {
        return linkSelector(selector, false);
    }

    /**
     * Sets the link selector for links that should be monitored by this place manager. This method uses a {@link By} selector
     * to define the links to be selected and allows specifying whether the selection should be negated.
     *
     * @param selector a {@link By} selector used to identify links
     * @param not      a boolean flag indicating whether the selector should be negated
     */
    public PlaceManager linkSelector(By selector, boolean not) {
        this.linkSelector = new LinkSelector(selector, not);
        return this;
    }

    /**
     * Registers a new place and its associated page supplier with the place manager.
     *
     * @param place the {@link Place} object representing a specific location in the application
     * @param page  a {@link Supplier} that provides the {@link Page} associated with the given place
     */
    public PlaceManager register(Place place, Supplier<Page> page) {
        places.put(place.route, place);
        pages.put(place, page);
        return this;
    }

    /**
     * Registers a collection of places and their associated page suppliers with the PlaceManager.
     *
     * @param places a {@link Places} object containing a collection of {@link Place} objects and their corresponding
     *               {@link Supplier} for {@link Page}. Each entry in the collection represents a mapping between a place and a
     *               page supplier.
     */
    public PlaceManager register(Places places) {
        for (Map.Entry<Place, Supplier<Page>> entry : places) {
            register(entry.getKey(), entry.getValue());
        }
        return this;
    }

    // ------------------------------------------------------ api

    /**
     * Returns the current {@link Place} instance being managed by the PlaceManager.
     *
     * @return the current {@link Place} instance
     */
    public Place current() {
        return currentPlace;
    }

    public Place place(String path) {
        PlaceManagerStruct pms = findPlace(path);
        return pms.ok() ? pms.place : null;
    }

    /**
     * Initializes the PlaceManager by setting up necessary event bindings and navigating to the place that corresponds to the
     * current URL.
     * <p>
     * This method performs the following steps:
     * <ol>
     * <li>Calls {@code bindClickHandler()} to set up click event handling for links, enabling SPA navigation by preventing
     * default link behavior.</li>
     * <li>Calls {@code bindHistoryHandler()} to set up handling for browser's history state changes.</li>
     * <li>Determines the initial place to navigate to based on the current location's path by invoking {@code findPlace()}.</li>
     * <li>Calls {@code gotoPlace()} to transition to the identified place. If successful, updates browser history using
     * {@code updateHistory()}. If unsuccessful, logs an error indicating the inability to start with the resolved place.</li>
     * </ol>
     */
    public void start() {
        bindClickHandler();
        bindHistoryHandler();
        PlaceManagerStruct pms = findPlace(location.pathname);
        gotoPlace(pms).then(success -> {
            if (success) {
                updateHistory(pms, false);
            } else {
                logger.error("Unable to start place manager with " + pms.place);
            }
            return null;
        });
    }

    /**
     * Navigates to a specific path within the application. The method resolves the corresponding place to the given path,
     * attempts to move to the associated page, and logs an error if the navigation fails.
     *
     * @param path the string representation of the target path to navigate to
     */
    public void goTo(String path) {
        PlaceManagerStruct pms = findPlace(path);
        gotoPlace(pms).then(success -> {
            if (success) {
                updateHistory(pms, true);
            } else {
                logger.error("Unable to go to " + pms.place);
            }
            return null;
        });
    }

    /**
     * Generates an absolute URL for the given path based on the application's base URL and routing configuration. If the
     * specified path corresponds to an existing place, the method returns the absolute URL for that place. If the path does not
     * correspond to an existing place, the method returns a fallback URL (e.g., "#").
     *
     * @param path the path for which the URL is to be generated; typically represents a route within the application
     * @return the absolute URL as a String for the corresponding place if found, or a fallback URL ("#") if the place does not
     * exist
     */
    public String href(String path) {
        PlaceManagerStruct pms = findPlace(path);
        return pms.ok() ? base.absolute(pms.place.route) : "#";
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
                            updateHistory(pms, true);
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
            logger.debug("No place found for '%s'.", path);
            pms.errorType = ErrorType.NOT_FOUND;
            pms.place = new Place(
                    path == null || path.trim().isEmpty() ? "/" : path); // create a place anyway for proper 404 handling
        } else {
            logger.debug("Found %s", pms.place);
        }
        return pms;
    }

    private Promise<Boolean> gotoPlace(PlaceManagerStruct pms) {
        if (pms.ok()) {
            if (pages.containsKey(pms.place)) {
                logger.debug("Goto %s", pms.place);
                try {
                    for (BeforePlaceHandler handler : beforeHandlers) {
                        if (!handler.shouldGoTo(this, pms.place)) {
                            logger.debug("Navigation canceled by before handler for %s", pms.place);
                            return Promise.resolve(false);
                        } else {
                            handler.beforePlace(this, pms.place);
                        }
                    }
                } catch (Throwable t) {
                    pms.page = errorPage(pms.place, "Error in place before handler: " + t.getMessage());
                    return gotoPage(pms);
                }
                Supplier<Page> pageSupplier = pages.get(pms.place);
                if (pms.place.loader == null) {
                    logger.debug("Create page for %s", pms.place);
                    try {
                        pms.page = pageSupplier.get();
                    } catch (Throwable t) {
                        pms.page = errorPage(pms.place, "Error when creating page: " + t.getMessage());
                    }
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
                                pms.errorType = ErrorType.NO_DATA;
                                pms.data = new LoadedData(errorAsString);
                                pms.page = noData(pms.place);
                                return gotoPage(pms);
                            });
                }
            } else {
                pms.errorType = ErrorType.NOT_FOUND;
                pms.page = notFound(pms.place);
                return gotoPage(pms);
            }
        } else {
            if (pms.errorType == ErrorType.NOT_FOUND) {
                pms.page = notFound(pms.place);
            } else if (pms.errorType == ErrorType.NO_DATA) {
                pms.page = noData(pms.place);
            } else if (pms.errorType == ErrorType.UNDEFINED) {
                pms.page = errorPage(pms.place, "Undefined error");
            }
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

        if (pms.ok()) {
            currentPlace = pms.place;
            logger.info("Navigation to %s", pms.place);
            for (AfterPlaceHandler handler : afterHandlers) {
                handler.afterPlace(this, pms.place);
            }
            return Promise.resolve(true);
        } else {
            return Promise.resolve(false);
        }
    }

    private Page notFound(Place place) {
        logger.debug("No page found for %s", place);
        if (notFound != null) {
            return notFound.apply(place);
        } else {
            return new DefaultNotFound(place);
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

    private Page errorPage(Place place, String error) {
        logger.debug("Error while going to %s", place);
        if (errorPage != null) {
            return errorPage.apply(place, error);
        } else {
            return new DefaultErrorPage(place, error);
        }
    }

    private void updateHistory(PlaceManagerStruct pms, boolean push) {
        String url = base.absolute(pms.parameter.isEmpty() ? pms.place.route : pms.parameter.path());
        if (push) {
            history.pushState(url, "", url);
        } else {
            history.replaceState(url, "", url + location.search);
        }
    }

    // ------------------------------------------------------ internal classes

    private enum ErrorType {
        NO_ERROR, NOT_FOUND, NO_DATA, UNDEFINED
    }

    private static class PlaceManagerStruct {

        private Place place;
        private Parameter parameter;
        private LoadedData data;
        private Page page;
        private ErrorType errorType;

        PlaceManagerStruct() {
            this.parameter = Parameter.EMPTY;
            this.data = LoadedData.NONE;
            this.errorType = ErrorType.NO_ERROR;
        }

        boolean ok() {
            return errorType == ErrorType.NO_ERROR;
        }
    }

    private static final String ROOT_STYLE = "display:grid;place-items:center;height:100vh";
    private static final String CONTAINER_STYLE = "width:50%;height:50%;";
    private static final String HEADER_STYLE = "font-size:3rem;text-align:center;margin-bottom:1rem";
    private static final String PARAGRAPH_STYLE = "font-size:1.5rem;text-align:center;margin-bottom:1rem";
    private static final String ERROR_STYLE = "font-size:1.2rem;text-align:center;text-wrap:wrap;";

    @SuppressWarnings("ClassCanBeRecord")
    private static class DefaultNotFound implements Page {

        private final Place notFound;

        private DefaultNotFound(Place notFound) {
            this.notFound = notFound;
        }

        @Override
        public Iterable<HTMLElement> elements(Place place, Parameter parameter, LoadedData data) {
            return singletonList(div().style(ROOT_STYLE)
                    .add(div().style(CONTAINER_STYLE)
                            .add(h(1, "Error 404").style(HEADER_STYLE))
                            .add(p().style(PARAGRAPH_STYLE)
                                    .add("You're lost! Page '" + notFound.route + "' was not found. Please take a step ")
                                    .add(a("javascript:history.back()").text("back"))
                                    .add(".")))
                    .element());
        }
    }

    private static class DefaultNoData implements Page {

        @Override
        public Iterable<HTMLElement> elements(Place place, Parameter parameter, LoadedData data) {
            String error = data.getOrDefault("Undefined error");
            return singletonList(div().style(ROOT_STYLE)
                    .add(div().style(CONTAINER_STYLE)
                            .add(h(1, "No data").style(HEADER_STYLE))
                            .add(p().style(PARAGRAPH_STYLE)
                                    .add("The data for page '" + place.route + "' could not be loaded."))
                            .add(pre().style(ERROR_STYLE).text(error)))
                    .element());
        }
    }

    private static class DefaultErrorPage implements Page {

        private final String error;

        DefaultErrorPage(Place place, String error) {
            this.error = error;
        }

        @Override
        public Iterable<HTMLElement> elements(Place place, Parameter parameter, LoadedData data) {
            return singletonList(div().style(ROOT_STYLE)
                    .add(div().style(CONTAINER_STYLE)
                            .add(h(1, "Error").style(HEADER_STYLE))
                            .add(p().style(PARAGRAPH_STYLE)
                                    .add("An error occurred while loading the page '" + place.route + "'."))
                            .add(pre().style(ERROR_STYLE).text(error)))
                    .element());
        }
    }
}
