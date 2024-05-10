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

public class AlreadyDefined {

    @Loader("my-loader")
    public static class LoaderClass implements LoadData<String> {

        @Override
        public Promise<String> load(Place place, Parameter parameter) {
            return Promise.resolve("loaded");
        }
    }

    public static class Loaders {

        @Loader("my-loader")
        public static LoadData<String> loaderMethod() {
            return (place, parameter) -> Promise.resolve("loaded");
        }
    }

    @Route(value = "/loader-ref", loader = "my-loader")
    public static class LoaderRefPage implements Page {

        @Override
        public Iterable<HTMLElement> elements(Place place, Parameter parameter, LoadedData data) {
            return emptyList();
        }
    }
}
