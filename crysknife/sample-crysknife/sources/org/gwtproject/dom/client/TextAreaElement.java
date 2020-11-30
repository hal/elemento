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

import elemental2.dom.HTMLTextAreaElement;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import org.gwtproject.core.client.JavaScriptObject;

/**
 * Multi-line text field.
 *
 * @see <a
 *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#edef-TEXTAREA">W3C
 *     HTML Specification</a>
 */
@JsType(isNative = true, name = "Object", namespace = JsPackage.GLOBAL)
@TagName(TextAreaElement.TAG)
public class TextAreaElement extends Element {

  @JsOverlay public static final String TAG = "textarea";

  /**
   * Assert that the given {@link Element} is compatible with this class and automatically typecast
   * it.
   *
   * @param elem the element to assert is an instance of this type
   * @return the element, cast to this type
   */
  @JsOverlay
  public static TextAreaElement as(Element elem) {
    assert is(elem);
    return (TextAreaElement) elem;
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

  protected TextAreaElement() {}

  /**
   * A single character access key to give access to the form control.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-accesskey">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native String getAccessKey();

  /**
   * Width of control (in characters).
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-cols-TEXTAREA">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native int getCols();

  /**
   * Represents the contents of the element. The value of this attribute does not change if the
   * contents of the corresponding form control, in an interactive user agent, changes.
   */
  @JsProperty
  public final native String getDefaultValue();

  /**
   * Returns the FORM element containing this control. Returns null if this control is not within
   * the context of a form.
   */
  @JsProperty
  public final native FormElement getForm();

  /**
   * Form control or object name when submitted with a form.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-name-TEXTAREA">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native String getName();

  /**
   * Number of text rows.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-rows-TEXTAREA">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native int getRows();

  /** The type of this form control. This the string "textarea". */
  @JsProperty
  public final native String getType();

  /**
   * Represents the current contents of the corresponding form control, in an interactive user
   * agent. Changing this attribute changes the contents of the form control, but does not change
   * the contents of the element. If the entirety of the data can not fit into a single string, the
   * implementation may truncate the data.
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
    return Js.isTruthy(Js.<HTMLTextAreaElement>uncheckedCast(this).disabled);
  }

  /**
   * This control is read-only.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-readonly">W3C
   *     HTML Specification</a>
   */
  @JsOverlay
  public final boolean isReadOnly() {
    return Js.isTruthy(Js.<HTMLTextAreaElement>uncheckedCast(this).readOnly);
  }

  /** Select the contents of the TEXTAREA. */
  public final native void select();

  /**
   * A single character access key to give access to the form control.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-accesskey">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setAccessKey(String accessKey);

  /**
   * Width of control (in characters).
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-cols-TEXTAREA">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setCols(int cols);

  /**
   * Represents the contents of the element. The value of this attribute does not change if the
   * contents of the corresponding form control, in an interactive user agent, changes.
   */
  @JsProperty
  public final native void setDefaultValue(String defaultValue);

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
   * Form control or object name when submitted with a form.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-name-TEXTAREA">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setName(String name);

  /**
   * This control is read-only.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-readonly">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setReadOnly(boolean readOnly);

  /**
   * Number of text rows.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-rows-TEXTAREA">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setRows(int rows);

  /**
   * Represents the current contents of the corresponding form control, in an interactive user
   * agent. Changing this attribute changes the contents of the form control, but does not change
   * the contents of the element. If the entirety of the data can not fit into a single string, the
   * implementation may truncate the data.
   */
  @JsProperty
  public final native void setValue(String value);
}

