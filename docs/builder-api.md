# Builder API

Creating a hierarchy of elements is often awkward and cumbersome when working with GWT Elemental. Even simple structures like

```html

<section class="main">
    <input class="toggle-all" type="checkbox">
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
        <li>
            <div class="view">
                <input class="toggle" type="checkbox" checked>
                <label>Taste Elemento</label>
                <button class="destroy"></button>
            </div>
            <input class="edit">
        </li>
    </ul>
</section>
```

lead to a vast amount of `Document.createElement()` and chained `Node.appendChild()` calls. With Elemento, creating the above
structure is as easy as

```java
import static org.jboss.elemento.Elements.*;
import static org.jboss.elemento.InputType.checkbox;
import static org.jboss.elemento.InputType.text;

HTMLElement section = section().css("main")
        .add(input(checkbox).id("toggle-all").css("toggle-all"))
        .add(label()
                .apply(l -> l.htmlFor = "toggle-all")
                .textContent("Mark all as complete"))
        .add(ul().css("todo-list")
                .add(li()
                        .add(div().css("view")
                                .add(input(checkbox)
                                        .css("toggle")
                                        .checked(true))
                                .add(label().textContent("Taste Elemento"))
                                .add(button().css("destroy")))
                        .add(input(text).css("edit"))))
        .element();
```

The class `Elements` provides convenient methods to create the most common elements. It uses a fluent API to create and append
elements on the fly. Take a look at
the [API documentation](https://hal.github.io/elemento/apidocs/org/jboss/elemento/Elements.html) for more details.

## References

When creating large hierarchies of elements, you often need to assign an element somewhere in the tree. Use an inline assignment
together with `element()` to create and assign the element in one go:

```java
import static org.jboss.elemento.Elements.*;

final HTMLElement count;
final HTMLElement footer = footer()
        .add(count = span().css("todo-count").element())
        .element();
```

## Classes and Interfaces

The builders in Elemento are of one of the following classes:

- `HTMLContainerBuilder<E extends HTMLElement>`
- `HTMLElementBuilder<E extends HTMLElement>`
- `HTMLInputElementBuilder<E extends HTMLInputElement>`

For [MathML](mathml.md) and [SVG](svg.md), the builders are

- `MathMLElementBuilder<E extends MathMLElement>` and
- `SVGElementBuilder<E extends SVGElement>`

All builders encapsulate a given element and implement `TypedBuilder<T, B extends TypedBuilder<T, B>>` to make builders work
with inheritance. Apart from that, all builders are kept very simple and don't define their own methods. For example, this is
the definition of the `HTMLElementBuilder`:

```java
public class HTMLElementBuilder<E extends HTMLElement> { // implements section omitted

    private final E element;

    public HTMLElementBuilder(E element) {
        this.element = requireNonNull(element, "element required");
    }

    @Override
    public HTMLElementBuilder<E> that() {
        return this;
    }

    @Override
    public E element() {
        return element;
    }
}
```

The builders get their features solely by implementing specific interfaces. These interfaces contain default methods to
manipulate the encapsulated element in a specific way.

The interface names follow the pattern `[HTML|MathML|SVG]Element<Scope>Methods`. Some examples are

- [`ElementAttributeMethods`](https://hal.github.io/elemento/apidocs/org/jboss/elemento/ElementAttributeMethods.html)
- [`HTMLElementDataMethods`](https://hal.github.io/elemento/apidocs/org/jboss/elemento/HTMLElementDataMethods.html)
- [`HTMLInputElementMethods`](https://hal.github.io/elemento/apidocs/org/jboss/elemento/HTMLInputElementMethods.html)
- [`SVGElementStyleMethods`](https://hal.github.io/elemento/apidocs/org/jboss/elemento/SVGElementStyleMethods.html)

If you only use Elemento to create a DOM tree quickly and easily, you will most likely hardly come into touch with the _method_
interfaces. However, if you want to create your own builders, these interfaces come in very handy. You can have very
fine-grained control over which methods your builder should provide. And since these methods are defined as default methods in
interfaces, you are free to mix and match the interfaces across different builders without worrying about multiple inheritance.

The components in [PatternFly Java](https://patternfly-java.github.io/api-design) are a good example of this. They build upon
Elemento's builders and implement specific _method_ interfaces to define their features.
