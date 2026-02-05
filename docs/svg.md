# SVG

To create SVG elements, add the following dependency to your POM:

```xml
<dependency>
    <groupId>org.jboss.elemento</groupId>
    <artifactId>elemento-svg</artifactId>
    <version>2.4.8</version>
</dependency>
```

In your GWT module, inherit from `org.jboss.elemento.SVG`:

```xml
<module>
    <inherits name="org.jboss.elemento.SVG"/>
</module>
```

Finally, use the static methods in [
`org.jboss.elemento.svg.SVG`](https://hal.github.io/elemento/apidocs/org/jboss/elemento/svg/SVG.html) to create SVG elements.
