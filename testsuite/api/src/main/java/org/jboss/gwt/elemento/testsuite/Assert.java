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

public final class Assert {

    public static void assertTag(HTMLElement element, String name) {
        if (!element.tagName.equalsIgnoreCase(name)) {
            fail("assertTag: \"" + element.tagName + "\" != \"" + name + "\"");
        }
    }

    public static void assertAttribute(HTMLElement element, String name, String value) {
        String actual = element.getAttribute(name);
        if (actual == null) {
            fail("assertAttribute: " + element.tagName + "[" + name + "] == null");
        } else if (!actual.equals(value)) {
            fail("assertAttribute: \"" + actual + "\" != \"" + value + "\"");
        }
    }

    private static void fail(String error) {
        throw new AssertionError(error);
    }

    private Assert() {
    }
}
