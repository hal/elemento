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

import static org.junit.jupiter.api.Assertions.assertArrayEquals;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNull;

class PathTest {

    @Test
    void normalize() {
        assertNull(Path.normalize(null));
        assertEquals("/", Path.normalize(""));
        assertEquals("/", Path.normalize("/"));
        assertEquals("/", Path.normalize("//"));
        assertEquals("/a", Path.normalize("a"));
        assertEquals("/a", Path.normalize("/a"));
        assertEquals("/a", Path.normalize("a/"));
        assertEquals("/a", Path.normalize("/a/"));
        assertEquals("/a/b", Path.normalize("a/b"));
        assertEquals("/a/b", Path.normalize("/a/b"));
        assertEquals("/a/b", Path.normalize("a/b/"));
        assertEquals("/a/b", Path.normalize("/a/b/"));
    }

    @Test
    void split() {
        assertArrayEquals(new String[0], Path.split(null));
        assertArrayEquals(new String[0], Path.split(""));
        assertArrayEquals(new String[0], Path.split("/"));
        assertArrayEquals(new String[0], Path.split("//"));
        assertArrayEquals(new String[]{"a"}, Path.split("a"));
        assertArrayEquals(new String[]{"a"}, Path.split("/a"));
        assertArrayEquals(new String[]{"a"}, Path.split("a/"));
        assertArrayEquals(new String[]{"a"}, Path.split("/a/"));
        assertArrayEquals(new String[]{"a", "b"}, Path.split("a/b"));
        assertArrayEquals(new String[]{"a", "b"}, Path.split("/a/b"));
        assertArrayEquals(new String[]{"a", "b"}, Path.split("a/b/"));
        assertArrayEquals(new String[]{"a", "b"}, Path.split("/a/b/"));
    }
}
