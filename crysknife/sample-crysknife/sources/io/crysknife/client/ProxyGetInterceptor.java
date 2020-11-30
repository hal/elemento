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

import java.util.HashMap;
import java.util.Map;
import java.util.function.BiFunction;

import jsinterop.base.Js;

/**
 * @author Dmitrii Tikhomirov Created by treblereel 12/16/19
 */
public final class ProxyGetInterceptor implements GetFN {

  private Object target;

  private Map<String, BiFunction<Object, String, Object>> propHolder = new HashMap<>();
  private Map<String, BiFunction<Object, String, Object>> methodHolder = new HashMap<>();

  public ProxyGetInterceptor(Object target) {
    this.target = target;
  }

  public void addProperty(String obfuscated, BiFunction function) {
    propHolder.put(obfuscated, function);
  }

  public void addMethod(String obfuscated, BiFunction function) {
    methodHolder.put(obfuscated, function);
  }

  @Override
  public Object onInvoke(Object object, String objectKey, Object receiver) {
    if (Js.typeof(Js.asPropertyMap(object).get(objectKey)).equals("function")) {
      if (object.equals(target) && methodHolder.containsKey(objectKey)) {
        return methodHolder.get(objectKey).apply(object, objectKey);
      }
    } else {
      if (object.equals(target) && propHolder.containsKey(objectKey)) {
        return propHolder.get(objectKey).apply(object, objectKey);
      }
    }
    return Js.asPropertyMap(object).get(objectKey);
  }
}

