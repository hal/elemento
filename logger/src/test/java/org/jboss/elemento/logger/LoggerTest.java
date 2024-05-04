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
    void shouldLog() {
        Logger logger = Logger.getLogger("foo");

        Logger.level = OFF;
        assertFalse(logger.shouldLog(ERROR));
        assertFalse(logger.shouldLog(WARN));
        assertFalse(logger.shouldLog(INFO));
        assertFalse(logger.shouldLog(DEBUG));

        Logger.level = ERROR;
        assertTrue(logger.shouldLog(ERROR));
        assertFalse(logger.shouldLog(WARN));
        assertFalse(logger.shouldLog(INFO));
        assertFalse(logger.shouldLog(DEBUG));

        Logger.level = WARN;
        assertTrue(logger.shouldLog(ERROR));
        assertTrue(logger.shouldLog(WARN));
        assertFalse(logger.shouldLog(INFO));
        assertFalse(logger.shouldLog(DEBUG));

        Logger.level = INFO;
        assertTrue(logger.shouldLog(ERROR));
        assertTrue(logger.shouldLog(WARN));
        assertTrue(logger.shouldLog(INFO));
        assertFalse(logger.shouldLog(DEBUG));

        Logger.level = DEBUG;
        assertTrue(logger.shouldLog(ERROR));
        assertTrue(logger.shouldLog(WARN));
        assertTrue(logger.shouldLog(INFO));
        assertTrue(logger.shouldLog(DEBUG));
    }

    @Test
    void shouldLogRootInfoOverriddenDebug() {
        Logger.level = INFO;
        Logger.levelOverrides.addLevel("x.y", DEBUG);

        Logger foo = Logger.getLogger("a.b.c.Foo");
        assertTrue(foo.shouldLog(ERROR));
        assertTrue(foo.shouldLog(WARN));
        assertTrue(foo.shouldLog(INFO));
        assertFalse(foo.shouldLog(DEBUG));

        Logger bar = Logger.getLogger("x.y.z.Bar");
        assertTrue(bar.shouldLog(ERROR));
        assertTrue(bar.shouldLog(WARN));
        assertTrue(bar.shouldLog(INFO));
        assertTrue(bar.shouldLog(DEBUG));
    }

    @Test
    void shouldLogRootDebugOverriddenInfo() {
        Logger.level = DEBUG;
        Logger.levelOverrides.addLevel("x.y", INFO);

        Logger foo = Logger.getLogger("a.b.c.Foo");
        assertTrue(foo.shouldLog(ERROR));
        assertTrue(foo.shouldLog(WARN));
        assertTrue(foo.shouldLog(INFO));
        assertTrue(foo.shouldLog(DEBUG));

        Logger bar = Logger.getLogger("x.y.z.Bar");
        assertTrue(bar.shouldLog(ERROR));
        assertTrue(bar.shouldLog(WARN));
        assertTrue(bar.shouldLog(INFO));
        assertFalse(bar.shouldLog(DEBUG));
    }

    @Test
    void shouldLogMultipleOverrides() {
        Logger.level = WARN;
        Logger.levelOverrides.addLevel("a.b", INFO);
        Logger.levelOverrides.addLevel("a.b.c", DEBUG);
        Logger normal = Logger.getLogger("a.Normal");
        Logger foo = Logger.getLogger("a.b.Foo");
        Logger bar = Logger.getLogger("a.b.d.Bar");
        Logger extra = Logger.getLogger("a.b.c.Extra");

        assertFalse(normal.shouldLog(INFO));
        assertFalse(normal.shouldLog(DEBUG));

        assertTrue(foo.shouldLog(INFO));
        assertFalse(foo.shouldLog(DEBUG));

        assertTrue(bar.shouldLog(INFO));
        assertFalse(bar.shouldLog(DEBUG));

        assertTrue(extra.shouldLog(DEBUG));
    }
}
