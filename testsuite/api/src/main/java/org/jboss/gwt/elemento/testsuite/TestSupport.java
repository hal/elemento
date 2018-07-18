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

import com.google.gwt.core.client.GWT;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLElement;
import elemental2.dom.Node;
import elemental2.dom.NodeList;
import org.jboss.gwt.elemento.core.Elements;
import org.jboss.gwt.elemento.core.builder.HtmlContentBuilder;

import static org.jboss.gwt.elemento.testsuite.CSS.clazz;
import static org.jboss.gwt.elemento.testsuite.CSS.error;
import static org.jboss.gwt.elemento.testsuite.CSS.ok;
import static org.jboss.gwt.elemento.testsuite.CSS.test;

public final class TestSupport {

    private static final HTMLElement content = (HTMLElement) DomGlobal.document.getElementById("content");
    private static final HTMLElement console = (HTMLElement) DomGlobal.document.getElementById("console");
    private static HTMLElement methods = null;
    private static HTMLElement currentMethod = null;
    private static State state = State.NONE;

    static {
        GWT.setUncaughtExceptionHandler(e -> {
            String message = e != null && e.getMessage() != null ? e.getMessage() : "Unknwon error";
            switch (state) {
                case NONE:
                    console.appendChild(
                            Elements.div().css(test, message)
                                    .add(Elements.p().textContent(message))
                                    .asElement());
                    break;
                case TEST:
                    methods.appendChild(Elements.li().css(error).textContent(message).asElement());
                    break;
                case METHOD:
                    currentMethod.classList.remove(ok);
                    currentMethod.classList.add(error);
                    currentMethod.textContent += ": " + message;
                    break;
                default:
                    break;
            }
        });
    }

    public static void logTest(String name) {
        console.appendChild(
                Elements.div().id(name).css(test)
                        .add(Elements.p().css(clazz).textContent(name))
                        .add(methods = Elements.ul().css(CSS.methods).asElement())
                        .asElement());
        state = State.TEST;
    }

    public static void logMethod(String name) {
        if (state == State.NONE) {
            throw new IllegalStateException("Missing call to test(String)");
        }
        methods.appendChild(currentMethod = Elements.li().css(ok).textContent(name).asElement());
        state = State.METHOD;
    }

    public static HtmlContentBuilder<HTMLElement> builder() {
        return new HtmlContentBuilder<>(content);
    }

    public static HTMLElement element() {
        return content;
    }

    public static HTMLElement firstElementChild() {
        return (HTMLElement) content.firstElementChild;
    }

    public static Node node() {
        return content;
    }

    public static NodeList<Node> childNodes() {
        return content.childNodes;
    }

    public static void clear() {
        Elements.removeChildrenFrom(content);
    }

    private TestSupport() {
    }

    enum State {
        NONE, TEST, METHOD,
    }

}
