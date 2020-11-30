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

import elemental2.promise.IThenable;
import elemental2.promise.Promise;
import jsinterop.annotations.JsMethod;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class FetchEvent extends ExtendableEvent {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface RespondWithRUnionType {
    @JsOverlay
    static FetchEvent.RespondWithRUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default IThenable<Response> asIThenable() {
      return Js.cast(this);
    }

    @JsOverlay
    default Response asResponse() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isResponse() {
      return (Object) this instanceof Response;
    }
  }

  @Deprecated public ServiceWorkerClient client;
  public String clientId;
  public boolean isReload;
  public Promise<Response> preloadResponse;
  public Request request;
  public String resultingClientId;

  public FetchEvent(String type, FetchEventInit eventInitDict) {
    // This super call is here only for the code to compile; it is never executed.
    super((String) null, (ExtendableEventInit) null);
  }

  public FetchEvent(String type) {
    // This super call is here only for the code to compile; it is never executed.
    super((String) null, (ExtendableEventInit) null);
  }

  @JsMethod(name = "default")
  public native Promise<Response> default_();

  public native Promise<Response> forwardTo(String url);

  @JsOverlay
  public final void respondWith(IThenable<Response> r) {
    respondWith(Js.<FetchEvent.RespondWithRUnionType>uncheckedCast(r));
  }

  public native void respondWith(FetchEvent.RespondWithRUnionType r);

  @JsOverlay
  public final void respondWith(Response r) {
    respondWith(Js.<FetchEvent.RespondWithRUnionType>uncheckedCast(r));
  }
}

