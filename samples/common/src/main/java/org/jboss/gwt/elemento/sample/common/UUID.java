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
package org.jboss.gwt.elemento.sample.common;

public final class UUID {

    private UUID() {}

    private static final char[] CHARS = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".toCharArray();

    /**
     * Generate a random uuid of the specified length. Example: uuid(15) returns
     * "VcydxgltxrVZSTV"
     *
     * @param len the desired number of characters
     */
    public static String uuid(int len) {
        return uuid(len, CHARS.length);
    }

    /**
     * Generate a random uuid of the specified length, and radix. Examples:
     * <ul>
     * <li>uuid(8, 2) returns "01001010" (8 character ID, base=2)
     * <li>uuid(8, 10) returns "47473046" (8 character ID, base=10)
     * <li>uuid(8, 16) returns "098F4D35" (8 character ID, base=16)
     * </ul>
     *
     * @param len   the desired number of characters
     * @param radix the number of allowable values for each character (must be <=
     *              62)
     */
    public static String uuid(int len, int radix) {
        if (radix > CHARS.length) {
            throw new IllegalArgumentException();
        }
        char[] uuid = new char[len];
        // Compact form
        for (int i = 0; i < len; i++) {
            uuid[i] = CHARS[(int) (Math.random() * radix)];
        }
        return new String(uuid);
    }

    /**
     * Generate a RFC4122, version 4 ID. Example:
     * "92329D39-6F5C-4520-ABFC-AAB64544E172"
     */
    public static String uuid() {
        char[] uuid = new char[36];
        int r;

        // rfc4122 requires these characters
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4';

        // Fill in random data.  At i==19 set the high bits of clock sequence as
        // per rfc4122, sec. 4.1.5
        for (int i = 0; i < 36; i++) {
            if (uuid[i] == 0) {
                r = (int) (Math.random() * 16);
                uuid[i] = CHARS[(i == 19) ? (r & 0x3) | 0x8 : r & 0xf];
            }
        }
        return new String(uuid);
    }
}