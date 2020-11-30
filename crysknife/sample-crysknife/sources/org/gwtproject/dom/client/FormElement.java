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
import org.gwtproject.safehtml.shared.SafeUri;
import org.gwtproject.safehtml.shared.annotations.IsSafeUri;

/**
 * The FORM element encompasses behavior similar to a collection and an element. It provides direct
 * access to the contained form controls as well as the attributes of the form element.
 *
 * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#edef-FORM">W3C
 *     HTML Specification</a>
 */
@JsType(isNative = true, name = "Object", namespace = JsPackage.GLOBAL)
@TagName(FormElement.TAG)
public class FormElement extends Element {

  @JsOverlay public static final String TAG = "form";

  /**
   * Assert that the given {@link Element} is compatible with this class and automatically typecast
   * it.
   *
   * @param elem the element to assert is an instance of this type
   * @return the element, cast to this type
   */
  @JsOverlay
  public static FormElement as(Element elem) {
    assert is(elem);
    return (FormElement) elem;
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

  protected FormElement() {}

  /**
   * List of character sets supported by the server.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-accept-charset">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native String getAcceptCharset();

  /**
   * Server-side form handler.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-action">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native String getAction();

  /** Returns a collection of all form control elements in the form. */
  @JsProperty
  public final native NodeCollection<Element> getElements();

  /**
   * The content type of the submitted form, generally "application/x-www-form-urlencoded".
   *
   * <p>Note: The onsubmit even handler is not guaranteed to be triggered when invoking this method.
   * The behavior is inconsistent for historical reasons and authors should not rely on a particular
   * one.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-enctype">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native String getEnctype();

  /**
   * HTTP method [IETF RFC 2616] used to submit form.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-method">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native String getMethod();

  /** Names the form. */
  @JsProperty
  public final native String getName();

  /**
   * Frame to render the resource in.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/present/frames.html#adef-target">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native String getTarget();

  /** Restores a form element's default values. It performs the same action as a reset button. */
  public final native void reset();

  /**
   * List of character sets supported by the server.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-accept-charset">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setAcceptCharset(String acceptCharset);

  /**
   * Server-side form handler.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-action">W3C
   *     HTML Specification</a>
   */
  @JsOverlay
  public final void setAction(SafeUri action) {
    setAction(action.asString());
  }

  /**
   * Server-side form handler.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-action">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setAction(@IsSafeUri String action);

  /**
   * The content type of the submitted form, generally "application/x-www-form-urlencoded".
   *
   * <p>Note: The onsubmit even handler is not guaranteed to be triggered when invoking this method.
   * The behavior is inconsistent for historical reasons and authors should not rely on a particular
   * one.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-enctype">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setEnctype(String enctype);

  /**
   * HTTP method [IETF RFC 2616] used to submit form.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/interact/forms.html#adef-method">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setMethod(String method);

  /** Names the form. */
  @JsProperty
  public final native void setName(String name);

  /**
   * Frame to render the resource in.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/present/frames.html#adef-target">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setTarget(String target);

  /** Submits the form. It performs the same action as a submit button. */
  public final native void submit();
}

