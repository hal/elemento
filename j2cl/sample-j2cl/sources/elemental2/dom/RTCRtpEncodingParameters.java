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
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface RTCRtpEncodingParameters {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface GetRidUnionType {
    @JsOverlay
    static RTCRtpEncodingParameters.GetRidUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default double asDouble() {
      return Js.asDouble(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isDouble() {
      return (Object) this instanceof Double;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  @JsOverlay
  static RTCRtpEncodingParameters create() {
    return Js.uncheckedCast(JsPropertyMap.of());
  }

  @JsProperty
  double getCodecPayloadType();

  @JsProperty
  String getDtx();

  @JsProperty
  double getMaxBitrate();

  @JsProperty
  double getMaxFramerate();

  @JsProperty
  String getNetworkPriority();

  @JsProperty
  String getPriority();

  @JsProperty
  double getPtime();

  @JsProperty
  RTCRtpEncodingParameters.GetRidUnionType getRid();

  @JsProperty
  double getScaleResolutionDownBy();

  @JsProperty
  boolean isActive();

  @JsProperty
  void setActive(boolean active);

  @JsProperty
  void setCodecPayloadType(double codecPayloadType);

  @JsProperty
  void setDtx(String dtx);

  @JsProperty
  void setMaxBitrate(double maxBitrate);

  @JsProperty
  void setMaxFramerate(double maxFramerate);

  @JsProperty
  void setNetworkPriority(String networkPriority);

  @JsProperty
  void setPriority(String priority);

  @JsProperty
  void setPtime(double ptime);

  @JsProperty
  void setRid(RTCRtpEncodingParameters.GetRidUnionType rid);

  @JsOverlay
  default void setRid(String rid) {
    setRid(Js.<RTCRtpEncodingParameters.GetRidUnionType>uncheckedCast(rid));
  }

  @JsOverlay
  default void setRid(double rid) {
    setRid(Js.<RTCRtpEncodingParameters.GetRidUnionType>uncheckedCast(rid));
  }

  @JsProperty
  void setScaleResolutionDownBy(double scaleResolutionDownBy);
}

