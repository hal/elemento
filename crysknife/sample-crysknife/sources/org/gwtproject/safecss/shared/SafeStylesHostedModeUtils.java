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

import java.util.HashMap;
import java.util.Stack;
import org.gwtproject.safecss.shared.annotations.VisibleForTesting;

/**
 * SafeStyles utilities whose implementation differs between Development and Production Mode.
 *
 * <p>This class has a super-source peer that provides the Production Mode implementation.
 *
 * <p>Do not use this class - it is used for implementation only, and its methods may change in the
 * future.
 */
public class SafeStylesHostedModeUtils {

  private static boolean forceCheck;

  /**
   * Checks if the provided string is a valid style property name.
   *
   * @param name the style name
   * @see <a href="http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier">CSS 2.1
   *     identifiers</a>
   */
  public static void maybeCheckValidStyleName(String name) {
    if ("on".equals(System.getProperty("superdevmode")) || forceCheck) {
      String errorText = isValidStyleName(name);
      if (errorText != null) {
        throw new IllegalArgumentException(errorText);
      }
    } else {
      assert isValidStyleName(name) == null : isValidStyleName(name);
    }
  }

  /**
   * Check if the specified style property name is valid.
   *
   * <p>NOTE: This method does <em>NOT</em> guarantee the safety of a style name. It looks for
   * common errors, but does not check for every possible error. It is intended to help validate a
   * string that the user has already asserted is safe.
   *
   * @param name the name to check
   * @return null if valid, an error string if not
   * @see <a href="http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier">CSS 2.1
   *     identifiers</a>
   */
  @VisibleForTesting
  public static String isValidStyleName(String name) {
    // Empty name.
    if (name == null || name.isEmpty()) {
      return "Style property names cannot be null or empty";
    }

    // Starts with a digit, or a hyphen followed by a digit.
    char firstReal = name.charAt(0);
    if (firstReal == '-' && name.length() > 0) {
      firstReal = name.charAt(1);
    }
    if (firstReal >= '0' && firstReal <= '9') {
      return "Style property names cannot start with a digit or a hyphen followed by a digit: "
          + name;
    }

    // Starts with double hyphen.
    if (name.startsWith("--")) {
      return "Style property names cannot start with a double hyphen: " + name;
    }

    /*
     * Technically an escaped colon/semi-colon (eg. "property\;name") is valid,
     * but in practice nobody uses it and its safer to exclude it.
     */
    if (name.indexOf(';') >= 0) {
      return "Style property names cannot contain a semi-colon: " + name;
    } else if (name.indexOf(':') >= 0) {
      return "Style property names cannot contain a colon: " + name;
    }

    return null;
  }

  /**
   * Checks if the provided string is a valid style property value.
   *
   * @param value the style value
   * @see <a href="http://www.w3.org/TR/CSS21/syndata.html#declaration">CSS 2.1 declarations and
   *     properties</a>
   */
  public static void maybeCheckValidStyleValue(String value) {
    if ("on".equals(System.getProperty("superdevmode")) || forceCheck) {
      String errorText = isValidStyleValue(value);
      if (errorText != null) {
        throw new IllegalArgumentException(errorText);
      }
    } else {
      assert isValidStyleValue(value) == null : isValidStyleValue(value);
    }
  }

