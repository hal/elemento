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

import static org.gwtproject.dom.style.shared.CssProperty.*;

import elemental2.dom.CSSProperties;
import elemental2.dom.CSSStyleDeclaration;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;
import org.gwtproject.core.client.JavaScriptObject;
import org.gwtproject.dom.style.shared.CssProperty;
import org.gwtproject.safehtml.shared.annotations.IsSafeUri;

/**
 * Provides programmatic access to properties of the style object.
 *
 * <p>Note that if a property or value is not explicitly enumerated in this class, you can still
 * access it via {@link #getProperty(String)}, and {@link #setProperty(String, String)}.
 *
 * @see Element#getStyle()
 */
@JsType(isNative = true, name = "Object", namespace = JsPackage.GLOBAL)
public class Style extends JavaScriptObject {

  /**
   * Interface to be implemented by enumerated CSS values.
   *
   * @deprecated Use {@link org.gwtproject.dom.style.shared.HasCssName} instead
   */
  @Deprecated
  public interface HasCssName extends org.gwtproject.dom.style.shared.HasCssName {}

  /**
   * CSS length units.
   *
   * @deprecated Use {@link org.gwtproject.dom.style.shared.Unit} instead
   */
  @Deprecated
  public static class Unit {
    public static final org.gwtproject.dom.style.shared.Unit PX =
        org.gwtproject.dom.style.shared.Unit.PX;
    public static final org.gwtproject.dom.style.shared.Unit PCT =
        org.gwtproject.dom.style.shared.Unit.PCT;
    public static final org.gwtproject.dom.style.shared.Unit EM =
        org.gwtproject.dom.style.shared.Unit.EM;
    public static final org.gwtproject.dom.style.shared.Unit EX =
        org.gwtproject.dom.style.shared.Unit.EX;
    public static final org.gwtproject.dom.style.shared.Unit PT =
        org.gwtproject.dom.style.shared.Unit.PT;
    public static final org.gwtproject.dom.style.shared.Unit PC =
        org.gwtproject.dom.style.shared.Unit.PC;
    public static final org.gwtproject.dom.style.shared.Unit IN =
        org.gwtproject.dom.style.shared.Unit.IN;
    public static final org.gwtproject.dom.style.shared.Unit CM =
        org.gwtproject.dom.style.shared.Unit.CM;
    public static final org.gwtproject.dom.style.shared.Unit MM =
        org.gwtproject.dom.style.shared.Unit.MM;
  }

  /**
   * Enum for the border-style property.
   *
   * @deprecated Use {@link org.gwtproject.dom.style.shared.BorderStyle} instead
   */
  @Deprecated
  public static class BorderStyle {
    public static final org.gwtproject.dom.style.shared.BorderStyle NONE =
        org.gwtproject.dom.style.shared.BorderStyle.NONE;
    public static final org.gwtproject.dom.style.shared.BorderStyle DOTTED =
        org.gwtproject.dom.style.shared.BorderStyle.DOTTED;
    public static final org.gwtproject.dom.style.shared.BorderStyle DASHED =
        org.gwtproject.dom.style.shared.BorderStyle.DASHED;
    public static final org.gwtproject.dom.style.shared.BorderStyle HIDDEN =
        org.gwtproject.dom.style.shared.BorderStyle.HIDDEN;
    public static final org.gwtproject.dom.style.shared.BorderStyle SOLID =
        org.gwtproject.dom.style.shared.BorderStyle.SOLID;
  }

  /**
   * Enum for the 'clear' CSS property.
   *
   * @deprecated Use {@link org.gwtproject.dom.style.shared.Clear} instead
   */
  @Deprecated
  public static class Clear {
    public static final org.gwtproject.dom.style.shared.Clear BOTH =
        org.gwtproject.dom.style.shared.Clear.BOTH;
    public static final org.gwtproject.dom.style.shared.Clear LEFT =
        org.gwtproject.dom.style.shared.Clear.LEFT;
    public static final org.gwtproject.dom.style.shared.Clear NONE =
        org.gwtproject.dom.style.shared.Clear.NONE;
    public static final org.gwtproject.dom.style.shared.Clear RIGHT =
        org.gwtproject.dom.style.shared.Clear.RIGHT;
  }

  /**
   * Enum for the cursor property.
   *
   * @deprecated Use {@link org.gwtproject.dom.style.shared.Cursor} instead
   */
  @Deprecated
  public static class Cursor {
    public static final org.gwtproject.dom.style.shared.Cursor DEFAULT =
        org.gwtproject.dom.style.shared.Cursor.DEFAULT;
    public static final org.gwtproject.dom.style.shared.Cursor AUTO =
        org.gwtproject.dom.style.shared.Cursor.AUTO;
    public static final org.gwtproject.dom.style.shared.Cursor CROSSHAIR =
        org.gwtproject.dom.style.shared.Cursor.CROSSHAIR;
    public static final org.gwtproject.dom.style.shared.Cursor POINTER =
        org.gwtproject.dom.style.shared.Cursor.POINTER;
    public static final org.gwtproject.dom.style.shared.Cursor MOVE =
        org.gwtproject.dom.style.shared.Cursor.MOVE;
    public static final org.gwtproject.dom.style.shared.Cursor E_RESIZE =
        org.gwtproject.dom.style.shared.Cursor.E_RESIZE;
    public static final org.gwtproject.dom.style.shared.Cursor NE_RESIZE =
        org.gwtproject.dom.style.shared.Cursor.NE_RESIZE;
    public static final org.gwtproject.dom.style.shared.Cursor NW_RESIZE =
        org.gwtproject.dom.style.shared.Cursor.NW_RESIZE;
    public static final org.gwtproject.dom.style.shared.Cursor N_RESIZE =
        org.gwtproject.dom.style.shared.Cursor.N_RESIZE;
    public static final org.gwtproject.dom.style.shared.Cursor SE_RESIZE =
        org.gwtproject.dom.style.shared.Cursor.SE_RESIZE;
    public static final org.gwtproject.dom.style.shared.Cursor SW_RESIZE =
        org.gwtproject.dom.style.shared.Cursor.SW_RESIZE;
    public static final org.gwtproject.dom.style.shared.Cursor S_RESIZE =
        org.gwtproject.dom.style.shared.Cursor.S_RESIZE;
    public static final org.gwtproject.dom.style.shared.Cursor W_RESIZE =
        org.gwtproject.dom.style.shared.Cursor.W_RESIZE;
    public static final org.gwtproject.dom.style.shared.Cursor TEXT =
        org.gwtproject.dom.style.shared.Cursor.TEXT;
    public static final org.gwtproject.dom.style.shared.Cursor WAIT =
        org.gwtproject.dom.style.shared.Cursor.WAIT;
    public static final org.gwtproject.dom.style.shared.Cursor HELP =
        org.gwtproject.dom.style.shared.Cursor.HELP;
    public static final org.gwtproject.dom.style.shared.Cursor COL_RESIZE =
        org.gwtproject.dom.style.shared.Cursor.COL_RESIZE;
    public static final org.gwtproject.dom.style.shared.Cursor ROW_RESIZE =
        org.gwtproject.dom.style.shared.Cursor.ROW_RESIZE;
  }

