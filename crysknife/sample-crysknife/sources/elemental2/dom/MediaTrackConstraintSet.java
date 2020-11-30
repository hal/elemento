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
public interface MediaTrackConstraintSet {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface GetAspectRatioUnionType {
    @JsOverlay
    static MediaTrackConstraintSet.GetAspectRatioUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default ConstrainDoubleRange asConstrainDoubleRange() {
      return Js.cast(this);
    }

    @JsOverlay
    default double asDouble() {
      return Js.asDouble(this);
    }

    @JsOverlay
    default boolean isDouble() {
      return (Object) this instanceof Double;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface GetAutoGainControlUnionType {
    @JsOverlay
    static MediaTrackConstraintSet.GetAutoGainControlUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default boolean asBoolean() {
      return Js.asBoolean(this);
    }

    @JsOverlay
    default ConstrainBooleanParameters asConstrainBooleanParameters() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isBoolean() {
      return (Object) this instanceof Boolean;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface GetChannelCountUnionType {
    @JsOverlay
    static MediaTrackConstraintSet.GetChannelCountUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default ConstrainLongRange asConstrainLongRange() {
      return Js.cast(this);
    }

    @JsOverlay
    default int asInt() {
      return Js.asInt(this);
    }

    @JsOverlay
    default boolean isInt() {
      return (Object) this instanceof Double;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface GetDeviceIdUnionType {
    @JsOverlay
    static MediaTrackConstraintSet.GetDeviceIdUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default ConstrainDOMStringParameters asConstrainDOMStringParameters() {
      return Js.cast(this);
    }

    @JsOverlay
    default JsArray<String> asJsArray() {
      return Js.cast(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isJsArray() {
      return (Object) this instanceof JsArray;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface GetEchoCancellationUnionType {
    @JsOverlay
    static MediaTrackConstraintSet.GetEchoCancellationUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default boolean asBoolean() {
      return Js.asBoolean(this);
    }

    @JsOverlay
    default ConstrainBooleanParameters asConstrainBooleanParameters() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isBoolean() {
      return (Object) this instanceof Boolean;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface GetFacingModeUnionType {
    @JsOverlay
    static MediaTrackConstraintSet.GetFacingModeUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default ConstrainDOMStringParameters asConstrainDOMStringParameters() {
      return Js.cast(this);
    }

    @JsOverlay
    default JsArray<String> asJsArray() {
      return Js.cast(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isJsArray() {
      return (Object) this instanceof JsArray;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface GetFrameRateUnionType {
    @JsOverlay
    static MediaTrackConstraintSet.GetFrameRateUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default ConstrainDoubleRange asConstrainDoubleRange() {
      return Js.cast(this);
    }

    @JsOverlay
    default double asDouble() {
      return Js.asDouble(this);
    }

    @JsOverlay
    default boolean isDouble() {
      return (Object) this instanceof Double;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface GetGroupIdUnionType {
    @JsOverlay
    static MediaTrackConstraintSet.GetGroupIdUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default ConstrainDOMStringParameters asConstrainDOMStringParameters() {
      return Js.cast(this);
    }

    @JsOverlay
    default JsArray<String> asJsArray() {
      return Js.cast(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isJsArray() {
      return (Object) this instanceof JsArray;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface GetHeightUnionType {
    @JsOverlay
    static MediaTrackConstraintSet.GetHeightUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default ConstrainLongRange asConstrainLongRange() {
      return Js.cast(this);
    }

    @JsOverlay
    default int asInt() {
      return Js.asInt(this);
    }

    @JsOverlay
    default boolean isInt() {
      return (Object) this instanceof Double;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface GetLatencyUnionType {
    @JsOverlay
    static MediaTrackConstraintSet.GetLatencyUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default ConstrainDoubleRange asConstrainDoubleRange() {
      return Js.cast(this);
    }

    @JsOverlay
    default double asDouble() {
      return Js.asDouble(this);
    }

    @JsOverlay
    default boolean isDouble() {
      return (Object) this instanceof Double;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface GetNoiseSuppressionUnionType {
    @JsOverlay
    static MediaTrackConstraintSet.GetNoiseSuppressionUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default boolean asBoolean() {
      return Js.asBoolean(this);
    }

    @JsOverlay
    default ConstrainBooleanParameters asConstrainBooleanParameters() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isBoolean() {
      return (Object) this instanceof Boolean;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface GetSampleRateUnionType {
    @JsOverlay
    static MediaTrackConstraintSet.GetSampleRateUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default ConstrainLongRange asConstrainLongRange() {
      return Js.cast(this);
    }

    @JsOverlay
    default int asInt() {
      return Js.asInt(this);
    }

    @JsOverlay
    default boolean isInt() {
      return (Object) this instanceof Double;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface GetSampleSizeUnionType {
    @JsOverlay
    static MediaTrackConstraintSet.GetSampleSizeUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default ConstrainLongRange asConstrainLongRange() {
      return Js.cast(this);
    }

    @JsOverlay
    default int asInt() {
      return Js.asInt(this);
    }

    @JsOverlay
    default boolean isInt() {
      return (Object) this instanceof Double;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface GetVolumeUnionType {
    @JsOverlay
    static MediaTrackConstraintSet.GetVolumeUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default ConstrainDoubleRange asConstrainDoubleRange() {
      return Js.cast(this);
    }

    @JsOverlay
    default double asDouble() {
      return Js.asDouble(this);
    }

    @JsOverlay
    default boolean isDouble() {
      return (Object) this instanceof Double;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface GetWidthUnionType {
    @JsOverlay
    static MediaTrackConstraintSet.GetWidthUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default ConstrainLongRange asConstrainLongRange() {
      return Js.cast(this);
    }

    @JsOverlay
    default int asInt() {
      return Js.asInt(this);
    }

    @JsOverlay
    default boolean isInt() {
      return (Object) this instanceof Double;
    }
  }

  @JsOverlay
  static MediaTrackConstraintSet create() {
    return Js.uncheckedCast(JsPropertyMap.of());
  }

  @JsProperty
  MediaTrackConstraintSet.GetAspectRatioUnionType getAspectRatio();

  @JsProperty
  MediaTrackConstraintSet.GetAutoGainControlUnionType getAutoGainControl();

  @JsProperty
  MediaTrackConstraintSet.GetChannelCountUnionType getChannelCount();

  @JsProperty
  MediaTrackConstraintSet.GetDeviceIdUnionType getDeviceId();

  @JsProperty
  MediaTrackConstraintSet.GetEchoCancellationUnionType getEchoCancellation();

  @JsProperty
  MediaTrackConstraintSet.GetFacingModeUnionType getFacingMode();

  @JsProperty
  MediaTrackConstraintSet.GetFrameRateUnionType getFrameRate();

  @JsProperty
  MediaTrackConstraintSet.GetGroupIdUnionType getGroupId();

  @JsProperty
  MediaTrackConstraintSet.GetHeightUnionType getHeight();

  @JsProperty
  MediaTrackConstraintSet.GetLatencyUnionType getLatency();

  @JsProperty
  MediaTrackConstraintSet.GetNoiseSuppressionUnionType getNoiseSuppression();

  @JsProperty
  MediaTrackConstraintSet.GetSampleRateUnionType getSampleRate();

  @JsProperty
  MediaTrackConstraintSet.GetSampleSizeUnionType getSampleSize();

  @JsProperty
  MediaTrackConstraintSet.GetVolumeUnionType getVolume();

  @JsProperty
  MediaTrackConstraintSet.GetWidthUnionType getWidth();

  @JsOverlay
  default void setAspectRatio(ConstrainDoubleRange aspectRatio) {
    setAspectRatio(Js.<MediaTrackConstraintSet.GetAspectRatioUnionType>uncheckedCast(aspectRatio));
  }

  @JsProperty
  void setAspectRatio(MediaTrackConstraintSet.GetAspectRatioUnionType aspectRatio);

  @JsOverlay
  default void setAspectRatio(double aspectRatio) {
    setAspectRatio(Js.<MediaTrackConstraintSet.GetAspectRatioUnionType>uncheckedCast(aspectRatio));
  }

  @JsOverlay
  default void setAutoGainControl(ConstrainBooleanParameters autoGainControl) {
    setAutoGainControl(
        Js.<MediaTrackConstraintSet.GetAutoGainControlUnionType>uncheckedCast(autoGainControl));
  }

  @JsProperty
  void setAutoGainControl(MediaTrackConstraintSet.GetAutoGainControlUnionType autoGainControl);

  @JsOverlay
  default void setAutoGainControl(boolean autoGainControl) {
    setAutoGainControl(
        Js.<MediaTrackConstraintSet.GetAutoGainControlUnionType>uncheckedCast(autoGainControl));
  }

  @JsOverlay
  default void setChannelCount(ConstrainLongRange channelCount) {
    setChannelCount(
        Js.<MediaTrackConstraintSet.GetChannelCountUnionType>uncheckedCast(channelCount));
  }

  @JsProperty
  void setChannelCount(MediaTrackConstraintSet.GetChannelCountUnionType channelCount);

  @JsOverlay
  default void setChannelCount(int channelCount) {
    setChannelCount(
        Js.<MediaTrackConstraintSet.GetChannelCountUnionType>uncheckedCast(channelCount));
  }

  @JsOverlay
  default void setDeviceId(ConstrainDOMStringParameters deviceId) {
    setDeviceId(Js.<MediaTrackConstraintSet.GetDeviceIdUnionType>uncheckedCast(deviceId));
  }

  @JsProperty
  void setDeviceId(MediaTrackConstraintSet.GetDeviceIdUnionType deviceId);

  @JsOverlay
  default void setDeviceId(JsArray<String> deviceId) {
    setDeviceId(Js.<MediaTrackConstraintSet.GetDeviceIdUnionType>uncheckedCast(deviceId));
  }

  @JsOverlay
  default void setDeviceId(String deviceId) {
    setDeviceId(Js.<MediaTrackConstraintSet.GetDeviceIdUnionType>uncheckedCast(deviceId));
  }

  @JsOverlay
  default void setDeviceId(String[] deviceId) {
    setDeviceId(Js.<JsArray<String>>uncheckedCast(deviceId));
  }

  @JsOverlay
  default void setEchoCancellation(ConstrainBooleanParameters echoCancellation) {
    setEchoCancellation(
        Js.<MediaTrackConstraintSet.GetEchoCancellationUnionType>uncheckedCast(echoCancellation));
  }

  @JsProperty
  void setEchoCancellation(MediaTrackConstraintSet.GetEchoCancellationUnionType echoCancellation);

  @JsOverlay
  default void setEchoCancellation(boolean echoCancellation) {
    setEchoCancellation(
        Js.<MediaTrackConstraintSet.GetEchoCancellationUnionType>uncheckedCast(echoCancellation));
  }

  @JsOverlay
  default void setFacingMode(ConstrainDOMStringParameters facingMode) {
    setFacingMode(Js.<MediaTrackConstraintSet.GetFacingModeUnionType>uncheckedCast(facingMode));
  }

  @JsProperty
  void setFacingMode(MediaTrackConstraintSet.GetFacingModeUnionType facingMode);

  @JsOverlay
  default void setFacingMode(JsArray<String> facingMode) {
    setFacingMode(Js.<MediaTrackConstraintSet.GetFacingModeUnionType>uncheckedCast(facingMode));
  }

  @JsOverlay
  default void setFacingMode(String facingMode) {
    setFacingMode(Js.<MediaTrackConstraintSet.GetFacingModeUnionType>uncheckedCast(facingMode));
  }

  @JsOverlay
  default void setFacingMode(String[] facingMode) {
    setFacingMode(Js.<JsArray<String>>uncheckedCast(facingMode));
  }

  @JsOverlay
  default void setFrameRate(ConstrainDoubleRange frameRate) {
    setFrameRate(Js.<MediaTrackConstraintSet.GetFrameRateUnionType>uncheckedCast(frameRate));
  }

  @JsProperty
  void setFrameRate(MediaTrackConstraintSet.GetFrameRateUnionType frameRate);

  @JsOverlay
  default void setFrameRate(double frameRate) {
    setFrameRate(Js.<MediaTrackConstraintSet.GetFrameRateUnionType>uncheckedCast(frameRate));
  }

  @JsOverlay
  default void setGroupId(ConstrainDOMStringParameters groupId) {
    setGroupId(Js.<MediaTrackConstraintSet.GetGroupIdUnionType>uncheckedCast(groupId));
  }

  @JsProperty
  void setGroupId(MediaTrackConstraintSet.GetGroupIdUnionType groupId);

  @JsOverlay
  default void setGroupId(JsArray<String> groupId) {
    setGroupId(Js.<MediaTrackConstraintSet.GetGroupIdUnionType>uncheckedCast(groupId));
  }

  @JsOverlay
  default void setGroupId(String groupId) {
    setGroupId(Js.<MediaTrackConstraintSet.GetGroupIdUnionType>uncheckedCast(groupId));
  }

  @JsOverlay
  default void setGroupId(String[] groupId) {
    setGroupId(Js.<JsArray<String>>uncheckedCast(groupId));
  }

  @JsOverlay
  default void setHeight(ConstrainLongRange height) {
    setHeight(Js.<MediaTrackConstraintSet.GetHeightUnionType>uncheckedCast(height));
  }

  @JsProperty
  void setHeight(MediaTrackConstraintSet.GetHeightUnionType height);

  @JsOverlay
  default void setHeight(int height) {
    setHeight(Js.<MediaTrackConstraintSet.GetHeightUnionType>uncheckedCast(height));
  }

  @JsOverlay
  default void setLatency(ConstrainDoubleRange latency) {
    setLatency(Js.<MediaTrackConstraintSet.GetLatencyUnionType>uncheckedCast(latency));
  }

  @JsProperty
  void setLatency(MediaTrackConstraintSet.GetLatencyUnionType latency);

  @JsOverlay
  default void setLatency(double latency) {
    setLatency(Js.<MediaTrackConstraintSet.GetLatencyUnionType>uncheckedCast(latency));
  }

  @JsOverlay
  default void setNoiseSuppression(ConstrainBooleanParameters noiseSuppression) {
    setNoiseSuppression(
        Js.<MediaTrackConstraintSet.GetNoiseSuppressionUnionType>uncheckedCast(noiseSuppression));
  }

  @JsProperty
  void setNoiseSuppression(MediaTrackConstraintSet.GetNoiseSuppressionUnionType noiseSuppression);

  @JsOverlay
  default void setNoiseSuppression(boolean noiseSuppression) {
    setNoiseSuppression(
        Js.<MediaTrackConstraintSet.GetNoiseSuppressionUnionType>uncheckedCast(noiseSuppression));
  }

  @JsOverlay
  default void setSampleRate(ConstrainLongRange sampleRate) {
    setSampleRate(Js.<MediaTrackConstraintSet.GetSampleRateUnionType>uncheckedCast(sampleRate));
  }

  @JsProperty
  void setSampleRate(MediaTrackConstraintSet.GetSampleRateUnionType sampleRate);

  @JsOverlay
  default void setSampleRate(int sampleRate) {
    setSampleRate(Js.<MediaTrackConstraintSet.GetSampleRateUnionType>uncheckedCast(sampleRate));
  }

  @JsOverlay
  default void setSampleSize(ConstrainLongRange sampleSize) {
    setSampleSize(Js.<MediaTrackConstraintSet.GetSampleSizeUnionType>uncheckedCast(sampleSize));
  }

  @JsProperty
  void setSampleSize(MediaTrackConstraintSet.GetSampleSizeUnionType sampleSize);

  @JsOverlay
  default void setSampleSize(int sampleSize) {
    setSampleSize(Js.<MediaTrackConstraintSet.GetSampleSizeUnionType>uncheckedCast(sampleSize));
  }

  @JsOverlay
  default void setVolume(ConstrainDoubleRange volume) {
    setVolume(Js.<MediaTrackConstraintSet.GetVolumeUnionType>uncheckedCast(volume));
  }

  @JsProperty
  void setVolume(MediaTrackConstraintSet.GetVolumeUnionType volume);

  @JsOverlay
  default void setVolume(double volume) {
    setVolume(Js.<MediaTrackConstraintSet.GetVolumeUnionType>uncheckedCast(volume));
  }

  @JsOverlay
  default void setWidth(ConstrainLongRange width) {
    setWidth(Js.<MediaTrackConstraintSet.GetWidthUnionType>uncheckedCast(width));
  }

  @JsProperty
  void setWidth(MediaTrackConstraintSet.GetWidthUnionType width);

  @JsOverlay
  default void setWidth(int width) {
    setWidth(Js.<MediaTrackConstraintSet.GetWidthUnionType>uncheckedCast(width));
  }
}

