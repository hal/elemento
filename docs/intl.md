# Internationalization

To use classes from the [`Intl`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl) JavaScript API, add the following dependency to your POM:

```xml
<dependency>
    <groupId>org.jboss.elemento</groupId>
    <artifactId>elemento-intl</artifactId>
    <version>2.3.2</version>
</dependency>
```

In your GWT module, inherit from `org.jboss.elemento.Intl`:

```xml
<module>
    <inherits name="org.jboss.elemento.SVG"/>
</module>
```
