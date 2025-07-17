package org.jboss.elemento.router;

public class AnnotatedPlaces extends Places {

    public AnnotatedPlaces() {
        super();
        Place place0 = Place.place("/possible-loader-method");
        add(place0, () -> new router.processor.loader.PossibleLoaderMethod.PossibleLoaderMethodPage());
    }
}
