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

import elemental2.core.JsDate;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface RTCInboundRtpStreamStats extends RTCReceivedRtpStreamStats {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface GetEstimatedPlayoutTimestampUnionType {
    @JsOverlay
    static RTCInboundRtpStreamStats.GetEstimatedPlayoutTimestampUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default double asDouble() {
      return Js.asDouble(this);
    }

    @JsOverlay
    default JsDate asJsDate() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isDouble() {
      return (Object) this instanceof Double;
    }

    @JsOverlay
    default boolean isJsDate() {
      return (Object) this instanceof JsDate;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface GetLastPacketReceivedTimestampUnionType {
    @JsOverlay
    static RTCInboundRtpStreamStats.GetLastPacketReceivedTimestampUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default double asDouble() {
      return Js.asDouble(this);
    }

    @JsOverlay
    default JsDate asJsDate() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isDouble() {
      return (Object) this instanceof Double;
    }

    @JsOverlay
    default boolean isJsDate() {
      return (Object) this instanceof JsDate;
    }
  }

  @JsProperty
  double getAudioLevel();

  @JsProperty
  double getAverageRtcpInterval();

  @JsProperty
  double getBitrateMean();

  @JsProperty
  double getBytesReceived();

  @JsProperty
  double getConcealedSamples();

  @JsProperty
  double getConcealmentEvents();

  @JsProperty
  String getDecoderImplementation();

  @JsProperty
  double getDelayedPacketOutageSamples();

  @JsProperty
  RTCInboundRtpStreamStats.GetEstimatedPlayoutTimestampUnionType getEstimatedPlayoutTimestamp();

  @JsProperty
  double getFecPacketsDiscarded();

  @JsProperty
  double getFecPacketsReceived();

  @JsProperty
  int getFirCount();

  @JsProperty
  double getFractionLost();

  @JsProperty
  int getFrameBitDepth();

  @JsProperty
  int getFrameHeight();

  @JsProperty
  int getFrameWidth();

  @JsProperty
  int getFramesDecoded();

  @JsProperty
  double getFramesPerSecond();

  @JsProperty
  int getFramesReceived();

  @JsProperty
  double getHeaderBytesReceived();

  @JsProperty
  double getInsertedSamplesForDeceleration();

  @JsProperty
  double getJitterBufferDelay();

  @JsProperty
  double getJitterBufferEmittedCount();

  @JsProperty
  double getJitterBufferFlushes();

  @JsProperty
  int getKeyFramesDecoded();

  @JsProperty
  RTCInboundRtpStreamStats.GetLastPacketReceivedTimestampUnionType getLastPacketReceivedTimestamp();

  @JsProperty
  int getNackCount();

  @JsProperty
  double getPacketsDuplicated();

  @JsProperty
  double getPacketsFailedDecryption();

  @JsProperty
  int getPliCount();

  @JsProperty
  double getQpSum();

  @JsProperty
  String getReceiverId();

  @JsProperty
  String getRemoteId();

  @JsProperty
  double getRemovedSamplesForAcceleration();

  @JsProperty
  double getSamplesDecodedWithCelt();

  @JsProperty
  double getSamplesDecodedWithSilk();

  @JsProperty
  double getSilentConcealedSamples();

  @JsProperty
  int getSliCount();

  @JsProperty
  double getTotalAudioEnergy();

  @JsProperty
  double getTotalDecodeTime();

  @JsProperty
  double getTotalInterframeDelay();

  @JsProperty
  double getTotalSamplesDuration();

  @JsProperty
  double getTotalSamplesReceived();

  @JsProperty
  double getTotalSquaredInterFrameDelay();

  @JsProperty
  String getTrackId();

  @JsProperty
  boolean isVoiceActivityFlag();
}

