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
        assertTrue(Parameter.isParameter(":a?"));
        assertTrue(Parameter.isParameter(":abc?"));
    }

    // ------------------------------------------------------ isOptionalParameter

    @Test
    void isOptionalParameters() {
        assertFalse(Parameter.isOptionalParameter(null));
        assertFalse(Parameter.isOptionalParameter(""));
        assertFalse(Parameter.isOptionalParameter(":a"));
        assertFalse(Parameter.isOptionalParameter("a?"));
        assertFalse(Parameter.isOptionalParameter(":?"));
        assertFalse(Parameter.isOptionalParameter("?"));

        assertTrue(Parameter.isOptionalParameter(":a?"));
        assertTrue(Parameter.isOptionalParameter(":abc?"));
        assertTrue(Parameter.isOptionalParameter(":a:b?"));
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

    // ------------------------------------------------------ hasOptionalParameter

    @Test
    void hasOptionalParameters() {
        assertFalse(Parameter.hasOptionalParameter(null));
        assertFalse(Parameter.hasOptionalParameter(""));
        assertFalse(Parameter.hasOptionalParameter("/a/b/c"));
        assertFalse(Parameter.hasOptionalParameter("/a/:b/c"));

        assertTrue(Parameter.hasOptionalParameter(":a?"));
        assertTrue(Parameter.hasOptionalParameter("/:a?"));
        assertTrue(Parameter.hasOptionalParameter("/a/:b?"));
        assertTrue(Parameter.hasOptionalParameter("/a/:b/:c?"));
        assertTrue(Parameter.hasOptionalParameter("/a/:b?/:c?"));
    }

    // ------------------------------------------------------ validateOptionalParameters

    @Test
    void validateOptionalParameters() {
        // valid: optional params are trailing
        Parameter.validateOptionalParameters("/a/:b?");
        Parameter.validateOptionalParameters("/a/:b/:c?");
        Parameter.validateOptionalParameters("/a/:b?/:c?");
        Parameter.validateOptionalParameters("/:a?");
        Parameter.validateOptionalParameters("/a/b");

        // invalid: non-optional segment after optional
        assertThrows(IllegalArgumentException.class,
                () -> Parameter.validateOptionalParameters("/a/:b?/c"));
        assertThrows(IllegalArgumentException.class,
                () -> Parameter.validateOptionalParameters("/a/:b?/:c"));
        assertThrows(IllegalArgumentException.class,
                () -> Parameter.validateOptionalParameters("/:a?/b"));
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

    // ------------------------------------------------------ match with optional parameters

    @Test
    void matchOptional() {
        // single optional param
        assertTrue(Parameter.match("/users/:id?", "/users"));
        assertTrue(Parameter.match("/users/:id?", "/users/123"));
        assertFalse(Parameter.match("/users/:id?", "/users/123/edit"));

        // required then optional
        assertTrue(Parameter.match("/a/:b/:c?", "/a/1"));
        assertTrue(Parameter.match("/a/:b/:c?", "/a/1/2"));
        assertFalse(Parameter.match("/a/:b/:c?", "/a"));
        assertFalse(Parameter.match("/a/:b/:c?", "/a/1/2/3"));

        // multiple optional
        assertTrue(Parameter.match("/a/:b?/:c?", "/a"));
        assertTrue(Parameter.match("/a/:b?/:c?", "/a/1"));
        assertTrue(Parameter.match("/a/:b?/:c?", "/a/1/2"));
        assertFalse(Parameter.match("/a/:b?/:c?", "/a/1/2/3"));

        // static segments with optional
        assertTrue(Parameter.match("/api/users/:id?", "/api/users"));
        assertTrue(Parameter.match("/api/users/:id?", "/api/users/42"));
        assertFalse(Parameter.match("/api/users/:id?", "/api/other"));
    }

    // ------------------------------------------------------ parameter extraction (existing)

    @Test
    void parameter() {
        new Parameter(":a", "/value0");
        new Parameter("/:a/b/:c", "/value0/b/value1");
    }

    // ------------------------------------------------------ optional parameter extraction

    @Nested
    class OptionalParameterExtraction {

        @Test
        void optionalParamPresent() {
            Parameter param = new Parameter("/users/:id?", "/users/123");
            assertTrue(param.has("id"));
            assertEquals("123", param.get("id"));
        }

        @Test
        void optionalParamAbsent() {
            Parameter param = new Parameter("/users/:id?", "/users");
            assertFalse(param.has("id"));
            assertNull(param.get("id"));
        }

        @Test
        void optionalParamAbsentGetOrDefault() {
            Parameter param = new Parameter("/users/:id?", "/users");
            assertEquals("default", param.getOrDefault("id", "default"));
        }

        @Test
        void requiredThenOptionalBothPresent() {
            Parameter param = new Parameter("/a/:b/:c?", "/a/1/2");
            assertEquals("1", param.get("b"));
            assertEquals("2", param.get("c"));
        }

        @Test
        void requiredThenOptionalOnlyRequired() {
            Parameter param = new Parameter("/a/:b/:c?", "/a/1");
            assertEquals("1", param.get("b"));
            assertFalse(param.has("c"));
        }

        @Test
        void multipleOptionalAllPresent() {
            Parameter param = new Parameter("/a/:b?/:c?", "/a/1/2");
            assertEquals("1", param.get("b"));
            assertEquals("2", param.get("c"));
        }

        @Test
        void multipleOptionalFirstOnly() {
            Parameter param = new Parameter("/a/:b?/:c?", "/a/1");
            assertEquals("1", param.get("b"));
            assertFalse(param.has("c"));
        }

        @Test
        void multipleOptionalNonePresent() {
            Parameter param = new Parameter("/a/:b?/:c?", "/a");
            assertFalse(param.has("b"));
            assertFalse(param.has("c"));
        }

        @Test
        void optionalParamWithEncodedValue() {
            Parameter param = new Parameter("/r/:name?", "/r/my%2Ffile");
            assertEquals("my/file", param.get("name"));
            assertEquals("my%2Ffile", param.getRaw("name"));
        }
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

        @Test
        void optionalParamOmitted() {
            assertEquals("/users", Parameter.encodePath("/users/:id?"));
        }

        @Test
        void optionalParamProvided() {
            assertEquals("/users/123", Parameter.encodePath("/users/:id?", "123"));
        }

        @Test
        void requiredThenOptionalOmitted() {
            assertEquals("/a/1", Parameter.encodePath("/a/:b/:c?", "1"));
        }

        @Test
        void requiredThenOptionalProvided() {
            assertEquals("/a/1/2", Parameter.encodePath("/a/:b/:c?", "1", "2"));
        }

        @Test
        void multipleOptionalNoneProvided() {
            assertEquals("/a", Parameter.encodePath("/a/:b?/:c?"));
        }

        @Test
        void multipleOptionalOneProvided() {
            assertEquals("/a/1", Parameter.encodePath("/a/:b?/:c?", "1"));
        }

        @Test
        void multipleOptionalAllProvided() {
            assertEquals("/a/1/2", Parameter.encodePath("/a/:b?/:c?", "1", "2"));
        }

        @Test
        void optionalTooManyValues() {
            assertThrows(IllegalArgumentException.class,
                    () -> Parameter.encodePath("/users/:id?", "1", "2"));
        }

        @Test
        void requiredMissing() {
            assertThrows(IllegalArgumentException.class,
                    () -> Parameter.encodePath("/a/:b/:c?"));
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
