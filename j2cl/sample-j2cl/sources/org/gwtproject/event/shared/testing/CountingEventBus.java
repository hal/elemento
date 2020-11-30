/*
 * Copyright 2011 The GWT Project Authors
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
package org.gwtproject.event.shared.testing;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import org.gwtproject.event.shared.Event;
import org.gwtproject.event.shared.Event.Type;
import org.gwtproject.event.shared.EventBus;
import org.gwtproject.event.shared.HandlerRegistration;
import org.gwtproject.event.shared.SimpleEventBus;

/**
 * Wraps an {@link EventBus} to keep a count of registered handlers and how many times events have
 * fired. Handy for tests.
 */
public class CountingEventBus extends EventBus {
  private final KeyedCounter<Type<?>> handlerCounts = new KeyedCounter<>();
  private final KeyedCounter<Type<?>> firedCounts = new KeyedCounter<>();
  private final KeyedCounter<TypeSourcePair> sourceCounts = new KeyedCounter<>();
  private final EventBus wrapped;

  public CountingEventBus() {
    this(new SimpleEventBus());
  }

  public CountingEventBus(EventBus wrapped) {
    this.wrapped = wrapped;
  }

  @Override
  public <H> HandlerRegistration addHandler(Type<H> type, H handler) {
    final HandlerRegistration superReg = wrapped.addHandler(type, handler);
    handlerCounts.increment(type);
    return makeReg(type, superReg);
  }

  @Override
  public <H> HandlerRegistration addHandlerToSource(final Type<H> type, Object source, H handler) {
    final HandlerRegistration superReg = wrapped.addHandlerToSource(type, source, handler);
    handlerCounts.increment(type);
    return makeReg(type, superReg);
  }

  @Override
  public void fireEvent(Event<?> event) {
    wrapped.fireEvent(event);
    firedCounts.increment(event.getAssociatedType());
    sourceCounts.increment(new TypeSourcePair(event.getAssociatedType(), null));
  }

  @Override
  public void fireEventFromSource(Event<?> event, Object source) {
    wrapped.fireEventFromSource(event, source);
    firedCounts.increment(event.getAssociatedType());
    sourceCounts.increment(new TypeSourcePair(event.getAssociatedType(), source));
  }

  /**
   * How many events have fired for the given {@code type}. These events may not have been passed to
   * any handlers.
   */
  public int getFiredCount(Type<?> type) {
    return firedCounts.getCount(type);
  }

  /**
   * How many events have fired for the given pairing of {@code type} and {@code source}. These
   * events may not have been passed to any handlers.
   */
  public int getFiredCountFromSource(Type<?> type, Object source) {
    return sourceCounts.getCount(new TypeSourcePair(type, source));
  }

  /** How many handlers are registered for the given {@code type}. */
  public int getHandlerCount(Type<?> type) {
    return handlerCounts.getCount(type);
  }

  private <H> HandlerRegistration makeReg(final Type<H> type, final HandlerRegistration superReg) {
    return () -> {
      handlerCounts.decrement(type);
      superReg.removeHandler();
    };
  }

  private static class TypeSourcePair {
    final Type<?> type;
    final Object source;

    TypeSourcePair(Type<?> type, Object source) {
      this.type = type;
      this.source = source;
    }

    @Override
    public boolean equals(Object o) {
      if (o == this) {
        return true;
      }
      if (!(o instanceof TypeSourcePair)) {
        return false;
      }

      TypeSourcePair pair = (TypeSourcePair) o;
      return Objects.equals(type, pair.type) && Objects.equals(source, pair.source);
    }

    @Override
    public int hashCode() {
      int hash = 7;
      hash = (hash * 31) + (type == null ? 0 : type.hashCode());
      hash = (hash * 31) + (source == null ? 0 : source.hashCode());
      return hash;
    }
  }

  private static class KeyedCounter<K> {
    private Map<K, Integer> counts = new HashMap<>();

    int getCount(K key) {
      Integer count = counts.get(key);
      return count == null ? 0 : count;
    }

    void decrement(K key) {
      counts.put(key, getCount(key) - 1);
    }

    void increment(K key) {
      counts.put(key, getCount(key) + 1);
    }
  }
}

