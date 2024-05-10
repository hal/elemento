package router.processor;

import org.jboss.elemento.router.LoadData;
import org.jboss.elemento.router.LoadedData;
import org.jboss.elemento.router.Loader;
import org.jboss.elemento.router.Page;
import org.jboss.elemento.router.Parameter;
import org.jboss.elemento.router.Place;
import org.jboss.elemento.router.Route;

import elemental2.dom.HTMLElement;
import elemental2.promise.Promise;

import static java.util.Collections.emptyList;

public class AbstractClass {

    @Loader("abstract-class")
    public static abstract class LoaderClass implements LoadData<String> {

        @Override
        public Promise<String> load(Place place, Parameter parameter) {
            return Promise.resolve("loaded");
        }
    }

    @Route(value = "/loader-class-ref", loader = "abstract-class")
    public static class LoaderClassRefPage implements Page {

        @Override
        public Iterable<HTMLElement> elements(Place place, Parameter parameter, LoadedData data) {
            return emptyList();
        }
    }
}
