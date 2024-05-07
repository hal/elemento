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
import static org.jboss.elemento.logger.Level.ERROR;
import static org.jboss.elemento.logger.Level.INFO;
import static org.jboss.elemento.logger.Level.OFF;
import static org.jboss.elemento.logger.Level.WARN;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertNotSame;
import static org.junit.jupiter.api.Assertions.assertSame;
import static org.junit.jupiter.api.Assertions.assertTrue;

class LoggerTest {

    @BeforeEach
    void beforeEach() {
        Logger.level = INFO;
        Logger.loggers.clear();
        Logger.levelOverrides.levels.clear();
    }

    @Test
    void getNullLogger() {
        Logger logger = Logger.getLogger(null);
        assertNotNull(logger);
        assertSame(logger, Logger.getLogger(null));
    }

    @Test
    void getEmptyLogger() {
        Logger logger = Logger.getLogger("");
        assertNotNull(logger);
        assertSame(logger, Logger.getLogger(""));
    }

    @Test
    void getLogger() {
        Logger foo = Logger.getLogger("foo");
        Logger bar = Logger.getLogger("bar");
        assertNotNull(foo);
        assertNotNull(bar);
        assertSame(foo, Logger.getLogger("foo"));
        assertSame(bar, Logger.getLogger("bar"));
        assertNotSame(foo, bar);
    }

    @Test
    void isEnabled() {
        Logger logger = Logger.getLogger("foo");

        Logger.level = OFF;
        assertFalse(logger.isEnabled(ERROR));
        assertFalse(logger.isEnabled(WARN));
        assertFalse(logger.isEnabled(INFO));
        assertFalse(logger.isEnabled(DEBUG));

        Logger.level = ERROR;
        assertTrue(logger.isEnabled(ERROR));
        assertFalse(logger.isEnabled(WARN));
        assertFalse(logger.isEnabled(INFO));
        assertFalse(logger.isEnabled(DEBUG));

        Logger.level = WARN;
        assertTrue(logger.isEnabled(ERROR));
        assertTrue(logger.isEnabled(WARN));
        assertFalse(logger.isEnabled(INFO));
        assertFalse(logger.isEnabled(DEBUG));

        Logger.level = INFO;
        assertTrue(logger.isEnabled(ERROR));
        assertTrue(logger.isEnabled(WARN));
        assertTrue(logger.isEnabled(INFO));
        assertFalse(logger.isEnabled(DEBUG));

        Logger.level = DEBUG;
        assertTrue(logger.isEnabled(ERROR));
        assertTrue(logger.isEnabled(WARN));
        assertTrue(logger.isEnabled(INFO));
        assertTrue(logger.isEnabled(DEBUG));
    }

    @Test
    void isEnabledRootInfoOverriddenDebug() {
        Logger.level = INFO;
        Logger.levelOverrides.addLevel("x.y", DEBUG);

        Logger foo = Logger.getLogger("a.b.c.Foo");
        assertTrue(foo.isEnabled(ERROR));
        assertTrue(foo.isEnabled(WARN));
        assertTrue(foo.isEnabled(INFO));
        assertFalse(foo.isEnabled(DEBUG));

        Logger bar = Logger.getLogger("x.y.z.Bar");
        assertTrue(bar.isEnabled(ERROR));
        assertTrue(bar.isEnabled(WARN));
        assertTrue(bar.isEnabled(INFO));
        assertTrue(bar.isEnabled(DEBUG));
    }

    @Test
    void isEnabledRootDebugOverriddenInfo() {
        Logger.level = DEBUG;
        Logger.levelOverrides.addLevel("x.y", INFO);

        Logger foo = Logger.getLogger("a.b.c.Foo");
        assertTrue(foo.isEnabled(ERROR));
        assertTrue(foo.isEnabled(WARN));
        assertTrue(foo.isEnabled(INFO));
        assertTrue(foo.isEnabled(DEBUG));

        Logger bar = Logger.getLogger("x.y.z.Bar");
        assertTrue(bar.isEnabled(ERROR));
        assertTrue(bar.isEnabled(WARN));
        assertTrue(bar.isEnabled(INFO));
        assertFalse(bar.isEnabled(DEBUG));
    }

    @Test
    void isEnabledMultipleOverrides() {
        Logger.level = WARN;
        Logger.levelOverrides.addLevel("a.b", INFO);
        Logger.levelOverrides.addLevel("a.b.c", DEBUG);
        Logger normal = Logger.getLogger("a.Normal");
        Logger foo = Logger.getLogger("a.b.Foo");
        Logger bar = Logger.getLogger("a.b.d.Bar");
        Logger extra = Logger.getLogger("a.b.c.Extra");

        assertFalse(normal.isEnabled(INFO));
        assertFalse(normal.isEnabled(DEBUG));

        assertTrue(foo.isEnabled(INFO));
        assertFalse(foo.isEnabled(DEBUG));

        assertTrue(bar.isEnabled(INFO));
        assertFalse(bar.isEnabled(DEBUG));

        assertTrue(extra.isEnabled(DEBUG));
    }
}
