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

import java.net.URLDecoder;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

/**
 * URL encoder using Java's {@link URLEncoder} and {@link URLDecoder}. This implementation is intended for JVM-based JUnit
 * testing where JavaScript's {@code encodeURIComponent()} is not available.
 * <p>
 * Bridges the encoding differences between {@link URLEncoder} and {@code encodeURIComponent()}: {@link URLEncoder} encodes
 * spaces as {@code +} while {@code encodeURIComponent()} uses {@code %20}.
 */
class JavaUrlEncoder implements UrlEncoder {

    @Override
    public String encode(String value) {
        return URLEncoder.encode(value, StandardCharsets.UTF_8)
                .replace("+", "%20");
    }

    @Override
    public String decode(String value) {
        return URLDecoder.decode(value, StandardCharsets.UTF_8);
    }
}
