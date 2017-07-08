package org.jboss.gwt.elemento.core.widgets;

import com.google.gwt.dom.client.Element;
import com.google.gwt.user.client.ui.ComplexPanel;
import com.google.gwt.user.client.ui.IsWidget;
import com.google.gwt.user.client.ui.Widget;
import com.google.gwt.user.client.ui.WidgetCollection;
import elemental2.dom.HTMLElement;
import elemental2.dom.Node;
import java.util.Iterator;
import jsinterop.base.Js;
import org.jboss.gwt.elemento.core.IsElement;

/** A panel that contains HTML, and which can attach child widgets to identified elements within that HTML. */
public class ElementoHtmlPanel<E extends HTMLElement> extends ComplexPanel {

    public ElementoHtmlPanel(E elem) {
        setElement(Js.<Element>cast(elem));
    }

    public E asElement() { return Js.cast(getElement()); }

    protected void add(IsElement element) { add(Js.<Node>cast(element.asElement())); }

    protected void add(Node node) { getElement().appendChild(Js.cast(node)); }

    /** Adds a child widget to the panel. */
    @Override public void add(Widget widget) { add(widget, Js.<Element>cast(getElement())); }

    @Override protected WidgetCollection getChildren() { return super.getChildren(); }

    protected void add(IsWidget widget, IsElement container) { add(widget, container.asElement()); }

    protected void add(IsWidget widget, HTMLElement container) { add(widget.asWidget(), Js.<Element>cast(container)); }

    @Override public void add(Widget child, Element container) { super.add(child, container); }

    /** Adds a child widget to the panel, replacing the HTML element. */
    protected final void replace(IsWidget widget, IsElement toReplace) {
        replace(widget, Js.<Element>cast(toReplace.asElement()));
    }

    /** Adds a child widget to the panel, replacing the HTML element. */
    protected void replace(IsWidget isWidget, Element toReplace) {
        Widget widget = isWidget.asWidget();
        // Early exit if the element to replace and the replacement are the same
        // If we remove the new widget, we would also remove the element to replace
        if (toReplace == widget.getElement()) {
            return;
        }

        // Logic pulled from super.add(), replacing the element rather than adding

        // Detach new child. Okay if its a child of the element to replace
        widget.removeFromParent();

        // Logical detach of all children of the element to replace
        Widget toRemove = null;
        Iterator<Widget> children = getChildren().iterator();
        while (children.hasNext()) {
            Widget next = children.next();
            if (toReplace.isOrHasChild(next.getElement())) {
                if (next.getElement() == toReplace) {
                    // If the element that we are replacing is itself a widget, then we
                    // cannot remove it until the new widget has been inserted, or we lose
                    // the location of the element to replace. Save the widget to remove
                    // for now, and remove it after inserting the new widget
                    toRemove = next;
                    break;
                }
                children.remove();
            }
        }

        // Logical attach
        getChildren().add(widget);

        // Physical attach
        if (toRemove == null) {
            toReplace.getParentNode().replaceChild(widget.getElement(), toReplace);
        } else {
            // The element being replaced is a widget, which needs to be removed.
            // First insert the new widget at the same location, then remove the old widget
            toReplace.getParentNode().insertBefore(widget.getElement(), toReplace);
            remove(toRemove);
        }

        // Adopt
        adopt(widget);
    }

    protected void insert(Widget isWidget, int beforeIndex) {
        insert(isWidget, getElement(), beforeIndex);
    }

    protected void insert(Widget isWidget, HTMLElement container, int beforeIndex) {
        insert(isWidget, Js.<Element>cast(container), beforeIndex);
    }

    protected void insert(Widget isWidget, Element container, int beforeIndex) {
        super.insert(isWidget.asWidget(), container, beforeIndex, true);
    }
}