  /**
   * Check if the specified style property value is valid. Check if the specified style property
   * value is valid.
   *
   * <p>NOTE: Running this method in prod mode will always retun null!
   *
   * <p>NOTE: This method does <em>NOT</em> guarantee the safety of a style value. It looks for
   * common errors, but does not check for every possible error. It is intended to help validate a
   * string that the user has already asserted is safe.
   *
   * @param value the value to check
   * @return null if valid, an error string if not
   * @see <a href="http://www.w3.org/TR/CSS21/syndata.html#declaration">CSS 2.1 declarations and
   *     properties</a>
   */
  @VisibleForTesting
  public static String isValidStyleValue(String value) {
    // Empty value.
    if (value == null || value.length() == 0) {
      return "Style property values cannot be null or empty";
    }

    /*
     * A value can contain any token, but parenthesis, brackets, braces, and
     * single/double quotes must be paired. Semi-colons are only allowed in
     * strings, such as in a url.
     */

    // Create a map of pairable 'open' characters to 'close' characters.
    final HashMap<Character, Character> pairs = new HashMap<Character, Character>();
    pairs.put('(', ')');
    pairs.put('[', ']');
    pairs.put('{', '}');

    // Iterate over the characters in the value.
    final Stack<Character> pairsStack = new Stack<Character>();
    final Stack<Integer> pairsPos = new Stack<Integer>();
    Character inQuote = null; // The current quote character.
    int inQuotePos = -1;
    boolean inUrl = false;
    boolean ignoreNext = false;
    for (int i = 0; i < value.length(); i++) {
      // This character was escaped.
      if (ignoreNext) {
        ignoreNext = false;
        continue;
      }

      char ch = value.charAt(i);
      if (ch == '\\') {
        // Ignore the character immediately after an escape character.
        ignoreNext = true;
        continue;
      }

      if (inUrl) {
        // Check for closing parenthesis.
        if (ch == ')') {
          // Close the URL.
          inUrl = false;
        } else if (ch == '(') {
          // Parenthesis must be escaped within a url.
          return "Unescaped parentheses within a url at index " + i + ": " + value;
        }

        /*
         * Almost all tokens are valid within a URL.
         *
         *
         * TODO(jlabanca): Check for unescaped quotes and whitespace in URLs.
         * Quotes and whitespace (other than the optional ones that wrap the
         * URL) should be escaped.
         */
        continue;
      }

      if (inQuote != null) {
        // Check for a matching end quote.
        if (ch == inQuote) {
          inQuote = null;
        }

        // Else - still in quote, all tokens valid.
        continue;
      }

      if (ch == '"' || ch == '\'') {
        // Found an open quote.
        inQuote = ch;
        inQuotePos = i;
      } else if ((ch == 'u' || ch == 'U')
          && value.length() >= i + 4
          && value.substring(i, i + 4).equalsIgnoreCase("url(")) {
        // Starting a URL.
        inUrl = true;
        i = i + 3; // Advance to the URL.
      } else if (pairs.containsKey(ch)) {
        // Opened a pairable.
        pairsStack.push(ch);
        pairsPos.push(i);
      } else if (pairs.values().contains(ch)) {
        // Closed a pairable.
        if (pairsStack.isEmpty() || pairs.get(pairsStack.pop()) != ch) {
          // Unmatched close token.
          return "Style property value contains unpaired '" + ch + "' at index " + i + ": " + value;
        }
        pairsPos.pop();
      } else if (ch == ';') {
        // Contains an unescaped semi-colon.
        return "Style property values cannot contain a semi-colon (except within quotes): " + value;
      } else if (ch == ':') {
        // Contains an unescaped colon.
        return "Style property values cannot contain a colon (except within quotes): " + value;
      }
    }

    // Unmatched open quote.
    if (inQuote != null) {
      return "Style property value contains unpaired open quote at index "
          + inQuotePos
          + ": "
          + value;
    }

    // Unterminated url.
    if (inUrl) {
      return "Style property value contains an unterminated url: " + value;
    }

    // Unmatched open pairable.
    if (!pairsStack.isEmpty()) {
      char openToken = pairsStack.pop();
      int index = pairsPos.pop();
      return "Style property value contains unpaired '"
          + openToken
          + "' at index "
          + index
          + ": "
          + value;
    }

    // Ends in an escape character,
    if (ignoreNext) {
      return "Style property values cannot end in an escape character: " + value;
    }

    return null;
  }

  /**
   * Sets a global flag that controls whether or not {@link #maybeCheckValidStyleName(String)} and
   * {@link #maybeCheckValidStyleValue(String)} should perform their checks in a server-side
   * environment.
   *
   * @param check if true, perform server-side checks.
   */
  public static void setForceCheckValidStyle(boolean check) {
    forceCheck = check;
  }

  /**
   * Sets a global flag that controls whether or not {@link #maybeCheckValidStyleName(String)} and
   * {@link #maybeCheckValidStyleValue(String)} should perform their checks in a server-side
   * environment from the value of the {org.gwtproject.safecss.ForceCheckValidStyles} property.
   *
   * <p>For J2CL compatibility we need to use a String isntead of a variable!
   */
  static void setForceCheckValidStyleFromProperty() {
    forceCheck = System.getProperty("org.gwtproject.safecss.ForceCheckValidStyles") != null;
  }
}

