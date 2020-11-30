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

import javaemul.internal.annotations.DoNotAutobox;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

/**
 * Provides abstraction of JavaScript objects as property maps.
 *
 * <p>See {@link Js#asPropertyMap(Object)} to cast an object to {@code JsPropertyMap}.
 */
@JsType(isNative = true, name = "Object", namespace = JsPackage.GLOBAL)
public interface JsPropertyMap<T> {

  /** Returns an empty object literal as {@code JsPropertyMap}. */
  @JsOverlay
  static <T> JsPropertyMap<T> of() {
    return InternalJsUtil.emptyObjectLiteral();
  }

  /** Returns an object literal as {@code JsPropertyMap} that has provided key-value pairs. */
  @JsOverlay
  static <T> JsPropertyMap<T> of(String k, @DoNotAutobox T v) {
    JsPropertyMap<T> map = of();
    map.set(k, v);
    return map;
  }

  /** Returns an object literal as {@code JsPropertyMap} that has provided key-value pairs. */
  @JsOverlay
  static <T> JsPropertyMap<T> of(String k1, @DoNotAutobox T v1, String k2, @DoNotAutobox T v2) {
    JsPropertyMap<T> map = of();
    map.set(k1, v1);
    map.set(k2, v2);
    return map;
  }

  /** Returns an object literal as {@code JsPropertyMap} that has provided key-value pairs. */
  @JsOverlay
  static <T> JsPropertyMap<T> of(
      String k1, @DoNotAutobox T v1, String k2, @DoNotAutobox T v2, String k3, @DoNotAutobox T v3) {
    JsPropertyMap<T> map = of();
    map.set(k1, v1);
    map.set(k2, v2);
    map.set(k3, v3);
    return map;
  }

  @JsOverlay
  @SuppressWarnings("unchecked")
  default T get(String propertyName) {
    return (T) InternalJsUtil.get(this, propertyName);
  }

  /**
   * Gets by qualified name. Method will return null if any objects on the path to qualified name is
   * null. e.g. nestedGet("a.b") is equivalent to {@code ["a"] != null && ["a"]["b"]}).
   */
  @JsOverlay
  default Object nestedGet(String qualifiedName) {
    return InternalJsUtil.getObjectByName(qualifiedName, this);
  }

  @Deprecated
  @JsOverlay
  default Any getAny(String propertyName) {
    return getAsAny(propertyName);
  }

  @JsOverlay
  default Any getAsAny(String propertyName) {
    return (Any) InternalJsUtil.get(this, propertyName);
  }

  /**
   * Gets as {@code Any} by qualified name. Method will return null if any objects on the path to
   * qualified name is null. e.g. nestedGetAsAny("a.b") is equivalent to {@code ["a"] != null &&
   * ["a"]["b"]}).
   */
  @JsOverlay
  default Any nestedGetAsAny(String qualifiedName) {
    return (Any) InternalJsUtil.getObjectByName(qualifiedName, this);
  }

  @JsOverlay
  default boolean has(String propertyName) {
    return InternalJsUtil.has(this, propertyName);
  }

  @JsOverlay
  default void delete(String propertyName) {
    InternalJsUtil.delete(this, propertyName);
  }

  @JsOverlay
  default void set(String propertyName, @DoNotAutobox T value) {
    InternalJsUtil.set(this, propertyName, value);
  }

  @JsOverlay
  default void forEach(JsForEachCallbackFn cb) {
    InternalJsUtil.forEach(this, cb);
  }
}

