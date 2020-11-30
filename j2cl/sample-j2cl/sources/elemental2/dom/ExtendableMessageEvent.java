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
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class ExtendableMessageEvent<T> extends ExtendableEvent {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface SourceUnionType {
    @JsOverlay
    static ExtendableMessageEvent.SourceUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default MessagePort asMessagePort() {
      return Js.cast(this);
    }

    @JsOverlay
    default ServiceWorker asServiceWorker() {
      return Js.cast(this);
    }

    @JsOverlay
    default ServiceWorkerClient asServiceWorkerClient() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isMessagePort() {
      return (Object) this instanceof MessagePort;
    }

    @JsOverlay
    default boolean isServiceWorker() {
      return (Object) this instanceof ServiceWorker;
    }

    @JsOverlay
    default boolean isServiceWorkerClient() {
      return (Object) this instanceof ServiceWorkerClient;
    }
  }

  public T data;
  public String lastEventId;
  public String origin;
  public JsArray<MessagePort> ports;
  public ExtendableMessageEvent.SourceUnionType source;

  public ExtendableMessageEvent(String type, ExtendableMessageEventInit<T> eventInitDict) {
    // This super call is here only for the code to compile; it is never executed.
    super((String) null, (ExtendableEventInit) null);
  }

  public ExtendableMessageEvent(String type) {
    // This super call is here only for the code to compile; it is never executed.
    super((String) null, (ExtendableEventInit) null);
  }
}

