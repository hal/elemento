package router.processor.loader;

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

public class MoreThanOneLoader {

    @Loader("more-than-one-loader")
    public static class LoaderClass implements LoadData<String> {

        @Override
        public Promise<String> load(Place place, Parameter parameter) {
            return Promise.resolve("loaded");
        }
    }

    @Route(value = "/loader-method", loader = "more-than-one-loader")
    public static class LoaderMethodPage implements Page {

        public static LoadData<String> loader() {
            return (place, parameter) -> Promise.resolve("loaded");
        }

        @Override
        public Iterable<HTMLElement> elements(Place place, Parameter parameter, LoadedData data) {
            return emptyList();
        }
    }
}
