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

import elemental2.promise.Promise;
import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsMethod;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface MediaStreamTrack extends EventTarget {
  @JsFunction
  public interface OnendedFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnmuteFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnoverconstrainedFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnunmuteFn {
    Object onInvoke(Event p0);
  }

  Promise<Void> applyConstraints();

  Promise<Void> applyConstraints(MediaTrackConstraints constraints);

  @JsMethod(name = "clone")
  MediaStreamTrack clone_();

  MediaTrackCapabilities getCapabilities();

  MediaTrackConstraints getConstraints();

  @JsProperty
  String getContentHint();

  @JsProperty
  String getId();

  @JsProperty
  String getKind();

  @JsProperty
  String getLabel();

  @JsProperty
  MediaStreamTrack.OnendedFn getOnended();

  @JsProperty
  MediaStreamTrack.OnmuteFn getOnmute();

  @JsProperty
  MediaStreamTrack.OnoverconstrainedFn getOnoverconstrained();

  @JsProperty
  MediaStreamTrack.OnunmuteFn getOnunmute();

  @JsProperty
  String getReadyState();

  MediaTrackSettings getSettings();

  @JsProperty
  boolean isEnabled();

  @JsProperty
  boolean isMuted();

  @JsProperty
  boolean isRemote();

  @JsProperty
  void setContentHint(String contentHint);

  @JsProperty
  void setEnabled(boolean enabled);

  @JsProperty
  void setOnended(MediaStreamTrack.OnendedFn onended);

  @JsProperty
  void setOnmute(MediaStreamTrack.OnmuteFn onmute);

  @JsProperty
  void setOnoverconstrained(MediaStreamTrack.OnoverconstrainedFn onoverconstrained);

  @JsProperty
  void setOnunmute(MediaStreamTrack.OnunmuteFn onunmute);

  @JsProperty
  void setReadyState(String readyState);

  void stop();
}

