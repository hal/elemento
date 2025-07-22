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

import static org.junit.jupiter.api.Assertions.assertEquals;

class BaseTest {

    @Test
    void nil() {
        assertEquals("", new Base(null).base);
    }

    @Test
    void empty() {
        assertEquals("", new Base("").base);
    }

    @Test
    void base() {
        assertEquals("a", new Base("a").base);
        assertEquals("a", new Base("/a").base);
        assertEquals("a/b", new Base("a/b").base);
        assertEquals("a/b", new Base("/a/b").base);
    }

    @Test
    void noop() {
        assertEquals("foo", new Base(null).relative("foo"));
        assertEquals("foo", new Base("").relative("foo"));
        assertEquals("foo", new Base("/").relative("foo"));
        assertEquals("foo", new Base("a").relative("foo"));
        assertEquals("foo", new Base("/a").relative("foo"));
        assertEquals("foo", new Base("/a/b/c").relative("foo"));
    }

    @Test
    void relative() {
        Base empty = new Base("/");
        assertEquals("/a", empty.relative("/a"));
        assertEquals("/a/b", empty.relative("/a/b"));
        assertEquals("/a/b/c", empty.relative("/a/b/c"));

        Base simple = new Base("/a");
        assertEquals("/", simple.relative("/a"));
        assertEquals("/b", simple.relative("/a/b"));
        assertEquals("/b/c", simple.relative("/a/b/c"));

        Base nested = new Base("/a/b");
        assertEquals("/a", nested.relative("/a"));
        assertEquals("/", nested.relative("/a/b"));
        assertEquals("/c", nested.relative("/a/b/c"));
    }

    @Test
    void absolute() {
        Base empty = new Base("/");
        assertEquals("/a", empty.absolute("/a"));
        assertEquals("/a/b", empty.absolute("/a/b"));
        assertEquals("/a/b/c", empty.absolute("/a/b/c"));

        Base simple = new Base("/a");
        assertEquals("/a/a", simple.absolute("/a"));
        assertEquals("/a/a/b", simple.absolute("/a/b"));
        assertEquals("/a/a/b/c", simple.absolute("/a/b/c"));

        Base nested = new Base("/a/b");
        assertEquals("/a/b/a", nested.absolute("/a"));
        assertEquals("/a/b/a/b", nested.absolute("/a/b"));
        assertEquals("/a/b/a/b/c", nested.absolute("/a/b/c"));
    }
}
