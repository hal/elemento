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

import elemental2.promise.Promise;

/**
 * Functional interface representing a loader function that loads data for a given place.
 *
 * @param <T> the type of data to be loaded
 */
@FunctionalInterface
public interface LoadData<T> {

    /**
     * Loads data for a given place using a specified parameter.
     *
     * @param place     the place for which data needs to be loaded
     * @param parameter the parameter used for loading data
     * @return a Promise representing the asynchronous loading operation
     */
    Promise<T> load(Place place, Parameter parameter);
}
