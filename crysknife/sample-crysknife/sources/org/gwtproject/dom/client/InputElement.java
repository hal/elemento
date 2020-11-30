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

import elemental2.dom.HTMLInputElement;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import org.gwtproject.core.client.JavaScriptObject;

/**
 * Form control.
 *
 * <p>Note: Depending upon the environment in which the page is being viewed, the value property may
 * be read-only for the file upload input type. For the "password" input type, the actual value
 * returned may be masked to prevent unauthorized use.
 *
 * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#edef-INPUT">W3C
 *     HTML Specification</a>
 */
@JsType(isNative = true, name = "Object", namespace = JsPackage.GLOBAL)
@TagName(InputElement.TAG)
public class InputElement extends Element {

  @JsOverlay public static final String TAG = "input";

  /**
   * Assert that the given {@link Element} is compatible with this class and automatically typecast
   * it.
   *
   * @param elem the element to assert is an instance of this type
   * @return the element, cast to this type
   */
  @JsOverlay
  public static InputElement as(Element elem) {
    assert is(elem);
    return (InputElement) elem;
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

  protected InputElement() {}

  /**
   * Simulate a mouse-click. For INPUT elements whose type attribute has one of the following
   * values: "button", "checkbox", "radio", "reset", or "submit".
   */
  public final native void click();

  /**
   * A comma-separated list of content types that a server processing this form will handle
   * correctly.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-accept">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native String getAccept();

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
   * Alternate text for user agents not rendering the normal content of this element.
   *
   * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/objects.html#adef-alt">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native String getAlt();

  /**
   * When the type attribute of the element has the value "text", "file" or "password", this
   * represents the HTML value attribute of the element. The value of this attribute does not change
   * if the contents of the corresponding form control, in an interactive user agent, changes.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-value-INPUT">W3C
   *     HTML Specification</a>
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
   * Maximum number of characters for text fields, when type has the value "text" or "password".
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-maxlength">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native int getMaxLength();

  /**
   * Form control or object name when submitted with a form.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-name-INPUT">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native String getName();

  /**
   * Size information. The precise meaning is specific to each type of field.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-size-INPUT">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native int getSize();

  /**
   * When the type attribute has the value "image", this attribute specifies the location of the
   * image to be used to decorate the graphical submit button.
   *
   * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-src">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native String getSrc();

  /**
   * The type of control created (all lower case).
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-type-INPUT">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native String getType();

  /**
   * When the type attribute of the element has the value "text", "file" or "password", this
   * represents the current contents of the corresponding form control, in an interactive user
   * agent. Changing this attribute changes the contents of the form control, but does not change
   * the value of the HTML value attribute of the element. When the type attribute of the element
   * has the value "button", "hidden", "submit", "reset", "image", "checkbox" or "radio", this
   * represents the HTML value attribute of the element.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-value-INPUT">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native String getValue();

  /**
   * When the type attribute of the element has the value "radio" or "checkbox", this represents the
   * current state of the form control, in an interactive user agent. Changes to this attribute
   * change the state of the form control, but do not change the value of the HTML checked attribute
   * of the INPUT element.
   *
   * <p>Note: During the handling of a click event on an input element with a type attribute that
   * has the value "radio" or "checkbox", some implementations may change the value of this property
   * before the event is being dispatched in the document. If the default action of the event is
   * canceled, the value of the property may be changed back to its original value. This means that
   * the value of this property during the handling of click events is implementation dependent.
   */
  @JsOverlay
  public final boolean isChecked() {
    return Js.isTruthy(Js.<HTMLInputElement>uncheckedCast(this).checked);
  }

  /**
   * When type has the value "radio" or "checkbox", this represents the HTML checked attribute of
   * the element. The value of this attribute does not change if the state of the corresponding form
   * control, in an interactive user agent, changes.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-checked">W3C
   *     HTML Specification</a>
   */
  @JsOverlay
  public final boolean isDefaultChecked() {
    return Js.isTruthy(Js.<HTMLInputElement>uncheckedCast(this).defaultChecked);
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
    return Js.isTruthy(Js.<HTMLInputElement>uncheckedCast(this).disabled);
  }

  /**
   * This control is read-only. Relevant only when type has the value "text" or "password".
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-readonly">W3C
   *     HTML Specification</a>
   */
  @JsOverlay
  public final boolean isReadOnly() {
    return Js.isTruthy(Js.<HTMLInputElement>uncheckedCast(this).readOnly);
  }

  /**
   * Select the contents of the text area. For INPUT elements whose type attribute has one of the
   * following values: "text", "file", or "password".
   */
  public final native void select();

  /**
   * A comma-separated list of content types that a server processing this form will handle
   * correctly.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-accept">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setAccept(String accept);

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
   * Alternate text for user agents not rendering the normal content of this element.
   *
   * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/objects.html#adef-alt">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setAlt(String alt);

  /**
   * When the type attribute of the element has the value "radio" or "checkbox", this represents the
   * current state of the form control, in an interactive user agent. Changes to this attribute
   * change the state of the form control, but do not change the value of the HTML checked attribute
   * of the INPUT element.
   *
   * <p>Note: During the handling of a click event on an input element with a type attribute that
   * has the value "radio" or "checkbox", some implementations may change the value of this property
   * before the event is being dispatched in the document. If the default action of the event is
   * canceled, the value of the property may be changed back to its original value. This means that
   * the value of this property during the handling of click events is implementation dependent.
   */
  @JsProperty
  public final native void setChecked(boolean checked);

  /**
   * When type has the value "radio" or "checkbox", this represents the HTML checked attribute of
   * the element. The value of this attribute does not change if the state of the corresponding form
   * control, in an interactive user agent, changes.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-checked">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setDefaultChecked(boolean defaultChecked);

  /**
   * When the type attribute of the element has the value "text", "file" or "password", this
   * represents the HTML value attribute of the element. The value of this attribute does not change
   * if the contents of the corresponding form control, in an interactive user agent, changes.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-value-INPUT">W3C
   *     HTML Specification</a>
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
   * Maximum number of characters for text fields, when type has the value "text" or "password".
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-maxlength">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setMaxLength(int maxLength);

  /**
   * Form control or object name when submitted with a form.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-name-INPUT">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setName(String name);

  /**
   * This control is read-only. Relevant only when type has the value "text" or "password".
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-readonly">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setReadOnly(boolean readOnly);

  /**
   * Size information. The precise meaning is specific to each type of field.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-size-INPUT">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setSize(int size);

  /**
   * When the type attribute has the value "image", this attribute specifies the location of the
   * image to be used to decorate the graphical submit button.
   *
   * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-src">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setSrc(String src);

  /**
   * Use client-side image map.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/objects.html#adef-usemap">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setUseMap(boolean useMap);

  /**
   * When the type attribute of the element has the value "text", "file" or "password", this
   * represents the current contents of the corresponding form control, in an interactive user
   * agent. Changing this attribute changes the contents of the form control, but does not change
   * the value of the HTML value attribute of the element. When the type attribute of the element
   * has the value "button", "hidden", "submit", "reset", "image", "checkbox" or "radio", this
   * represents the HTML value attribute of the element.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-value-INPUT">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setValue(String value);

  /**
   * Use client-side image map.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/objects.html#adef-usemap">W3C
   *     HTML Specification</a>
   */
  @JsOverlay
  public final boolean useMap() {
    return Js.isTruthy(Js.<HTMLInputElement>uncheckedCast(this).useMap);
  };
}

