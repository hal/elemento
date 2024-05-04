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
package org.jboss.elemento.logger;

import static java.lang.Math.abs;
import static java.util.Arrays.fill;

class Category {

    private static final String NONE = "<none>";

    static String parent(String category) {
        if (category != null && category.contains(".")) {
            return category.substring(0, category.lastIndexOf('.'));
        }
        return "";
    }

    static boolean isSubcategory(String parent, String child) {
        if (parent != null && child != null && !parent.isEmpty() && child.contains(".")) {
            String[] parentParts = parent.split("\\.");
            String[] childParts = child.split("\\.");
            if (parentParts.length >= childParts.length) {
                return false;
            }
            for (int i = 0; i < parentParts.length; i++) {
                if (!parentParts[i].equals(childParts[i])) {
                    return false;
                }
            }
            return true;
        }
        return false;
    }

    static String format(String category, int length) {
        if (category == null || category.trim().isEmpty()) {
            return rightPad(NONE, length);
        }
        StringBuilder builder = new StringBuilder();
        if (category.contains(".")) {
            String[] parts = category.split("\\.");
            for (int i = 0; i < parts.length - 1; i++) {
                builder.append(parts[i].charAt(0)).append('.');
            }
            builder.append(parts[parts.length - 1]);
        } else {
            builder.append(category);
        }
        return rightPad(builder.toString(), length);
    }

    private static String rightPad(String value, int length) {
        int diff = value.length() - length;
        if (diff > 0) {
            return value.substring(diff);
        } else {
            byte[] bytes = new byte[abs(diff)];
            fill(bytes, (byte) ' ');
            return new String(bytes) + value;
        }
    }
}
