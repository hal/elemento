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

import java.util.List;

import elemental2.dom.HTMLElement;
import org.gwtproject.safehtml.shared.SafeHtmlUtils;
import org.jboss.gwt.elemento.testsuite.Before;
import org.jboss.gwt.elemento.testsuite.Test;

import static java.util.stream.Collectors.toList;
import static org.jboss.gwt.elemento.core.Elements.asHtmlElement;
import static org.jboss.gwt.elemento.core.Elements.htmlElements;
import static org.jboss.gwt.elemento.core.Elements.stream;
import static org.jboss.gwt.elemento.testsuite.TestSupport.builder;
import static org.jboss.gwt.elemento.testsuite.TestSupport.childNodes;
import static org.jboss.gwt.elemento.testsuite.TestSupport.element;
import static org.jboss.gwt.elemento.testsuite.TestSupport.node;
import static org.jboss.gwt.elemento.testsuite.client.Assert.assertElements;
import static org.jboss.gwt.elemento.testsuite.client.Fixtures.HTML;

public class FilterMapTest {

    @Before
    public void setUp() {
        builder().innerHtml(SafeHtmlUtils.fromTrustedString(HTML));
    }

    @Test
    public void filterMapArrayLike() {
        List<HTMLElement> elements = stream(childNodes())
                .filter(htmlElements())
                .map(asHtmlElement())
                .collect(toList());
        assertElements(elements);
    }

    @Test
    public void filterMapElements() {
        List<HTMLElement> elements = stream(element())
                .filter(htmlElements())
                .map(asHtmlElement())
                .collect(toList());
        assertElements(elements);
    }

    @Test
    public void filterMapNodes() {
        List<HTMLElement> elements = stream(node())
                .filter(htmlElements())
                .map(asHtmlElement())
                .collect(toList());
        assertElements(elements);
    }
}
