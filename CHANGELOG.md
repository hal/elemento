# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres
to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Maven 4: Separate BOM from the rest of the modules

## [1.7.1] - 2025-05-08

### Changed

- Migrate to publishing via the Maven Central Portal

### Upgrades

- Bumped JBoss Parent to 49

## [1.7.0] - 2024-11-29

> [!WARNING]
> This release contains refactorings and deprecations that might break existing code.

The refactoring should make the use case and scope of the builder-like classes, interfaces and methods more obvious. It
introduces a common naming pattern for interfaces and classes:

- Interface `[HTML|MathML|SVG]Element<Scope>Methods`: These interfaces contain default methods to work with a specific aspect of
  an HTML, MathML or SVG element.

  Some examples are
    - `ElementAttributeMethods`
    - `HTMLElementDataMethods`
    - `HTMLInputElementMethods`
    - `SVGElementStyleMethods`

- Class `[HTML|MathML|SVG](Element|Container)Builder`: Concrete builders that encapsulate an HTML, MathML or SVG element. The
  builders implement the method interfaces to work with the element.

  Some examples are
    - `HTMLElementBuilder`
    - `HTMLInputElementBuilder`
    - `SVGContainerBuilder`

See https://hal-console.gitbook.io/elemento/builder-api#classes-and-interfaces for more information.

### Changed

#### Core

- `HasElement<E extends Element, B extends TypedBuilder<E, B>>` has been deprecated and is split into more specific interfaces:
    - `ElementAttributeMethods<E, B>`
    - `ElementClassListMethods<E, B>`
    - `ElementConsumerMethods<E, B>`
    - `ElementContainerMethods<E, B>`
    - `ElementEventMethods<E, B>`
    - `ElementIdMethods<E, B>`
    - `ElementHTMLMethods<E, B>`
    - `ElementTextMethods<E, B>`

- `HasHTMLElement<E extends Element, B extends TypedBuilder<E, B>>` has been deprecated and is split into more specific
  interfaces:
    - `HTMLElementAttributeMethods<E, B>`
    - `HTMLElementDataMethods<E, B>`
    - `HTMLElementStyleMethods<E, B>`
    - `HTMLElementVisibilityMethods<E, B>`

- `Container<E extends Element, B extends TypedBuilder<E, B>>` has been deprecated. It is replaced by
  `ElementContainerMethods<E, B>`

- `ElementsBag` has been deprecated. It should be replaced by using the standard collection API.

- `Finder<E extends Element, B extends TypedBuilder<E, B>>` has been deprecated. It is replaced by `ElementQueryMethods<E, B>`

- `HasInputElement<E extends HTMLInputElement, B extends TypedBuilder<E, B>>` and
  `InputElementBuilder<E extends HTMLInputElement, B extends TypedBuilder<E, B>>` have been deprecated. They are replaced by
  `HTMLInputElementMethods<E, B>` and `HTMLInputElementBuilder<E, B>`.

- `LazyElement` has been deprecated. It should be replaced by using late initialization in `IsElement.element()`.

#### MathML

- `HasMathMLElement<E extends MathMLElement, B extends TypedBuilder<E, B>>` has been deprecated and is replaced by
  `MathMLElementStyleMethods<E, B>`:

#### SVG

- `HasSVGElement<E extends SVGElement, B extends TypedBuilder<E, B>>` has been deprecated and is replaced by more specific
  interfaces:
    - `SVGElementDataMethods<E, B>`
    - `SVGElementStyleMethods<E, B>`

## [1.6.11] - 2024-11-21

### Upgrades

- Bump Elemental to 1.2.3
- Bump JUnit to 5.11.3

### Removed

- Remove custom clipboard support (`org.jboss.elemento.Clipboard`), which is now available in Elemental 1.2.3 as
  `elemental2.dom.Navigator.clipboard`

## [1.6.10] - 2024-09-22

- Make `Elements.insert*()` methods null-safe

## [1.6.9] - 2024-09-13

### Fixed

- Fix bug in `BodyObserver` removing wrong elements on detach due to a wrong CSS attribute selector. See
  also https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors
    - Wrong selector: `<attribute>*=<id>`
    - Correct selector: `<attribute>~=<id>`

## [1.6.8] - 2024-08-21

### Added

- Add `Elements.isElementInView(HTMLElement)` based on https://gist.github.com/Marco-Prontera/6d9d1a9cead48f44e8dabd8ff5310ecf

## [1.6.7] - 2024-07-30

### Added

- Add `Logger.initFrom(elemental2.dom.Location)`

## [1.6.6] - 2024-07-30

### Changed

- Return a unique label from `Logger.time` methods

### Removed

