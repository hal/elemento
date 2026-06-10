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

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Nested;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNull;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.junit.jupiter.api.Assertions.assertTrue;

class ParameterTest {

    @BeforeEach
    void setUp() {
        Parameter.encoder = new JavaUrlEncoder();
    }

    @AfterEach
    void tearDown() {
        Parameter.encoder = new JsUrlEncoder();
    }

    // ------------------------------------------------------ isParameter

    @Test
    void isParameters() {
        assertFalse(Parameter.isParameter(null));
        assertFalse(Parameter.isParameter(""));
        assertFalse(Parameter.isParameter(" "));
        assertFalse(Parameter.isParameter(":"));
        assertFalse(Parameter.isParameter("::"));
        assertFalse(Parameter.isParameter(":::"));
        assertFalse(Parameter.isParameter("a"));
        assertFalse(Parameter.isParameter("a:"));
        assertFalse(Parameter.isParameter("a:b"));
        assertFalse(Parameter.isParameter("a:b:"));

        assertTrue(Parameter.isParameter(":a"));
        assertTrue(Parameter.isParameter(":a:b"));
    }

    // ------------------------------------------------------ hasParameter

    @Test
    void hasParameters() {
        assertFalse(Parameter.hasParameter(null));
        assertFalse(Parameter.hasParameter(""));
        assertFalse(Parameter.hasParameter(" "));
        assertFalse(Parameter.hasParameter("/"));
        assertFalse(Parameter.hasParameter(":"));
        assertFalse(Parameter.hasParameter("::"));
        assertFalse(Parameter.hasParameter(":::"));
        assertFalse(Parameter.hasParameter(":/"));
        assertFalse(Parameter.hasParameter("/:"));
        assertFalse(Parameter.hasParameter(":/:/:"));
        assertFalse(Parameter.hasParameter("a"));
        assertFalse(Parameter.hasParameter("a:"));
        assertFalse(Parameter.hasParameter("a:b"));
        assertFalse(Parameter.hasParameter("a:b:"));
        assertFalse(Parameter.hasParameter("/a/b/c"));

        assertTrue(Parameter.hasParameter(":a"));
        assertTrue(Parameter.hasParameter(":a:b"));
        assertTrue(Parameter.hasParameter(":a/"));
        assertTrue(Parameter.hasParameter("/:a"));
        assertTrue(Parameter.hasParameter(":a/b"));
        assertTrue(Parameter.hasParameter("/:a/b"));
        assertTrue(Parameter.hasParameter("/a/:b/c"));
        assertTrue(Parameter.hasParameter("/:a/:b/:c"));
    }

    // ------------------------------------------------------ match

    @Test
    void match() {
        assertFalse(Parameter.match("/a/:b/c", ""));
        assertFalse(Parameter.match("/a/:b/c", "foo"));
        assertFalse(Parameter.match("/a/:b/c", "/a"));
        assertFalse(Parameter.match("/a/:b/c", "/a/b"));
        assertFalse(Parameter.match("/a/:b/c", "/a/b/c/d"));
        assertTrue(Parameter.match("/:a", "/value0"));
        assertTrue(Parameter.match("/:a", "/value0"));
        assertTrue(Parameter.match("/:a/b/:c", "/value0/b/value1"));
    }

    // ------------------------------------------------------ parameter extraction (existing)

    @Test
    void parameter() {
        new Parameter(":a", "/value0");
        new Parameter("/:a/b/:c", "/value0/b/value1");
    }

    // ------------------------------------------------------ encoding

    @Nested
    class Encode {

        @Test
        void slash() {
            assertEquals("a%2Fb", Parameter.encode("a/b"));
        }

        @Test
        void space() {
            assertEquals("hello%20world", Parameter.encode("hello world"));
        }

        @Test
        void queryChars() {
            String encoded = Parameter.encode("a?b=c&d=e");
            assertTrue(encoded.contains("%3F"));
            assertTrue(encoded.contains("%3D"));
            assertTrue(encoded.contains("%26"));
        }

        @Test
        void hash() {
            String encoded = Parameter.encode("section#anchor");
            assertTrue(encoded.contains("%23"));
        }

