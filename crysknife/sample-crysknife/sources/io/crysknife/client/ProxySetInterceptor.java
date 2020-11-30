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

import jsinterop.base.Js;

/**
 * @author Dmitrii Tikhomirov Created by treblereel 12/18/19
 */
public final class ProxySetInterceptor implements SetFN {

  private Object target;

  public ProxySetInterceptor(Object target) {
    this.target = target;
  }

  @Override
  public boolean onInvoke(Object object, String objectKey, Object value) {
    Js.asPropertyMap(object).set(objectKey, value);
    return true;
  }
}

