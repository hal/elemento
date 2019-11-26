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

package org.jboss.gwt.elemento.core;

import java.util.Objects;

import elemental2.dom.Element;

import static java.util.Arrays.stream;
import static java.util.stream.Collectors.joining;

/**
 * Typesafe CSS selector API.
 * <p>
 * Use the static methods in this class to create arbitrary complex CSS selectors:
 * <p>
 * <pre>
 * // #main [data-list-item=foo] a[href^="http://"] > .fas.fa-check, .external[hidden]
 * By.group(
 *         By.id("main")
 *                 .desc(By.data("listItem", "foo")
 *                         .desc(By.element("a").and(By.attribute("href", STARTS_WITH, "http://"))
 *                                 .child(By.classnames("fas", "fa-check")))),
 *         By.classname("external").and(By.attribute("hidden")));
 * </pre>
 *
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors">https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors</a>
 */
public abstract class By {

    // ------------------------------------------------------ combinators

    /**
     * Combines this selector with the given selector. Use this method to express selectors like
     * {@code button.primary} or {@code input[type=checkbox]}:
     * <p>
     * <pre>
     * By.element("button").and(By.classname("primary"))
     * By.element("input").and(By.attribute("type", "checkbox"));
     * </pre>
     */
    public final By and(By selector) {
        return combinator(Combinator.AND, selector);
    }

    /**
     * Combines this selector with the given selector using the (space) combinator.
     * Selects nodes that are descendants of this element.
     */
    public final By desc(By selector) {
        return combinator(Combinator.DESCENDANT, selector);
    }

    /**
     * Combines this selector with the given selector using the {@code >} (child) combinator.
     * Selects nodes that are direct children of this element.
     */
    public final By child(By selector) {
        return combinator(Combinator.CHILD, selector);
    }

    /**
     * Combines this selector with the given selector using the {@code ~} (general sibling) combinator.
     * This means that {@code selector} follows this element (though not necessarily immediately), and both share the
     * same parent.
     */
    public final By sibling(By selector) {
        return combinator(Combinator.SIBLING, selector);
    }

    /**
     * Combines this selector with the given selector using the {@code +} (adjacent sibling combinator) combinator.
     * This means that {@code selector} directly follows this element, and both share the same parent.
     */
    public final By adjacentSibling(By selector) {
        return combinator(Combinator.ADJACENT_SIBLING, selector);
    }

    private By combinator(Combinator combinator, By selector) {
        return new ByCombination(this, combinator, selector);
    }

    // ------------------------------------------------------ instance methods

    abstract String selector();

