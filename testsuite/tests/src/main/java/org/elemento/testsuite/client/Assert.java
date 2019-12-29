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

import java.util.List;

import elemental2.dom.HTMLElement;
import elemental2.dom.Node;

import static org.elemento.testsuite.Assert.assertTag;

final class Assert {

    static void assertElements(List<HTMLElement> elements) {
        assert 2 == elements.size() : "Two elements expected";
        assertTag(elements.get(0), "DIV");
        assertTag(elements.get(1), "P");
    }

    static void assertNodes(List<Node> nodes) {
        assert 5 == nodes.size() : "Five nodes expected";
        assert nodes.get(0).nodeType == Node.COMMENT_NODE : "First node must be a comment";
        assert nodes.get(1).nodeType == Node.ELEMENT_NODE : "First node must be an element";
        assert nodes.get(2).nodeType == Node.TEXT_NODE : "First node must be a text";
        assert nodes.get(3).nodeType == Node.ELEMENT_NODE : "First node must be an element";
        assert nodes.get(4).nodeType == Node.TEXT_NODE : "First node must be a text";
    }

    private Assert() {
    }
}
