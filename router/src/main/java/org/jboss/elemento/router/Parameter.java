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

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static java.util.Collections.emptyMap;

/**
 * The Parameter class is used to represent parameters and their values in a route path. A parameter is a part of the path that
 * starts with a colon (e.g. ":id"). Parameters are used to retrieve values from a path.
 * <p>
 * Parameter values are automatically decoded when retrieved via {@link #get(String)} or {@link #getOrDefault(String, String)}.
 * Use {@link #getRaw(String)} to access the raw/encoded value as it appears in the URL.
 * <p>
 * To build URLs with encoded parameter values, use {@link #encodePath(String, String...)} or {@link #encode(String)}.
 */
public class Parameter {

    // ------------------------------------------------------ encoding

    static UrlEncoder encoder = new JsUrlEncoder();

    /**
     * Encodes a single parameter value for safe inclusion in a URL path segment. Special characters like {@code /}, {@code ?},
     * {@code #}, {@code &}, {@code =}, and spaces are percent-encoded.
     * <p>
     * Pass raw/decoded values to this method. Do not pass already-encoded values, as this will result in double encoding.
     *
     * @param value the raw parameter value to encode
     * @return the percent-encoded value
     * @throws IllegalArgumentException if value is null
     */
    public static String encode(String value) {
        if (value == null) {
            throw new IllegalArgumentException("Value must not be null");
        }
        return encoder.encode(value);
    }

    /**
     * Decodes a URL-encoded parameter value back to its original form.
     *
     * @param value the percent-encoded value to decode
     * @return the decoded value
     * @throws IllegalArgumentException if value is null
     */
    public static String decode(String value) {
        if (value == null) {
            throw new IllegalArgumentException("Value must not be null");
        }
        return encoder.decode(value);
    }

    /**
     * Builds a URL path from a route template and raw parameter values. Values are <strong>encoded automatically</strong> using
     * {@link #encode(String)} and substituted into the template in order of parameter appearance.
     * <p>
     * Example:
     * <pre>
     * Parameter.encodePath("/resource/:name", "my/file")
     * // returns "/resource/my%2Ffile"
     *
     * Parameter.encodePath("/time/:area/:location", "America", "New_York")
     * // returns "/time/America/New_York"
     * </pre>
     *
     * @param route  the route template with {@code :param} placeholders
     * @param values the raw parameter values in the order they appear in the route
     * @return the complete URL path with encoded parameter values
     * @throws IllegalArgumentException if the number of values doesn't match the number of parameters, or if any value is null
     */
    public static String encodePath(String route, String... values) {
        if (route == null) {
            throw new IllegalArgumentException("Route must not be null");
        }

        String normalizedRoute = Path.normalize(route);
        String[] parts = Path.split(normalizedRoute);
        List<Integer> paramIndices = new ArrayList<>();
        for (int i = 0; i < parts.length; i++) {
            if (isParameter(parts[i])) {
                paramIndices.add(i);
            }
        }

        int valueCount = values == null ? 0 : values.length;
        if (valueCount != paramIndices.size()) {
            throw new IllegalArgumentException(
                    "Expected " + paramIndices.size() + " parameter value(s), but got " + valueCount);
        }

        if (paramIndices.isEmpty()) {
            return normalizedRoute;
        }

        for (String value : values) {
            if (value == null) {
                throw new IllegalArgumentException("Parameter values must not be null");
            }
        }

        String[] result = parts.clone();
        for (int i = 0; i < paramIndices.size(); i++) {
            result[paramIndices.get(i)] = encode(values[i]);
        }
        return "/" + String.join("/", result);
    }

    // ------------------------------------------------------ static helpers

    static boolean isParameter(String value) {
        return value != null && value.startsWith(":") && value.length() > 1 && !value.substring(1).startsWith(":");
    }

    static boolean hasParameter(String route) {
        if (route != null && !route.isEmpty()) {
            if (route.contains("/")) {
                String[] parts = route.split("/");
                for (String part : parts) {
                    if (isParameter(part)) {
                        return true;
                    }
                }
            } else {
                return isParameter(route);
            }
        }
        return false;
    }

    static boolean match(String route, String path) {
        if (route != null && path != null) {
            String[] routeParts = Path.split(route);
            String[] pathParts = Path.split(path);
            if (routeParts.length == pathParts.length) {
                boolean allOk = true;
                for (int i = 0; i < routeParts.length && allOk; i++) {
                    if (!isParameter(routeParts[i])) {
                        allOk = routeParts[i].equals(pathParts[i]);
                    }
                }
                return allOk;
            }
        }
        return false;
    }

    // ------------------------------------------------------ instance

    public static final Parameter EMPTY = new Parameter(null, null);
    private final Map<String, String> params;
    private final Map<String, String> rawParams;
    private final String path;

    Parameter(String route, String path) {
        this.path = path;
        if (match(route, path)) {
            params = new HashMap<>();
            rawParams = new HashMap<>();
            String[] routeParts = Path.split(route);
            String[] pathParts = Path.split(path);
            for (int i = 0; i < routeParts.length; i++) {
                if (isParameter(routeParts[i])) {
                    String name = routeParts[i].substring(1);
                    String rawValue = pathParts[i];
                    rawParams.put(name, rawValue);
                    params.put(name, encoder.decode(rawValue));
                }
            }
        } else {
            params = emptyMap();
            rawParams = emptyMap();
        }
    }

    // ------------------------------------------------------ api

    public boolean isEmpty() {
        return params.isEmpty();
    }

    /**
     * Returns whether a parameter with the given name exists.
     *
     * @param name the parameter name
     * @return true if the parameter exists
     */
    public boolean has(String name) {
        return params.containsKey(name);
    }

    /**
     * Returns the <strong>decoded</strong> parameter value. Special characters that were percent-encoded in the URL are decoded
     * back to their original form.
     *
     * @param name the parameter name
     * @return the decoded parameter value, or null if not found
     */
    public String get(String name) {
        return params.get(name);
    }

    /**
     * Returns the <strong>decoded</strong> parameter value, or the given default if the parameter doesn't exist.
     *
     * @param name         the parameter name
     * @param defaultValue the default value to return if the parameter doesn't exist
     * @return the decoded parameter value, or the default value
     */
    public String getOrDefault(String name, String defaultValue) {
        return params.getOrDefault(name, defaultValue);
    }

    /**
     * Returns the <strong>raw/encoded</strong> parameter value as it appears in the URL. Use this when you need the
     * percent-encoded form of the value.
     *
     * @param name the parameter name
     * @return the raw/encoded parameter value, or null if not found
     */
    public String getRaw(String name) {
        return rawParams.get(name);
    }

    /**
     * Returns the path this parameter was parsed from.
     *
     * @return the original path
     */
    public String path() {
        return path;
    }
}
