# Typesafe CSS Selectors

Elemento provides a typesafe selector API. It can be used to express simple CSS selector like `.class` or `#id` up to complex selectors like

```css
#main [data-list-item|=foo] a[href^="http://"] > .fas.fa-check, .external[hidden]
```

This selector can be created with

```java
import org.jboss.elemento.By;

import static org.jboss.elemento.By.AttributeOperator.CONTAINS_TOKEN;
import static org.jboss.elemento.By.AttributeOperator.STARTS_WITH;

By selector = By.group(
        By.id("main")
                .desc(By.data("listItem", CONTAINS_TOKEN, "foo")
                        .desc(By.element("a").and(By.attribute("href", STARTS_WITH, "http://"))
                                .child(By.classname(new String[]{"fas", "fa-check"})))),
        By.classname("external").and(By.attribute("hidden"))
);
```

The selector can be used to find single or all HTML elements:

```java
import org.jboss.elemento.By;

import static org.jboss.elemento.By.AttributeOperator.STARTS_WITH;
import static org.jboss.elemento.Elements.a;
import static org.jboss.elemento.Elements.body;

By selector = By.element("a").and(By.attribute("href", STARTS_WITH, "http://"));
for (HTMLElement element : body().findAll(selector)) {
    a(element).css("external");
}
```
