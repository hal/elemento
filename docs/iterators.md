# Iterators / Iterables / Streams

Elemento provides several methods to iterate over node lists, child elements or elements returned by a selector. There are methods which return `Iterator`, `Iterable` and `Stream`.

## Methods returning `java.util.Iterator`

- `Elements.iterator(JsArrayLike<E> nodes)`<br/>
  Returns an iterator over the given array-like. The iterator does **not** support the `Iterator.remove()` operation.

- `Elements.iterator(Node parent)`<br/>
  Returns an iterator over the children of `parent`. The iterator **supports** the `Iterator.remove()` operation, which removes the current node from its parent.

## Methods returning `java.lang.Iterable`

- `Elements.elements(JsArrayLike<E> nodes)`<br/>
  Returns an iterable for the nodes in the given array-like.

- `Elements.children(elemental2.dom.Node parent)`<br/>
  Returns an iterable for the child nodes of `parent`.

## Methods returning `java.util.stream.Stream`

- `Elements.stream(JsArrayLike<E> nodes)`<br/>
  Returns a stream for the nodes in the given array-like.

- `Elements.stream(elemental2.dom.Node parent)`<br/>
  Returns a stream for the child nodes of `parent`.

All methods are null-safe, check parent/child relationships, and are overloaded to accept an instance of `IsElement<Element>` instead of `Element`. See the API documentation of [Elements](https://hal.github.io/elemento/apidocs/org/jboss/elemento/Elements.html) for more details.

