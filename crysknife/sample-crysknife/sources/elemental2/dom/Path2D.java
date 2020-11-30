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
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class Path2D implements CanvasPathMethods {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ConstructorArgUnionType {
    @JsOverlay
    static Path2D.ConstructorArgUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default Path2D asPath2D() {
      return Js.cast(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isPath2D() {
      return (Object) this instanceof Path2D;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  public Path2D() {}

  public Path2D(Path2D.ConstructorArgUnionType arg) {}

  public Path2D(Path2D arg) {}

  public Path2D(String arg) {}

  public native void addPath(Path2D path);

  public native void arc(
      double x,
      double y,
      double radius,
      double startAngle,
      double endAngle,
      boolean optAnticlockwise);

  public native void arc(double x, double y, double radius, double startAngle, double endAngle);

  public native void arcTo(double x1, double y1, double x2, double y2, double radius);

  public native void bezierCurveTo(
      double cp1x, double cp1y, double cp2x, double cp2y, double x, double y);

  public native void closePath();

  public native void lineTo(double x, double y);

  public native void moveTo(double x, double y);

  public native void quadraticCurveTo(double cpx, double cpy, double x, double y);

  public native void rect(double x, double y, double w, double h);
}

