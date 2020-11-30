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
import elemental2.core.JsArray;
import elemental2.core.JsDate;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class File extends Blob {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ConstructorContentsArrayUnionType {
    @JsOverlay
    static File.ConstructorContentsArrayUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default ArrayBuffer asArrayBuffer() {
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
    default boolean isBlob() {
      return (Object) this instanceof Blob;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  @Deprecated public String fileName;
  @Deprecated public String fileSize;
  public double lastModified;
  public JsDate lastModifiedDate;
  public String name;

  public File() {}

  public File(
      File.ConstructorContentsArrayUnionType[] contents, String name, FilePropertyBag properties) {}

  public File(File.ConstructorContentsArrayUnionType[] contents, String name) {}

  public File(File.ConstructorContentsArrayUnionType[] contents) {}

  public File(
      JsArray<File.ConstructorContentsArrayUnionType> contents,
      String name,
      FilePropertyBag properties) {}

  public File(JsArray<File.ConstructorContentsArrayUnionType> contents, String name) {}

  public File(JsArray<File.ConstructorContentsArrayUnionType> contents) {}
}

