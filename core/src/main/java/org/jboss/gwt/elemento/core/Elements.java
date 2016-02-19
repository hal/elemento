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

import com.google.common.base.Joiner;
import com.google.common.collect.Iterables;
import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.safehtml.shared.SafeHtml;
import com.google.gwt.user.client.ui.IsWidget;
import com.google.gwt.user.client.ui.Widget;
import elemental.client.Browser;
import elemental.dom.Document;
import elemental.dom.Element;
import elemental.events.EventListener;
import elemental.html.InputElement;
import org.jetbrains.annotations.NonNls;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.Stack;

import static java.util.Arrays.asList;

/**
 * Helper methods for working with {@link Element}s.
 *
 * @author Harald Pehl
 */
public final class Elements {

    // this is a static helper class which must never be instantiated!
    private Elements() {}


    static class ElementInfo {

        int level;
        Element element;
        boolean container;

        ElementInfo(final Element element, final boolean container, final int level) {
            this.container = container;
            this.element = element;
            this.level = level;
        }

        @Override
        public String toString() {
            return (container ? "container" : "simple") + " @ " + level + ": " + element.getTagName();
        }
    }


    /**
     * Builder to create a hierarchy of {@link Element}s. Supports convenience methods to create common elements
     * and attributes. Uses a fluent API to create and append elements on the fly.
     * <p>
     * The builder distinguishes between elements which can contain nested elements (container) and simple element w/o
     * children. The former must be closed using {@link #end()}.
     * <p>
     * In order to create this form,
     * <pre>
     * &lt;section class="main"&gt;
     *     &lt;input class="toggle-all" type="checkbox"&gt;
     *     &lt;label for="toggle-all"&gt;Mark all as complete&lt;/label&gt;
     *     &lt;ul class="todo-list"&gt;
     *         &lt;li&gt;
     *             &lt;div class="view"&gt;
     *                 &lt;input class="toggle" type="checkbox" checked&gt;
     *                 &lt;label&gt;Taste Elemento&lt;/label&gt;
     *                 &lt;button class="destroy"&gt;&lt;/button&gt;
     *             &lt;/div&gt;
     *             &lt;input class="edit"&gt;
     *         &lt;/li&gt;
     *     &lt;/ul&gt;
     * &lt;/section&gt;
     * </pre>
     * <p>
     * use the following builder code:
     * <pre>
     * Element element = new Elements.Builder()
     *     .section().css("main")
     *         .input(checkbox).css("toggle-all")
     *         .label().attr("for", "toggle-all").innerText("Mark all as complete").end()
     *         .ul().css("todo-list")
     *             .li()
     *                 .div().css("view")
     *                     .input(checkbox).css("toggle")
     *                     .label().innerText("Taste Elemento").end()
     *                     .button().css("destroy").end()
     *                 .end()
     *                 .input(text).css("edit")
     *             .end()
     *         .end()
     *     .end().build();
     * </pre>
     *
     * @author Harald Pehl
     */
    public static class Builder extends CoreBuilder<Builder> {

        public Builder() {
            super("elements.builder");
        }

        @Override
        protected Builder that() {
            return this;
        }
    }


    public static abstract class CoreBuilder<B extends CoreBuilder<B>> {

        private final String id;
        private final Document document;
        private final Stack<ElementInfo> elements;
        private final Map<String, Element> references;
        private int level;

        /**
         * Creates a new builder.
         *
         * @param id an unique id which is used in error messages
         */
        protected CoreBuilder(@NonNls String id) {
            this(id, Browser.getDocument());
        }

        /**
         * Creates a new builder.
         *
         * @param id       an unique id which is used in error messages
         * @param document a reference to the document
         */
        protected CoreBuilder(@NonNls String id, Document document) {
            this.id = id;
            this.document = document;
            this.elements = new Stack<>();
            this.references = new HashMap<>();
        }

        private String logId() {
            return "<" + id + "> ";
        }

        /**
         * In order to make builders work with inheritance, sub-builders must return a reference to their instance.
         *
         * @return {@code this}
         */
        protected abstract B that();


        // ------------------------------------------------------ container elements

        /**
         * Starts a new {@code &lt;header&gt;} container. The element must be closed with {@link #end()}.
         */
        public B header() {
            return start("header");
        }

        /**
         * Starts a new {@code &lt;h&amp;&gt;} container. The element must be closed with {@link #end()}.
         */
        public B h(int ordinal) {
            return start("h" + ordinal);
        }

        /**
         * Starts a new {@code &lt;h&amp;&gt;} container with the specified inner text.
         * The element must be closed with {@link #end()}.
         */
        public B h(int ordinal, String text) {
            return start("h" + ordinal).innerText(text);
        }

