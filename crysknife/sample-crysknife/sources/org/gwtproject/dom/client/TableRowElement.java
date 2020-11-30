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
 * A row in a table.
 *
 * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/tables.html#edef-TR">W3C HTML
 *     Specification</a>
 */
@JsType(isNative = true, name = "Object", namespace = JsPackage.GLOBAL)
@TagName(TableRowElement.TAG)
public class TableRowElement extends Element {

  @JsOverlay public static final String TAG = "tr";

  /**
   * Assert that the given {@link Element} is compatible with this class and automatically typecast
   * it.
   *
   * @param elem the element to assert is an instance of this type
   * @return the element, cast to this type
   */
  @JsOverlay
  public static TableRowElement as(Element elem) {
    assert is(elem);
    return (TableRowElement) elem;
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

  protected TableRowElement() {}

  /**
   * Delete a cell from the current row.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/tables.html#adef-align-TD">W3C
   *     HTML Specification</a>
   */
  public final native void deleteCell(int index);

  /**
   * Horizontal alignment of data within cells of this row.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/tables.html#adef-align-TD">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native String getAlign();

  /** The collection of cells in this row. */
  @JsProperty
  public final native NodeList<TableCellElement> getCells();

  /**
   * Alignment character for cells in a column.
   *
   * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/tables.html#adef-char">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native String getCh();

  /**
   * Offset of alignment character.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/tables.html#adef-charoff">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native String getChOff();

  /**
   * This is in logical order and not in document order. The rowIndex does take into account
   * sections (THEAD, TFOOT, or TBODY) within the table, placing THEAD rows first in the index,
   * followed by TBODY rows, followed by TFOOT rows.
   */
  @JsProperty
  public final native int getRowIndex();

  /**
   * The index of this row, relative to the current section (THEAD, TFOOT, or TBODY), starting from
   * 0.
   */
  @JsProperty
  public final native int getSectionRowIndex();

  /**
   * Vertical alignment of data within cells of this row.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/tables.html#adef-valign">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native String getVAlign();

  /**
   * Insert an empty TD cell into this row. If index is -1 or equal to the number of cells, the new
   * cell is appended.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/tables.html#adef-align-TD">W3C
   *     HTML Specification</a>
   */
  public final native TableCellElement insertCell(int index);

  /**
   * Horizontal alignment of data within cells of this row.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/tables.html#adef-align-TD">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setAlign(String align);

  /**
   * Alignment character for cells in a column.
   *
   * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/tables.html#adef-char">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setCh(String ch);

  /**
   * Offset of alignment character.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/tables.html#adef-charoff">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setChOff(String chOff);

  /**
   * Vertical alignment of data within cells of this row.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/tables.html#adef-valign">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setVAlign(String vAlign);
}

