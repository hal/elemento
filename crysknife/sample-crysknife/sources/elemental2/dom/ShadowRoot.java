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

import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.JsArrayLike;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class ShadowRoot extends DocumentFragment {
  public Element activeElement;
  public Element host;
  public String innerHTML;
  public String mode;
  @Deprecated public ShadowRoot olderShadowRoot;
  public StyleSheetList styleSheets;

  public native Element elementFromPoint(double x, double y);

  public native JsArrayLike<Element> elementsFromPoint(double x, double y);

  public native HTMLElement getElementById(String id);

  public native Selection getSelection();
}

