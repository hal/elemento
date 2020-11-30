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
import elemental2.promise.Promise;
import jsinterop.annotations.JsMethod;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class Request implements Body {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ConstructorInputUnionType {
    @JsOverlay
    static Request.ConstructorInputUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default Request asRequest() {
      return Js.cast(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isRequest() {
      return (Object) this instanceof Request;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  public boolean bodyUsed;
  public String cache;
  public String credentials;
  public String destination;
  public Headers headers;
  public String integrity;
  public boolean isHistoryNavigation;
  public boolean keepalive;
  public String method;
  public String mode;
  public String redirect;
  public String referrer;
  public String type;
  public String url;

  public Request(Request.ConstructorInputUnionType input, RequestInit init) {}

  public Request(Request.ConstructorInputUnionType input) {}

  public Request(Request input, RequestInit init) {}

  public Request(Request input) {}

  public Request(String input, RequestInit init) {}

  public Request(String input) {}

  public native Promise<ArrayBuffer> arrayBuffer();

  public native Promise<Blob> blob();

  @JsMethod(name = "clone")
  public native Request clone_();

  public native Promise<FormData> formData();

  @JsProperty
  public native boolean isBodyUsed();

  public native Promise<Object> json();

  @JsProperty
  public native void setBodyUsed(boolean bodyUsed);

  public native Promise<String> text();
}

