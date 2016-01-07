package org.jboss.gwt.elemento.core;

import elemental.dom.Document;
import org.junit.Before;
import org.junit.Test;

import java.util.NoSuchElementException;

import static org.jboss.gwt.elemento.core.EventType.click;
import static org.jboss.gwt.elemento.core.InputType.number;
import static org.jboss.gwt.elemento.core.InputType.text;
import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;
import static org.mockito.Matchers.anyString;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

/**
 * @author Harald Pehl
 */
public class ElementsBuilderTest {

    private TestableBuilder builder;

    @Before
    public void setUp() {
        Document document = mock(Document.class);

        when(document.createElement(anyString())).thenAnswer(
                invocation -> new StandaloneElement(String.valueOf(invocation.getArguments()[0])));
        when(document.createAnchorElement()).thenAnswer(invocation -> new StandaloneElement("a"));
        when(document.createButtonElement()).thenAnswer(invocation -> new StandaloneInputElement("button"));
        when(document.createDivElement()).thenAnswer(invocation -> new StandaloneElement("div"));
        when(document.createFormElement()).thenAnswer(invocation -> new StandaloneElement("form"));
        when(document.createInputElement()).thenAnswer(invocation -> new StandaloneInputElement("input"));
        when(document.createLabelElement()).thenAnswer(invocation -> new StandaloneLIElement("label"));
        when(document.createLIElement()).thenAnswer(invocation -> new StandaloneLIElement("li"));
        when(document.createOListElement()).thenAnswer(invocation -> new StandaloneElement("ol"));
        when(document.createOptionElement()).thenAnswer(invocation -> new StandaloneInputElement("option"));
        when(document.createParagraphElement()).thenAnswer(invocation -> new StandaloneElement("p"));
        when(document.createSelectElement()).thenAnswer(invocation -> new StandaloneInputElement("select"));
        when(document.createSpanElement()).thenAnswer(invocation -> new StandaloneElement("span"));
        when(document.createTextAreaElement()).thenAnswer(invocation -> new StandaloneInputElement("textarea"));
        when(document.createUListElement()).thenAnswer(invocation -> new StandaloneElement("ul"));

        builder = new TestableBuilder(document);
    }


    // ------------------------------------------------------ container elements

    @Test
    public void headings() {
        for (int i = 0; i < 6; i++) {
            assertEquals("<h" + i + ">Heading " + i + "</h" + i + ">",
                    builder.h(i).innerText("Heading " + i).end().build().toString());
        }
    }

    @Test
    public void headingsWithText() {
        for (int i = 0; i < 6; i++) {
            assertEquals("<h" + i + ">Heading " + i + "</h" + i + ">",
                    builder.h(i, "Heading " + i).end().build().toString());
        }
    }

    @Test
    public void p() {
        assertEquals("<p>Lorem ipsum</p>", builder.p().innerText("Lorem ipsum").end().build().toString());
    }

    @Test
    public void ol() {
        assertEquals("<ol><li>first</li><li>second</li></ol>",
                builder.ol().li().innerText("first").end().li().innerText("second").end().end().build().toString());
    }

    @Test
    public void ul() {
        assertEquals("<ul><li>foo</li><li>bar</li></ul>",
                builder.ul().li().innerText("foo").end().li().innerText("bar").end().end().build().toString());
    }

    @Test
    public void a() {
        assertEquals("<a href=\"http://hpehl.info/\" title=\"Visit my blog\">hpehl.info</a>",
                builder.a().attr("href", "http://hpehl.info/").title("Visit my blog").innerText("hpehl.info")
                        .end().build().toString());
    }

    @Test
    public void aHref() {
        assertEquals("<a href=\"http://hpehl.info/\" title=\"Visit my blog\">hpehl.info</a>",
                builder.a("http://hpehl.info/").title("Visit my blog").innerText("hpehl.info")
                        .end().build().toString());
    }

    @Test
    public void div() {
        assertEquals("<div/>", builder.div().end().build().toString());
    }

    @Test
    public void span() {
        assertEquals("<span/>", builder.span().end().build().toString());
    }


    // ------------------------------------------------------ forms

