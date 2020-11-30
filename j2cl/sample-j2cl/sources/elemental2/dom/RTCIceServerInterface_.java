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
public interface RTCIceServerInterface_ {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface GetUrlsUnionType {
    @JsOverlay
    static RTCIceServerInterface_.GetUrlsUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default JsArray<String> asJsArray() {
      return Js.cast(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isJsArray() {
      return (Object) this instanceof JsArray;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  @JsProperty
  String getCredential();

  @JsProperty
  RTCIceServerInterface_.GetUrlsUnionType getUrls();

  @JsProperty
  String getUsername();

  @JsProperty
  void setCredential(String credential);

  @JsProperty
  void setUrls(RTCIceServerInterface_.GetUrlsUnionType urls);

  @JsOverlay
  default void setUrls(JsArray<String> urls) {
    setUrls(Js.<RTCIceServerInterface_.GetUrlsUnionType>uncheckedCast(urls));
  }

  @JsOverlay
  default void setUrls(String urls) {
    setUrls(Js.<RTCIceServerInterface_.GetUrlsUnionType>uncheckedCast(urls));
  }

  @JsOverlay
  default void setUrls(String[] urls) {
    setUrls(Js.<JsArray<String>>uncheckedCast(urls));
  }

  @JsProperty
  void setUsername(String username);
}

