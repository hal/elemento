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

import java.util.function.Supplier;

import elemental2.dom.HTMLElement;

/**
 * A page interface represents a collection of HTML elements. Implementations should be cheap to create.
 * <p>
 * Pages can be annotated with {@link Route} and registered with the {@link PlaceManager} using {@link PlaceManager#register(Place, Supplier)} and {@link PlaceManager#register(Places)}.
 */
public interface Page {

    Iterable<HTMLElement> elements(Place place, Parameter parameter, LoadedData data);
}
