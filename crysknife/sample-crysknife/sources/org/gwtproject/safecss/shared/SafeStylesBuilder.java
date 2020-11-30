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
package org.gwtproject.safecss.shared;

import org.gwtproject.dom.style.shared.*;
import org.gwtproject.dom.style.shared.Float;
import org.gwtproject.safehtml.shared.SafeUri;

/**
 * A builder that facilitates the building up of XSS-safe CSS attribute strings from {@link
 * SafeStyles}. It is used essentially like a {@link StringBuilder}, but access {@link SafeStyles}
 * instead of Strings.
 *
 * <p>The accumulated XSS-safe {@link SafeStyles} can be obtained in the form of a {@link
 * SafeStyles} via the {@link #toSafeStyles()} method.
 *
 * <p>This class is not thread-safe.
 */
public final class SafeStylesBuilder {

  private final StringBuilder sb = new StringBuilder();

  /** Constructs an empty {@link SafeStylesBuilder}. */
  public SafeStylesBuilder() {}

  /**
   * Appends {@link SafeStyles} constructed from a trusted string, i.e., without escaping the
   * string. Only minimal checks are performed. The calling code should be carefully reviewed to
   * ensure the argument meets the {@link SafeStyles} contract.
   *
   * <p>Generally, {@link SafeStyles} should be of the form {@code cssPropertyName:value;}, where
   * neither the name nor the value contain malicious scripts.
   *
   * <p>{@link SafeStyles} may never contain literal angle brackets. Otherwise, it could be unsafe
   * to place a {@link SafeStyles} into a &lt;style&gt; tag (where it can't be HTML escaped). For
   * example, if the {@link SafeStyles} containing " <code>
   * font: 'foo &lt;style&gt;&lt;script&gt;evil&lt;/script&gt;</code>'" is used in a style sheet in
   * a &lt;style&gt; tag, this could then break out of the style context into HTML.
   *
   * <p>The following example values comply with this type's contract:
   *
   * <ul>
   *   <li><code>width: 1em;</code>
   *   <li><code>height:1em;</code>
   *   <li><code>width: 1em;height: 1em;</code>
   *   <li><code>background:url('http://url');</code>
   * </ul>
   *
   * <p>In addition, the empty string is safe for use in a CSS attribute.
   *
   * <p>The following example values do <em>not</em> comply with this type's contract:
   *
   * <ul>
   *   <li><code>background: red</code> (missing a trailing semi-colon)
   *   <li><code>background:</code> (missing a value and a trailing semi-colon)
   *   <li><code>1em</code> (missing an attribute name, which provides context for the value)
   * </ul>
   *
   * @param styles the input String
   * @return a {@link SafeStyles} instance
   */
  public SafeStylesBuilder appendTrustedString(String styles) {
    SafeStylesUtils.verifySafeStylesConstraints(styles);
    sb.append(styles);
    return this;
  }

  /**
   * Append the background-image CSS property.
   *
   * @param uri the URI of the background image
   * @return a reference to this object
   * @see #trustedBackgroundImage(String)
   */
  public SafeStylesBuilder backgroundImage(SafeUri uri) {
    return append(SafeStylesUtils.forBackgroundImage(uri));
  }

  /**
   * Appends the contents of another {@link SafeStyles} object, without applying any escaping or
   * sanitization to it.
   *
   * @param styles the {@link SafeStyles} to append
   * @return a reference to this object
   */
  public SafeStylesBuilder append(SafeStyles styles) {
    sb.append(styles.asString());
    return this;
  }

  /**
   * Append the border-style CSS property.
   *
   * @param value the border-style value
   * @return a reference to this object
   */
  public SafeStylesBuilder borderStyle(BorderStyle value) {
    return append(SafeStylesUtils.forBorderStyle(value));
  }

  /**
   * Append the border-width css property.
   *
   * @param value the border-width value
   * @param unit the border-width unit
   * @return a reference to this object
   */
  public SafeStylesBuilder borderWidth(double value, Unit unit) {
    return append(SafeStylesUtils.forBorderWidth(value, unit));
  }

  /**
   * Append the bottom css property.
   *
   * @param value the bottom value
   * @param unit the bottom unit
   * @return a reference to this object
   */
  public SafeStylesBuilder bottom(double value, Unit unit) {
    return append(SafeStylesUtils.forBottom(value, unit));
  }

