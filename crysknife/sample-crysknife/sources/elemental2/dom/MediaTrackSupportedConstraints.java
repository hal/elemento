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
public interface MediaTrackSupportedConstraints {
  @JsProperty
  boolean isAspectRatio();

  @JsProperty
  boolean isAutoGainControl();

  @JsProperty
  boolean isChannelCount();

  @JsProperty
  boolean isDeviceId();

  @JsProperty
  boolean isEchoCancellation();

  @JsProperty
  boolean isFacingMode();

  @JsProperty
  boolean isFrameRate();

  @JsProperty
  boolean isGroupId();

  @JsProperty
  boolean isHeight();

  @JsProperty
  boolean isLatency();

  @JsProperty
  boolean isNoiseSuppression();

  @JsProperty
  boolean isSampleRate();

  @JsProperty
  boolean isSampleSize();

  @JsProperty
  boolean isVolume();

  @JsProperty
  boolean isWidth();

  @JsProperty
  void setAspectRatio(boolean aspectRatio);

  @JsProperty
  void setAutoGainControl(boolean autoGainControl);

  @JsProperty
  void setChannelCount(boolean channelCount);

  @JsProperty
  void setDeviceId(boolean deviceId);

  @JsProperty
  void setEchoCancellation(boolean echoCancellation);

  @JsProperty
  void setFacingMode(boolean facingMode);

  @JsProperty
  void setFrameRate(boolean frameRate);

  @JsProperty
  void setGroupId(boolean groupId);

  @JsProperty
  void setHeight(boolean height);

  @JsProperty
  void setLatency(boolean latency);

  @JsProperty
  void setNoiseSuppression(boolean noiseSuppression);

  @JsProperty
  void setSampleRate(boolean sampleRate);

  @JsProperty
  void setSampleSize(boolean sampleSize);

  @JsProperty
  void setVolume(boolean volume);

  @JsProperty
  void setWidth(boolean width);
}

