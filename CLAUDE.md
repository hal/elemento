# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```bash
# Build (compile + test, no formatting/checking)
./mvnw verify

# Build BOM first if needed (e.g., fresh clone)
./mvnw install -f bom/pom.xml && ./mvnw verify

# Run a single test
./mvnw -pl router -Dtest=PlaceTest#matchRouteWithParams test

# Format code (license headers, editorconfig, import sorting)
./format.sh

# Check code (enforcer, checkstyle, license, editorconfig, imports)
./check.sh

# Generate API docs
./apidoc.sh

# Generate dependency graph
./depgraph.sh
```

Formatting and checking plugins are **not** part of the default build — they only run via the `format` and `check` Maven profiles (or the corresponding scripts).

## Architecture

Elemento is a Java library for building web UIs with GWT and J2CL. It provides a fluent builder API over Elemental2 DOM bindings.

### Module Dependency Graph

```
core ──► logger
  │
  ├── flow (async tasks: parallel, sequential, repeat)
  ├── intl (i18n: number/date/list/duration formatting)
  ├── mathml (MathML element builders)
  ├── svg (SVG element builders)
  └── router ──► core, logger
        └── router-processor (annotation processor for @Route)
            ├── router-processor-common (shared processor code)
            └── router-processor-cdi (CDI variant)
```

Supporting modules:
- `build-config` — license headers, checkstyle suppressions
- `code-parent` — shared dependency/plugin management for code modules
- `bom` — Bill of Materials (built separately in `bom/`)

### GWT/J2CL Packaging

Code modules use `gwt-lib` packaging via `gwt-maven-plugin`. Each has a `src/main/module.gwt.xml` declaring the GWT module. The router processors use standard `jar` packaging with `maven-shade-plugin` to minimize dependencies.

### Key Patterns

**Builder API** (`core`): Fluent element creation — `Elements.div().id("x").css("cls").add(span().textContent("hi"))`. Custom components implement `IsElement<E>` to expose their root element.

**CSS Selectors** (`By` class): Type-safe selector building — `By.id("main").desc(By.classname("item"))`.

**Router**: `PlaceManager` handles client-side routing. Pages are annotated with `@Route("/path/:param")` (supports optional params with `?` suffix). The annotation processor generates routing metadata at compile time.

**Flow**: Promise-based async composition — `Flow.parallel()`, `Flow.sequential()`, `Flow.repeat()`.

## Code Style

- Java 21, 128-char line length, 4-space indent
- Import order: `java, javax, jakarta, org, io, com` (enforced by impsort)
- WildFly checkstyle configuration
- Apache 2.0 license headers on all source files
- Checkstyle excludes generated types: `*$logger.java`, `*$bundle.java`, `intl/*Format.java`, `intl/*Options.java`

## Project Conventions

- Parent POM: `org.jboss:jboss-parent:53`
- Maven 3.9.9+ and Java 21+ required (enforced by maven-enforcer-plugin)
- Demo code goes in `src/demo/java/` (added as test sources, excluded from javadoc)
- Samples are optional: `-P samples` to include them in the build
- API docs are optional: `-P apidoc` to include them
