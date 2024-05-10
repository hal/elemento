package router.processor.loader;

import org.jboss.elemento.router.LoadData;
import org.jboss.elemento.router.LoadedData;
import org.jboss.elemento.router.Page;
import org.jboss.elemento.router.Parameter;
import org.jboss.elemento.router.Place;
import org.jboss.elemento.router.Route;

import elemental2.dom.HTMLElement;
import elemental2.promise.Promise;

import static java.util.Collections.emptyList;

public class PossibleLoaderMethod {

    @Route("/possible-loader-method")
    public static class PossibleLoaderMethodPage implements Page {

        public static LoadData<String> withParameters(int i) {
            return (place, parameter) -> Promise.resolve("💣");
        }

        static LoadData<String> notPublic() {
            return (place, parameter) -> Promise.resolve("💣");
        }

        @Override
        public Iterable<HTMLElement> elements(Place place, Parameter parameter, LoadedData data) {
            return emptyList();
        }
    }
}
