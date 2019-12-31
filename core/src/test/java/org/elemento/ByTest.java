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

package org.elemento;

import org.elemento.By;
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
        assertEquals(".fas.fa-check", By.classnames(new String[]{"fas", "fa-check"}).selector());
        assertEquals(".first.second.third", By.classnames("first", "second", "third").selector());
    }

    @Test
    void byAttribute() {
        assertEquals("[attr]", By.attribute("attr").selector());
        assertEquals("[attr=value]", By.attribute("attr", "value").selector());
    }

    @Test
    void byAttributePosition() {
        assertEquals("[attr^=value]", By.attribute("attr", By.AttributeOperator.STARTS_WITH, "value").selector());
        assertEquals("[attr$=value]", By.attribute("attr", By.AttributeOperator.ENDS_WITH, "value").selector());
        assertEquals("[attr*=value]", By.attribute("attr", By.AttributeOperator.CONTAINS, "value").selector());
        assertEquals("[attr~=value]", By.attribute("attr", By.AttributeOperator.CONTAINS_WORD, "value").selector());
        assertEquals("[attr|=value]", By.attribute("attr", By.AttributeOperator.CONTAINS_TOKEN, "value").selector());
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
        assertEquals("[data-pretty-long-data-item]", By.data("pretty-long-data-item").selector());
    }

    @Test
    void byDataPosition() {
        assertEquals("[data-item^=value]", By.data("item", By.AttributeOperator.STARTS_WITH, "value").selector());
        assertEquals("[data-item$=value]", By.data("item", By.AttributeOperator.ENDS_WITH, "value").selector());
        assertEquals("[data-item*=value]", By.data("item", By.AttributeOperator.CONTAINS, "value").selector());
        assertEquals("[data-item~=value]", By.data("item", By.AttributeOperator.CONTAINS_WORD, "value").selector());
        assertEquals("[data-item|=value]", By.data("item", By.AttributeOperator.CONTAINS_TOKEN, "value").selector());
    }

    @Test
    void and() {
        assertEquals("div.class", By.element("div").and(By.classname("class")).selector());
        // the more complicated variant of By.classnames("fas", "fa-check")
        assertEquals(".fas.fa-check", By.classname("fas").and(By.classname("fa-check")).selector());
    }

    @Test
    void descendant() {
        assertEquals(".foo .bar", By.classname("foo").desc(By.classname("bar")).selector());
        assertEquals(".foo .bar #id",
                By.classname("foo").desc(By.classname("bar").desc(By.id("id"))).selector());
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
        assertEquals("#foo, .bar, button",
                By.group(By.id("foo"), By.classname("bar"), By.element("button")).selector());
    }

    @Test
    void differentNesting() {
        By toplevel = By.id("id")
                .desc(By.element("ul"))
                .child(By.classname("foo"))
                .sibling(By.data("item"));
        By nested = By.id("id")
                .desc(By.element("ul")
                        .child(By.classname("foo")
                                .sibling(By.data("item"))));
        assertEquals("#id ul > .foo ~ [data-item]", toplevel.selector());
        assertEquals("#id ul > .foo ~ [data-item]", nested.selector());
        assertEquals(toplevel.selector(), nested.selector());
    }

    @Test
    void complex() {
        String selectorValue = "#main [data-list-item|=foo] a[href^=\"http://\"] > .fas.fa-check, .external[hidden]";
        By selector = By.group(
                By.id("main")
                        .desc(By.data("listItem", By.AttributeOperator.CONTAINS_TOKEN, "foo")
                                .desc(By.element("a")
                                        .and(By.attribute("href", By.AttributeOperator.STARTS_WITH, "http://"))
                                        .child(By.classnames("fas", "fa-check")))),
                By.classname("external").and(By.attribute("hidden"))
        );
        assertEquals(selectorValue, selector.selector());
    }

    @Test
    void objectMethods() {
        By one = By.classname("foo");
        By two = By.classname("foo");
        assertEquals(one, two);
        assertEquals(one.selector(), two.selector());
        assertEquals(one.toString(), two.toString());
        assertEquals(one.hashCode(), two.hashCode());
    }
}