        @Test
        void unicode() {
            String encoded = Parameter.encode("日本");
            assertFalse(encoded.equals("日本"));
            assertEquals("日本", Parameter.decode(encoded));
        }

        @Test
        void safeChars() {
            assertEquals("simple", Parameter.encode("simple"));
            assertEquals("simple-name_v2.0", Parameter.encode("simple-name_v2.0"));
        }

        @Test
        void emptyString() {
            assertEquals("", Parameter.encode(""));
        }

        @Test
        void nullValue() {
            assertThrows(IllegalArgumentException.class, () -> Parameter.encode(null));
        }
    }

    // ------------------------------------------------------ decoding

    @Nested
    class Decode {

        @Test
        void slash() {
            assertEquals("a/b", Parameter.decode("a%2Fb"));
        }

        @Test
        void space() {
            assertEquals("hello world", Parameter.decode("hello%20world"));
        }

        @Test
        void unencoded() {
            assertEquals("plain", Parameter.decode("plain"));
        }

        @Test
        void nullValue() {
            assertThrows(IllegalArgumentException.class, () -> Parameter.decode(null));
        }
    }

    // ------------------------------------------------------ round-trip

    @Nested
    class RoundTrip {

        @Test
        void slashRoundTrip() {
            assertRoundTrip("a/b");
        }

        @Test
        void spaceRoundTrip() {
            assertRoundTrip("hello world");
        }

        @Test
        void queryCharsRoundTrip() {
            assertRoundTrip("a?b=c&d=e");
        }

        @Test
        void hashRoundTrip() {
            assertRoundTrip("section#anchor");
        }

        @Test
        void unicodeRoundTrip() {
            assertRoundTrip("日本");
        }

        @Test
        void percentRoundTrip() {
            assertRoundTrip("100%");
        }

        @Test
        void complexPathRoundTrip() {
            assertRoundTrip("path/to/my file?query=1&other=2#section");
        }

        @Test
        void emptyStringRoundTrip() {
            assertRoundTrip("");
        }

        private void assertRoundTrip(String value) {
            assertEquals(value, Parameter.decode(Parameter.encode(value)));
        }
    }

    // ------------------------------------------------------ encodePath

    @Nested
    class EncodePath {

        @Test
        void singleParam() {
            assertEquals("/resource/my%2Ffile", Parameter.encodePath("/resource/:name", "my/file"));
        }

        @Test
        void multipleParams() {
            assertEquals("/time/America/New_York",
                    Parameter.encodePath("/time/:area/:location", "America", "New_York"));
        }

        @Test
        void paramsWithSpecialChars() {
            String result = Parameter.encodePath("/:a/:b", "x/y", "p?q");
            assertTrue(result.startsWith("/"));
            String[] parts = result.substring(1).split("/");
            assertEquals(2, parts.length);
            assertEquals("x/y", Parameter.decode(parts[0]));
            assertEquals("p?q", Parameter.decode(parts[1]));
        }

        @Test
        void noParams() {
            assertEquals("/static/path", Parameter.encodePath("/static/path"));
        }

        @Test
        void tooFewValues() {
            assertThrows(IllegalArgumentException.class,
                    () -> Parameter.encodePath("/resource/:name"));
        }

        @Test
        void tooManyValues() {
            assertThrows(IllegalArgumentException.class,
                    () -> Parameter.encodePath("/resource/:name", "a", "b"));
        }

        @Test
        void nullValue() {
            assertThrows(IllegalArgumentException.class,
                    () -> Parameter.encodePath("/resource/:name", (String) null));
        }

        @Test
        void nullRoute() {
            assertThrows(IllegalArgumentException.class,
                    () -> Parameter.encodePath(null, "value"));
        }

        @Test
        void mixedStaticAndParams() {
            assertEquals("/api/users/john%2Fdoe/posts",
                    Parameter.encodePath("/api/users/:name/posts", "john/doe"));
        }
    }

    // ------------------------------------------------------ get() auto-decodes

    @Nested
    class GetDecoded {

