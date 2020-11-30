/*
 * Copyright © 2020 Treblereel
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */

package io.crysknife.ui.templates.client;

import elemental2.dom.Document;
import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLStyleElement;
import jsinterop.base.Js;

public class StyleInjector {

  private StyleInjector() {}

  public static FromString fromString(String styleBody) {
    return new FromString(styleBody);
  }

  private static HTMLStyleElement createElement(String contents) {
    HTMLStyleElement style = (HTMLStyleElement) DomGlobal.document.createElement("style");
    style.setAttribute("language", "text/css");
    style.innerHTML = contents;
    return style;
  }

  /**
   * Builder for directly injecting a script body into the DOM.
   */
  public static class FromString {

    private final String styleBody;

    /**
     * @param styleBody The script text to install into the document.
     */
    public FromString(String styleBody) {
      this.styleBody = styleBody;
    }

    public HTMLStyleElement inject() {
      Document doc = DomGlobal.document;
      HTMLStyleElement style = createElement(styleBody);
      doc.head.appendChild(style);
      return Js.cast(style);
    }
  }
}

