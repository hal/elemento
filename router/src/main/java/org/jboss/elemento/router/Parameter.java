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

import java.util.HashMap;
import java.util.Map;

import static java.util.Collections.emptyMap;

/**
 * The Parameter class is used to represent parameters and their values in a route path. A parameter is a part of the path that
 * starts with a colon (e.g. ":id"). Parameters are used to retrieve values from a path.
 */
public class Parameter {

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
                    // if it's not a parameter, parts must match!
                    if (!isParameter(routeParts[i])) {
                        allOk = routeParts[i].equals(pathParts[i]);
                    }
                }
                return allOk;
            }
        }
        return false;
    }

    public static final Parameter EMPTY = new Parameter(null, null);
    private final Map<String, String> params;
    private final String path;

    Parameter(String route, String path) {
        this.path = path;
        if (match(route, path)) {
            params = new HashMap<>();
            String[] routeParts = Path.split(route);
            String[] pathParts = Path.split(path);
            for (int i = 0; i < routeParts.length; i++) {
                if (isParameter(routeParts[i])) {
                    params.put(routeParts[i].substring(1), pathParts[i]);
                }
            }
        } else {
            params = emptyMap();
        }
    }

    public boolean isEmpty() {
        return params.isEmpty();
    }

    public boolean has(String name) {
        return params.containsKey(name);
    }

    public String get(String name) {
        return params.get(name);
    }

    public String getOrDefault(String name, String defaultValue) {
        return params.getOrDefault(name, defaultValue);
    }

    public String path() {
        return path;
    }
}
