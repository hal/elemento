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

class ByTest {

    @Test
    void bySelector() {
        assertEquals("#foo > .bar:hover", By.selector("#foo > .bar:hover").selector());
    }

    @Test
    void byId() {
        assertEquals("#id", By.id("id").selector());
    }

    @Test
    void byElement() {
        assertEquals("button", By.element("button").selector());
    }

    @Test
    void byClassname() {
        assertEquals(".single-class", By.classname("single-class").selector());
        assertEquals(".fas.fa-check", By.classname(new String[]{"fas", "fa-check"}).selector());
    }

    @Test
    void byAttribute() {
        assertEquals("[attr]", By.attribute("attr").selector());
        assertEquals("[attr=value]", By.attribute("attr", "value").selector());
    }

    @Test
    void byAttributePosition() {
        assertEquals("[attr^=value]", By.attributeStarts("attr", "value").selector());
        assertEquals("[attr$=value]", By.attributeEnds("attr", "value").selector());
        assertEquals("[attr*=value]", By.attributeContains("attr", "value").selector());
    }

    @Test
    void byAttributeQuotes() {
        assertEquals("[attr=--value]", By.attribute("attr", "--value").selector());
        assertEquals("[attr=value-with-0815_and-under-score]",
                By.attribute("attr", "value-with-0815_and-under-score").selector());
        assertEquals("[attr=\"va.lue\"]", By.attribute("attr", "va.lue").selector());
        assertEquals("[attr=\"v a l u e\"]", By.attribute("attr", "v a l u e").selector());
        assertEquals("[attr=\"http://redhat.com\"]", By.attribute("attr", "http://redhat.com").selector());
        assertEquals("[attr=\"-\"]", By.attribute("attr", "-").selector());
        assertEquals("[attr=\"-1-m\"]", By.attribute("attr", "-1-m").selector());
        assertEquals("[attr=\"0815\"]", By.attribute("attr", "0815").selector());
    }

    @Test
    void byData() {
        assertEquals("[data-item]", By.data("item").selector());
        assertEquals("[data-item=value]", By.data("item", "value").selector());
        assertEquals("[data-pretty-long-data-item]", By.data("prettyLongDataItem").selector());
    }

    @Test
    void byDataPosition() {
        assertEquals("[data-item^=value]", By.dataStarts("item", "value").selector());
        assertEquals("[data-item$=value]", By.dataEnds("item", "value").selector());
        assertEquals("[data-item*=value]", By.dataContains("item", "value").selector());
    }

    @Test
    void and() {
        assertEquals("div.class", By.element("div").and(By.classname("class")).selector());
    }

    @Test
    void descendant() {
        assertEquals(".foo .bar", By.classname("foo").descendant(By.classname("bar")).selector());
        assertEquals(".foo .bar #id",
                By.classname("foo").descendant(By.classname("bar").descendant(By.id("id"))).selector());
    }

    @Test
    void child() {
        assertEquals(".foo > .bar", By.classname("foo").child(By.classname("bar")).selector());
        assertEquals(".foo > .bar > #id", By.classname("foo").child(By.classname("bar").child(By.id("id"))).selector());
    }

    @Test
    void adjacentSibling() {
        assertEquals(".foo + .bar", By.classname("foo").adjacentSibling(By.classname("bar")).selector());
        assertEquals(".foo + .bar + #id",
                By.classname("foo").adjacentSibling(By.classname("bar").adjacentSibling(By.id("id"))).selector());
    }

    @Test
    void sibling() {
        assertEquals(".foo ~ .bar", By.classname("foo").sibling(By.classname("bar")).selector());
        assertEquals(".foo ~ .bar ~ #id",
                By.classname("foo").sibling(By.classname("bar").sibling(By.id("id"))).selector());
    }

    @Test
    void all() {
        assertEquals("#foo, .bar, button", By.all(By.id("foo"), By.classname("bar"), By.element("button")).selector());
    }

    @Test
    void differentNesting() {
        By toplevel = By.id("id")
                .descendant(By.element("ul"))
                .child(By.classname("foo"))
                .sibling(By.data("item"));
        By nested = By.id("id")
                .descendant(By.element("ul")
                        .child(By.classname("foo")
                                .sibling(By.data("item"))));
        assertEquals(toplevel.selector(), nested.selector());
    }
}