  /**
   * Append the 'clear' CSS property.
   *
   * @param value the clear value
   * @return a reference to this object
   */
  public SafeStylesBuilder clear(Clear value) {
    return append(SafeStylesUtils.forClear(value));
  }

  /**
   * Append the cursor CSS property.
   *
   * @param value the cursor value
   * @return a reference to this object
   */
  public SafeStylesBuilder cursor(Cursor value) {
    return append(SafeStylesUtils.forCursor(value));
  }

  /**
   * Append the display CSS property.
   *
   * @param value the display value
   * @return a reference to this object
   */
  public SafeStylesBuilder display(Display value) {
    return append(SafeStylesUtils.forDisplay(value));
  }

  /**
   * Append the float css property.
   *
   * <p>Note: This method has the suffix "prop" to avoid Java compilation errors. The term "float"
   * is a reserved word in Java representing the primitive float.
   *
   * @param value the float value
   * @return a reference to this object
   */
  public SafeStylesBuilder floatprop(Float value) {
    return append(SafeStylesUtils.forFloat(value));
  }

  /**
   * Append the font-size css property.
   *
   * @param value the font-size value
   * @param unit the font-size unit
   * @return a reference to this object
   */
  public SafeStylesBuilder fontSize(double value, Unit unit) {
    return append(SafeStylesUtils.forFontSize(value, unit));
  }

  /**
   * Append the font-style CSS property.
   *
   * @param value the font-style enum value
   * @return a reference to this object
   */
  public SafeStylesBuilder fontStyle(FontStyle value) {
    return append(SafeStylesUtils.forFontStyle(value));
  }

  /**
   * Append the font-weight CSS property.
   *
   * @param value the font-weight enum value
   * @return a reference to this object
   */
  public SafeStylesBuilder fontWeight(FontWeight value) {
    return append(SafeStylesUtils.forFontWeight(value));
  }

  /**
   * Append the height css property.
   *
   * @param value the height value
   * @param unit the height unit
   * @return a reference to this object
   */
  public SafeStylesBuilder height(double value, Unit unit) {
    return append(SafeStylesUtils.forHeight(value, unit));
  }

  /**
   * Append the left css property.
   *
   * @param value the left value
   * @param unit the left unit
   * @return a reference to this object
   */
  public SafeStylesBuilder left(double value, Unit unit) {
    return append(SafeStylesUtils.forLeft(value, unit));
  }

  /**
   * Append the list-style-type CSS property.
   *
   * @param value the list-type-type value
   * @return a reference to this object
   */
  public SafeStylesBuilder listStyleType(ListStyleType value) {
    return append(SafeStylesUtils.forListStyleType(value));
  }

  /**
   * Append the margin css property.
   *
   * @param value the margin value
   * @param unit the margin unit
   * @return a reference to this object
   */
  public SafeStylesBuilder margin(double value, Unit unit) {
    return append(SafeStylesUtils.forMargin(value, unit));
  }

  /**
   * Append the margin-bottom css property.
   *
   * @param value the margin-bottom value
   * @param unit the margin-bottom unit
   * @return a reference to this object
   */
  public SafeStylesBuilder marginBottom(double value, Unit unit) {
    return append(SafeStylesUtils.forMarginBottom(value, unit));
  }

  /**
   * Append the margin-left css property.
   *
   * @param value the margin-left value
   * @param unit the margin-left unit
   * @return a reference to this object
   */
  public SafeStylesBuilder marginLeft(double value, Unit unit) {
    return append(SafeStylesUtils.forMarginLeft(value, unit));
  }

  /**
   * Append the margin-right css property.
   *
   * @param value the margin-right value
   * @param unit the margin-right unit
   * @return a reference to this object
   */
  public SafeStylesBuilder marginRight(double value, Unit unit) {
    return append(SafeStylesUtils.forMarginRight(value, unit));
  }

  /**
   * Append the margin-top css property.
   *
   * @param value the margin-top value
   * @param unit the martin-top unit
   * @return a reference to this object
   */
  public SafeStylesBuilder marginTop(double value, Unit unit) {
    return append(SafeStylesUtils.forMarginTop(value, unit));
  }

  /**
   * Append the opacity css property.
   *
   * @param value the opacity value
   * @return a reference to this object
   */
  public SafeStylesBuilder opacity(double value) {
    return append(SafeStylesUtils.forOpacity(value));
  }

