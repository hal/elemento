[![Verify Codebase](https://github.com/hal/elemento/actions/workflows/verify.yml/badge.svg)](https://github.com/hal/elemento/actions/workflows/verify.yml) [![Javadoc](https://img.shields.io/badge/JavaDoc-Online-green)](https://hal.github.io/elemento/apidocs/) [![Maven Central](https://img.shields.io/maven-central/v/org.jboss.elemento/elemento-core)](https://search.maven.org/search?q=g:org.jboss.elemento%20AND%20a:elemento-core) ![GWT3/J2CL compatible](https://img.shields.io/badge/GWT3/J2CL-compatible-brightgreen.svg) [![Chat on Gitter](https://badges.gitter.im/hal/elemento.svg)](https://gitter.im/hal/elemento) [![](https://tokei.rs/b1/github/hal/elemento)](https://github.com/hal/elemento).

# Elemento

Elemento simplifies working with [Elemental2](https://github.com/google/elemental2). In a nutshell, Elemento brings the following features to the table:

- Type safe [builders](https://hal-console.gitbook.io/elemento/builder-api), [event handlers](https://hal-console.gitbook.io/elemento/event-handlers) and [CSS selectors](https://hal-console.gitbook.io/elemento/selectors)
- [Helper methods](https://hal-console.gitbook.io/elemento/dom) to manipulate the DOM tree
- Simple, non-invasive, slash-based [router](https://hal-console.gitbook.io/elemento/router) with support for parameters and asynchronous loaders (`/a/:b/c`)
- Execute [asynchronous tasks](https://hal-console.gitbook.io/elemento/flow) in parallel, in sequence, or as long as a certain condition is met.
- Thin [logging](https://hal-console.gitbook.io/elemento/logger) wrapper around `console.log` using categories, log levels, and a predefined log format.
- Ready to be used with [GWT](https://www.gwtproject.org/) and [J2CL](https://github.com/google/j2cl)
- Minimal dependencies
    - [Elemental2](https://github.com/google/elemental2) (`elemental2-core`, `elemental2-dom` and `elemental2-webstorage`)
    - GWT ([`org.gwtproject.event:gwt-event`](https://github.com/gwtproject/gwt-event)
      and [`org.gwtproject.safehtml:gwt-safehtml`](https://github.com/gwtproject/gwt-safehtml))

# Get Help

If you need help feel free to contact us at Gitter, browse the API documentation or file an issue.

- [Documentation](https://hal-console.gitbook.io/elemento/)
- [Gitter Channel](https://gitter.im/hal/elemento)
- [API documentation](https://hal.github.io/elemento/apidocs/)
- [Issues](https://github.com/hal/elemento/issues)

# Contributing

If you want to contribute to Elemento, please follow the steps in [contribution](CONTRIBUTING.md).