  /**
   * Enum for the display property.
   *
   * @deprecated Use {@link org.gwtproject.dom.style.shared.Display} instead
   */
  @Deprecated
  public static class Display {
    public static final org.gwtproject.dom.style.shared.Display NONE =
        org.gwtproject.dom.style.shared.Display.NONE;
    public static final org.gwtproject.dom.style.shared.Display BLOCK =
        org.gwtproject.dom.style.shared.Display.BLOCK;
    public static final org.gwtproject.dom.style.shared.Display INLINE =
        org.gwtproject.dom.style.shared.Display.INLINE;
    public static final org.gwtproject.dom.style.shared.Display INLINE_BLOCK =
        org.gwtproject.dom.style.shared.Display.INLINE_BLOCK;
    public static final org.gwtproject.dom.style.shared.Display INLINE_TABLE =
        org.gwtproject.dom.style.shared.Display.INLINE_TABLE;
    public static final org.gwtproject.dom.style.shared.Display LIST_ITEM =
        org.gwtproject.dom.style.shared.Display.LIST_ITEM;
    public static final org.gwtproject.dom.style.shared.Display RUN_IN =
        org.gwtproject.dom.style.shared.Display.RUN_IN;
    public static final org.gwtproject.dom.style.shared.Display TABLE =
        org.gwtproject.dom.style.shared.Display.TABLE;
    public static final org.gwtproject.dom.style.shared.Display TABLE_CAPTION =
        org.gwtproject.dom.style.shared.Display.TABLE_CAPTION;
    public static final org.gwtproject.dom.style.shared.Display TABLE_COLUMN_GROUP =
        org.gwtproject.dom.style.shared.Display.TABLE_COLUMN_GROUP;
    public static final org.gwtproject.dom.style.shared.Display TABLE_HEADER_GROUP =
        org.gwtproject.dom.style.shared.Display.TABLE_HEADER_GROUP;
    public static final org.gwtproject.dom.style.shared.Display TABLE_FOOTER_GROUP =
        org.gwtproject.dom.style.shared.Display.TABLE_FOOTER_GROUP;
    public static final org.gwtproject.dom.style.shared.Display TABLE_ROW_GROUP =
        org.gwtproject.dom.style.shared.Display.TABLE_ROW_GROUP;
    public static final org.gwtproject.dom.style.shared.Display TABLE_CELL =
        org.gwtproject.dom.style.shared.Display.TABLE_CELL;
    public static final org.gwtproject.dom.style.shared.Display TABLE_COLUMN =
        org.gwtproject.dom.style.shared.Display.TABLE_COLUMN;
    public static final org.gwtproject.dom.style.shared.Display TABLE_ROW =
        org.gwtproject.dom.style.shared.Display.TABLE_ROW;
    public static final org.gwtproject.dom.style.shared.Display INITIAL =
        org.gwtproject.dom.style.shared.Display.INITIAL;
    public static final org.gwtproject.dom.style.shared.Display FLEX =
        org.gwtproject.dom.style.shared.Display.FLEX;
    public static final org.gwtproject.dom.style.shared.Display INLINE_FLEX =
        org.gwtproject.dom.style.shared.Display.INLINE_FLEX;
  }

  /**
   * Enum for the float property.
   *
   * @deprecated Use {@link org.gwtproject.dom.style.shared.Float} instead
   */
  @Deprecated
  public static class Float {
    public static final org.gwtproject.dom.style.shared.Float LEFT =
        org.gwtproject.dom.style.shared.Float.LEFT;
    public static final org.gwtproject.dom.style.shared.Float RIGHT =
        org.gwtproject.dom.style.shared.Float.RIGHT;
    public static final org.gwtproject.dom.style.shared.Float NONE =
        org.gwtproject.dom.style.shared.Float.NONE;
  }

  /**
   * Enum for the font-style property.
   *
   * @deprecated Use {@link org.gwtproject.dom.style.shared.FontStyle} instead
   */
  @Deprecated
  public static class FontStyle {
    public static final org.gwtproject.dom.style.shared.FontStyle NORMAL =
        org.gwtproject.dom.style.shared.FontStyle.NORMAL;
    public static final org.gwtproject.dom.style.shared.FontStyle ITALIC =
        org.gwtproject.dom.style.shared.FontStyle.ITALIC;
    public static final org.gwtproject.dom.style.shared.FontStyle OBLIQUE =
        org.gwtproject.dom.style.shared.FontStyle.OBLIQUE;
  }

  /**
   * Enum for the font-weight property.
   *
   * @deprecated Use {@link org.gwtproject.dom.style.shared.FontWeight} instead
   */
  @Deprecated
  public static class FontWeight {
    public static final org.gwtproject.dom.style.shared.FontWeight NORMAL =
        org.gwtproject.dom.style.shared.FontWeight.NORMAL;
    public static final org.gwtproject.dom.style.shared.FontWeight BOLD =
        org.gwtproject.dom.style.shared.FontWeight.BOLD;
    public static final org.gwtproject.dom.style.shared.FontWeight BOLDER =
        org.gwtproject.dom.style.shared.FontWeight.BOLDER;
    public static final org.gwtproject.dom.style.shared.FontWeight LIGHTER =
        org.gwtproject.dom.style.shared.FontWeight.LIGHTER;
  }

