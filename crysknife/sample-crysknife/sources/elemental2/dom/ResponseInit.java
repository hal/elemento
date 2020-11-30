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
import jsinterop.base.JsPropertyMap;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface ResponseInit {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface GetHeadersUnionType {
    @JsOverlay
    static ResponseInit.GetHeadersUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default Headers asHeaders() {
      return Js.cast(this);
    }

    @JsOverlay
    default JsArray<JsArray<String>> asJsArray() {
      return Js.cast(this);
    }

    @JsOverlay
    default JsPropertyMap<String> asJsPropertyMap() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isHeaders() {
      return (Object) this instanceof Headers;
    }

    @JsOverlay
    default boolean isJsArray() {
      return (Object) this instanceof JsArray;
    }
  }

  @JsOverlay
  static ResponseInit create() {
    return Js.uncheckedCast(JsPropertyMap.of());
  }

  @JsProperty
  ResponseInit.GetHeadersUnionType getHeaders();

  @JsProperty
  int getStatus();

  @JsProperty
  String getStatusText();

  @JsProperty
  void setHeaders(ResponseInit.GetHeadersUnionType headers);

  @JsOverlay
  default void setHeaders(Headers headers) {
    setHeaders(Js.<ResponseInit.GetHeadersUnionType>uncheckedCast(headers));
  }

  @JsOverlay
  default void setHeaders(JsArray<JsArray<String>> headers) {
    setHeaders(Js.<ResponseInit.GetHeadersUnionType>uncheckedCast(headers));
  }

  @JsOverlay
  default void setHeaders(JsPropertyMap<String> headers) {
    setHeaders(Js.<ResponseInit.GetHeadersUnionType>uncheckedCast(headers));
  }

  @JsOverlay
  default void setHeaders(String[][] headers) {
    setHeaders(Js.<JsArray<JsArray<String>>>uncheckedCast(headers));
  }

  @JsProperty
  void setStatus(int status);

  @JsProperty
  void setStatusText(String statusText);
}

