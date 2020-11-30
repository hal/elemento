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

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface CanvasDrawingStyles {
  @JsProperty
  String getFont();

  @JsProperty
  String getLineCap();

  JsArray<Double> getLineDash();

  @JsProperty
  String getLineJoin();

  @JsProperty
  double getLineWidth();

  @JsProperty
  double getMiterLimit();

  @JsProperty
  String getTextAlign();

  @JsProperty
  String getTextBaseline();

  @JsProperty
  void setFont(String font);

  @JsProperty
  void setLineCap(String lineCap);

  void setLineDash(JsArray<Double> segments);

  @JsOverlay
  default void setLineDash(double[] segments) {
    setLineDash(Js.<JsArray<Double>>uncheckedCast(segments));
  }

  @JsProperty
  void setLineJoin(String lineJoin);

  @JsProperty
  void setLineWidth(double lineWidth);

  @JsProperty
  void setMiterLimit(double miterLimit);

  @JsProperty
  void setTextAlign(String textAlign);

  @JsProperty
  void setTextBaseline(String textBaseline);
}

