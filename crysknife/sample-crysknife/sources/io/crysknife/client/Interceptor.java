/*
 * Copyright © 2020 Treblereel
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under the License
 * is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express
 * or implied. See the License for the specific language governing permissions and limitations under
 * the License.
 */
package io.crysknife.client;

import java.util.function.BiFunction;

import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;

/**
 * @author Dmitrii Tikhomirov Created by treblereel 12/17/19
 */
public class Interceptor {

  private Proxy proxy;

  private ProxyGetInterceptor get;

  private ProxySetInterceptor set;

  public Interceptor(Object target) {
    get = new ProxyGetInterceptor(target);
    set = new ProxySetInterceptor(target);
    JsPropertyMap holder = JsPropertyMap.of();
    holder.set("get", get);
    holder.set("set", set);

    proxy = new Proxy(target, holder);
  }

  public Interceptor addGetPropertyInterceptor(String obfuscatedPropertyName,
      BiFunction<Object, String, Object> function) {
    get.addProperty(obfuscatedPropertyName, function);
    return this;
  }

  public Interceptor addGetMethodInterceptor(String obfuscatedPropertyName, BiFunction function) {
    get.addMethod(obfuscatedPropertyName, function);
    return this;
  }

  public <T> T getProxy() {
    return Js.uncheckedCast(proxy);
  }
}

