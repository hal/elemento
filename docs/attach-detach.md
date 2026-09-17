# Attach and detach handlers

Implement `Attachable` to get notified when an element is attached to and detached from the DOM tree. The attachable interface
provides a static method to register the callbacks easily `attach(MutationRecord)` and `detach(MutationRecord)`:

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

Elemento uses the [`MutationObserver`](https://developer.mozilla.org/docs/Web/API/MutationObserver) API to detect changes in the
DOM tree and passes an [`MutationRecord`](https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord) instance to the
`attach(MutationRecord)` and `detach(MutationRecord)` methods. This instance contains additional information about the DOM
manipulation.

::: danger
The `attach(MutationRecord)` and `detach(MutationRecord)` methods are only called **once** after the attachable implementation
has been registered with `Attachable.register(HTMLElement, Attachable)`. If you hold a reference to the element, and the element
is attached to the DOM again, the callbacks are not called again unless the element has been registered again. This is done for
reasons of optimisation and performance.
:::

::: tip
If you want to be notified every time your custom element is attached to the DOM, it is recommended to add the call to
`Attachable.register(HTMLElement, Attachable)` in the constructor, like in the example above, and recreate the custom element.
:::

## Performance

Elemento uses a **single global `MutationObserver`** on `document.body`, configured with `childList: true, subtree: true`. There is only one observer for the entire page, not one per element. This follows the recommended pattern from the DOM spec and is the same approach used by libraries like lit-element.

### One-shot semantics

Each registration fires its callback **exactly once** and is immediately removed from the internal observer list. The UID attribute is cleaned from the element at the same time. This prevents the observer lists from growing unboundedly — after the initial page render, the lists are typically empty.

### Mutation handling

On each DOM mutation, the observer iterates the pending registration list and checks whether each registered element is among the added or removed nodes. For direct children this is a list lookup. For deeper nesting, it falls back to `querySelector` on the added subtree root. The cost is proportional to the number of *pending* (not yet attached) registrations, not the total number of elements on the page.

### Component trees

In component libraries where parent components and their sub-components both implement `Attachable` (e.g., a menu with N menu items), this results in 1 + N registrations per component tree. Because of the one-shot semantics, these all drain in a single microtask batch during initial render. For typical usage (tens of components on a page), the performance impact is negligible.

The per-sub-component registration pattern is intentional: it allows each sub-component to be self-contained and find its parent via DOM traversal at attach time, regardless of intermediate container elements in the DOM tree. This works correctly for dynamic additions (elements added after the parent is already attached) without requiring the parent to manage its children's lifecycle.
