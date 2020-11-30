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
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsConstructorFn;
import jsinterop.base.JsPropertyMap;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class CustomElementRegistry {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface DefineOptionsType {
    @JsOverlay
    static CustomElementRegistry.DefineOptionsType create() {
      return Js.uncheckedCast(JsPropertyMap.of());
    }

    @JsProperty
    String getExtends();

    @JsProperty
    void setExtends(String extends_);
  }

  @JsOverlay
  public final void define(
      String tagName,
      Class<? extends HTMLElement> klass,
      CustomElementRegistry.DefineOptionsType options) {
    define(tagName, Js.asConstructorFn(klass), options);
  }

  @JsOverlay
  public final void define(String tagName, Class<? extends HTMLElement> klass) {
    define(tagName, Js.asConstructorFn(klass));
  }

  public native void define(
      String tagName,
      JsConstructorFn<? extends HTMLElement> klass,
      CustomElementRegistry.DefineOptionsType options);

  public native void define(String tagName, JsConstructorFn<? extends HTMLElement> klass);

  public native JsConstructorFn<? extends HTMLElement> get(String tagName);

  public native void upgrade(Node root);

  public native Promise<Void> whenDefined(String tagName);
}

