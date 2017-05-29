package org.jboss.gwt.elemento.core;

import java.util.Arrays;
import java.util.LinkedHashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.function.BiConsumer;

import com.google.common.collect.Iterables;
import com.google.gwtmockito.GwtMockitoTestRunner;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLInputElement;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;

import static java.util.stream.Collectors.joining;
import static org.jboss.gwt.elemento.core.Elements.*;
import static org.jboss.gwt.elemento.core.EventType.click;
import static org.jboss.gwt.elemento.core.InputType.number;
import static org.jboss.gwt.elemento.core.InputType.text;
import static org.junit.Assert.assertEquals;
import static org.mockito.Matchers.any;
import static org.mockito.Matchers.anyString;
import static org.mockito.Mockito.doAnswer;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.when;

/**
 * @author Harald Pehl
 */
@RunWith(GwtMockitoTestRunner.class)
public class ElementsBuilderTest {

    @Before
    public void setUp() {
        //XXX consider moving this Element mocking to GwtMockito (although, mocking all elements are pretty difficult
        //XXX and probably don't worth it, not sure that this kind of testing is going to be practical)
        Elements.createElement = new ElementCreator() {
            @Override
            public <E extends HTMLElement> E create(String tag, Class<E> type) {
                E element = mock(type);
                element.tagName = tag;
                element.dataset = new JrePropertyMap<>();
                element.className = "";
                element.classList = new JreDOMTokenList();
                // attributes
                Map<String, String> attr = new LinkedHashMap<>();
                when(element.getAttribute(anyString())).thenAnswer(i -> attr.get(String.valueOf(i.getArguments()[0])));
                doAnswer(i -> {
                    attr.put((String) i.getArguments()[0], (String) i.getArguments()[1]);
                    return null;
                }).when(element).setAttribute(anyString(), anyString());
                // children
                List<HTMLElement> children = new LinkedList<>();
                when(element.appendChild(any())).thenAnswer(i -> {
                    HTMLElement child = (HTMLElement) i.getArguments()[0];
                    children.add(child);
                    return child;
                });
                // toString (debug utility)
                when(element.toString()).then(i -> elementAsString(element, attr, children));
                return element;
            }
        };
    }

    private static String elementAsString(HTMLElement e, Map<String, String> attributes, List<HTMLElement> children) {
        StringBuilder b = new StringBuilder();
        BiConsumer<String, String> printAttribute = (k, v) -> b.append(String.format(" %s=\"%s\"", k, v));
        b.append("<").append(e.tagName);
        if (e instanceof HTMLInputElement) { printAttribute.accept("type", ((HTMLInputElement) e).type); }
        if (e.id != null) { printAttribute.accept("id", e.id); }
        if (e.title != null) { printAttribute.accept("title", e.title); }
        // class
        String className = (e.className + " " + e.classList.toString()).trim();
        if (!className.isEmpty()) { printAttribute.accept("class", className); }
        // attributes and data
        attributes.forEach(printAttribute);
        e.dataset.forEach(k -> printAttribute.accept("data-" + k, e.dataset.get(k)));
        // content
        if (e.innerHTML != null) {
            b.append(">").append(e.innerHTML).append("</").append(e.tagName).append(">");
        } else if (e.textContent != null) {
            b.append(">").append(e.textContent).append("</").append(e.tagName).append(">");
        } else if (children.isEmpty()) {
            b.append("/>");
        } else {
            b.append(">")
                    .append(children.stream().map(Object::toString).collect(joining()))
                    .append("</").append(e.tagName).append(">");
        }
        return b.toString();
    }


    private void assertElement(String expected, IsElement actual) {
        assertEquals(expected.replace("\"", ""), actual.asElement().toString().replace("\"", ""));
    }


    // ------------------------------------------------------ container elements

    @Test
    public void buildHeadings() {
        for (int i = 0; i < 6; i++) {
            assertElement("<h" + i + ">Heading " + i + "</h" + i + ">", h(i).textContent("Heading " + i));
        }
    }

    @Test
    public void buildHeadingsWithText() {
        for (int i = 0; i < 6; i++) {
            assertElement("<h" + i + ">Heading " + i + "</h" + i + ">", h(i, "Heading " + i));
        }
    }

    @Test
    public void buildP() {
        assertElement("<p>Lorem ipsum</p>", p().textContent("Lorem ipsum"));
    }

    @Test
    public void buildOl() {
        assertElement("<ol><li>first</li><li>second</li></ol>",
                ol().add(li().textContent("first")).add(li().textContent("second")));
    }

    @Test
    public void buildUl() {
        assertElement("<ul><li>foo</li><li>bar</li></ul>",
                ul().add(li().textContent("foo")).add(li().textContent("bar")));
    }

    @Test
    public void buildA() {
        assertElement("<a title=Visit my blog href=http://hpehl.info/>hpehl.info</a>",
                a().attr("href", "http://hpehl.info/").title("Visit my blog").textContent("hpehl.info"));
    }

    @Test
    public void buildAHref() {
        assertElement("<a title=Visit my blog href=http://hpehl.info/>hpehl.info</a>",
                a("http://hpehl.info/").title("Visit my blog").textContent("hpehl.info"));
    }

    @Test
    public void buildDiv() {
        assertElement("<div/>", div());
    }

