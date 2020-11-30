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
public interface MediaTrackSettings {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface PointsOfInterestFieldType {
    @JsOverlay
    static MediaTrackSettings.PointsOfInterestFieldType create() {
      return Js.uncheckedCast(JsPropertyMap.of());
    }

    @JsProperty
    double getX();

    @JsProperty
    double getY();

    @JsProperty
    void setX(double x);

    @JsProperty
    void setY(double y);
  }

  @JsProperty
  double getAspectRatio();

  @JsProperty
  double getBrightness();

  @JsProperty
  double getChannelCount();

  @JsProperty
  double getColorTemperature();

  @JsProperty
  double getContrast();

  @JsProperty
  String getDeviceId();

  @JsProperty
  double getExposureCompensation();

  @JsProperty
  String getExposureMode();

  @JsProperty
  String getFacingMode();

  @JsProperty
  String getFocusMode();

  @JsProperty
  double getFrameRate();

  @JsProperty
  String getGroupId();

  @JsProperty
  int getHeight();

  @JsProperty
  double getIso();

  @JsProperty
  double getLatency();

  @JsProperty
  JsArray<MediaTrackSettings.PointsOfInterestFieldType> getPointsOfInterest();

  @JsProperty
  double getSampleRate();

  @JsProperty
  int getSampleSize();

  @JsProperty
  double getSaturation();

  @JsProperty
  double getSharpness();

  @JsProperty
  double getVolume();

  @JsProperty
  String getWhiteBalanceMode();

  @JsProperty
  int getWidth();

  @JsProperty
  double getZoom();

  @JsProperty
  boolean isEchoCancellation();

  @JsProperty
  boolean isTorch();

  @JsProperty
  void setAspectRatio(double aspectRatio);

  @JsProperty
  void setBrightness(double brightness);

  @JsProperty
  void setChannelCount(double channelCount);

  @JsProperty
  void setColorTemperature(double colorTemperature);

  @JsProperty
  void setContrast(double contrast);

  @JsProperty
  void setDeviceId(String deviceId);

  @JsProperty
  void setEchoCancellation(boolean echoCancellation);

  @JsProperty
  void setExposureCompensation(double exposureCompensation);

  @JsProperty
  void setExposureMode(String exposureMode);

  @JsProperty
  void setFacingMode(String facingMode);

  @JsProperty
  void setFocusMode(String focusMode);

  @JsProperty
  void setFrameRate(double frameRate);

  @JsProperty
  void setGroupId(String groupId);

  @JsProperty
  void setHeight(int height);

  @JsProperty
  void setIso(double iso);

  @JsProperty
  void setLatency(double latency);

  @JsProperty
  void setPointsOfInterest(JsArray<MediaTrackSettings.PointsOfInterestFieldType> pointsOfInterest);

  @JsOverlay
  default void setPointsOfInterest(
      MediaTrackSettings.PointsOfInterestFieldType[] pointsOfInterest) {
    setPointsOfInterest(
        Js.<JsArray<MediaTrackSettings.PointsOfInterestFieldType>>uncheckedCast(pointsOfInterest));
  }

  @JsProperty
  void setSampleRate(double sampleRate);

  @JsProperty
  void setSampleSize(int sampleSize);

  @JsProperty
  void setSaturation(double saturation);

  @JsProperty
  void setSharpness(double sharpness);

  @JsProperty
  void setTorch(boolean torch);

  @JsProperty
  void setVolume(double volume);

  @JsProperty
  void setWhiteBalanceMode(String whiteBalanceMode);

  @JsProperty
  void setWidth(int width);

  @JsProperty
  void setZoom(double zoom);
}