        /**
         * Starts a new {@code &lt;section&gt;} container. The element must be closed with {@link #end()}.
         */
        public B section() {
            return start(document.createElement("section"));
        }

        /**
         * Starts a new {@code &lt;aside&gt;} container. The element must be closed with {@link #end()}.
         */
        public B aside() {
            return start(document.createElement("aside"));
        }

        /**
         * Starts a new {@code &lt;footer&gt;} container. The element must be closed with {@link #end()}.
         */
        public B footer() {
            return start(document.createElement("footer"));
        }

        /**
         * Starts a new {@code &lt;p&gt;} container. The element must be closed with {@link #end()}.
         */
        public B p() {
            return start(document.createElement("p"));
        }

        /**
         * Starts a new {@code &lt;ol&gt;} container. The element must be closed with {@link #end()}.
         */
        public B ol() {
            return start(document.createElement("ol"));
        }

        /**
         * Starts a new {@code &lt;ul&gt;} container. The element must be closed with {@link #end()}.
         */
        public B ul() {
            return start(document.createElement("ul"));
        }

        /**
         * Starts a new {@code &lt;li&gt;} container. The element must be closed with {@link #end()}.
         */
        public B li() {
            return start(document.createLIElement());
        }

        /**
         * Starts a new {@code &lt;a&gt;} container. The element must be closed with {@link #end()}.
         */
        public B a() {
            return start(document.createElement("a"));
        }

        /**
         * Starts a new {@code &lt;a&gt;} container with the specified href.
         * The element must be closed with {@link #end()}.
         */
        public B a(@NonNls String href) {
            return start(document.createElement("a")).attr("href", href);
        }

        /**
         * Starts a new {@code &lt;div&gt;} container. The element must be closed with {@link #end()}.
         */
        public B div() {
            return start(document.createDivElement());
        }

        /**
         * Starts a new {@code &lt;span&gt;} container. The element must be closed with {@link #end()}.
         */
        public B span() {
            return start(document.createSpanElement());
        }

        /**
         * Starts the named container. The element must be closed with {@link #end()}.
         */
        public B start(@NonNls String tag) {
            return start(document.createElement(tag));
        }

        /**
         * Adds the given element as new container. The element must be closed with {@link #end()}.
         */
        public B start(Element element) {
            elements.push(new ElementInfo(element, true, level));
            level++;
            return that();
        }

        /**
         * Closes the current container element.
         *
         * @throws IllegalStateException if there's no current element or if the closing element is no container.
         */
        public B end() {
            assertCurrent();
            if (level == 0) {
                throw new IllegalStateException(
                        logId() + "Unbalanced element hierarchy. Elements stack: " + dumpElements());
            }

            List<ElementInfo> children = new ArrayList<>();
            while (elements.peek().level == level) {
                children.add(elements.pop());
            }
            Collections.reverse(children);

            if (!elements.peek().container) {
                throw new IllegalStateException(
                        logId() + "Closing element " + elements.peek().element + " is no container");
            }
            Element closingElement = elements.peek().element;
            for (ElementInfo child : children) {
                closingElement.appendChild(child.element);
            }

            level--;
            return that();
        }

        private String dumpElements() {
            return elements.toString();
        }


        // ------------------------------------------------------ table elements

        public B table() {
            return start("table");
        }

        public B thead() {
            return start("tr");
        }

        public B tbody() {
            return start("tr");
        }

        public B tfoot() {
            return start("tr");
        }

        public B tr() {
            return start("tr");
        }

        public B th() {
            return start("tr");
        }

        public B td() {
            return start("tr");
        }


        // ------------------------------------------------------ form elements

        /**
         * Starts a new form. The element must be closed with {@link #end()}.
         */
        public B form() {
            return start(document.createFormElement());
        }

        /**
         * Starts a new form label. The element must be closed with {@link #end()}.
         */
        public B label() {
            return start(document.createLabelElement());
        }

        /**
         * Starts a new form label with the specified inner text.
         * The element must be closed with {@link #end()}.
         */
        public B label(String text) {
            return start(document.createLabelElement()).innerText(text);
        }

        /**
         * Starts a new button. The element must be closed with {@link #end()}.
         */
        public B button() {
            return input(InputType.button);
        }

        /**
         * Starts a new button with the specified inner text.
         * The element must be closed with {@link #end()}.
         */
        public B button(String text) {
            return input(InputType.button).innerText(text);
        }

        /**
         * Starts a new select box. The element must be closed with {@link #end()}.
         */
        public B select() {
            return input(InputType.select);
        }

