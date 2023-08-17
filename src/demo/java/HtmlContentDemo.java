import elemental2.dom.HTMLUListElement;

import static org.jboss.elemento.Elements.ul;

@SuppressWarnings("unused")
public class HtmlContentDemo {

    public void addAllDemo() {
        // @start region = addAll
        TodoRepository repository = new TodoRepository();
        TodoElement[] elements = repository.todos().stream()
                .map(TodoElement::new)
                .toArray(TodoElement[]::new);
        HTMLUListElement ul = ul()
                .addAll(elements)
                .element();
        // @end region = addAll
    }
}
