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
package io.crysknife.client.internal;

import javax.inject.Provider;

import io.crysknife.client.Instance;

/**
 * @author Dmitrii Tikhomirov Created by treblereel 3/29/19
 */
public class InstanceImpl<T> implements Instance<T> {

  Provider<T> provider;

  public InstanceImpl(Provider<T> provider) {
    this.provider = provider;
  }

  @Override
  public T get() {
    return provider.get();
  }

  @Override
  public void destroy(T var1) {}

  @Override
  public void destroyAll() {

  }
}

