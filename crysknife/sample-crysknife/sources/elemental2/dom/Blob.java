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
import elemental2.core.JsArray;
import elemental2.promise.Promise;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class Blob {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ConstructorBlobPartsArrayUnionType {
    @JsOverlay
    static Blob.ConstructorBlobPartsArrayUnionType of(Object o) {
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
    default Blob asBlob() {
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
    default boolean isBlob() {
      return (Object) this instanceof Blob;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  public int size;
  public String type;

  public Blob() {}

  public Blob(Blob.ConstructorBlobPartsArrayUnionType[] blobParts, BlobPropertyBag options) {}

  public Blob(Blob.ConstructorBlobPartsArrayUnionType[] blobParts) {}

  public Blob(
      JsArray<Blob.ConstructorBlobPartsArrayUnionType> blobParts, BlobPropertyBag options) {}

  public Blob(JsArray<Blob.ConstructorBlobPartsArrayUnionType> blobParts) {}

  public native Promise<ArrayBuffer> arrayBuffer();

  public native Blob slice();

  public native Blob slice(int start, int length, String contentType);

  public native Blob slice(int start, int length);

  public native Blob slice(int start);

  public native Promise<String> text();
}

