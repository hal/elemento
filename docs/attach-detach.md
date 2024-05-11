# Attach and detach handlers

Implement `Attachable` to get notified when an element is attached to and detached from the DOM tree. The attachable interface provides a static method to register the callbacks easily  `attach(MutationRecord)` and `detach(MutationRecord)`:

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