- Remove deprecated methods:
    - `HasElement.id()`

## [1.6.5] - 2024-07-18

### Added

- Add `Logger.group` and `Logger.time` methods

## [1.6.4] - 2024-07-18

Not an official release. Please don't use!

## [1.6.3] - 2024-07-18

### Changed

- Make `By.selector()` public

### Upgrades

- Bump J2CL processors to 0.7
- Bump JUnit to 5.10.3

## [1.6.2] - 2024-06-09

### Added

- Add `Page.attach()`
- Add `Page.detach()`

## [1.6.1] - 2024-05-15

### Fixed

- Fix bug in attach/detach observer

## [1.6.0] - 2024-05-10

### Added

- Add `ButtonType` enum and `Elements.button(ButtonType)`
- Add `@Loader` annotation and `loader` attribute for `@Route` annotation
- Add options for router annotation processors:

    - `places.package`: The package name of the generated class for the annotated places.
    - `places.class`: The class name of the generated class for the annotated places.

### Changed

- Rename loader classes:

    - `Loader<T>` → `LoadData<T>`
    - `LoadData` → `LoadedData`

- Add support for loaders in router annotation processors
- Change default name of the generated class for the annotated places `GeneratedPlaces` → `AnnotatedPlaces`
- Simplify router annotation processors

## [1.5.1] - 2024-05-08

### Added

- Add methods to modify the text node of an element:

    - `Elements.textNode(elemental2.dom.Element, String)`
    - `Elements.textNode(IsElement<E>, String)`

- Add overloaded methods to bind events in `HasElement`:

    - `HasElement.on(EventType<V,?>, boolean, EventCallbackFn<V>)`
    - `HasElement.on(EventType<V,?>, AddEventListenerOptions, EventCallbackFn<V>)`

- Add `Logger.isEnabled(Level)` to check if a level is enabled for a logger
- Add debug log statements logger to attach/detach implementation

### Fixed

- Fix multiple attach/detach handlers for an element

## [1.5.0] - 2024-05-06

### Added

- Add support for routes with parameters: `/contacts/:contactId`
- Add asynchronous loaders for places
- Add place(s) builder API and nested places

### Changed

- Optimize logging implementation

## [1.4.12] - 2024-04-30

### Added

- Add support for category based log levels
- Export methods to JavaScript to control log levels (for instance from the browser dev tools)

    - `org.jboss.elemento.logger.Logger.setLevel(String level)` - sets the global log level
    - `org.jboss.elemento.logger.Logger.setLevel(String category, String level)` - overrides the log level for one category
    - `org.jboss.elemento.logger.Logger.resetLevel(String category)` - resets the log level for the category to the global log
      level

### Fixed

- Fix logging of objects using `String.valueOf()`

## [1.4.11] - 2024-04-26

### Fixed

- Fix logging methods to include variable arguments.
- Fix place manager to include the query part of the initial URL.

## [1.4.10] - 2024-04-26

### Added

- Logger module with a small, opinionated wrapper around `console.log`.

## [1.4.9] - 2024-04-22

### Added

- Add router processor using Crysknife CDI.

## [1.4.8] - 2024-04-15

### Fixed

- Widen `Elements.textNode()` methods to accept `Element`, instead of `HTMLElement`.

## [1.4.7] - 2024-04-15

### Added

- `PlaceManager.href(String)` and `PlaceManager.href(Place)` to return the href for a route/place.
- `Elements.textNode(HTMLElement)` and `Elements.textNode(IsElement<E>)` to return the text of the first text node (if any) or
  the text content of the element.

## [1.4.6] - 2024-04-14

### Added

- Added `sources` classifier in BOM

## [1.4.5] - 2024-04-13

### Fixed

- Added missing dependency definitions for packaging `gwt-lib` in BOM

## [1.4.4] - 2024-04-13

### Changed

- Migrate from `jar` to `gwt-lib` packaging

## [1.4.3] - 2024-04-08

### Added

- Add parameter `routes.package` for the routes annotation processor to specify the package name of the generated `Routes`
  implementation. If not specified, the package name defaults to `org.jboss.elemento.router`.

## [1.4.2] - 2024-03-20

### Fixed

- Fix API doc issues

## [1.4.1] - 2024-03-20

- Replace Freemarker with JavaPoet

## [1.4.0] - 2024-03-11

### Added

- New module `elemento-flow`
- Samples are now part of Elemento

## [1.3.3] - 2024-03-05

### Added

- Inverted link selector for place manager

## [1.3.2] - 2024-03-05

### Fixed

- Fix 404 handling in place manager

## [1.3.1] - 2024-03-04

### Added

- Add `PlaceManager.base(String)` to set a base URL for the place manager.

