/*
 * Copyright 2018 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
package elemental2.dom;

import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class CSSRule {
  @JsOverlay public static final int CHARSET_RULE = CSSRule__Constants.CHARSET_RULE;
  @JsOverlay public static final int FONT_FACE_RULE = CSSRule__Constants.FONT_FACE_RULE;
  @JsOverlay public static final int IMPORT_RULE = CSSRule__Constants.IMPORT_RULE;
  @JsOverlay public static final int MEDIA_RULE = CSSRule__Constants.MEDIA_RULE;
  @JsOverlay public static final int PAGE_RULE = CSSRule__Constants.PAGE_RULE;
  @JsOverlay public static final int STYLE_RULE = CSSRule__Constants.STYLE_RULE;
  @JsOverlay public static final int UNKNOWN_RULE = CSSRule__Constants.UNKNOWN_RULE;
  public String cssText;
  public CSSRule parentRule;
  public CSSStyleSheet parentStyleSheet;
  public CSSStyleDeclaration style;
  public int type;
}

