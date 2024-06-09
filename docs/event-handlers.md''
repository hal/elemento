# Event Handlers

Elemento provides methods to easily register event handlers. There are [constants](https://hal.github.io/elemento/apidocs/org/jboss/elemento/EventType.html) for most of the known event types. You can either add event handlers when building the element hierarchy:

```java
import static org.jboss.elemento.Elements.*;
import static org.jboss.elemento.EventType.*;
import static org.jboss.elemento.InputType.checkbox;
import static org.jboss.elemento.InputType.text;

HTMLLIElement listItem = li()
        .add(div().css("view")
                .add(input(checkbox)
                        .css("toggle")
                        .on(change, event -> toggle()))
                .add(label()
                        .textContent("Taste Elemento")
                        .on(dblclick, event -> edit()))
                .add(button()
                        .css("destroy")
                        .on(click, event -> destroy())))
        .add(input(text)
                .css("edit")
                .on(keydown, this::keyDown)
                .on(blur, event -> blur()))
        .element();
```

or register them later using `EventType.bind()`:

```java
import org.gwtproject.event.shared.HandlerRegistration;

import static elemental2.dom.DomGlobal.alert;
import static org.jboss.elemento.EventType.bind;
import static org.jboss.elemento.EventType.click;

HandlerRegistration handler = bind(listItem, click, event -> alert("Clicked"));
```

The latter approach returns `org.gwtproject.event.shared.HandlerRegistration` which you can use to remove the handler again.

In order to make it easier to work with keyboard events, Elemento provides an [enum](https://hal.github.io/elemento/apidocs/org/jboss/elemento/Key.html) with the most common keyboard codes:

```java
import elemental2.dom.KeyboardEvent;

import static org.jboss.elemento.Key.Escape;
import static org.jboss.elemento.Key.Enter;

void keyDown(KeyboardEvent event) {
    if (Escape.match(event)) {
        ...
    } else if (Enter.match(event)) {
        ...
    }
}
```
