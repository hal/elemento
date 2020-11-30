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
import jsinterop.base.Js;
import org.gwtproject.core.client.JavaScriptObject;
import org.gwtproject.safehtml.shared.SafeUri;
import org.gwtproject.safehtml.shared.annotations.IsSafeUri;

/**
 * Inline subwindows.
 *
 * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/present/frames.html#edef-IFRAME">W3C
 *     HTML Specification</a>
 */
@JsType(isNative = true, name = "Object", namespace = JsPackage.GLOBAL)
@TagName(IFrameElement.TAG)
public class IFrameElement extends Element {

  @JsOverlay public static final String TAG = "iframe";

  /**
   * Assert that the given {@link Element} is compatible with this class and automatically typecast
   * it.
   *
   * @param elem the element to assert is an instance of this type
   * @return the element, cast to this type
   */
  @JsOverlay
  public static IFrameElement as(Element elem) {
    assert is(elem);
    return (IFrameElement) elem;
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

  protected IFrameElement() {}

  /** The document this frame contains, if there is any and it is available, or null otherwise. */
  // This is known to work on all modern browsers.
  @JsProperty(name = "contentWindow.document")
  public final native Document getContentDocument();

  /**
   * Request frame borders.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/present/frames.html#adef-frameborder">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native int getFrameBorder();

  /**
   * Frame margin height, in pixels.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/present/frames.html#adef-marginheight">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native int getMarginHeight();

  /**
   * Frame margin width, in pixels.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/present/frames.html#adef-marginwidth">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native int getMarginWidth();

  /**
   * The frame name (object of the target attribute).
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/present/frames.html#adef-name-FRAME">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native String getName();

  /**
   * Specify whether or not the frame should have scrollbars.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/present/frames.html#adef-scrolling">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native String getScrolling();

  /**
   * A URI designating the initial frame contents.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/present/frames.html#adef-src-FRAME">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native String getSrc();

  /**
   * When true, forbid user from resizing frame.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/present/frames.html#adef-noresize">W3C
   *     HTML Specification</a>
   */
  @JsOverlay
  public final boolean isNoResize() {
    return Js.isTruthy(noResize);
  }

  @JsProperty private boolean noResize;

  /**
   * Request frame borders.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/present/frames.html#adef-frameborder">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setFrameBorder(int frameBorder);

  /**
   * Frame margin height, in pixels.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/present/frames.html#adef-marginheight">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setMarginHeight(int marginHeight);

  /**
   * Frame margin width, in pixels.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/present/frames.html#adef-marginwidth">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setMarginWidth(int marginWidth);

  /**
   * The frame name (object of the target attribute).
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/present/frames.html#adef-name-FRAME">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setName(String name);

  /**
   * When true, forbid user from resizing frame.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/present/frames.html#adef-noresize">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setNoResize(boolean noResize);

  /**
   * Specify whether or not the frame should have scrollbars.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/present/frames.html#adef-scrolling">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setScrolling(String scrolling);

  /**
   * A URI designating the initial frame contents.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/present/frames.html#adef-src-FRAME">W3C
   *     HTML Specification</a>
   */
  @JsOverlay
  public final void setSrc(SafeUri src) {
    setSrc(src.asString());
  }

  /**
   * A URI designating the initial frame contents.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/present/frames.html#adef-src-FRAME">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setSrc(@IsSafeUri String src);
}