    @Override
    public int hashCode() {
        return Objects.hashCode(selector());
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof By)) {
            return false;
        }
        By by = (By) o;
        return selector().equals(by.selector());
    }

    @Override
    public String toString() {
        return selector();
    }

    // ------------------------------------------------------ factory methods

    /** Returns a selector as-is. */
    public static By selector(String selector) {
        return new BySelector(selector);
    }

    /** Selects an element based on the value of its id attribute. */
    public static By id(String id) {
        return new ById(null, id);
    }

    /** Selects all elements that have the given node name. */
    public static By element(String element) {
        return new ByElement(element);
    }

    /** Selects all elements that have the given node name. */
    public static By element(Element element) {
        return new ByElement(element.tagName.toLowerCase());
    }

    /** Selects all elements that have the given node name. */
    public static By element(IsElement element) {
        return new ByElement(element.element().tagName.toLowerCase());
    }

    /** Selects all elements that have the given class attribute. */
    public static By classname(String classname) {
        return new ByClassname(null, new String[]{classname});
    }

    /** Selects all elements that have all class attributes. */
    public static By classnames(String first, String second, String... remaining) {
        int length = 2;
        if (remaining != null) {
            length += remaining.length;
        }
        String[] classnames = new String[length];
        classnames[0] = first;
        classnames[1] = second;
        if (remaining != null) {
            int index = 2;
            for (String classname : remaining) {
                classnames[index] = classname;
                index++;
            }
        }
        return new ByClassname(null, classnames);
    }

    /** Selects all elements that have all class attributes. */
    public static By classnames(String[] classnames) {
        return new ByClassname(null, classnames);
    }

    /** Selects all elements that have an attribute name of {@code name}. */
    public static By attribute(String name) {
        return new ByAttribute(name, null, null);
    }

    /**
     * Selects all elements that have an attribute name of {@code name} whose value is exactly {@code value}.
     * <p>
     * You don't need to enclose the value in single or double quotes. If necessary, quotes are added automatically.
     *
     * @see <a href="https://mothereff.in/unquoted-attributes">https://mothereff.in/unquoted-attributes</a>
     */
    public static By attribute(String name, String value) {
        return new ByAttribute(name, null, value);
    }

    /**
     * Selects all elements that have an attribute name of {@code name} whose value applies to the given operator.
     * <p>
     * You don't need to enclose the value in single or double quotes. If necessary, quotes are added automatically.
     *
     * @see <a href="https://mothereff.in/unquoted-attributes">https://mothereff.in/unquoted-attributes</a>
     */
    public static By attribute(String name, AttributeOperator operator, String value) {
        return new ByAttribute(name, operator, value);
    }

    /**
     * Selects all elements that have an attribute name of data-{@code name}.
     * <p>
     * If {@code name} contains "-" it is used as if, otherwise it is expected to be in camelCase and is converted to
     * kebab-case.
     */
    public static By data(String name) {
        return new ByData(name, null, null);
    }

    /**
     * Selects all elements that have an attribute name of data-{@code name} whose value is exactly {@code value}.
     * <p>
     * If {@code name} contains "-" it is used as if, otherwise it is expected to be in camelCase and is converted to
     * kebab-case.
     * <p>
     * You don't need to enclose the value in single or double quotes. If necessary, quotes are added automatically.
     *
     * @see <a href="https://mothereff.in/unquoted-attributes">https://mothereff.in/unquoted-attributes</a>
     */
    public static By data(String name, String value) {
        return new ByData(name, null, value);
    }

    /**
     * Selects all elements that have an attribute name of data-{@code name} whose value applies to the given operator.
     * <p>
     * If {@code name} contains "-" it is used as if, otherwise it is expected to be in camelCase and is converted to
     * kebab-case.
     * <p>
     * You don't need to enclose the value in single or double quotes. If necessary, quotes are added automatically.
     *
     * @see <a href="https://mothereff.in/unquoted-attributes">https://mothereff.in/unquoted-attributes</a>
     */
    public static By data(String name, AttributeOperator operator, String value) {
        return new ByData(name, operator, value);
    }

    /** Groups the specified selectors using {@code ,}. */
    public static By group(By first, By second, By... remaining) {
        int length = 2;
        if (remaining != null) {
            length += remaining.length;
        }
        By[] group = new By[length];
        group[0] = first;
        group[1] = second;
        if (remaining != null) {
            int index = 2;
            for (By by : remaining) {
                group[index] = by;
                index++;
            }
        }
        return new ByGroup(group);
    }

    /** Groups the specified selectors using {@code ,}. */
    public static By group(By[] selectors) {
        return new ByGroup(selectors);
    }

    // ------------------------------------------------------ inner classes

    /** Operator used for attribute selectors. */
    public static enum AttributeOperator {
        /**
         * {@code [attr^=value]}: Represents elements with an attribute name of attr whose value is prefixed (preceded)
         * by value.
         */
        STARTS_WITH("^"),

        /**
         * {@code [attr$=value]}: Represents elements with an attribute name of attr whose value is suffixed (followed)
         * by value.
         */
        ENDS_WITH("$"),

        /**
         * {@code [attr*=value]}: Represents elements with an attribute name of attr whose value contains at least one
         * occurrence of value within the string.
         */
        CONTAINS("*"),

        /**
         * {@code [attr~=value]}: Represents elements with an attribute name of attr whose value is a
         * whitespace-separated list of words, one of which is exactly value.
         */
        CONTAINS_WORD("~"),

        /**
         * {@code [attr|=value]}: Represents elements with an attribute name of attr whose value can be exactly value or
         * can begin with value immediately followed by a hyphen, - (U+002D). It is often used for language subcode
         * matches.
         */
        CONTAINS_TOKEN("|");

        private final String operator;

        private AttributeOperator(String operator) {
            this.operator = operator;
        }
    }

    private enum Combinator {

        AND(""),
        DESCENDANT(" "),
        CHILD(" > "),
        ADJACENT_SIBLING(" + "),
        SIBLING(" ~ ");

        private final String operator;

        private Combinator(String operator) {
            this.operator = operator;
        }
    }

    // ------------------------------------------------------ By implementations

    private static class BySelector extends By {

        private final String selector;

        private BySelector(String selector) {
            this.selector = selector;
        }

        @Override
        String selector() {
            return selector;
        }
    }

    private static class ByElement extends By {

        private final String element;

        private ByElement(String element) {
            this.element = element;
        }

        @Override
        String selector() {
            return element;
        }
    }

    private static class ById extends By {

        private final String element;
        private final String id;

        private ById(String element, String id) {
            this.element = element;
            this.id = id;
        }

        @Override
        String selector() {
            return Objects.toString(element, "") + "#" + id;
        }
    }

    private static class ByClassname extends By {

        private final String element;
        private final String[] classnames;

        private ByClassname(String element, String[] classnames) {
            this.element = element;
            this.classnames = classnames;
        }

        @Override
        String selector() {
            return Objects.toString(element, "") + "." + String.join(".", classnames);
        }
    }

    private static class ByAttribute extends By {

        private final String name;
        private final String value;
        private final AttributeOperator operator;

        private ByAttribute(String name, AttributeOperator operator, String value) {
            this.name = name;
            this.value = value;
            this.operator = operator;
        }

        @Override
        String selector() {
            StringBuilder builder = new StringBuilder();
            builder.append("[").append(name);
            if (value != null && value.length() != 0) {
                boolean needsQuotes = needsQuotes(value);
                if (operator != null) {
                    builder.append(operator.operator);
                }
                builder.append("=");
                if (needsQuotes) {
                    builder.append("\"");
                }
                builder.append(value);
                if (needsQuotes) {
                    builder.append("\"");
                }
            }
            builder.append("]");
            return builder.toString();
        }

        // Inspired by https://mothereff.in/unquoted-attributes
        // but w/o using js reg exp in order to enable unit tests
        private boolean needsQuotes(String value) {
            if (value.equals("-")) {
                return true;
            }
            if (value.startsWith("-") && value.length() > 1 && Character.isDigit(value.charAt(1))) {
                return true;
            }
            if (Character.isDigit(value.charAt(0))) {
                return true;
            }
            for (int i = 0; i < value.length(); i++) {
                char c = value.charAt(i);
                if (!Character.isLetterOrDigit(c) && c != '-' && c != '_') {
                    return true;
                }
            }
            return false;
        }
    }

    private static class ByData extends ByAttribute {

        private static String camelToKebabCase(String str) {
            // from https://codepen.io/wpatter6/pen/wvweWZa
            return str.replaceAll("([a-z0-9]|(?=[A-Z]))([A-Z])", "$1-$2").toLowerCase();
        }

        private ByData(String name, AttributeOperator attributeOperator, String value) {
            super("data-" + (name.contains("-") ? name : camelToKebabCase(name)), attributeOperator, value);
        }
    }

    private static class ByCombination extends By {

        private final By by1;
        private final Combinator combinator;
        private final By by2;

        private ByCombination(By by1, Combinator combinator, By by2) {
            this.by1 = by1;
            this.combinator = combinator;
            this.by2 = by2;
        }

        @Override
        String selector() {
            return by1.selector() + combinator.operator + by2.selector();
        }
    }

    private static class ByGroup extends By {

        private final By[] selectors;

        private ByGroup(By[] selectors) {
            this.selectors = selectors;
        }

        @Override
        String selector() {
            return stream(selectors).map(By::selector).collect(joining(", "));
        }
    }
}
