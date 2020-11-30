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
public interface ExtendableMessageEventInit<T> extends ExtendableEventInit {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface GetSourceUnionType {
    @JsOverlay
    static ExtendableMessageEventInit.GetSourceUnionType of(Object o) {
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

  @JsOverlay
  static ExtendableMessageEventInit create() {
    return Js.uncheckedCast(JsPropertyMap.of());
  }

  @JsProperty
  T getData();

  @JsProperty
  String getLastEventId();

  @JsProperty
  String getOrigin();

  @JsProperty
  JsArray<MessagePort> getPorts();

  @JsProperty
  ExtendableMessageEventInit.GetSourceUnionType getSource();

  @JsProperty
  void setData(T data);

  @JsProperty
  void setLastEventId(String lastEventId);

  @JsProperty
  void setOrigin(String origin);

  @JsProperty
  void setPorts(JsArray<MessagePort> ports);

  @JsOverlay
  default void setPorts(MessagePort[] ports) {
    setPorts(Js.<JsArray<MessagePort>>uncheckedCast(ports));
  }

  @JsProperty
  void setSource(ExtendableMessageEventInit.GetSourceUnionType source);

  @JsOverlay
  default void setSource(MessagePort source) {
    setSource(Js.<ExtendableMessageEventInit.GetSourceUnionType>uncheckedCast(source));
  }

  @JsOverlay
  default void setSource(ServiceWorker source) {
    setSource(Js.<ExtendableMessageEventInit.GetSourceUnionType>uncheckedCast(source));
  }

  @JsOverlay
  default void setSource(ServiceWorkerClient source) {
    setSource(Js.<ExtendableMessageEventInit.GetSourceUnionType>uncheckedCast(source));
  }
}

