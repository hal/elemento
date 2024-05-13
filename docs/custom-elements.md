# Custom Elements

Elemento makes it easy to create custom elements. As for Elemento custom elements are a composite of HTML elements and / or other custom elements. They're ordinary classes which can hold state or register event handlers. The only requirement is to implement `IsElement<E extends Element>` and return a root element:

```java
import static org.jboss.elemento.Elements.*;

class TodoItemElement implements IsElement<HTMLElement> {

    private final HTMLElement root;
    private final HTMLInputElement toggle;
    private final HTMLElement label;
    private final HTMLInputElement summary;

    TodoItemElement(TodoItem item) {
        this.root = li().data("item", item.id)
                .add(div().css("view")
                        .add(toggle = input(checkbox).css("toggle")
                                .checked(item.completed)
                                .element())
                        .add(label = label().textContent(item.text).element())
                        .add(destroy = button().css("destroy").element()))
                .add(summary = input(text).css("edit").element())
                .element();
        this.root.classList.toggle("completed", item.completed);
    }

    @Override
    public HTMLElement element() {
        return root;
    }

    // event handlers omitted
}
```

The builder API has support for `IsElement<E>` which makes it easy to use custom elements when building the element hierarchy:

```java
import static org.jboss.elemento.Elements.ul;

TodoItemRepository repository = ...;
TodoItemElement[] itemElements = repository.items().stream()
        .map(TodoItemElement::new)
        .toArray();

ul().addAll(itemElements).element();
```
