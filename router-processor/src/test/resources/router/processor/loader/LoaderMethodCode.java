package org.jboss.elemento.router;

public class AnnotatedPlaces extends Places {

    public AnnotatedPlaces() {
        super();
        Place place0 = Place.place("/loader-method")
                .loader(router.processor.loader.LoaderMethod.LoaderMethodPage.loader());
        add(place0, () -> new router.processor.loader.LoaderMethod.LoaderMethodPage());
    }
}
