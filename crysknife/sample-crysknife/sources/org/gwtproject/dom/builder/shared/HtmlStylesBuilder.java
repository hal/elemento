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
package org.gwtproject.dom.builder.shared;

import java.util.HashMap;
import java.util.Locale;
import java.util.Map;
import org.gwtproject.dom.style.shared.*;
import org.gwtproject.dom.style.shared.Float;
import org.gwtproject.regexp.shared.MatchResult;
import org.gwtproject.regexp.shared.RegExp;
import org.gwtproject.safecss.shared.SafeStylesUtils;
import org.gwtproject.safehtml.shared.SafeUri;
import org.gwtproject.safehtml.shared.annotations.IsSafeUri;

/** Builds the style object. */
class HtmlStylesBuilder implements StylesBuilder {

  /**
   * A map of camelCase style properties to their hyphenated equivalents.
   *
   * <p>The set of style property names is limited, and common ones are reused frequently, so
   * caching saves us from converting every style property name from camelCase to hyphenated form.
   */
  private static Map<String, String> camelCaseMap;

  /**
   * Regex to match a word in a camelCase phrase. A word starts with an uppercase or lowercase
   * letter, followed by zero or more non-uppercase letters. For example, in the camelCase phrase
   * backgroundUrl, the pattern matches "background" and "Url".
   *
   * <p>This pattern is not used to validate the style property name. {@link SafeStylesUtils}
   * performs a more detailed check.
   */
  private static RegExp camelCaseWord;

  /** Regex to match a word that starts with an uppercase letter. */
  private static RegExp caseWord;

  /**
   * Convert a camelCase or hyphenated string to a hyphenated string.
   *
   * @param name the camelCase or hyphenated string to convert
   * @return the hyphenated string
   */
  // Visible for testing
  static String toHyphenatedForm(String name) {
    // Static initializers.
    if (camelCaseWord == null) {
      camelCaseMap = new HashMap<String, String>();
      camelCaseWord = RegExp.compile("([A-Za-z])([^A-Z]*)", "g");
      caseWord = RegExp.compile("[A-Z]([^A-Z]*)");
    }

    // Early exit if already in hyphenated form.
    if (name.contains("-")) {
      return name;
    }

    // Check for the name in the cache.
    String hyphenated = camelCaseMap.get(name);

    // Convert the name to hyphenated format if not in the cache.
    if (hyphenated == null) {
      hyphenated = "";
      MatchResult matches;
      while ((matches = camelCaseWord.exec(name)) != null) {
        String word = matches.getGroup(0);
        if (caseWord.exec(word) == null) {
          // The first letter is already lowercase, probably the first word.
          hyphenated += word;
        } else {
          // Hyphenate the first letter.
          hyphenated += "-" + matches.getGroup(1).toLowerCase(Locale.ROOT);
          if (matches.getGroupCount() > 1) {
            hyphenated += matches.getGroup(2);
          }
        }
      }
      camelCaseMap.put(name, hyphenated);
    }

    return hyphenated;
  }

  private final HtmlBuilderImpl delegate;

  /**
   * Construct a new {@link HtmlStylesBuilder}.
   *
   * @param delegate the delegate that builds the style
   */
  HtmlStylesBuilder(HtmlBuilderImpl delegate) {
    this.delegate = delegate;
  }

  @Override
  public StylesBuilder backgroundImage(SafeUri uri) {
    return delegate.styleProperty(SafeStylesUtils.forBackgroundImage(uri));
  }

  @Override
  public StylesBuilder borderStyle(BorderStyle value) {
    return delegate.styleProperty(
        SafeStylesUtils.fromTrustedNameAndValue("border-style", value.getCssName()));
  }

  @Override
  public StylesBuilder borderWidth(double value, Unit unit) {
    return delegate.styleProperty(
        SafeStylesUtils.fromTrustedNameAndValue("border-width", value + unit.getType()));
  }

  @Override
  public StylesBuilder bottom(double value, Unit unit) {
    return delegate.styleProperty(
        SafeStylesUtils.fromTrustedNameAndValue("bottom", value + unit.getType()));
  }

  @Override
  public StylesBuilder cursor(Cursor value) {
    return delegate.styleProperty(
        SafeStylesUtils.fromTrustedNameAndValue("cursor", value.getCssName()));
  }

  @Override
  public StylesBuilder display(Display value) {
    return delegate.styleProperty(
        SafeStylesUtils.fromTrustedNameAndValue("display", value.getCssName()));
  }

  @Override
  public void endStyle() {
    delegate.endStyle();
  }

