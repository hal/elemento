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
public interface CanvasPathMethods {
  void arc(
      double x, double y, double radius, double startAngle, double endAngle, boolean anticlockwise);

  void arc(double x, double y, double radius, double startAngle, double endAngle);

  void arcTo(double x1, double y1, double x2, double y2, double radius);

  void bezierCurveTo(double cp1x, double cp1y, double cp2x, double cp2y, double x, double y);

  void closePath();

  void lineTo(double x, double y);

  void moveTo(double x, double y);

  void quadraticCurveTo(double cpx, double cpy, double x, double y);

  void rect(double x, double y, double w, double h);
}