  /**
   * Append the overflow CSS property.
   *
   * @param value the overflow value
   * @return a reference to this object
   */
  public SafeStylesBuilder overflow(Overflow value) {
    return append(SafeStylesUtils.forOverflow(value));
  }

  /**
   * Append the overflow-x CSS property.
   *
   * @param value the overflow-x value
   * @return a reference to this object
   */
  public SafeStylesBuilder overflowX(Overflow value) {
    return append(SafeStylesUtils.forOverflowX(value));
  }

  /**
   * Append the overflow-y CSS property.
   *
   * @param value the overflow-y value
   * @return a reference to this object
   */
  public SafeStylesBuilder overflowY(Overflow value) {
    return append(SafeStylesUtils.forOverflowY(value));
  }

  /**
   * Append the padding css property.
   *
   * @param value the padding value
   * @param unit the padding unit
   * @return a reference to this object
   */
  public SafeStylesBuilder padding(double value, Unit unit) {
    return append(SafeStylesUtils.forPadding(value, unit));
  }

  /**
   * Append the padding-bottom css property.
   *
   * @param value the padding-bottom value
   * @param unit the padding-bottom unit
   * @return a reference to this object
   */
  public SafeStylesBuilder paddingBottom(double value, Unit unit) {
    return append(SafeStylesUtils.forPaddingBottom(value, unit));
  }

  /**
   * Append the padding-left css property.
   *
   * @param value the padding-left value
   * @param unit the padding-left unit
   * @return a reference to this object
   */
  public SafeStylesBuilder paddingLeft(double value, Unit unit) {
    return append(SafeStylesUtils.forPaddingLeft(value, unit));
  }

  /**
   * Append the padding-right css property.
   *
   * @param value the padding-right value
   * @param unit the padding-right unit
   * @return a reference to this object
   */
  public SafeStylesBuilder paddingRight(double value, Unit unit) {
    return append(SafeStylesUtils.forPaddingRight(value, unit));
  }

  /**
   * Append the padding-top css property.
   *
   * @param value the padding-top value
   * @param unit the padding-top unit
   * @return a reference to this object
   */
  public SafeStylesBuilder paddingTop(double value, Unit unit) {
    return append(SafeStylesUtils.forPaddingTop(value, unit));
  }

  /**
   * Append the position CSS property.
   *
   * @param value the position value
   * @return a reference to this object
   */
  public SafeStylesBuilder position(Position value) {
    return append(SafeStylesUtils.forPosition(value));
  }

  /**
   * Append the right css property.
   *
   * @param value the right value
   * @param unit the right unit
   * @return a reference to this object
   */
  public SafeStylesBuilder right(double value, Unit unit) {
    return append(SafeStylesUtils.forRight(value, unit));
  }

  /**
   * Append the table-layout CSS property.
   *
   * @param value the table-layout value
   * @return a reference to this object
   */
  public SafeStylesBuilder tableLayout(TableLayout value) {
    return append(SafeStylesUtils.forTableLayout(value));
  }

  /**
   * Append the 'text-align' CSS property.
   *
   * @param value the text-align value
   * @return a reference to this object
   */
  public SafeStylesBuilder textAlign(TextAlign value) {
    return append(SafeStylesUtils.forTextAlign(value));
  }

  /**
   * Append the text-decoration CSS property.
   *
   * @param value the text-decoration value
   * @return a reference to this object
   */
  public SafeStylesBuilder textDecoration(TextDecoration value) {
    return append(SafeStylesUtils.forTextDecoration(value));
  }

  /**
   * Append the 'text-indent' CSS property.
   *
   * @param value the text-indent value
   * @param unit the text-indent unit
   * @return a reference to this object
   */
  public SafeStylesBuilder textIndent(double value, Unit unit) {
    return append(SafeStylesUtils.forTextIndent(value, unit));
  }

  /**
   * Append the 'text-justify' CSS3 property.
   *
   * @param value the text-justify value
   * @return a reference to this object
   */
  public SafeStylesBuilder textJustify(TextJustify value) {
    return append(SafeStylesUtils.forTextJustify(value));
  }

  /**
   * Append the 'text-overflow' CSS3 property.
   *
   * @param value the text-overflow value
   * @return a reference to this object
   */
  public SafeStylesBuilder textOverflow(TextOverflow value) {
    return append(SafeStylesUtils.forTextOverflow(value));
  }

