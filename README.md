# Elemento
Elemento tries to make working with GWT [Elemental](http://www.gwtproject.org/articles/elemental.html) as easy as possible. In a nutshell Elemento brings the following features to the table:

- Builder like API to easily create arbitrary large element hierarchies
- HTML templates, declarative event handling and support for [handlebar](http://handlebarsjs.com/)-like expressions
- Support for dependency injection with [GIN](https://code.google.com/p/google-gin/)
- Helper methods to mix and match GWT Elemental and GWT Widgets

Elemento is inspired by [Errai UI](http://docs.jboss.org/errai/latest/errai/reference/html_single/#sid-51806600) and [AutoValue](https://github.com/google/auto/tree/master/value). If you are familiar with one of the libraries, you'll find similar concepts in Elemento. In fact most of the ideas behind HTML templates are borrowed from Errai and pretty much code from AutoValue is reused for the annotation processing part in Elemento. So much kudos to the authors of Errai and AutoValue!

Before diving into the details here is the link to the [API documentation](http://rawgit.com/hpehl/elemento/site/apidocs/index.html). 
 
## How to use Elemento

To use Elemento add the following dependency to your pom.xml:

```xml
<project>
    
    [...]
    
    <dependencies>
        <dependency>
            <groupId>org.jboss.gwt.elemento</groupId>
            <artifactId>elemento-core</artifactId>
            <version>[insert current version]</version>
        </dependency>
    </dependencies>
    
    [...]
    
    <repositories>
        <repository>
            <id>jboss-public-repository-group</id>
            <name>JBoss Public Maven Repository Group</name>
            <url>https://repository.jboss.org/nexus/content/groups/public/</url>
        </repository>
    </repositories>
</project>
```

In your GWT module inherit from `org.jboss.gwt.elemento.Core`:

```xml
<module>
    [...]
    <inherits name="org.jboss.gwt.elemento.Core"/>
    [...]
</module>
```

The HTML templates rely on annotation processing. The annotation processors are configured in `META-INF/services/javax.annotation.processing.Processor` and should be detected automatically.

## Builder API
When working with GWT Elemental it is often awkward and cumbersome to create an hierarchy of elements. Even simple structures like
```html
<section class="main">
    <input class="toggle-all" type="checkbox">
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
        <li>
            <div class="view">
                <input class="toggle" type="checkbox" checked>
                <label>Taste Elemento</label>
                <button class="destroy"></button>
            </div>
            <input class="edit">
        </li>
    </ul>
</section>
```

lead to a vast amount of `Document.createXXXElement()` and chained `Element.appendChild()` calls. However using the builder API, creating the above structure is as easy as

```java
import static org.jboss.gwt.elemento.core.InputType.checkbox;
import static org.jboss.gwt.elemento.core.InputType.text;

// @formatter:off
Element element = new Elements.Builder()
    .section().css("main")
        .input(checkbox).css("toggle-all")
        .label().attr("for", "toggle-all").innerText("Mark all as complete").end()
        .ul().css("todo-list")
            .li()
                .div().css("view")
                    .input(checkbox).css("toggle")
                    .label().innerText("Taste Elemento").end()
                    .button().css("destroy").end()
                .end()
                .input(text).css("edit")
            .end()
        .end()
    .end().build();
// @formatter:on
```

The builder API supports convenience methods to create the most common elements and attributes. It uses a fluent API to create and append elements on the fly. The builder distinguishes between elements which can contain nested elements (container) and simple element w/o children. The former must be closed using `end()`. Take a look at the [API documentation](http://rawgit.com/hpehl/elemento/site/apidocs/org/jboss/gwt/elemento/core/Elements.Builder.html) for all details.

### References
When creating large hierarchies of elements you often need to reference an element somewhere in the tree. Use the `Builder.rememberAs(String)` method to save a reference and `Builder.referenceFor(String)` to lookup the reference later on:

```java
// @formatter:off
Elements.Builder builder = new Elements.Builder()
    .footer().css("footer")
        .span().css("todo-count").rememberAs("count").end()
    .end();
// @formatter:on
    
Element count = builder.referenceFor("count");
```

### Event Handlers
The builder API provides methods to easily register event handlers. Use the method `Builder.on(EventType, EventListener)` to add handlers when building the element tree. There are [enum constants](http://rawgit.com/hpehl/elemento/site/apidocs/org/jboss/gwt/elemento/core/EventType.html) available which map to all supported events:

```java
import static org.jboss.gwt.elemento.core.EventType.*;

// @formatter:off
Element listItem = new Elements.Builder()
    .li()
        .div().css("view")
            .input(checkbox).on(change, event -> toggle()).css("toggle")
            .label().on(dblclick, (event) -> edit()).innerText("...").end()
            .button().on(click, (event) -> destroy()).css("destroy").end()
        .end()
        .input(text).on(keydown, this::keyDown).on(blur, event -> blur()).css("edit")
    .end().build();
// @formatter:on
```

## Templates
Elemento provides an easy way to take existing HTML content and use it in your GWT application. Templates can be either HTML snippets or full HTML documents where you select an element and its children. This allows you to preview your templates more easily during design without running the application. 

Elemento leverages annotation processors to generate code which picks the HTML content from your template. This code generation is inspired by Google's [AutoValue](https://github.com/google/auto/tree/master/value#how-to-use-autovalue) and it might take some time to get used to it. 

### Getting Started
Let's say you've got the following HTML document called `Todo.html`:
 
```html
<!doctype html>
<html lang="en">
<head>
    <link rel="stylesheet" href="<path-to>/node_modules/todomvc-common/base.css">
    <link rel="stylesheet" href="<path-to>/node_modules/todomvc-app-css/index.css">
</head>
<body>
<section data-element="todos" class="todoapp">
    <header class="header">
        <h1>todos</h1>
        <input data-element="newTodo" class="new-todo" placeholder="What needs to be done?" autofocus>
    </header>
    <section data-element="main" class="main">
        <input data-element="toggleAll" class="toggle-all" id="toggle-all" type="checkbox">
        <label for="toggle-all">Mark all as complete</label>
        <ul data-element="list" class="todo-list">
            <!-- Todo items are mapped to an extra template class -->
        </ul>
    </section>
    <footer data-element="footer" class="footer">
        <span data-element="count" class="todo-count"><strong>0</strong> item left</span>
        <ul class="filters">
            <li><a data-element="all" href="#/">All</a></li>
            <li><a data-element="active" href="#/active">Active</a></li>
            <li><a data-element="completed" href="#/completed">Completed</a></li>
        </ul>
        <button data-element="clearCompleted" class="clear-completed">Clear completed</button>
    </footer>
</section>
[...]
</body>
</html>
```

The HTML is enriched with `data-element` attributes. Elemento needs these attributes to select the root element and to map specific HTML elements to fields in the template class. To create a template class which maps to the `<section/>` element, create an abstract class and annotate it with `@Templated`:

```java
@Templated("Todo.html#todos")
abstract class ApplicationElement implements IsElement {

    static ApplicationElement create() {
        return new Templated_ApplicationElement();
    }
}
```

The `@Templated` annotation selects the root element. With default values, Elemento looks in the current package for a parallel ".html" template next to the template class and use the first child of the `<body>` as root element. 

The static method `static ApplicationElement create()` might look strange at first and it will most likely be marked as an error if you haven't run the annotation processor so far. But that's the central idea behind Elemento's code generation: You create an abstract base class that has one reasonable implementation. This implementation is generated by the annotation processor and is named `Templated_<YourClassName>`. That's the class you need to use in the static factory method.
   
Finally your template class needs to implement `org.jboss.gwt.elemento.core.IsElement`. This interface is the GWT Elemental counterpart to `IsWidget` and defines a single method which returns `elemental.dom.Element`. The generated code implements this method and returns the selected root element of your HTML template. This enables you to use your template like this:
 
```java
Browser.getDocument().getBody().appendChild(ApplicationElement.create().asElement());
```

So to sum it up here are the steps necessary to create and use an HTML template

1. Place `data-element` attributes in your HTML markup
1. Create an abstract class annotated with `@Templated` which implements `IsElement`
1. Add a static factory method (name does not matter) which does return the template class and calls the generated constructor `Templated_<YourClassName>`
1. Run the annotation processor to get rid of compile errors

Besides these rules you're free to implement additional interfaces or extend from arbitrary base classes. 

### Dependencies
Now what if your template class has dependencies which you want to pass as constructor argument? In that case change the signature of the static factory method to accept your dependencies:
  
```java
@Templated("Todo.html#todos")
abstract class ApplicationElement implements IsElement {

    static ApplicationElement create(TodoItemRepository repository, I18n i18n) {
        return new Templated_ApplicationElement(repository, i18n);
    }

    abstract TodoItemRepository repository();
    abstract I18n i18n();
}
```

For each constructor parameter you can define an abstract accessor method which returns the dependency and does not accept parameters. The generated code will implement these methods. Please make sure that parameters are passed to the auto-generated constructor in the same order the corresponding accessor methods are defined in the file. Take extra care that the order remains valid if you refactor your code!
  
### Data Elements
To map specific elements from the HTML to your template class use the `@DataElement` annotation:
 
```java
@Templated("Todo.html#todos")
abstract class ApplicationElement implements IsElement {
    
    @DataElement InputElement newTodo;
    @DataElement Element main;
    @DataElement InputElement toggleAll;
    @DataElement Element list;
    @DataElement Element footer;
    @DataElement Element count;
    @DataElement("all") Element filterAll;
    @DataElement("active") Element filterActive;
    @DataElement("completed") Element filterCompleted;
    @DataElement ButtonElement clearCompleted;
}
```

If no value is provided for the `@DataElement` annotation, the name of the field / method is taken as default. Elemento uses the following CSS selector to pick elements from the HTML template: 

```css
[data-element=<value()>]
```

The `@DataElement` can be applied to fields and methods. Those fields and methods must not be private. Elemento defines some simple rules when it comes to mapping between the HTML template and the related class:
 
- **Fields w/o an initializer**

    The element, its attributes and all children are mapped from the HTML template to the annotated field. The type of the field is restricted to `elemental.dom.Element` and its subclasses.
     
- **Fields w/ an initializer**

    The element in the HTML template is replaced with the initializer. The type of the field can be one of: `elemental.dom.Element`, `IsElement`, `Widget`, or `IsWidget`.
    
- **Methods**
    
    The element in the HTML template is replaced with the return value of the method. The method must return one of: `elemental.dom.Element`, `IsElement`, `Widget`, or `IsWidget` and must not have any parameters.

### Event Handlers
It's possible to register event handlers for elements marked with `data-element=<name>`. It does not matter whether the HTML element is mapped with `@DataElement`. Attaching the event handler will work in any case:

```java
import static org.jboss.gwt.elemento.core.EventType.click;

@Templated("Todo.html#todos")
abstract class ApplicationElement implements IsElement {

    @EventHandler(element = "clearCompleted", on = click)
    void clearCompleted() {
    }
}
```

The annotated methods must return void and can have one optional parameter of type `elemental.events.Event` or one of its subtypes. It's your responsibility that the event parameter matches to the register event type like in: 

```java
@EventHandler(element = "newTodo", on = keydown)
void newTodo(KeyboardEvent event) {
}
```

The available event types are provided as enum constants. See [EventType](http://rawgit.com/hpehl/elemento/site/apidocs/org/jboss/gwt/elemento/core/EventType.html) for more details.   

### Handlebars
Elemento supports [handlebar](http://handlebarsjs.com/)-like expressions in HTML templates:
 
```html
<section data-element="todos" class="todoapp">
    <header class="header">
        <h1>{{i18n().constants().todos()}}</h1>
        <input data-element="newTodo" class="new-todo" placeholder="{{i18n().constants().new_todo()}}" autofocus>
    </header>
    [...]
</section>
```

The expressions between `{{` and `}}` need to be valid Java expressions. They're executed in the constructor of the generated class. Where `{{<expression>}}` is replaced with the result of `String.valueOf(<expression>)`. The example above makes use of the template's `i18n()` method (see example above) and inserts the language specific header. But you could also use any other valid expressions like `{{com.google.gwt.i18n.client.DateTimeFormat.getShortDateFormat().format(new java.util.Date())}}`.

Handlebars expressions are supported in text nodes and attribute values. 

### PostConstruct
Since templated classes cannot have a constructor it's possible to annotate a method with `javax.annotation.PostConstruct`. This method will be called from the generated constructor **after** all initialization steps (element mapping, event handlers, handlebars). So it's safe to use the abstract accessor methods and data elements from the initialization method:
 
```java
@Templated("Todo.html#todos")
abstract class ApplicationElement implements IsElement {

    static ApplicationElement create(TodoItemRepository repository, I18n i18n) {
        return new Templated_ApplicationElement(repository, i18n);
    }

    abstract TodoItemRepository repository();
    abstract I18n i18n();

    @DataElement Element list;

    @PostConstruct
    void init() {
        // load the todo items from local storage
        Elements.removeChildrenFrom(list); 
        for (TodoItem item : repository().items()) {
            // TodoItemElement is another template class
            list.appendChild(TodoItemElement.create(this, repository(), item).asElement());
        }
    }
}
```

The method annotated with `javax.annotation.PostConstruct` must not be private, return void and must not have any parameters. 

## GIN
Elemento provides support for dependency injection using [GIN](https://code.google.com/p/google-gin/). To use it add this dependency to your pom.xml:

```xml
<dependency>
    <groupId>org.jboss.gwt.elemento</groupId>
    <artifactId>elemento-gin</artifactId>
    <version>[insert current version]</version>
</dependency>
```

This will activate an additional annotation processor which will generate a GIN provider named `Templated_<YourTemplateClass>_Provider`. You need to register this provider in your GIN module. Say you have a template class called `ApplicationElement`:

```java
public class ApplicationModule extends AbstractGinModule {

    @Override
    protected void configure() {
        bind(ApplicationElement.class).toProvider(Templated_ApplicationElement_Provider.class).in(Singleton.class);
    }
}
```

With this setup you can then inject your template class using GIN. If your static factory method has parameters please make sure these parameters are injectable. For all details please take a look to the source code of the [GIN sample](samples/gin).

# Goodies
Elemento contains a small set of static helper methods to make working with elements easier. One set of methods can be used to convert between `Element` and `Widget`: 

```java
/**
 * Converts from {@link IsElement} &rarr; {@link Widget}.
 */
public static Widget asWidget(IsElement element) {...}

/**
 * Converts from {@link Element} &rarr; {@link Widget}.
 */
public static Widget asWidget(Element element) {...}

/**
 * Converts from {@link IsWidget} &rarr; {@link Element}.
 */
public static Element asElement(IsWidget widget) {...}

/**
 * Converts from {@link Widget} &rarr; {@link Element}.
 */
public static Element asElement(Widget widget) {...}

/**
 * Converts from {@link com.google.gwt.dom.client.Element} &rarr; {@link Element}.
 */
public static Element asElement(com.google.gwt.dom.client.Element element) {...}
```

Finally there are methods to iterate over the children of an element using the Java collection classes: 

```java
/**
 * Returns an iterator over the children of the given parent element.
 */
public static Iterator<Element> iterator(Element parent) {...}

/**
 * Returns an iterable collection for the children of the given parent element.
 */
public static Iterable<Element> children(Element parent) {...}
```

Take a look at the [API documentation](http://rawgit.com/hpehl/elemento/site/apidocs/org/jboss/gwt/elemento/core/Elements.html) for more details.  

## Samples
Elemento comes with three different [implementations](http://hpehl.github.io/elemento/index.html) of the [TodoMVC](http://todomvc.com/) sample app. 

- Builder API: [Source](samples/builder) | [Demo](http://hpehl.github.io/elemento/builder/index.html)
- Plain HTML templates: [Source](samples/templated) | [Demo](http://hpehl.github.io/elemento/templated/index.html)
- HTML templates with GIN support: [Source](samples/gin) | [Demo](http://hpehl.github.io/elemento/gin/index.html)

All three samples are using the same key to persist the todo items in the local storage. So you can switch between the samples and continue working on your tasks seamlessly ;-)
