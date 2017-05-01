package org.jboss.gwt.elemento.core;

/**
 * @author Harald Pehl
 */
final class ElementToString {

    static String asString(TestElement element) {
        StringBuilder builder = new StringBuilder();
        builder.append("<").append(element.tagName());
        if (element.type() != null) {
            printAttributes(builder, "type", element.type());
        }
        if (element.id() != null) {
            printAttributes(builder, "id", element.id());
        }
        if (element.title() != null) {
            printAttributes(builder, "title", element.title());
        }
        if (element.className() != null) {
            printAttributes(builder, "class", element.className());
        }
        element.attributes().forEach((name, value) -> printAttributes(builder, name, value));
        if (element.innerHtml() != null) {
            builder.append(">").append(element.innerHtml()).append("</").append(element.tagName()).append(">");
        } else if (element.textContent() != null) {
            builder.append(">").append(element.textContent()).append("</").append(element.tagName()).append(">");
        } else if (!element.children().isEmpty()) {
            builder.append(">");
            for (TestElement child : element.children()) {
                builder.append(asString(child));
            }
            builder.append("</").append(element.tagName()).append(">");
        } else {
            builder.append("/>");
        }
        return builder.toString();
    }

    private static void printAttributes(StringBuilder builder, String name, String value) {
        if (value != null) {
            builder.append(String.format(" %s=\"%s\"", name, value));
        }
    }
}
