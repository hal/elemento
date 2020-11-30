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
import elemental2.core.JsDate;
import elemental2.core.JsIterable;
import elemental2.core.JsIteratorIterable;
import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface RTCStatsReport
    extends JsIterable<JsArray<RTCStatsReport.JsIterableTypeParameterArrayUnionType>> {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface EntriesJsIteratorIterableTypeParameterArrayUnionType {
    @JsOverlay
    static RTCStatsReport.EntriesJsIteratorIterableTypeParameterArrayUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default RTCStats asRTCStats() {
      return Js.cast(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  @JsFunction
  public interface ForEachCallbackFn {
    Object onInvoke(RTCStats p0, String p1, RTCStatsReport p2);
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface GetTimestampUnionType {
    @JsOverlay
    static RTCStatsReport.GetTimestampUnionType of(Object o) {
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
  public interface JsIterableTypeParameterArrayUnionType {
    @JsOverlay
    static RTCStatsReport.JsIterableTypeParameterArrayUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default RTCStats asRTCStats() {
      return Js.cast(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  JsIteratorIterable<JsArray<RTCStatsReport.EntriesJsIteratorIterableTypeParameterArrayUnionType>>
      entries(String key);

  <SCOPE> Object forEach(RTCStatsReport.ForEachCallbackFn callback, SCOPE thisObj);

  Object forEach(RTCStatsReport.ForEachCallbackFn callback);

  RTCStats get(String key);

  @JsProperty
  String getId();

  @Deprecated
  @JsProperty
  RTCStatsReport getLocal();

  @Deprecated
  @JsProperty
  RTCStatsReport getRemote();

  @JsProperty
  double getSize();

  @JsProperty
  RTCStatsReport.GetTimestampUnionType getTimestamp();

  @JsProperty
  String getType();

  boolean has(String key);

  JsIteratorIterable<String> keys();

  JsArray<String> names();

  String stat(String name);

  JsIteratorIterable<RTCStats> values();
}

