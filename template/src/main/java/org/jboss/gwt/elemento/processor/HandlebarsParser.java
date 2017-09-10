/*
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
package org.jboss.gwt.elemento.processor;

import java.util.Collections;
import java.util.HashMap;
import java.util.Map;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

/**
 * Extracts handlebar expressions like {@code {{foo}}} from a string and returns a map with the expression as key and
 * the plain text (w/o the curly braces) as value.
 */
class HandlebarsParser {

    private final static Pattern PATTERN = Pattern.compile("\\#\\{\\{(.*?)\\}\\}");

    Map<String, String> parse(String input) {
        if (input != null) {
            Map<String, String> matches = new HashMap<>();
            Matcher matcher = PATTERN.matcher(input);
            while (matcher.find()) {
                String match = matcher.group();
                validate(match);
                matches.put(match, stripHandlebar(match));
            }
            return matches;
        }
        return Collections.emptyMap();
    }

    private void validate(final String pattern) {
        if (!isHandlebar(pattern)) {
            throw new IllegalArgumentException("Invalid handlebar pattern: " + pattern);
        }
        if (pattern.lastIndexOf("#{{") != 0 || pattern.indexOf("}}") != pattern.length() - 2) {
            throw new IllegalArgumentException("Invalid handlebar pattern: " + pattern);
        }
    }

    private String stripHandlebar(String pattern) {
        if (isHandlebar(pattern)) {
            int start = "#{{".length();
            int end = pattern.length() - "}}".length();
            return pattern.substring(start, end);
        }
        return pattern;
    }

    private boolean isHandlebar(String value) {
        return value != null && value.startsWith("#{{") && value.endsWith("}}");
    }

}