  /**
   * Enum for the list-style-type property.
   *
   * @deprecated Use {@link org.gwtproject.dom.style.shared.ListStyleType} instead
   */
  @Deprecated
  public static class ListStyleType {
    public static final org.gwtproject.dom.style.shared.ListStyleType NONE =
        org.gwtproject.dom.style.shared.ListStyleType.NONE;
    public static final org.gwtproject.dom.style.shared.ListStyleType DISC =
        org.gwtproject.dom.style.shared.ListStyleType.DISC;
    public static final org.gwtproject.dom.style.shared.ListStyleType CIRCLE =
        org.gwtproject.dom.style.shared.ListStyleType.CIRCLE;
    public static final org.gwtproject.dom.style.shared.ListStyleType SQUARE =
        org.gwtproject.dom.style.shared.ListStyleType.SQUARE;
    public static final org.gwtproject.dom.style.shared.ListStyleType DECIMAL =
        org.gwtproject.dom.style.shared.ListStyleType.DECIMAL;
    public static final org.gwtproject.dom.style.shared.ListStyleType LOWER_ALPHA =
        org.gwtproject.dom.style.shared.ListStyleType.LOWER_ALPHA;
    public static final org.gwtproject.dom.style.shared.ListStyleType UPPER_ALPHA =
        org.gwtproject.dom.style.shared.ListStyleType.UPPER_ALPHA;
    public static final org.gwtproject.dom.style.shared.ListStyleType LOWER_ROMAN =
        org.gwtproject.dom.style.shared.ListStyleType.LOWER_ROMAN;
    public static final org.gwtproject.dom.style.shared.ListStyleType UPPER_ROMAN =
        org.gwtproject.dom.style.shared.ListStyleType.UPPER_ROMAN;
  }

  /**
   * Enum for the outline-style property.
   *
   * @deprecated Use {@link org.gwtproject.dom.style.shared.OutlineStyle} instead
   */
  @Deprecated
  public static class OutlineStyle {
    public static final org.gwtproject.dom.style.shared.OutlineStyle NONE =
        org.gwtproject.dom.style.shared.OutlineStyle.NONE;
    public static final org.gwtproject.dom.style.shared.OutlineStyle DASHED =
        org.gwtproject.dom.style.shared.OutlineStyle.DASHED;
    public static final org.gwtproject.dom.style.shared.OutlineStyle DOTTED =
        org.gwtproject.dom.style.shared.OutlineStyle.DOTTED;
    public static final org.gwtproject.dom.style.shared.OutlineStyle DOUBLE =
        org.gwtproject.dom.style.shared.OutlineStyle.DOUBLE;
    public static final org.gwtproject.dom.style.shared.OutlineStyle GROOVE =
        org.gwtproject.dom.style.shared.OutlineStyle.GROOVE;
    public static final org.gwtproject.dom.style.shared.OutlineStyle INSET =
        org.gwtproject.dom.style.shared.OutlineStyle.INSET;
    public static final org.gwtproject.dom.style.shared.OutlineStyle OUTSET =
        org.gwtproject.dom.style.shared.OutlineStyle.OUTSET;
    public static final org.gwtproject.dom.style.shared.OutlineStyle RIDGE =
        org.gwtproject.dom.style.shared.OutlineStyle.RIDGE;
    public static final org.gwtproject.dom.style.shared.OutlineStyle SOLID =
        org.gwtproject.dom.style.shared.OutlineStyle.SOLID;
  }

  /**
   * Enum for the overflow property.
   *
   * @deprecated Use {@link org.gwtproject.dom.style.shared.Overflow} instead
   */
  @Deprecated
  public static class Overflow {
    public static final org.gwtproject.dom.style.shared.Overflow VISIBLE =
        org.gwtproject.dom.style.shared.Overflow.VISIBLE;
    public static final org.gwtproject.dom.style.shared.Overflow HIDDEN =
        org.gwtproject.dom.style.shared.Overflow.HIDDEN;
    public static final org.gwtproject.dom.style.shared.Overflow SCROLL =
        org.gwtproject.dom.style.shared.Overflow.SCROLL;
    public static final org.gwtproject.dom.style.shared.Overflow AUTO =
        org.gwtproject.dom.style.shared.Overflow.AUTO;
  }

  /**
   * Enum for the position property.
   *
   * @deprecated Use {@link org.gwtproject.dom.style.shared.Position} instead
   */
  @Deprecated
  public static class Position {
    public static final org.gwtproject.dom.style.shared.Position STATIC =
        org.gwtproject.dom.style.shared.Position.STATIC;
    public static final org.gwtproject.dom.style.shared.Position RELATIVE =
        org.gwtproject.dom.style.shared.Position.RELATIVE;
    public static final org.gwtproject.dom.style.shared.Position ABSOLUTE =
        org.gwtproject.dom.style.shared.Position.ABSOLUTE;
    public static final org.gwtproject.dom.style.shared.Position FIXED =
        org.gwtproject.dom.style.shared.Position.FIXED;
  }

  /**
   * Enum for the table-layout property.
   *
   * @deprecated Use {@link org.gwtproject.dom.style.shared.TableLayout} instead
   */
  @Deprecated
  public static class TableLayout {
    public static final org.gwtproject.dom.style.shared.TableLayout AUTO =
        org.gwtproject.dom.style.shared.TableLayout.AUTO;
    public static final org.gwtproject.dom.style.shared.TableLayout FIXED =
        org.gwtproject.dom.style.shared.TableLayout.FIXED;
  }

  /**
   * Enum for the text-align property.
   *
   * @deprecated Use {@link org.gwtproject.dom.style.shared.TextAlign} instead
   */
  @Deprecated
  public static class TextAlign {
    public static final org.gwtproject.dom.style.shared.TextAlign CENTER =
        org.gwtproject.dom.style.shared.TextAlign.CENTER;
    public static final org.gwtproject.dom.style.shared.TextAlign JUSTIFY =
        org.gwtproject.dom.style.shared.TextAlign.JUSTIFY;
    public static final org.gwtproject.dom.style.shared.TextAlign LEFT =
        org.gwtproject.dom.style.shared.TextAlign.LEFT;
    public static final org.gwtproject.dom.style.shared.TextAlign RIGHT =
        org.gwtproject.dom.style.shared.TextAlign.RIGHT;
  }

  /**
   * Enum for the 'text-decoration' CSS property.
   *
   * @deprecated Use {@link org.gwtproject.dom.style.shared.TextDecoration} instead
   */
  @Deprecated
  public static class TextDecoration {
    public static final org.gwtproject.dom.style.shared.TextDecoration BLINK =
        org.gwtproject.dom.style.shared.TextDecoration.BLINK;
    public static final org.gwtproject.dom.style.shared.TextDecoration LINE_THROUGH =
        org.gwtproject.dom.style.shared.TextDecoration.LINE_THROUGH;
    public static final org.gwtproject.dom.style.shared.TextDecoration NONE =
        org.gwtproject.dom.style.shared.TextDecoration.NONE;
    public static final org.gwtproject.dom.style.shared.TextDecoration OVERLINE =
        org.gwtproject.dom.style.shared.TextDecoration.OVERLINE;
    public static final org.gwtproject.dom.style.shared.TextDecoration UNDERLINE =
        org.gwtproject.dom.style.shared.TextDecoration.UNDERLINE;
  }

