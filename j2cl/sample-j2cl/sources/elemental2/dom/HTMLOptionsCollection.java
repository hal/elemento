/*
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
package elemental2.dom;

import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class HTMLOptionsCollection extends HTMLCollection<HTMLOptionElement> {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface AddBeforeUnionType {
    @JsOverlay
    static HTMLOptionsCollection.AddBeforeUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default double asDouble() {
      return Js.asDouble(this);
    }

    @JsOverlay
    default HTMLElement asHTMLElement() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isDouble() {
      return (Object) this instanceof Double;
    }

    @JsOverlay
    default boolean isHTMLElement() {
      return (Object) this instanceof HTMLElement;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface AddElementUnionType {
    @JsOverlay
    static HTMLOptionsCollection.AddElementUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default HTMLOptGroupElement asHTMLOptGroupElement() {
      return Js.cast(this);
    }

    @JsOverlay
    default HTMLOptionElement asHTMLOptionElement() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isHTMLOptGroupElement() {
      return (Object) this instanceof HTMLOptGroupElement;
    }

    @JsOverlay
    default boolean isHTMLOptionElement() {
      return (Object) this instanceof HTMLOptionElement;
    }
  }

  public int length;

  public native void add(
      HTMLOptionsCollection.AddElementUnionType element,
      HTMLOptionsCollection.AddBeforeUnionType before);

  @JsOverlay
  public final void add(HTMLOptionsCollection.AddElementUnionType element, HTMLElement before) {
    add(element, Js.<HTMLOptionsCollection.AddBeforeUnionType>uncheckedCast(before));
  }

  @JsOverlay
  public final void add(HTMLOptionsCollection.AddElementUnionType element, double before) {
    add(element, Js.<HTMLOptionsCollection.AddBeforeUnionType>uncheckedCast(before));
  }

  public native void add(HTMLOptionsCollection.AddElementUnionType element);

  @JsOverlay
  public final void add(
      HTMLOptGroupElement element, HTMLOptionsCollection.AddBeforeUnionType before) {
    add(Js.<HTMLOptionsCollection.AddElementUnionType>uncheckedCast(element), before);
  }

  @JsOverlay
  public final void add(HTMLOptGroupElement element, HTMLElement before) {
    add(
        Js.<HTMLOptionsCollection.AddElementUnionType>uncheckedCast(element),
        Js.<HTMLOptionsCollection.AddBeforeUnionType>uncheckedCast(before));
  }

  @JsOverlay
  public final void add(HTMLOptGroupElement element, double before) {
    add(
        Js.<HTMLOptionsCollection.AddElementUnionType>uncheckedCast(element),
        Js.<HTMLOptionsCollection.AddBeforeUnionType>uncheckedCast(before));
  }

  @JsOverlay
  public final void add(HTMLOptGroupElement element) {
    add(Js.<HTMLOptionsCollection.AddElementUnionType>uncheckedCast(element));
  }

  @JsOverlay
  public final void add(
      HTMLOptionElement element, HTMLOptionsCollection.AddBeforeUnionType before) {
    add(Js.<HTMLOptionsCollection.AddElementUnionType>uncheckedCast(element), before);
  }

  @JsOverlay
  public final void add(HTMLOptionElement element, HTMLElement before) {
    add(
        Js.<HTMLOptionsCollection.AddElementUnionType>uncheckedCast(element),
        Js.<HTMLOptionsCollection.AddBeforeUnionType>uncheckedCast(before));
  }

  @JsOverlay
  public final void add(HTMLOptionElement element, double before) {
    add(
        Js.<HTMLOptionsCollection.AddElementUnionType>uncheckedCast(element),
        Js.<HTMLOptionsCollection.AddBeforeUnionType>uncheckedCast(before));
  }

  @JsOverlay
  public final void add(HTMLOptionElement element) {
    add(Js.<HTMLOptionsCollection.AddElementUnionType>uncheckedCast(element));
  }

  public native HTMLOptionElement item(int index);

  public native void remove(double index);
}

