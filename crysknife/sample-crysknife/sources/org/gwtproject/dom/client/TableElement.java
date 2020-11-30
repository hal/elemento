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
 * The create* and delete* methods on the table allow authors to construct and modify tables. [HTML
 * 4.01] specifies that only one of each of the CAPTION, THEAD, and TFOOT elements may exist in a
 * table. Therefore, if one exists, and the createTHead() or createTFoot() method is called, the
 * method returns the existing THead or TFoot element.
 *
 * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/tables.html#edef-TABLE">W3C
 *     HTML Specification</a>
 */
@JsType(isNative = true, name = "Object", namespace = JsPackage.GLOBAL)
@TagName(TableElement.TAG)
public class TableElement extends Element {

  @JsOverlay public static final String TAG = "table";

  /**
   * Assert that the given {@link Element} is compatible with this class and automatically typecast
   * it.
   *
   * @param elem the element to assert is an instance of this type
   * @return the element, cast to this type
   */
  @JsOverlay
  public static TableElement as(Element elem) {
    assert is(elem);
    return (TableElement) elem;
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

  protected TableElement() {}

  /**
   * Create a new table caption object or return an existing one.
   *
   * @return A CAPTION element.
   */
  public final native TableCaptionElement createCaption();

  /**
   * Create a table footer row or return an existing one.
   *
   * @return A footer element (TFOOT)
   */
  public final native TableSectionElement createTFoot();

  /**
   * Create a table header row or return an existing one.
   *
   * @return A new table header element (THEAD)
   */
  public final native TableSectionElement createTHead();

  /** Delete the table caption, if one exists. */
  public final native void deleteCaption();

  /**
   * Delete a table row.
   *
   * @param index The index of the row to be deleted. This index starts from 0 and is relative to
   *     the logical order (not document order) of all the rows contained inside the table. If the
   *     index is -1 the last row in the table is deleted
   */
  public final native void deleteRow(int index);

  /** Delete the header from the table, if one exists. */
  public final native void deleteTFoot();

  /** Delete the header from the table, if one exists. */
  public final native void deleteTHead();

  /**
   * The width of the border around the table.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/tables.html#adef-border-TABLE">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native int getBorder();

  /** The table's CAPTION, or null if none exists. */
  @JsProperty
  public final native TableCaptionElement getCaption();

  /**
   * Specifies the horizontal and vertical space between cell content and cell borders.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/tables.html#adef-cellpadding">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native int getCellPadding();

  /**
   * Specifies the horizontal and vertical separation between cells.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/tables.html#adef-cellspacing">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native int getCellSpacing();

  /**
   * Specifies which external table borders to render.
   *
   * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/tables.html#adef-frame">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native String getFrame();

  /**
   * Returns a collection of all the rows in the table, including all in THEAD, TFOOT, all TBODY
   * elements.
   */
  @JsProperty
  public final native NodeList<TableRowElement> getRows();

  /**
   * Specifies which internal table borders to render.
   *
   * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/tables.html#adef-rules">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native String getRules();

  /** Returns a collection of the table bodies (including implicit ones). */
  @JsProperty(name = "tBodies")
  public final native NodeList<TableSectionElement> getTBodies();

  /** The table's TFOOT, or null if none exists. */
  @JsProperty(name = "tFoot")
  public final native TableSectionElement getTFoot();

  /** The table's THEAD, or null if none exists. */
  @JsProperty(name = "tHead")
  public final native TableSectionElement getTHead();

  /**
   * Specifies the desired table width.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/tables.html#adef-width-TABLE">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native String getWidth();

  /**
   * Insert a new empty row in the table. The new row is inserted immediately before and in the same
   * section as the current indexth row in the table. If index is -1 or equal to the number of rows,
   * the new row is appended. In addition, when the table is empty the row is inserted into a TBODY
   * which is created and inserted into the table.
   *
   * <p>Note: A table row cannot be empty according to [HTML 4.01].
   *
   * @param index The row number where to insert a new row. This index starts from 0 and is relative
   *     to the logical order (not document order) of all the rows contained inside the table
   * @return The newly created row
   */
  public final native TableRowElement insertRow(int index);

  /**
   * The width of the border around the table.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/tables.html#adef-border-TABLE">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setBorder(int border);

  /** The table's CAPTION, or null if none exists. */
  @JsProperty
  public final native void setCaption(TableCaptionElement caption);

  /**
   * Specifies the horizontal and vertical space between cell content and cell borders.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/tables.html#adef-cellpadding">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setCellPadding(int cellPadding);

  /**
   * Specifies the horizontal and vertical separation between cells.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/tables.html#adef-cellspacing">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setCellSpacing(int cellSpacing);

  /**
   * Specifies which external table borders to render.
   *
   * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/tables.html#adef-frame">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setFrame(String frame);

  /**
   * Specifies which internal table borders to render.
   *
   * @see <a href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/tables.html#adef-rules">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setRules(String rules);

  /** The table's TFOOT, or null if none exists. */
  @JsProperty(name = "tFoot")
  public final native void setTFoot(TableSectionElement tFoot);

  /** The table's THEAD, or null if none exists. */
  @JsProperty(name = "tHead")
  public final native void setTHead(TableSectionElement tHead);

  /**
   * Specifies the desired table width.
   *
   * @see <a
   *     href="http://www.w3.org/TR/1999/REC-html401-19991224/struct/tables.html#adef-width-TABLE">W3C
   *     HTML Specification</a>
   */
  @JsProperty
  public final native void setWidth(String width);
}

