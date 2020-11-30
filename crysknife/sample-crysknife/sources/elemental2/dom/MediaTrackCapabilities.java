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

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface MediaTrackCapabilities {
  @JsProperty
  double getAspectRatio();

  @JsProperty
  MediaSettingsRange getBrightness();

  @JsProperty
  double getChannelCount();

  @JsProperty
  MediaSettingsRange getColorTemperature();

  @JsProperty
  MediaSettingsRange getContrast();

  @JsProperty
  String getDeviceId();

  @JsProperty
  JsArray<Boolean> getEchoCancellation();

  @JsProperty
  MediaSettingsRange getExposureCompensation();

  @JsProperty
  JsArray<String> getExposureMode();

  @JsProperty
  JsArray<String> getFacingMode();

  @JsProperty
  JsArray<String> getFocusMode();

  @JsProperty
  double getFrameRate();

  @JsProperty
  String getGroupId();

  @JsProperty
  double getHeight();

  @JsProperty
  MediaSettingsRange getIso();

  @JsProperty
  double getLatency();

  @JsProperty
  double getSampleRate();

  @JsProperty
  int getSampleSize();

  @JsProperty
  MediaSettingsRange getSaturation();

  @JsProperty
  MediaSettingsRange getSharpness();

  @JsProperty
  double getVolume();

  @JsProperty
  JsArray<String> getWhiteBalanceMode();

  @JsProperty
  double getWidth();

  @JsProperty
  MediaSettingsRange getZoom();

  @JsProperty
  boolean isTorch();

  @JsProperty
  void setAspectRatio(double aspectRatio);

  @JsProperty
  void setBrightness(MediaSettingsRange brightness);

  @JsProperty
  void setChannelCount(double channelCount);

  @JsProperty
  void setColorTemperature(MediaSettingsRange colorTemperature);

  @JsProperty
  void setContrast(MediaSettingsRange contrast);

  @JsProperty
  void setDeviceId(String deviceId);

  @JsProperty
  void setEchoCancellation(JsArray<Boolean> echoCancellation);

  @JsOverlay
  default void setEchoCancellation(boolean[] echoCancellation) {
    setEchoCancellation(Js.<JsArray<Boolean>>uncheckedCast(echoCancellation));
  }

  @JsProperty
  void setExposureCompensation(MediaSettingsRange exposureCompensation);

  @JsProperty
  void setExposureMode(JsArray<String> exposureMode);

  @JsOverlay
  default void setExposureMode(String[] exposureMode) {
    setExposureMode(Js.<JsArray<String>>uncheckedCast(exposureMode));
  }

  @JsProperty
  void setFacingMode(JsArray<String> facingMode);

  @JsOverlay
  default void setFacingMode(String[] facingMode) {
    setFacingMode(Js.<JsArray<String>>uncheckedCast(facingMode));
  }

  @JsProperty
  void setFocusMode(JsArray<String> focusMode);

  @JsOverlay
  default void setFocusMode(String[] focusMode) {
    setFocusMode(Js.<JsArray<String>>uncheckedCast(focusMode));
  }

  @JsProperty
  void setFrameRate(double frameRate);

  @JsProperty
  void setGroupId(String groupId);

  @JsProperty
  void setHeight(double height);

  @JsProperty
  void setIso(MediaSettingsRange iso);

  @JsProperty
  void setLatency(double latency);

  @JsProperty
  void setSampleRate(double sampleRate);

  @JsProperty
  void setSampleSize(int sampleSize);

  @JsProperty
  void setSaturation(MediaSettingsRange saturation);

  @JsProperty
  void setSharpness(MediaSettingsRange sharpness);

  @JsProperty
  void setTorch(boolean torch);

  @JsProperty
  void setVolume(double volume);

  @JsProperty
  void setWhiteBalanceMode(JsArray<String> whiteBalanceMode);

  @JsOverlay
  default void setWhiteBalanceMode(String[] whiteBalanceMode) {
    setWhiteBalanceMode(Js.<JsArray<String>>uncheckedCast(whiteBalanceMode));
  }

  @JsProperty
  void setWidth(double width);

  @JsProperty
  void setZoom(MediaSettingsRange zoom);
}

