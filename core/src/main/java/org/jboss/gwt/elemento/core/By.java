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

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import elemental2.dom.Element;
import elemental2.dom.Node;
import elemental2.dom.NodeList;

import static java.util.Arrays.stream;
import static java.util.stream.Collectors.joining;

public abstract class By {

    // ------------------------------------------------------ query

    public final NodeList<Element> findAll(Node node) {
        return node.querySelectorAll(selector());
    }

    public final Element find(Node node) {
        return node.querySelector(selector());
    }

    // ------------------------------------------------------ combinators

    public final By and(By selector) {
        return combinator(Combinator.AND, selector);
    }

    public final By descendant(By selector) {
        return combinator(Combinator.DESCENDANT, selector);
    }

    public final By child(By selector) {
        return combinator(Combinator.CHILD, selector);
    }

    public final By adjacentSibling(By selector) {
        return combinator(Combinator.ADJACENT_SIBLING, selector);
    }

    public final By sibling(By selector) {
        return combinator(Combinator.SIBLING, selector);
    }

    private By combinator(Combinator combinator, By selector) {
        return new ByCombination(this, combinator, selector);
    }

    // ------------------------------------------------------ instance methods

    public abstract String selector();

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

    public static By selector(String selector) {
        return new BySelector(selector);
    }

    public static By id(String id) {
        return new ById(null, id);
    }

    public static By element(String element) {
        return new ByElement(element);
    }

    public static By element(Element element) {
        return new ByElement(element.tagName.toLowerCase());
    }

    public static By element(IsElement element) {
        return new ByElement(element.element().tagName.toLowerCase());
    }

    public static By classname(String classname) {
        return new ByClassname(null, new String[]{classname});
    }

    public static By classname(String[] classnames) {
        return new ByClassname(null, classnames);
    }

    public static By attribute(String name) {
        return new ByAttribute(name, null, null);
    }

    public static By attribute(String name, String value) {
        return new ByAttribute(name, value, null);
    }

    public static By attributeStarts(String name, String value) {
        return new ByAttribute(name, value, Position.STARTS);
    }

    public static By attributeEnds(String name, String value) {
        return new ByAttribute(name, value, Position.ENDS);
    }

    public static By attributeContains(String nmame, String value) {
        return new ByAttribute(nmame, value, Position.CONTAINS);
    }

    public static By data(String name) {
        return new ByData(name, null, null);
    }

    public static By data(String name, String value) {
        return new ByData(name, value, null);
    }

    public static By dataStarts(String name, String value) {
        return new ByData(name, value, Position.STARTS);
    }

    public static By dataEnds(String name, String value) {
        return new ByData(name, value, Position.ENDS);
    }

    public static By dataContains(String name, String value) {
        return new ByData(name, value, Position.CONTAINS);
    }

    public static By all(By first, By second, By... remaining) {
        List<By> all = new ArrayList<>();
        all.add(first);
        all.add(second);
        if (remaining != null) {
            for (By by : remaining) {
                all.add(by);
            }
        }
        return new ByAll(all.toArray(new By[0]));
    }

    public static By all(By[] selectors) {
        return new ByAll(selectors);
    }

    // ------------------------------------------------------ internals

    private static String[] collectNames(String first, String... remaining) {
        List<String> names = new ArrayList<>();
        names.add(first);
        if (remaining != null) {
            for (String name : remaining) {
                names.add(name);
            }
        }
        return names.toArray(new String[0]);
    }

    // ------------------------------------------------------ inner classes

    private static enum Position {
        STARTS("^"), ENDS("$"), CONTAINS("*");

        private final String operator;

        private Position(String operator) {
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
        public String selector() {
            return selector;
        }
    }

    private static class ByElement extends By {

        private final String element;

        private ByElement(String element) {
            this.element = element;
        }

        @Override
        public String selector() {
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
        public String selector() {
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
        public String selector() {
            return Objects.toString(element, "") + "." + String.join(".", classnames);
        }
    }

    private static class ByAttribute extends By {

        private final String name;
        private final String value;
        private final Position position;

        private ByAttribute(String name, String value, Position position) {
            this.name = name;
            this.value = value;
            this.position = position;
        }

        @Override
        public String selector() {
            StringBuilder builder = new StringBuilder();
            builder.append("[").append(name);
            if (value != null && value.length() != 0) {
                boolean needsQuotes = needsQuotes(value);
                if (position != null) {
                    builder.append(position.operator);
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
        // but w/o using reg exp to be able to use unit tests
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

        private ByData(String name, String value, Position position) {
            super("data-" + camelToKebabCase(name), value, position);
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
        public String selector() {
            return by1.selector() + combinator.operator + by2.selector();
        }
    }

    private static class ByAll extends By {

        private final By[] selectors;

        private ByAll(By[] selectors) {
            this.selectors = selectors;
        }

        @Override
        public String selector() {
            return stream(selectors).map(By::selector).collect(joining(", "));
        }
    }
}
