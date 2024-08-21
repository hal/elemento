# MathML

To create MathML elements, add the following dependency to your POM:

```xml
<dependency>
    <groupId>org.jboss.elemento</groupId>
    <artifactId>elemento-mathml</artifactId>
    <version>1.6.8</version>
</dependency>
```

In your GWT module, inherit from `org.jboss.elemento.MathML`:

```xml
<module>
    <inherits name="org.jboss.elemento.MathML"/>
</module>
```

Finally, use the static methods in `org.jboss.elemento.mathml.MathML` to create MathML elements.
