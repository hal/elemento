/*
 * Copyright 2015-2016 Red Hat, Inc, and individual contributors.
 *
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
package org.jboss.elemento;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Objects;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.function.Supplier;
import java.util.stream.Stream;
import java.util.stream.StreamSupport;

import elemental2.core.JsArray;
import elemental2.dom.Element;
import elemental2.dom.HTMLAnchorElement;
import elemental2.dom.HTMLAreaElement;
import elemental2.dom.HTMLAudioElement;
import elemental2.dom.HTMLBRElement;
import elemental2.dom.HTMLBodyElement;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLCanvasElement;
import elemental2.dom.HTMLDListElement;
import elemental2.dom.HTMLDataListElement;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLEmbedElement;
import elemental2.dom.HTMLFieldSetElement;
import elemental2.dom.HTMLFormElement;
import elemental2.dom.HTMLHRElement;
import elemental2.dom.HTMLHeadingElement;
import elemental2.dom.HTMLIFrameElement;
import elemental2.dom.HTMLImageElement;
import elemental2.dom.HTMLInputElement;
import elemental2.dom.HTMLLIElement;
import elemental2.dom.HTMLLabelElement;
import elemental2.dom.HTMLLegendElement;
import elemental2.dom.HTMLMapElement;
import elemental2.dom.HTMLMeterElement;
import elemental2.dom.HTMLModElement;
import elemental2.dom.HTMLOListElement;
import elemental2.dom.HTMLObjectElement;
import elemental2.dom.HTMLOptGroupElement;
import elemental2.dom.HTMLOptionElement;
import elemental2.dom.HTMLOutputElement;
import elemental2.dom.HTMLParagraphElement;
import elemental2.dom.HTMLParamElement;
import elemental2.dom.HTMLPreElement;
import elemental2.dom.HTMLProgressElement;
import elemental2.dom.HTMLQuoteElement;
import elemental2.dom.HTMLScriptElement;
import elemental2.dom.HTMLSelectElement;
import elemental2.dom.HTMLSourceElement;
import elemental2.dom.HTMLTableCaptionElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableColElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;
import elemental2.dom.HTMLTableSectionElement;
import elemental2.dom.HTMLTextAreaElement;
import elemental2.dom.HTMLTrackElement;
import elemental2.dom.HTMLUListElement;
import elemental2.dom.HTMLVideoElement;
import elemental2.dom.Node;
import elemental2.dom.NodeList;
import jsinterop.base.Js;
import jsinterop.base.JsArrayLike;
import org.gwtproject.safehtml.shared.SafeHtml;

import static elemental2.dom.DomGlobal.document;
import static java.util.Collections.emptyIterator;
import static java.util.Collections.emptyList;
import static java.util.Spliterators.spliteratorUnknownSize;
import static java.util.stream.Collectors.joining;
import static jsinterop.base.Js.cast;

/**
 * Helper methods for working with {@link elemental2.dom.HTMLElement}s and/or {@link IsElement}.
 *
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">https://developer.mozilla.org/en-US/docs/Web/HTML/Element</a>
 */
public final class Elements {

    private static final String UNIQUE_ID = "id-";
    private static int counter = 0;

    static ElementCreator createElement = new ElementCreator() {
        @Override
        public <E extends HTMLElement> E create(String element, Class<E> type) {
            return cast(document.createElement(element));
        }
    };

    // ------------------------------------------------------ body

    /** Returns an HTML content builder for the document body. */
    public static HtmlContentBuilder<HTMLBodyElement> body() {
        return new HtmlContentBuilder<>(document.body);
    }

    // ------------------------------------------------------ content sectioning

