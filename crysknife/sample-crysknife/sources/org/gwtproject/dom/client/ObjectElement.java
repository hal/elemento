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
import org.gwtproject.safehtml.shared.annotations.IsTrustedResourceUri;
import org.gwtproject.safehtml.shared.annotations.SuppressIsTrustedResourceUriCastCheck;

/**
 * Generic embedded object.
 *
 * <p>Note: In principle, all properties on the object element are read-write but in some
 * environments some properties may be read-only once the underlying object is instantiated.
 *
 * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/objects.html#edef-OBJECT">W3C
 *     HTML Specification</a>
 */
@JsType(isNative = true, name = "Object", namespace = JsPackage.GLOBAL)
@TagName(ObjectElement.TAG)
public class ObjectElement extends Element {

  @JsOverlay public static final String TAG = "object";

  /**
   * Assert that the given {@link Element} is compatible with this class and automatically typecast
   * it.
   *
   * @param elem the element to assert is an instance of this type
   * @return the element, cast to this type
   */
  @JsOverlay
  public static ObjectElement as(Element elem) {
    assert is(elem);
    return (ObjectElement) elem;
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

  protected ObjectElement() {}

  /** Applet class file. */
  @JsProperty
  public final native String getCode();

  /** The document this object contains, if there is any and it is available, or null otherwise. */
  @JsProperty
  public final native Document getContentDocument();

  /**
   * A URI specifying the location of the object's data.
   *
   * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/objects.html#adef-data">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native String getData();

  /**
   * Returns the FORM element containing this control. Returns null if this control is not within
   * the context of a form.
   */
  @JsProperty
  public final native FormElement getForm();

  /**
   * Override height.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/objects.html#adef-height-IMG">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native String getHeight();

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
   * Content type for data downloaded via data attribute.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/objects.html#adef-type-OBJECT">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native String getType();

  /**
   * Override width.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/objects.html#adef-width-IMG">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native String getWidth();

  /** Applet class file. */
  @JsProperty
  public final native void setCode(String code);

  /**
   * A URI specifying the location of the object's data.
   *
   * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/objects.html#adef-data">W3C
   *     HTML Specification</a>
   */
  @JsOverlay
  @SuppressIsTrustedResourceUriCastCheck
  public final void setData(@IsTrustedResourceUri SafeUri data) {
    setData(data.asString());
  }

  /**
   * A URI specifying the location of the object's data.
   *
   * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/objects.html#adef-data">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setData(@IsTrustedResourceUri String data);

  /**
   * Override height.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/objects.html#adef-height-IMG">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setHeight(String height);

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
   * Content type for data downloaded via data attribute.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/objects.html#adef-type-OBJECT">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setType(String type);

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
   * Override width.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/objects.html#adef-width-IMG">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setWidth(String width);

  /**
   * Use client-side image map.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/objects.html#adef-usemap">W3C
   *     HTML Specification</a>
   */
  @JsProperty(name = "useMap")
  public final native boolean useMap();
}

