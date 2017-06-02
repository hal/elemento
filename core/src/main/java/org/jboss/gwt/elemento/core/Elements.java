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
package org.jboss.gwt.elemento.core;

import java.util.Collections;
import java.util.Iterator;
import java.util.function.Supplier;
import java.util.stream.Stream;
import java.util.stream.StreamSupport;

import com.google.common.annotations.VisibleForTesting;
import com.google.gwt.safehtml.shared.SafeHtml;
import com.google.gwt.user.client.ui.IsWidget;
import com.google.gwt.user.client.ui.Widget;
import elemental2.dom.DomGlobal;
import elemental2.dom.Element;
import elemental2.dom.HTMLAnchorElement;
import elemental2.dom.HTMLAreaElement;
import elemental2.dom.HTMLAudioElement;
import elemental2.dom.HTMLBRElement;
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
import org.jboss.gwt.elemento.core.builder.ElementCreator;
import org.jboss.gwt.elemento.core.builder.ElementsBuilder;
import org.jboss.gwt.elemento.core.builder.EmptyContentBuilder;
import org.jboss.gwt.elemento.core.builder.HtmlContentBuilder;
import org.jboss.gwt.elemento.core.builder.TextContentBuilder;
import org.jetbrains.annotations.NonNls;

import static elemental2.dom.DomGlobal.document;

/**
 * Helper methods for working with {@link elemental2.dom.HTMLElement}s.
 *
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">https://developer.mozilla.org/en-US/docs/Web/HTML/Element</a>
 *
 */
@SuppressWarnings("unused")
public final class Elements {

    @VisibleForTesting static ElementCreator createElement = new ElementCreator() {
        @Override
        public <E extends HTMLElement> E create(String tag, Class<E> type) {
            return Js.cast(document.createElement(tag));
        }
    };


    // ------------------------------------------------------ content sectioning

