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

package org.jboss.gwt.elemento.core;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

class ElementsTest {

    @Test
    void simple() {
        assertEquals("foo", Elements.buildId("foo"));
    }

    @Test
    void complex() {
        assertEquals("foo-bar-1-2-3", Elements.buildId("foo", "bar", "1-2", "3"));
    }

    @Test
    void emptyNull() {
        assertEquals("foo-bar", Elements.buildId("foo", "", null, "", "", "bar", ""));
    }

    @Test
    void illegal() {
        assertThrows(IllegalArgumentException.class, () -> Elements.buildId(null));
    }

    @Test
    void asId() {
        assertEquals("lorem-ipsum", Elements.asId("lorem-ipsum"));
        assertEquals("lorem-ipsum", Elements.asId("Lorem Ipsum"));
        assertEquals("l0rem-ip5um", Elements.asId("l0rem-ip5um"));
        assertEquals("lorem-ipsum", Elements.asId("lorem §±!@#$%^&*()=_+[]{};'\\:\"|,./<>?`~ ipsum"));
    }

    @Test
    void build() {
        assertEquals("lorem-ipsum", Elements.buildId("lorem-ipsum"));
        assertEquals("lorem-ipsum", Elements.buildId("Lorem Ipsum"));
        assertEquals("lorem-ipsum", Elements.buildId("Lorem", "Ipsum"));
        assertEquals("lorem-ipsum", Elements.buildId(" Lorem ", " Ipsum "));
        assertEquals("l0rem-ip5um", Elements.buildId("l0rem ip5um"));
        assertEquals("l0rem-ip5um", Elements.buildId("l0rem", "ip5um"));
        assertEquals("l0rem-ip5um", Elements.buildId(" l0rem ", " ip5um "));
        assertEquals("lorem-ipsum", Elements.buildId("lorem §±!@#$%^&*()=_+[]{};'\\:\"|,./<>?`~ ipsum"));
        assertEquals("lorem-ipsum", Elements.buildId("lorem", "§±!@#$%^&*()=_+[]{};'\\:\"|,./<>?`~", "ipsum"));
    }
}