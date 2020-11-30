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
public class AnimationEvent extends Event {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface AnimationEventAnimationEventInitDictType {
    @JsOverlay
    static AnimationEvent.AnimationEventAnimationEventInitDictType create() {
      return Js.uncheckedCast(JsPropertyMap.of());
    }

    @JsProperty
    String getAnimationName();

    @JsProperty
    double getElapsedTime();

    @JsProperty
    String getPseudoElement();

    @JsProperty
    void setAnimationName(String animationName);

    @JsProperty
    void setElapsedTime(double elapsedTime);

    @JsProperty
    void setPseudoElement(String pseudoElement);
  }

  public String animationName;
  public double elapsedTime;
  public String pseudoElement;

  public AnimationEvent(
      String type, AnimationEvent.AnimationEventAnimationEventInitDictType animationEventInitDict) {
    // This super call is here only for the code to compile; it is never executed.
    super((String) null, (EventInit) null);
  }

  public AnimationEvent(String type) {
    // This super call is here only for the code to compile; it is never executed.
    super((String) null, (EventInit) null);
  }
}