  /**
   * Enum for the 'text-justify' CSS3 property.
   *
   * @deprecated Use {@link org.gwtproject.dom.style.shared.TextJustify} instead
   */
  @Deprecated
  public static class TextJustify {
    public static final org.gwtproject.dom.style.shared.TextJustify AUTO =
        org.gwtproject.dom.style.shared.TextJustify.AUTO;
    public static final org.gwtproject.dom.style.shared.TextJustify DISTRIBUTE =
        org.gwtproject.dom.style.shared.TextJustify.DISTRIBUTE;
    public static final org.gwtproject.dom.style.shared.TextJustify INTER_CHARACTER =
        org.gwtproject.dom.style.shared.TextJustify.INTER_CHARACTER;
    public static final org.gwtproject.dom.style.shared.TextJustify INTER_CLUSTER =
        org.gwtproject.dom.style.shared.TextJustify.INTER_CLUSTER;
    public static final org.gwtproject.dom.style.shared.TextJustify INTER_IDEOGRAPH =
        org.gwtproject.dom.style.shared.TextJustify.INTER_IDEOGRAPH;
    public static final org.gwtproject.dom.style.shared.TextJustify INTER_WORD =
        org.gwtproject.dom.style.shared.TextJustify.INTER_WORD;
    public static final org.gwtproject.dom.style.shared.TextJustify KASHIDA =
        org.gwtproject.dom.style.shared.TextJustify.KASHIDA;
    public static final org.gwtproject.dom.style.shared.TextJustify NONE =
        org.gwtproject.dom.style.shared.TextJustify.NONE;
  }

  /**
   * Enum for the 'text-overflow' CSS3 property.
   *
   * @deprecated Use {@link org.gwtproject.dom.style.shared.TextOverflow} instead
   */
  @Deprecated
  public static class TextOverflow {
    public static final org.gwtproject.dom.style.shared.TextOverflow CLIP =
        org.gwtproject.dom.style.shared.TextOverflow.CLIP;
    public static final org.gwtproject.dom.style.shared.TextOverflow ELLIPSIS =
        org.gwtproject.dom.style.shared.TextOverflow.ELLIPSIS;
  }

  /**
   * Enum for the 'text-transform' CSS property.
   *
   * @deprecated Use {@link org.gwtproject.dom.style.shared.TextTransform} instead
   */
  @Deprecated
  public static class TextTransform {
    public static final org.gwtproject.dom.style.shared.TextTransform CAPITALIZE =
        org.gwtproject.dom.style.shared.TextTransform.CAPITALIZE;
    public static final org.gwtproject.dom.style.shared.TextTransform NONE =
        org.gwtproject.dom.style.shared.TextTransform.NONE;
    public static final org.gwtproject.dom.style.shared.TextTransform LOWERCASE =
        org.gwtproject.dom.style.shared.TextTransform.LOWERCASE;
    public static final org.gwtproject.dom.style.shared.TextTransform UPPERCASE =
        org.gwtproject.dom.style.shared.TextTransform.UPPERCASE;
  }

  /**
   * Enum for the vertical-align property.
   *
   * @deprecated Use {@link org.gwtproject.dom.style.shared.VerticalAlign} instead
   */
  @Deprecated
  public static class VerticalAlign {
    public static final org.gwtproject.dom.style.shared.VerticalAlign BASELINE =
        org.gwtproject.dom.style.shared.VerticalAlign.BASELINE;
    public static final org.gwtproject.dom.style.shared.VerticalAlign SUB =
        org.gwtproject.dom.style.shared.VerticalAlign.SUB;
    public static final org.gwtproject.dom.style.shared.VerticalAlign SUPER =
        org.gwtproject.dom.style.shared.VerticalAlign.SUPER;
    public static final org.gwtproject.dom.style.shared.VerticalAlign TOP =
        org.gwtproject.dom.style.shared.VerticalAlign.TOP;
    public static final org.gwtproject.dom.style.shared.VerticalAlign TEXT_TOP =
        org.gwtproject.dom.style.shared.VerticalAlign.TEXT_TOP;
    public static final org.gwtproject.dom.style.shared.VerticalAlign MIDDLE =
        org.gwtproject.dom.style.shared.VerticalAlign.MIDDLE;
    public static final org.gwtproject.dom.style.shared.VerticalAlign BOTTOM =
        org.gwtproject.dom.style.shared.VerticalAlign.BOTTOM;
    public static final org.gwtproject.dom.style.shared.VerticalAlign TEXT_BOTTOM =
        org.gwtproject.dom.style.shared.VerticalAlign.TEXT_BOTTOM;
  }

  /**
   * Enum for the visibility property.
   *
   * @deprecated Use {@link org.gwtproject.dom.style.shared.Visibility} instead
   */
  @Deprecated
  public static class Visibility {
    public static final org.gwtproject.dom.style.shared.Visibility VISIBLE =
        org.gwtproject.dom.style.shared.Visibility.VISIBLE;
    public static final org.gwtproject.dom.style.shared.Visibility HIDDEN =
        org.gwtproject.dom.style.shared.Visibility.HIDDEN;
  }

  /**
   * Enum for the 'white-space' CSS property.
   *
   * @deprecated Use {@link org.gwtproject.dom.style.shared.WhiteSpace} instead
   */
  @Deprecated
  public static class WhiteSpace {
    public static final org.gwtproject.dom.style.shared.WhiteSpace NORMAL =
        org.gwtproject.dom.style.shared.WhiteSpace.NORMAL;
    public static final org.gwtproject.dom.style.shared.WhiteSpace NOWRAP =
        org.gwtproject.dom.style.shared.WhiteSpace.NOWRAP;
    public static final org.gwtproject.dom.style.shared.WhiteSpace PRE =
        org.gwtproject.dom.style.shared.WhiteSpace.PRE;
    public static final org.gwtproject.dom.style.shared.WhiteSpace PRE_LINE =
        org.gwtproject.dom.style.shared.WhiteSpace.PRE_LINE;
    public static final org.gwtproject.dom.style.shared.WhiteSpace PRE_WRAP =
        org.gwtproject.dom.style.shared.WhiteSpace.PRE_WRAP;
  }

  protected Style() {}

  /** Clear the background-color css property. */
  @JsOverlay
  public final void clearBackgroundColor() {
    clearProperty(BACKGROUND_COLOR);
  }

  /** Clear the background-image css property. */
  @JsOverlay
  public final void clearBackgroundImage() {
    clearProperty(BACKGROUND_IMAGE);
  }

  /** Clear the border-color css property. */
  @JsOverlay
  public final void clearBorderColor() {
    clearProperty(BORDER_COLOR);
  }

  /** Clears the border-style CSS property. */
  @JsOverlay
  public final void clearBorderStyle() {
    clearProperty(BORDER_STYLE);
  }

