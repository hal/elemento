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
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class HTMLObjectElement extends HTMLElement {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface TSetPropertyValueUnionType {
    @JsOverlay
    static HTMLObjectElement.TSetPropertyValueUnionType of(Object o) {
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

  public String align;
  public String archive;
  public String border;
  public String code;
  public String codeBase;
  public String codeType;
  public Document contentDocument;
  public String data;
  public boolean declare;
  public HTMLFormElement form;
  public String height;
  public int hspace;
  public String name;
  public String standby;
  public int tabIndex;
  public String type;
  public String useMap;
  public String validationMessage;
  public ValidityState validity;
  public int vspace;
  public String width;
  public boolean willValidate;

  public native String CallFunction(String xmlString);

  public native String GetVariable(String varName);

  public native void GotoFrame(double frameNumber);

  public native boolean IsPlaying();

  public native void LoadMovie(double layerNumber, String url);

  public native void Pan(double x, double y, double mode);

  public native double PercentLoaded();

  public native void Play();

  public native void Rewind();

  public native void SetVariable(String variableName, String value);

  public native void SetZoomRect(double left, double top, double right, double bottom);

  public native void StopPlay();

  public native void TCallFrame(String target, double frameNumber);

  public native void TCallLabel(String target, String label);

  public native double TCurentFrame(String target);

  public native String TCurrentLabel(String target);

  public native String TGetProperty(String target, double property);

  public native double TGetPropertyAsNumber(String target, double property);

  public native void TGotoFrame(String target, double frameNumber);

  public native void TGotoLabel(String target, String label);

  public native void TPlay(double target);

  @JsOverlay
  public final void TSetProperty(double target, double property, String value) {
    TSetProperty(
        target, property, Js.<HTMLObjectElement.TSetPropertyValueUnionType>uncheckedCast(value));
  }

  public native void TSetProperty(
      double target, double property, HTMLObjectElement.TSetPropertyValueUnionType value);

  @JsOverlay
  public final void TSetProperty(double target, double property, double value) {
    TSetProperty(
        target, property, Js.<HTMLObjectElement.TSetPropertyValueUnionType>uncheckedCast(value));
  }

  public native void TStopPlay(double target);

  public native double TotalFrames();

  public native void Zoom(double percent);

  public native boolean checkValidity();

  public native void setCustomValidity(String p0);
}

