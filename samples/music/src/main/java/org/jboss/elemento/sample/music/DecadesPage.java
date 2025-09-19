package org.jboss.elemento.sample.music;

import org.jboss.elemento.router.LoadedData;
import org.jboss.elemento.router.Page;
import org.jboss.elemento.router.Parameter;
import org.jboss.elemento.router.Place;
import org.jboss.elemento.router.Route;
import elemental2.dom.HTMLElement;

import static java.util.Collections.singletonList;
import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.article;
import static org.jboss.elemento.Elements.div;
import static org.jboss.elemento.Elements.h;
import static org.jboss.elemento.Elements.section;
import static org.jboss.elemento.sample.music.Breadcrumb.breadcrumb;

@Route("/decades")
public class DecadesPage implements Page {

    @Override
    public Iterable<HTMLElement> elements(Place place, Parameter parameter, LoadedData data) {
        return singletonList(section()
                .add(h(1).text("Decades"))
                .add(breadcrumb()
                        .add("/", "Home"))
                .add(div().css("grid")
                        .add(article().css("decade").add(a("/records/1980/1989").css("decade").text("1980 - 1989")))
                        .add(article().css("decade").add(a("/records/1990/1999").css("decade").text("1990 - 1999")))
                        .add(article().css("decade").add(a("/records/2000/2009").css("decade").text("2000 - 2009"))))
                .add(div().css("grid")
                        .add(article().css("decade").add(a("/records/2010/2019").css("decade").text("2010 - 2019")))
                        .add(article().css("decade").add(a("/records/2020/2029").css("decade").text("2020 - 2029"))))
                .element());
    }
}
