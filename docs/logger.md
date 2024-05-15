# Logger

Elemento contains a small wrapper around `console.log` that uses categories, log levels, and a predefined log format.

The different log methods delegate to the corresponding methods in `console`:

1. `Logger.error(String, Object... params)` → [`console.error()`](https://developer.mozilla.org/en-US/docs/Web/API/console/error\_static)
2. `Logger.warn(String, Object... params)` → [`console.warn()`](https://developer.mozilla.org/en-US/docs/Web/API/console/warn\_static)
3. `Logger.info(String, Object... params)` → [`console.info()`](https://developer.mozilla.org/en-US/docs/Web/API/console/info\_static)
4. `Logger.debug(String, Object... params)` → [`console.debug()`](https://developer.mozilla.org/en-US/docs/Web/API/console/debug\_static)

## Get loggers

To get a logger, use `Logger.getLogger(String category)`.

```java
package org.acme;

public class Foo {

    private static final Logger logger = Logger.getLogger(Foo.class.getName());
}
```

You can use an arbitrary string as a category. By using a hierarchical category, you can override subcategories. [String substitutions](https://developer.mozilla.org/en-US/docs/Web/API/console#using\_string\_substitutions) are supported, and you can pass a variable list of parameters to the log methods.

The log level is set globally for all categories using `Logger.setLevel(Level level)`. You can override the level for one category using `Logger.setLevel(String category, Level level)`. To reset a category, use `Logger.resetLevel(String category)`. If the category contains `.`, it is interpreted hierarchically. This means that if the category `org.jboss` is overridden, this is also applied to all subcategories (unless overridden otherwise).

## Log format

The log format is predefined as

```
HH:mm:ss.SSS <level> [<category>] <message>
```

and cannot be customized. The package names are shortened if the category is a fully qualified class name. In any case, the category is trimmed and right-aligned.

## Controlling log levels from JavaScript

The logger module exports some methods with slightly adjusted signatures to JavaScript. You can use them, for instance, in the browser dev tools to control the global and category-based log levels:

* `org.jboss.elemento.logger.Logger.setLevel(String level)`\
  Sets the global log level
* `org.jboss.elemento.logger.Logger.setLevel(String category, String level)`\
  Overrides the log level for one category
* `org.jboss.elemento.logger.Logger.resetLevel(String category)`\
  Resets the log level for the category to the global log level

Please use the fully qualified name!

## Dependency

Add the following dependency to use `elemento-logger`:

```xml

<dependency>
    <groupId>org.jboss.elemento</groupId>
    <artifactId>elemento-logger</artifactId>
    <version>1.6.1</version>
</dependency>
```

In your GWT module, inherit from `org.jboss.elemento.Logger`:

```xml

<module>
    <inherits name="org.jboss.elemento.Logger"/>
</module>
```