    public static HtmlContentBuilder<HTMLElement> address() {
        return htmlElement("address", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> article() {
        return htmlElement("article", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> aside() {
        return htmlElement("aside", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> footer() {
        return htmlElement("footer", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLHeadingElement> h(int n) {
        return htmlElement("h" + n, HTMLHeadingElement.class);
    }

    public static HtmlContentBuilder<HTMLHeadingElement> h(int n, String text) {
        return h(n).textContent(text);
    }

    public static HtmlContentBuilder<HTMLElement> header() {
        return htmlElement("header", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> hgroup() {
        return htmlElement("hgroup", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> nav() {
        return htmlElement("nav", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> section() {
        return htmlElement("section", HTMLElement.class);
    }


    // ------------------------------------------------------ text content

    public static HtmlContentBuilder<HTMLQuoteElement> blockquote() {
        return htmlElement("blockquote", HTMLQuoteElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> dd() {
        return htmlElement("dd", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLDivElement> div() {
        return htmlElement("div", HTMLDivElement.class);
    }

    public static HtmlContentBuilder<HTMLDListElement> dl() {
        return htmlElement("dl", HTMLDListElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> dt() {
        return htmlElement("dt", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> figcaption() {
        return htmlElement("figcaption", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> figure() {
        return htmlElement("figure", HTMLElement.class);
    }

    public static EmptyContentBuilder<HTMLHRElement> hr() {
        return emptyElement("hr", HTMLHRElement.class);
    }

    public static HtmlContentBuilder<HTMLLIElement> li() {
        return htmlElement("li", HTMLLIElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> main() {
        return htmlElement("main", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLOListElement> ol() {
        return htmlElement("ol", HTMLOListElement.class);
    }

    public static HtmlContentBuilder<HTMLParagraphElement> p() {
        return htmlElement("p", HTMLParagraphElement.class);
    }

    public static HtmlContentBuilder<HTMLPreElement> pre() {
        return htmlElement("pre", HTMLPreElement.class);
    }

    public static HtmlContentBuilder<HTMLUListElement> ul() {
        return htmlElement("ul", HTMLUListElement.class);
    }


    // ------------------------------------------------------ inline text semantics

    public static HtmlContentBuilder<HTMLAnchorElement> a() {
        return htmlElement("a", HTMLAnchorElement.class);
    }

    public static HtmlContentBuilder<HTMLAnchorElement> a(@NonNls String href) {
        return a().attr("href", href);
    }

    public static HtmlContentBuilder<HTMLElement> abbr() {
        return htmlElement("abbr", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> b() {
        return htmlElement("b", HTMLElement.class);
    }

    public static EmptyContentBuilder<HTMLBRElement> br() {
        return emptyElement("br", HTMLBRElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> cite() {
        return htmlElement("cite", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> code() {
        return htmlElement("code", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> dfn() {
        return htmlElement("dfn", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> em() {
        return htmlElement("em", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> i() {
        return htmlElement("i", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> kbd() {
        return htmlElement("kbd", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> mark() {
        return htmlElement("mark", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLQuoteElement> q() {
        return htmlElement("q", HTMLQuoteElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> small() {
        return htmlElement("small", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> span() {
        return htmlElement("span", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> strong() {
        return htmlElement("strong", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> sub() {
        return htmlElement("sub", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> sup() {
        return htmlElement("sup", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> time() {
        return htmlElement("time", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> u() {
        return htmlElement("u", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> var() {
        return htmlElement("var", HTMLElement.class);
    }

    public static EmptyContentBuilder<HTMLElement> wbr() {
        return emptyElement("wbr", HTMLElement.class);
    }


    // ------------------------------------------------------ image and multimedia

    public static EmptyContentBuilder<HTMLAreaElement> area() {
        return emptyElement("area", HTMLAreaElement.class);
    }

    public static HtmlContentBuilder<HTMLAudioElement> audio() {
        return htmlElement("audio", HTMLAudioElement.class);
    }

    public static EmptyContentBuilder<HTMLImageElement> img() {
        return emptyElement("img", HTMLImageElement.class);
    }

    public static HtmlContentBuilder<HTMLMapElement> map() {
        return htmlElement("map", HTMLMapElement.class);
    }

    public static EmptyContentBuilder<HTMLTrackElement> track() {
        return emptyElement("track", HTMLTrackElement.class);
    }

    public static HtmlContentBuilder<HTMLVideoElement> video() {
        return htmlElement("video", HTMLVideoElement.class);
    }


    // ------------------------------------------------------ embedded content

    public static EmptyContentBuilder<HTMLEmbedElement> embed() {
        return emptyElement("embed", HTMLEmbedElement.class);
    }

    public static HtmlContentBuilder<HTMLObjectElement> object() {
        return htmlElement("object", HTMLObjectElement.class);
    }

    public static EmptyContentBuilder<HTMLParamElement> param() {
        return emptyElement("param", HTMLParamElement.class);
    }

    public static EmptyContentBuilder<HTMLSourceElement> source() {
        return emptyElement("source", HTMLSourceElement.class);
    }


    // ------------------------------------------------------ scripting

    public static HtmlContentBuilder<HTMLCanvasElement> canvas() {
        return htmlElement("canvas", HTMLCanvasElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> noscript() {
        return htmlElement("noscript", HTMLElement.class);
    }

    public static TextContentBuilder<HTMLScriptElement> script() {
        return textElement("script", HTMLScriptElement.class);
    }


    // ------------------------------------------------------ demarcating edits

    public static HtmlContentBuilder<HTMLModElement> del() {
        return htmlElement("del", HTMLModElement.class);
    }

    public static HtmlContentBuilder<HTMLModElement> ins() {
        return htmlElement("ins", HTMLModElement.class);
    }


    // ------------------------------------------------------ table content

    public static HtmlContentBuilder<HTMLTableCaptionElement> caption() {
        return htmlElement("caption", HTMLTableCaptionElement.class);
    }

    public static EmptyContentBuilder<HTMLTableColElement> col() {
        return emptyElement("col", HTMLTableColElement.class);
    }

    public static HtmlContentBuilder<HTMLTableColElement> colgroup() {
        return htmlElement("colgroup", HTMLTableColElement.class);
    }

    public static HtmlContentBuilder<HTMLTableElement> table() {
        return htmlElement("table", HTMLTableElement.class);
    }

    public static HtmlContentBuilder<HTMLTableSectionElement> tbody() {
        return htmlElement("tbody", HTMLTableSectionElement.class);
    }

    public static HtmlContentBuilder<HTMLTableCellElement> td() {
        return htmlElement("td", HTMLTableCellElement.class);
    }

    public static HtmlContentBuilder<HTMLTableSectionElement> tfoot() {
        return htmlElement("tfoot", HTMLTableSectionElement.class);
    }

    public static HtmlContentBuilder<HTMLTableCellElement> th() {
        return htmlElement("th", HTMLTableCellElement.class);
    }

    public static HtmlContentBuilder<HTMLTableSectionElement> thead() {
        return htmlElement("thead", HTMLTableSectionElement.class);
    }

    public static HtmlContentBuilder<HTMLTableRowElement> tr() {
        return htmlElement("tr", HTMLTableRowElement.class);
    }


    // ------------------------------------------------------ forms

    public static HtmlContentBuilder<HTMLButtonElement> button() {
        return htmlElement("button", HTMLButtonElement.class);
    }

    public static HtmlContentBuilder<HTMLButtonElement> button(String text) {
        return button().textContent(text);
    }

    public static HtmlContentBuilder<HTMLDataListElement> datalist() {
        return htmlElement("datalist", HTMLDataListElement.class);
    }

    public static HtmlContentBuilder<HTMLFieldSetElement> fieldset() {
        return htmlElement("fieldset", HTMLFieldSetElement.class);
    }

    public static HtmlContentBuilder<HTMLFormElement> form() {
        return htmlElement("form", HTMLFormElement.class);
    }

    public static EmptyContentBuilder<HTMLInputElement> input(InputType type) {
        return input(type.name());
    }

    public static EmptyContentBuilder<HTMLInputElement> input(String type) {
        return input(type, HTMLInputElement.class);
    }

    public static <E extends HTMLInputElement> EmptyContentBuilder<E> input(String type, Class<E> jType) {
        return emptyElement(() -> {
            E el = createElement("input", jType);
            el.type = type;
            return el;
        });
    }

    public static HtmlContentBuilder<HTMLLabelElement> label() {
        return htmlElement("label", HTMLLabelElement.class);
    }

    public static HtmlContentBuilder<HTMLLabelElement> label(String text) {
        return label().textContent(text);
    }

    public static HtmlContentBuilder<HTMLLegendElement> legend() {
        return htmlElement("legend", HTMLLegendElement.class);
    }

    public static HtmlContentBuilder<HTMLMeterElement> meter() {
        return htmlElement("meter", HTMLMeterElement.class);
    }

    public static HtmlContentBuilder<HTMLOptGroupElement> optgroup() {
        return htmlElement("optgroup", HTMLOptGroupElement.class);
    }

    public static TextContentBuilder<HTMLOptionElement> option() {
        return textElement("option", HTMLOptionElement.class);
    }

    public static TextContentBuilder<HTMLOptionElement> option(String text) {
        return option().textContent(text);
    }

    public static HtmlContentBuilder<HTMLOutputElement> output() {
        return htmlElement("output", HTMLOutputElement.class);
    }

    public static HtmlContentBuilder<HTMLProgressElement> progress() {
        return htmlElement("progress", HTMLProgressElement.class);
    }

    public static HtmlContentBuilder<HTMLSelectElement> select() {
        return htmlElement("select", HTMLSelectElement.class);
    }

    public static TextContentBuilder<HTMLTextAreaElement> textarea() {
        return textElement("textarea", HTMLTextAreaElement.class);
    }

    // ------------------------------------------------------ builder factories

    /** Returns a builder to collect elements in a flat list as {@link HasElements}. */
    public static ElementsBuilder elements() {
        return new ElementsBuilder();
    }

    /** Returns a builder for the specified empty tag. */
    public static <E extends HTMLElement> EmptyContentBuilder<E> emptyElement(String tag, Class<E> type) {
        return emptyElement(() -> createElement(tag, type));
    }

    private static <E extends HTMLElement> EmptyContentBuilder<E> emptyElement(Supplier<E> element) {
        return new EmptyContentBuilder<>(element.get());
    }

    /** Returns a builder for the specified text tag. */
    public static <E extends HTMLElement> TextContentBuilder<E> textElement(String tag, Class<E> type) {
        return new TextContentBuilder<>(createElement(tag, type));
    }

    /** Returns a builder for the specified html tag. */
    public static <E extends HTMLElement> HtmlContentBuilder<E> htmlElement(String tag, Class<E> type) {
        return new HtmlContentBuilder<>(createElement(tag, type));
    }

    public static <E extends HTMLElement> E createElement(String tag, Class<E> type) {
        return createElement.create(tag, type);
    }


    // ------------------------------------------------------ element helper methods

    /**
     * Returns an iterator over the children of the given parent element. The iterator supports the {@link
     * Iterator#remove()} operation which removes the current element from its parent.
     */
    public static Iterator<HTMLElement> iterator(HTMLElement parent) {
        return parent != null ? new ChildrenIterator(parent) : Collections.<HTMLElement>emptyList().iterator();
    }

    /**
     * Returns an iterator over the given node list. The iterator will only iterate over elements while skipping nodes.
     * The iterator does <strong>not</strong> support the {@link Iterator#remove()} operation.
     */
    public static <E extends Element> Iterator<HTMLElement> iterator(NodeList<E> nodes) {
        return nodes != null ? new NodeListIterator(nodes) : Collections.<HTMLElement>emptyList().iterator();
    }

    /**
     * Returns a stream for the children of the given parent element.
     */
    public static Stream<HTMLElement> stream(HTMLElement parent) {
        return parent != null ? StreamSupport.stream(children(parent).spliterator(), false) : Stream.empty();
    }

    /**
     * Returns a stream for the elements in the given node list.
     */
    public static <E extends Element> Stream<HTMLElement> stream(NodeList<E> nodes) {
        return nodes != null ? StreamSupport.stream(elements(nodes).spliterator(), false) : Stream.empty();
    }

    /**
     * Returns an iterable collection for the children of the given parent element.
     */
    public static Iterable<HTMLElement> children(HTMLElement parent) {
        return () -> iterator(parent);
    }

    /**
     * Returns an iterable collection for the elements in the given node list.
     */
    public static <E extends Element> Iterable<HTMLElement> elements(NodeList<E> nodes) {
        return () -> iterator(nodes);
    }

    /**
     * Appends the specified element to the parent element if not already present. If parent already contains child,
     * this method does nothing.
     */
    public static void lazyAppend(final Element parent, final Element child) {
        if (!parent.contains(child)) {
            parent.appendChild(child);
        }
    }

    /**
     * Inserts the specified element into the parent element if not already present. If parent already contains child,
     * this method does nothing.
     */
    public static void lazyInsertBefore(final Element parent, final Element child, final Element before) {
        if (!parent.contains(child)) {
            parent.insertBefore(child, before);
        }
    }

    /**
     * Removes all child elements from {@code element}
     */
    public static void removeChildrenFrom(final Element element) {
        if (element != null) {
            while (element.firstChild != null) {
                element.removeChild(element.firstChild);
            }
        }
    }

    /**
     * Removes the element from its parent if the element is not null and has a parent.
     *
     * @return {@code true} if the the element has been removed from its parent, {@code false} otherwise.
     */
    public static boolean failSafeRemoveFromParent(final Element element) {
        return failSafeRemove(element != null ? element.parentNode : null, element);
    }

    /**
     * Removes the child from parent if both parent and child are not null and parent contains child.
     *
     * @return {@code true} if the the element has been removed from its parent, {@code false} otherwise.
     */
    public static boolean failSafeRemove(final Node parent, final Element child) {
        //noinspection SimplifiableIfStatement
        if (parent != null && child != null && parent.contains(child)) {
            return parent.removeChild(child) != null;
        }
        return false;
    }

    /**
     * Looks for an element in the document using the CSS selector {@code [data-element=&lt;name&gt;]}.
     */
    public static Element dataElement(@NonNls String name) {
        return DomGlobal.document.querySelector("[data-element=" + name + "]");
    }

    /**
     * Looks for an element below {@code context} using the CSS selector {@code [data-element=&lt;name&gt;]}
     */
    public static Element dataElement(Element context, @NonNls String name) {
        return context != null ? context.querySelector("[data-element=" + name + "]") : null;
    }

    /**
     * Checks whether the given element is visible (i.e. {@code display} is not {@code none})
     */
    public static boolean isVisible(HTMLElement element) {
        return element != null && !"none".equals(element.style.display);
    }

    /**
     * shows / hide the specified element by modifying the {@code display} property.
     */
    public static void setVisible(HTMLElement element, boolean visible) {
        if (element != null) {
            element.style.display = visible ? "" : "none";
        }
    }

    /**
     * Adds the specified CSS class to the element if {@code condition} is {@code true}, removes it otherwise.
     */
    public static void toggle(HTMLElement element, String css, boolean condition) {
        if (element != null) {
            if (condition) {
                element.classList.add(css);
            } else {
                element.classList.remove(css);
            }
        }
    }

    /**
     * Convenience method to set the inner HTML of the given element.
     */
    public static void innerHtml(HTMLElement element, SafeHtml html) {
        if (element != null) {
            element.innerHTML = html.asString();
        }
    }


    // ------------------------------------------------------ conversions

    private static class ElementWidget extends Widget {

        ElementWidget(final HTMLElement element) {
            setElement(com.google.gwt.dom.client.Element.as(Js.cast(element)));
        }
    }

    /**
     * Converts from {@link IsElement} &rarr; {@link Widget}.
     */
    public static Widget asWidget(IsElement element) {
        return asWidget(element.asElement());
    }

    /**
     * Converts from {@link HTMLElement} &rarr; {@link Widget}.
     */
    public static Widget asWidget(HTMLElement element) {
        return new ElementWidget(element);
    }

    /**
     * Converts from {@link IsWidget} &rarr; {@link HTMLElement}.
     */
    public static HTMLElement asElement(IsWidget widget) {
        return asElement(widget.asWidget());
    }

    /**
     * Converts from {@link Widget} &rarr; {@link HTMLElement}.
     */
    public static HTMLElement asElement(Widget widget) {
        return asElement(widget.getElement());
    }

    /**
     * Converts from {@link com.google.gwt.dom.client.Element} &rarr; {@link HTMLElement}.
     */
    public static HTMLElement asElement(com.google.gwt.dom.client.Element element) {
        return Js.cast(element);
    }


    // this is a static helper class which must never be instantiated!
    private Elements() {}
}
