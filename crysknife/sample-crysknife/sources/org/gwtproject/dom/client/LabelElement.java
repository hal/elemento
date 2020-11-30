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

import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import org.gwtproject.core.client.JavaScriptObject;

/**
 * Form field label text.
 *
 * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#edef-LABEL">W3C
 *     HTML Specification</a>
 */
@JsType(isNative = true, name = "Object", namespace = JsPackage.GLOBAL)
@TagName(LabelElement.TAG)
public class LabelElement extends Element {

  @JsOverlay public static final String TAG = "label";

  /**
   * Assert that the given {@link Element} is compatible with this class and automatically typecast
   * it.
   *
   * @param elem the element to assert is an instance of this type
   * @return the element, cast to this type
   */
  @JsOverlay
  public static LabelElement as(Element elem) {
    assert is(elem);
    return (LabelElement) elem;
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

  protected LabelElement() {}

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
   * Returns the FORM element containing this control. Returns null if this control is not within
   * the context of a form.
   */
  @JsProperty
  public final native FormElement getForm();

  /**
   * This attribute links this label with another form control by id attribute.
   *
   * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-for">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native String getHtmlFor();

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
   * This attribute links this label with another form control by id attribute.
   *
   * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-for">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setHtmlFor(String htmlFor);
}