  /**
   * Append the 'text-transform' CSS property.
   *
   * @param value the text-transform value
   * @return a reference to this object
   */
  public SafeStylesBuilder textTransform(TextTransform value) {
    return append(SafeStylesUtils.forTextTransform(value));
  }

  /**
   * Append the top css property.
   *
   * @param value the top value
   * @param unit the top unit
   * @return a reference to this object
   */
  public SafeStylesBuilder top(double value, Unit unit) {
    return append(SafeStylesUtils.forTop(value, unit));
  }

  /**
   * Returns the safe CSS properties accumulated in the builder as a {@link SafeStyles}.
   *
   * @return a {@link SafeStyles} instance
   */
  public SafeStyles toSafeStyles() {
    return new SafeStylesString(sb.toString());
  }

  /**
   * Append the trusted background color, i.e., without escaping the value. No checks are performed.
   * The calling code should be carefully reviewed to ensure the argument will satisfy the {@link
   * SafeStyles} contract when they are composed into the form: "&lt;name&gt;:&lt;value&gt;;".
   *
   * <p>{@link SafeStyles} may never contain literal angle brackets. Otherwise, it could be unsafe
   * to place a {@link SafeStyles} into a &lt;style&gt; tag (where it can't be HTML escaped). For
   * example, if the {@link SafeStyles} containing " <code>
   * font: 'foo &lt;style&gt;&lt;script&gt;evil&lt;/script&gt;</code>'" is used in a style sheet in
   * a &lt;style&gt; tag, this could then break out of the style context into HTML.
   *
   * @param value the property value
   * @return a {@link SafeStyles} instance
   */
  public SafeStylesBuilder trustedBackgroundColor(String value) {
    return append(SafeStylesUtils.forTrustedBackgroundColor(value));
  }

  /**
   * Append the trusted background image, i.e., without escaping the value. No checks are performed.
   * The calling code should be carefully reviewed to ensure the argument will satisfy the {@link
   * SafeStyles} contract when they are composed into the form: "&lt;name&gt;:&lt;value&gt;;".
   *
   * <p>{@link SafeStyles} may never contain literal angle brackets. Otherwise, it could be unsafe
   * to place a {@link SafeStyles} into a &lt;style&gt; tag (where it can't be HTML escaped). For
   * example, if the {@link SafeStyles} containing " <code>
   * font: 'foo &lt;style&gt;&lt;script&gt;evil&lt;/script&gt;</code>'" is used in a style sheet in
   * a &lt;style&gt; tag, this could then break out of the style context into HTML.
   *
   * @param value the property value
   * @return a {@link SafeStyles} instance
   * @see #backgroundImage(SafeUri)
   */
  public SafeStylesBuilder trustedBackgroundImage(String value) {
    return append(SafeStylesUtils.forTrustedBackgroundImage(value));
  }

  /**
   * Append the trusted border color, i.e., without escaping the value. No checks are performed. The
   * calling code should be carefully reviewed to ensure the argument will satisfy the {@link
   * SafeStyles} contract when they are composed into the form: "&lt;name&gt;:&lt;value&gt;;".
   *
   * <p>{@link SafeStyles} may never contain literal angle brackets. Otherwise, it could be unsafe
   * to place a {@link SafeStyles} into a &lt;style&gt; tag (where it can't be HTML escaped). For
   * example, if the {@link SafeStyles} containing " <code>
   * font: 'foo &lt;style&gt;&lt;script&gt;evil&lt;/script&gt;</code>'" is used in a style sheet in
   * a &lt;style&gt; tag, this could then break out of the style context into HTML.
   *
   * @param value the property value
   * @return a {@link SafeStyles} instance
   */
  public SafeStylesBuilder trustedBorderColor(String value) {
    return append(SafeStylesUtils.forTrustedBorderColor(value));
  }

  /**
   * Append the trusted font color, i.e., without escaping the value. No checks are performed. The
   * calling code should be carefully reviewed to ensure the argument will satisfy the {@link
   * SafeStyles} contract when they are composed into the form: "&lt;name&gt;:&lt;value&gt;;".
   *
   * <p>{@link SafeStyles} may never contain literal angle brackets. Otherwise, it could be unsafe
   * to place a {@link SafeStyles} into a &lt;style&gt; tag (where it can't be HTML escaped). For
   * example, if the {@link SafeStyles} containing " <code>
   * font: 'foo &lt;style&gt;&lt;script&gt;evil&lt;/script&gt;</code>'" is used in a style sheet in
   * a &lt;style&gt; tag, this could then break out of the style context into HTML.
   *
   * @param value the property value
   * @return a {@link SafeStyles} instance
   */
  public SafeStylesBuilder trustedColor(String value) {
    return append(SafeStylesUtils.forTrustedColor(value));
  }

