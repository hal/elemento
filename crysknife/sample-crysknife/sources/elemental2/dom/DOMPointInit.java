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
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface DOMPointInit {
  @JsOverlay
  static DOMPointInit create() {
    return Js.uncheckedCast(JsPropertyMap.of());
  }

  @JsProperty
  double getW();

  @JsProperty
  double getX();

  @JsProperty
  double getY();

  @JsProperty
  double getZ();

  @JsProperty
  void setW(double w);

  @JsProperty
  void setX(double x);

  @JsProperty
  void setY(double y);

  @JsProperty
  void setZ(double z);
}