        /**
         * Starts an option to be used inside a select box. The element must be closed with {@link #end()}.
         */
        public B option() {
            return start(document.createOptionElement());
        }

        /**
         * Starts an option with the specified inner text. The element must be closed with {@link #end()}.
         */
        public B option(String text) {
            return start(document.createOptionElement()).innerText(text);
        }

        /**
         * Starts a new textarea. The element must be closed with {@link #end()}.
         */
        public B textarea() {
            return input(InputType.textarea);
        }

        /**
         * Creates the given input field. See {@link InputType} for details
         * whether a container or simple element is created.
         */
        public B input(InputType type) {
            switch (type) {
                case button:
                    start(document.createButtonElement());
                    break;

                case color:
                case checkbox:
                case date:
                case datetime:
                case email:
                case file:
                case hidden:
                case image:
                case month:
                case number:
                case password:
                case radio:
                case range:
                case reset:
                case search:
                case tel:
                case text:
                case time:
                case url:
                case week:
                    InputElement inputElement = document.createInputElement();
                    inputElement.setType(type.name());
                    add(inputElement);
                    break;

                case select:
                    start(document.createSelectElement());
                    break;

                case textarea:
                    start(document.createTextAreaElement());
                    break;
            }
            return that();
        }


        // ------------------------------------------------------ simple elements

        /**
         * Creates and adds the named element. The element must not be closed using {@link #end()}.
         */
        public B add(@NonNls String tag) {
            return add(document.createElement(tag));
        }

        /**
         * Adds the given element. The element must not be closed using {@link #end()}.
         */
        public B add(Element element) {
            assertCurrent();
            elements.push(new ElementInfo(element, false, level));
            return that();
        }


        // ------------------------------------------------------ modify current element

        /**
         * Sets the id of the last added element.
         */
        public B id(@NonNls String id) {
            assertCurrent();
            elements.peek().element.setId(id);
            return that();
        }

        /**
         * Sets the title of the last added element.
         */
        public B title(String title) {
            assertCurrent();
            elements.peek().element.setTitle(title);
            return that();
        }

        /**
         * Sets the css classes for the last added element.
         */
        public B css(@NonNls String classes) {
            //noinspection NullArgumentToVariableArgMethod
            return css(classes, null);
        }

        /**
         * Sets the css classes for the last added element.
         */
        public B css(@NonNls String first, @NonNls String... rest) {
            assertCurrent();
            List<String> classes = new ArrayList<>();
            classes.add(first);
            if (rest != null) {
                classes.addAll(asList(rest));
            }
            String combined = rest != null && rest.length != 0
                    ? Joiner.on(' ').skipNulls().join(classes)
                    : first;
            elements.peek().element.setClassName(combined);
            return that();
        }

        /**
         * Sets the css style for the last added element.
         */
        public B style(@NonNls String style) {
            assertCurrent();
            elements.peek().element.getStyle().setCssText(style);
            return that();
        }

        /**
         * Adds an attribute to the last added element.
         */
        public B attr(@NonNls String name, String value) {
            assertCurrent();
            elements.peek().element.setAttribute(name, value);
            return that();
        }

        /**
         * Adds a {@code data-} attribute to the last added element.
         *
         * @param name The name of the data attribute w/o the {@code data-} prefix. However it won't be added if it's
         *             already present.
         */
        public B data(@NonNls String name, String value) {
            String safeName = name.startsWith("data-") ? name.substring("data-".length()) : name;
            elements.peek().element.getDataset().setAt(safeName, value);
            return that();
        }

        /**
         * Adds an {@code aria-} attribute to the last added element.
         *
         * @param name The name of the aria attribute w/o the {@code aria-} prefix. However it won't be added if it's
         *             already present.
         */
        public B aria(@NonNls String name, String value) {
            String safeName = name.startsWith("aria-") ? name : "aria-" + name;
            return attr(safeName, value);
        }

        /**
         * Sets the inner HTML on the last added element.
         */
        public B innerHtml(SafeHtml html) {
            assertCurrent();
            elements.peek().element.setInnerHTML(html.asString());
            return that();
        }

        /**
         * Sets the inner text on the last added element using {@link Element#setTextContent(String)}.
         */
        public B innerText(String text) {
            assertCurrent();
            elements.peek().element.setTextContent(text);
            return that();
        }

        private void assertCurrent() {
            if (elements.isEmpty()) {
                throw new IllegalStateException(logId() + "No current element");
            }
        }


        // ------------------------------------------------------ event handler

        /**
         * Adds the given event listener to the the last added element.
         */
        public B on(EventType type, EventListener listener) {
            assertCurrent();

            Element element = elements.peek().element;
            type.register(element, listener);
            return that();
        }


