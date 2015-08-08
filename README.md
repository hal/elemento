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
Elemento provides an easy way to take existing HTML content and use it as an element in your GWT application. This idea is not new and most of the concepts are borrowed from [Errai UI](http://docs.jboss.org/errai/latest/errai/reference/html_single/#sid-51806600). However compared to Errai there are also some differences:

- Based on annotation processing to generate code (no deferred binding)
- Does rely on Elemental elements instead of GWT Widgets

### Getting Started
Must implement `IsElement`
Abstract base class
Static creator method
Abstract getters

### Root Element
Todo

### Date Elements
Todo

### Event Handlers
Todo

### Handlebars
Todo

## GIN
Todo

## Goodies
Todo

## Samples
Todo
