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

import static elemental2.dom.DomGlobal.document;

import com.google.common.annotations.VisibleForTesting;
import com.google.gwt.safehtml.shared.SafeHtml;
import com.google.gwt.user.client.ui.IsWidget;
import com.google.gwt.user.client.ui.Widget;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLAnchorElement;
import elemental2.dom.HTMLBRElement;
import elemental2.dom.HTMLButtonElement;
import elemental2.dom.HTMLDivElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLFormElement;
import elemental2.dom.HTMLHRElement;
import elemental2.dom.HTMLHeadingElement;
import elemental2.dom.HTMLInputElement;
import elemental2.dom.HTMLLIElement;
import elemental2.dom.HTMLLabelElement;
import elemental2.dom.HTMLOListElement;
import elemental2.dom.HTMLOptionElement;
import elemental2.dom.HTMLParagraphElement;
import elemental2.dom.HTMLSelectElement;
import elemental2.dom.HTMLTableCellElement;
import elemental2.dom.HTMLTableElement;
import elemental2.dom.HTMLTableRowElement;
import elemental2.dom.HTMLTableSectionElement;
import elemental2.dom.HTMLTextAreaElement;
import elemental2.dom.HTMLUListElement;
import elemental2.dom.Node;
import elemental2.dom.NodeList;
import java.util.Collections;
import java.util.Iterator;
import java.util.function.Supplier;
import java.util.stream.Stream;
import java.util.stream.StreamSupport;
import jsinterop.base.Js;
import org.jboss.gwt.elemento.core.builder.EmptyContentBuilder;
import org.jboss.gwt.elemento.core.builder.HtmlContentBuilder;
import org.jboss.gwt.elemento.core.builder.TextContentBuilder;
import org.jetbrains.annotations.NonNls;

/** Helper methods for working with {@link elemental2.dom.HTMLElement}s. */
@SuppressWarnings("unused")
public final class Elements {

    @VisibleForTesting static ElementCreator createElement = new ElementCreator() {
        @Override
        public <E extends HTMLElement> E create(String tag, Class<E> type) {
            return Js.cast(document.createElement(tag));
        }
    };

    // ------------------------------------------------------ container elements (a-z)

    public static HtmlContentBuilder<HTMLAnchorElement> a() {
        return htmlElement("a", HTMLAnchorElement.class);
    }

    public static HtmlContentBuilder<HTMLAnchorElement> a(@NonNls String href) {
        return a().attr("href", href);
    }

    public static HtmlContentBuilder<HTMLElement> aside() {
        return htmlElement("aside", HTMLElement.class);
    }

    public static EmptyContentBuilder<HTMLBRElement> br() {
        return emptyElement("br", HTMLBRElement.class);
    }

