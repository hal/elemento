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
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface RequestInit {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface GetBodyUnionType {
    @JsOverlay
    static RequestInit.GetBodyUnionType of(Object o) {
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
    default FormData asFormData() {
      return Js.cast(this);
    }

    @JsOverlay
    default ReadableStream asReadableStream() {
      return Js.cast(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default URLSearchParams asURLSearchParams() {
      return Js.cast(this);
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
    default boolean isFormData() {
      return (Object) this instanceof FormData;
    }

    @JsOverlay
    default boolean isReadableStream() {
      return (Object) this instanceof ReadableStream;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }

    @JsOverlay
    default boolean isURLSearchParams() {
      return (Object) this instanceof URLSearchParams;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface GetHeadersUnionType {
    @JsOverlay
    static RequestInit.GetHeadersUnionType of(Object o) {
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
  static RequestInit create() {
    return Js.uncheckedCast(JsPropertyMap.of());
  }

  @JsProperty
  RequestInit.GetBodyUnionType getBody();

  @JsProperty
  String getCache();

  @JsProperty
  String getCredentials();

  @JsProperty
  RequestInit.GetHeadersUnionType getHeaders();

  @JsProperty
  String getIntegrity();

  @JsProperty
  String getMethod();

  @JsProperty
  String getMode();

  @JsProperty
  String getRedirect();

  @JsProperty
  String getReferrer();

  @JsProperty
  String getReferrerPolicy();

  @JsProperty
  AbortSignal getSignal();

  @JsProperty
  Object getWindow();

  @JsProperty
  boolean isKeepalive();

  @JsOverlay
  default void setBody(ArrayBuffer body) {
    setBody(Js.<RequestInit.GetBodyUnionType>uncheckedCast(body));
  }

  @JsOverlay
  default void setBody(ArrayBufferView body) {
    setBody(Js.<RequestInit.GetBodyUnionType>uncheckedCast(body));
  }

  @JsOverlay
  default void setBody(Blob body) {
    setBody(Js.<RequestInit.GetBodyUnionType>uncheckedCast(body));
  }

  @JsOverlay
  default void setBody(FormData body) {
    setBody(Js.<RequestInit.GetBodyUnionType>uncheckedCast(body));
  }

  @JsProperty
  void setBody(RequestInit.GetBodyUnionType body);

  @JsOverlay
  default void setBody(ReadableStream body) {
    setBody(Js.<RequestInit.GetBodyUnionType>uncheckedCast(body));
  }

  @JsOverlay
  default void setBody(String body) {
    setBody(Js.<RequestInit.GetBodyUnionType>uncheckedCast(body));
  }

  @JsOverlay
  default void setBody(URLSearchParams body) {
    setBody(Js.<RequestInit.GetBodyUnionType>uncheckedCast(body));
  }

  @JsProperty
  void setCache(String cache);

  @JsProperty
  void setCredentials(String credentials);

  @JsProperty
  void setHeaders(RequestInit.GetHeadersUnionType headers);

  @JsOverlay
  default void setHeaders(Headers headers) {
    setHeaders(Js.<RequestInit.GetHeadersUnionType>uncheckedCast(headers));
  }

  @JsOverlay
  default void setHeaders(JsArray<JsArray<String>> headers) {
    setHeaders(Js.<RequestInit.GetHeadersUnionType>uncheckedCast(headers));
  }

  @JsOverlay
  default void setHeaders(JsPropertyMap<String> headers) {
    setHeaders(Js.<RequestInit.GetHeadersUnionType>uncheckedCast(headers));
  }

  @JsOverlay
  default void setHeaders(String[][] headers) {
    setHeaders(Js.<JsArray<JsArray<String>>>uncheckedCast(headers));
  }

  @JsProperty
  void setIntegrity(String integrity);

  @JsProperty
  void setKeepalive(boolean keepalive);

  @JsProperty
  void setMethod(String method);

  @JsProperty
  void setMode(String mode);

  @JsProperty
  void setRedirect(String redirect);

  @JsProperty
  void setReferrer(String referrer);

  @JsProperty
  void setReferrerPolicy(String referrerPolicy);

  @JsProperty
  void setSignal(AbortSignal signal);

  @JsProperty
  void setWindow(Object window);
}

