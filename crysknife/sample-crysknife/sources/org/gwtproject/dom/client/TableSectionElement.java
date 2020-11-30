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

/** The THEAD, TFOOT, and TBODY elements. */
@JsType(isNative = true, name = "Object", namespace = JsPackage.GLOBAL)
@TagName({
  TableSectionElement.TAG_TBODY,
  TableSectionElement.TAG_TFOOT,
  TableSectionElement.TAG_THEAD
})
public class TableSectionElement extends Element {

  @JsOverlay
  static final String[] TAGS = {
    TableSectionElement.TAG_TBODY, TableSectionElement.TAG_TFOOT, TableSectionElement.TAG_THEAD
  };

  @JsOverlay public static final String TAG_TBODY = "tbody";
  @JsOverlay public static final String TAG_TFOOT = "tfoot";
  @JsOverlay public static final String TAG_THEAD = "thead";

  /**
   * Assert that the given {@link Element} is compatible with this class and automatically typecast
   * it.
   *
   * @param elem the element to assert is an instance of this type
   * @return the element, cast to this type
   */
  @JsOverlay
  public static TableSectionElement as(Element elem) {
    assert is(elem);
    return (TableSectionElement) elem;
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
        && (elem.getTagName().equalsIgnoreCase(TAG_THEAD)
            || elem.getTagName().equalsIgnoreCase(TAG_TFOOT)
            || elem.getTagName().equalsIgnoreCase(TAG_TBODY));
  }

  protected TableSectionElement() {}

  /**
   * Delete a row from this section.
   *
   * @param index The index of the row to be deleted, or -1 to delete the last row. This index
   *     starts from 0 and is relative only to the rows contained inside this section, not all the
   *     rows in the table.
   */
  public final native void deleteRow(int index);

  /**
   * Horizontal alignment of data in cells. See the align attribute for HTMLTheadElement for
   * details.
   */
  @JsProperty
  public final native String getAlign();

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

  /** The collection of rows in this table section. */
  @JsProperty
  public final native NodeList<TableRowElement> getRows();

  /**
   * Vertical alignment of data in cells. See the valign attribute for HTMLTheadElement for details.
   */
  @JsProperty
  public final native String getVAlign();

  /**
   * Insert a row into this section. The new row is inserted immediately before the current indexth
   * row in this section. If index is -1 or equal to the number of rows in this section, the new row
   * is appended.
   *
   * @param index The row number where to insert a new row. This index starts from 0 and is relative
   *     only to the rows contained inside this section, not all the rows in the table.
   * @return The newly created row.
   */
  public final native TableRowElement insertRow(int index);

  /**
   * Horizontal alignment of data in cells. See the align attribute for HTMLTheadElement for
   * details.
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
   * Vertical alignment of data in cells. See the valign attribute for HTMLTheadElement for details.
   */
  @JsProperty
  public final native void setVAlign(String vAlign);
}

