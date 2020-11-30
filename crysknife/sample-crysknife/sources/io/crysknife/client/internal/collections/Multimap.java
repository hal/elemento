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
package io.crysknife.client.internal.collections;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

/**
 * @author Dmitrii Tikhomirov Created by treblereel 2/3/20
 */
public class Multimap<K, V> {

  protected Map<K, List<V>> holder;

  protected Multimap(Map<K, List<V>> holder) {
    this.holder = holder;
  }

  public Multimap() {
    this(new HashMap<>());
  }

  public void put(K key, V value) {
    if (!holder.containsKey(key)) {
      holder.put(key, new ArrayList<>());
    }
    holder.get(key).add(value);
  }

  public Collection<V> values() {
    Set<V> result = new HashSet<>();
    for (List<V> values : holder.values()) {
      for (V value : values) {
        result.add(value);
      }
    }
    return result;
  }

  public List<V> get(K key) {
    if (!holder.containsKey(key)) {
      return Collections.EMPTY_LIST;
    }
    return holder.get(key);
  }

  public boolean isEmpty() {
    return holder.isEmpty();
  }

  public void remove(K key, V value) {
    if (holder.containsKey(key)) {
      holder.get(key).remove(value);
    }
  }

  public boolean containsKey(K key) {
    return holder.containsKey(key);
  }

  public Collection<K> keys() {
    return holder.keySet();
  }

  public Set<K> keySet() {
    return holder.keySet();
  }

  public boolean containsEntry(K key, V value) {
    return holder.get(key).contains(value);
  }

  public void clear() {
    holder.clear();
  }

  public void removeAll(K key) {
    holder.get(key).clear();
  }

}

