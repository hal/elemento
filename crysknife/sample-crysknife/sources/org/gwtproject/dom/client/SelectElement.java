/*
 * Copyright © 2019 The GWT Project Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.gwtproject.dom.client;

import elemental2.dom.HTMLSelectElement;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import org.gwtproject.core.client.JavaScriptObject;

/**
 * The select element allows the selection of an option.
 *
 * <p>The contained options can be directly accessed through the select element as a collection.
 *
 * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#edef-SELECT">W3C
 *     HTML Specification</a>
 */
@JsType(isNative = true, name = "Object", namespace = JsPackage.GLOBAL)
@TagName(SelectElement.TAG)
public class SelectElement extends Element {

  @JsOverlay public static final String TAG = "select";

  /**
   * Assert that the given {@link Element} is compatible with this class and automatically typecast
   * it.
   *
   * @param elem the element to assert is an instance of this type
   * @return the element, cast to this type
   */
  @JsOverlay
  public static SelectElement as(Element elem) {
    assert is(elem);
    return (SelectElement) elem;
  }

  /**
   * Determines whether the given {@link JavaScriptObject} can be cast to this class. A <code>null
   * </code> object will cause this method to return <code>false</code>.
   *
   * @param o the object to check if it is an instance of this type
   * @return true of the object is an instance of this type, false otherwise
   */
  @JsOverlay
  public static boolean is(JavaScriptObject o) {
    if (Element.is(o)) {
      return is((Element) o);
    }
    return false;
  }

  /**
   * Determine whether the given {@link Node} can be cast to this class. A <code>null</code> node
   * will cause this method to return <code>false</code>.
   *
   * @param node the node to check if it is an instance of this type
   * @return true if the node is an instance of this type, false otherwise
   */
  @JsOverlay
  public static boolean is(Node node) {
    if (Element.is(node)) {
      return is((Element) node);
    }
    return false;
  }

  /**
   * Determine whether the given {@link Element} can be cast to this class. A <code>null</code> node
   * will cause this method to return <code>false</code>.
   *
   * @param elem the element to check if it is an instance of this type
   * @return true if the element is an instance of this type, false otherwise
   */
  @JsOverlay
  public static boolean is(Element elem) {
    return elem != null && elem.hasTagName(TAG);
  }

  protected SelectElement() {}

  /**
   * Add a new element to the collection of OPTION elements for this SELECT. This method is the
   * equivalent of the appendChild method of the Node interface if the before parameter is null. It
   * is equivalent to the insertBefore method on the parent of before in all other cases. This
   * method may have no effect if the new element is not an OPTION or an OPTGROUP.
   *
   * @param option The element to add
   * @param before The element to insert before, or null for the tail of the list
   */
  @JsOverlay
  public final void add(OptionElement option, OptionElement before) {
    Js.<HTMLSelectElement>uncheckedCast(this)
        .add(Js.uncheckedCast(option), Js.uncheckedCast(before));
  }

  /** Removes all OPTION elements from this SELECT. */
  @JsOverlay
  public final void clear() {
    Js.<HTMLSelectElement>uncheckedCast(this).options.length = 0;
  }

  /**
   * Returns the FORM element containing this control. Returns null if this control is not within
   * the context of a form.
   */
  @JsProperty
  public final native FormElement getForm();

  /** The number of options in this SELECT. */
  @JsOverlay
  public final int getLength() {
    return Js.<HTMLSelectElement>uncheckedCast(this).options.length;
  }

  /**
   * Form control or object name when submitted with a form.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-name-SELECT">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native String getName();

  /** The collection of OPTION elements contained by this element. */
  @JsOverlay
  public final NodeList<OptionElement> getOptions() {
    return Js.uncheckedCast(Js.<HTMLSelectElement>uncheckedCast(this).options);
  }

  /**
   * The ordinal index of the selected option, starting from 0. The value -1 is returned if no
   * element is selected. If multiple options are selected, the index of the first selected option
   * is returned.
   */
  @JsProperty
  public final native int getSelectedIndex();

  /**
   * Number of visible rows.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-size-SELECT">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native int getSize();

  /**
   * The type of this form control. This is the string "select-multiple" when the multiple attribute
   * is true and the string "select-one" when false.
   */
  @JsProperty
  public final native String getType();

  /**
   * The current form control value (i.e., the value of the currently selected option), if multiple
   * options are selected this is the value of the first selected option.
   */
  @JsProperty
  public final native String getValue();

  /**
   * The control is unavailable in this context.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-disabled">W3C
   *     HTML Specification</a>
   */
  @JsOverlay
  public final boolean isDisabled() {
    return Js.isTruthy(Js.<HTMLSelectElement>uncheckedCast(this).disabled);
  }

  /**
   * If true, multiple OPTION elements may be selected in this SELECT.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-multiple">W3C
   *     HTML Specification</a>
   */
  @JsOverlay
  public final boolean isMultiple() {
    return Js.isTruthy(Js.<HTMLSelectElement>uncheckedCast(this).multiple);
  }

  /**
   * Remove an element from the collection of OPTION elements for this SELECT. Does nothing if no
   * element has the given index.
   *
   * @param index The index of the item to remove, starting from 0.
   */
  @JsOverlay
  public final void remove(int index) {
    Js.<HTMLSelectElement>uncheckedCast(this).remove(index);
  }

  /**
   * The control is unavailable in this context.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-disabled">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setDisabled(boolean disabled);

  /**
   * If true, multiple OPTION elements may be selected in this SELECT.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-multiple">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setMultiple(boolean multiple);

  /**
   * Form control or object name when submitted with a form.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-name-SELECT">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setName(String name);

  /**
   * The ordinal index of the selected option, starting from 0. The value -1 is returned if no
   * element is selected. If multiple options are selected, the index of the first selected option
   * is returned.
   */
  @JsProperty
  public final native void setSelectedIndex(int index);

  /**
   * Number of visible rows.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-size-SELECT">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setSize(int size);

  /**
   * The type of this form control. This is the string "select-multiple" when the multiple attribute
   * is true and the string "select-one" when false.
   */
  @JsProperty
  public final native void setType(String type);

  /**
   * The current form control value (i.e., the value of the currently selected option), if multiple
   * options are selected this is the value of the first selected option.
   */
  @JsProperty
  public final native void setValue(String value);
}

