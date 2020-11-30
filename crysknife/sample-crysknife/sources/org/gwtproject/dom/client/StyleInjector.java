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

import org.gwtproject.core.client.JavaScriptObject;
import org.gwtproject.core.client.JsArrayString;
import org.gwtproject.core.client.Scheduler;
import org.gwtproject.core.client.Scheduler.ScheduledCommand;

/**
 * Used to add stylesheets to the document. The one-argument versions of {@link #inject}, {@link
 * #injectAtEnd}, and {@link #injectAtStart} use {@link Scheduler#scheduleFinally} to minimize the
 * number of individual style elements created.
 */
public class StyleInjector {

  private static HeadElement head;

  private static final JsArrayString toInject = JavaScriptObject.createArray().cast();
  private static final JsArrayString toInjectAtEnd = JavaScriptObject.createArray().cast();
  private static final JsArrayString toInjectAtStart = JavaScriptObject.createArray().cast();

  private static ScheduledCommand flusher =
      new ScheduledCommand() {
        public void execute() {
          if (needsInjection) {
            flush(null);
          }
        }
      };

  private static boolean needsInjection = false;

  /**
   * Flushes any pending stylesheets to the document.
   *
   * <p>This can be useful if you used CssResource.ensureInjected but now in the same event loop
   * want to measure widths based on the new styles.
   *
   * <p>Note that calling this method excessively will decrease performance.
   */
  public static void flush() {
    inject(true);
  }

  /**
   * Add a stylesheet to the document.
   *
   * @param css the CSS contents of the stylesheet
   */
  public static void inject(String css) {
    inject(css, false);
  }

  /**
   * Add a stylesheet to the document.
   *
   * @param css the CSS contents of the stylesheet
   * @param immediate if <code>true</code> the DOM will be updated immediately instead of just
   *     before returning to the event loop. Using this option excessively will decrease
   *     performance, especially if used with an inject-css-on-init coding pattern
   */
  public static void inject(String css, boolean immediate) {
    toInject.push(css);
    inject(immediate);
  }

  /**
   * Add stylesheet data to the document as though it were declared after all stylesheets previously
   * created by {@link #inject(String)}.
   *
   * @param css the CSS contents of the stylesheet
   */
  public static void injectAtEnd(String css) {
    injectAtEnd(css, false);
  }

  /**
   * Add stylesheet data to the document as though it were declared after all stylesheets previously
   * created by {@link #inject(String)}.
   *
   * @param css the CSS contents of the stylesheet
   * @param immediate if <code>true</code> the DOM will be updated immediately instead of just
   *     before returning to the event loop. Using this option excessively will decrease
   *     performance, especially if used with an inject-css-on-init coding pattern
   */
  public static void injectAtEnd(String css, boolean immediate) {
    toInjectAtEnd.push(css);
    inject(immediate);
  }

  /**
   * Add stylesheet data to the document as though it were declared before all stylesheets
   * previously created by {@link #inject(String)}.
   *
   * @param css the CSS contents of the stylesheet
   */
  public static void injectAtStart(String css) {
    injectAtStart(css, false);
  }

  /**
   * Add stylesheet data to the document as though it were declared before all stylesheets
   * previously created by {@link #inject(String)}.
   *
   * @param css the CSS contents of the stylesheet
   * @param immediate if <code>true</code> the DOM will be updated immediately instead of just
   *     before returning to the event loop. Using this option excessively will decrease
   *     performance, especially if used with an inject-css-on-init coding pattern
   */
  public static void injectAtStart(String css, boolean immediate) {
    toInjectAtStart.unshift(css);
    inject(immediate);
  }

  /**
   * Add a stylesheet to the document.
   *
   * @param contents the CSS contents of the stylesheet
   * @return the StyleElement that contains the newly-injected CSS
   */
  public static StyleElement injectStylesheet(String contents) {
    toInject.push(contents);
    return flush(toInject);
  }

  /**
   * Add stylesheet data to the document as though it were declared after all stylesheets previously
   * created by {@link #injectStylesheet(String)}.
   *
   * @param contents the CSS contents of the stylesheet
   * @return the StyleElement that contains the newly-injected CSS
   */
  public static StyleElement injectStylesheetAtEnd(String contents) {
    toInjectAtEnd.push(contents);
    return flush(toInjectAtEnd);
  }

  /**
   * Add stylesheet data to the document as though it were declared before any stylesheet previously
   * created by {@link #injectStylesheet(String)}.
   *
   * @param contents the CSS contents of the stylesheet
   * @return the StyleElement that contains the newly-injected CSS
   */
  public static StyleElement injectStylesheetAtStart(String contents) {
    toInjectAtStart.unshift(contents);
    return flush(toInjectAtStart);
  }

  /**
   * Replace the contents of a previously-injected stylesheet. Updating the stylesheet in-place is
   * typically more efficient than removing a previously-created element and adding a new one.
   *
   * @param style a StyleElement previously-returned from {@link #injectStylesheet(String)}.
   * @param contents the new contents of the stylesheet.
   */
  public static void setContents(StyleElement style, String contents) {
    style.setInnerText(contents);
  }

  /** The <code>which</code> parameter is used to support the injectStylesheet API. */
  private static StyleElement flush(JavaScriptObject which) {
    StyleElement toReturn = null;
    StyleElement maybeReturn;

    if (toInjectAtStart.length() != 0) {
      String css = toInjectAtStart.join("");
      maybeReturn = injectStyleSheetAtStart(css);
      if (toInjectAtStart == which) {
        toReturn = maybeReturn;
      }
      toInjectAtStart.setLength(0);
    }

    if (toInject.length() != 0) {
      String css = toInject.join("");
      maybeReturn = injectStyleSheet(css);
      if (toInject == which) {
        toReturn = maybeReturn;
      }
      toInject.setLength(0);
    }

    if (toInjectAtEnd.length() != 0) {
      String css = toInjectAtEnd.join("");
      maybeReturn = injectStyleSheetAtEnd(css);
      if (toInjectAtEnd == which) {
        toReturn = maybeReturn;
      }
      toInjectAtEnd.setLength(0);
    }

    needsInjection = false;
    return toReturn;
  }

  private static void inject(boolean immediate) {
    if (immediate) {
      flush(null);
    } else {
      schedule();
    }
  }

  private static void schedule() {
    if (!needsInjection) {
      needsInjection = true;
      Scheduler.get().scheduleFinally(flusher);
    }
  }

  private static StyleElement injectStyleSheet(String contents) {
    StyleElement style = createElement(contents);
    getHead().appendChild(style);
    return style;
  }

  private static StyleElement injectStyleSheetAtEnd(String contents) {
    return injectStyleSheet(contents);
  }

  private static StyleElement injectStyleSheetAtStart(String contents) {
    StyleElement style = createElement(contents);
    getHead().insertBefore(style, head.getFirstChild());
    return style;
  }

  private static StyleElement createElement(String contents) {
    StyleElement style = Document.get().createStyleElement();
    style.setPropertyString("language", "text/css");
    style.setInnerText(contents);
    return style;
  }

  private static HeadElement getHead() {
    if (head == null) {
      Element elt = Document.get().getHead();
      assert elt != null
          : "The host HTML page does not have a <head> element"
              + " which is required by StyleInjector";
      head = HeadElement.as(elt);
    }
    return head;
  }

  /** Utility class. */
  private StyleInjector() {}
}

