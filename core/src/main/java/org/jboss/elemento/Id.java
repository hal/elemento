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
package org.jboss.elemento;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import elemental2.dom.DomGlobal;

import static elemental2.dom.DomGlobal.document;
import static java.util.stream.Collectors.joining;
import static org.jboss.elemento.DomGlobal.crypto;

/** Helper methods for working with IDs. */
public final class Id {

    private static final String UNIQUE_ID = "id-";
    private static int counter = 0;

    /**
     * Generates a universally unique identifier (UUID). If the global {@code crypto} property is available,
     * {@link Crypto#randomUUID()} is used to generate the UUID. Otherwise, a pseudo random UUID is generated as fallback.
     *
     * @see <a href=
     *      "https://developer.mozilla.org/en-US/docs/Web/API/Crypto">https://developer.mozilla.org/en-US/docs/Web/API/Crypto</a>
     */
    public static String uuid() {
        if (DomGlobal.isSecureContext) {
            return crypto.randomUUID();
        } else {
            long msb = Math.abs((long) (Math.random() * Long.MAX_VALUE));
            long lsb = Math.abs((long) (Math.random() * Long.MAX_VALUE));

            // Convert to hexadecimal and pad with 0s if necessary
            String msbHex = Long.toHexString(msb);
            msbHex = ("0000000000000000" + msbHex).substring(msbHex.length());

            String lsbHex = Long.toHexString(lsb);
            lsbHex = ("0000000000000000" + lsbHex).substring(lsbHex.length());

            // Format as 8-4-4-4-12 hexadecimal digits
            return msbHex.substring(0, 8) + "-"
                    + msbHex.substring(8, 12) + "-"
                    + lsbHex.substring(0, 4) + "-"
                    + lsbHex.substring(4, 8) + "-"
                    + lsbHex.substring(8, 16);
        }
    }

    /** Creates an identifier guaranteed to be unique within this document. This is useful for allocating element IDs. */
    public static String unique() {
        String id;
        do {
            id = UNIQUE_ID + counter; // no Ids.build(ELEMENTO_UID, counter) for performance reasons
            if (counter == Integer.MAX_VALUE) {
                counter = 0;
            }
            counter++;
        } while (document.getElementById(id) != null);
        return id;
    }

    /** Creates an identifier guaranteed to be unique within this document. The unique part comes last. */
    public static String unique(String id, String... additionalIds) {
        return build(id, additionalIds) + "-" + unique();
    }

    public static String build(String id, String... additionalIds) {
        return build(id, '-', additionalIds);
    }

    static String build(String id, char separator, String... additionalIds) {
        if (id == null || id.trim().length() == 0) {
            throw new IllegalArgumentException("ID must not be null or empty.");
        }
        List<String> ids = new ArrayList<>();
        ids.add(id);
        if (additionalIds != null) {
            for (String additionalId : additionalIds) {
                if (additionalId != null && additionalId.trim().length() != 0) {
                    ids.add(additionalId);
                }
            }
        }
        return ids.stream().map(Id::asId).filter(Objects::nonNull).collect(joining(String.valueOf(separator)));
    }

    /**
     * Turns a string which can contain whitespace and upper/lower case characters into an all lowercase id separated by "-".
     */
    static String asId(String text) {
        String[] parts = text.split("[-\\s]");
        List<String> sanitized = new ArrayList<>();
        for (String part : parts) {
            if (part != null) {
                String s = part.replaceAll("\\s+", "");
                s = s.replaceAll("[^a-zA-Z0-9-_]", "");
                s = s.replace('_', '-');
                if (s.length() != 0) {
                    sanitized.add(s);
                }
            }
        }
        if (sanitized.isEmpty()) {
            return null;
        } else {
            return sanitized.stream().filter(s -> s != null && s.trim().length() != 0).map(String::toLowerCase)
                    .collect(joining("-"));
        }
    }

    private Id() {
    }
}