        @Test
        void decodesEncodedSlash() {
            Parameter param = new Parameter("/r/:name", "/r/my%2Fresource");
            assertEquals("my/resource", param.get("name"));
        }

        @Test
        void decodesEncodedSpace() {
            Parameter param = new Parameter("/r/:name", "/r/hello%20world");
            assertEquals("hello world", param.get("name"));
        }

        @Test
        void plainValueUnchanged() {
            Parameter param = new Parameter("/r/:id", "/r/123");
            assertEquals("123", param.get("id"));
        }

        @Test
        void multipleParamsDecoded() {
            Parameter param = new Parameter("/t/:a/:b", "/t/x%2Fy/p%3Fq");
            assertEquals("x/y", param.get("a"));
            assertEquals("p?q", param.get("b"));
        }

        @Test
        void nonExistentReturnsNull() {
            Parameter param = new Parameter("/r/:name", "/r/value");
            assertNull(param.get("nonexistent"));
        }

        @Test
        void getOrDefaultDecoded() {
            Parameter param = new Parameter("/r/:name", "/r/hello%20world");
            assertEquals("hello world", param.getOrDefault("name", "fallback"));
        }

        @Test
        void getOrDefaultFallback() {
            Parameter param = new Parameter("/r/:name", "/r/value");
            assertEquals("fallback", param.getOrDefault("missing", "fallback"));
        }
    }

    // ------------------------------------------------------ getRaw() preserves encoding

    @Nested
    class GetRaw {

        @Test
        void preservesEncodedSlash() {
            Parameter param = new Parameter("/r/:name", "/r/my%2Fresource");
            assertEquals("my%2Fresource", param.getRaw("name"));
        }

        @Test
        void preservesEncodedSpace() {
            Parameter param = new Parameter("/r/:name", "/r/hello%20world");
            assertEquals("hello%20world", param.getRaw("name"));
        }

        @Test
        void plainValueUnchanged() {
            Parameter param = new Parameter("/r/:id", "/r/123");
            assertEquals("123", param.getRaw("id"));
        }

        @Test
        void nonExistentReturnsNull() {
            Parameter param = new Parameter("/r/:name", "/r/value");
            assertNull(param.getRaw("nonexistent"));
        }
    }

    // ------------------------------------------------------ match with encoded paths

    @Nested
    class MatchEncoded {

        @Test
        void matchEncodedSlash() {
            assertTrue(Parameter.match("/r/:name", "/r/my%2Fresource"));
        }

        @Test
        void matchEncodedQuestionMark() {
            assertTrue(Parameter.match("/a/:b/c", "/a/x%3Fy/c"));
        }

        @Test
        void matchEncodedSpace() {
            assertTrue(Parameter.match("/r/:name", "/r/hello%20world"));
        }
    }

    // ------------------------------------------------------ full round-trip: encodePath → Parameter → get

    @Nested
    class FullRoundTrip {

        @Test
        void slashInValue() {
            String path = Parameter.encodePath("/resource/:name", "my/file");
            Parameter param = new Parameter("/resource/:name", path);
            assertEquals("my/file", param.get("name"));
        }

        @Test
        void specialCharsInValue() {
            String path = Parameter.encodePath("/r/:q", "search?term=hello&lang=en");
            Parameter param = new Parameter("/r/:q", path);
            assertEquals("search?term=hello&lang=en", param.get("q"));
        }

        @Test
        void unicodeInValue() {
            String path = Parameter.encodePath("/r/:city", "日本");
            Parameter param = new Parameter("/r/:city", path);
            assertEquals("日本", param.get("city"));
        }

        @Test
        void multipleParamsRoundTrip() {
            String path = Parameter.encodePath("/api/:org/:repo", "my/org", "repo#1");
            Parameter param = new Parameter("/api/:org/:repo", path);
            assertEquals("my/org", param.get("org"));
            assertEquals("repo#1", param.get("repo"));
        }

        @Test
        void plainValuesRoundTrip() {
            String path = Parameter.encodePath("/time/:area/:location", "America", "New_York");
            Parameter param = new Parameter("/time/:area/:location", path);
            assertEquals("America", param.get("area"));
            assertEquals("New_York", param.get("location"));
        }
    }
}
