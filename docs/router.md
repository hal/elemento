# Router

Elemento offers a very basic router. The router is minimal invasive and built around a few simple concepts:

- `Place`<br/>
  Data class that represents a place in an application. A place is identified by a route, and can have an optional title and a custom root element. Routes can have parameters like in `/contacts/:contactId`. Finally, a place can also have a loader assigned to it.

- `Places`<br/>
  Builder to set up places. Supports nested places, combining places and allows to assign loaders to places.

- `LoadData<T>`<br/>
  Functional interface to asynchronously load data before a page is created and added to the DOM. The function gets the place and parameters as input, returns a promise of the data to be loaded and is defined as `Promise<T> load(Place place, Parameter parameter)`.

- `Page`<br/>
  Simple interface that represents a collection of HTML elements. Implementations should be cheap to create and need to implement a single method: `Iterable<HTMLElement> elements(Place, Parameter, LoadedData)`.

- `PlaceManager`<br/>
  Main class of the router module. Performs the following tasks, among others:

    - keeps track of registered places
    - handles navigation events
    - parses route parameters
    - calls loader functions
    - updates the DOM and browser history

The place manager can be customized using builder like methods and has a `start()` method to show the initial page.

## Annotations

Creating a `Places` instance can be time-consuming (especially in large applications). This can be automated by using annotations, where an annotation processor takes over the tedious work of creating the `Places` instance. You can use the following annotations for this purpose:

- `@Route`<br/>
  Annotation to mark a `Page` implementation as a place. The annotation requires a route and can have an optional title, root selector and reference to a named loader. If the annotated page has **exactly one** public, static method that returns `LoadData<?>` and accepts no parameters, this is used as loader for the place. If a loader is specified using the `loader` attribute, there has to be a matching class or static method annotated with `@Loader`.

- `@Loader`<br/>
  Annotation to mark a class or public static method as a named loader. If used on a class, the class has to implement `LoadData<T>`. If used on a static method, the method has to return `LoadData<?>` and must not accept any parameters.

You can also mix and match an own `Places` instance with the generated one (see below).

Here's an example showing most of the concepts in action:

```java
@Route("/time/:area/:location")
public class TimePage implements Page {

    public static LoadData<String> loadTime() {
        return (place, parameter) -> {
            String area = parameter.get("area");
            String location = parameter.get("location");
            String url = "https://worldtimeapi.org/api/timezone/" + area + "/" + location;
            return fetch(url)
                    .then(Response::json)
                    .then(json -> {
                        JsPropertyMap<String> map = Js.cast(json);
                        return Promise.resolve(map.get("datetime"));
                    });
        };
    }

    @Override
    public Iterable<HTMLElement> elements(Place place, Parameter parameter, LoadedData data) {
        String area = parameter.get("area");
        String location = parameter.get("location");
        String currentTime = data.get();
        return asList(
                h(1, "Current time").element(),
                p()
                        .add("It's ")
                        .add(span().textContent(currentTime))
                        .add(" in " + area + "/" + location)
                        .element());
    }
}

@Route("/", "Home")
public class HomePage implements Page {

    @Override
    public Iterable<HTMLElement> elements(Place place, Parameter parameter, LoaderData data) {
        return asList(
                h(1, "Welcome").element(),
                p()
                        .add("What time is it in ")
                        .add(a("/time/Europe/Berlin").textNode("Berlin"))
                        .add("?")
                        .element());
    }
}

public class Application {

    public void entryPoint() {
        body().add(div().id("main"));

        Places allPlaces = places()
                .add(new AnnotatedPlaces()) // generated places instance
                .add(place("/foo"), FooPage::new)
                .add(place("/bar"), BarPage::new)
                .children("/level1", places()
                        .add(place("/"), Level1Page::new) // index page
                        .add(places() // siblings
                                .add(place("/foo"), Foo1Page::new)
                                .add(place("/bar"), Bar1Page::new))
                        .children("/level2", places()
                                .add(place("/foo"), Foo2Page::new)
                                .add(place("/bar"), Bar2Page::new)));

        PlaceManager placeManager = new PlaceManager()
                .root(By.id("main"))
                .register(allPlaces);
        placeManager.start();
    }
}
```

See the API documentation of [PlaceManager](https://hal.github.io/elemento/apidocs/org/jboss/elemento/router/PlaceManager.html) for more details.
