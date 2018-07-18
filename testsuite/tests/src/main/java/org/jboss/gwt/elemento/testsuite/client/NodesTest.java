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

package org.jboss.gwt.elemento.testsuite.client;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import elemental2.dom.Node;
import org.gwtproject.safehtml.shared.SafeHtmlUtils;
import org.jboss.gwt.elemento.testsuite.Before;
import org.jboss.gwt.elemento.testsuite.Test;

import static java.util.stream.Collectors.toList;
import static org.jboss.gwt.elemento.core.Elements.iterator;
import static org.jboss.gwt.elemento.core.Elements.stream;
import static org.jboss.gwt.elemento.testsuite.TestSupport.builder;
import static org.jboss.gwt.elemento.testsuite.TestSupport.node;
import static org.jboss.gwt.elemento.testsuite.client.Assert.assertNodes;
import static org.jboss.gwt.elemento.testsuite.client.Fixtures.HTML;

public class NodesTest {

    @Before
    public void setUp() {
        builder().innerHtml(SafeHtmlUtils.fromTrustedString(HTML));
    }

    @Test
    public void nodeIterator() {
        List<Node> nodes = new ArrayList();
        Iterator<Node> iterator = iterator(node());
        while (iterator.hasNext()) {
            nodes.add(iterator.next());
        }
        assertNodes(nodes);
    }

    @Test
    public void nodeStream() {
        List<Node> nodes = stream(node()).collect(toList());
        assertNodes(nodes);
    }
}
