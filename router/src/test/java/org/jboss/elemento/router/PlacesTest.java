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

import org.junit.jupiter.api.Test;

import static org.jboss.elemento.router.Place.place;
import static org.jboss.elemento.router.Places.places;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

class PlacesTest {

    @Test
    void mixedPlaces() {
        Places places = places()
                .add(place("/"), TestPage::new)
                .add(place("/foo"), TestPage::new)
                .add(place("/bar"), TestPage::new)
                .children("/level1", places()
                        .add(place("/"), TestPage::new)
                        .add(places()
                                .add(place("foo"), TestPage::new)
                                .add(place("/bar"), TestPage::new))
                        .children("level2", places()
                                .add(place("foo/"), TestPage::new)
                                .add(place("/bar/"), TestPage::new)));

        assertTrue(places.pages.containsKey(place("/")));
        assertTrue(places.pages.containsKey(place("/foo")));
        assertTrue(places.pages.containsKey(place("/bar")));
        assertTrue(places.pages.containsKey(place("/level1")));
        assertTrue(places.pages.containsKey(place("/level1/foo")));
        assertTrue(places.pages.containsKey(place("/level1/bar")));
        assertTrue(places.pages.containsKey(place("/level1/level2/foo")));
        assertTrue(places.pages.containsKey(place("/level1/level2/bar")));

        assertFalse(places.pages.containsKey(place("/level1/level2")));
    }
}