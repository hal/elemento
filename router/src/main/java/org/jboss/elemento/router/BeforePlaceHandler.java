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

/**
 * This functional interface represents a handler that is executed before a place transition occurs.
 */
@FunctionalInterface
public interface BeforePlaceHandler {

    /** Default implementation returns {@code true} */
    default boolean shouldGoTo(PlaceManager placeManager, Place place) {
        return true;
    }

    /** Called if {@link #shouldGoTo(PlaceManager, Place)} returned {@code true} */
    void beforePlace(PlaceManager placeManager, Place place);
}
