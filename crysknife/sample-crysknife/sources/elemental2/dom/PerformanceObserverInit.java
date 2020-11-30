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
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface PerformanceObserverInit {
  @JsOverlay
  static PerformanceObserverInit create() {
    return Js.uncheckedCast(JsPropertyMap.of());
  }

  @JsProperty
  JsArray<String> getEntryTypes();

  @JsProperty
  String getType();

  @JsProperty
  boolean isBuffered();

  @JsProperty
  void setBuffered(boolean buffered);

  @JsProperty
  void setEntryTypes(JsArray<String> entryTypes);

  @JsOverlay
  default void setEntryTypes(String[] entryTypes) {
    setEntryTypes(Js.<JsArray<String>>uncheckedCast(entryTypes));
  }

  @JsProperty
  void setType(String type);
}

