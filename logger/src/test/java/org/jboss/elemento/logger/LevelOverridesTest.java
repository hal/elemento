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
package org.jboss.elemento.logger;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.jboss.elemento.logger.Level.DEBUG;
import static org.jboss.elemento.logger.Level.INFO;
import static org.jboss.elemento.logger.Level.WARN;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

class LevelOverridesTest {

    LevelOverrides overrides;

    @BeforeEach
    void beforeEach() {
        overrides = new LevelOverrides();
    }

    @Test
    void noOverrides() {
        assertNull(overrides.overriddenLevel(null));
        assertNull(overrides.overriddenLevel(""));
        assertNull(overrides.overriddenLevel("  "));
        assertNull(overrides.overriddenLevel("Foo"));
        assertNull(overrides.overriddenLevel("a.b.c.Foo"));
    }

    @Test
    void simpleOverrides() {
        overrides.addLevel("a.b.c", INFO);
        assertNull(overrides.overriddenLevel("Foo"));
        assertNull(overrides.overriddenLevel("a.Foo"));
        assertNull(overrides.overriddenLevel("a.b.Foo"));
        assertNull(overrides.overriddenLevel("a.b.d.Foo"));
        assertEquals(INFO, overrides.overriddenLevel("a.b.c.Foo"));
        assertEquals(INFO, overrides.overriddenLevel("a.b.c.d.Foo"));
    }

    @Test
    void nestedOverrides() {
        overrides.addLevel("a.b.c", INFO);
        overrides.addLevel("a.b.c.d", DEBUG);
        overrides.addLevel("a.b.c.d.e", WARN);
        assertNull(overrides.overriddenLevel("Foo"));
        assertNull(overrides.overriddenLevel("a.Foo"));
        assertNull(overrides.overriddenLevel("a.b.Foo"));
        assertNull(overrides.overriddenLevel("a.b.d.Foo"));
        assertEquals(INFO, overrides.overriddenLevel("a.b.c.Foo"));
        assertEquals(DEBUG, overrides.overriddenLevel("a.b.c.d.Foo"));
        assertEquals(WARN, overrides.overriddenLevel("a.b.c.d.e.Foo"));
    }

    @Test
    void removeLevel() {
        overrides.addLevel("a.b.c", INFO);
        overrides.addLevel("a.b.c.d", DEBUG);
        overrides.addLevel("a.b.c.d.e", WARN);
        assertNull(overrides.overriddenLevel("Foo"));
        assertNull(overrides.overriddenLevel("a.Foo"));
        assertNull(overrides.overriddenLevel("a.b.Foo"));
        assertNull(overrides.overriddenLevel("a.b.d.Foo"));
        assertEquals(INFO, overrides.overriddenLevel("a.b.c.Foo"));
        assertEquals(DEBUG, overrides.overriddenLevel("a.b.c.d.Foo"));
        assertEquals(WARN, overrides.overriddenLevel("a.b.c.d.e.Foo"));

        overrides.removeLevel("a.b.c");
        assertNull(overrides.overriddenLevel("Foo"));
        assertNull(overrides.overriddenLevel("a.Foo"));
        assertNull(overrides.overriddenLevel("a.b.Foo"));
        assertNull(overrides.overriddenLevel("a.b.d.Foo"));
        assertNull(overrides.overriddenLevel("a.b.c.Foo"));
        assertEquals(DEBUG, overrides.overriddenLevel("a.b.c.d.Foo"));
        assertEquals(WARN, overrides.overriddenLevel("a.b.c.d.e.Foo"));

        overrides.removeLevel("a.b.c.d");
        assertNull(overrides.overriddenLevel("Foo"));
        assertNull(overrides.overriddenLevel("a.Foo"));
        assertNull(overrides.overriddenLevel("a.b.Foo"));
        assertNull(overrides.overriddenLevel("a.b.d.Foo"));
        assertNull(overrides.overriddenLevel("a.b.c.Foo"));
        assertNull(overrides.overriddenLevel("a.b.c.d.Foo"));
        assertEquals(WARN, overrides.overriddenLevel("a.b.c.d.e.Foo"));

        overrides.removeLevel("a.b.c.d.e");
        assertNull(overrides.overriddenLevel("Foo"));
        assertNull(overrides.overriddenLevel("a.Foo"));
        assertNull(overrides.overriddenLevel("a.b.Foo"));
        assertNull(overrides.overriddenLevel("a.b.d.Foo"));
        assertNull(overrides.overriddenLevel("a.b.c.Foo"));
        assertNull(overrides.overriddenLevel("a.b.c.d.Foo"));
        assertNull(overrides.overriddenLevel("a.b.c.d.e.Foo"));
    }
}