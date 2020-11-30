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

import java.util.HashMap;
import java.util.Map;

import javax.enterprise.event.Event;

/**
 * @author Dmitrii Tikhomirov Created by treblereel 4/4/19
 */
public abstract class AbstractEventFactory {

  protected Map<Class, EventHolder> holder = new HashMap<>();

  public <T> Event<T> get(Class type) {
    if (!holder.containsKey(type)) {
      holder.put(type, new EventHolder(type));
    }

    return holder.get(type);
  }

  class EventHolder extends AbstractEventHandler {

    private Class type;

    EventHolder(Class type) {
      this.type = type;
    }
  }
}

