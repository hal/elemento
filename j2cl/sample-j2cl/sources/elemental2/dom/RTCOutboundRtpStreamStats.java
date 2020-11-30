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

import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface RTCOutboundRtpStreamStats extends RTCSentRtpStreamStats {
  @JsProperty
  double getAverageRTCPInterval();

  @JsProperty
  double getBitrateMean();

  @JsProperty
  String getEncoderImplementation();

  @JsProperty
  int getFirCount();

  @JsProperty
  int getFrameHeight();

  @JsProperty
  int getFrameWidth();

  @JsProperty
  int getFramesEncoded();

  @JsProperty
  double getLastPacketSentTimestamp();

  @JsProperty
  String getMediaSourceId();

  @JsProperty
  int getNackCount();

  @JsProperty
  int getPliCount();

  @JsProperty
  double getQpSum();

  @JsProperty
  String getQualityLimitationReason();

  @JsProperty
  double getQualityLimitationResolutionChanges();

  @JsProperty
  String getRemoteId();

  @JsProperty
  String getSenderId();

  @JsProperty
  int getSliCount();

  @JsProperty
  double getTargetBitrate();

  @JsProperty
  double getTotalEncodeTime();

  @JsProperty
  String getTrackId();
}

