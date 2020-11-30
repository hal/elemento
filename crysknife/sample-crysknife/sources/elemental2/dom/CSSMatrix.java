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
public class CSSMatrix {
  public double m11;
  public double m12;
  public double m13;
  public double m14;
  public double m21;
  public double m22;
  public double m23;
  public double m24;
  public double m31;
  public double m32;
  public double m33;
  public double m34;
  public double m41;
  public double m42;
  public double m43;
  public double m44;

  public CSSMatrix() {}

  public CSSMatrix(String matrix) {}

  public native CSSMatrix inverse();

  public native CSSMatrix multiply(CSSMatrix secondMatrix);

  public native CSSMatrix rotate();

  public native CSSMatrix rotate(double rotX, double rotY, double rotZ);

  public native CSSMatrix rotate(double rotX, double rotY);

  public native CSSMatrix rotate(double rotX);

  public native CSSMatrix rotateAxisAngle();

  public native CSSMatrix rotateAxisAngle(double x, double y, double z, double angle);

  public native CSSMatrix rotateAxisAngle(double x, double y, double z);

  public native CSSMatrix rotateAxisAngle(double x, double y);

  public native CSSMatrix rotateAxisAngle(double x);

  public native CSSMatrix scale();

  public native CSSMatrix scale(double scaleX, double scaleY, double scaleZ);

  public native CSSMatrix scale(double scaleX, double scaleY);

  public native CSSMatrix scale(double scaleX);

  public native void setMatrixValue(String string);

  public native CSSMatrix translate();

  public native CSSMatrix translate(double x, double y, double z);

  public native CSSMatrix translate(double x, double y);

  public native CSSMatrix translate(double x);
}

