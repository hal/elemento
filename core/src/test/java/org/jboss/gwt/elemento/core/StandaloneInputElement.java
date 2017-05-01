package org.jboss.gwt.elemento.core;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

import elemental2.dom.HTMLInputElement;
import elemental2.dom.Node;

/**
 * @author Harald Pehl
 */
public class StandaloneInputElement extends HTMLInputElement implements TestElement {

    private final List<TestElement> children;
    private final Map<String, String> attributes;

    StandaloneInputElement(final String name) {
        this.tagName = name;
        this.children = new ArrayList<>();
        this.attributes = new LinkedHashMap<>();
    }

    @Override
    public String toString() {
        return ElementToString.asString(this);
    }

    void setStringAttribute(final String name, final String value) {
        attributes.put(name, value);
    }

    @Override
    public Node appendChild(final Node newChild) {
        if (newChild instanceof TestElement) {
            children.add((TestElement) newChild);
        }
        return newChild;
    }

    @Override
    public String id() {
        return id;
    }

    @Override
    public String tagName() {
        return tagName;
    }

    @Override
    public String type() {
        return type;
    }

    @Override
    public String title() {
        return title;
    }

    @Override
    public String className() {
        return className;
    }

    @Override
    public Map<String, String> attributes() {
        return attributes;
    }

    @Override
    public String innerHtml() {
        return innerHTML;
    }

    @Override
    public String textContent() {
        return textContent;
    }

    @Override
    public List<TestElement> children() {
        return children;
    }
}
