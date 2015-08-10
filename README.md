# Elemento
Elemento tries to make working with GWT [Elemental](http://www.gwtproject.org/articles/elemental.html) as easy as possible. In a nutshell Elemento brings the following features to the table:

- Builder like API to easily create arbitrary large element hierarchies
- HTML templates, declarative event handling and support for [handlebar](http://handlebarsjs.com/)-like expressions
- Support for dependency injection / [GIN](https://code.google.com/p/google-gin/)
- Helper methods to mix and match GWT elemental and GWT widgets

Elemento is heavily inspired by [Errai UI](http://docs.jboss.org/errai/latest/errai/reference/html_single/#sid-51806600) and [AutoValue](https://github.com/google/auto/tree/master/value). If you are familiar with one of the libraries, you'll find similar concepts in Elemento. In fact most of the ideas behind HTML templates are borrowed from Errai and pretty much code from AutoValue is reused for the annotation processing part in Elemento. So much kudos to the authors of Errai and AutoValue!

Before diving into the details here are a some links in case you just want to take a quick look

- [API documentation](https://rawgit.com/hpehl/elemento/site/TODO)
- Baisc samples source code
    - [Builder](samples/builder/src/main/java/org/jboss/gwt/elemento/sample/builder/client/ApplicationElement.java)
    - [Tampleted](samples/templated/src/main/java/org/jboss/gwt/elemento/sample/templated/client/ApplicationElement.java)
    - [GIN](samples/gin/src/main/java/org/jboss/gwt/elemento/sample/gin/client/ApplicationElement.java)
 
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

lead to vast amount of `Document.createXXXElement()` and chained `Element.appendChild()` calls. However using the builder API, creating the above structure is as easy as

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

The builder API supports convenience methods to create the most common elements and attributes. It uses a fluent API to create and append elements on the fly. The builder distinguishes between elements which can contain nested elements (container) and simple element w/o children. The former must be closed using `end()`. Take a look at the [API documentation](https://rawgit.com/hpehl/elemento/site/TODO) for all details.

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
The builder API provides methods to easily register event handlers. Use the method `Builder.on(EventType, EventListener)` to add handlers when building the element tree. There are [enum constants](https://rawgit.com/hpehl/elemento/site/TODO) available which map to all supported events:

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

Elemento uses annotation processors to generate code which picks the HTML content from your template. This code generation is inspired by Google's [AutoValue](https://github.com/google/auto/tree/master/value#how-to-use-autovalue) and it might take some time to get used to it. 

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

The HTML was enriched with `data-element` attributes. Elemento needs these attributes to select the root element and to map specific HTML elements to fields in the template class. To use the `<section/>` element as a template you need to create a public abstract class and annotate it with `@Templated`:

```java
@Templated("Todo.html#todos")
public abstract class Todos implements IsElement {
    static Todos create() {
        return new Templated_Todos();
    }
}
```

The `@Templated` annotation selects the root element. With default values, `@Templated` informs Elemento to look in the current package for a parallel ".html" template next to the template class and use the first child of the `<body>` as root element. 

The static method `static Todos create()` might look strange at first and it will most likely be marked as an error if you haven't run the annotation processor so far. But that's the central idea behind Elemento's code generation: You create an abstract base class that has one reasonable implementation. This implementation is generated by the annotation processor and is named `Templated_<YourClassName>`. That's the class you need to use in the static factory method.
   
Finally your template class needs to implement `IsElement`. This interface is the GWT Elemental counterpart to `IsWidget` and defines a single method which returns `elemental.dom.Element`. The generated code implements this method and returns the selected root element of your HTML template. This enables you to use your template like this:
 
```java
Browser.getDocument().getBody().appendChild(Todos.create().asElement());
```

So to sum it up here are the steps necessary to create and use an HTML template

1. Place `data-element` attributes in your HTML markup
1. Create a public abstract class annotated with `@Templated` which implements `IsElement`
1. Add a static factory method (name does not matter) which does return the template class and calls the generated constructor `Templated_<YourClassName>`

Besides these rules you're free to implement additional interfaces or extend from arbitrary base classes. 

### Dependencies
Now what if your template class has dependencies which you want to pass as constructor argument? In that case change the signature of the static factory method to accept your dependencies:
  
```java
@Templated("Todo.html#todos")
public abstract class Todos implements IsElement {

    static Todos create(TodoItemRepository repository, I18n i18n) {
        return new Templated_Todos(repository, i18n);
    }

    public abstract TodoItemRepository repository();
    public abstract I18n i18n();
}
```

For each constructor parameter you can define an abstract accessor method which returns the dependency and does not accept parameters. The generated code generation will implement these methods. Please make sure that parameters are passed to the auto-generated constructor in the same order the corresponding accessor methods are defined in the file. 
  
### Data Elements
To map specific elements from the HTML to your template class use the `@DataElement` annotation:
 
```java
@Templated("Todo.html#todos")
public abstract class Todos implements IsElement {
    static Todos create() {
        return new Templated_Todos();
    }

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
    
    [...]
}
```

If no value is provided for the `@DataElement` annotation, Elemento takes the name of the field as value for the `data-element` element. Thus `@DataElement InputElement newTodo` is turned into the CSS selector `[data-element=newTodo]`. You can override this default by providing a value for the `@DataElement` annotation. 

The `@DataElement` can be applied to fields and methods. Elemento defines some simple rules when it comes to merging between the HTML template and the related class:
 
- **Fields w/o an initializer**

    The element, its attributes and all children are mapped to the annotated field. The type of the field is restricted to `elemental.dom.Element` and its subclasses.
     
- **Fields w/ an initializer**

    The element in the HTML template is replaced with the initializer. The type of the field can be one of: `elemental.dom.Element`, `IsElement`, `Widget`, or `IsWidget`.
    
- **Methods**
    
    The element in the HTML template is replaced with the return value of the method. The method must return one of: `elemental.dom.Element`, `IsElement`, `Widget`, or `IsWidget`.

### Event Handlers
It's possible to register event handlers for elements marked with `data-element=<name>`. It does not matter whether the HTML element is mapped to a field / method. Attaching the event handler will work in any case:

```java
import static org.jboss.gwt.elemento.core.EventType.click;

@Templated("Todo.html#todos")
public abstract class Todos implements IsElement {
    static Todos create() {
        return new Templated_Todos();
    }

    @EventHandler(element = "clearCompleted", on = click)
    void clearCompleted() {
        [...]
    }
}
```

The annotated methods must return void and can have one optional parameter of type `elemental.events.Event` or a subtype of it. It's your responsibility that the event parameter matches to the register event type like in: 

```java
@EventHandler(element = "newTodo", on = keydown)
void newTodo(KeyboardEvent event) {
}
```

The available event types are provided as enum constants. See [EventType](https://rawgit.com/hpehl/elemento/site/TODO) for more details.   

### Handlebars


### PostConstruct
Todo

## GIN
Todo

## Goodies
Todo

## Samples
Todo
