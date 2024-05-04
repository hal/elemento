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

import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

class ParameterTest {

    @Test
    void isParameters() {
        assertFalse(Parameter.isParameter(null));
        assertFalse(Parameter.isParameter(""));
        assertFalse(Parameter.isParameter(" "));
        assertFalse(Parameter.isParameter(":"));
        assertFalse(Parameter.isParameter("::"));
        assertFalse(Parameter.isParameter(":::"));
        assertFalse(Parameter.isParameter("a"));
        assertFalse(Parameter.isParameter("a:"));
        assertFalse(Parameter.isParameter("a:b"));
        assertFalse(Parameter.isParameter("a:b:"));

        assertTrue(Parameter.isParameter(":a"));
        assertTrue(Parameter.isParameter(":a:b"));
    }

    @Test
    void hasParameters() {
        assertFalse(Parameter.hasParameter(null));
        assertFalse(Parameter.hasParameter(""));
        assertFalse(Parameter.hasParameter(" "));
        assertFalse(Parameter.hasParameter("/"));
        assertFalse(Parameter.hasParameter(":"));
        assertFalse(Parameter.hasParameter("::"));
        assertFalse(Parameter.hasParameter(":::"));
        assertFalse(Parameter.hasParameter(":/"));
        assertFalse(Parameter.hasParameter("/:"));
        assertFalse(Parameter.hasParameter(":/:/:"));
        assertFalse(Parameter.hasParameter("a"));
        assertFalse(Parameter.hasParameter("a:"));
        assertFalse(Parameter.hasParameter("a:b"));
        assertFalse(Parameter.hasParameter("a:b:"));
        assertFalse(Parameter.hasParameter("/a/b/c"));

        assertTrue(Parameter.hasParameter(":a"));
        assertTrue(Parameter.hasParameter(":a:b"));
        assertTrue(Parameter.hasParameter(":a/"));
        assertTrue(Parameter.hasParameter("/:a"));
        assertTrue(Parameter.hasParameter(":a/b"));
        assertTrue(Parameter.hasParameter("/:a/b"));
        assertTrue(Parameter.hasParameter("/a/:b/c"));
        assertTrue(Parameter.hasParameter("/:a/:b/:c"));
    }

    @Test
    void match() {
        assertFalse(Parameter.match("/a/:b/c", ""));
        assertFalse(Parameter.match("/a/:b/c", "foo"));
        assertFalse(Parameter.match("/a/:b/c", "/a"));
        assertFalse(Parameter.match("/a/:b/c", "/a/b"));
        assertFalse(Parameter.match("/a/:b/c", "/a/b/c/d"));
        assertTrue(Parameter.match("/:a", "/value0"));
        assertTrue(Parameter.match("/:a", "/value0"));
        assertTrue(Parameter.match("/:a/b/:c", "/value0/b/value1"));
    }

    @Test
    void parameter() {
        new Parameter(":a", "/value0");
        new Parameter("/:a/b/:c", "/value0/b/value1");
    }
}
