package org.jboss.elemento.sample.music;

import org.jboss.elemento.IsElement;
import elemental2.dom.HTMLElement;
import elemental2.dom.HTMLUListElement;

import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.li;
import static org.jboss.elemento.Elements.nav;
import static org.jboss.elemento.Elements.ul;

public class Breadcrumb implements IsElement<HTMLElement> {

    public static Breadcrumb breadcrumb() {
        return new Breadcrumb();
    }

    private final HTMLElement root;
    private final HTMLUListElement ul;

    Breadcrumb() {
        root = nav().aria("label", "Breadcrumb").element();
        root.appendChild(ul = ul().css("breadcrumb").element());
    }

    public Breadcrumb add(String route, String text) {
        ul.appendChild(li().add(a(route).text(text)).element());
        return this;
    }

    @Override
    public HTMLElement element() {
        return root;
    }
}
