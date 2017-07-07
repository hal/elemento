package org.jboss.gwt.elemento.core.widgets;

import com.google.gwt.user.client.ui.IsWidget;
import com.google.gwt.user.client.ui.Widget;
import elemental2.dom.HTMLElement;
import java.util.stream.StreamSupport;
import jsinterop.base.Js;
import org.jboss.gwt.elemento.core.IsElement;

public class ElementoListPanel<E extends HTMLElement, I extends IsWidget> implements IsWidget {

    public static <E extends HTMLElement, I extends IsWidget> ElementoListPanel<E, I> of(IsElement<E> el) {
        return of(el.asElement());
    }

    public static <E extends HTMLElement, I extends IsWidget> ElementoListPanel<E, I> of(E el) {
        return new ElementoListPanel<>(el);
    }

    private final ElementoHtmlPanel<E> panel;

    protected ElementoListPanel(E el) {
        panel = new ElementoHtmlPanel<>(el);
    }

    public void add(I widget) { panel.add(widget); }

    public void insert(I widget, int beforeIndex) { panel.insert(widget.asWidget(), beforeIndex); }

    public int indexOf(I widget) { return panel.getWidgetIndex(widget); }

    @SuppressWarnings("unchecked") public I get(int index) { return (I) panel.getWidget(index); }

    public void remove(I widget) { panel.remove(widget); }

    public void clear() { panel.clear(); }

    public E asElement() { return Js.cast(panel.getElement()); }

    @Override public Widget asWidget() { return panel; }

    public int size() { return panel.getWidgetCount(); }

    @SuppressWarnings("unchecked") public Iterable<I> children() {
        return () -> StreamSupport.stream(panel.getChildren().spliterator(), false).map(w -> (I) w).iterator();
    }
}
