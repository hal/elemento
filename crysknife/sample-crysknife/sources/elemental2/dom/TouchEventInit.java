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
public interface TouchEventInit extends UIEventInit {
  @JsOverlay
  static TouchEventInit create() {
    return Js.uncheckedCast(JsPropertyMap.of());
  }

  @JsProperty
  JsArray<Touch> getChangedTouches();

  @JsProperty
  EventTarget getRelatedTarget();

  @JsProperty
  JsArray<Touch> getTargetTouches();

  @JsProperty
  JsArray<Touch> getTouches();

  @JsProperty
  void setChangedTouches(JsArray<Touch> changedTouches);

  @JsOverlay
  default void setChangedTouches(Touch[] changedTouches) {
    setChangedTouches(Js.<JsArray<Touch>>uncheckedCast(changedTouches));
  }

  @JsProperty
  void setRelatedTarget(EventTarget relatedTarget);

  @JsProperty
  void setTargetTouches(JsArray<Touch> targetTouches);

  @JsOverlay
  default void setTargetTouches(Touch[] targetTouches) {
    setTargetTouches(Js.<JsArray<Touch>>uncheckedCast(targetTouches));
  }

  @JsProperty
  void setTouches(JsArray<Touch> touches);

  @JsOverlay
  default void setTouches(Touch[] touches) {
    setTouches(Js.<JsArray<Touch>>uncheckedCast(touches));
  }
}

