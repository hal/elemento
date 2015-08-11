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

import com.google.gwt.core.client.JavaScriptObject;
import com.google.gwt.safehtml.shared.SafeHtml;
import com.google.gwt.user.client.ui.IsWidget;
import com.google.gwt.user.client.ui.Widget;
import elemental.client.Browser;
import elemental.dom.Document;
import elemental.dom.Element;
import elemental.events.EventListener;
import elemental.html.InputElement;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.Stack;

/**
 * Helper methods for working with {@link Element}s.
 *
 * @author Harald Pehl
 */
public final class Elements {

    // this is a static helper class which must never be instantiated!
    private Elements() {}


    private static class ElementInfo {

        int level;
        Element element;
        boolean container;

        public ElementInfo(final Element element, final boolean container, final int level) {
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
    public static final class Builder {

        private final Document document;
        private final Stack<ElementInfo> elements;
        private final Map<String, Element> references;
        private int level;

        public Builder() {
            this(Browser.getDocument());
        }

        protected Builder(Document document) {
            this.document = document;
            this.elements = new Stack<>();
            this.references = new HashMap<>();
        }


        // ------------------------------------------------------ container elements

        /**
         * Starts a new {@code &lt;header&gt;} container. The element must be closed with {@link #end()}.
         */
        public Builder header() {
            return start("header");
        }

        /**
         * Starts a new {@code &lt;h&amp;&gt;}  container. The element must be closed with {@link #end()}.
         */
        public Builder h(int ordinal) {
            return start("h" + ordinal);
        }

        /**
         * Starts a new {@code &lt;section&gt;} container. The element must be closed with {@link #end()}.
         */
        public Builder section() {
            return start(document.createElement("section"));
        }

        /**
         * Starts a new {@code &lt;aside&gt;} container. The element must be closed with {@link #end()}.
         */
        public Builder aside() {
            return start(document.createElement("aside"));
        }

        /**
         * Starts a new {@code &lt;footer&gt;} container. The element must be closed with {@link #end()}.
         */
        public Builder footer() {
            return start(document.createElement("footer"));
        }

        /**
         * Starts a new {@code &lt;p&gt;} container. The element must be closed with {@link #end()}.
         */
        public Builder p() {
            return start(document.createElement("p"));
        }

        /**
         * Starts a new {@code &lt;ol&gt;} container. The element must be closed with {@link #end()}.
         */
        public Builder ol() {
            return start(document.createElement("ol"));
        }

        /**
         * Starts a new {@code &lt;ul&gt;} container. The element must be closed with {@link #end()}.
         */
        public Builder ul() {
            return start(document.createElement("ul"));
        }

        /**
         * Starts a new {@code &lt;li&gt;} container. The element must be closed with {@link #end()}.
         */
        public Builder li() {
            return start(document.createLIElement());
        }

        /**
         * Starts a new {@code &lt;a&gt;} container. The element must be closed with {@link #end()}.
         */
        public Builder a() {
            return start(document.createElement("a"));
        }

        /**
         * Starts a new {@code &lt;div&gt;} container. The element must be closed with {@link #end()}.
         */
        public Builder div() {
            return start(document.createDivElement());
        }

        /**
         * Starts a new {@code &lt;span&gt;} container. The element must be closed with {@link #end()}.
         */
        public Builder span() {
            return start(document.createSpanElement());
        }

        /**
         * Starts the named container. The element must be closed with {@link #end()}.
         */
        public Builder start(String tag) {
            return start(document.createElement(tag));
        }

        /**
         * Adds the given element as new container. The element must be closed with {@link #end()}.
         */
        public Builder start(Element element) {
            elements.push(new ElementInfo(element, true, level));
            level++;
            return this;
        }

        /**
         * Closes the current container element.
         *
         * @throws IllegalStateException if there's no current element or if the closing element is no container.
         */
        public Builder end() {
            assertCurrent();
            if (level == 0) {
                throw new IllegalStateException("Unbalanced element hierarchy. Elements stack: " + dumpElements());
            }

            List<ElementInfo> children = new ArrayList<>();
            while (elements.peek().level == level) {
                children.add(elements.pop());
            }
            Collections.reverse(children);

            if (!elements.peek().container) {
                throw new IllegalStateException("Closing element " + elements.peek().element + " is no container");
            }
            Element closingElement = elements.peek().element;
            for (ElementInfo child : children) {
                closingElement.appendChild(child.element);
            }

            level--;
            return this;
        }

        private String dumpElements() {
            return elements.toString();
        }


        // ------------------------------------------------------ form elements

        /**
         * Starts a new form. The element must be closed with {@link #end()}.
         */
        public Builder form() {
            return start(document.createFormElement());
        }

        /**
         * Starts a new form label. The element must be closed with {@link #end()}.
         */
        public Builder label() {
            return start(document.createLabelElement());
        }

        /**
         * Starts a new button. The element must be closed with {@link #end()}.
         */
        public Builder button() {
            return input(InputType.button);
        }

        /**
         * Starts a new select box. The element must be closed with {@link #end()}.
         */
        public Builder select() {
            return input(InputType.select);
        }

        /**
         * Starts an option to be used inside a select box. The element must be closed with {@link #end()}.
         */
        public Builder option() {
            return start(document.createOptionElement());
        }

        /**
         * Starts a new textarea. The element must be closed with {@link #end()}.
         */
        public Builder textarea() {
            return input(InputType.textarea);
        }

        /**
         * Creates the given input field. See {@link InputType} for details
         * whether a container or simple element is created.
         */
        public Builder input(InputType type) {
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
            return this;
        }


        // ------------------------------------------------------ simple elements

        /**
         * Creates and adds the named element. The element must not be closed using {@link #end()}.
         */
        public Builder add(String tag) {
            return add(document.createElement(tag));
        }

        /**
         * Adds the given element. The element must not be closed using {@link #end()}.
         */
        public Builder add(Element element) {
            assertCurrent();
            elements.push(new ElementInfo(element, false, level));
            return this;
        }


        // ------------------------------------------------------ modify current element

        /**
         * Sets the id of the last added element.
         */
        public Builder id(String id) {
            assertCurrent();
            elements.peek().element.setId(id);
            return this;
        }

        /**
         * Sets the title of the last added element.
         */
        public Builder title(String title) {
            assertCurrent();
            elements.peek().element.setTitle(title);
            return this;
        }

        /**
         * Sets the css classes for the last added element.
         */
        public Builder css(String classes) {
            assertCurrent();
            elements.peek().element.setClassName(classes);
            return this;
        }

        /**
         * Sets the css style for the last added element.
         */
        public Builder style(String style) {
            assertCurrent();
            elements.peek().element.getStyle().setCssText(style);
            return this;
        }

        /**
         * Adds an attribute to the last added element.
         */
        public Builder attr(String name, String value) {
            assertCurrent();
            elements.peek().element.setAttribute(name, value);
            return this;
        }

        /**
         * Adds a {@code data-} attribute to the last added element.
         *
         * @param name The name of the data attribute w/o the {@code data-} prefix. However it won't be added if it's
         *             already present.
         */
        public Builder data(String name, String value) {
            String safeName = name.startsWith("data-") ? name : "data-" + name;
            return attr(safeName, value);
        }

        /**
         * Adds an {@code aria-} attribute to the last added element.
         *
         * @param name The name of the aria attribute w/o the {@code aria-} prefix. However it won't be added if it's
         *             already present.
         */
        public Builder aria(String name, String value) {
            String safeName = name.startsWith("aria-") ? name : "aria-" + name;
            return attr(safeName, value);
        }

        /**
         * Sets the inner HTML on the last added element.
         */
        public Builder innerHtml(SafeHtml html) {
            assertCurrent();
            elements.peek().element.setInnerHTML(html.asString());
            return this;
        }

        /**
         * Sets the inner text on the last added element using {@link Element#setTextContent(String)}.
         */
        public Builder innerText(String text) {
            assertCurrent();
            elements.peek().element.setTextContent(text);
            return this;
        }

        private void assertCurrent() {
            if (elements.isEmpty()) {
                throw new IllegalStateException("No current element");
            }
        }


        // ------------------------------------------------------ event handler

        /**
         * Adds the given event listener to the the last added element.
         */
        public Builder on(EventType type, EventListener listener) {
            assertCurrent();

            Element element = elements.peek().element;
            type.register(element, listener);
            return this;
        }


        // ------------------------------------------------------ references

        /**
         * Stores a named reference for the last added element. The element can be retrieved later on using
         * {@link #referenceFor(String)}.
         */
        public Builder rememberAs(String id) {
            assertCurrent();
            references.put(id, elements.peek().element);
            return this;
        }

        /**
         * Returns the element which was stored using {@link #rememberAs(String)}.
         *
         * @throws NoSuchElementException if no element was stored under that id.
         */
        @SuppressWarnings("unchecked")
        public <T extends Element> T referenceFor(String id) {
            if (!references.containsKey(id)) {
                throw new NoSuchElementException("No element reference found for '" + id + "'");
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
                throw new IllegalStateException("Unbalanced element hierarchy. Elements stack: " + dumpElements());
            }
            return (T) elements.pop().element;
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
    public static Element dataElement(String name) {
        return Browser.getDocument().querySelector("[data-element=" + name + "]");
    }

    /**
     * Looks for an element below {@code context} using the CSS selector {@code [data-element=&lt;name&gt;]}
     */
    public static Element dataElement(Element context, String name) {
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
