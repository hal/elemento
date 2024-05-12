# Attach and detach handlers

Implement `Attachable` to get notified when an element is attached to and detached from the DOM tree. The attachable interface provides a static method to register the callbacks easily `attach(MutationRecord)` and `detach(MutationRecord)`:

```java
import elemental2.dom.MutationRecord;
import org.jboss.elemento.Attachable;
import org.jboss.elemento.IsElement;

import static elemental2.dom.DomGlobal.console;
import static org.jboss.elemento.Elements.li;

class TodoItemElement implements IsElement<HTMLElement>, Attachable {

    private final HTMLElement root;

    TodoItemElement(TodoItem item) {
        this.root = li().element();
        Attachable.register(root, this);
    }

    @Override
    public HTMLElement element() {
        return root;
    }

    @Override
    public void attach(MutationRecord mutationRecord) {
        console.log("Todo item has been attached");
    }

    @Override
    public void detach(MutationRecord mutationRecord) {
        console.log("Todo item has been detached");
    }
}
```

Elemento uses the [`MutationObserver`](https://developer.mozilla.org/docs/Web/API/MutationObserver) API to detect changes in the DOM tree and passes an [`MutationRecord`](https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord) instance to the `attach(MutationRecord)` and `detach(MutationRecord)` methods. This instance contains additional information about the DOM manipulation.

{% hint style="danger" %}
The `attach(MutationRecord)` and `detach(MutationRecord)` methods are only called **once** after the attachable implementation has been registered with `Attachable.register(HTMLElement, Attachable)`. If you hold a reference to the element, and the element is attached to the DOM again, the callbacks are not called again unless the element has been registered again. This is done for reasons of optimisation and performance.
{% endhint %}

{% hint style="success" %}
If you want to be notified every time your custom element is attached to the DOM, it is recommended to add the call to `Attachable.register(HTMLElement, Attachable)` in the constructor, like in the example above, and recreate the custom element.
{% endhint %}
