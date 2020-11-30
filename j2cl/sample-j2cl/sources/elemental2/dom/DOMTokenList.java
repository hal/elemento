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

import elemental2.core.JsIteratorIterable;
import jsinterop.annotations.JsMethod;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.JsArrayLike;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class DOMTokenList implements JsArrayLike<String> {
  public int length;
  public String value;

  public native void add(String... var_args);

  public native boolean contains(String token);

  public native String item(int index);

  public native void remove(String... var_args);

  public native void replace(String token, String newToken);

  public native boolean supports(String token);

  @JsMethod(name = "toString")
  public native String toString_();

  public native boolean toggle(String token, boolean force);

  public native boolean toggle(String token);

  public native JsIteratorIterable<String> values();
}

