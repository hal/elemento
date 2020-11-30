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

import java.util.Locale;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import org.gwtproject.core.client.JavaScriptObject;

/**
 * For the H1 to H6 elements.
 *
 * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/global.html#edef-H1">W3C HTML
 *     Specification</a>
 */
@JsType(isNative = true, name = "Object", namespace = JsPackage.GLOBAL)
@TagName({
  HeadingElement.TAG_H1,
  HeadingElement.TAG_H2,
  HeadingElement.TAG_H3,
  HeadingElement.TAG_H4,
  HeadingElement.TAG_H5,
  HeadingElement.TAG_H6
})
public class HeadingElement extends Element {

  @JsOverlay
  static final String[] TAGS = {
    HeadingElement.TAG_H1, HeadingElement.TAG_H2, HeadingElement.TAG_H3,
    HeadingElement.TAG_H4, HeadingElement.TAG_H5, HeadingElement.TAG_H6
  };

  @JsOverlay public static final String TAG_H1 = "h1";
  @JsOverlay public static final String TAG_H2 = "h2";
  @JsOverlay public static final String TAG_H3 = "h3";
  @JsOverlay public static final String TAG_H4 = "h4";
  @JsOverlay public static final String TAG_H5 = "h5";
  @JsOverlay public static final String TAG_H6 = "h6";

  /**
   * Assert that the given {@link Element} is compatible with this class and automatically typecast
   * it.
   *
   * @param elem the element to assert is an instance of this type
   * @return the element, cast to this type
   */
  @JsOverlay
  public static HeadingElement as(Element elem) {
    if (HeadingElement.class.desiredAssertionStatus()) {
      assert is(elem);
    }

    return (HeadingElement) elem;
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

    if (elem == null) {
      return false;
    }

    String tag = elem.getTagName().toLowerCase(Locale.ROOT);

    if (tag.length() != 2) {
      return false;
    }

    if (tag.charAt(0) != 'h') {
      return false;
    }

    int n = Integer.parseInt(tag.substring(1, 2));
    if (n < 1 || n > 6) {
      return false;
    }

    return true;
  }

  protected HeadingElement() {}
}

