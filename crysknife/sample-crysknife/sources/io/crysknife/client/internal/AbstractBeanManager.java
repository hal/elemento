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

import java.lang.annotation.Annotation;
import java.util.HashMap;
import java.util.Map;

import javax.enterprise.inject.Default;
import javax.inject.Provider;

import io.crysknife.client.BeanManager;
import io.crysknife.client.Instance;

/**
 * @author Dmitrii Tikhomirov Created by treblereel 3/29/19
 */
public abstract class AbstractBeanManager implements BeanManager {

  final private Map<Class, Map<Class<? extends Annotation>, Provider>> beanStore =
      new java.util.HashMap<>();

  protected AbstractBeanManager() {

  }

  @Override
  public void destroyBean(Object ref) {

  }

  @Override
  public <T> Instance<T> lookupBean(Class type, Class<? extends Annotation> qualifier) {
    if (beanStore.get(type) != null && beanStore.get(type).containsKey(qualifier)) {
      return new InstanceImpl<T>(beanStore.get(type).get(qualifier));
    }
    throw new Error("Unable to find the bean [" + type.getCanonicalName() + "] with the qualifier ["
        + qualifier.getCanonicalName() + "]");
  }

  @Override
  public <T> Instance<T> lookupBean(Class type) {
    return lookupBean(type, Default.class);
  }

  protected void register(Class type, Provider provider) {
    register(type, provider, Default.class);
  }

  protected void register(Class type, Provider provider, Class<? extends Annotation> annotation) {
    if (!beanStore.containsKey(type)) {
      beanStore.put(type, new HashMap<>());
    }
    beanStore.get(type).put(annotation, provider);
  }
}

