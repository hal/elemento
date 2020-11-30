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

import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface RTCDTMFSender {
  @JsFunction
  public interface OntonechangeFn {
    Object onInvoke(RTCDTMFToneChangeEvent p0);
  }

  @JsProperty
  RTCDTMFSender.OntonechangeFn getOntonechange();

  @JsProperty
  String getToneBuffer();

  Object insertDTMF(String tones, double duration, double interToneGap);

  Object insertDTMF(String tones, double duration);

  Object insertDTMF(String tones);

  @JsProperty
  boolean isCanInsertDTMF();

  @JsProperty
  void setCanInsertDTMF(boolean canInsertDTMF);

  @JsProperty
  void setOntonechange(RTCDTMFSender.OntonechangeFn ontonechange);
}

