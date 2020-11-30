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
import jsinterop.base.JsArrayLike;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class DataTransferItemList implements JsArrayLike<DataTransferItem> {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface AddDataUnionType {
    @JsOverlay
    static DataTransferItemList.AddDataUnionType of(Object o) {
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

  public int length;

  public native DataTransferItem add(DataTransferItemList.AddDataUnionType data, String type);

  public native DataTransferItem add(DataTransferItemList.AddDataUnionType data);

  @JsOverlay
  public final DataTransferItem add(File data, String type) {
    return add(Js.<DataTransferItemList.AddDataUnionType>uncheckedCast(data), type);
  }

  @JsOverlay
  public final DataTransferItem add(File data) {
    return add(Js.<DataTransferItemList.AddDataUnionType>uncheckedCast(data));
  }

  @JsOverlay
  public final DataTransferItem add(String data, String type) {
    return add(Js.<DataTransferItemList.AddDataUnionType>uncheckedCast(data), type);
  }

  @JsOverlay
  public final DataTransferItem add(String data) {
    return add(Js.<DataTransferItemList.AddDataUnionType>uncheckedCast(data));
  }

  public native void clear();

  public native DataTransferItem item(double i);

  public native void remove(int i);
}

