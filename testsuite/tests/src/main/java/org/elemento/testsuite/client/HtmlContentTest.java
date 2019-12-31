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

package org.elemento.testsuite.client;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import org.gwtproject.safehtml.shared.SafeHtmlUtils;
import org.elemento.core.builder.HtmlContentBuilder;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.elemento.Elements.div;
import static org.elemento.testsuite.Assert.assertTag;
import static org.elemento.testsuite.TestPage.clear;
import static org.elemento.testsuite.TestPage.main;

public class HtmlContentTest {

    HtmlContentBuilder<HTMLDivElement> div;

    @BeforeEach
    public void setUp() {
        clear();
        div = div();
        main().add(div);
    }

    @Test
    public void newTag() {
        assertTag(firstChild(), "div");
    }

    @Test
    public void id() {
        div.id("foo");
        assert "foo".equals(firstChild().id);
    }

    @Test
    public void title() {
        div.title("foo");
        assert "foo".equals(firstChild().title);
    }

    @Test
    public void singleCss() {
        div.css("foo");
        assert firstChild().classList.length == 1;
        assert firstChild().classList.contains("foo");
    }

    @Test
    public void multipleCss() {
        div.css("foo", "bar");
        assert firstChild().classList.length == 2;
        assert firstChild().classList.contains("foo");
        assert firstChild().classList.contains("bar");
    }

    @Test
    public void mixedCss() {
        div.css("foo bar", "bat");
        assert firstChild().classList.length == 3;
        assert firstChild().classList.contains("foo");
        assert firstChild().classList.contains("bar");
        assert firstChild().classList.contains("bat");
    }

    @Test
    void toggle() {
        div.toggle("foo");
        assert firstChild().classList.length == 1;
        assert firstChild().classList.contains("foo");

        div.toggle("foo");
        assert firstChild().classList.length == 0;
        assert !firstChild().classList.contains("foo");
    }

    @Test
    void style() {
        div.style("color: black");
        assert "black".equals(firstChild().style.color);
    }

    @Test
    void attr() {
        div.attr("foo", "bar");
        assert "bar".equals(firstChild().getAttribute("foo"));
    }

    @Test
    void data() {
        div.data("data-key1", "value1");
        assert "value1".equals(firstChild().dataset.get("key1"));

        div.data("key2", "value2");
        assert "value2".equals(firstChild().dataset.get("key2"));
    }

    @Test
    void aria() {
        div.aria("aria-key1", "value1");
        assert "value1".equals(firstChild().getAttribute("aria-key1"));

        div.aria("key2", "value2");
        assert "value2".equals(firstChild().getAttribute("aria-key2"));
    }

    @Test
    void apply() {
        div.apply(e -> e.draggable = false);
        assert firstChild().draggable == false;
    }

    @Test
    void textContent() {
        div.textContent("foo");
        assert "foo".equals(firstChild().textContent);
    }

    @Test
    void innerHTML() {
        div.innerHtml(SafeHtmlUtils.fromString("foo"));
        assert "foo".equals(firstChild().innerHTML);
    }

    private HTMLElement firstChild() {
        return (HTMLElement) main().element().firstElementChild;
    }
}