  /**
   * Append a {@link SafeStyles} constructed from a trusted name and a trusted value, i.e., without
   * escaping the name and value. No checks are performed. The calling code should be carefully
   * reviewed to ensure the argument will satisfy the {@link SafeStyles} contract when they are
   * composed into the form: "&lt;name&gt;:&lt;value&gt;;".
   *
   * <p>{@link SafeStyles} may never contain literal angle brackets. Otherwise, it could be unsafe
   * to place a {@link SafeStyles} into a &lt;style&gt; tag (where it can't be HTML escaped). For
   * example, if the {@link SafeStyles} containing " <code>
   * font: 'foo &lt;style&gt;&lt;script&gt;evil&lt;/script&gt;</code>'" is used in a style sheet in
   * a &lt;style&gt; tag, this could then break out of the style context into HTML.
   *
   * <p>The name should be in hyphenated format, not camelCase format.
   *
   * @param name the property name
   * @param value the property value
   * @return a {@link SafeStyles} instance
   */
  public SafeStylesBuilder trustedNameAndValue(String name, double value, Unit unit) {
    return append(SafeStylesUtils.fromTrustedNameAndValue(name, value, unit));
  }

  /**
   * Append a {@link SafeStyles} constructed from a trusted name and a trusted value, i.e., without
   * escaping the name and value. No checks are performed. The calling code should be carefully
   * reviewed to ensure the argument will satisfy the {@link SafeStyles} contract when they are
   * composed into the form: "&lt;name&gt;:&lt;value&gt;;".
   *
   * <p>{@link SafeStyles} may never contain literal angle brackets. Otherwise, it could be unsafe
   * to place a {@link SafeStyles} into a &lt;style&gt; tag (where it can't be HTML escaped). For
   * example, if the {@link SafeStyles} containing " <code>
   * font: 'foo &lt;style&gt;&lt;script&gt;evil&lt;/script&gt;</code>'" is used in a style sheet in
   * a &lt;style&gt; tag, this could then break out of the style context into HTML.
   *
   * <p>The name should be in hyphenated format, not camelCase format.
   *
   * @param name the property name
   * @param value the property value
   * @return a {@link SafeStyles} instance
   */
  public SafeStylesBuilder trustedNameAndValue(String name, String value) {
    return append(SafeStylesUtils.fromTrustedNameAndValue(name, value));
  }

  /**
   * Append the vertical-align CSS property.
   *
   * @param value the vertical align value
   * @param unit the vertical align unit
   * @return a reference to this object
   */
  public SafeStylesBuilder verticalAlign(double value, Unit unit) {
    return append(SafeStylesUtils.forVerticalAlign(value, unit));
  }

  /**
   * Append the vertical-align CSS property.
   *
   * @param value the vertical-align enum value
   * @return a reference to this object
   */
  public SafeStylesBuilder verticalAlign(VerticalAlign value) {
    return append(SafeStylesUtils.forVerticalAlign(value));
  }

  /**
   * Append the visibility CSS property.
   *
   * @param value the visibility value
   * @return a reference to this object
   */
  public SafeStylesBuilder visibility(Visibility value) {
    return append(SafeStylesUtils.forVisibility(value));
  }

  /**
   * Append the 'white-space' CSS property.
   *
   * @param whiteSpace the white-space value
   * @return a reference to this object
   */
  public SafeStylesBuilder whiteSpace(WhiteSpace whiteSpace) {
    return append(SafeStylesUtils.forWhiteSpace(whiteSpace));
  }

  /**
   * Append the width css property.
   *
   * @param value the width value
   * @param unit the width unit
   * @return a reference to this object
   */
  public SafeStylesBuilder width(double value, Unit unit) {
    return append(SafeStylesUtils.forWidth(value, unit));
  }

  /**
   * Append the z-index css property.
   *
   * @param value the z-index value
   * @return a reference to this object
   */
  public SafeStylesBuilder zIndex(int value) {
    return append(SafeStylesUtils.forZIndex(value));
  }
}