## [1.3.0] - 2024-03-01

### Added

#### Router

Elemento now contains a very basic place manager. The place manager is minimal invasive and built around a few simple concepts:

- `Route`: Annotation that can be used to decorate pages. An annotation processor collects all classes annotated with `@Route`
  and generates an implementation of `Routes`.
- `Routes`: Provides a map of places and their corresponding pages.
- `Place`: Data class that represents a place in an application. A place is identified by a route, and can have an optional
  title and a custom root element.
- `Page`: Interface that represents a collection of HTML elements.
- `PlaceManager`: Class responsible for managing the routing and navigation within an application.

## [1.2.13] - 2024-02-06

### Added

- `HasElement.run(Consumer<B>)` to executes code in the context of the builder

### Changed

- Deprecate `HasElement.id()` in favour of `HasElement.uniqueId()`

## [1.2.12] - 2024-01-15

### Added

- Add support for `elemental2.dom.AddEventListenerOptions` in `EventType.bind()` methods
- Add method `Elements.isElementInView(HTMLElement, HTMLElement, boolean)` to check if an element is (partially) visible
  within the viewable area of its container

## [1.2.11] - 2023-12-14

### Added

- Add support for `<picture/>` element
- Add `Scheduler` class with method `debounce(int timeout, Callback callback)`
- Add `ClassList` class to add, remove, replace, toggle and iterate over CSS classes

## [1.2.10] - 2023-12-12

### Added

- Add clipboard support
- Add method to generate UUIDs: `Id.uuid()`
- Add methods to register a resize observer for elements:

    - `Elements.resizeObserver(IsElement<E>, ResizeCallback)`
    - `Elements.resizeObserver(HTMLElement, ResizeCallback)`

## [1.2.9] - 2023-11-30

### Fixed

- Fix bug in `Attachable`

## [1.2.8] - 2023-11-28

### Added

- Add overloaded `style()` methods to `HasSVGElement`:

    - `style(String style)`: Appends the given style to the existing styles of an element.
    - `style(String style, boolean append)`: Appends or sets the given style of an element.
    - `style(String property, int value)`: Sets the given style property on an element.
    - `style(String property, String value)`: Sets the given style property on an element.
    - `style(String property, int value, boolean important)`: Sets the given style property on an element.
    - `style(String property, String value, boolean important)`: Sets the given style property on an element.

- Add methods to debug elements. Both methods return a string representation of the given element with all attributes,
  but without the child elements (only the number of child elements is included).

    - `Elements.toString(IsElement<E>)`
    - `Elements.toString(Element)`

## [1.2.7] - 2023-10-29

### Changed

- Optimize attach/detach implementation

## [1.2.6] - 2023-10-24

### Added

- Add method `Attachable.unregister(HTMLElement)`

### Fixed

- Fix method `HasHTMLElement.style(String property, String value, boolean important)`

## [1.2.5] - 2023-10-24

### Added

- Add overloaded `style()` methods to `HasHTMLElement`:

    - `style(String style)`: Appends the given style to the existing styles of an element.
    - `style(String style, boolean append)`: Appends or sets the given style of an element.
    - `style(String property, int value)`: Sets the given style property on an element.
    - `style(String property, String value)`: Sets the given style property on an element.
    - `style(String property, int value, boolean important)`: Sets the given style property on an element.
    - `style(String property, String value, boolean important)`: Sets the given style property on an element.

## [1.2.4] - 2023-10-18

### Added

