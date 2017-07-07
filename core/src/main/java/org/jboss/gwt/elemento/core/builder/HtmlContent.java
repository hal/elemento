package org.jboss.gwt.elemento.core.builder;

import com.google.gwt.safehtml.shared.SafeHtml;
import com.google.gwt.user.client.ui.IsWidget;
import elemental2.dom.HTMLElement;
import elemental2.dom.Node;
import jsinterop.base.Js;
import org.jboss.gwt.elemento.core.HasElements;
import org.jboss.gwt.elemento.core.IsElement;
import org.jboss.gwt.elemento.core.widgets.ElementoHtmlPanel;

/** Builder for container-like elements with inner HTML. */
public interface HtmlContent<E extends HTMLElement, B extends TypedBuilder<E, B>> extends TextContent<E, B> {

    /** Sets the inner HTML on the element using {@link HTMLElement#innerHTML}. */
    default B innerHtml(SafeHtml html) {
        asElement().innerHTML = html.asString();
        return that();
    }


    // ------------------------------------------------------ child element(s)

    /** Add the given element by calling {@code element.asElement()}. */
    default B add(IsElement element) {
        return add(element.asElement());
    }

    /** Adds the given element. */
    default B add(Node element) {
        asElement().appendChild(element);
        return that();
    }

    /** Adds all elements from {@code elements.asElements()}. */
    default B addAll(HasElements elements) {
        return addAll(elements.asElements());
    }

    /** Adds all elements. */
    default B addAll(HTMLElement... elements) {
        for (HTMLElement element : elements) { add(element); }
        return that();
    }

    /** Adds all elements. */
    default B addAll(Iterable<? extends Node> elements) {
        for (Node element : elements) { add(element); }
        return that();
    }

    /** Adds all elements. */
    default B addAll(IsElement... elements) {
        for (IsElement element : elements) { add(element); }
        return that();
    }


    // ------------------------------------------------------ child widget element(s)

    default B add(IsWidget widget, ElementoHtmlPanel container) {
        container.add(widget.asWidget(), Js.cast(asElement()));
        return that();
    }
}
