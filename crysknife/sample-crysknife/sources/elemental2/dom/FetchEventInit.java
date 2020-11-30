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

import elemental2.promise.Promise;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface FetchEventInit {
  @JsOverlay
  static FetchEventInit create() {
    return Js.uncheckedCast(JsPropertyMap.of());
  }

  @JsProperty
  ServiceWorkerClient getClient();

  @JsProperty
  Promise<Response> getPreloadResponse();

  @JsProperty
  Request getRequest();

  @JsProperty
  boolean isBubbles();

  @JsProperty
  boolean isCancelable();

  @JsProperty
  boolean isIsReload();

  @JsProperty
  void setBubbles(boolean bubbles);

  @JsProperty
  void setCancelable(boolean cancelable);

  @JsProperty
  void setClient(ServiceWorkerClient client);

  @JsProperty
  void setIsReload(boolean isReload);

  @JsProperty
  void setPreloadResponse(Promise<Response> preloadResponse);

  @JsProperty
  void setRequest(Request request);
}

