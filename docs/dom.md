# Manipulate the DOM Tree

Elemento has static helpers methods in [`Elements`](https://hal.github.io/elemento/apidocs/org/jboss/elemento/Elements.html) that help you to manipulate the DOM tree:

- `Elements.lazyAppend(Element parent, Element child)`<br/>
  Appends `child` to `parent`. If `parent` already contains `child`, this method does nothing.

- `Elements.insertAfter(Element newElement, Element after)`<br/>
  Inserts `newElement` into `after`'s parent after `after`.

- `Elements.lazyInsertAfter(Element newElement, Element after)`<br/>
  Inserts `newElement` into `after`'s parent after `after`. If `after`'s parent already contains `newElement`, this method does nothing.

- `Elements.insertBefore(Element newElement, Element before)`<br/>
  Inserts `newElement` into `before`'s parent before `before`.

- `Elements.lazyInsertBefore(Element new Element, Element before)`<br/>
  Inserts `newElement` into `before`'s parent before `before`. If `before`'s parent already contains `newElement`, this method does nothing.

- `Elements.insertFirst(Element parent, Element newElement)`<br/>
  Inserts `newElement` as first element into `parent`.

- `Elements.removeChildrenFrom(Element element)`<br/>
  Removes all child elements from `element`

- `Elements.failSafeRemove(Node parent, Element child)`<br/>
  Removes `child` from `parent`.

- `Elements.failSafeRemoveFromParent(Element element)`<br/>
  Removes `element` from its parent.

All methods are null-safe, check parent/child relationships, and are overloaded to accept an instance of `IsElement<Element>` instead of `Element`. See the API documentation of [`Elements`](https://hal.github.io/elemento/apidocs/org/jboss/elemento/Elements.html) for more details.
