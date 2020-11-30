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
public interface TouchInitDict {
  @JsOverlay
  static TouchInitDict create() {
    return Js.uncheckedCast(JsPropertyMap.of());
  }

  @JsProperty
  double getClientX();

  @JsProperty
  double getClientY();

  @JsProperty
  double getForce();

  @JsProperty
  int getIdentifier();

  @JsProperty
  double getPageX();

  @JsProperty
  double getPageY();

  @JsProperty
  double getRadiusX();

  @JsProperty
  double getRadiusY();

  @JsProperty
  double getRotationAngle();

  @JsProperty
  double getScreenX();

  @JsProperty
  double getScreenY();

  @JsProperty
  EventTarget getTarget();

  @JsProperty
  void setClientX(double clientX);

  @JsProperty
  void setClientY(double clientY);

  @JsProperty
  void setForce(double force);

  @JsProperty
  void setIdentifier(int identifier);

  @JsProperty
  void setPageX(double pageX);

  @JsProperty
  void setPageY(double pageY);

  @JsProperty
  void setRadiusX(double radiusX);

  @JsProperty
  void setRadiusY(double radiusY);

  @JsProperty
  void setRotationAngle(double rotationAngle);

  @JsProperty
  void setScreenX(double screenX);

  @JsProperty
  void setScreenY(double screenY);

  @JsProperty
  void setTarget(EventTarget target);
}

