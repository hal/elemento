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
public class HTMLSelectElement extends HTMLElement {
  public boolean autofocus;
  public boolean disabled;
  public HTMLFormElement form;
  public NodeList<HTMLLabelElement> labels;
  public int length;
  public boolean multiple;
  public String name;
  public HTMLOptionsCollection options;
  public int selectedIndex;
  public HTMLCollection<HTMLOptionElement> selectedOptions;
  public int size;
  public String type;
  public String validationMessage;
  public ValidityState validity;
  public String value;
  public boolean willValidate;

  public native void add(HTMLElement element, HTMLElement before);

  public native void add(HTMLElement element);

  public native void blur();

  public native boolean checkValidity();

  public native void focus();

  public native void remove();

  public native void remove(int index);

  public native boolean reportValidity();

  public native void setCustomValidity(String message);
}

