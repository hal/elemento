package router.processor.loader;

import org.jboss.elemento.router.LoadedData;
import org.jboss.elemento.router.Loader;
import org.jboss.elemento.router.Page;
import org.jboss.elemento.router.Parameter;
import org.jboss.elemento.router.Place;
import org.jboss.elemento.router.Route;

import elemental2.dom.HTMLElement;

import static java.util.Collections.emptyList;

public class WrongReturnType {

    public static class Loaders {

        @Loader("loader-method")
        public static String loaderMethod() {
            return "💣";
        }
    }

    @Route(value = "/loader-method-ref", loader = "loader-method")
    public static class LoaderMethodRefPage implements Page {

        @Override
        public Iterable<HTMLElement> elements(Place place, Parameter parameter, LoadedData data) {
            return emptyList();
        }
    }
}
