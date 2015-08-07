/*
 * JBoss, Home of Professional Open Source.
 * Copyright 2010, Red Hat, Inc., and individual contributors
 * as indicated by the @author tags. See the copyright.txt file in the
 * distribution for a full listing of individual contributors.
 *
 * This is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation; either version 2.1 of
 * the License, or (at your option) any later version.
 *
 * This software is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this software; if not, write to the Free
 * Software Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA
 * 02110-1301 USA, or see the FSF site: http://www.fsf.org.
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
 *
 * @author Harald Pehl
 */
class HandlebarsParser {

    private final static Pattern PATTERN = Pattern.compile("\\{\\{(.*?)\\}\\}");

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
        if (pattern.lastIndexOf("{{") != 0 || pattern.indexOf("}}") != pattern.length() - 2) {
            throw new IllegalArgumentException("Invalid handlebar pattern: " + pattern);
        }
    }

    private String stripHandlebar(String pattern) {
        if (isHandlebar(pattern)) {
            int start = "{{".length();
            int end = pattern.length() - "}}".length();
            return pattern.substring(start, end);
        }
        return pattern;
    }

    private boolean isHandlebar(String value) {
        return value != null && value.startsWith("{{") && value.endsWith("}}");
    }
}
