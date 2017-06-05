package org.jboss.gwt.elemento.core.builder;

import elemental2.dom.HTMLInputElement;

public class InputBuilder<E extends HTMLInputElement> extends ElementBuilder<E, InputBuilder<E>> {

    public InputBuilder(E element) { super(element); }

    @Override
    public InputBuilder<E> that() { return this; }

    public InputBuilder<E> checked(boolean checked) {
        asElement().checked = checked;
        return that();
    }
}
