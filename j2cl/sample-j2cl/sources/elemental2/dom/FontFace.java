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

import elemental2.core.ArrayBuffer;
import elemental2.core.ArrayBufferView;
import elemental2.promise.Promise;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class FontFace {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ConstructorSourceUnionType {
    @JsOverlay
    static FontFace.ConstructorSourceUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default ArrayBuffer asArrayBuffer() {
      return Js.cast(this);
    }

    @JsOverlay
    default ArrayBufferView asArrayBufferView() {
      return Js.cast(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isArrayBuffer() {
      return (Object) this instanceof ArrayBuffer;
    }

    @JsOverlay
    default boolean isArrayBufferView() {
      return (Object) this instanceof ArrayBufferView;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  public String family;
  public String featureSettings;
  public String status;
  public String stretch;
  public String style;
  public String unicodeRange;
  public String variant;
  public String weight;

  public FontFace(String fontFamily, ArrayBuffer source, FontFaceDescriptors descriptors) {}

  public FontFace(String fontFamily, ArrayBuffer source) {}

  public FontFace(String fontFamily, ArrayBufferView source, FontFaceDescriptors descriptors) {}

  public FontFace(String fontFamily, ArrayBufferView source) {}

  public FontFace(
      String fontFamily,
      FontFace.ConstructorSourceUnionType source,
      FontFaceDescriptors descriptors) {}

  public FontFace(String fontFamily, FontFace.ConstructorSourceUnionType source) {}

  public FontFace(String fontFamily, String source, FontFaceDescriptors descriptors) {}

  public FontFace(String fontFamily, String source) {}

  public native Promise<FontFace> load();
}

