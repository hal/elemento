package org.jboss.elemento.router;

public class AnnotatedPlaces extends Places {
  public AnnotatedPlaces() {
    super();
    Place place0 = Place.place("/loader-class-ref")
        .loader(new router.processor.loader.LoaderClassRef.LoaderClass());
    add(place0, () -> new router.processor.loader.LoaderClassRef.LoaderClassRefPage());
  }
}
