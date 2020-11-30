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

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class HTMLTableElement extends HTMLElement {
  public String align;
  public String bgColor;
  public String border;
  public HTMLTableCaptionElement caption;
  public String cellPadding;
  public String cellSpacing;
  public String frame;
  public HTMLCollection<HTMLTableRowElement> rows;
  public String rules;
  public String summary;
  public HTMLCollection<HTMLTableSectionElement> tBodies;
  public HTMLTableSectionElement tFoot;
  public HTMLTableSectionElement tHead;
  public String width;

  public native HTMLElement createCaption();

  public native HTMLElement createTFoot();

  public native HTMLElement createTHead();

  public native void deleteCaption();

  public native HTMLElement deleteRow(int index);

  public native void deleteTFoot();

  public native void deleteTHead();

  public native HTMLElement insertRow();

  public native HTMLElement insertRow(int index);
}