    public static HtmlContentBuilder<HTMLElement> address() {
        return htmlElement("address", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> address(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLElement> article() {
        return htmlElement("article", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> article(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLElement> aside() {
        return htmlElement("aside", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> aside(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLElement> footer() {
        return htmlElement("footer", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> footer(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLHeadingElement> h(int n) {
        return htmlElement("h" + n, HTMLHeadingElement.class);
    }

    public static HtmlContentBuilder<HTMLHeadingElement> h(int n, String text) {
        return h(n).textContent(text);
    }

    public static HtmlContentBuilder<HTMLHeadingElement> h(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLElement> header() {
        return htmlElement("header", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> header(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLElement> hgroup() {
        return htmlElement("hgroup", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> hgroup(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLElement> nav() {
        return htmlElement("nav", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> nav(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLElement> section() {
        return htmlElement("section", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> section(Element element) {
        return wrapHtmlElement(cast(element));
    }

    // ------------------------------------------------------ text content

    public static HtmlContentBuilder<HTMLQuoteElement> blockquote() {
        return htmlElement("blockquote", HTMLQuoteElement.class);
    }

    public static HtmlContentBuilder<HTMLQuoteElement> blockquote(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLElement> dd() {
        return htmlElement("dd", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> dd(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLDivElement> div() {
        return htmlElement("div", HTMLDivElement.class);
    }

    public static HtmlContentBuilder<HTMLDivElement> div(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLDListElement> dl() {
        return htmlElement("dl", HTMLDListElement.class);
    }

    public static HtmlContentBuilder<HTMLDListElement> dl(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLElement> dt() {
        return htmlElement("dt", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> dt(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLElement> figcaption() {
        return htmlElement("figcaption", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> figcaption(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLElement> figure() {
        return htmlElement("figure", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> figure(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static EmptyContentBuilder<HTMLHRElement> hr() {
        return emptyElement("hr", HTMLHRElement.class);
    }

    public static EmptyContentBuilder<HTMLHRElement> hr(Element element) {
        return wrapEmptyElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLLIElement> li() {
        return htmlElement("li", HTMLLIElement.class);
    }

    public static HtmlContentBuilder<HTMLLIElement> li(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLElement> main() {
        return htmlElement("main", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> main(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLOListElement> ol() {
        return htmlElement("ol", HTMLOListElement.class);
    }

    public static HtmlContentBuilder<HTMLOListElement> ol(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLParagraphElement> p() {
        return htmlElement("p", HTMLParagraphElement.class);
    }

    public static HtmlContentBuilder<HTMLParagraphElement> p(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLPreElement> pre() {
        return htmlElement("pre", HTMLPreElement.class);
    }

    public static HtmlContentBuilder<HTMLPreElement> pre(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLUListElement> ul() {
        return htmlElement("ul", HTMLUListElement.class);
    }

    public static HtmlContentBuilder<HTMLUListElement> ul(Element element) {
        return wrapHtmlElement(cast(element));
    }

    // ------------------------------------------------------ inline text semantics

    public static HtmlContentBuilder<HTMLAnchorElement> a() {
        return htmlElement("a", HTMLAnchorElement.class);
    }

    public static HtmlContentBuilder<HTMLAnchorElement> a(String href) {
        return a().attr("href", href);
    }

    public static HtmlContentBuilder<HTMLAnchorElement> a(String href, String target) {
        return a().attr("href", href).attr("target", target);
    }

    public static HtmlContentBuilder<HTMLAnchorElement> a(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLElement> abbr() {
        return htmlElement("abbr", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> abbr(String text) {
        return htmlElement("abbr", HTMLElement.class).textContent(text);
    }

    public static HtmlContentBuilder<HTMLElement> abbr(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLElement> b() {
        return htmlElement("b", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> b(String text) {
        return htmlElement("b", HTMLElement.class).textContent(text);
    }

    public static HtmlContentBuilder<HTMLElement> b(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static EmptyContentBuilder<HTMLBRElement> br() {
        return emptyElement("br", HTMLBRElement.class);
    }

    public static EmptyContentBuilder<HTMLBRElement> br(Element element) {
        return wrapEmptyElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLElement> cite() {
        return htmlElement("cite", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> cite(String text) {
        return htmlElement("cite", HTMLElement.class).textContent(text);
    }

    public static HtmlContentBuilder<HTMLElement> cite(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLElement> code() {
        return htmlElement("code", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> code(String text) {
        return htmlElement("code", HTMLElement.class).textContent(text);
    }

    public static HtmlContentBuilder<HTMLElement> code(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLElement> dfn() {
        return htmlElement("dfn", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> dfn(String text) {
        return htmlElement("dfn", HTMLElement.class).textContent(text);
    }

    public static HtmlContentBuilder<HTMLElement> dfn(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLElement> em() {
        return htmlElement("em", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> em(String text) {
        return htmlElement("em", HTMLElement.class).textContent(text);
    }

    public static HtmlContentBuilder<HTMLElement> em(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLElement> i() {
        return htmlElement("i", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> i(String text) {
        return htmlElement("i", HTMLElement.class).textContent(text);
    }

    public static HtmlContentBuilder<HTMLElement> i(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLElement> kbd() {
        return htmlElement("kbd", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> kbd(String text) {
        return htmlElement("kbd", HTMLElement.class).textContent(text);
    }

    public static HtmlContentBuilder<HTMLElement> kbd(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLElement> mark() {
        return htmlElement("mark", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> mark(String text) {
        return htmlElement("mark", HTMLElement.class).textContent(text);
    }

    public static HtmlContentBuilder<HTMLElement> mark(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLQuoteElement> q() {
        return htmlElement("q", HTMLQuoteElement.class);
    }

    public static HtmlContentBuilder<HTMLQuoteElement> q(String text) {
        return htmlElement("q", HTMLQuoteElement.class).textContent(text);
    }

    public static HtmlContentBuilder<HTMLQuoteElement> q(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLElement> small() {
        return htmlElement("small", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> small(String text) {
        return htmlElement("small", HTMLElement.class).textContent(text);
    }

    public static HtmlContentBuilder<HTMLElement> small(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLElement> span() {
        return htmlElement("span", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> span(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLElement> strong() {
        return htmlElement("strong", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> strong(String text) {
        return htmlElement("strong", HTMLElement.class).textContent(text);
    }

    public static HtmlContentBuilder<HTMLElement> strong(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLElement> sub() {
        return htmlElement("sub", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> sub(String text) {
        return htmlElement("sub", HTMLElement.class).textContent(text);
    }

    public static HtmlContentBuilder<HTMLElement> sub(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLElement> sup() {
        return htmlElement("sup", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> sup(String text) {
        return htmlElement("sup", HTMLElement.class).textContent(text);
    }

    public static HtmlContentBuilder<HTMLElement> sup(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLElement> time() {
        return htmlElement("time", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> time(String text) {
        return htmlElement("time", HTMLElement.class).textContent(text);
    }

    public static HtmlContentBuilder<HTMLElement> time(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLElement> u() {
        return htmlElement("u", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> u(String text) {
        return htmlElement("u", HTMLElement.class).textContent(text);
    }

    public static HtmlContentBuilder<HTMLElement> u(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLElement> var() {
        return htmlElement("var", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> var(String text) {
        return htmlElement("var", HTMLElement.class).textContent(text);
    }

    public static HtmlContentBuilder<HTMLElement> var(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static EmptyContentBuilder<HTMLElement> wbr() {
        return emptyElement("wbr", HTMLElement.class);
    }

    public static EmptyContentBuilder<HTMLElement> wbr(Element element) {
        return wrapEmptyElement(cast(element));
    }

    // ------------------------------------------------------ image and multimedia

    public static EmptyContentBuilder<HTMLAreaElement> area() {
        return emptyElement("area", HTMLAreaElement.class);
    }

    public static EmptyContentBuilder<HTMLAreaElement> area(Element element) {
        return wrapEmptyElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLAudioElement> audio() {
        return htmlElement("audio", HTMLAudioElement.class);
    }

    public static HtmlContentBuilder<HTMLAudioElement> audio(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static EmptyContentBuilder<HTMLImageElement> img() {
        return emptyElement("img", HTMLImageElement.class);
    }

    public static EmptyContentBuilder<HTMLImageElement> img(String src) {
        return emptyElement("img", HTMLImageElement.class).attr("src", src);
    }

    public static EmptyContentBuilder<HTMLImageElement> img(Element element) {
        return wrapEmptyElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLMapElement> map() {
        return htmlElement("map", HTMLMapElement.class);
    }

    public static HtmlContentBuilder<HTMLMapElement> map(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static EmptyContentBuilder<HTMLTrackElement> track() {
        return emptyElement("track", HTMLTrackElement.class);
    }

    public static EmptyContentBuilder<HTMLTrackElement> track(Element element) {
        return wrapEmptyElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLVideoElement> video() {
        return htmlElement("video", HTMLVideoElement.class);
    }

    public static HtmlContentBuilder<HTMLVideoElement> video(Element element) {
        return wrapHtmlElement(cast(element));
    }

    // ------------------------------------------------------ embedded content

    public static HtmlContentBuilder<HTMLCanvasElement> canvas() {
        return htmlElement("canvas", HTMLCanvasElement.class);
    }

    public static HtmlContentBuilder<HTMLCanvasElement> canvas(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static EmptyContentBuilder<HTMLEmbedElement> embed() {
        return emptyElement("embed", HTMLEmbedElement.class);
    }

    public static EmptyContentBuilder<HTMLEmbedElement> embed(Element element) {
        return wrapEmptyElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLIFrameElement> iframe() {
        return htmlElement("iframe", HTMLIFrameElement.class);
    }

    public static HtmlContentBuilder<HTMLIFrameElement> iframe(String src) {
        return iframe().attr("src", src);
    }

    public static HtmlContentBuilder<HTMLIFrameElement> iframe(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLObjectElement> object() {
        return htmlElement("object", HTMLObjectElement.class);
    }

    public static HtmlContentBuilder<HTMLObjectElement> object(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static EmptyContentBuilder<HTMLParamElement> param() {
        return emptyElement("param", HTMLParamElement.class);
    }

    public static EmptyContentBuilder<HTMLParamElement> param(Element element) {
        return wrapEmptyElement(cast(element));
    }

    public static EmptyContentBuilder<HTMLSourceElement> source() {
        return emptyElement("source", HTMLSourceElement.class);
    }

    public static EmptyContentBuilder<HTMLSourceElement> source(Element element) {
        return wrapEmptyElement(cast(element));
    }

    // ------------------------------------------------------ scripting

    public static HtmlContentBuilder<HTMLElement> noscript() {
        return htmlElement("noscript", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> noscript(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static TextContentBuilder<HTMLScriptElement> script() {
        return textElement("script", HTMLScriptElement.class);
    }

    public static TextContentBuilder<HTMLScriptElement> script(Element element) {
        return wrapTextElement(cast(element));
    }

    // ------------------------------------------------------ demarcating edits

    public static HtmlContentBuilder<HTMLModElement> del() {
        return htmlElement("del", HTMLModElement.class);
    }

    public static HtmlContentBuilder<HTMLModElement> del(String text) {
        return htmlElement("del", HTMLModElement.class).textContent(text);
    }

    public static HtmlContentBuilder<HTMLModElement> del(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLModElement> ins() {
        return htmlElement("ins", HTMLModElement.class);
    }

    public static HtmlContentBuilder<HTMLModElement> ins(String text) {
        return htmlElement("ins", HTMLModElement.class).textContent(text);
    }

    public static HtmlContentBuilder<HTMLModElement> ins(Element element) {
        return wrapHtmlElement(cast(element));
    }

    // ------------------------------------------------------ table content

    public static HtmlContentBuilder<HTMLTableCaptionElement> caption() {
        return htmlElement("caption", HTMLTableCaptionElement.class);
    }

    public static HtmlContentBuilder<HTMLTableCaptionElement> caption(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static EmptyContentBuilder<HTMLTableColElement> col() {
        return emptyElement("col", HTMLTableColElement.class);
    }

    public static EmptyContentBuilder<HTMLTableColElement> col(Element element) {
        return wrapEmptyElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLTableColElement> colgroup() {
        return htmlElement("colgroup", HTMLTableColElement.class);
    }

    public static HtmlContentBuilder<HTMLTableColElement> colgroup(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLTableElement> table() {
        return htmlElement("table", HTMLTableElement.class);
    }

    public static HtmlContentBuilder<HTMLTableElement> table(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLTableSectionElement> tbody() {
        return htmlElement("tbody", HTMLTableSectionElement.class);
    }

    public static HtmlContentBuilder<HTMLTableSectionElement> tbody(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLTableCellElement> td() {
        return htmlElement("td", HTMLTableCellElement.class);
    }

    public static HtmlContentBuilder<HTMLTableCellElement> td(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLTableSectionElement> tfoot() {
        return htmlElement("tfoot", HTMLTableSectionElement.class);
    }

    public static HtmlContentBuilder<HTMLTableSectionElement> tfoot(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLTableCellElement> th() {
        return htmlElement("th", HTMLTableCellElement.class);
    }

    public static HtmlContentBuilder<HTMLTableCellElement> th(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLTableSectionElement> thead() {
        return htmlElement("thead", HTMLTableSectionElement.class);
    }

    public static HtmlContentBuilder<HTMLTableSectionElement> thead(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLTableRowElement> tr() {
        return htmlElement("tr", HTMLTableRowElement.class);
    }

    public static HtmlContentBuilder<HTMLTableRowElement> tr(Element element) {
        return wrapHtmlElement(cast(element));
    }

    // ------------------------------------------------------ forms

    public static HtmlContentBuilder<HTMLButtonElement> button() {
        return htmlElement("button", HTMLButtonElement.class);
    }

    public static HtmlContentBuilder<HTMLButtonElement> button(String text) {
        return button().textContent(text);
    }

    public static HtmlContentBuilder<HTMLButtonElement> button(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLDataListElement> datalist() {
        return htmlElement("datalist", HTMLDataListElement.class);
    }

    public static HtmlContentBuilder<HTMLDataListElement> datalist(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLFieldSetElement> fieldset() {
        return htmlElement("fieldset", HTMLFieldSetElement.class);
    }

    public static HtmlContentBuilder<HTMLFieldSetElement> fieldset(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLFormElement> form() {
        return htmlElement("form", HTMLFormElement.class);
    }

    public static HtmlContentBuilder<HTMLFormElement> form(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static InputBuilder<HTMLInputElement> input(InputType type) {
        return input(type.name());
    }

    public static InputBuilder<HTMLInputElement> input(String type) {
        return input(type, HTMLInputElement.class);
    }

    public static <E extends HTMLInputElement> InputBuilder<E> input(String type, Class<E> jType) {
        E el = createElement("input", jType);
        el.type = type;
        return new InputBuilder<>(el);
    }

    public static InputBuilder<HTMLInputElement> input(Element element) {
        return wrapInputElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLLabelElement> label() {
        return htmlElement("label", HTMLLabelElement.class);
    }

    public static HtmlContentBuilder<HTMLLabelElement> label(String text) {
        return label().textContent(text);
    }

    public static HtmlContentBuilder<HTMLLabelElement> label(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLLegendElement> legend() {
        return htmlElement("legend", HTMLLegendElement.class);
    }

    public static HtmlContentBuilder<HTMLLegendElement> legend(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLMeterElement> meter() {
        return htmlElement("meter", HTMLMeterElement.class);
    }

    public static HtmlContentBuilder<HTMLMeterElement> meter(String text) {
        return htmlElement("meter", HTMLMeterElement.class).textContent(text);
    }

    public static HtmlContentBuilder<HTMLMeterElement> meter(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLOptGroupElement> optgroup() {
        return htmlElement("optgroup", HTMLOptGroupElement.class);
    }

    public static HtmlContentBuilder<HTMLOptGroupElement> optgroup(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static TextContentBuilder<HTMLOptionElement> option() {
        return textElement("option", HTMLOptionElement.class);
    }

    public static TextContentBuilder<HTMLOptionElement> option(String text) {
        return option().textContent(text);
    }

    public static TextContentBuilder<HTMLOptionElement> option(Element element) {
        return wrapTextElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLOutputElement> output() {
        return htmlElement("output", HTMLOutputElement.class);
    }

    public static HtmlContentBuilder<HTMLOutputElement> output(String text) {
        return htmlElement("output", HTMLOutputElement.class).textContent(text);
    }

    public static HtmlContentBuilder<HTMLOutputElement> output(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLProgressElement> progress() {
        return htmlElement("progress", HTMLProgressElement.class);
    }

    public static HtmlContentBuilder<HTMLProgressElement> progress(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HtmlContentBuilder<HTMLSelectElement> select() {
        return htmlElement("select", HTMLSelectElement.class);
    }

    public static HtmlContentBuilder<HTMLSelectElement> select(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static TextContentBuilder<HTMLTextAreaElement> textarea() {
        return textElement("textarea", HTMLTextAreaElement.class);
    }

    public static TextContentBuilder<HTMLTextAreaElement> textarea(Element element) {
        return wrapTextElement(cast(element));
    }

    // ------------------------------------------------------ builder factories

    /** Returns a builder to collect {@link HTMLElement}s. */
    public static ElementsBag bag() {
        return new ElementsBag();
    }

    /** Returns a builder for the specified empty element. */
    public static <E extends HTMLElement> EmptyContentBuilder<E> emptyElement(String element, Class<E> type) {
        return new EmptyContentBuilder<>(createElement(element, type));
    }

    /** Returns a builder for the specified text element. */
    public static <E extends HTMLElement> TextContentBuilder<E> textElement(String element, Class<E> type) {
        return new TextContentBuilder<>(createElement(element, type));
    }

    /** Returns a builder for the specified HTML element. */
    public static <E extends HTMLElement> HtmlContentBuilder<E> htmlElement(String element, Class<E> type) {
        return new HtmlContentBuilder<>(createElement(element, type));
    }

    /** Creates the specified HTML element. */
    public static <E extends HTMLElement> E createElement(String element, Class<E> type) {
        return createElement.create(element, type);
    }

    // ------------------------------------------------------ wrapper methods

    /** Returns a builder for the existing empty element. */
    public static <E extends HTMLElement> EmptyContentBuilder<E> wrapEmptyElement(E element) {
        return new EmptyContentBuilder<>(element);
    }

    /** Returns a builder for the existing text element. */
    public static <E extends HTMLElement> TextContentBuilder<E> wrapTextElement(E element) {
        return new TextContentBuilder<>(element);
    }

    /** Returns a builder for the existing input element. */
    public static <E extends HTMLInputElement> InputBuilder<E> wrapInputElement(E element) {
        return new InputBuilder<>(element);
    }

    /** Returns a builder for the existing HTML element. */
    public static <E extends HTMLElement> HtmlContentBuilder<E> wrapHtmlElement(E element) {
        return new HtmlContentBuilder<>(element);
    }

    // ------------------------------------------------------ finder methods

    /** Finds all HTML elements for the given selector. */
    public static Iterable<HTMLElement> findAll(Node node, By selector) {
        if (node != null) {
            NodeList<Element> nodes = node.querySelectorAll(selector.selector());
            JsArray<HTMLElement> htmlElements = new JsArray<>();
            for (int i = 0; i < nodes.length; i++) {
                Element element = nodes.getAt(i);
                if (element instanceof HTMLElement) {
                    htmlElements.push((HTMLElement) element);
                }
            }
            return () -> iterator(htmlElements);
        }
        return emptyList();
    }

    /** Finds all HTML elements for the given selector. */
    public static <E extends HTMLElement> Iterable<HTMLElement> findAll(IsElement<E> element, By selector) {
        return findAll(element.element(), selector);
    }

    /** Finds a single HTML elements for the given selector. */
    public static <E extends HTMLElement> E find(Node node, By selector) {
        return cast(node.querySelector(selector.selector()));
    }

    /** Finds a single HTML elements for the given selector. */
    public static <E extends HTMLElement, F extends HTMLElement> F find(IsElement<E> element, By selector) {
        return find(element.element(), selector);
    }

    /** Finds the closest HTML elements for the given selector. */
    public static <E extends HTMLElement> E closest(Element element, By selector) {
        return cast(element.closest(selector.selector()));
    }

    /** Finds the closest HTML elements for the given selector. */
    public static <E extends HTMLElement, F extends HTMLElement> F closest(IsElement<E> element, By selector) {
        return cast(element.element().closest(selector.selector()));
    }

    // ------------------------------------------------------ iterator methods

    /**
     * Returns an iterator over the given array-like. The iterator does <strong>not</strong> support the {@link
     * Iterator#remove()} operation.
     */
    public static <E> Iterator<E> iterator(JsArrayLike<E> data) {
        return data != null ? new JsArrayLikeIterator<>(data) : emptyIterator();
    }

    /**
     * Returns an iterator over the children of the given parent node. The iterator supports the {@link
     * Iterator#remove()} operation, which removes the current node from its parent.
     */
    public static Iterator<Node> iterator(Node parent) {
        return parent != null ? new JsArrayNodeIterator(parent) : emptyIterator();
    }

    /**
     * Returns an iterator over the children of the given parent element. The iterator supports the {@link
     * Iterator#remove()} operation, which removes the current node from its parent.
     */
    public static Iterator<HTMLElement> iterator(HTMLElement parent) {
        return parent != null ? new JsArrayElementIterator(parent) : emptyIterator();
    }

    /**
     * Returns an iterator over the children of the given parent element. The iterator supports the {@link
     * Iterator#remove()} operation, which removes the current node from its parent.
     */
    public static <E extends HTMLElement> Iterator<HTMLElement> iterator(IsElement<E> parent) {
        return parent != null ? iterator(parent.element()) : emptyIterator();
    }

    // ------------------------------------------------------ iterable methods

    /** Returns an iterable for the elements in the given array-like. */
    public static <E> Iterable<E> elements(JsArrayLike<E> nodes) {
        return () -> iterator(nodes);
    }

    /** Returns an iterable for the child nodes of the given parent node. */
    public static Iterable<Node> children(Node parent) {
        return () -> iterator(parent);
    }

    /** Returns an iterable for the child elements of the given parent element. */
    public static Iterable<HTMLElement> children(HTMLElement parent) {
        return () -> iterator(parent);
    }

    /** Returns an iterable for the child elements of the given parent element. */
    public static <E extends HTMLElement> Iterable<HTMLElement> children(IsElement<E> parent) {
        return () -> iterator(parent);
    }

    // ------------------------------------------------------ predicates and functions

    /**
     * Returns a predicate for {@linkplain HTMLElement HTML elements}. Useful in streams of {@linkplain Node nodes} or
     * {@linkplain Element elements}.
     */
    public static <T extends Node> Predicate<T> htmlElements() {
        return new FilterHTMLElements<>();
    }

    /**
     * Casts to {@link HTMLElement}. Make sure to {@linkplain #htmlElements() filter} for HTML elements before using
     * this function.
     */
    public static <T extends Node> Function<T, HTMLElement> asHtmlElement() {
        return new AsHTMLElement<>();
    }

    // ------------------------------------------------------ stream methods

    /** Returns a stream for the elements in the given array-like. */
    public static <E> Stream<E> stream(JsArrayLike<E> nodes) {
        if (nodes == null) {
            return Stream.empty();
        } else {
            return StreamSupport.stream(spliteratorUnknownSize(iterator(nodes), 0), false);
        }
    }

    /** Returns a stream for the child nodes of the given parent node. */
    public static Stream<Node> stream(Node parent) {
        if (parent == null) {
            return Stream.empty();
        } else {
            return StreamSupport.stream(spliteratorUnknownSize(iterator(parent), 0), false);
        }
    }

    /** Returns a stream for the child elements of the given parent element. */
    public static Stream<HTMLElement> stream(HTMLElement parent) {
        if (parent == null) {
            return Stream.empty();
        } else {
            return StreamSupport.stream(spliteratorUnknownSize(iterator(parent), 0), false);
        }
    }

    /** Returns a stream for the child elements of the given parent element. */
    public static <E extends HTMLElement> Stream<HTMLElement> stream(IsElement<E> parent) {
        if (parent == null) {
            return Stream.empty();
        } else {
            return StreamSupport.stream(spliteratorUnknownSize(iterator(parent), 0), false);
        }
    }

    // ------------------------------------------------------ element append, insert & remove methods

    /**
     * Appends element {@code child} to element {@code parent} if not already present. If parent already contains child,
     * this method does nothing.
     */
    public static void lazyAppend(Element parent, Element child) {
        if (!parent.contains(child)) {
            parent.appendChild(child);
        }
    }

    public static <E extends HTMLElement> void lazyAppend(Element parent, IsElement<E> child) {
        if (child != null) {
            lazyAppend(parent, child.element());
        }
    }

    /** Inserts element {@code newElement} into the parent after element {@code after}. */
    public static void insertAfter(Element newElement, Element after) {
        after.parentNode.insertBefore(newElement, after.nextSibling);
    }

    public static <E extends HTMLElement> void insertAfter(IsElement<E> newElement, Element after) {
        if (newElement != null) {
            insertAfter(newElement.element(), after);
        }
    }

    /**
     * Inserts element {@code newElement} into the parent after element {@code after} if not already present. If parent
     * already contains {@code newElement}, this method does nothing.
     */
    public static void lazyInsertAfter(Element newElement, Element after) {
        if (!after.parentNode.contains(newElement)) {
            after.parentNode.insertBefore(newElement, after.nextSibling);
        }
    }

    public static <E extends HTMLElement> void lazyInsertAfter(IsElement<E> newElement, Element after) {
        if (newElement != null) {
            lazyInsertAfter(newElement.element(), after);
        }
    }

    /**
     * Inserts element {@code newElement} into the parent after element {@code after} if not already present. If parent
     * already contains {@code newElement}, this method does nothing.
     */
    public static void lazyInsertAfter(Element parent, Element newElement, Element after) {
        if (!parent.contains(newElement)) {
            parent.insertBefore(newElement, after.nextSibling);
        }
    }

    public static <E extends HTMLElement> void lazyInsertAfter(Element parent, IsElement<E> newElement, Element after) {
        if (newElement != null) {
            lazyInsertAfter(parent, newElement.element(), after);
        }
    }

    /** Inserts element {@code newElement} into the parent before element {@code before}. */
    public static void insertBefore(Element newElement, Element before) {
        before.parentNode.insertBefore(newElement, before);
    }

    public static <E extends HTMLElement> void insertBefore(IsElement<E> newElement, Element before) {
        if (newElement != null) {
            insertBefore(newElement.element(), before);
        }
    }

    /**
     * Inserts element {@code newElement} into the parent before element {@code before} if not already present. If
     * parent already contains {@code newElement}, this method does nothing.
     */
    public static void lazyInsertBefore(Element newElement, Element before) {
        if (!before.parentNode.contains(newElement)) {
            before.parentNode.insertBefore(newElement, before);
        }
    }

    public static <E extends HTMLElement> void lazyInsertBefore(IsElement<E> newElement, Element before) {
        if (newElement != null) {
            lazyInsertBefore(newElement.element(), before);
        }
    }

    /**
     * Inserts element {@code newElement} into the parent before element {@code before} if not already present. If
     * parent already contains {@code newElement}, this method does nothing.
     */
    public static void lazyInsertBefore(Element parent, Element newElement, Element before) {
        if (!parent.contains(newElement)) {
            parent.insertBefore(newElement, before);
        }
    }

    public static <E extends HTMLElement> void lazyInsertBefore(Element parent, IsElement<E> newElement,
            Element before) {
        if (newElement != null) {
            lazyInsertBefore(parent, newElement.element(), before);
        }
    }

    /** Inserts element {@code newElement} as first element into {@code parent}. */
    public static void insertFirst(Element parent, Element newElement) {
        parent.insertBefore(newElement, parent.firstChild);
    }

    public static <E extends HTMLElement> void insertFirst(Element parent, IsElement<E> newElement) {
        if (newElement != null) {
            insertFirst(parent, newElement.element());
        }
    }

    /** Removes all child elements from {@code element} */
    public static void removeChildrenFrom(Element element) {
        if (element != null) {
            while (element.firstChild != null) {
                element.removeChild(element.firstChild);
            }
        }
    }

    public static <E extends HTMLElement> void removeChildrenFrom(IsElement<E> element) {
        if (element != null) {
            removeChildrenFrom(element.element());
        }
    }

    /**
     * Removes the element from its parent if the element is not null and has a parent.
     *
     * @return {@code true} if the the element has been removed from its parent, {@code false} otherwise.
     */
    public static boolean failSafeRemoveFromParent(Element element) {
        return failSafeRemove(element != null ? element.parentNode : null, element);
    }

    public static <E extends HTMLElement> boolean failSafeRemoveFromParent(IsElement<E> element) {
        if (element != null) {
            return failSafeRemoveFromParent(element.element());
        }
        return false;
    }

    /**
     * Removes the child from parent if both parent and child are not null and parent contains child.
     *
     * @return {@code true} if the element has been removed from its parent, {@code false} otherwise.
     */
    public static boolean failSafeRemove(Node parent, Element child) {
        if (parent != null && child != null && parent.contains(child)) {
            return parent.removeChild(child) != null;
        }
        return false;
    }

    public static <E extends HTMLElement> boolean failSafeRemove(Node parent, IsElement<E> child) {
        if (child != null) {
            return failSafeRemove(parent, child.element());
        }
        return false;
    }

    // ------------------------------------------------------ attach / detach

    /**
     * Registers a callback when an element is appended to the document body. Note that the callback will be called only
     * once, if the element is appended more than once a new callback should be registered.
     *
     * @param element  the HTML element which is going to be added to the body
     * @param callback {@link ObserverCallback}
     */
    public static void onAttach(HTMLElement element, ObserverCallback callback) {
        if (element != null) {
            BodyObserver.addAttachObserver(element, callback);
        }
    }

    public static <E extends HTMLElement> void onAttach(IsElement<E> element, ObserverCallback callback) {
        if (element != null) {
            onAttach(element.element(), callback);
        }
    }

    /**
     * Registers a callback when an element is removed from the document body. Note that the callback will be called
     * only once, if the element is removed and re-appended a new callback should be registered.
     *
     * @param element  the HTML element which is going to be removed from the body
     * @param callback {@link ObserverCallback}
     */
    public static void onDetach(HTMLElement element, ObserverCallback callback) {
        if (element != null) {
            BodyObserver.addDetachObserver(element, callback);
        }
    }

    public static <E extends HTMLElement> void onDetach(IsElement<E> element, ObserverCallback callback) {
        if (element != null) {
            onDetach(element.element(), callback);
        }
    }

    // ------------------------------------------------------ IDs

    /** Creates an identifier guaranteed to be unique within this document. This is useful for allocating element IDs. */
    public static String uniqueId() {
        String id;
        do {
            id = UNIQUE_ID + counter; // no Ids.build(ELEMENTO_UID, counter) for performance reasons
            counter++;
        } while (document.getElementById(id) != null);
        return id;
    }

    /** Creates an identifier guaranteed to be unique within this document. The unique part comes last. */
    public static String uniqueId(String id, String... additionalIds) {
        return buildId(id, additionalIds) + "-" + uniqueId();
    }

    public static String buildId(String id, String... additionalIds) {
        return buildId(id, '-', additionalIds);
    }

    @SuppressWarnings("SameParameterValue")
    static String buildId(String id, char separator, String... additionalIds) {
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
        return ids.stream().map(Elements::asId).filter(Objects::nonNull).collect(joining(String.valueOf(separator)));
    }

    /**
     * Turns a string which can contain whitespace and upper/lower case characters into an all lowercase id separated by
     * "-".
     */
    static String asId(String text) {
        String[] parts = text.split("[-\\s]");
        List<String> sanitized = new ArrayList<>();
        for (String part : parts) {
            if (part != null) {
                String s = part.replaceAll("\\s+", "");
                s = s.replaceAll("[^a-zA-Z0-9]", "");
                if (s.length() != 0) {
                    sanitized.add(s);
                }
            }
        }
        if (sanitized.isEmpty()) {
            return null;
        } else {
            return sanitized.stream()
                    .filter(s -> s != null && s.trim().length() != 0)
                    .map(String::toLowerCase)
                    .collect(joining("-"));
        }
    }

    // ------------------------------------------------------ visibility

    /** Checks whether the given element is visible (i.e. {@code display} is not {@code none}) */
    public static boolean isVisible(HTMLElement element) {
        return element != null && !"none".equals(element.style.display);
    }

    public static <E extends HTMLElement> boolean isVisible(IsElement<E> element) {
        return element != null && isVisible(element.element());
    }

    /** Shows / hide the specified element by modifying the {@code display} property. */
    public static void setVisible(HTMLElement element, boolean visible) {
        if (element != null) {
            element.style.display = visible ? "" : "none";
        }
    }

    public static <E extends HTMLElement> void setVisible(IsElement<E> element, boolean visible) {
        if (element != null) {
            setVisible(element.element(), visible);
        }
    }

    // ------------------------------------------------------ CSS

    /** Adds the specified CSS class to the element if {@code condition} is {@code true}, removes it otherwise. */
    public static void toggle(HTMLElement element, String css, boolean condition) {
        if (element != null) {
            element.classList.toggle(css, condition);
        }
    }

    public static <E extends HTMLElement> void toggle(IsElement<E> element, String css, boolean condition) {
        if (element != null) {
            toggle(element.element(), css, condition);
        }
    }

    /** Adds the specified CSS class to the element if {@code condition} is {@code true}, removes it otherwise. */
    public static void toggle(HTMLElement element, String css, Supplier<Boolean> condition) {
        if (element != null) {
            element.classList.toggle(css, condition.get());
        }
    }

    public static <E extends HTMLElement> void toggle(IsElement<E> element, String css, Supplier<Boolean> condition) {
        if (element != null) {
            element.element().classList.toggle(css, condition.get());
        }
    }

    // ------------------------------------------------------ inner HTML

    /** Convenience method to set the inner HTML of the given element. */
    public static void innerHtml(HTMLElement element, SafeHtml html) {
        if (element != null) {
            element.innerHTML = html.asString();
        }
    }

    public static <E extends HTMLElement> void innerHtml(IsElement<E> element, SafeHtml html) {
        if (element != null) {
            innerHtml(element.element(), html);
        }
    }

    // ------------------------------------------------------ instance

    // this is a static helper class, which must never be instantiated!
    private Elements() {
    }

    // ------------------------------------------------------ inner classes

    private static class AsHTMLElement<T extends Node> implements Function<T, HTMLElement> {

        @Override
        public HTMLElement apply(T t) {
            return Js.uncheckedCast(t);
        }
    }

    private static class FilterHTMLElements<T> implements Predicate<T> {

        @Override
        public boolean test(T t) {
            return t instanceof HTMLElement;
        }
    }

    private static class JsArrayLikeIterator<T> implements Iterator<T> {

        private final JsArrayLike<? extends T> data;
        private int pos = 0;

        JsArrayLikeIterator(JsArrayLike<? extends T> nodes) {
            this.data = nodes;
        }

        @Override
        public boolean hasNext() {
            return pos < data.getLength();
        }

        @Override
        public T next() {
            if (!hasNext()) {
                throw new NoSuchElementException();
            }
            return data.getAt(pos++);
        }
    }

    private static class JsArrayNodeIterator implements Iterator<Node> {

        private Node parent, last, next;

        public JsArrayNodeIterator(Node parent) {
            this.parent = parent;
            next = parent.firstChild;
        }

        @Override
        public boolean hasNext() {
            return next != null;
        }

        @Override
        public Node next() {
            if (!hasNext()) {
                throw new NoSuchElementException();
            }
            last = next;
            next = last.nextSibling;
            return last;
        }

        @Override
        public void remove() {
            if (last == null) {
                throw new IllegalStateException();
            }
            parent.removeChild(last);
            last = null;
        }
    }

    // This should be Iterator<Element>, but it was used frequently as HTMLElement, so to be more user-friendly the
    // cast is forced, not sure about the implication bc not sure what elements can be Element and no HTMLElement
    private static class JsArrayElementIterator implements Iterator<HTMLElement> {

        private HTMLElement parent, last, next;

        public JsArrayElementIterator(HTMLElement parent) {
            this.parent = parent;
            next = (HTMLElement) parent.firstElementChild;
        }

        @Override
        public boolean hasNext() {
            return next != null;
        }

        @Override
        public HTMLElement next() {
            if (!hasNext()) {
                throw new NoSuchElementException();
            }
            last = next;
            next = (HTMLElement) last.nextElementSibling;
            return last;
        }

        @Override
        public void remove() {
            if (last == null) {
                throw new IllegalStateException();
            }
            parent.removeChild(last);
            last = null;
        }
    }
}
