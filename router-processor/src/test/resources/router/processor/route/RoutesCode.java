package org.jboss.elemento.router;

public class AnnotatedPlaces extends Places {

    public AnnotatedPlaces() {
        super();
        Place place0 = Place.place("/basic");
        add(place0, () -> new router.processor.route.Routes.BasicPage());
        Place place1 = Place.place("/para/:meter");
        add(place1, () -> new router.processor.route.Routes.ParameterPage());
        Place place2 = Place.place("/selector")
                .root("#selector");
        add(place2, () -> new router.processor.route.Routes.SelectorPage());
        Place place3 = Place.place("/title")
                .title("Title");
        add(place3, () -> new router.processor.route.Routes.TitlePage());
        Place place4 = Place.place("/title-and-selector")
                .title("Title")
                .root("#selector");
        add(place4, () -> new router.processor.route.Routes.TitleAndSelectorPage());
    }
}
