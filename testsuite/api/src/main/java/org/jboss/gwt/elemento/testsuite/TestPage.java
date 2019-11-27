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

import elemental2.dom.HTMLElement;
import org.jboss.gwt.elemento.core.By;
import org.jboss.gwt.elemento.core.Elements;
import org.jboss.gwt.elemento.core.builder.HtmlContentBuilder;

import static elemental2.dom.DomGlobal.document;
import static org.jboss.gwt.elemento.core.Elements.find;
import static org.jboss.gwt.elemento.core.Elements.removeChildrenFrom;

/** Provides access to the elements on the test page. */
public final class TestPage {

    private static final HtmlContentBuilder<HTMLElement> main = Elements.main(find(document, By.element("main")));

    /** Returns the HTML content builder for the main element. */
    public static HtmlContentBuilder<HTMLElement> main() {
        return main;
    }

    public static void clear() {
        removeChildrenFrom(main);
    }

    private TestPage() {
    }
}
