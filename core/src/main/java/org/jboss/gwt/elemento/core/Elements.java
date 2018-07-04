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
package org.jboss.gwt.elemento.core;

import java.util.Collections;
import java.util.Iterator;
import java.util.NoSuchElementException;
import java.util.function.Function;
import java.util.function.IntSupplier;
import java.util.function.Predicate;
import java.util.function.Supplier;
import java.util.stream.Stream;
import java.util.stream.StreamSupport;

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
import jsinterop.base.Js;
import jsinterop.base.JsArrayLike;
import jsinterop.base.JsPropertyMap;
import org.gwtproject.safehtml.shared.SafeHtml;
import org.jboss.gwt.elemento.core.builder.ElementCreator;
import org.jboss.gwt.elemento.core.builder.ElementsBuilder;
import org.jboss.gwt.elemento.core.builder.EmptyContentBuilder;
import org.jboss.gwt.elemento.core.builder.HtmlContentBuilder;
import org.jboss.gwt.elemento.core.builder.InputBuilder;
import org.jboss.gwt.elemento.core.builder.TextContentBuilder;

import static elemental2.dom.DomGlobal.document;
import static java.util.Spliterators.spliteratorUnknownSize;

/**
 * Helper methods for working with {@link elemental2.dom.HTMLElement}s.
 *
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">https://developer.mozilla.org/en-US/docs/Web/HTML/Element</a>
 */
@SuppressWarnings({"unused", "WeakerAccess"})
public final class Elements {

    private static final String ELEMENTO_UID = "elementoUid";

    static ElementCreator createElement = new ElementCreator() {
        @Override
        public <E extends HTMLElement> E create(String tag, Class<E> type) {
            return Js.cast(document.createElement(tag));
        }
    };

    private static IntSupplier createDocumentUniqueId = () -> {
        JsPropertyMap<Object> map = Js.uncheckedCast(document);
        if (!map.has(ELEMENTO_UID)) {
            map.set(ELEMENTO_UID, 0);
        }
        int uid = map.getAny(ELEMENTO_UID).asInt() + 1;
        map.set(ELEMENTO_UID, uid);
        return uid;
    };

    public static HtmlContentBuilder<HTMLBodyElement> body() {
        return new HtmlContentBuilder<>(document.body);
    }


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

