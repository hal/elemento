package org.jboss.gwt.elemento.processor;

import java.util.Map;

import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

/**
 * @author Harald Pehl
 */
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