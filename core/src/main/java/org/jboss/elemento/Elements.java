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

import java.util.Iterator;
import java.util.NoSuchElementException;
import java.util.function.Function;
import java.util.function.Predicate;
import java.util.function.Supplier;
import java.util.stream.Stream;
import java.util.stream.StreamSupport;

import org.gwtproject.event.shared.HandlerRegistration;
import org.gwtproject.safehtml.shared.SafeHtml;

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
import elemental2.dom.HTMLPictureElement;
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

import static elemental2.dom.DomGlobal.document;
import static elemental2.dom.DomGlobal.window;
import static java.util.Collections.emptyIterator;
import static java.util.Collections.emptyList;
import static java.util.Spliterators.spliteratorUnknownSize;
import static jsinterop.base.Js.cast;
import static jsinterop.base.Js.isTripleEqual;
import static jsinterop.base.Js.undefined;
import static org.jboss.elemento.BodyObserver.addAttachObserver;
import static org.jboss.elemento.EventType.bind;
import static org.jboss.elemento.EventType.resize;

/**
 * Builder and helper methods for working with {@link elemental2.dom.HTMLElement}s and/or {@link IsElement}.
 * <p>
 * {@snippet class = ElementsDemo region = builder}
 *
 * @see <a href=
 *      "https://developer.mozilla.org/en-US/docs/Web/HTML/Element">https://developer.mozilla.org/en-US/docs/Web/HTML/Element</a>
 */
@SuppressWarnings({ "unused", "ConfusingMainMethod" })
public final class Elements {

    // ------------------------------------------------------ body

    /** Returns an HTML content builder for the document body. */
    public static HTMLContainerBuilder<HTMLBodyElement> body() {
        return new HTMLContainerBuilder<>(document.body);
    }

    // ------------------------------------------------------ content sectioning

    public static HTMLContainerBuilder<HTMLElement> address() {
        return htmlContainer("address", HTMLElement.class);
    }

