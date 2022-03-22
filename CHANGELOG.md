# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Changed

- Update links to API documentation

## [1.0.6] - 2022-03-22

- Fix release workflow
- Adjust URLs for distribution management

## [1.0.5] - 2022-03-22

### Changed

- Update documentation

## [1.0.4] - 2022-03-22

### Added

- Add dependabot
- License check
- Checkstyle rules
- Code format and import sorter
- Automate release process using GitHub actions

### Changed

- Move away from git flow
- Change default branch `develop` → `main`
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

You can use Elemento with GWT 2.8, 2.9 or J2CL. See the [samples](https://github.com/hal/elemento-samples) for more details about how to setup your dependencies.

### Templating

The templating part has been moved to [crysknife](https://github.com/crysknife-io/crysknife). Crysknife is a CDI implementation for J2CL / GWT3. Crysknife already contains most of the templating code of Elemento, integrates nicely with CDI and offers some extra features like GSS support on top of that.

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

Support for GWT widgets as defined by `com.google.gwt:gwt-user` has been dropped. If you really need support for widgets, you have to stick with the [latest 0.9.x-gwt2 version](https://search.maven.org/artifact/org.jboss.gwt.elemento/elemento-core/0.9.6-gwt2/gwt-lib).

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

- Unified API: All classes which represent an element implement `IsElement<E extends HTMLElement>` and have a `E element()` method.

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

This release adds one breaking change, some minor enhancements, and several deprecations. The main focus is to clean up the API for Elemento 1.0.

### Added

- `ElementsBuilder` is now a real builder and implements `TypedBuilder<Iterable<HTMLElement>, ElementsBuilder>`.

### Changed

- `IsElement<E extends HTMLElement>`: The method to return the element was renamed from asElement() to element().
- `Elements.collect()` replaces `Elements.elements()`

### Deprecated

- `HasElements`: Will be removed w/o replacement. Please use `Iterable<HTMLElement>` instead.
- `ElementBuilder.asElement()` and `ElementBuilder.element()`: In order to cleanup the API and to avoid multiple methods which do (or return) the same thing, builders won't no longer implement `IsElement<E>`. Please use `get()` instead. A builder is a builder and not an element.
- `LazyElement.asElement()`: Please use `LazyElement.element()` instead.
- `ElementsBuilder.addAll(HasElements)`: Please use `ElementsBuilder.addAll(Iterable)` instead.
- `HtmlContent.addAll(HasElements)`: Please use `HtmlContent.addAll(Iterable)` instead.
- `Elements.elements()`: Please use `Elements.collect()` instead.
- `Widgets.asElement(IsWidget)`: Please use `Widgets.element(IsWidget)` instead.
- `Widgets.asElement(Widget)`: Please use `Widgets.element(Widget)` instead.
- `Widgets.asElement(com.google.gwt.dom.client.Element)`: Please use `Widgets.element(com.google.gwt.dom.client.Element)` instead.
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

- New methods in `org.jboss.gwt.elemento.core.Elements` to get notified when an element is added to and removed from the DOM

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

No code changes compared to 0.8.0, but implements the new versions & branches as outlined in the [J2CL / GWT3 documentation](https://github.com/hal/elemento#j2cl--gwt3.

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

[Unreleased]: https://github.com/hal/elemento/compare/v1.0.6...HEAD
[1.0.6]: https://github.com/hal/elemento/compare/v1.0.5...v1.0.6
[1.0.5]: https://github.com/hal/elemento/compare/v1.0.4...v1.0.5
[1.0.4]: https://github.com/hal/elemento/compare/v1.0.3...v1.0.4
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
