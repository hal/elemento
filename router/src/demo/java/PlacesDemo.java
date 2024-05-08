import org.jboss.elemento.router.LoadedData;
import org.jboss.elemento.router.Page;
import org.jboss.elemento.router.Parameter;
import org.jboss.elemento.router.Place;
import org.jboss.elemento.router.Places;

import elemental2.dom.HTMLElement;

import static java.util.Collections.emptyList;
import static org.jboss.elemento.router.Place.place;
import static org.jboss.elemento.router.Places.places;

@SuppressWarnings({"unused", "GrazieInspection"})
public class PlacesDemo {

    // @start region = places
    public static class EmptyPage implements Page {

        @Override
        public Iterable<HTMLElement> elements(Place place, Parameter parameter, LoadedData data) {
            return emptyList();
        }
    }

    public static class Application {

        public void entryPoint() {
            /*
            The code builds the following places
            /
            /foo
            /bar
            /level1
            /level1/foo
            /level1/bar
            /level1/level2/foo
            /level1/level2/bar
             */
            Places places = places()
                    .add(place("/"), EmptyPage::new)
                    .add(place("/foo"), EmptyPage::new)
                    .add(place("/bar"), EmptyPage::new)
                    .children("/level1", places()
                            .add(place("/"), EmptyPage::new)
                            .add(places() // add siblings!
                                    .add(place("/foo"), EmptyPage::new)
                                    .add(place("/bar"), EmptyPage::new))
                            .children("/level2", places()
                                    .add(place("/foo"), EmptyPage::new)
                                    .add(place("/bar"), EmptyPage::new)));

        }
    }
    // @end region = places
}