  /** Clear the border-width css property. */
  @JsOverlay
  public final void clearBorderWidth() {
    clearProperty(BORDER_WIDTH);
  }

  /** Clear the bottom css property. */
  @JsOverlay
  public final void clearBottom() {
    clearProperty(BOTTOM);
  }

  /** Clear the 'clear' CSS property. */
  @JsOverlay
  public final void clearClear() {
    clearProperty(CLEAR);
  }

  /** Clear the color css property. */
  @JsOverlay
  public final void clearColor() {
    clearProperty(COLOR);
  }

  /** Clears the cursor CSS property. */
  @JsOverlay
  public final void clearCursor() {
    clearProperty(CURSOR);
  }

  /** Clears the display CSS property. */
  @JsOverlay
  public final void clearDisplay() {
    clearProperty(DISPLAY);
  }

  /** Clear the float css property. */
  @JsOverlay
  public final void clearFloat() {
    clearProperty(FLOAT);
  }

  /** Clear the font-size css property. */
  @JsOverlay
  public final void clearFontSize() {
    clearProperty(FONT_SIZE);
  }

  /** Clears the font-style CSS property. */
  @JsOverlay
  public final void clearFontStyle() {
    clearProperty(FONT_STYLE);
  }

  /** Clears the font-weight CSS property. */
  @JsOverlay
  public final void clearFontWeight() {
    clearProperty(FONT_WEIGHT);
  }

  /** Clear the height css property. */
  @JsOverlay
  public final void clearHeight() {
    clearProperty(HEIGHT);
  }

  /** Clear the left css property. */
  @JsOverlay
  public final void clearLeft() {
    clearProperty(LEFT);
  }

  /** Clear the line-height css property. */
  @JsOverlay
  public final void clearLineHeight() {
    clearProperty(LINE_HEIGHT);
  }

  /** Clears the list-style-type CSS property. */
  @JsOverlay
  public final void clearListStyleType() {
    clearProperty(LIST_TYPE);
  }

  /** Clear the margin css property. */
  @JsOverlay
  public final void clearMargin() {
    clearProperty(MARGIN);
  }

  /** Clear the margin-bottom css property. */
  @JsOverlay
  public final void clearMarginBottom() {
    clearProperty(MARGIN_BOTTOM);
  }

  /** Clear the margin-left css property. */
  @JsOverlay
  public final void clearMarginLeft() {
    clearProperty(MARGIN_LEFT);
  }

  /** Clear the margin-right css property. */
  @JsOverlay
  public final void clearMarginRight() {
    clearProperty(MARGIN_RIGHT);
  }

  /** Clear the margin-top css property. */
  @JsOverlay
  public final void clearMarginTop() {
    clearProperty(MARGIN_TOP);
  }

  /** Clear the opacity css property. */
  @JsOverlay
  public final void clearOpacity() {
    Js.<CSSStyleDeclaration>uncheckedCast(this).opacity = CSSProperties.OpacityUnionType.of("");
  }

  /** Clear the outline-color css property. */
  @JsOverlay
  public final void clearOutlineColor() {
    clearProperty(OUTLINE_COLOR);
  }

  /** Clears the outline-style CSS property. */
  @JsOverlay
  public final void clearOutlineStyle() {
    clearProperty(OUTLINE_STYLE);
  }

  /** Clear the outline-width css property. */
  @JsOverlay
  public final void clearOutlineWidth() {
    clearProperty(OUTLINE_WIDTH);
  }

  /** Clears the overflow CSS property. */
  @JsOverlay
  public final void clearOverflow() {
    clearProperty(OVERFLOW);
  }

  /** Clears the overflow-x CSS property. */
  @JsOverlay
  public final void clearOverflowX() {
    clearProperty(OVERFLOW_X);
  }

  /** Clears the overflow-y CSS property. */
  @JsOverlay
  public final void clearOverflowY() {
    clearProperty(OVERFLOW_Y);
  }

  /** Clear the padding css property. */
  @JsOverlay
  public final void clearPadding() {
    clearProperty(PADDING);
  }

  /** Clear the padding-bottom css property. */
  @JsOverlay
  public final void clearPaddingBottom() {
    clearProperty(PADDING_BOTTOM);
  }

  /** Clear the padding-left css property. */
  @JsOverlay
  public final void clearPaddingLeft() {
    clearProperty(PADDING_LEFT);
  }

  /** Clear the padding-right css property. */
  @JsOverlay
  public final void clearPaddingRight() {
    clearProperty(PADDING_RIGHT);
  }

  /** Clear the padding-top css property. */
  @JsOverlay
  public final void clearPaddingTop() {
    clearProperty(PADDING_TOP);
  }

  /** Clears the position CSS property. */
  @JsOverlay
  public final void clearPosition() {
    clearProperty(POSITION);
  }

  /** Clears the value of a named property, causing it to revert to its default. */
  @JsOverlay
  public final void clearProperty(CssProperty name) {
    setProperty(name.getJsName(), "");
  }

  /** Clears the value of a named property, causing it to revert to its default. */
  @JsOverlay
  public final void clearProperty(String name) {
    setProperty(name, "");
  }

  /** Clear the right css property. */
  @JsOverlay
  public final void clearRight() {
    clearProperty(RIGHT);
  }

  /** Clear the table-layout css property. */
  @JsOverlay
  public final void clearTableLayout() {
    clearProperty(TABLE_LAYOUT);
  }

  /** Clear the 'text-align' CSS property. */
  @JsOverlay
  public final void clearTextAlign() {
    clearProperty(TEXT_ALIGN);
  }

  /** Clears the text-decoration CSS property. */
  @JsOverlay
  public final void clearTextDecoration() {
    clearProperty(TEXT_DECORATION);
  }

  /** Clear the 'text-indent' CSS property. */
  @JsOverlay
  public final void clearTextIndent() {
    clearProperty(TEXT_INDENT);
  }

  /** Clear the 'text-justify' CSS3 property. */
  @JsOverlay
  public final void clearTextJustify() {
    clearProperty(TEXT_JUSTIFY);
  }

  /** Clear the 'text-overflow' CSS3 property. */
  @JsOverlay
  public final void clearTextOverflow() {
    clearProperty(TEXT_OVERFLOW);
  }

  /** Clear the 'text-transform' CSS property. */
  @JsOverlay
  public final void clearTextTransform() {
    clearProperty(TEXT_TRANSFORM);
  }

  /** Clear the top css property. */
  @JsOverlay
  public final void clearTop() {
    clearProperty(TOP);
  }

  /** Clears the visibility CSS property. */
  @JsOverlay
  public final void clearVisibility() {
    clearProperty(VISIBILITY);
  }

