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
import elemental2.core.JsIterable;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class FormData
    implements JsIterable<JsArray<FormData.JsIterableTypeParameterArrayUnionType>> {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface AppendValueUnionType {
    @JsOverlay
    static FormData.AppendValueUnionType of(Object o) {
      return Js.cast(o);
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
    default boolean isBlob() {
      return (Object) this instanceof Blob;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface GetAllArrayUnionType {
    @JsOverlay
    static FormData.GetAllArrayUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default File asFile() {
      return Js.cast(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isFile() {
      return (Object) this instanceof File;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface GetUnionType {
    @JsOverlay
    static FormData.GetUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default File asFile() {
      return Js.cast(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isFile() {
      return (Object) this instanceof File;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface JsIterableTypeParameterArrayUnionType {
    @JsOverlay
    static FormData.JsIterableTypeParameterArrayUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default File asFile() {
      return Js.cast(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isFile() {
      return (Object) this instanceof File;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface SetValueUnionType {
    @JsOverlay
    static FormData.SetValueUnionType of(Object o) {
      return Js.cast(o);
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
    default boolean isBlob() {
      return (Object) this instanceof Blob;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  public FormData() {}

  public FormData(Element form) {}

  public native void append(String name, FormData.AppendValueUnionType value, String filename);

  public native void append(String name, FormData.AppendValueUnionType value);

  @JsOverlay
  public final void append(String name, Blob value, String filename) {
    append(name, Js.<FormData.AppendValueUnionType>uncheckedCast(value), filename);
  }

  @JsOverlay
  public final void append(String name, Blob value) {
    append(name, Js.<FormData.AppendValueUnionType>uncheckedCast(value));
  }

  @JsOverlay
  public final void append(String name, String value, String filename) {
    append(name, Js.<FormData.AppendValueUnionType>uncheckedCast(value), filename);
  }

  @JsOverlay
  public final void append(String name, String value) {
    append(name, Js.<FormData.AppendValueUnionType>uncheckedCast(value));
  }

  public native void delete(String name);

  public native FormData.GetUnionType get(String name);

  public native JsArray<FormData.GetAllArrayUnionType> getAll(String name);

  public native boolean has(String name);

  @JsOverlay
  public final void set(String name, Blob value, String filename) {
    set(name, Js.<FormData.SetValueUnionType>uncheckedCast(value), filename);
  }

  @JsOverlay
  public final void set(String name, Blob value) {
    set(name, Js.<FormData.SetValueUnionType>uncheckedCast(value));
  }

  public native void set(String name, FormData.SetValueUnionType value, String filename);

  public native void set(String name, FormData.SetValueUnionType value);

  @JsOverlay
  public final void set(String name, String value, String filename) {
    set(name, Js.<FormData.SetValueUnionType>uncheckedCast(value), filename);
  }

  @JsOverlay
  public final void set(String name, String value) {
    set(name, Js.<FormData.SetValueUnionType>uncheckedCast(value));
  }
}