    public static HtmlContentBuilder<HTMLAnchorElement> a(String href) {
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

    public static EmptyContentBuilder<HTMLImageElement> img(String src) {
        return emptyElement("img", HTMLImageElement.class).attr("src", src);
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


    // ------------------------------------------------------ element iterator / stream methods

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


    /**
     * Returns an iterator over the given array-like. The iterator does <strong>not</strong> support the
     * {@link Iterator#remove()} operation.
     */
    public static <E> Iterator<E> iterator(JsArrayLike<E> data) {
        return data != null ? new JsArrayLikeIterator<>(data) : Collections.emptyIterator();
    }

    /**
     * Returns an iterator over the children of the given parent node. The iterator supports the {@link
     * Iterator#remove()} operation which removes the current node from its parent.
     */
    public static Iterator<Node> iterator(Node parent) {
        return parent != null ? new JsArrayNodeIterator(parent) : Collections.emptyIterator();
    }

    /**
     * Returns an iterator over the children of the given parent element. The iterator supports the {@link
     * Iterator#remove()} operation which removes the current node from its parent.
     */
    public static Iterator<HTMLElement> iterator(HTMLElement parent) {
        return parent != null ? new JsArrayElementIterator(parent) : Collections.emptyIterator();
    }

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

    /** Returns an iterable collection for the elements in the given array-like. */
    public static <E> Iterable<E> elements(JsArrayLike<E> nodes) {
        return () -> iterator(nodes);
    }

    /** Returns an iterable collection for the child nodes of the given parent node. */
    public static Iterable<Node> children(Node parent) {
        return () -> iterator(parent);
    }

    /** Returns an iterable collection for the child elements of the given parent element. */
    public static Iterable<HTMLElement> children(HTMLElement parent) {
        return () -> iterator(parent);
    }


    // ------------------------------------------------------ element append, insert & remove methods

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
     * Inserts the specified element into the parent of the after element.
     */
    public static void insertAfter(final Element newElement, final Element after) {
        after.parentNode.insertBefore(newElement, after.nextSibling);
    }

    /**
     * Inserts the specified element into the parent of the after element if not already present. If parent already
     * contains child, this method does nothing.
     */
    public static void lazyInsertAfter(final Element newElement, final Element after) {
        if (!after.parentNode.contains(newElement)) {
            after.parentNode.insertBefore(newElement, after.nextSibling);
        }
    }

    /**
     * Inserts the specified element into the parent element if not already present. If parent already
     * contains child, this method does nothing.
     */
    public static void lazyInsertAfter(final Element parent, final Element newElement, final Element after) {
        if (!parent.contains(newElement)) {
            parent.insertBefore(newElement, after.nextSibling);
        }
    }

    /**
     * Inserts the specified element into the parent of the before element.
     */
    public static void insertBefore(final Element newElement, final Element before) {
        before.parentNode.insertBefore(newElement, before);
    }

    /**
     * Inserts the specified element into the parent of the before element if not already present. If parent already
     * contains child, this method does nothing.
     */
    public static void lazyInsertBefore(final Element newElement, final Element before) {
        if (!before.parentNode.contains(newElement)) {
            before.parentNode.insertBefore(newElement, before);
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

    /** Removes all child elements from {@code element} */
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


    // ------------------------------------------------------ misc element helper methods

    /** Looks for an element in the document using the CSS selector {@code [data-element=&lt;name&gt;]}. */
    public static Element dataElement(String name) {
        return document.querySelector("[data-element=" + name + "]");
    }

    /** Looks for an element below {@code context} using the CSS selector {@code [data-element=&lt;name&gt;]} */
    public static Element dataElement(Element context, String name) {
        return context != null ? context.querySelector("[data-element=" + name + "]") : null;
    }

    /** Checks whether the given element is visible (i.e. {@code display} is not {@code none}) */
    public static boolean isVisible(HTMLElement element) {
        return element != null && !"none".equals(element.style.display);
    }

    /** Shows / hide the specified element by modifying the {@code display} property. */
    public static void setVisible(HTMLElement element, boolean visible) {
        if (element != null) {
            element.style.display = visible ? "" : "none";
        }
    }

    /** Adds the specified CSS class to the element if {@code condition} is {@code true}, removes it otherwise. */
    public static void toggle(HTMLElement element, String css, boolean condition) {
        if (element != null) {
            if (condition) {
                element.classList.add(css);
            } else {
                element.classList.remove(css);
            }
        }
    }

    /** Convenience method to set the inner HTML of the given element. */
    public static void innerHtml(HTMLElement element, SafeHtml html) {
        if (element != null) {
            element.innerHTML = html.asString();
        }
    }

    /**
     * Helper method to register a callback when the element is appended to the document body
     * note that the callback will be called only once, if the element is appended more than once a new callback should be registered.
     *
     * @param element
     * @param callback {@link ObserverCallback}
     */
    public static void onAttach(HTMLElement element, ObserverCallback callback){
        if (element != null) {
            BodyObserver.addAttachObserver(element, callback);
        }
    }

    /**
     * Helper method to register a callback when the element is removed from the document body
     * note that the callback will be called only once, if the element is removed and re-appended a new callback should be registered.
     *
     * @param element
     * @param callback {@link ObserverCallback}
     */
    public static void onDetach(HTMLElement element, ObserverCallback callback){
        if (element != null) {
            BodyObserver.addDetachObserver(element, callback);
        }
    }

    /** Creates an identifier guaranteed to be unique within this document. This is useful for allocating element IDs. */
    public static String createDocumentUniqueId() {
        return "elemento-uid-" + createDocumentUniqueId.getAsInt();
    }

    // this is a static helper class which must never be instantiated!
    private Elements() {

    }


    // ------------------------------------------------------ inner classes (a-z)


    private static class AsHTMLElement<T extends Node> implements Function<T, HTMLElement> {

        @Override
        public HTMLElement apply(T t) {
            return ((HTMLElement) t);
        }
    }

    private static class FilterHTMLElements<T extends Node> implements Predicate<T> {

        @Override
        public boolean test(T t) {
            return t instanceof HTMLElement;
        }
    }


    private static class JsArrayLikeIterator<T> implements Iterator<T> {

        private int pos = 0;
        private final JsArrayLike<? extends T> data;

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


    // This should be Iterator<Element> but it was used frequently as HTMLElement, so to be more user friendly the
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