    public static HTMLContainerBuilder<HTMLElement> address(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLElement> article() {
        return htmlContainer("article", HTMLElement.class);
    }

    public static HTMLContainerBuilder<HTMLElement> article(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLElement> aside() {
        return htmlContainer("aside", HTMLElement.class);
    }

    public static HTMLContainerBuilder<HTMLElement> aside(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLElement> footer() {
        return htmlContainer("footer", HTMLElement.class);
    }

    public static HTMLContainerBuilder<HTMLElement> footer(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLHeadingElement> h(int n) {
        return htmlContainer("h" + n, HTMLHeadingElement.class);
    }

    public static HTMLContainerBuilder<HTMLHeadingElement> h(int n, String text) {
        return h(n).textContent(text);
    }

    public static HTMLContainerBuilder<HTMLHeadingElement> h(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLElement> header() {
        return htmlContainer("header", HTMLElement.class);
    }

    public static HTMLContainerBuilder<HTMLElement> header(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLElement> hgroup() {
        return htmlContainer("hgroup", HTMLElement.class);
    }

    public static HTMLContainerBuilder<HTMLElement> hgroup(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLElement> nav() {
        return htmlContainer("nav", HTMLElement.class);
    }

    public static HTMLContainerBuilder<HTMLElement> nav(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLElement> section() {
        return htmlContainer("section", HTMLElement.class);
    }

    public static HTMLContainerBuilder<HTMLElement> section(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    // ------------------------------------------------------ text content

    public static HTMLContainerBuilder<HTMLQuoteElement> blockquote() {
        return htmlContainer("blockquote", HTMLQuoteElement.class);
    }

    public static HTMLContainerBuilder<HTMLQuoteElement> blockquote(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLElement> dd() {
        return htmlContainer("dd", HTMLElement.class);
    }

    public static HTMLContainerBuilder<HTMLElement> dd(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLDivElement> div() {
        return htmlContainer("div", HTMLDivElement.class);
    }

    public static HTMLContainerBuilder<HTMLDivElement> div(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLDListElement> dl() {
        return htmlContainer("dl", HTMLDListElement.class);
    }

    public static HTMLContainerBuilder<HTMLDListElement> dl(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLElement> dt() {
        return htmlContainer("dt", HTMLElement.class);
    }

    public static HTMLContainerBuilder<HTMLElement> dt(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLElement> figcaption() {
        return htmlContainer("figcaption", HTMLElement.class);
    }

    public static HTMLContainerBuilder<HTMLElement> figcaption(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLElement> figure() {
        return htmlContainer("figure", HTMLElement.class);
    }

    public static HTMLContainerBuilder<HTMLElement> figure(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLElementBuilder<HTMLHRElement> hr() {
        return htmlElement("hr", HTMLHRElement.class);
    }

    public static HTMLElementBuilder<HTMLHRElement> hr(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HTMLContainerBuilder<HTMLLIElement> li() {
        return htmlContainer("li", HTMLLIElement.class);
    }

    public static HTMLContainerBuilder<HTMLLIElement> li(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLElement> main() {
        return htmlContainer("main", HTMLElement.class);
    }

    public static HTMLContainerBuilder<HTMLElement> main(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLOListElement> ol() {
        return htmlContainer("ol", HTMLOListElement.class);
    }

    public static HTMLContainerBuilder<HTMLOListElement> ol(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLParagraphElement> p() {
        return htmlContainer("p", HTMLParagraphElement.class);
    }

    public static HTMLContainerBuilder<HTMLParagraphElement> p(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLPreElement> pre() {
        return htmlContainer("pre", HTMLPreElement.class);
    }

    public static HTMLContainerBuilder<HTMLPreElement> pre(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLUListElement> ul() {
        return htmlContainer("ul", HTMLUListElement.class);
    }

    public static HTMLContainerBuilder<HTMLUListElement> ul(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    // ------------------------------------------------------ inline text semantics

    public static HTMLContainerBuilder<HTMLAnchorElement> a() {
        return htmlContainer("a", HTMLAnchorElement.class);
    }

    public static HTMLContainerBuilder<HTMLAnchorElement> a(String href) {
        return a().attr("href", href);
    }

    public static HTMLContainerBuilder<HTMLAnchorElement> a(String href, String target) {
        return a().attr("href", href).attr("target", target);
    }

    public static HTMLContainerBuilder<HTMLAnchorElement> a(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLElement> abbr() {
        return htmlContainer("abbr", HTMLElement.class);
    }

    public static HTMLContainerBuilder<HTMLElement> abbr(String text) {
        return htmlContainer("abbr", HTMLElement.class).textContent(text);
    }

    public static HTMLContainerBuilder<HTMLElement> abbr(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLElement> b() {
        return htmlContainer("b", HTMLElement.class);
    }

    public static HTMLContainerBuilder<HTMLElement> b(String text) {
        return htmlContainer("b", HTMLElement.class).textContent(text);
    }

    public static HTMLContainerBuilder<HTMLElement> b(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLElementBuilder<HTMLBRElement> br() {
        return htmlElement("br", HTMLBRElement.class);
    }

    public static HTMLElementBuilder<HTMLBRElement> br(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HTMLContainerBuilder<HTMLElement> cite() {
        return htmlContainer("cite", HTMLElement.class);
    }

    public static HTMLContainerBuilder<HTMLElement> cite(String text) {
        return htmlContainer("cite", HTMLElement.class).textContent(text);
    }

    public static HTMLContainerBuilder<HTMLElement> cite(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLElement> code() {
        return htmlContainer("code", HTMLElement.class);
    }

    public static HTMLContainerBuilder<HTMLElement> code(String text) {
        return htmlContainer("code", HTMLElement.class).textContent(text);
    }

    public static HTMLContainerBuilder<HTMLElement> code(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLElement> dfn() {
        return htmlContainer("dfn", HTMLElement.class);
    }

    public static HTMLContainerBuilder<HTMLElement> dfn(String text) {
        return htmlContainer("dfn", HTMLElement.class).textContent(text);
    }

    public static HTMLContainerBuilder<HTMLElement> dfn(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLElement> em() {
        return htmlContainer("em", HTMLElement.class);
    }

    public static HTMLContainerBuilder<HTMLElement> em(String text) {
        return htmlContainer("em", HTMLElement.class).textContent(text);
    }

    public static HTMLContainerBuilder<HTMLElement> em(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLElement> i() {
        return htmlContainer("i", HTMLElement.class);
    }

    public static HTMLContainerBuilder<HTMLElement> i(String text) {
        return htmlContainer("i", HTMLElement.class).textContent(text);
    }

    public static HTMLContainerBuilder<HTMLElement> i(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLElement> kbd() {
        return htmlContainer("kbd", HTMLElement.class);
    }

    public static HTMLContainerBuilder<HTMLElement> kbd(String text) {
        return htmlContainer("kbd", HTMLElement.class).textContent(text);
    }

    public static HTMLContainerBuilder<HTMLElement> kbd(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLElement> mark() {
        return htmlContainer("mark", HTMLElement.class);
    }

    public static HTMLContainerBuilder<HTMLElement> mark(String text) {
        return htmlContainer("mark", HTMLElement.class).textContent(text);
    }

    public static HTMLContainerBuilder<HTMLElement> mark(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLQuoteElement> q() {
        return htmlContainer("q", HTMLQuoteElement.class);
    }

    public static HTMLContainerBuilder<HTMLQuoteElement> q(String text) {
        return htmlContainer("q", HTMLQuoteElement.class).textContent(text);
    }

    public static HTMLContainerBuilder<HTMLQuoteElement> q(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLElement> small() {
        return htmlContainer("small", HTMLElement.class);
    }

    public static HTMLContainerBuilder<HTMLElement> small(String text) {
        return htmlContainer("small", HTMLElement.class).textContent(text);
    }

    public static HTMLContainerBuilder<HTMLElement> small(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLElement> span() {
        return htmlContainer("span", HTMLElement.class);
    }

    public static HTMLContainerBuilder<HTMLElement> span(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLElement> strong() {
        return htmlContainer("strong", HTMLElement.class);
    }

    public static HTMLContainerBuilder<HTMLElement> strong(String text) {
        return htmlContainer("strong", HTMLElement.class).textContent(text);
    }

    public static HTMLContainerBuilder<HTMLElement> strong(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLElement> sub() {
        return htmlContainer("sub", HTMLElement.class);
    }

    public static HTMLContainerBuilder<HTMLElement> sub(String text) {
        return htmlContainer("sub", HTMLElement.class).textContent(text);
    }

    public static HTMLContainerBuilder<HTMLElement> sub(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLElement> sup() {
        return htmlContainer("sup", HTMLElement.class);
    }

    public static HTMLContainerBuilder<HTMLElement> sup(String text) {
        return htmlContainer("sup", HTMLElement.class).textContent(text);
    }

    public static HTMLContainerBuilder<HTMLElement> sup(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLElement> time() {
        return htmlContainer("time", HTMLElement.class);
    }

    public static HTMLContainerBuilder<HTMLElement> time(String text) {
        return htmlContainer("time", HTMLElement.class).textContent(text);
    }

    public static HTMLContainerBuilder<HTMLElement> time(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLElement> u() {
        return htmlContainer("u", HTMLElement.class);
    }

    public static HTMLContainerBuilder<HTMLElement> u(String text) {
        return htmlContainer("u", HTMLElement.class).textContent(text);
    }

    public static HTMLContainerBuilder<HTMLElement> u(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLElement> var() {
        return htmlContainer("var", HTMLElement.class);
    }

    public static HTMLContainerBuilder<HTMLElement> var(String text) {
        return htmlContainer("var", HTMLElement.class).textContent(text);
    }

    public static HTMLContainerBuilder<HTMLElement> var(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLElementBuilder<HTMLElement> wbr() {
        return htmlElement("wbr", HTMLElement.class);
    }

    public static HTMLElementBuilder<HTMLElement> wbr(Element element) {
        return wrapHtmlElement(cast(element));
    }

    // ------------------------------------------------------ image and multimedia

    public static HTMLElementBuilder<HTMLAreaElement> area() {
        return htmlElement("area", HTMLAreaElement.class);
    }

    public static HTMLElementBuilder<HTMLAreaElement> area(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HTMLContainerBuilder<HTMLAudioElement> audio() {
        return htmlContainer("audio", HTMLAudioElement.class);
    }

    public static HTMLContainerBuilder<HTMLAudioElement> audio(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLElementBuilder<HTMLImageElement> img() {
        return htmlElement("img", HTMLImageElement.class);
    }

    public static HTMLElementBuilder<HTMLImageElement> img(String src) {
        return htmlElement("img", HTMLImageElement.class).attr("src", src);
    }

    public static HTMLElementBuilder<HTMLImageElement> img(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HTMLContainerBuilder<HTMLMapElement> map() {
        return htmlContainer("map", HTMLMapElement.class);
    }

    public static HTMLContainerBuilder<HTMLMapElement> map(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLPictureElement> picture() {
        return htmlContainer("picture", HTMLPictureElement.class);
    }

    public static HTMLContainerBuilder<HTMLPictureElement> picture(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLElementBuilder<HTMLTrackElement> track() {
        return htmlElement("track", HTMLTrackElement.class);
    }

    public static HTMLElementBuilder<HTMLTrackElement> track(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HTMLContainerBuilder<HTMLVideoElement> video() {
        return htmlContainer("video", HTMLVideoElement.class);
    }

    public static HTMLContainerBuilder<HTMLVideoElement> video(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    // ------------------------------------------------------ embedded content

    public static HTMLContainerBuilder<HTMLCanvasElement> canvas() {
        return htmlContainer("canvas", HTMLCanvasElement.class);
    }

    public static HTMLContainerBuilder<HTMLCanvasElement> canvas(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLElementBuilder<HTMLEmbedElement> embed() {
        return htmlElement("embed", HTMLEmbedElement.class);
    }

    public static HTMLElementBuilder<HTMLEmbedElement> embed(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HTMLContainerBuilder<HTMLIFrameElement> iframe() {
        return htmlContainer("iframe", HTMLIFrameElement.class);
    }

    public static HTMLContainerBuilder<HTMLIFrameElement> iframe(String src) {
        return iframe().attr("src", src);
    }

    public static HTMLContainerBuilder<HTMLIFrameElement> iframe(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLObjectElement> object() {
        return htmlContainer("object", HTMLObjectElement.class);
    }

    public static HTMLContainerBuilder<HTMLObjectElement> object(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLElementBuilder<HTMLParamElement> param() {
        return htmlElement("param", HTMLParamElement.class);
    }

    public static HTMLElementBuilder<HTMLParamElement> param(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HTMLElementBuilder<HTMLSourceElement> source() {
        return htmlElement("source", HTMLSourceElement.class);
    }

    public static HTMLElementBuilder<HTMLSourceElement> source(Element element) {
        return wrapHtmlElement(cast(element));
    }

    // ------------------------------------------------------ scripting

    public static HTMLContainerBuilder<HTMLElement> noscript() {
        return htmlContainer("noscript", HTMLElement.class);
    }

    public static HTMLContainerBuilder<HTMLElement> noscript(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLElementBuilder<HTMLScriptElement> script() {
        return htmlElement("script", HTMLScriptElement.class);
    }

    public static HTMLElementBuilder<HTMLScriptElement> script(Element element) {
        return wrapHtmlElement(cast(element));
    }

    // ------------------------------------------------------ demarcating edits

    public static HTMLContainerBuilder<HTMLModElement> del() {
        return htmlContainer("del", HTMLModElement.class);
    }

    public static HTMLContainerBuilder<HTMLModElement> del(String text) {
        return htmlContainer("del", HTMLModElement.class).textContent(text);
    }

    public static HTMLContainerBuilder<HTMLModElement> del(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLModElement> ins() {
        return htmlContainer("ins", HTMLModElement.class);
    }

    public static HTMLContainerBuilder<HTMLModElement> ins(String text) {
        return htmlContainer("ins", HTMLModElement.class).textContent(text);
    }

    public static HTMLContainerBuilder<HTMLModElement> ins(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    // ------------------------------------------------------ table content

    public static HTMLContainerBuilder<HTMLTableCaptionElement> caption() {
        return htmlContainer("caption", HTMLTableCaptionElement.class);
    }

    public static HTMLContainerBuilder<HTMLTableCaptionElement> caption(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLElementBuilder<HTMLTableColElement> col() {
        return htmlElement("col", HTMLTableColElement.class);
    }

    public static HTMLElementBuilder<HTMLTableColElement> col(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HTMLContainerBuilder<HTMLTableColElement> colgroup() {
        return htmlContainer("colgroup", HTMLTableColElement.class);
    }

    public static HTMLContainerBuilder<HTMLTableColElement> colgroup(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLTableElement> table() {
        return htmlContainer("table", HTMLTableElement.class);
    }

    public static HTMLContainerBuilder<HTMLTableElement> table(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLTableSectionElement> tbody() {
        return htmlContainer("tbody", HTMLTableSectionElement.class);
    }

    public static HTMLContainerBuilder<HTMLTableSectionElement> tbody(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLTableCellElement> td() {
        return htmlContainer("td", HTMLTableCellElement.class);
    }

    public static HTMLContainerBuilder<HTMLTableCellElement> td(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLTableSectionElement> tfoot() {
        return htmlContainer("tfoot", HTMLTableSectionElement.class);
    }

    public static HTMLContainerBuilder<HTMLTableSectionElement> tfoot(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLTableCellElement> th() {
        return htmlContainer("th", HTMLTableCellElement.class);
    }

    public static HTMLContainerBuilder<HTMLTableCellElement> th(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLTableSectionElement> thead() {
        return htmlContainer("thead", HTMLTableSectionElement.class);
    }

    public static HTMLContainerBuilder<HTMLTableSectionElement> thead(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLTableRowElement> tr() {
        return htmlContainer("tr", HTMLTableRowElement.class);
    }

    public static HTMLContainerBuilder<HTMLTableRowElement> tr(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    // ------------------------------------------------------ forms

    public static HTMLContainerBuilder<HTMLButtonElement> button() {
        return htmlContainer("button", HTMLButtonElement.class);
    }

    public static HTMLContainerBuilder<HTMLButtonElement> button(String text) {
        return button().textContent(text);
    }

    public static HTMLContainerBuilder<HTMLButtonElement> button(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLDataListElement> datalist() {
        return htmlContainer("datalist", HTMLDataListElement.class);
    }

    public static HTMLContainerBuilder<HTMLDataListElement> datalist(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLFieldSetElement> fieldset() {
        return htmlContainer("fieldset", HTMLFieldSetElement.class);
    }

    public static HTMLContainerBuilder<HTMLFieldSetElement> fieldset(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLFormElement> form() {
        return htmlContainer("form", HTMLFormElement.class);
    }

    public static HTMLContainerBuilder<HTMLFormElement> form(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static InputElementBuilder<HTMLInputElement> input(InputType type) {
        return input(type.name());
    }

    public static InputElementBuilder<HTMLInputElement> input(String type) {
        return input(type, HTMLInputElement.class);
    }

    public static <E extends HTMLInputElement> InputElementBuilder<E> input(String type, Class<E> jType) {
        E el = createHtmlElement("input", jType);
        el.type = type;
        return new InputElementBuilder<>(el);
    }

    public static InputElementBuilder<HTMLInputElement> input(Element element) {
        return wrapInputElement(cast(element));
    }

    public static HTMLContainerBuilder<HTMLLabelElement> label() {
        return htmlContainer("label", HTMLLabelElement.class);
    }

    public static HTMLContainerBuilder<HTMLLabelElement> label(String text) {
        return label().textContent(text);
    }

    public static HTMLContainerBuilder<HTMLLabelElement> label(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLLegendElement> legend() {
        return htmlContainer("legend", HTMLLegendElement.class);
    }

    public static HTMLContainerBuilder<HTMLLegendElement> legend(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLMeterElement> meter() {
        return htmlContainer("meter", HTMLMeterElement.class);
    }

    public static HTMLContainerBuilder<HTMLMeterElement> meter(String text) {
        return htmlContainer("meter", HTMLMeterElement.class).textContent(text);
    }

    public static HTMLContainerBuilder<HTMLMeterElement> meter(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLOptGroupElement> optgroup() {
        return htmlContainer("optgroup", HTMLOptGroupElement.class);
    }

    public static HTMLContainerBuilder<HTMLOptGroupElement> optgroup(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLElementBuilder<HTMLOptionElement> option() {
        return htmlElement("option", HTMLOptionElement.class);
    }

    public static HTMLElementBuilder<HTMLOptionElement> option(String text) {
        return option().textContent(text);
    }

    public static HTMLElementBuilder<HTMLOptionElement> option(Element element) {
        return wrapHtmlElement(cast(element));
    }

    public static HTMLContainerBuilder<HTMLOutputElement> output() {
        return htmlContainer("output", HTMLOutputElement.class);
    }

    public static HTMLContainerBuilder<HTMLOutputElement> output(String text) {
        return htmlContainer("output", HTMLOutputElement.class).textContent(text);
    }

    public static HTMLContainerBuilder<HTMLOutputElement> output(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLProgressElement> progress() {
        return htmlContainer("progress", HTMLProgressElement.class);
    }

    public static HTMLContainerBuilder<HTMLProgressElement> progress(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLContainerBuilder<HTMLSelectElement> select() {
        return htmlContainer("select", HTMLSelectElement.class);
    }

    public static HTMLContainerBuilder<HTMLSelectElement> select(Element element) {
        return wrapHtmlContainer(cast(element));
    }

    public static HTMLElementBuilder<HTMLTextAreaElement> textarea() {
        return htmlElement("textarea", HTMLTextAreaElement.class);
    }

    public static HTMLElementBuilder<HTMLTextAreaElement> textarea(Element element) {
        return wrapHtmlElement(cast(element));
    }

    // ------------------------------------------------------ factories & wrappers

    /**
     * Returns a builder to collect {@link HTMLElement}s.
     * <p>
     * {@snippet class = ElementsBagDemo region = bag}
     */
    public static ElementsBag bag() {
        return new ElementsBag();
    }

    /** Returns a builder for the specified HTML element. */
    public static <E extends HTMLElement> HTMLElementBuilder<E> htmlElement(String element, Class<E> type) {
        return new HTMLElementBuilder<>(createHtmlElement(element, type));
    }

    /** Returns a builder for the existing HTML element. */
    public static <E extends HTMLElement> HTMLElementBuilder<E> wrapHtmlElement(E element) {
        return new HTMLElementBuilder<>(element);
    }

    /** Returns a builder for the specified input element. */
    public static <E extends HTMLInputElement> InputElementBuilder<E> inputElement(String type, Class<E> jType) {
        E input = createHtmlElement("input", jType);
        input.type = type;
        return new InputElementBuilder<>(input);
    }

    /** Returns a builder for the existing input element. */
    public static <E extends HTMLInputElement> InputElementBuilder<E> wrapInputElement(E element) {
        return new InputElementBuilder<>(element);
    }

    /** Returns a builder for the specified HTML element. */
    public static <E extends HTMLElement> HTMLContainerBuilder<E> htmlContainer(String element, Class<E> type) {
        return new HTMLContainerBuilder<>(createHtmlElement(element, type));
    }

    /** Returns a builder for the existing HTML element. */
    public static <E extends HTMLElement> HTMLContainerBuilder<E> wrapHtmlContainer(E element) {
        return new HTMLContainerBuilder<>(element);
    }

    /** Creates the specified HTML element. */
    public static <E extends HTMLElement> E createHtmlElement(String element, Class<E> type) {
        return cast(document.createElement(element));
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

    /**
     * Finds the closest HTML elements for the given selector.
     *
     * @see <a href=
     *      "https://developer.mozilla.org/en-US/docs/Web/API/Element/closest">https://developer.mozilla.org/en-US/docs/Web/API/Element/closest</a>
     */
    public static <E extends HTMLElement> E closest(Element element, By selector) {
        return cast(element.closest(selector.selector()));
    }

    /**
     * Finds the closest HTML elements for the given selector.
     *
     * @see <a href=
     *      "https://developer.mozilla.org/en-US/docs/Web/API/Element/closest">https://developer.mozilla.org/en-US/docs/Web/API/Element/closest</a>
     */
    public static <E extends HTMLElement, F extends HTMLElement> F closest(IsElement<E> element, By selector) {
        return cast(element.element().closest(selector.selector()));
    }

    // ------------------------------------------------------ iterator methods

    /**
     * Returns an iterator over the given array-like. The iterator does <strong>not</strong> support the
     * {@link Iterator#remove()} operation.
     */
    public static <E> Iterator<E> iterator(JsArrayLike<E> data) {
        return data != null ? new JsArrayLikeIterator<>(data) : emptyIterator();
    }

    /**
     * Returns an iterator over the children of the given parent node. The iterator supports the {@link Iterator#remove()}
     * operation, which removes the current node from its parent.
     */
    public static Iterator<Node> iterator(Node parent) {
        return parent != null ? new JsArrayNodeIterator(parent) : emptyIterator();
    }

    /**
     * Returns an iterator over the children of the given parent element. The iterator supports the {@link Iterator#remove()}
     * operation, which removes the current node from its parent.
     */
    public static Iterator<HTMLElement> iterator(HTMLElement parent) {
        return parent != null ? new JsArrayElementIterator(parent) : emptyIterator();
    }

    /**
     * Returns an iterator over the children of the given parent element. The iterator supports the {@link Iterator#remove()}
     * operation, which removes the current node from its parent.
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
     * Casts to {@link HTMLElement}. Make sure to {@linkplain #htmlElements() filter} for HTML elements before using this
     * function.
     */
    public static <T extends Node> Function<T, HTMLElement> asHtmlElement() {
        return new AsHTMLElement<>();
    }

    // ------------------------------------------------------ stream methods

    /**
     * Returns a stream for the elements in the given array-like.
     * <p>
     * {@snippet class = ElementsDemo region = stream}
     */
    public static <E> Stream<E> stream(JsArrayLike<E> nodes) {
        if (nodes == null) {
            return Stream.empty();
        } else {
            return StreamSupport.stream(spliteratorUnknownSize(iterator(nodes), 0), false);
        }
    }

    /**
     * Returns a stream for the child nodes of the given parent node.
     * <p>
     * {@snippet class = ElementsDemo region = stream}
     */
    public static Stream<Node> stream(Node parent) {
        if (parent == null) {
            return Stream.empty();
        } else {
            return StreamSupport.stream(spliteratorUnknownSize(iterator(parent), 0), false);
        }
    }

    /**
     * Returns a stream for the child elements of the given parent element.
     * <p>
     * {@snippet class = ElementsDemo region = stream}
     */
    public static Stream<HTMLElement> stream(HTMLElement parent) {
        if (parent == null) {
            return Stream.empty();
        } else {
            return StreamSupport.stream(spliteratorUnknownSize(iterator(parent), 0), false);
        }
    }

    /**
     * Returns a stream for the child elements of the given parent element.
     * <p>
     * {@snippet class = ElementsDemo region = stream}
     */
    public static <E extends HTMLElement> Stream<HTMLElement> stream(IsElement<E> parent) {
        if (parent == null) {
            return Stream.empty();
        } else {
            return StreamSupport.stream(spliteratorUnknownSize(iterator(parent), 0), false);
        }
    }

    // ------------------------------------------------------ append, insert & remove methods

    /**
     * Appends element {@code child} to element {@code parent} if not already present. If parent already contains child, this
     * method does nothing.
     */
    public static void lazyAppend(Element parent, Element child) {
        if (!parent.contains(child)) {
            parent.appendChild(child);
        }
    }

    /**
     * Appends element {@code child} to element {@code parent} if not already present. If parent already contains child, this
     * method does nothing.
     */
    public static <E extends HTMLElement> void lazyAppend(Element parent, IsElement<E> child) {
        if (child != null) {
            lazyAppend(parent, child.element());
        }
    }

    /** Inserts element {@code newElement} into the parent after element {@code after}. */
    public static void insertAfter(Element newElement, Element after) {
        after.parentNode.insertBefore(newElement, after.nextSibling);
    }

    /** Inserts element {@code newElement} into the parent after element {@code after}. */
    public static <E extends HTMLElement> void insertAfter(IsElement<E> newElement, Element after) {
        if (newElement != null) {
            insertAfter(newElement.element(), after);
        }
    }

    /**
     * Inserts element {@code newElement} into the parent after element {@code after} if not already present. If parent already
     * contains {@code newElement}, this method does nothing.
     */
    public static void lazyInsertAfter(Element newElement, Element after) {
        if (!after.parentNode.contains(newElement)) {
            after.parentNode.insertBefore(newElement, after.nextSibling);
        }
    }

    /**
     * Inserts element {@code newElement} into the parent after element {@code after} if not already present. If parent already
     * contains {@code newElement}, this method does nothing.
     */
    public static <E extends HTMLElement> void lazyInsertAfter(IsElement<E> newElement, Element after) {
        if (newElement != null) {
            lazyInsertAfter(newElement.element(), after);
        }
    }

    /**
     * Inserts element {@code newElement} into the parent after element {@code after} if not already present. If parent already
     * contains {@code newElement}, this method does nothing.
     */
    public static void lazyInsertAfter(Element parent, Element newElement, Element after) {
        if (!parent.contains(newElement)) {
            parent.insertBefore(newElement, after.nextSibling);
        }
    }

    /**
     * Inserts element {@code newElement} into the parent after element {@code after} if not already present. If parent already
     * contains {@code newElement}, this method does nothing.
     */
    public static <E extends HTMLElement> void lazyInsertAfter(Element parent, IsElement<E> newElement, Element after) {
        if (newElement != null) {
            lazyInsertAfter(parent, newElement.element(), after);
        }
    }

    /** Inserts element {@code newElement} into the parent before element {@code before}. */
    public static void insertBefore(Element newElement, Element before) {
        before.parentNode.insertBefore(newElement, before);
    }

    /** Inserts element {@code newElement} into the parent before element {@code before}. */
    public static <E extends HTMLElement> void insertBefore(IsElement<E> newElement, Element before) {
        if (newElement != null) {
            insertBefore(newElement.element(), before);
        }
    }

    /**
     * Inserts element {@code newElement} into the parent before element {@code before} if not already present. If parent
     * already contains {@code newElement}, this method does nothing.
     */
    public static void lazyInsertBefore(Element newElement, Element before) {
        if (!before.parentNode.contains(newElement)) {
            before.parentNode.insertBefore(newElement, before);
        }
    }

    /**
     * Inserts element {@code newElement} into the parent before element {@code before} if not already present. If parent
     * already contains {@code newElement}, this method does nothing.
     */
    public static <E extends HTMLElement> void lazyInsertBefore(IsElement<E> newElement, Element before) {
        if (newElement != null) {
            lazyInsertBefore(newElement.element(), before);
        }
    }

    /**
     * Inserts element {@code newElement} into the parent before element {@code before} if not already present. If parent
     * already contains {@code newElement}, this method does nothing.
     */
    public static void lazyInsertBefore(Element parent, Element newElement, Element before) {
        if (!parent.contains(newElement)) {
            parent.insertBefore(newElement, before);
        }
    }

    /**
     * Inserts element {@code newElement} into the parent before element {@code before} if not already present. If parent
     * already contains {@code newElement}, this method does nothing.
     */
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

    /** Inserts element {@code newElement} as first element into {@code parent}. */
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

    /** Removes all child elements from {@code element} */
    public static <E extends HTMLElement> void removeChildrenFrom(IsElement<E> element) {
        if (element != null) {
            removeChildrenFrom(element.element());
        }
    }

    /**
     * Removes the element from its parent if the element is not null and has a parent.
     *
     * @return {@code true} if the element has been removed from its parent, {@code false} otherwise.
     */
    public static boolean failSafeRemoveFromParent(Element element) {
        return failSafeRemove(element != null ? element.parentNode : null, element);
    }

    /**
     * Removes the element from its parent if the element is not null and has a parent.
     *
     * @return {@code true} if the element has been removed from its parent, {@code false} otherwise.
     */
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

    /**
     * Removes the child from parent if both parent and child are not null and parent contains child.
     *
     * @return {@code true} if the element has been removed from its parent, {@code false} otherwise.
     */
    public static <E extends HTMLElement> boolean failSafeRemove(Node parent, IsElement<E> child) {
        if (child != null) {
            return failSafeRemove(parent, child.element());
        }
        return false;
    }

    // ------------------------------------------------------ attach / detach

    /**
     * Returns {@code true} if the element is connected by calling {@link Node#isConnected} on the element's
     * {@link IsElement#element()}.
     *
     * @see <a href=
     *      "https://developer.mozilla.org/en-US/docs/Web/API/Node/isConnected">https://developer.mozilla.org/en-US/docs/Web/API/Node/isConnected</a>
     * @see <a href="https://dom.spec.whatwg.org/#dom-node-isconnected">https://dom.spec.whatwg.org/#dom-node-isconnected</a>
     */
    public static <E extends HTMLElement> boolean isAttached(IsElement<E> element) {
        if (element != null) {
            return isAttached(element.element());
        }
        return false;
    }

    /**
     * Fail-safe shortcut for {@link Node#isConnected}
     *
     * @see <a href=
     *      "https://developer.mozilla.org/en-US/docs/Web/API/Node/isConnected">https://developer.mozilla.org/en-US/docs/Web/API/Node/isConnected</a>
     * @see <a href="https://dom.spec.whatwg.org/#dom-node-isconnected">https://dom.spec.whatwg.org/#dom-node-isconnected</a>
     */
    public static boolean isAttached(Node node) {
        if (node != null) {
            return node.isConnected;
        }
        return false;
    }

    /**
     * Registers a callback when an element is appended to the document body. Note that the callback will be called only once,
     * if the element is appended more than once a new callback should be registered.
     *
     * @param element the HTML element which is going to be added to the body
     * @param callback {@link ObserverCallback}
     */
    public static void onAttach(HTMLElement element, ObserverCallback callback) {
        if (element != null) {
            addAttachObserver(element, callback);
        }
    }

    /**
     * Registers a callback when an element is appended to the document body. Note that the callback will be called only once,
     * if the element is appended more than once a new callback should be registered.
     *
     * @param element the element which is going to be added to the body
     * @param callback {@link ObserverCallback}
     */
    public static <E extends HTMLElement> void onAttach(IsElement<E> element, ObserverCallback callback) {
        if (element != null) {
            onAttach(element.element(), callback);
        }
    }

    /**
     * Registers a callback when an element is removed from the document body. Note that the callback will be called only once,
     * if the element is removed and re-appended a new callback should be registered.
     *
     * @param element the HTML element which is going to be removed from the body
     * @param callback {@link ObserverCallback}
     */
    public static void onDetach(HTMLElement element, ObserverCallback callback) {
        if (element != null) {
            BodyObserver.addDetachObserver(element, callback);
        }
    }

    /**
     * Registers a callback when an element is removed from the document body. Note that the callback will be called only once,
     * if the element is removed and re-appended a new callback should be registered.
     *
     * @param element the element which is going to be removed from the body
     * @param callback {@link ObserverCallback}
     */
    public static <E extends HTMLElement> void onDetach(IsElement<E> element, ObserverCallback callback) {
        if (element != null) {
            onDetach(element.element(), callback);
        }
    }

    // ------------------------------------------------------ visibility

    /** Checks whether the given element is visible (i.e. {@code display} is not {@code none}) */
    public static boolean isVisible(HTMLElement element) {
        return element != null && !"none".equals(element.style.display);
    }

    /** Checks whether the given element is visible (i.e. {@code display} is not {@code none}) */
    public static <E extends HTMLElement> boolean isVisible(IsElement<E> element) {
        return element != null && isVisible(element.element());
    }

    /** Shows / hide the specified element by modifying the {@code display} property. */
    public static void setVisible(HTMLElement element, boolean visible) {
        if (element != null) {
            element.style.display = visible ? "" : "none";
        }
    }

    /** Shows / hide the specified element by modifying the {@code display} property. */
    public static <E extends HTMLElement> void setVisible(IsElement<E> element, boolean visible) {
        if (element != null) {
            setVisible(element.element(), visible);
        }
    }

    // ------------------------------------------------------ resize

    /**
     * Register a resize observer for the given element. The observer will call the provided callback whenever the size of the
     * element changes.
     * <p>
     * Uses the native {@link ResizeObserver} if available. Falls back to {@code window.addEventListener("resize", callback)},
     * otherwise.
     *
     * @param element The element to observe for size changes.
     * @param callback The callback function to be called when the size of the element changes.
     * @param <E> The type of element being observed, which must extend from HTMLElement.
     * @return A cleanup function that can be used to unregister the observer.
     */
    public static <E extends HTMLElement> ResizeObserverCleanup resizeObserver(IsElement<E> element, ResizeCallback callback) {
        return resizeObserver(element.element(), callback);
    }

    /**
     * Register a resize observer for the given element. The observer will call the provided callback whenever the size of the
     * element changes.
     * <p>
     * Uses the native {@link ResizeObserver} if available. Falls back to {@code window.addEventListener("resize", callback)},
     * otherwise.
     *
     * @param element The element to observe for size changes.
     * @param callback The callback function to be called when the size of the element changes.
     * @param <E> The type of element being observed, which must extend from HTMLElement.
     * @return A cleanup function that can be used to unregister the observer.
     */
    public static <E extends HTMLElement> ResizeObserverCleanup resizeObserver(E element, ResizeCallback callback) {
        ResizeObserverCleanup cleanup;
        if (isTripleEqual(Js.global().getAsAny("ResizeObserver"), undefined())) {
            HandlerRegistration registration = bind(window, resize, e -> callback.onResize());
            cleanup = registration::removeHandler;
        } else {
            ResizeObserver observer = new ResizeObserver((entries, obs) -> {
                if (entries != null && entries.length != 0) {
                    callback.onResize();
                }
            });
            observer.observe(element);
            cleanup = () -> observer.unobserve(element);
        }
        return cleanup;
    }

    // ------------------------------------------------------ CSS

    /** Adds the specified CSS class to the element if {@code condition} is {@code true}, removes it otherwise. */
    public static void toggle(HTMLElement element, String css, boolean condition) {
        if (element != null) {
            element.classList.toggle(css, condition);
        }
    }

    /** Adds the specified CSS class to the element if {@code condition} is {@code true}, removes it otherwise. */
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

    /** Adds the specified CSS class to the element if {@code condition} is {@code true}, removes it otherwise. */
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

    /** Convenience method to set the inner HTML of the given element. */
    public static <E extends HTMLElement> void innerHtml(IsElement<E> element, SafeHtml html) {
        if (element != null) {
            innerHtml(element.element(), html);
        }
    }

    // ------------------------------------------------------ debug

    public static <E extends Element> String toString(IsElement<E> element) {
        if (element != null) {
            return toString(element.element());
        }
        return "";
    }

    public static String toString(Element element) {
        if (element != null) {
            String tag = element.tagName.toLowerCase();
            StringBuilder builder = new StringBuilder("<").append(tag);
            JsArray<String> names = element.getAttributeNames();
            if (names != null) {
                for (int i = 0; i < names.length; i++) {
                    String name = names.getAt(i);
                    String value = element.getAttribute(name);
                    builder.append(" ").append(name).append("='").append(value).append("'");
                }
            }
            if (element.childElementCount == 0) {
                builder.append("/>");
            } else {
                builder.append(">[")
                        .append(element.childElementCount)
                        .append(" child element");
                if (element.childElementCount > 1) {
                    builder.append("s");
                }
                builder.append("]></").append(tag).append(">");
            }
            return builder.toString();
        }
        return "";
    }

    // ------------------------------------------------------ deprecated

    /** @deprecated Replaced bv {@link Id#unique()} */
    @Deprecated
    public static String uniqueId() {
        return Id.unique();
    }

    /** @deprecated Replaced bv {@link Id#unique(String, String...)} */
    @Deprecated
    public static String uniqueId(String id, String... additionalIds) {
        return Id.unique(id, additionalIds);
    }

    /** @deprecated Replaced bv {@link Id#build(String, String...)} */
    @Deprecated
    public static String buildId(String id, String... additionalIds) {
        return Id.build(id, additionalIds);
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

        private final Node parent;
        private Node last;
        private Node next;

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

        private final HTMLElement parent;
        private HTMLElement last;
        private HTMLElement next;

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
