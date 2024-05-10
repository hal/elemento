package router.processor.route;

import org.jboss.elemento.router.LoadedData;
import org.jboss.elemento.router.Page;
import org.jboss.elemento.router.Parameter;
import org.jboss.elemento.router.Place;
import org.jboss.elemento.router.Route;

import elemental2.dom.HTMLElement;

import static java.util.Collections.emptyList;

public class Routes {

    @Route("/basic")
    public static class BasicPage implements Page {

        @Override
        public Iterable<HTMLElement> elements(Place place, Parameter parameter, LoadedData data) {
            return emptyList();
        }
    }

    @Route("/para/:meter")
    public static class ParameterPage implements Page {

        @Override
        public Iterable<HTMLElement> elements(Place place, Parameter parameter, LoadedData data) {
            return emptyList();
        }
    }

    @Route(value = "/title", title = "Title")
    public static class TitlePage implements Page {

        @Override
        public Iterable<HTMLElement> elements(Place place, Parameter parameter, LoadedData data) {
            return emptyList();
        }
    }

    @Route(value = "/selector", selector = "#selector")
    public static class SelectorPage implements Page {

        @Override
        public Iterable<HTMLElement> elements(Place place, Parameter parameter, LoadedData data) {
            return emptyList();
        }
    }

    @Route(value = "/title-and-selector", title = "Title", selector = "#selector")
    public static class TitleAndSelectorPage implements Page {

        @Override
        public Iterable<HTMLElement> elements(Place place, Parameter parameter, LoadedData data) {
            return emptyList();
        }
    }
}
