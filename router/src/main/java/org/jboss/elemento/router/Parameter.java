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
 * starts with a colon (e.g. {@code ":id"}). Parameters can be required or optional. Optional parameters use a trailing question
 * mark (e.g. {@code ":id?"}) and must be at the end of the route. A route like {@code "/users/:id?"} matches both
 * {@code "/users"} and {@code "/users/123"}.
 * <p>
 * Multiple trailing optional parameters are allowed: {@code "/a/:b?/:c?"} matches {@code "/a"}, {@code "/a/1"}, and
 * {@code "/a/1/2"}. Optional parameters after required ones are also valid: {@code "/a/:b/:c?"} matches {@code "/a/1"} and
 * {@code "/a/1/2"}.
 * <p>
 * Parameter values are automatically decoded when retrieved via {@link #get(String)} or {@link #getOrDefault(String, String)}.
 * Use {@link #getRaw(String)} to access the raw/encoded value as it appears in the URL.
 * <p>
 * When an optional parameter is not present in the path, {@link #get(String)} returns {@code null} and {@link #has(String)}
 * returns {@code false}. Use {@link #getOrDefault(String, String)} to provide a fallback value.
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
     * Optional parameters (e.g. {@code ":name?"}) can be omitted. When fewer values are provided than the total number of
     * parameters, trailing optional parameter segments are omitted from the output path.
     * <p>
     * Example:
     * <pre>
     * Parameter.encodePath("/resource/:name", "my/file")
     * // returns "/resource/my%2Ffile"
     *
     * Parameter.encodePath("/time/:area/:location", "America", "New_York")
     * // returns "/time/America/New_York"
     *
     * Parameter.encodePath("/users/:id?")
     * // returns "/users"
     *
     * Parameter.encodePath("/users/:id?", "123")
     * // returns "/users/123"
     * </pre>
     *
     * @param route  the route template with {@code :param} and {@code :param?} placeholders
     * @param values the raw parameter values in the order they appear in the route. Required parameters must all be provided;
     *               optional parameters can be omitted from the end.
     * @return the complete URL path with encoded parameter values
     * @throws IllegalArgumentException if the number of values is less than the number of required parameters or greater than the
     *                                  total number of parameters, or if any required value is null
     */
    public static String encodePath(String route, String... values) {
        if (route == null) {
            throw new IllegalArgumentException("Route must not be null");
        }

        String normalizedRoute = Path.normalize(route);
        String[] parts = Path.split(normalizedRoute);
        List<Integer> requiredParamIndices = new ArrayList<>();
        List<Integer> optionalParamIndices = new ArrayList<>();
        for (int i = 0; i < parts.length; i++) {
            if (isOptionalParameter(parts[i])) {
                optionalParamIndices.add(i);
            } else if (isParameter(parts[i])) {
                requiredParamIndices.add(i);
            }
        }

        int requiredCount = requiredParamIndices.size();
        int totalParamCount = requiredCount + optionalParamIndices.size();
        int valueCount = values == null ? 0 : values.length;

        if (valueCount < requiredCount || valueCount > totalParamCount) {
            throw new IllegalArgumentException(
                    "Expected " + requiredCount + " to " + totalParamCount + " parameter value(s), but got " + valueCount);
        }

        if (totalParamCount == 0) {
            return normalizedRoute;
        }

        for (int i = 0; i < valueCount; i++) {
            if (i < requiredCount && values[i] == null) {
                throw new IllegalArgumentException("Required parameter values must not be null");
            }
        }

        List<Integer> allParamIndices = new ArrayList<>(requiredParamIndices);
        allParamIndices.addAll(optionalParamIndices);
        allParamIndices.sort(Integer::compareTo);

        int suppliedOptionalCount = valueCount - requiredCount;
        int totalSegments = parts.length - (optionalParamIndices.size() - suppliedOptionalCount);

        String[] result = new String[totalSegments];
        int valueIdx = 0;
        int resultIdx = 0;
        for (int i = 0; i < parts.length && resultIdx < totalSegments; i++) {
            if (isParameter(parts[i])) {
                if (valueIdx < valueCount) {
                    result[resultIdx] = encode(values[valueIdx]);
                    valueIdx++;
                    resultIdx++;
                }
            } else {
                result[resultIdx] = parts[i];
                resultIdx++;
            }
        }
        return "/" + String.join("/", result);
    }

    // ------------------------------------------------------ static helpers

    static boolean isParameter(String value) {
        if (value == null || value.length() < 2 || !value.startsWith(":")) {
            return false;
        }
        String rest = value.endsWith("?") ? value.substring(1, value.length() - 1) : value.substring(1);
        return !rest.isEmpty() && !rest.startsWith(":");
    }

    static boolean isOptionalParameter(String value) {
        return value != null && value.endsWith("?") && value.length() > 2 && isParameter(value);
    }

    static String parameterName(String segment) {
        if (isOptionalParameter(segment)) {
            return segment.substring(1, segment.length() - 1);
        } else if (isParameter(segment)) {
            return segment.substring(1);
        }
        return null;
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

    static boolean hasOptionalParameter(String route) {
        if (route != null && !route.isEmpty()) {
            if (route.contains("/")) {
                String[] parts = route.split("/");
                for (String part : parts) {
                    if (isOptionalParameter(part)) {
                        return true;
                    }
                }
            } else {
                return isOptionalParameter(route);
            }
        }
        return false;
    }

    static void validateOptionalParameters(String route) {
        if (route != null && !route.isEmpty()) {
            String[] parts = Path.split(route);
            boolean seenOptional = false;
            for (String part : parts) {
                if (isOptionalParameter(part)) {
                    seenOptional = true;
                } else if (seenOptional) {
                    throw new IllegalArgumentException(
                            "Optional parameters must be trailing. Found non-optional segment '" + part +
                                    "' after optional parameter in route '" + route + "'");
                }
            }
        }
    }

    static String stripOptionalParameters(String route) {
        String[] parts = Path.split(route);
        StringBuilder sb = new StringBuilder();
        for (String part : parts) {
            if (!Parameter.isOptionalParameter(part)) {
                sb.append('/').append(part);
            }
        }
        //noinspection SizeReplaceableByIsEmpty
        return sb.length() == 0 ? "/" : sb.toString();
    }

    static boolean match(String route, String path) {
        if (route != null && path != null) {
            String[] routeParts = Path.split(route);
            String[] pathParts = Path.split(path);

            int requiredCount = 0;
            for (String rp : routeParts) {
                if (!isOptionalParameter(rp)) {
                    requiredCount++;
                }
            }

            if (pathParts.length < requiredCount || pathParts.length > routeParts.length) {
                return false;
            }

            for (int i = 0; i < pathParts.length; i++) {
                if (!isParameter(routeParts[i])) {
                    if (!routeParts[i].equals(pathParts[i])) {
                        return false;
                    }
                }
            }

            for (int i = pathParts.length; i < routeParts.length; i++) {
                if (!isOptionalParameter(routeParts[i])) {
                    return false;
                }
            }

            return true;
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
            for (int i = 0; i < pathParts.length; i++) {
                if (isParameter(routeParts[i])) {
                    String name = parameterName(routeParts[i]);
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
