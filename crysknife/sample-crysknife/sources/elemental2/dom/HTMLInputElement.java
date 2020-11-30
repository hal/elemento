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

import elemental2.core.JsDate;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class HTMLInputElement extends HTMLElement {
  public String accept;
  public String accessKey;
  public String align;
  public String alt;
  public String autocomplete;
  public boolean autofocus;
  public boolean checked;
  public boolean defaultChecked;
  public String defaultValue;
  public String dirname;
  public boolean disabled;
  public FileList files;
  public HTMLFormElement form;
  public String formAction;
  public String formEnctype;
  public String formMethod;
  public boolean formNoValidate;
  public String formTarget;
  public boolean indeterminate;
  public NodeList<HTMLLabelElement> labels;
  public String list;
  public String max;
  public int maxLength;
  public String min;
  public boolean multiple;
  public String name;
  public String pattern;
  public String placeholder;
  public boolean readOnly;
  public boolean required;
  public String selectionDirection;
  public int selectionEnd;
  public int selectionStart;
  public int size;
  public String src;
  public String step;
  public int tabIndex;
  public String type;
  public String useMap;
  public String validationMessage;
  public ValidityState validity;
  public String value;
  public JsDate valueAsDate;
  public double valueAsNumber;
  public boolean willValidate;

  public native void blur();

  public native boolean checkValidity();

  public native void click();

  public native void focus();

  public native boolean reportValidity();

  public native void select();

  public native void setCustomValidity(String message);

  public native void setSelectionRange(int start, int end, String direction);

  public native void setSelectionRange(int start, int end);

  public native void stepDown();

  public native void stepDown(int n);

  public native void stepUp();

  public native void stepUp(int n);
}