    @Test
    public void buildSpan() {
        assertElement("<span/>", span());
    }


    // ------------------------------------------------------ forms

    @Test
    public void buildForm() {
        IsElement element = form().attr("method", "get").attr("action", "search").css("form form-horizontal")
                .add(div().css("form-group")
                        .add(label().css("col-md-3 control-label").attr("for", "name").textContent("Name"))
                        .add(div().css("col-md-9")
                                .add(input(text).id("name").css("form-control")
                                        .attr("placeholder", "Enter your name"))))
                .add(div().css("form-group")
                        .add(label().css("col-md-3 control-label").attr("for", "age").textContent("Age"))
                        .add(div().css("col-md-9")
                                .add(input(number).id("age").css("form-control")
                                        .attr("placeholder", "How old are you?"))))
                .add(div().css("form-group")
                        .add(label().css("col-md-3 control-label").attr("for", "hobbies")
                                .textContent("Hobbies"))
                        .add(div().css("col-md-9")
                                .add(textarea().attr("rows", "3").id("hobbies").css("form-control"))
                                .add(span().css("help-html textarea").textContent("One item per line"))))
                .add(div().css("form-group")
                        .add(label().css("col-md-3 control-label").attr("for", "choose").textContent("Choose"))
                        .add(div().css("col-md-9")
                                .add(select().id("choose").css("form-control selectpicker")
                                        .add(option().textContent("Lorem"))
                                        .add(option().textContent("ipsum")))))
                .add(div().css("form-group")
                        .add(div().css("col-md-offset-3 col-md-9")
                                .add(div().css("pull-right form-buttons")
                                        .add(button().css("btn btn-default btn-form").textContent("Cancel"))
                                        .add(button().css("btn btn-primary btn-form").textContent("Save")))));

        String markup = "<form class=form form-horizontal method=get action=search>" +
                "<div class=form-group>" +
                "<label class=col-md-3 control-label for=name>Name</label>" +
                "<div class=col-md-9>" +
                "<input type=text id=name class=form-control placeholder=Enter your name/>" +
                "</div>" +
                "</div>" +
                "<div class=form-group>" +
                "<label class=col-md-3 control-label for=age>Age</label>" +
                "<div class=col-md-9>" +
                "<input type=number id=age class=form-control placeholder=How old are you?/>" +
                "</div>" +
                "</div>" +
                "<div class=form-group>" +
                "<label class=col-md-3 control-label for=hobbies>Hobbies</label>" +
                "<div class=col-md-9>" +
                "<textarea id=hobbies class=form-control rows=3/>" +
                "<span class=help-html textarea>One item per line</span>" +
                "</div>" +
                "</div>" +
                "<div class=form-group>" +
                "<label class=col-md-3 control-label for=choose>Choose</label>" +
                "<div class=col-md-9>" +
                "<select id=choose class=form-control selectpicker>" +
                "<option>Lorem</option>" +
                "<option>ipsum</option>" +
                "</select>" +
                "</div>" +
                "</div>" +
                "<div class=form-group>" +
                "<div class=col-md-offset-3 col-md-9>" +
                "<div class=pull-right form-buttons>" +
                "<button class=btn btn-default btn-form>Cancel</button>" +
                "<button class=btn btn-primary btn-form>Save</button>" +
                "</div>" +
                "</div>" +
                "</div>" +
                "</form>";

        assertElement(markup, element);
    }


    // ------------------------------------------------------ mixed content

    @Test
    public void buildMixed() {
        IsElement element = div()
                .add(span()
                        .add(br())
                        .add(div()
                                .add(br())
                                .add(span()
                                        .add(br())
                                        .add(br()))
                                .add(br()))
                        .add(br())
                        .add(br()));

        assertElement("<div><span><br/><div><br/><span><br/><br/></span><br/></div><br/><br/></span></div>", element);
    }

    @Test
    public void buildList() {
        List<IsElement> elements = Arrays.asList(
                p().textContent("Some text"),
                ol().add(li().textContent("one")).add(li().textContent("two")).add(li().textContent("three")),
                div().textContent("foo"),
                Elements.br());
        assertEquals(4, Iterables.size(elements));
        assertEquals("<p>Some text</p><ol><li>one</li><li>two</li><li>three</li></ol><div>foo</div><br/>",
                elements.stream().map(e -> e.asElement().toString()).collect(joining()));
    }


    // ------------------------------------------------------ attributes

    @Test
    public void buildAttributes() {
        assertElement("<div id=foo title=bar class=bigger/>", div().id("foo").title("bar").css("bigger"));
        assertElement("<div foo=bar/>", div().attr("foo", "bar"));
    }

    @Test
    public void buildAria() {
        assertElement("<div aria-one=1 aria-two=2 aria-three=3/>",
                div().attr("aria-one", "1").aria("two", "2").aria("aria-three", "3"));
    }

    @Test
    public void buildData() {
        assertElement("<div data-one=1 data-two=2 data-three=3/>",
                div().attr("data-one", "1").data("two", "2").data("data-three", "3"));
    }


    // ------------------------------------------------------ event listener

    @Test
    public void buildEvents() {
        // not a real test - just there to show the API
        button().on(click, event -> System.out.println("Hit!"));
    }
}
