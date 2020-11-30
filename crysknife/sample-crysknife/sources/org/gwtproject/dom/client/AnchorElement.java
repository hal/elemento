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
 * The anchor element.
 *
 * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/links.html#edef-A">W3C HTML
 *     Specification</a>
 */
@JsType(isNative = true, name = "Object", namespace = JsPackage.GLOBAL)
@TagName(AnchorElement.TAG)
public class AnchorElement extends Element {

  @JsOverlay public static final String TAG = "a";

  /**
   * Assert that the given {@link Element} is compatible with this class and automatically typecast
   * it.
   *
   * @param elem the element to assert is an instance of this type
   * @return the element, cast to this type
   */
  @JsOverlay
  public static AnchorElement as(Element elem) {
    assert is(elem);
    return (AnchorElement) elem;
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

  protected AnchorElement() {}

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
   * The absolute URI of the linked resource.
   *
   * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/links.html#adef-href">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native String getHref();

  /**
   * Language code of the linked resource.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/links.html#adef-hreflang">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native String getHreflang();

  /**
   * Anchor name.
   *
   * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/links.html#adef-name-A">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native String getName();

  /**
   * Forward link type.
   *
   * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/links.html#adef-rel">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native String getRel();

  /**
   * Frame to render the resource in.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/present/frames.html#adef-target">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native String getTarget();

  /**
   * Advisory content type.
   *
   * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/links.html#adef-type-A">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native String getType();

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
   * The absolute URI of the linked resource.
   *
   * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/links.html#adef-href">W3C
   *     HTML Specification</a>
   */
  @JsOverlay
  public final void setHref(SafeUri href) {
    setHref(href.asString());
  }

  /**
   * The absolute URI of the linked resource.
   *
   * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/links.html#adef-href">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setHref(@IsSafeUri String href);

  /**
   * Language code of the linked resource.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/links.html#adef-hreflang">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setHreflang(String hreflang);

  /**
   * Anchor name.
   *
   * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/links.html#adef-name-A">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setName(String name);

  /**
   * Forward link type.
   *
   * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/links.html#adef-rel">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setRel(String rel);

  /**
   * Frame to render the resource in.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/present/frames.html#adef-target">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setTarget(String target);

  /**
   * Advisory content type.
   *
   * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/links.html#adef-type-A">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setType(String type);
}

