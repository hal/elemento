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
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

class CategoryTest {

    @Test
    void parent() {
        assertEquals("", Category.parent(null));
        assertEquals("", Category.parent(""));
        assertEquals("", Category.parent("Foo"));
        assertEquals("a", Category.parent("a."));
        assertEquals("a.b.c", Category.parent("a.b.c.Foo"));
        assertEquals("a.b", Category.parent("a.b.c"));
        assertEquals("a", Category.parent("a.b"));
    }

    @Test
    void isSubcategory() {
        assertTrue(Category.isSubcategory("a.b.c", "a.b.c.Foo"));
        assertTrue(Category.isSubcategory("a.b", "a.b.c.Foo"));
        assertTrue(Category.isSubcategory(" .", " . "));

        assertFalse(Category.isSubcategory(null, null));
        assertFalse(Category.isSubcategory(null, ""));
        assertFalse(Category.isSubcategory("", null));
        assertFalse(Category.isSubcategory("", ""));
        assertFalse(Category.isSubcategory("", ". "));
        assertFalse(Category.isSubcategory(".", "."));
        assertFalse(Category.isSubcategory(".", ".."));
        assertFalse(Category.isSubcategory("a.", "a."));
        assertFalse(Category.isSubcategory(".a", ".a"));
        assertFalse(Category.isSubcategory(".a.", ".a."));
        assertFalse(Category.isSubcategory("a.", "b."));
        assertFalse(Category.isSubcategory(".a", ".b"));
        assertFalse(Category.isSubcategory(".a.", ".b."));
        assertFalse(Category.isSubcategory("Foo", "Bar"));
        assertFalse(Category.isSubcategory("a.b.c", "Bar"));
        assertFalse(Category.isSubcategory("a.b.c.Foo", "a.b.c"));
        assertFalse(Category.isSubcategory("a.b.c.Foo", "a.b"));
        assertFalse(Category.isSubcategory("a.b.c.Foo", "x.y.z.Bar"));
        assertFalse(Category.isSubcategory("F.o.o", "B.a.r"));
    }

    @Test
    void formatBlank() {
        assertEquals("    <none>", Category.format(null, 10));
        assertEquals("    <none>", Category.format("", 10));
        assertEquals("    <none>", Category.format("   ", 10));
        assertEquals("    <none>", Category.format("             ", 10));
    }

    @Test
    void formatSimple() {
        assertEquals("       foo", Category.format("foo", 10));
        assertEquals("1234567890", Category.format("1234567890", 10));
        assertEquals("characters", Category.format("more than 10 characters", 10));
    }

    @Test
    void FormatNested() {
        assertEquals("      a.b.c.Foo", Category.format("a.b.c.Foo", 15));
        assertEquals(".j.e.l.Category", Category.format("org.jboss.elemento.logger.Category", 15));
    }
}
