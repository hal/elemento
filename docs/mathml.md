# MathML

To create MathML elements, add the following dependency to your POM:

```xml
<dependency>
    <groupId>org.jboss.elemento</groupId>
    <artifactId>elemento-mathml</artifactId>
    <version>1.7.0</version>
</dependency>
```

In your GWT module, inherit from `org.jboss.elemento.MathML`:

```xml
<module>
    <inherits name="org.jboss.elemento.MathML"/>
</module>
```

Finally, use the static methods in [`org.jboss.elemento.mathml.MathML`](https://hal.github.io/elemento/apidocs/org/jboss/elemento/mathml/MathML.html) to create MathML elements.
