[![Verify Codebase](https://github.com/hal/elemento/actions/workflows/verify.yml/badge.svg)](https://github.com/hal/elemento/actions/workflows/verify.yml) [![Javadoc](https://img.shields.io/badge/JavaDoc-Online-green)](https://hal.github.io/elemento/apidocs/) [![Maven Central](https://img.shields.io/maven-central/v/org.jboss.elemento/elemento-core)](https://search.maven.org/search?q=g:org.jboss.elemento%20AND%20a:elemento-core) ![GWT3/J2CL compatible](https://img.shields.io/badge/GWT3/J2CL-compatible-brightgreen.svg) [![Chat on Gitter](https://badges.gitter.im/hal/elemento.svg)](https://gitter.im/hal/elemento)

# Elemento

Elemento simplifies working with [Elemental2](https://github.com/google/elemental2). In a nutshell Elemento brings the following features to the table:

- Type safe [builders](#builder-api), [event handlers](#event-handlers) and [CSS selectors](#typesafe-css-selectors)
- [Helper methods](#goodies) to manipulate the DOM tree
- Execute [asynchronous tasks](#flow) in parallel, in sequence or as long as a certain condition is met.
- Simple, non-invasive, slash-based [router](#router) with support for parameters and asynchronous loaders (`/a/:b/c`)
- Thin [logging](#logger) wrapper around `console.log` using categories, log levels, and a predefined log format.
- Ready to be used with [GWT](https://www.gwtproject.org/) and [J2CL](https://github.com/google/j2cl)
- Minimal dependencies
    - [Elemental2](https://github.com/google/elemental2) (`elemental2-core`, `elemental2-dom` and `elemental2-webstorage`)
    - GWT ([`org.gwtproject.event:gwt-event`](https://github.com/gwtproject/gwt-event)
      and [`org.gwtproject.safehtml:gwt-safehtml`](https://github.com/gwtproject/gwt-safehtml))

# Get Started

Elemento is available in [Maven Central](https://search.maven.org/search?q=g:org.jboss.elemento%20AND%20a:elemento-core). The easiest way is to import its BOM

```xml

<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>org.jboss.elemento</groupId>
            <artifactId>elemento-bom</artifactId>
            <version>1.6.0</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>
```

and add a dependency to either

```xml

<dependency>
    <groupId>org.jboss.elemento</groupId>
    <artifactId>elemento-core</artifactId>
    <type>gwt-lib</type>
</dependency>
```

or

```xml

<dependency>
    <groupId>org.jboss.elemento</groupId>
    <artifactId>elemento-core</artifactId>
</dependency>
```

depending on your stack. If you're using GWT, inherit from `org.jboss.elemento.Core`:

```xml

<module>
    <inherits name="org.jboss.elemento.Core"/>
</module>
```

All features are described in detail here: https://hal-console.gitbook.io/elemento/

# Contributing

If you want to contribute to Elemento, please follow the steps in [contribution](CONTRIBUTING.md).

# Get Help

If you need help feel free to contact us at Gitter, browse the API documentation or file an issue.

- [Gitter Channel](https://gitter.im/hal/elemento)
- [API documentation](https://hal.github.io/elemento/apidocs/)
- [Issues](https://github.com/hal/elemento/issues)
