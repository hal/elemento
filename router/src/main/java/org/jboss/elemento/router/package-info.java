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
/**
 * Provides a minimally invasive client-side routing solution for single-page applications.
 * <p>
 * The router module is built around a few simple concepts that work together to manage navigation, data loading, and DOM updates in
 * your application.
 *
 * <h2>Core Concepts</h2>
 *
 * <h3>{@link org.jboss.elemento.router.Place}</h3>
 * <p>
 * A data class that represents a place in an application. A place is identified by a route (e.g., {@code "/home"} or
 * {@code "/contacts/:contactId"}) and can have an optional title and a custom root element. Routes can have parameters such as
 * {@code /contacts/:contactId}, which will be parsed and made available to the page. A place can also have a loader assigned to it
 * for asynchronously loading data before the page is displayed.
 *
 * <h3>{@link org.jboss.elemento.router.Places}</h3>
 * <p>
 * A builder to set up multiple places in your application. It supports nested places, combining places from different sources, and
 * assigning loaders to places. This makes it easy to structure complex routing hierarchies.
 *
 * <h3>{@link org.jboss.elemento.router.Page}</h3>
 * <p>
 * A simple interface that represents a collection of HTML elements. Implementations should be cheap to create and need to implement
 * a single method: {@code Iterable<HTMLElement> elements(Place, Parameter, LoadedData)}. Pages can also implement optional
 * {@code attach()} and {@code detach()} lifecycle methods for setup and cleanup.
 *
 * <h3>{@link org.jboss.elemento.router.LoadData}</h3>
 * <p>
 * A functional interface to asynchronously load data before a page is created and added to the DOM. The function gets the place and
 * parameters as input, returns a promise of the data to be loaded, and is defined as
 * {@code Promise<T> load(Place place, Parameter parameter)}. This is useful for fetching data from APIs or performing other async
 * operations before rendering.
 *
 * <h3>{@link org.jboss.elemento.router.PlaceManager}</h3>
 * <p>
 * The main class of the router module. It performs several key tasks:
 * <ul>
 * <li>Keeps track of registered places</li>
 * <li>Handles navigation events (clicks on links, browser back/forward)</li>
 * <li>Parses route parameters from URLs</li>
 * <li>Calls loader functions to fetch data</li>
 * <li>Updates the DOM with new page elements</li>
 * <li>Manages browser history state</li>
 * </ul>
 * The place manager can be customized using builder-like methods and has a {@code start()} method to initialize routing and show
 * the initial page.
 *
 * <h2>Annotations</h2>
 * <p>
 * To simplify the creation of {@link org.jboss.elemento.router.Place} instances in large applications, the router module provides
 * annotation-based configuration using an annotation processor:
 *
 * <h3>{@link org.jboss.elemento.router.Route}</h3>
 * <p>
 * Marks a {@link org.jboss.elemento.router.Page} implementation as a routable place. The annotation requires a route value and can
 * include optional attributes for title, root selector, and a reference to a named loader. If the annotated page class has exactly
 * one public static method that returns {@code LoadData<?>} and accepts no parameters, it will automatically be used as the loader
 * for that place.
 *
 * <h3>{@link org.jboss.elemento.router.Loader}</h3>
 * <p>
 * Marks a class or public static method as a named loader. If used on a class, the class must implement {@code LoadData<T>}. If
 * used on a static method, the method must return {@code LoadData<?>} and not accept any parameters. Named loaders can be
 * referenced by the {@code loader} attribute of the {@code @Route} annotation.
 *
 * <h2>Example Usage</h2>
 * <p>
 * Here's a complete example showing how to set up routing with data loading and nested routes:
 *
 * {@snippet :
 * @Route("/time/:area/:location")
 * public class TimePage implements Page {
 *
 *     // This method is automatically used as the loader for the place
 *     public static LoadData<String> loadTime() {
 *         return (place, parameter) -> {
 *             String area = parameter.get("area");
 *             String location = parameter.get("location");
 *             String url = "https://worldtimeapi.org/api/timezone/" + area + "/" + location;
 *             return fetch(url)
 *                     .then(Response::json)
 *                     .then(json -> {
 *                         JsPropertyMap<String> map = Js.cast(json);
 *                         return Promise.resolve(map.get("datetime"));
 *                     });
 *         };
 *     }
 *
 *     @Override
 *     public Iterable<HTMLElement> elements(Place place, Parameter parameter, LoadedData data) {
 *         String area = parameter.get("area");
 *         String location = parameter.get("location");
 *         String currentTime = data.get();
 *         return asList(
 *                 h(1, "Current time").element(),
 *                 p()
 *                         .add("It's ")
 *                         .add(span().text(currentTime))
 *                         .add(" in " + area + "/" + location)
 *                         .element());
 *     }
 * }
 *
 * @Route(value = "/", title = "Home")
 * public class HomePage implements Page {
 *
 *     @Override
 *     public Iterable<HTMLElement> elements(Place place, Parameter parameter, LoadedData data) {
 *         return asList(
 *                 h(1, "Welcome").element(),
 *                 p()
 *                         .add("What time is it in ")
 *                         .add(a("/time/Europe/Berlin").textNode("Berlin"))
 *                         .add("?")
 *                         .element());
 *     }
 * }
 *
 * public class Application {
 *
 *     public void entryPoint() {
 *         body().add(div().id("main"));
 *
 *         Places allPlaces = places()
 *                 .add(new AnnotatedPlaces()) // generated places instance
 *                 .add(place("/foo"), FooPage::new)
 *                 .add(place("/bar"), BarPage::new)
 *                 .children("/level1", places()
 *                         .add(place("/"), Level1Page::new) // index page
 *                         .add(places() // siblings
 *                                 .add(place("/foo"), Foo1Page::new)
 *                                 .add(place("/bar"), Bar1Page::new))
 *                         .children("/level2", places()
 *                                 .add(place("/foo"), Foo2Page::new)
 *                                 .add(place("/bar"), Bar2Page::new)));
 *
 *         PlaceManager placeManager = new PlaceManager()
 *                 .root(By.id("main"))
 *                 .register(allPlaces);
 *         placeManager.start();
 *     }
 * }
 * }
 *
 * <h2>Additional Features</h2>
 * <p>
 * The router module provides several additional features for advanced use cases:
 * <ul>
 * <li><strong>Before/After handlers:</strong> Execute code before or after a place transition using
 * {@link org.jboss.elemento.router.BeforePlaceHandler} and {@link org.jboss.elemento.router.AfterPlaceHandler}</li>
 * <li><strong>Custom error pages:</strong> Define custom pages for 404 (not found), data loading errors, and other error
 * conditions</li>
 * <li><strong>Base paths:</strong> Support for applications served from subdirectories</li>
 * <li><strong>Link selection:</strong> Control which links are managed by the router using CSS selectors</li>
 * <li><strong>Custom root elements:</strong> Each place can render into a different root element</li>
 * </ul>
 *
 * @see org.jboss.elemento.router.PlaceManager
 * @see org.jboss.elemento.router.Place
 * @see org.jboss.elemento.router.Places
 * @see org.jboss.elemento.router.Page
 * @see org.jboss.elemento.router.LoadData
 * @see org.jboss.elemento.router.Route
 * @see org.jboss.elemento.router.Loader
 */
package org.jboss.elemento.router;