  /** Clear the 'white-space' CSS property. */
  @JsOverlay
  public final void clearWhiteSpace() {
    clearProperty(WHITE_SPACE);
  }

  /** Clear the width css property. */
  @JsOverlay
  public final void clearWidth() {
    clearProperty(WIDTH);
  }

  /** Clear the z-index css property. */
  @JsOverlay
  public final void clearZIndex() {
    clearProperty(Z_INDEX);
  }

  /** Get the background-color css property. */
  @JsOverlay
  public final String getBackgroundColor() {
    return getProperty(BACKGROUND_COLOR);
  }

  /** Get the background-image css property. */
  @JsOverlay
  public final String getBackgroundImage() {
    return getProperty(BACKGROUND_IMAGE);
  }

  /** Get the border-color css property. */
  @JsOverlay
  public final String getBorderColor() {
    return getProperty(BORDER_COLOR);
  }

  /** Gets the border-style CSS property. */
  @JsOverlay
  public final String getBorderStyle() {
    return getProperty(BORDER_STYLE);
  }

  /** Get the border-width css property. */
  @JsOverlay
  public final String getBorderWidth() {
    return getProperty(BORDER_WIDTH);
  }

  /** Get the bottom css property. */
  @JsOverlay
  public final String getBottom() {
    return getProperty(BOTTOM);
  }

  /** Get the 'clear' CSS property. */
  @JsOverlay
  public final String getClear() {
    return getProperty(CLEAR);
  }

  /** Get the color css property. */
  @JsOverlay
  public final String getColor() {
    return getProperty(COLOR);
  }

  /** Gets the cursor CSS property. */
  @JsOverlay
  public final String getCursor() {
    return getProperty(CURSOR);
  }

  /** Gets the display CSS property. */
  @JsOverlay
  public final String getDisplay() {
    return getProperty(DISPLAY);
  }

  /** Get the font-size css property. */
  @JsOverlay
  public final String getFontSize() {
    return getProperty(FONT_SIZE);
  }

  /** Gets the font-style CSS property. */
  @JsOverlay
  public final String getFontStyle() {
    return getProperty(FONT_STYLE);
  }

  /** Gets the font-weight CSS property. */
  @JsOverlay
  public final String getFontWeight() {
    return getProperty(FONT_WEIGHT);
  }

  /** Get the height css property. */
  @JsOverlay
  public final String getHeight() {
    return getProperty(HEIGHT);
  }

  /** Get the left css property. */
  @JsOverlay
  public final String getLeft() {
    return getProperty(LEFT);
  }

  /** Get the line-height css property. */
  @JsOverlay
  public final String getLineHeight() {
    return getProperty(LINE_HEIGHT);
  }

  /** Gets the list-style-type CSS property. */
  @JsOverlay
  public final String getListStyleType() {
    return getProperty(LIST_TYPE);
  }

  /** Get the margin css property. */
  @JsOverlay
  public final String getMargin() {
    return getProperty(MARGIN);
  }

  /** Get the margin-bottom css property. */
  @JsOverlay
  public final String getMarginBottom() {
    return getProperty(MARGIN_BOTTOM);
  }

  /** Get the margin-left css property. */
  @JsOverlay
  public final String getMarginLeft() {
    return getProperty(MARGIN_LEFT);
  }

  /** Get the margin-right css property. */
  @JsOverlay
  public final String getMarginRight() {
    return getProperty(MARGIN_RIGHT);
  }

  /** Get the margin-top css property. */
  @JsOverlay
  public final String getMarginTop() {
    return getProperty(MARGIN_TOP);
  }

  /** Get the opacity css property. */
  @JsOverlay
  public final String getOpacity() {
    return getProperty(OPACITY);
  }

  /** Gets the overflow CSS property. */
  @JsOverlay
  public final String getOverflow() {
    return getProperty(OVERFLOW);
  }

  /** Gets the overflow-x CSS property. */
  @JsOverlay
  public final String getOverflowX() {
    return getProperty(OVERFLOW_X);
  }

  /** Gets the overflow-y CSS property. */
  @JsOverlay
  public final String getOverflowY() {
    return getProperty(OVERFLOW_Y);
  }

  /** Get the padding css property. */
  @JsOverlay
  public final String getPadding() {
    return getProperty(PADDING);
  }

  /** Get the padding-bottom css property. */
  @JsOverlay
  public final String getPaddingBottom() {
    return getProperty(PADDING_BOTTOM);
  }

  /** Get the padding-left css property. */
  @JsOverlay
  public final String getPaddingLeft() {
    return getProperty(PADDING_LEFT);
  }

  /** Get the padding-right css property. */
  @JsOverlay
  public final String getPaddingRight() {
    return getProperty(PADDING_RIGHT);
  }

  /** Get the padding-top css property. */
  @JsOverlay
  public final String getPaddingTop() {
    return getProperty(PADDING_TOP);
  }

  /** Gets the position CSS property. */
  @JsOverlay
  public final String getPosition() {
    return getProperty(POSITION);
  }

  /** Gets the value of a named property. */
  @JsOverlay
  public final String getProperty(CssProperty name) {
    return getPropertyImpl(name.getJsName());
  }

  /** Gets the value of a named property. */
  @JsOverlay
  public final String getProperty(String name) {
    assertCamelCase(name);
    return getPropertyImpl(name);
  }

  /** Get the right css property. */
  @JsOverlay
  public final String getRight() {
    return getProperty(RIGHT);
  }

  /** Gets the table-layout property. */
  @JsOverlay
  public final String getTableLayout() {
    return getProperty(TABLE_LAYOUT);
  }

  /** Get the 'text-align' CSS property. */
  @JsOverlay
  public final String getTextAlign() {
    return getProperty(TEXT_ALIGN);
  }

  /** Gets the text-decoration CSS property. */
  @JsOverlay
  public final String getTextDecoration() {
    return getProperty(TEXT_DECORATION);
  }

  /** Get the 'text-indent' CSS property. */
  @JsOverlay
  public final String getTextIndent() {
    return getProperty(TEXT_INDENT);
  }

  /** Get the 'text-justify' CSS3 property. */
  @JsOverlay
  public final String getTextJustify() {
    return getProperty(TEXT_JUSTIFY);
  }

  /** Get the 'text-overflow' CSS3 property. */
  @JsOverlay
  public final String getTextOverflow() {
    return getProperty(TEXT_OVERFLOW);
  }

  /** Get the 'text-transform' CSS property. */
  @JsOverlay
  public final String getTextTransform() {
    return getProperty(TEXT_TRANSFORM);
  }

  /** Get the top css property. */
  @JsOverlay
  public final String getTop() {
    return getProperty(TOP);
  }

