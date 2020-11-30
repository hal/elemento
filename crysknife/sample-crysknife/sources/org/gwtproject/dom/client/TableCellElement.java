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
 * The object used to represent the TH and TD elements.
 *
 * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/tables.html#edef-TD">W3C HTML
 *     Specification</a>
 */
@JsType(isNative = true, name = "Object", namespace = JsPackage.GLOBAL)
@TagName({TableCellElement.TAG_TD, TableCellElement.TAG_TH})
public class TableCellElement extends Element {

  @JsOverlay public static final String TAG_TD = "td";
  @JsOverlay public static final String TAG_TH = "th";

  /**
   * Assert that the given {@link Element} is compatible with this class and automatically typecast
   * it.
   *
   * @param elem the element to assert is an instance of this type
   * @return the element, cast to this type
   */
  @JsOverlay
  public static TableCellElement as(Element elem) {
    assert is(elem);
    return (TableCellElement) elem;
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
    return elem != null
        && (elem.getTagName().equalsIgnoreCase(TAG_TD)
            || elem.getTagName().equalsIgnoreCase(TAG_TH));
  }

  protected TableCellElement() {}

  /**
   * Horizontal alignment of data in cell.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/tables.html#adef-align-TD">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  @Deprecated
  public final native String getAlign();

  /**
   * The index of this cell in the row, starting from 0. This index is in document tree order and
   * not display order.
   */
  @JsProperty
  public final native int getCellIndex();

  /**
   * Alignment character for cells in a column.
   *
   * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/tables.html#adef-char">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  @Deprecated
  public final native String getCh();

  /**
   * Offset of alignment character.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/tables.html#adef-charoff">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  @Deprecated
  public final native String getChOff();

  /**
   * Number of columns spanned by cell.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/tables.html#adef-colspan">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native int getColSpan();

  /**
   * List of id attribute values for header cells.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/tables.html#adef-headers">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native String getHeaders();

  /**
   * Number of rows spanned by cell.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/tables.html#adef-rowspan">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native int getRowSpan();

  /**
   * Vertical alignment of data in cell.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/tables.html#adef-valign">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  @Deprecated
  public final native String getVAlign();

  /**
   * Horizontal alignment of data in cell.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/tables.html#adef-align-TD">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  @Deprecated
  public final native void setAlign(String align);

  /**
   * Alignment character for cells in a column.
   *
   * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/tables.html#adef-char">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  @Deprecated
  public final native void setCh(String ch);

  /**
   * Offset of alignment character.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/tables.html#adef-charoff">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  @Deprecated
  public final native void setChOff(String chOff);

  /**
   * Number of columns spanned by cell.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/tables.html#adef-colspan">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setColSpan(int colSpan);

  /**
   * List of id attribute values for header cells.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/tables.html#adef-headers">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setHeaders(String headers);

  /**
   * Number of rows spanned by cell.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/tables.html#adef-rowspan">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setRowSpan(int rowSpan);

  /**
   * Vertical alignment of data in cell.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/tables.html#adef-valign">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  @Deprecated
  public final native void setVAlign(String vAlign);
}

