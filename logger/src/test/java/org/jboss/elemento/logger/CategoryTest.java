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

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

class CategoryTest {

    @Test
    void blank() {
        assertEquals("    <none>", Category.format(null, 10));
        assertEquals("    <none>", Category.format("", 10));
        assertEquals("    <none>", Category.format("   ", 10));
        assertEquals("    <none>", Category.format("             ", 10));
    }

    @Test
    void simple() {
        assertEquals("       foo", Category.format("foo", 10));
        assertEquals("1234567890", Category.format("1234567890", 10));
        assertEquals("characters", Category.format("more than 10 characters", 10));
    }

    @Test
    void fqcn() {
        assertEquals("      a.b.c.Foo", Category.format("a.b.c.Foo", 15));
        assertEquals(".j.e.l.Category", Category.format("org.jboss.elemento.logger.Category", 15));
    }
}