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
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface PushSubscriptionOptionsInit {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface GetApplicationServerKeyUnionType {
    @JsOverlay
    static PushSubscriptionOptionsInit.GetApplicationServerKeyUnionType of(Object o) {
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

  @JsOverlay
  static PushSubscriptionOptionsInit create() {
    return Js.uncheckedCast(JsPropertyMap.of());
  }

  @JsProperty
  PushSubscriptionOptionsInit.GetApplicationServerKeyUnionType getApplicationServerKey();

  @JsProperty
  boolean isUserVisibleOnly();

  @JsOverlay
  default void setApplicationServerKey(ArrayBuffer applicationServerKey) {
    setApplicationServerKey(
        Js.<PushSubscriptionOptionsInit.GetApplicationServerKeyUnionType>uncheckedCast(
            applicationServerKey));
  }

  @JsOverlay
  default void setApplicationServerKey(ArrayBufferView applicationServerKey) {
    setApplicationServerKey(
        Js.<PushSubscriptionOptionsInit.GetApplicationServerKeyUnionType>uncheckedCast(
            applicationServerKey));
  }

  @JsProperty
  void setApplicationServerKey(
      PushSubscriptionOptionsInit.GetApplicationServerKeyUnionType applicationServerKey);

  @JsOverlay
  default void setApplicationServerKey(String applicationServerKey) {
    setApplicationServerKey(
        Js.<PushSubscriptionOptionsInit.GetApplicationServerKeyUnionType>uncheckedCast(
            applicationServerKey));
  }

  @JsProperty
  void setUserVisibleOnly(boolean userVisibleOnly);
}

