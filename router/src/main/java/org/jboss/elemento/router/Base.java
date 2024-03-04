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

final class Base {

    final String base;
    private final String slashBase;
    private final boolean empty;

    Base(String base) {
        this.base = base == null || base.isEmpty() ? "" : base.startsWith("/") ? base.substring(1) : base;
        this.slashBase = "/" + this.base;
        this.empty = this.base.isEmpty();
    }

    String relative(String path) {
        if (!empty && path != null && path.startsWith(slashBase)) {
            String relative = path.substring(slashBase.length());
            return relative.isEmpty() ? "/" : relative;
        }
        return path;
    }

    String absolute(String path) {
        if (!empty && path != null) {
            String safePath = path.startsWith("/") ? path : "/" + path;
            return slashBase + safePath;
        }
        return path;
    }
}
