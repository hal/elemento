/*
 * Copyright 2015-2016 Red Hat, Inc, and individual contributors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.jboss.elemento;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class IdTest {

    @Test
    void simple() {
        assertEquals("foo", Id.build("foo"));
    }

    @Test
    void complex() {
        assertEquals("foo-bar-1-2-3", Id.build("foo", "bar", "1-2", "3"));
    }

    @Test
    void emptyNull() {
        assertEquals("foo-bar", Id.build("foo", "", null, "", "", "bar", ""));
    }

    @Test
    void illegal() {
        assertThrows(IllegalArgumentException.class, () -> Id.build(null));
    }

    @Test
    void asId() {
        assertEquals("lorem-ipsum", Id.asId("lorem-ipsum"));
        assertEquals("lorem-ipsum", Id.asId("Lorem Ipsum"));
        assertEquals("l0rem-ip5um", Id.asId("l0rem-ip5um"));
        assertEquals("lorem---ipsum", Id.asId("lorem §±!@#$%^&*()=_+[]{};'\\:\"|,./<>?`~ ipsum"));
    }

    @Test
    void build() {
        assertEquals("lorem-ipsum", Id.build("lorem-ipsum"));
        assertEquals("lorem-ipsum", Id.build("Lorem Ipsum"));
        assertEquals("lorem-ipsum", Id.build("Lorem", "Ipsum"));
        assertEquals("lorem-ipsum", Id.build(" Lorem ", " Ipsum "));
        assertEquals("l0rem-ip5um", Id.build("l0rem ip5um"));
        assertEquals("l0rem-ip5um", Id.build("l0rem", "ip5um"));
        assertEquals("l0rem-ip5um", Id.build(" l0rem ", " ip5um "));
        assertEquals("lorem---ipsum", Id.build("lorem §±!@#$%^&*()=_+[]{};'\\:\"|,./<>?`~ ipsum"));
        assertEquals("lorem---ipsum", Id.build("lorem", "§±!@#$%^&*()=_+[]{};'\\:\"|,./<>?`~", "ipsum"));
    }

    @Test
    void similar() {
        // must result in the same ID
        String id1 = Id.build("foo_bar");
        String id2 = Id.build("foo-bar");
        String id3 = Id.build("foo bar");
        assertEquals(id1, id2);
        assertEquals(id1, id3);
        assertEquals(id2, id3);

        // must result in the same ID
        String id4 = Id.build("foobar");
        String id5 = Id.build("fooBar");
        assertEquals(id4, id5);

        // must not be the same
        assertNotEquals(id1, id4);
    }
}