    @Test
    public void form() {
        // @formatter:off
        builder
            .form().attr("method", "get").attr("action", "search").css("form form-horizontal")
                .div().css("form-group")
                    .label().css("col-md-3 control-label").attr("for", "name").innerText("Name").end()
                    .div().css("col-md-9")
                        .input(text).id("name").css("form-control").attr("placeholder", "Enter your name")
                    .end()
                .end()
                .div().css("form-group")
                    .label().css("col-md-3 control-label").attr("for", "age").innerText("Age").end()
                    .div().css("col-md-9")
                        .input(number).id("age").css("form-control").attr("placeholder", "How old are you?")
                    .end()
                .end()
                .div().css("form-group")
                    .label().css("col-md-3 control-label").attr("for", "hobbies").innerText("Hobbies").end()
                    .div().css("col-md-9")
                        .textarea().attr("rows", "3").id("hobbies").css("form-control").end()
                        .span().css("help-block textarea").innerText("One item per line").end()
                    .end()
                .end()
                .div().css("form-group")
                    .label().css("col-md-3 control-label").attr("for", "choose").innerText("Choose").end()
                    .div().css("col-md-9")
                        .select().id("choose").css("form-control selectpicker")
                            .option().innerText("Lorem").end()
                            .option().innerText("ipsum").end()
                        .end()
                    .end()
                .end()
                .div().css("form-group")
                    .div().css("col-md-offset-3 col-md-9")
                        .div().css("pull-right form-buttons")
                            .button().css("btn btn-default btn-form").innerText("Cancel").end()
                            .button().css("btn btn-primary btn-form").innerText("Save").end()
                        .end()
                    .end()
                .end()
            .end();
        // @formatter:on

        String markup = "<form method=\"get\" action=\"search\" class=\"form form-horizontal\">" +
                "<div class=\"form-group\">" +
                "<label class=\"col-md-3 control-label\" for=\"name\">Name</label>" +
                "<div class=\"col-md-9\">" +
                "<input type=\"text\" id=\"name\" class=\"form-control\" placeholder=\"Enter your name\"/>" +
                "</div>" +
                "</div>" +
                "<div class=\"form-group\">" +
                "<label class=\"col-md-3 control-label\" for=\"age\">Age</label>" +
                "<div class=\"col-md-9\">" +
                "<input type=\"number\" id=\"age\" class=\"form-control\" placeholder=\"How old are you?\"/>" +
                "</div>" +
                "</div>" +
                "<div class=\"form-group\">" +
                "<label class=\"col-md-3 control-label\" for=\"hobbies\">Hobbies</label>" +
                "<div class=\"col-md-9\">" +
                "<textarea rows=\"3\" id=\"hobbies\" class=\"form-control\"/>" +
                "<span class=\"help-block textarea\">One item per line</span>" +
                "</div>" +
                "</div>" +
                "<div class=\"form-group\">" +
                "<label class=\"col-md-3 control-label\" for=\"choose\">Choose</label>" +
                "<div class=\"col-md-9\">" +
                "<select id=\"choose\" class=\"form-control selectpicker\">" +
                "<option>Lorem</option>" +
                "<option>ipsum</option>" +
                "</select>" +
                "</div>" +
                "</div>" +
                "<div class=\"form-group\">" +
                "<div class=\"col-md-offset-3 col-md-9\">" +
                "<div class=\"pull-right form-buttons\">" +
                "<button class=\"btn btn-default btn-form\">Cancel</button>" +
                "<button class=\"btn btn-primary btn-form\">Save</button>" +
                "</div>" +
                "</div>" +
                "</div>" +
                "</form>";

        assertEquals(markup, builder.build().toString());
    }


    // ------------------------------------------------------ mixed content

    @Test
    public void mixed() {
        // @formatter:off
        builder
                .div()
                    .span()
                        .add("br")
                        .div()
                            .add("br")
                            .span()
                                .add("br")
                                .add("br")
                            .end()
                            .add("br")
                        .end()
                        .add("br")
                        .add("br")
                    .end()
                .end();
        // @formatter:on

        assertEquals("<div><span><br/><div><br/><span><br/><br/></span><br/></div><br/><br/></span></div>",
                builder.build().toString());
    }


    // ------------------------------------------------------ attributes

    @Test
    public void attributes() {
        assertEquals("<div id=\"foo\" title=\"bar\" class=\"bigger\"/>",
                builder.div().id("foo").title("bar").css("bigger").build().toString());
        assertEquals("<div foo=\"bar\"/>",
                builder.div().attr("foo", "bar").end().build().toString());
    }

    @Test
    public void aria() {
        assertEquals("<div aria-one=\"1\" aria-two=\"2\" aria-three=\"3\"/>",
                builder.div().attr("aria-one", "1").aria("two", "2").aria("aria-three", "3").build().toString());
    }

    @Test
    public void data() {
        assertEquals("<div data-one=\"1\" data-two=\"2\" data-three=\"3\"/>",
                builder.div().attr("data-one", "1").data("two", "2").data("data-three", "3").build().toString());
    }


    // ------------------------------------------------------ event listener

    @Test
    public void events() {
        // not a real test - just there to show the API
        builder
                .div()
                .button().on(click, event -> System.out.println("Hit!"))
                .end();
    }


    // ------------------------------------------------------ references

    @Test
    public void reference() {
        builder.div().rememberAs("foo").end();
        assertNotNull(builder.referenceFor("foo"));
    }

    @Test(expected = NoSuchElementException.class)
    public void invalidReference() {
        builder.referenceFor("foo");
    }


    // ------------------------------------------------------ illegal states

    @Test(expected = IllegalStateException.class)
    public void noParentElement() {
        builder.add("br");
    }

    @Test(expected = IllegalStateException.class)
    public void noCurrentElement() {
        builder.id("boom");
    }

    @Test(expected = IllegalStateException.class)
    public void unbalancedEnd() {
        builder.div().add("br").end().end();
    }

    @Test(expected = IllegalStateException.class)
    public void unbalancedBuild() {
        builder.div().span().build();
    }
}
