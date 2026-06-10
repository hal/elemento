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

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.jboss.elemento.router.Place.place;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

public class PlaceManagerTest {

    @BeforeEach
    void setUp() {
        Parameter.encoder = new JavaUrlEncoder();
    }

    @AfterEach
    void tearDown() {
        Parameter.encoder = new JsUrlEncoder();
    }

    @Test
    void places() {
        PlaceManager placeManager = new PlaceManager()
                .register(place("/foo"), TestPage::new);

        assertNull(placeManager.place(null));
        assertNull(placeManager.place(""));
        assertNull(placeManager.place("foo"));
        assertEquals("/foo", placeManager.place("/foo").route);
    }

    @Test
    void optionalParameterPlaces() {
        PlaceManager placeManager = new PlaceManager()
                .register(place("/users/:id?"), TestPage::new);

        // matches with optional param present
        assertEquals("/users/:id?", placeManager.place("/users/123").route);

        // matches with optional param absent
        assertEquals("/users/:id?", placeManager.place("/users").route);

        // no match for extra segments
        assertNull(placeManager.place("/users/123/edit"));
    }

    @Test
    void base() {
        PlaceManager placeManager = new PlaceManager().base("/base")
                .register(place("/foo"), TestPage::new);

        Place place = placeManager.place("/foo");
        assertEquals("/foo", place.route);
        assertEquals("/base/foo", placeManager.href("/foo"));
    }
}
