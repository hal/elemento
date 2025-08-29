# Get started

Elemento is available in [Maven Central](https://search.maven.org/search?q=g:org.jboss.elemento%20AND%20a:elemento-core). The
easiest way is to import its BOM

```xml
<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>org.jboss.elemento</groupId>
            <artifactId>elemento-bom</artifactId>
            <version>2.1.0</version>
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
