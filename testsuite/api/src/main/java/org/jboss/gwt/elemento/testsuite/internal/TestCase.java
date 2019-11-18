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
package org.jboss.gwt.elemento.testsuite.internal;

import java.util.ArrayList;
import java.util.List;

import elemental2.dom.HTMLLIElement;
import elemental2.dom.HTMLUListElement;
import org.jboss.gwt.elemento.core.builder.HtmlContentBuilder;

import static elemental2.dom.DomGlobal.console;
import static org.jboss.gwt.elemento.core.Elements.li;
import static org.jboss.gwt.elemento.core.Elements.p;
import static org.jboss.gwt.elemento.core.Elements.span;
import static org.jboss.gwt.elemento.core.Elements.ul;

public abstract class TestCase {

    private final TestSuite testSuite;
    private int tests;
    private List<TestFailure> failures;
    private HtmlContentBuilder<HTMLLIElement> testElement;

    protected TestCase(TestSuite testSuite) {
        this.testSuite = testSuite;
        this.tests = 0;
        this.failures = new ArrayList<>();
    }

    public abstract void run();

    protected void startTest(String packageName, String className) {
        testElement = li().data("class", packageName + "." + className)
                .add(p()
                        .add("Running " + packageName + ".")
                        .add(span().css("ts-class-name").textContent(className)));
        testSuite.testsElement.add(testElement);
    }

    protected void startMethod(String method) {
        tests++;
    }

    protected void endMethod() {
        // empty
    }

    protected void endTest() {
        testSuite.tests += tests;
        testSuite.failures += failures.size();

        testElement.add(p()
                .add(span().css("ts-run").textContent("Tests run: " + tests))
                .add(", ")
                .add(span().css("ts-failed").textContent("Failures: " + failures.size())));
        if (!failures.isEmpty()) {
            testElement.css("ts-failure");
            HtmlContentBuilder<HTMLUListElement> ul = ul().css("ts-test-failures");
            for (TestFailure failure : failures) {
                ul.add(li().textContent(failure.method + ": " + failure.description));
            }
            testElement.add(ul);
        } else {
            testElement.css("ts-success");
        }
    }

    protected void addFailure(String method, Throwable t) {
        String error = t != null && t.getMessage() != null ? t.getMessage() : "Unknown error";
        failures.add(new TestFailure(method, error));
        console.error(error);
    }
}
