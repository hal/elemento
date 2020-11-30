/*
 * Copyright 2016 Google Inc.
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
 *
 */
package jsinterop.base;

import javaemul.internal.annotations.UncheckedCast;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

/**
 * Abstracts 'any' type in the type system (or '*' in Closure). This is the super type of all types
 * and provides helpers for casting into subtypes that are not otherwise castable (i.e. primitives).
 *
 * <p>See {@link Js#asAny(Object)} to cast an object to {@code Any}.
 */
@JsType(isNative = true, name = "*", namespace = JsPackage.GLOBAL)
public interface Any {

  @JsOverlay
  default JsPropertyMap<Object> asPropertyMap() {
    return Js.asPropertyMap(this);
  }

  @JsOverlay
  default JsArrayLike<Object> asArrayLike() {
    return Js.asArrayLike(this);
  }

  @JsOverlay
  default Any[] asArray() {
    return Js.asArray(this);
  }

  @JsOverlay
  default String asString() {
    return Js.asString(this);
  }

  @JsOverlay
  default boolean asBoolean() {
    return Js.asBoolean(this);
  }

  @JsOverlay
  default double asDouble() {
    return Js.asDouble(this);
  }

  @JsOverlay
  default float asFloat() {
    return Js.asFloat(this);
  }

  @JsOverlay
  default long asLong() {
    return Js.asLong(this);
  }

  @JsOverlay
  default int asInt() {
    return Js.asInt(this);
  }

  @JsOverlay
  default short asShort() {
    return Js.asShort(this);
  }

  @JsOverlay
  default char asChar() {
    return Js.asChar(this);
  }

  @JsOverlay
  default byte asByte() {
    return Js.asByte(this);
  }

  @JsOverlay
  @SuppressWarnings({"TypeParameterUnusedInFormals", "unchecked"})
  default <T> T cast() {
    return (T) this;
  }

  /**
   * Performs unchecked cast to lefthand-side type. You should always prefer regular casting over
   * this (unless you know what you are doing!).
   */
  @JsOverlay
  @UncheckedCast
  @SuppressWarnings({"TypeParameterUnusedInFormals", "unchecked"})
  default <T> T uncheckedCast() {
    return (T) this;
  }
}

