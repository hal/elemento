package org.jboss.elemento.router;

public class AnnotatedPlaces extends Places {
  public AnnotatedPlaces() {
    super();
    Place place0 = Place.place("/loader-method-ref")
        .loader(router.processor.loader.LoaderMethodRef.Loaders.loaderMethod());
    add(place0, () -> new router.processor.loader.LoaderMethodRef.LoaderMethodRefPage());
  }
}
