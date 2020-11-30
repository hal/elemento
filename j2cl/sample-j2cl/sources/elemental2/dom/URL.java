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

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class URL {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ConstructorBaseUnionType {
    @JsOverlay
    static URL.ConstructorBaseUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default URL asURL() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }

    @JsOverlay
    default boolean isURL() {
      return (Object) this instanceof URL;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface CreateObjectURLObjUnionType {
    @JsOverlay
    static URL.CreateObjectURLObjUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default Blob asBlob() {
      return Js.cast(this);
    }

    @JsOverlay
    default MediaSource asMediaSource() {
      return Js.cast(this);
    }

    @JsOverlay
    default MediaStream asMediaStream() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isBlob() {
      return (Object) this instanceof Blob;
    }

    @JsOverlay
    default boolean isMediaSource() {
      return (Object) this instanceof MediaSource;
    }

    @JsOverlay
    default boolean isMediaStream() {
      return (Object) this instanceof MediaStream;
    }
  }

  @JsOverlay
  public static final String createObjectURL(Blob obj) {
    return createObjectURL(Js.<URL.CreateObjectURLObjUnionType>uncheckedCast(obj));
  }

  public static native String createObjectURL(URL.CreateObjectURLObjUnionType obj);

  @JsOverlay
  public static final String createObjectURL(MediaSource obj) {
    return createObjectURL(Js.<URL.CreateObjectURLObjUnionType>uncheckedCast(obj));
  }

  @JsOverlay
  public static final String createObjectURL(MediaStream obj) {
    return createObjectURL(Js.<URL.CreateObjectURLObjUnionType>uncheckedCast(obj));
  }

  public static native String domainToASCII(String domain);

  public static native String domainToUnicode(String domain);

  public static native void revokeObjectURL(String url);

  public String hash;
  public String host;
  public String hostname;
  public String href;
  public String origin;
  public String password;
  public String pathname;
  public String port;
  public String protocol;
  public String search;
  public URLSearchParams searchParams;
  public String username;

  public URL(String url, URL.ConstructorBaseUnionType base) {}

  public URL(String url, String base) {}

  public URL(String url, URL base) {}

  public URL(String url) {}
}