    public static HtmlContentBuilder<HTMLDivElement> div() {
        return htmlElement("div", HTMLDivElement.class);
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

    public static EmptyContentBuilder<HTMLHRElement> hr() {
        return emptyElement("hr", HTMLHRElement.class);
    }

    public static HtmlContentBuilder<HTMLLIElement> li() {
        return htmlElement("li", HTMLLIElement.class);
    }

    public static HtmlContentBuilder<HTMLOListElement> ol() {
        return htmlElement("ol", HTMLOListElement.class);
    }

    public static HtmlContentBuilder<HTMLParagraphElement> p() {
        return htmlElement("p", HTMLParagraphElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> section() {
        return htmlElement("section", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLElement> span() {
        return htmlElement("span", HTMLElement.class);
    }

    public static HtmlContentBuilder<HTMLUListElement> ul() {
        return htmlElement("ul", HTMLUListElement.class);
    }

    // ------------------------------------------------------ table elements

    public static HtmlContentBuilder<HTMLTableElement> table() {
        return htmlElement("table", HTMLTableElement.class);
    }

    public static HtmlContentBuilder<HTMLTableSectionElement> thead() {
        return htmlElement("thead", HTMLTableSectionElement.class);
    }

    public static HtmlContentBuilder<HTMLTableSectionElement> tbody() {
        return htmlElement("tbody", HTMLTableSectionElement.class);
    }

    public static HtmlContentBuilder<HTMLTableRowElement> tr() {
        return htmlElement("tr", HTMLTableRowElement.class);
    }

    public static HtmlContentBuilder<HTMLTableCellElement> th() {
        return htmlElement("th", HTMLTableCellElement.class);
    }

    public static HtmlContentBuilder<HTMLTableCellElement> td() {
        return htmlElement("td", HTMLTableCellElement.class);
    }

    public static HtmlContentBuilder<HTMLTableSectionElement> tfoot() {
        return htmlElement("tfoot", HTMLTableSectionElement.class);
    }

    // ------------------------------------------------------ form elements (a-z)

    public static HtmlContentBuilder<HTMLButtonElement> button() {
        return htmlElement("button", HTMLButtonElement.class);
    }

    public static HtmlContentBuilder<HTMLButtonElement> button(String text) {
        return button().textContent(text);
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

    public static HtmlContentBuilder<HTMLOptionElement> option() {
        return htmlElement("option", HTMLOptionElement.class);
    }

    public static HtmlContentBuilder<HTMLOptionElement> option(String text) {
        return option().textContent(text);
    }

    public static HtmlContentBuilder<HTMLSelectElement> select() {
        return htmlElement("select", HTMLSelectElement.class);
    }

    public static TextContentBuilder<HTMLTextAreaElement> textarea() {
        return textElement("textarea", HTMLTextAreaElement.class);
    }

    // ------------------------------------------------------ builder factories

    public static <E extends HTMLElement> EmptyContentBuilder<E> emptyElement(String tag, Class<E> type) {
        return emptyElement(() -> createElement(tag, type));
    }

    public static <E extends HTMLElement> EmptyContentBuilder<E> emptyElement(Supplier<E> element) {
        return new EmptyContentBuilder<>(element.get());
    }

    public static <E extends HTMLElement> TextContentBuilder<E> textElement(String tag, Class<E> type) {
        return new TextContentBuilder<>(createElement(tag, type));
    }

    public static <E extends HTMLElement> HtmlContentBuilder<E> htmlElement(String tag, Class<E> type) {
        return new HtmlContentBuilder<>(createElement(tag, type));
    }

    private static <E extends HTMLElement> E createElement(String tag, Class<E> type) {
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
    public static Iterator<HTMLElement> iterator(NodeList<Node> nodes) {
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
    public static Stream<HTMLElement> stream(NodeList<Node> nodes) {
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
    public static Iterable<HTMLElement> elements(NodeList<Node> nodes) {
        return () -> iterator(nodes);
    }

    /**
     * Convenience method to set the inner HTML of the given element.
     */
    public static void innerHtml(HTMLElement element, SafeHtml html) {
        if (element != null) {
            element.innerHTML = html.asString();
        }
    }

    /**
     * Appends the specified element to the parent element if not already present. If parent already contains child,
     * this method does nothing.
     */
    public static void lazyAppend(final HTMLElement parent, final HTMLElement child) {
        if (!parent.contains(child)) {
            parent.appendChild(child);
        }
    }

    /**
     * Inserts the specified element into the parent element if not already present. If parent already contains child,
     * this method does nothing.
     */
    public static void lazyInsertBefore(final HTMLElement parent, final HTMLElement child, final HTMLElement before) {
        if (!parent.contains(child)) {
            parent.insertBefore(child, before);
        }
    }

    /**
     * Removes all child elements from {@code element}
     */
    public static void removeChildrenFrom(final HTMLElement element) {
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
    public static boolean failSafeRemoveFromParent(final HTMLElement element) {
        return failSafeRemove(element != null ? element.parentNode : null, element);
    }

    /**
     * Removes the child from parent if both parent and child are not null and parent contains child.
     *
     * @return {@code true} if the the element has been removed from its parent, {@code false} otherwise.
     */
    public static boolean failSafeRemove(final Node parent, final HTMLElement child) {
        //noinspection SimplifiableIfStatement
        if (parent != null && child != null && parent.contains(child)) {
            return parent.removeChild(child) != null;
        }
        return false;
    }

    /**
     * Looks for an element in the document using the CSS selector {@code [data-element=&lt;name&gt;]}.
     */
    public static HTMLElement dataElement(@NonNls String name) {
        return (HTMLElement) DomGlobal.document.querySelector("[data-element=" + name + "]");
    }

    /**
     * Looks for an element below {@code context} using the CSS selector {@code [data-element=&lt;name&gt;]}
     */
    public static HTMLElement dataElement(HTMLElement context, @NonNls String name) {
        return context != null ? (HTMLElement) context.querySelector("[data-element=" + name + "]") : null;
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
