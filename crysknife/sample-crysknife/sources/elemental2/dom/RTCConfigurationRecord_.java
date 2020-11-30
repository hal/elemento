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
public interface RTCConfigurationRecord_ {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface GetIceServersArrayUnionType {
    @JsOverlay
    static RTCConfigurationRecord_.GetIceServersArrayUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default RTCConfigurationRecord_.IceServersFieldType asIceServersFieldType() {
      return Js.cast(this);
    }

    @JsOverlay
    default RTCIceServerInterface_ asRTCIceServerInterface_() {
      return Js.cast(this);
    }

    @JsOverlay
    default RTCConfigurationRecord_.UrlsFieldType asUrlsFieldType() {
      return Js.cast(this);
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface IceServersFieldType {
    @JsOverlay
    static RTCConfigurationRecord_.IceServersFieldType create() {
      return Js.uncheckedCast(JsPropertyMap.of());
    }

    @JsProperty
    String getUrls();

    @JsProperty
    void setUrls(String urls);
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface UrlsFieldType {
    @JsOverlay
    static RTCConfigurationRecord_.UrlsFieldType create() {
      return Js.uncheckedCast(JsPropertyMap.of());
    }

    @JsProperty
    JsArray<String> getUrls();

    @JsProperty
    void setUrls(JsArray<String> urls);

    @JsOverlay
    default void setUrls(String[] urls) {
      setUrls(Js.<JsArray<String>>uncheckedCast(urls));
    }
  }

  @JsOverlay
  static RTCConfigurationRecord_ create() {
    return Js.uncheckedCast(JsPropertyMap.of());
  }

  @JsProperty
  JsArray<RTCConfigurationRecord_.GetIceServersArrayUnionType> getIceServers();

  @JsProperty
  String getSdpSemantics();

  @JsOverlay
  default void setIceServers(RTCConfigurationRecord_.GetIceServersArrayUnionType[] iceServers) {
    setIceServers(
        Js.<JsArray<RTCConfigurationRecord_.GetIceServersArrayUnionType>>uncheckedCast(iceServers));
  }

  @JsProperty
  void setIceServers(JsArray<RTCConfigurationRecord_.GetIceServersArrayUnionType> iceServers);

  @JsProperty
  void setSdpSemantics(String sdpSemantics);
}

