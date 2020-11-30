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

import elemental2.dom.HTMLOptionElement;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import org.gwtproject.core.client.JavaScriptObject;

/**
 * A selectable choice.
 *
 * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#edef-OPTION">W3C
 *     HTML Specification</a>
 */
@JsType(isNative = true, name = "Object", namespace = JsPackage.GLOBAL)
@TagName(OptionElement.TAG)
public class OptionElement extends Element {

  @JsOverlay public static final String TAG = "option";

  /**
   * Assert that the given {@link Element} is compatible with this class and automatically typecast
   * it.
   *
   * @param elem the element to assert is an instance of this type
   * @return the element, cast to this type
   */
  @JsOverlay
  public static OptionElement as(Element elem) {
    assert is(elem);
    return (OptionElement) elem;
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

  protected OptionElement() {}

  /**
   * Returns the FORM element containing this control. Returns null if this control is not within
   * the context of a form.
   */
  @JsProperty
  public final native FormElement getForm();

  /** The index of this OPTION in its parent SELECT, starting from 0. */
  @JsProperty
  public final native int getIndex();

  /**
   * Option label for use in hierarchical menus.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-label-OPTION">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native String getLabel();

  /** The text contained within the option element. */
  @JsProperty
  public final native String getText();

  /**
   * The current form control value.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-value-OPTION">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native String getValue();

  /**
   * Represents the value of the HTML selected attribute. The value of this attribute does not
   * change if the state of the corresponding form control, in an interactive user agent, changes.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-selected">W3C
   *     HTML Specification</a>
   */
  @JsOverlay
  public final boolean isDefaultSelected() {
    return Js.isTruthy(Js.<HTMLOptionElement>uncheckedCast(this).defaultSelected);
  }

  /**
   * The control is unavailable in this context.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-disabled">W3C
   *     HTML Specification</a>
   */
  @JsOverlay
  public final boolean isDisabled() {
    return Js.isTruthy(Js.<HTMLOptionElement>uncheckedCast(this).disabled);
  }

  /**
   * Represents the current state of the corresponding form control, in an interactive user agent.
   * Changing this attribute changes the state of the form control, but does not change the value of
   * the HTML selected attribute of the element.
   */
  @JsOverlay
  public final boolean isSelected() {
    return Js.isTruthy(Js.<HTMLOptionElement>uncheckedCast(this).selected);
  }

  /**
   * Represents the value of the HTML selected attribute. The value of this attribute does not
   * change if the state of the corresponding form control, in an interactive user agent, changes.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-selected">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setDefaultSelected(boolean selected);

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
   * Option label for use in hierarchical menus.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-label-OPTION">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setLabel(String label);

  /**
   * Represents the current state of the corresponding form control, in an interactive user agent.
   * Changing this attribute changes the state of the form control, but does not change the value of
   * the HTML selected attribute of the element.
   */
  @JsProperty
  public final native void setSelected(boolean selected);

  /** The text contained within the option element. */
  @JsProperty
  public final native void setText(String text);

  /**
   * The current form control value.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-value-OPTION">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setValue(String value);
}

