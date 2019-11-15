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

package org.jboss.gwt.elemento.testsuite;

import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.Node;
import elemental2.dom.NodeList;
import org.jboss.gwt.elemento.core.By;
import org.jboss.gwt.elemento.core.Elements;
import org.jboss.gwt.elemento.core.builder.HtmlContentBuilder;

import static elemental2.dom.DomGlobal.document;
import static org.jboss.gwt.elemento.core.Elements.div;
import static org.jboss.gwt.elemento.core.Elements.find;

public final class TestPage {

    private static final HtmlContentBuilder<HTMLDivElement> content = div(find(document, By.classname("ts-content")));

    public static HtmlContentBuilder<HTMLDivElement> content() {
        return content;
    }

    public static HTMLElement element() {
        return content.element();
    }

    public static HTMLElement firstElementChild() {
        return (HTMLElement) content.element().firstElementChild;
    }

    public static Node node() {
        return content.element();
    }

    public static NodeList<Node> childNodes() {
        return content.element().childNodes;
    }

    public static void clear() {
        Elements.removeChildrenFrom(content);
    }

    private TestPage() {
    }
}
