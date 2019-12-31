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

package org.elemento.testsuite.internal;

import com.google.gwt.core.client.EntryPoint;
import elemental2.dom.HTMLPreElement;
import elemental2.dom.HTMLUListElement;
import org.elemento.By;
import org.elemento.core.builder.HtmlContentBuilder;

import static elemental2.dom.DomGlobal.document;
import static org.elemento.Elements.find;
import static org.elemento.Elements.pre;
import static org.elemento.Elements.ul;

public abstract class TestSuite implements EntryPoint {

    int tests;
    int failures;
    HtmlContentBuilder<HTMLPreElement> headerElement;
    HtmlContentBuilder<HTMLPreElement> footerElement;
    HtmlContentBuilder<HTMLUListElement> testsElement;

    protected TestSuite() {
        this.tests = 0;
        this.failures = 0;
    }

    @Override
    public void onModuleLoad() {
        headerElement = pre(find(document, By.classname("ts-header")));
        testsElement = ul(find(document, By.classname("ts-tests")));
        footerElement = pre(find(document, By.classname("ts-footer")));
        headerElement.textContent(box("T E S S T"));

        run();

        footerElement.css(failures > 0 ? "ts-failure" : "ts-success");
        footerElement.textContent(box("Tests run: " + tests + ", Failures: " + failures));
    }

    public abstract void run();

    private String box(String text) {
        StringBuilder builder = new StringBuilder();
        for (int i = 0; i < 60; i++) {
            builder.append("-");
        }
        builder.append('\n').append(text).append('\n');
        for (int i = 0; i < 60; i++) {
            builder.append("-");
        }
        return builder.toString();
    }
}
