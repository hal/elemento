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
package org.jboss.elemento.sample.j2cl;

public enum Filter {
    ALL("#/"), ACTIVE("#/active"), COMPLETED("#/completed");

    private final String fragment;

    Filter(String fragment) {
        this.fragment = fragment;
    }

    public String fragment() {
        return fragment;
    }

    public String filter() {
        return name().toLowerCase();
    }

    @SuppressWarnings("Duplicates")
    public static Filter parseToken(String token) {
        if (token == null) {
            return ALL;
        } else {
            switch (token) {
                case "#/active":
                    return ACTIVE;
                case "#/completed":
                    return COMPLETED;
                case "#/":
                default:
                    return ALL;
            }
        }
    }
}