  /** Gets the vertical-align CSS property. */
  @JsOverlay
  public final String getVerticalAlign() {
    return getProperty(VERTICAL_ALIGN);
  }

  /** Gets the visibility CSS property. */
  @JsOverlay
  public final String getVisibility() {
    return getProperty(VISIBILITY);
  }

  /** Get the 'white-space' CSS property. */
  @JsOverlay
  public final String getWhiteSpace() {
    return getProperty(WHITE_SPACE);
  }

  /** Get the width css property. */
  @JsOverlay
  public final String getWidth() {
    return getProperty(WIDTH);
  }

  /** Get the z-index css property. */
  @JsOverlay
  public final String getZIndex() {
    return getProperty(Z_INDEX);
  }

  /** Set the background-color css property. */
  @JsOverlay
  public final void setBackgroundColor(String value) {
    setProperty(BACKGROUND_COLOR, value);
  }

  /** Set the background-image css property. */
  @JsOverlay
  public final void setBackgroundImage(@IsSafeUri String value) {
    setProperty(BACKGROUND_IMAGE, value);
  }

  /** Set the border-color css property. */
  @JsOverlay
  public final void setBorderColor(String value) {
    setProperty(BORDER_COLOR, value);
  }

  /** Sets the border-style CSS property. */
  @JsOverlay
  public final void setBorderStyle(org.gwtproject.dom.style.shared.BorderStyle value) {
    setProperty(BORDER_STYLE, value.getCssName());
  }

  /** Set the border-width css property. */
  @JsOverlay
  public final void setBorderWidth(double value, org.gwtproject.dom.style.shared.Unit unit) {
    setProperty(BORDER_WIDTH, value, unit);
  }

  /** Set the bottom css property. */
  @JsOverlay
  public final void setBottom(double value, org.gwtproject.dom.style.shared.Unit unit) {
    setProperty(BOTTOM, value, unit);
  }

  /** Sets the 'clear' CSS property. */
  @JsOverlay
  public final void setClear(org.gwtproject.dom.style.shared.Clear value) {
    setProperty(CLEAR, value.getCssName());
  }

  /** Sets the color CSS property. */
  @JsOverlay
  public final void setColor(String value) {
    setProperty(COLOR, value);
  }

  /** Sets the cursor CSS property. */
  @JsOverlay
  public final void setCursor(org.gwtproject.dom.style.shared.Cursor value) {
    setProperty(CURSOR, value.getCssName());
  }

  /** Sets the display CSS property. */
  @JsOverlay
  public final void setDisplay(org.gwtproject.dom.style.shared.Display value) {
    setProperty(DISPLAY, value.getCssName());
  }

  /** Set the float css property. */
  @JsOverlay
  public final void setFloat(org.gwtproject.dom.style.shared.Float value) {
    setProperty(FLOAT, value.getCssName());
  }

  /** Set the font-size css property. */
  @JsOverlay
  public final void setFontSize(double value, org.gwtproject.dom.style.shared.Unit unit) {
    setProperty(FONT_SIZE, value, unit);
  }

  /** Sets the font-style CSS property. */
  @JsOverlay
  public final void setFontStyle(org.gwtproject.dom.style.shared.FontStyle value) {
    setProperty(FONT_STYLE, value.getCssName());
  }

  /** Sets the font-weight CSS property. */
  @JsOverlay
  public final void setFontWeight(org.gwtproject.dom.style.shared.FontWeight value) {
    setProperty(FONT_WEIGHT, value.getCssName());
  }

  /** Set the height css property. */
  @JsOverlay
  public final void setHeight(double value, org.gwtproject.dom.style.shared.Unit unit) {
    setProperty(HEIGHT, value, unit);
  }

  /** Set the left css property. */
  @JsOverlay
  public final void setLeft(double value, org.gwtproject.dom.style.shared.Unit unit) {
    setProperty(LEFT, value, unit);
  }

  /** Set the line-height css property. */
  @JsOverlay
  public final void setLineHeight(double value, org.gwtproject.dom.style.shared.Unit unit) {
    setProperty(LINE_HEIGHT, value, unit);
  }

  /** Sets the list-style-type CSS property. */
  @JsOverlay
  public final void setListStyleType(org.gwtproject.dom.style.shared.ListStyleType value) {
    setProperty(LIST_TYPE, value.getCssName());
  }

  /** Set the margin css property. */
  @JsOverlay
  public final void setMargin(double value, org.gwtproject.dom.style.shared.Unit unit) {
    setProperty(MARGIN, value, unit);
  }

  /** Set the margin-bottom css property. */
  @JsOverlay
  public final void setMarginBottom(double value, org.gwtproject.dom.style.shared.Unit unit) {
    setProperty(MARGIN_BOTTOM, value, unit);
  }

  /** Set the margin-left css property. */
  @JsOverlay
  public final void setMarginLeft(double value, org.gwtproject.dom.style.shared.Unit unit) {
    setProperty(MARGIN_LEFT, value, unit);
  }

  /** Set the margin-right css property. */
  @JsOverlay
  public final void setMarginRight(double value, org.gwtproject.dom.style.shared.Unit unit) {
    setProperty(MARGIN_RIGHT, value, unit);
  }

  /** Set the margin-top css property. */
  @JsOverlay
  public final void setMarginTop(double value, org.gwtproject.dom.style.shared.Unit unit) {
    setProperty(MARGIN_TOP, value, unit);
  }

  /** Set the opacity css property. */
  @JsOverlay
  public final void setOpacity(double value) {
    Js.<CSSStyleDeclaration>uncheckedCast(this).opacity = CSSProperties.OpacityUnionType.of(value);
  }

  /** Set the outline-color css property. */
  @JsOverlay
  public final void setOutlineColor(String value) {
    setProperty(OUTLINE_COLOR, value);
  }

  /** Sets the outline-style CSS property. */
  @JsOverlay
  public final void setOutlineStyle(org.gwtproject.dom.style.shared.OutlineStyle value) {
    setProperty(OUTLINE_STYLE, value.getCssName());
  }

  /** Set the outline-width css property. */
  @JsOverlay
  public final void setOutlineWidth(double value, org.gwtproject.dom.style.shared.Unit unit) {
    setProperty(OUTLINE_WIDTH, value, unit);
  }

  /** Sets the overflow CSS property. */
  @JsOverlay
  public final void setOverflow(org.gwtproject.dom.style.shared.Overflow value) {
    setProperty(OVERFLOW, value.getCssName());
  }

  /** Sets the overflow-x CSS property. */
  @JsOverlay
  public final void setOverflowX(org.gwtproject.dom.style.shared.Overflow value) {
    setProperty(OVERFLOW_X, value.getCssName());
  }

