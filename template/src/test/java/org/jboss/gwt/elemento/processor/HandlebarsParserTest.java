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

import java.util.Map;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class HandlebarsParserTest {

    private HandlebarsParser parser;

    @Before
    public void setUp() {
        parser = new HandlebarsParser();
    }

    @Test
    public void nil() {
        assertTrue(parser.parse(null).isEmpty());
    }

    @Test
    public void empty() {
        assertTrue(parser.parse("").isEmpty());
    }

    @Test
    public void noMatches() {
        assertTrue(parser.parse("foo bar").isEmpty());
    }

    @Test(expected = IllegalArgumentException.class)
    public void malformed() {
        parser.parse("{{foo{{bar}}");
    }

    @Test
    public void oneMatch() {
        Map<String, String> handlebars = parser.parse("{{foo}}");
        assertEquals(1, handlebars.size());
        assertEquals("foo", handlebars.get("{{foo}}"));

        handlebars = parser.parse("before  {{foo}}after   ");
        assertEquals(1, handlebars.size());
        assertEquals("foo", handlebars.get("{{foo}}"));
    }

    @Test
    public void moreMatches() {
        Map<String, String> handlebars = parser.parse("fo{{o}} {{b}}{{a}}r ba{{z}}");
        assertEquals(4, handlebars.size());
        assertEquals("o", handlebars.get("{{o}}"));
        assertEquals("b", handlebars.get("{{b}}"));
        assertEquals("a", handlebars.get("{{a}}"));
        assertEquals("z", handlebars.get("{{z}}"));
    }
}