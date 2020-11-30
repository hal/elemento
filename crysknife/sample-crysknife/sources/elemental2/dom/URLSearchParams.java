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

import elemental2.core.JsArray;
import elemental2.core.JsIterable;
import elemental2.core.JsIteratorIterable;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class URLSearchParams implements JsIterable<JsArray<String>> {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ConstructorInitUnionType {
    @JsOverlay
    static URLSearchParams.ConstructorInitUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default JsArray<JsArray<String>> asJsArray() {
      return Js.cast(this);
    }

    @JsOverlay
    default JsPropertyMap<String> asJsPropertyMap() {
      return Js.cast(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isJsArray() {
      return (Object) this instanceof JsArray;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  public URLSearchParams() {}

  public URLSearchParams(URLSearchParams.ConstructorInitUnionType init) {}

  public URLSearchParams(JsArray<JsArray<String>> init) {}

  public URLSearchParams(JsPropertyMap<String> init) {}

  public URLSearchParams(String init) {}

  public URLSearchParams(String[][] init) {}

  public native void append(String name, String value);

  public native void delete(String name);

  public native JsIteratorIterable<JsArray<String>> entries();

  public native String get(String name);

  public native JsArray<String> getAll(String name);

  public native boolean has(String name);

  public native void set(String name, String value);

  public native void sort();
}