  /** Sets the overflow-y CSS property. */
  @JsOverlay
  public final void setOverflowY(org.gwtproject.dom.style.shared.Overflow value) {
    setProperty(OVERFLOW_Y, value.getCssName());
  }

  /** Set the padding css property. */
  @JsOverlay
  public final void setPadding(double value, org.gwtproject.dom.style.shared.Unit unit) {
    setProperty(PADDING, value, unit);
  }

  /** Set the padding-bottom css property. */
  @JsOverlay
  public final void setPaddingBottom(double value, org.gwtproject.dom.style.shared.Unit unit) {
    setProperty(PADDING_BOTTOM, value, unit);
  }

  /** Set the padding-left css property. */
  @JsOverlay
  public final void setPaddingLeft(double value, org.gwtproject.dom.style.shared.Unit unit) {
    setProperty(PADDING_LEFT, value, unit);
  }

  /** Set the padding-right css property. */
  @JsOverlay
  public final void setPaddingRight(double value, org.gwtproject.dom.style.shared.Unit unit) {
    setProperty(PADDING_RIGHT, value, unit);
  }

  /** Set the padding-top css property. */
  @JsOverlay
  public final void setPaddingTop(double value, org.gwtproject.dom.style.shared.Unit unit) {
    setProperty(PADDING_TOP, value, unit);
  }

  /** Sets the position CSS property. */
  @JsOverlay
  public final void setPosition(org.gwtproject.dom.style.shared.Position value) {
    setProperty(POSITION, value.getCssName());
  }

  /** Sets the value of a named property. */
  @JsOverlay
  public final void setProperty(CssProperty name, String value) {
    setPropertyImpl(name.getJsName(), value);
  }

  /** Sets the value of a named property. */
  @JsOverlay
  public final void setProperty(String name, String value) {
    assertCamelCase(name);
    setPropertyImpl(name, value);
  }

  /** Sets the value of a named property in the specified units. */
  @JsOverlay
  public final void setProperty(
      CssProperty name, double value, org.gwtproject.dom.style.shared.Unit unit) {
    setPropertyImpl(name.getJsName(), value + unit.getType());
  }

  /** Sets the value of a named property in the specified units. */
  @JsOverlay
  public final void setProperty(
      String name, double value, org.gwtproject.dom.style.shared.Unit unit) {
    assertCamelCase(name);
    setPropertyImpl(name, value + unit.getType());
  }

  /**
   * Sets the value of a named property, in pixels.
   *
   * <p>This is shorthand for <code>value + "px"</code>.
   */
  @JsOverlay
  public final void setPropertyPx(String name, int value) {
    setProperty(name, value, org.gwtproject.dom.style.shared.Unit.PX);
  }

  /** Set the right css property. */
  @JsOverlay
  public final void setRight(double value, org.gwtproject.dom.style.shared.Unit unit) {
    setProperty(RIGHT, value, unit);
  }

  /** Set the table-layout CSS property. */
  @JsOverlay
  public final void setTableLayout(org.gwtproject.dom.style.shared.TableLayout value) {
    setProperty(TABLE_LAYOUT, value.getCssName());
  }

  /** Set the 'text-align' CSS property. */
  @JsOverlay
  public final void setTextAlign(org.gwtproject.dom.style.shared.TextAlign value) {
    setProperty(TEXT_ALIGN, value.getCssName());
  }

  /** Sets the text-decoration CSS property. */
  @JsOverlay
  public final void setTextDecoration(org.gwtproject.dom.style.shared.TextDecoration value) {
    setProperty(TEXT_DECORATION, value.getCssName());
  }

  /** Set the 'text-indent' CSS property. */
  @JsOverlay
  public final void setTextIndent(double value, org.gwtproject.dom.style.shared.Unit unit) {
    setProperty(TEXT_INDENT, value, unit);
  }

  /** Set the 'text-justify' CSS3 property. */
  @JsOverlay
  public final void setTextJustify(org.gwtproject.dom.style.shared.TextJustify value) {
    setProperty(TEXT_JUSTIFY, value.getCssName());
  }

  /** Set the 'text-overflow' CSS3 property. */
  @JsOverlay
  public final void setTextOverflow(org.gwtproject.dom.style.shared.TextOverflow value) {
    setProperty(TEXT_OVERFLOW, value.getCssName());
  }

  /** Set the 'text-transform' CSS property. */
  @JsOverlay
  public final void setTextTransform(org.gwtproject.dom.style.shared.TextTransform value) {
    setProperty(TEXT_TRANSFORM, value.getCssName());
  }

  /** Set the top css property. */
  @JsOverlay
  public final void setTop(double value, org.gwtproject.dom.style.shared.Unit unit) {
    setProperty(TOP, value, unit);
  }

  /** Sets the vertical-align CSS property. */
  @JsOverlay
  public final void setVerticalAlign(org.gwtproject.dom.style.shared.VerticalAlign value) {
    setProperty(VERTICAL_ALIGN, value.getCssName());
  }

  /** Sets the vertical-align CSS property. */
  @JsOverlay
  public final void setVerticalAlign(double value, org.gwtproject.dom.style.shared.Unit unit) {
    setProperty(VERTICAL_ALIGN, value, unit);
  }

  /** Sets the visibility CSS property. */
  @JsOverlay
  public final void setVisibility(org.gwtproject.dom.style.shared.Visibility value) {
    setProperty(VISIBILITY, value.getCssName());
  }

  /** Set the 'white-space' CSS property. */
  @JsOverlay
  public final void setWhiteSpace(org.gwtproject.dom.style.shared.WhiteSpace value) {
    setProperty(WHITE_SPACE, value.getCssName());
  }

  /** Set the width css property. */
  @JsOverlay
  public final void setWidth(double value, org.gwtproject.dom.style.shared.Unit unit) {
    setProperty(WIDTH, value, unit);
  }

  /** Set the z-index css property. */
  @JsOverlay
  public final void setZIndex(int value) {
    setProperty(Z_INDEX, value + "");
  }

  /**
   * Assert that the specified property does not contain a hyphen.
   *
   * @param name the property name
   */
  @JsOverlay
  private void assertCamelCase(String name) {
    assert !name.contains("-") : "The style name '" + name + "' should be in camelCase format";
  }

  /** Gets the value of a named property. */
  @JsOverlay
  private String getPropertyImpl(String name) {
    return Js.<JsPropertyMap<String>>uncheckedCast(this).get(name);
  }

  /** Sets the value of a named property. */
  @JsOverlay
  private void setPropertyImpl(String name, String value) {
    Js.asPropertyMap(this).set(name, value);
  }
}