- New methods

    - `Elements.isAttached(IsElement<E>)` and
    - `Elements.isAttached(Node)`

  to test if an element/node is attached to the DOM by using
  the [`Node.isConnected`](https://developer.mozilla.org/en-US/docs/Web/API/Node/isConnected) property.

### Changed

- Changed method `HasHTMLElement.style(String)` to append a style definition rather than overwrite the existing styles.

## [1.2.3] - 2023-10-18

Not an official release - please don't use!

## [1.2.2] - 2023-10-10

### Added

- Add method `HasElement.textNode(String text)` to change the text of the first text node while preserving existing
  child elements.

### Fixed

- Remove unused source path from `org.jboss.elemento.Core` GWT module definition

## [1.2.1] - 2023-10-05

### Added

- `HasInputElement.value()`: Method to set the value on input elements

### Deprecated

- `EventType.getName()`: Use the public field `name` instead

## [1.2.0] - 2023-09-11

### Added

- Split Elemento into three modules:
    1. Core: `org.jboss.elemento:elemento-core`
    2. SVG: `org.jboss.elemento:elemento-svg`
    3. MathML: `org.jboss.elemento:elemento-mathml`

### Changed

- Rename classes: `*Html*` -> `*HTML*`

### Removed

- Remove support for GWT.com dependencies, only GWT project dependencies are supported in 1.2.x and above. If you still
  depend on GWT.com, please stick with Elemento 1.1.x

## [1.1.4] - 2023-08-28

### Changed

- Refactor interfaces to better follow the [soc](https://en.wikipedia.org/wiki/Separation_of_concerns) design principle:
    - `HasElement`: Provides methods and default implementations for modifying elements.
    - `HasHtmlElement`: Provides methods and default implementations for modifying HTML elements.
    - `HasInputElement`: Provides methods and default implementations for modifying input elements.
    - `Container`: Provides methods and default implementations for adding elements.
    - `Finder`: Provides methods and default implementations for finding elements.

  This enables better composition of features for builders.

## [1.1.3] - 2023-08-25

### Changed

- Refactor builder classes for simple (empty) and container-like HTML and SVG elements

## [1.1.2] - 2023-08-25

Not an official release - please don't use!

## [1.1.1] - 2023-08-23

### Added

- Add support for basic SVG elements

### Changed

- Rename `HtmlContent*` classes to `HtmlContainer*`

## [1.1.0] - 2023-08-23

Not an official release - please don't use!

## [1.0.15] - 2023-08-20

### Added

- Add methods to set `int` and `boolean` (aria) attributes:
    - `ElementBuilder.attr(String, boolean)`
    - `ElementBuilder.attr(String, int)`
    - `ElementBuilder.aria(String, boolean)`
    - `ElementBuilder.aria(String, int)`

### Changed

- Add [code snippets](https://openjdk.org/jeps/413) to the [API documentation](https://hal.github.io/elemento/).

## [1.0.14] - 2023-08-20

Not an official release - please don't use!

## [1.0.13] - 2023-08-03

### Upgrades

- Upgrade to Java 17
- Bump Elemental2 from 1.1.0 to 1.2.0

## [1.0.12] - 2023-08-03

### Upgrades

- Upgrade to Java 17
- Bump Elemental2 from 1.1.0 to 1.2.0

## [1.0.11] - 2023-01-29

### Changed

- Add safety check to mutation observer

### Upgrades

- Upgrade JUnit to 5.9.2

## [1.0.10] - 2022-03-28

### Changed

- Update GitHub release workflow

### Fixed

- Fix GWT.com related release process

## [1.0.9] - 2022-03-28

### Added

- Add documentation for GWT.com related release

### Fixed

- Fix GWT.com related release process
- Fix wrong GWT.com module names

## [1.0.8] - 2022-03-25

Starting with this release, Elemento comes with GWT.com compatible versions. The GWT.com compatible versions end with
suffix `-gwtcom`. To use it replace

```xml

<dependency>
    <groupId>org.jboss.elemento</groupId>
    <artifactId>elemento-core</artifactId>
    <version>1.0.8</version>
</dependency>
```

with

```xml

<dependency>
    <groupId>org.jboss.elemento</groupId>
    <artifactId>elemento-core</artifactId>
    <version>1.0.8-gwtcom</version>
</dependency>
```

The GWT.com compatible versions differ in the following points:

### Dependencies

#### GWT Project

```xml

<dependency>
    <groupId>org.gwtproject.event</groupId>
    <artifactId>gwt-event</artifactId>
</dependency>
<dependency>
<groupId>org.gwtproject.safehtml</groupId>
<artifactId>gwt-safehtml</artifactId>
</dependency>
```

#### GWT.com

```xml

<dependency>
    <groupId>com.google.gwt</groupId>
    <artifactId>gwt-user</artifactId>
</dependency>
```

### GWT Module

#### GWT Project

```xml

<inherits name="org.gwtproject.event.Event"/>
<inherits name="org.gwtproject.safehtml.SafeHtml"/>
```

#### GWT.com

```xml

<inherits name="com.google.gwt.event.Event"/>
<inherits name="com.google.gwt.safehtml.SafeHtml"/>
```

### Classes

#### GWT Project

```java
import org.gwtproject.safehtml.shared.SafeHtml;
import org.gwtproject.event.shared.HandlerRegistration;
```

#### GWT.com

```java
import com.google.gwt.safehtml.shared.SafeHtml;
import com.google.web.bindery.event.shared.HandlerRegistration;
```

## [1.0.7] - 2022-03-22

### Added

- Add dependabot
- License check
- Checkstyle rules
- Code format and import sorter
- Automate release process using GitHub actions

### Changed

- Update documentation
- Update links to API documentation
- Move away from git flow
- Change default branch `develop` → `main`
- Adjust branch names in CONTRIBUTING.md
- Adjust URLs for distribution management
- Move samples to its own repository: https://github.com/hal/elemento-samples

## [1.0.3] - 2020-11-25

The only change is that the minimal Java version is now Java 1.8.

## [1.0.2] - 2020-10-27

### Upgrades

- Upgrade gwt-safehtml to 1.0.0-RC1

## [1.0.1] - 2020-07-13

### Upgrades

- Upgrade to Elemental2 1.1.0
- Downgrade minimal Java version to 1.8

## [1.0.0] - 2020-05-28

Elemento 1.0.0 introduces many breaking changes:

### Naming

The maven coordinates, GWT module and the packages have changed.

#### Maven

Please use the following maven coordinates:

```xml

<dependency>
    <groupId>org.jboss.elemento</groupId>
    <artifactId>elemento-core</artifactId>
</dependency>
```

#### GWT module

Inherit this GWT module:

```xml

<module>
    <inherits name="org.jboss.elemento.Core"/>
</module>
```

#### Packages

The packages have been flattened and renamed. All Elemento classes are now in the package `org.jboss.elemento`.

### J2CL / GWT3

Elemento works with both J2CL and GWT. No classes from `com.google` are used. The only dependencies you'll need are:

- `com.google.elemental2:elemental2-core` version 1.1.0
- `com.google.elemental2:elemental2-dom` version 1.1.0
- `com.google.elemental2:elemental2-webstorage` version 1.1.0
- `org.gwtproject.event:gwt-event` version 1.0.0-RC1 and
- `org.gwtproject.safehtml:gwt-safehtml` version 1.0.0-RC1

You can use Elemento with GWT 2.8, 2.9 or J2CL. See the [samples](https://github.com/hal/elemento-samples) for more
details about how to setup your dependencies.

### Templating

The templating part has been moved to [crysknife](https://github.com/crysknife-io/crysknife). Crysknife is a CDI
implementation for J2CL / GWT3. Crysknife already contains most of the templating code of Elemento, integrates nicely
with CDI and offers some extra features like GSS support on top of that.

The motivation behind this is that we don't want to have two very similar and competing template solutions.

### Deprecations

All classes and methods marked as `@deprecated` have been removed:

#### Classes

- `org.jboss.gwt.elemento.core.Widgets`
- `org.jboss.gwt.elemento.core.HasElements`

#### Methods

- `org.jboss.gwt.elemento.core.builder.ElementsBuilder.get()`
- `org.jboss.gwt.elemento.core.builder.ElementsBuilder.css(String, boolean)`
- `org.jboss.gwt.elemento.core.builder.HtmlContent.addAll(HasElements)`
- `org.jboss.gwt.elemento.core.LazyElement.asElement()`
- `org.jboss.gwt.elemento.core.Elements.elements()`

### Backward Compatibility

Support for GWT widgets as defined by `com.google.gwt:gwt-user` has been dropped. If you really need support for
widgets, you have to stick with
the [latest 0.9.x-gwt2 version](https://search.maven.org/artifact/org.jboss.gwt.elemento/elemento-core/0.9.6-gwt2/gwt-lib).

## [0.9.6] - 2019-11-27

### Added

- New method to select multiple classnames

### Fixed

- Fix endless loop for attachables

### Removed

- Remove method to wrap a body element (there's only one body element)

## [0.9.5] - 2019-11-14

### Added

- `Attachable` interface
- Typesafe CSS selector API
- Wrap HTML elements as builders
- Generate unique IDs
- Overloaded methods for IsElement

### Changed

- Unified API: All classes which represent an element implement `IsElement<E extends HTMLElement>` and have
  a `E element()` method.

## [0.9.3] - 2019-10-17

### Added

- PR #72: Add readOnly, disabled, required and placeholder methods in InputBuilder (thanks @alejandrocq)

### Upgrades

- Fix #71: Upgrade npm dependencies for todomvc-app-css and todomvc-common (thanks @cristian-spiescu for reporting)

## [0.9.2] - 2019-10-17

### Added

- Add methods to generate unique IDs
- Add search event type

### Upgrades

- Upgrade to JUnit 5

## [0.9.1] - 2019-07-02

### Fixed

- Fixes #69 (thanks @ibaca)

## [0.9.0] - 2018-12-05

This release adds one breaking change, some minor enhancements, and several deprecations. The main focus is to clean up
the API for Elemento 1.0.

### Added

- `ElementsBuilder` is now a real builder and implements `TypedBuilder<Iterable<HTMLElement>, ElementsBuilder>`.

### Changed

- `IsElement<E extends HTMLElement>`: The method to return the element was renamed from asElement() to element().
- `Elements.collect()` replaces `Elements.elements()`

### Deprecated

- `HasElements`: Will be removed w/o replacement. Please use `Iterable<HTMLElement>` instead.
- `ElementBuilder.asElement()` and `ElementBuilder.element()`: In order to cleanup the API and to avoid multiple methods
  which do (or return) the same thing, builders won't no longer implement `IsElement<E>`. Please use `get()` instead. A
  builder is a builder and not an element.
- `LazyElement.asElement()`: Please use `LazyElement.element()` instead.
- `ElementsBuilder.addAll(HasElements)`: Please use `ElementsBuilder.addAll(Iterable)` instead.
- `HtmlContent.addAll(HasElements)`: Please use `HtmlContent.addAll(Iterable)` instead.
- `Elements.elements()`: Please use `Elements.collect()` instead.
- `Widgets.asElement(IsWidget)`: Please use `Widgets.element(IsWidget)` instead.
- `Widgets.asElement(Widget)`: Please use `Widgets.element(Widget)` instead.
- `Widgets.asElement(com.google.gwt.dom.client.Element)`: Please
  use `Widgets.element(com.google.gwt.dom.client.Element)` instead.
- `Widgets.asWidget(IsElement)`: Please use `Widgets.widget(IsElement)` instead.
- `Widgets.asWidget(HTMLElement)`: Please use `Widgets.widget(HTMLElement)` instead.

## [0.8.7] - 2018-09-12

### Added

- Add message and visibilitychange events (thanks @ibaca)

### Fixed

- Fix #65: Chrome 69 breaks org.jboss.gwt.elemento.core.BodyObserver (thanks @mseele)

## [0.8.6] - 2018-07-11

### Added

- Add load event (thanks @mseele)

### Fixed

- Fix for #61: For each loop in body observer throws class cast exception in Chrome

## [0.8.5] - 2018-07-06

### Added

- New methods in `org.jboss.gwt.elemento.core.Elements` to get notified when an element is added to and removed from the
  DOM

## [0.8.4] - 2018-07-04

### Fixed

- Fix for IE11 which does not support multiple arguments for classList.add() & classList.remove() (thanks @mseele)

## [0.8.3] - 2018-06-19

### Fixed

- Fix safe HTML artefact name (thanks @vegegoku)

## [0.8.2] - 2018-04-25

### Added

- Add more insert before/after utility methods to Elements class (thanks @anbuck)

### Changed

- Depends on the ported gwt-event `org.gwtproject.event:gwt-event` (thanks @vegegoku)

## [0.8.1] - 2018-03-26

No code changes compared to 0.8.0, but implements the new versions & branches as outlined in
the [J2CL / GWT3 documentation](https://github.com/hal/elemento#j2cl--gwt3.

## [0.8.0] - 2018-03-22

### Added

- Prepare Elemento for J2CL / GWT3

### Changed

- Elemento (core & template) no longer depends on `gwt-user`
- Replace safe HTML implementation with https://github.com/Vertispan/gwt-safehtml/
- Move widget related code to new maven module `elemento-widget`

## [0.7.1] - 2018-03-02

### Fixed

- Fix #46: Internet Explorer JavaScriptException when using template expressions

## [0.7.0] - 2017-12-11

### Changed

- Split maven module `elemento-template` into `elemento-template-api` and `elemento-template-processor`

## [0.6.2] - 2017-12-07

### Added

- Add safe HTML support for expressions

### Changed

- Update documentation

### Upgrades

- Upgrade GWT to 2.8.2 and GWT maven plugin to 1.0-rc-9
- Upgrade Elemental to 1.0.0-beta-3 (thanks to @niloc132)

## [0.6.1] - 2017-09-19

### Added

- Add support for Dagger (thanks @tyler-ham)
- Include TodoMVC sample based on Dagger and HTML templates (thanks @tyler-ham)

### Changed

- Update documentation

## [0.6.0] - 2017-09-18

### Changed

- Close #31: Replace Handlebars like expressions `{{foo}}` with Freemarker like expressions `${foo}`
  Bugfixes

### Fixed

- Fix #32: Use type parameter of IsElement in generated code
- Fix #33: Adjust maven shade plugin configuration
- Fix #34: Remove usage of GWT.create() and com.google.gwt.safehtml.shared.SafeHtml

### Removed

- Remove Guava dependency

## [0.5.2] - 2017-09-06

### Added

- Add support for custom elements in `@DataElement` annotations
- Add public factory of `EventType` so users can define their own events

### Changed

- Update documentation

## [0.5.1] - 2017-07-25

### Added

- Add Errai sample
- Add code to verify that subtypes of `HTMLElement` are mapped to the right HTML elements

### Changed

- Rename `TypeBuilder.asElement()` to `TypeBuilder.get()`
- Change `HtmlContent.add(HtmlElement)` to `HtmlContent.add(Node)`
- Update documentation

## [0.5.0] - 2017-07-11

First release to be available at Maven Central
Switch to Apache2 license

### Added

- Add elemental2 inherits

### Changed

- Auto-detect GIN on template processor

### Removed

- Remove dependencies
    - Guava
    - JetBrains annotations

## [0.4.2] - 2017-06-26

### Added

- Add body builder
- Add a predicate and function to filter and map from nodes and/or elements to HTML elements
- Add method to create img tag with src
- Add builder for HTML input elements
- Add checks when adding CSS classes
- New `org.jboss.gwt.elemento.core.Key` enum for well-known keys
- Add event type storage

### Changed

- Revisit iterate & stream methods
- Enhance documentation

<!--
## Template

### Added

- for new features

### Changed

- for changes in existing functionality

### Fixed

- for any bug fixes

### Security

- in case of vulnerabilities

### Deprecated

- for soon-to-be removed features

### Removed

- for now removed features

### Upgrades

- for dependency upgrades
-->

[Unreleased]: https://github.com/hal/elemento/compare/v1.7.1...HEAD
[1.7.1]: https://github.com/hal/elemento/compare/v1.7.0...v1.7.1
[1.7.0]: https://github.com/hal/elemento/compare/v1.6.11...v1.7.0
[1.6.11]: https://github.com/hal/elemento/compare/v1.6.10...v1.6.11
[1.6.10]: https://github.com/hal/elemento/compare/v1.6.9...v1.6.10
[1.6.9]: https://github.com/hal/elemento/compare/v1.6.8...v1.6.9
[1.6.8]: https://github.com/hal/elemento/compare/v1.6.7...v1.6.8
[1.6.7]: https://github.com/hal/elemento/compare/v1.6.6...v1.6.7
[1.6.6]: https://github.com/hal/elemento/compare/v1.6.5...v1.6.6
[1.6.5]: https://github.com/hal/elemento/compare/v1.6.4...v1.6.5
[1.6.4]: https://github.com/hal/elemento/compare/v1.6.3...v1.6.4
[1.6.3]: https://github.com/hal/elemento/compare/v1.6.2...v1.6.3
[1.6.2]: https://github.com/hal/elemento/compare/v1.6.1...v1.6.2
[1.6.1]: https://github.com/hal/elemento/compare/v1.6.0...v1.6.1
[1.6.0]: https://github.com/hal/elemento/compare/v1.5.1...v1.6.0
[1.5.1]: https://github.com/hal/elemento/compare/v1.5.0...v1.5.1
[1.5.0]: https://github.com/hal/elemento/compare/v1.4.12...v1.5.0
[1.4.12]: https://github.com/hal/elemento/compare/v1.4.11...v1.4.12
[1.4.11]: https://github.com/hal/elemento/compare/v1.4.10...v1.4.11
[1.4.10]: https://github.com/hal/elemento/compare/v1.4.9...v1.4.10
[1.4.9]: https://github.com/hal/elemento/compare/v1.4.8...v1.4.9
[1.4.8]: https://github.com/hal/elemento/compare/v1.4.7...v1.4.8
[1.4.7]: https://github.com/hal/elemento/compare/v1.4.6...v1.4.7
[1.4.6]: https://github.com/hal/elemento/compare/v1.4.5...v1.4.6
[1.4.5]: https://github.com/hal/elemento/compare/v1.4.4...v1.4.5
[1.4.4]: https://github.com/hal/elemento/compare/v1.4.3...v1.4.4
[1.4.3]: https://github.com/hal/elemento/compare/v1.4.2...v1.4.3
[1.4.2]: https://github.com/hal/elemento/compare/v1.4.1...v1.4.2
[1.4.1]: https://github.com/hal/elemento/compare/v1.4.0...v1.4.1
[1.4.0]: https://github.com/hal/elemento/compare/v1.3.3...v1.4.0
[1.3.3]: https://github.com/hal/elemento/compare/v1.3.2...v1.3.3
[1.3.2]: https://github.com/hal/elemento/compare/v1.3.1...v1.3.2
[1.3.1]: https://github.com/hal/elemento/compare/v1.3.0...v1.3.1
[1.3.0]: https://github.com/hal/elemento/compare/v1.2.13...v1.3.0
[1.2.13]: https://github.com/hal/elemento/compare/v1.2.12...v1.2.13
[1.2.12]: https://github.com/hal/elemento/compare/v1.2.11...v1.2.12
[1.2.11]: https://github.com/hal/elemento/compare/v1.2.10...v1.2.11
[1.2.10]: https://github.com/hal/elemento/compare/v1.2.9...v1.2.10
[1.2.9]: https://github.com/hal/elemento/compare/v1.2.8...v1.2.9
[1.2.8]: https://github.com/hal/elemento/compare/v1.2.7...v1.2.8
[1.2.7]: https://github.com/hal/elemento/compare/v1.2.6...v1.2.7
[1.2.6]: https://github.com/hal/elemento/compare/v1.2.5...v1.2.6
[1.2.5]: https://github.com/hal/elemento/compare/v1.2.4...v1.2.5
[1.2.4]: https://github.com/hal/elemento/compare/v1.2.3...v1.2.4
[1.2.3]: https://github.com/hal/elemento/compare/v1.2.2...v1.2.3
[1.2.2]: https://github.com/hal/elemento/compare/v1.2.1...v1.2.2
[1.2.1]: https://github.com/hal/elemento/compare/v1.2.0...v1.2.1
[1.2.0]: https://github.com/hal/elemento/compare/v1.1.4...v1.2.0
[1.1.4]: https://github.com/hal/elemento/compare/v1.1.3...v1.1.4
[1.1.3]: https://github.com/hal/elemento/compare/v1.1.2...v1.1.3
[1.1.2]: https://github.com/hal/elemento/compare/v1.1.1...v1.1.2
[1.1.1]: https://github.com/hal/elemento/compare/v1.1.0...v1.1.1
[1.1.0]: https://github.com/hal/elemento/compare/v1.0.15...v1.1.0
[1.0.15]: https://github.com/hal/elemento/compare/v1.0.14...v1.0.15
[1.0.14]: https://github.com/hal/elemento/compare/v1.0.13...v1.0.14
[1.0.13]: https://github.com/hal/elemento/compare/v1.0.12...v1.0.13
[1.0.12]: https://github.com/hal/elemento/compare/v1.0.11...v1.0.12
[1.0.11]: https://github.com/hal/elemento/compare/v1.0.10...v1.0.11
[1.0.10]: https://github.com/hal/elemento/compare/v1.0.9...v1.0.10
[1.0.9]: https://github.com/hal/elemento/compare/v1.0.8...v1.0.9
[1.0.8]: https://github.com/hal/elemento/compare/v1.0.7...v1.0.8
[1.0.7]: https://github.com/hal/elemento/compare/v1.0.3...v1.0.7
[1.0.3]: https://github.com/hal/elemento/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/hal/elemento/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/hal/elemento/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/hal/elemento/compare/v0.9.6...v1.0.0
[0.9.6]: https://github.com/hal/elemento/compare/v0.9.5...v0.9.6
[0.9.5]: https://github.com/hal/elemento/compare/v0.9.3...v0.9.5
[0.9.3]: https://github.com/hal/elemento/compare/v0.9.2...v0.9.3
[0.9.2]: https://github.com/hal/elemento/compare/v0.9.1...v0.9.2
[0.9.1]: https://github.com/hal/elemento/compare/v0.9.0...v0.9.1
[0.9.0]: https://github.com/hal/elemento/compare/v0.8.7...v0.9.0
[0.8.7]: https://github.com/hal/elemento/compare/v0.8.6...v0.8.7
[0.8.6]: https://github.com/hal/elemento/compare/v0.8.5...v0.8.6
[0.8.5]: https://github.com/hal/elemento/compare/v0.8.4...v0.8.5
[0.8.4]: https://github.com/hal/elemento/compare/v0.8.3...v0.8.4
[0.8.3]: https://github.com/hal/elemento/compare/v0.8.2...v0.8.3
[0.8.2]: https://github.com/hal/elemento/compare/v0.8.1...v0.8.2
[0.8.1]: https://github.com/hal/elemento/compare/v0.8.0...v0.8.1
[0.8.0]: https://github.com/hal/elemento/compare/v0.7.1...v0.8.0
[0.7.1]: https://github.com/hal/elemento/compare/v0.7.0...v0.7.1
[0.7.0]: https://github.com/hal/elemento/compare/v0.6.2...v0.7.0
[0.6.2]: https://github.com/hal/elemento/compare/v0.6.1...v0.6.2
[0.6.1]: https://github.com/hal/elemento/compare/v0.6.0...v0.6.1
[0.6.0]: https://github.com/hal/elemento/compare/v0.5.2...v0.6.0
[0.5.2]: https://github.com/hal/elemento/compare/v0.5.1...v0.5.2
[0.5.1]: https://github.com/hal/elemento/compare/v0.5.0...v0.5.1
[0.5.0]: https://github.com/hal/elemento/compare/v0.4.2...v0.5.0
[0.4.2]: https://github.com/hal/elemento/compare/vTemplate...v0.4.2
