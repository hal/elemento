# Changes in 1.0.0

This document summarizes the changes in Elemento 1.0.0.

## Naming

The maven coordinates, GWT module and the packages have changed.

### Maven

Please use the following maven coordinates:

```xml
<dependency>
    <groupId>org.jboss.elemento</groupId>
    <artifactId>elemento-core</artifactId>
    <version>1.0.0</version>
</dependency>
```

### GWT module 

Inherit this GWT module:

```xml
<module>
    <inherits name="org.jboss.elemento.Core"/>
</module>
```

### Packages 

The packages have been flatted and renamed. All Elemento classes are now in the package `org.jboss.elemento`.

## J2CL / GWT3

Elemento works with both J2CL and GWT 3. No classes from `com.google` are used. There are [samples](samples) which show how to use Elemento for the different environments. 

## Templating

The templating part has been moved to [crysknife](https://github.com/treblereel/crysknife/). Crysknife is a CDI implementation for J2CL / GWT3. Crysknife already contains most of the templating code of Elemento, integrates nicely with CDI and offers some extra features like GSS support on top of that.

The motivation behind this is that we don't want to have two very similar and competing template solutions.

## Deprecations

All classes and methods marked as `@deprecated` have been removed:

### Classes

- `org.jboss.gwt.elemento.core.Widgets`
- `org.jboss.gwt.elemento.core.HasElements`

### Methods

- `org.jboss.gwt.elemento.core.builder.ElementsBuilder.get()`
- `org.jboss.gwt.elemento.core.builder.ElementsBuilder.css(String, boolean)`
- `org.jboss.gwt.elemento.core.builder.HtmlContent.addAll(HasElements)`
- `org.jboss.gwt.elemento.core.LazyElement.asElement()`
- `org.jboss.gwt.elemento.core.Elements.elements()`

## Backward Compatibility

Support for GWT widgets has been dropped. If you really need support for widgets, you have to stick with the [latest 0.9.x-gwt2 version](https://search.maven.org/artifact/org.jboss.gwt.elemento/elemento-core/0.9.6-gwt2/gwt-lib).