        // ------------------------------------------------------ references

        /**
         * Stores a named reference for the last added element. The element can be retrieved later on using
         * {@link #referenceFor(String)}.
         */
        public B rememberAs(@NonNls String id) {
            assertCurrent();
            references.put(id, elements.peek().element);
            return that();
        }

        /**
         * Returns the element which was stored using {@link #rememberAs(String)}.
         *
         * @throws NoSuchElementException if no element was stored under that id.
         */
        @SuppressWarnings("unchecked")
        public <T extends Element> T referenceFor(@NonNls String id) {
            if (!references.containsKey(id)) {
                throw new NoSuchElementException(logId() + "No element reference found for '" + id + "'");
            }
            return (T) references.get(id);
        }


        // ------------------------------------------------------ builder

        /**
         * Builds the element hierarchy and returns the top level element casted to the specified element type.
         *
         * @param <T> The target element type
         *
         * @throws IllegalStateException If the hierarchy is unbalanced.
         */
        @SuppressWarnings("unchecked")
        public <T extends Element> T build() {
            if (level != 0 && elements.size() != 1) {
                throw new IllegalStateException(
                        logId() + "Unbalanced element hierarchy. Elements stack: " + dumpElements());
            }
            return (T) elements.pop().element;
        }

        /**
         * Returns the top level elements added so far. This is useful if you don't want to build a single root
         * container, but work with a list of elements.
         */
        public Iterable<Element> elements() {
            if (level != 0) {
                throw new IllegalStateException(
                        logId() + "Unbalanced element hierarchy. Elements stack: " + dumpElements());
            }
            if (elements.isEmpty()) {
                throw new IllegalStateException(logId() + "Empty elements stack");
            }
            //noinspection StaticPseudoFunctionalStyleMethod
            return Iterables.transform(this.elements, elementInfo -> elementInfo.element);
        }
    }


    // ------------------------------------------------------ element helper methods

    /**
     * Returns an iterator over the children of the given parent element. The iterator supports the {@link
     * Iterator#remove()} operation which removes the current element from its parent.
     */
    public static Iterator<Element> iterator(Element parent) {
        return parent != null ? new ChildrenIterator(parent) : Collections.<Element>emptyList().iterator();
    }

    /**
     * Returns an iterable collection for the children of the given parent element.
     */
    public static Iterable<Element> children(Element parent) {
        return () -> iterator(parent);
    }

    /**
     * Convenience method to set the inner HTML of the given element.
     */
    public static void innerHtml(Element element, SafeHtml html) {
        if (element != null) {
            element.setInnerHTML(html.asString());
        }
    }

    /**
     * Removes all child elements from {@code element}
     */
    public static void removeChildrenFrom(final Element element) {
        if (element != null) {
            while (element.getFirstChild() != null) {
                element.removeChild(element.getFirstChild());
            }
        }
    }

    /**
     * Looks for an element in the document using the CSS selector {@code [data-element=&lt;name&gt;]}.
     */
    public static Element dataElement(@NonNls String name) {
        return Browser.getDocument().querySelector("[data-element=" + name + "]");
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
    public static boolean isVisible(Element element) {
        return element != null && !"none".equals(element.getStyle().getDisplay());
    }

    /**
     * shows / hide the specified element by modifying the {@code display} property.
     */
    public static void setVisible(Element element, boolean visible) {
        if (element != null) {
            element.getStyle().setDisplay(visible ? "" : "none");
        }
    }


    // ------------------------------------------------------ conversions


    private static class ElementWidget extends Widget {

        ElementWidget(final Element element) {
            setElement(com.google.gwt.dom.client.Element.as((JavaScriptObject) element));
        }
    }

    /**
     * Converts from {@link IsElement} &rarr; {@link Widget}.
     */
    public static Widget asWidget(IsElement element) {
        return asWidget(element.asElement());
    }

    /**
     * Converts from {@link Element} &rarr; {@link Widget}.
     */
    public static Widget asWidget(Element element) {
        return new ElementWidget(element);
    }

    /**
     * Converts from {@link IsWidget} &rarr; {@link Element}.
     */
    public static Element asElement(IsWidget widget) {
        return asElement(widget.asWidget());
    }

    /**
     * Converts from {@link Widget} &rarr; {@link Element}.
     */
    public static Element asElement(Widget widget) {
        return asElement(widget.getElement());
    }

    /**
     * Converts from {@link com.google.gwt.dom.client.Element} &rarr; {@link Element}.
     */
    public static Element asElement(com.google.gwt.dom.client.Element element) {
        return element.cast();
    }
}
