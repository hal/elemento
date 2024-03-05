/*
 *  Copyright 2023 Red Hat
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */
package org.jboss.elemento.router;

import org.jboss.elemento.By;

import elemental2.dom.HTMLAnchorElement;

class LinkSelector {

    private final By selector;
    private final boolean not;

    LinkSelector() {
        this((By) null, false);
    }

    LinkSelector(String selector) {
        this(By.selector(selector), false);
    }

    LinkSelector(String selector, boolean not) {
        this(By.selector(selector), not);
    }

    LinkSelector(By selector) {
        this(selector, false);
    }

    LinkSelector(By selector, boolean not) {
        this.selector = selector;
        this.not = not;
    }

    boolean matches(HTMLAnchorElement a) {
        if (selector == null) {
            return true;
        }
        if (not) {
            return !a.matches(selector.toString());
        } else {
            return a.matches(selector.toString());
        }
    }
}