  @Override
  public StylesBuilder floatprop(Float value) {
    return delegate.styleProperty(
        SafeStylesUtils.fromTrustedNameAndValue("float", value.getCssName()));
  }

  @Override
  public StylesBuilder fontSize(double value, Unit unit) {
    return delegate.styleProperty(
        SafeStylesUtils.fromTrustedNameAndValue("font-size", value + unit.getType()));
  }

  @Override
  public StylesBuilder fontStyle(FontStyle value) {
    return delegate.styleProperty(
        SafeStylesUtils.fromTrustedNameAndValue("font-style", value.getCssName()));
  }

  @Override
  public StylesBuilder fontWeight(FontWeight value) {
    return delegate.styleProperty(
        SafeStylesUtils.fromTrustedNameAndValue("font-weight", value.getCssName()));
  }

  @Override
  public StylesBuilder height(double value, Unit unit) {
    return delegate.styleProperty(
        SafeStylesUtils.fromTrustedNameAndValue("height", value + unit.getType()));
  }

  @Override
  public StylesBuilder left(double value, Unit unit) {
    return delegate.styleProperty(
        SafeStylesUtils.fromTrustedNameAndValue("left", value + unit.getType()));
  }

  @Override
  public StylesBuilder lineHeight(double value, Unit unit) {
    return delegate.styleProperty(
        SafeStylesUtils.fromTrustedNameAndValue("line-height", value + unit.getType()));
  }

  @Override
  public StylesBuilder listStyleType(ListStyleType value) {
    return delegate.styleProperty(
        SafeStylesUtils.fromTrustedNameAndValue("list-style-type", value.getCssName()));
  }

  @Override
  public StylesBuilder margin(double value, Unit unit) {
    return delegate.styleProperty(
        SafeStylesUtils.fromTrustedNameAndValue("margin", value + unit.getType()));
  }

  @Override
  public StylesBuilder marginBottom(double value, Unit unit) {
    return delegate.styleProperty(
        SafeStylesUtils.fromTrustedNameAndValue("margin-bottom", value + unit.getType()));
  }

  @Override
  public StylesBuilder marginLeft(double value, Unit unit) {
    return delegate.styleProperty(
        SafeStylesUtils.fromTrustedNameAndValue("margin-left", value + unit.getType()));
  }

  @Override
  public StylesBuilder marginRight(double value, Unit unit) {
    return delegate.styleProperty(
        SafeStylesUtils.fromTrustedNameAndValue("margin-right", value + unit.getType()));
  }

  @Override
  public StylesBuilder marginTop(double value, Unit unit) {
    return delegate.styleProperty(
        SafeStylesUtils.fromTrustedNameAndValue("margin-top", value + unit.getType()));
  }

  @Override
  public StylesBuilder opacity(double value) {
    return delegate.styleProperty(SafeStylesUtils.forOpacity(value));
  }

  @Override
  public StylesBuilder outlineStyle(OutlineStyle value) {
    return delegate.styleProperty(
        SafeStylesUtils.fromTrustedNameAndValue("outline-style", value.getCssName()));
  }

  @Override
  public StylesBuilder outlineWidth(double value, Unit unit) {
    return delegate.styleProperty(
        SafeStylesUtils.fromTrustedNameAndValue("outline-width", value + unit.getType()));
  }

  @Override
  public StylesBuilder overflow(Overflow value) {
    return delegate.styleProperty(
        SafeStylesUtils.fromTrustedNameAndValue("overflow", value.getCssName()));
  }

  @Override
  public StylesBuilder overflowX(Overflow value) {
    return delegate.styleProperty(
        SafeStylesUtils.fromTrustedNameAndValue("overflow-x", value.getCssName()));
  }

  @Override
  public StylesBuilder overflowY(Overflow value) {
    return delegate.styleProperty(
        SafeStylesUtils.fromTrustedNameAndValue("overflow-y", value.getCssName()));
  }

  @Override
  public StylesBuilder padding(double value, Unit unit) {
    return delegate.styleProperty(
        SafeStylesUtils.fromTrustedNameAndValue("padding", value + unit.getType()));
  }

  @Override
  public StylesBuilder paddingBottom(double value, Unit unit) {
    return delegate.styleProperty(
        SafeStylesUtils.fromTrustedNameAndValue("padding-bottom", value + unit.getType()));
  }

  @Override
  public StylesBuilder paddingLeft(double value, Unit unit) {
    return delegate.styleProperty(
        SafeStylesUtils.fromTrustedNameAndValue("padding-left", value + unit.getType()));
  }

  @Override
  public StylesBuilder paddingRight(double value, Unit unit) {
    return delegate.styleProperty(
        SafeStylesUtils.fromTrustedNameAndValue("padding-right", value + unit.getType()));
  }

