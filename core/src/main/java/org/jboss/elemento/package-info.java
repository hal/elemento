/**
 * Elemento simplifies working with GWT Elemental2 by providing a fluent API for building HTML element hierarchies, typesafe CSS
 * selectors, and helper methods for common DOM operations.
 *
 * <h2>Builder API</h2>
 * <p>
 * The core of Elemento is its fluent builder API for creating HTML element hierarchies. The {@link Elements} class provides
 * factory methods for all common HTML elements:
 *
 * {@snippet :
 * import static org.jboss.elemento.Elements.*;
 * import static org.jboss.elemento.InputType.checkbox;
 *
 * HTMLElement section = section().css("main")
 *         .add(input(checkbox).id("toggle-all").css("toggle-all"))
 *         .add(label()
 *                 .apply(l -> l.htmlFor = "toggle-all")
 *                 .text("Mark all as complete"))
 *         .add(ul().css("todo-list")
 *                 .add(li()
 *                         .add(div().css("view")
 *                                 .add(input(checkbox).css("toggle").checked(true))
 *                                 .add(label().text("Taste Elemento"))
 *                                 .add(button().css("destroy")))
 *                         .add(input(text).css("edit"))))
 *         .element();
 * }
 *
 * <p>
 * Builders are organized into these main classes:
 * <ul>
 * <li>{@link HTMLContainerBuilder} - for container elements that can hold children
 * <li>{@link HTMLElementBuilder} - for simple HTML elements
 * <li>{@link HTMLInputElementBuilder} - specialized builder for input elements
 * <li>{@link HTMLSelectElementBuilder} - specialized builder for select elements
 * <li>{@link HTMLTextAreaElementBuilder} - specialized builder for textarea elements
 * </ul>
 *
 * <p>
 * All builders implement {@link TypedBuilder} and are composed from method interfaces like {@link ElementAttributeMethods},
 * {@link ElementClassListMethods}, {@link ElementContainerMethods}, etc. This design allows fine-grained control over which
 * methods are available on each builder type.
 *
 * <h2>Custom Elements</h2>
 * <p>
 * Implement {@link IsElement} to create custom components that return a single element:
 *
 * {@snippet :
 * class TodoItemElement implements IsElement<HTMLElement> {
 *     private final HTMLElement root;
 *
 *     TodoItemElement(TodoItem item) {
 *         this.root = li()
 *                 .add(div().css("view")
 *                         .add(input(checkbox).css("toggle"))
 *                         .add(label().text(item.text)))
 *                 .element();
 *     }
 *
 *     @Override
 *     public HTMLElement element() {
 *         return root;
 *     }
 * }
 * }
 *
 * <h2>Event Handling</h2>
 * <p>
 * Register event handlers using the fluent API or the {@link EventType#bind(elemental2.dom.EventTarget, EventType,
 * EventCallbackFn)} method:
 *
 * {@snippet :
 * import static org.jboss.elemento.EventType.*;
 *
 * // During element construction
 * HTMLElement button = button()
 *         .text("Click me")
 *         .on(click, event -> console.log("Clicked!"))
 *         .element();
 *
 * // Or later using bind()
 * HandlerRegistration handler = bind(button, click, event -> alert("Clicked"));
 * // Remove handler when done
 * handler.removeHandler();
 * }
 *
 * <p>
 * The {@link Key} enum provides constants for common keyboard codes to simplify keyboard event handling.
 *
 * <h2>Attach and Detach Callbacks</h2>
 * <p>
 * Implement {@link Attachable} to receive notifications when elements are attached to or detached from the DOM tree:
 *
 * {@snippet :
 * class TodoItemElement implements IsElement<HTMLElement>, Attachable {
 *     private final HTMLElement root;
 *
 *     TodoItemElement(TodoItem item) {
 *         this.root = li().element();
 *         Attachable.register(root, this);
 *     }
 *
 *     @Override
 *     public HTMLElement element() {
 *         return root;
 *     }
 *
 *     @Override
 *     public void attach(MutationRecord mutationRecord) {
 *         console.log("Attached to DOM");
 *     }
 *
 *     @Override
 *     public void detach(MutationRecord mutationRecord) {
 *         console.log("Detached from DOM");
 *     }
 * }
 * }
 *
 * <p>
 * Elemento uses the {@link elemental2.dom.MutationObserver MutationObserver} API to detect DOM changes. Note that callbacks are
 * only invoked once per registration.
 *
 * <h2>DOM Manipulation</h2>
 * <p>
 * The {@link Elements} class provides helper methods for common DOM operations:
 * <ul>
 * <li>{@link Elements#lazyAppend(elemental2.dom.Element, elemental2.dom.Element)} - append if not already present
 * <li>{@link Elements#insertBefore(elemental2.dom.Element, elemental2.dom.Element)} - insert element before another
 * <li>{@link Elements#insertAfter(elemental2.dom.Element, elemental2.dom.Element)} - insert element after another
 * <li>{@link Elements#insertFirst(elemental2.dom.Element, elemental2.dom.Element)} - insert as first child
 * <li>{@link Elements#removeChildrenFrom(elemental2.dom.Element)} - remove all children
 * <li>{@link Elements#failSafeRemoveFromParent(elemental2.dom.Element)} - safely remove from parent
 * </ul>
 *
 * <p>
 * All methods are null-safe and support both {@link elemental2.dom.Element Element} and {@link IsElement} parameters.
 *
 * <h2>Typesafe CSS Selectors</h2>
 * <p>
 * The {@link By} class provides a typesafe API for building CSS selectors:
 *
 * {@snippet :
 * import static org.jboss.elemento.By.AttributeOperator.STARTS_WITH;
 *
 * // Simple selectors
 * By idSelector = By.id("main");
 * By classSelector = By.classname("external");
 *
 * // Complex selector: a[href^="http://"] > .external
 * By selector = By.element("a")
 *         .and(By.attribute("href", STARTS_WITH, "http://"))
 *         .child(By.classname("external"));
 *
 * // Use with query methods
 * HTMLElement element = querySelector(document.body, selector);
 * for (HTMLElement el : querySelectorAll(document.body, selector)) {
 *     // process elements
 * }
 * }
 *
 * <h2>Iterators and Streams</h2>
 * <p>
 * Elemento provides methods to iterate over and stream DOM elements:
 *
 * {@snippet :
 * // Iterate over children
 * for (HTMLElement child : children(parent)) {
 *     // process child
 * }
 *
 * // Stream over children
 * stream(parent)
 *         .filter(element -> element.classList.contains("active"))
 *         .forEach(element -> console.log(element));
 * }
 *
 * <h2>Additional Features</h2>
 * <ul>
 * <li><strong>Visibility control</strong> - {@link Elements#isVisible(elemental2.dom.HTMLElement)}, {@link
 * Elements#setVisible(elemental2.dom.HTMLElement, boolean)}
 * <li><strong>Resize observers</strong> - {@link Elements#resizeObserver(elemental2.dom.HTMLElement, ResizeCallback)}
 * <li><strong>Element queries</strong> - {@link Elements#querySelector(elemental2.dom.Node, By)}, {@link
 * Elements#querySelectorAll(elemental2.dom.Node, By)}
 * <li><strong>Utility classes</strong> - {@link Id}, {@link Key}, {@link Role}, {@link InputType}, {@link ButtonType}
 * </ul>
 *
 * @see <a href="https://github.com/hal/elemento">Elemento on GitHub</a>
 * @see <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element">HTML Elements Reference</a>
 */
package org.jboss.elemento;