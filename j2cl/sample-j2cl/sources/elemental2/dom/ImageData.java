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

import elemental2.core.Uint8ClampedArray;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class ImageData {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ConstructorDataOrWidthUnionType {
    @JsOverlay
    static ImageData.ConstructorDataOrWidthUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default double asDouble() {
      return Js.asDouble(this);
    }

    @JsOverlay
    default Uint8ClampedArray asUint8ClampedArray() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isDouble() {
      return (Object) this instanceof Double;
    }

    @JsOverlay
    default boolean isUint8ClampedArray() {
      return (Object) this instanceof Uint8ClampedArray;
    }
  }

  public Uint8ClampedArray data;
  public int height;
  public int width;

  public ImageData(
      ImageData.ConstructorDataOrWidthUnionType dataOrWidth, double widthOrHeight, double height) {}

  public ImageData(ImageData.ConstructorDataOrWidthUnionType dataOrWidth, double widthOrHeight) {}

  public ImageData(Uint8ClampedArray dataOrWidth, double widthOrHeight, double height) {}

  public ImageData(Uint8ClampedArray dataOrWidth, double widthOrHeight) {}

  public ImageData(double dataOrWidth, double widthOrHeight, double height) {}

  public ImageData(double dataOrWidth, double widthOrHeight) {}
}