  @Override
  public StylesBuilder paddingTop(double value, Unit unit) {
    return delegate.styleProperty(
        SafeStylesUtils.fromTrustedNameAndValue("padding-top", value + unit.getType()));
  }

  @Override
  public StylesBuilder position(Position value) {
    return delegate.styleProperty(
        SafeStylesUtils.fromTrustedNameAndValue("position", value.getCssName()));
  }

  @Override
  public StylesBuilder right(double value, Unit unit) {
    return delegate.styleProperty(
        SafeStylesUtils.fromTrustedNameAndValue("right", value + unit.getType()));
  }

  @Override
  public StylesBuilder tableLayout(TableLayout value) {
    return delegate.styleProperty(
        SafeStylesUtils.fromTrustedNameAndValue("table-layout", value.getCssName()));
  }

  @Override
  public StylesBuilder textAlign(TextAlign value) {
    return delegate.styleProperty(
        SafeStylesUtils.fromTrustedNameAndValue("text-align", value.getCssName()));
  }

  @Override
  public StylesBuilder textDecoration(TextDecoration value) {
    return delegate.styleProperty(
        SafeStylesUtils.fromTrustedNameAndValue("text-decoration", value.getCssName()));
  }

  @Override
  public StylesBuilder textIndent(double value, Unit unit) {
    return delegate.styleProperty(
        SafeStylesUtils.fromTrustedNameAndValue("text-indent", value + unit.getType()));
  }

  @Override
  public StylesBuilder textJustify(TextJustify value) {
    return delegate.styleProperty(
        SafeStylesUtils.fromTrustedNameAndValue("text-justify", value.getCssName()));
  }

  @Override
  public StylesBuilder textOverflow(TextOverflow value) {
    return delegate.styleProperty(
        SafeStylesUtils.fromTrustedNameAndValue("text-overflow", value.getCssName()));
  }

  @Override
  public StylesBuilder textTransform(TextTransform value) {
    return delegate.styleProperty(
        SafeStylesUtils.fromTrustedNameAndValue("text-transform", value.getCssName()));
  }

  @Override
  public StylesBuilder top(double value, Unit unit) {
    return delegate.styleProperty(
        SafeStylesUtils.fromTrustedNameAndValue("top", value + unit.getType()));
  }

  @Override
  public StylesBuilder trustedBackgroundColor(String value) {
    return delegate.styleProperty(SafeStylesUtils.forTrustedBackgroundColor(value));
  }

  @Override
  public StylesBuilder trustedBackgroundImage(@IsSafeUri String value) {
    return delegate.styleProperty(SafeStylesUtils.forTrustedBackgroundImage(value));
  }

  @Override
  public StylesBuilder trustedBorderColor(String value) {
    return delegate.styleProperty(SafeStylesUtils.forTrustedBorderColor(value));
  }

  @Override
  public StylesBuilder trustedColor(String value) {
    return delegate.styleProperty(SafeStylesUtils.forTrustedColor(value));
  }

  @Override
  public StylesBuilder trustedOutlineColor(String value) {
    return delegate.styleProperty(SafeStylesUtils.forTrustedOutlineColor(value));
  }

  @Override
  public StylesBuilder trustedProperty(String name, double value, Unit unit) {
    name = toHyphenatedForm(name);
    return delegate.styleProperty(
        SafeStylesUtils.fromTrustedNameAndValue(name, value + unit.getType()));
  }

  @Override
  public StylesBuilder trustedProperty(String name, String value) {
    name = toHyphenatedForm(name);
    return delegate.styleProperty(SafeStylesUtils.fromTrustedNameAndValue(name, value));
  }

  @Override
  public StylesBuilder verticalAlign(double value, Unit unit) {
    return delegate.styleProperty(
        SafeStylesUtils.fromTrustedNameAndValue("vertical-align", value + unit.getType()));
  }

  @Override
  public StylesBuilder verticalAlign(VerticalAlign value) {
    return delegate.styleProperty(
        SafeStylesUtils.fromTrustedNameAndValue("vertical-align", value.getCssName()));
  }

  @Override
  public StylesBuilder visibility(Visibility value) {
    return delegate.styleProperty(
        SafeStylesUtils.fromTrustedNameAndValue("visibility", value.getCssName()));
  }

  @Override
  public StylesBuilder width(double value, Unit unit) {
    return delegate.styleProperty(
        SafeStylesUtils.fromTrustedNameAndValue("width", value + unit.getType()));
  }

  @Override
  public StylesBuilder zIndex(int value) {
    return delegate.styleProperty(SafeStylesUtils.forZIndex(value));
  }
}

