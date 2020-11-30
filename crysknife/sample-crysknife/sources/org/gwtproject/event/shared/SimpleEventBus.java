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
package org.gwtproject.event.shared;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import org.gwtproject.event.shared.Event.Type;

/** Basic implementation of {@link EventBus}. */
public class SimpleEventBus extends EventBus {
  private interface Command {
    void execute();
  }

  private int firingDepth = 0;

  /** Add and remove operations received during dispatch. */
  private List<Command> deferredDeltas;

  /** Map of event type to map of event source to list of their handlers. */
  private final Map<Event.Type<?>, Map<Object, List<?>>> map = new HashMap<>();

  @Override
  public <H> HandlerRegistration addHandler(Type<H> type, H handler) {
    return doAdd(type, null, handler);
  }

  @Override
  public <H> HandlerRegistration addHandlerToSource(
      final Event.Type<H> type, final Object source, final H handler) {
    if (source == null) {
      throw new NullPointerException("Cannot add a handler with a null source");
    }

    return doAdd(type, source, handler);
  }

  @Override
  public void fireEvent(Event<?> event) {
    doFire(event, null);
  }

  @Override
  public void fireEventFromSource(Event<?> event, Object source) {
    if (source == null) {
      throw new NullPointerException("Cannot fire from a null source");
    }
    doFire(event, source);
  }

  private <H> void doRemove(Event.Type<H> type, Object source, H handler) {
    if (firingDepth > 0) {
      enqueueRemove(type, source, handler);
    } else {
      doRemoveNow(type, source, handler);
    }
  }

  private void defer(Command command) {
    if (deferredDeltas == null) {
      deferredDeltas = new ArrayList<>();
    }
    deferredDeltas.add(command);
  }

  private <H> HandlerRegistration doAdd(
      final Event.Type<H> type, final Object source, final H handler) {
    if (type == null) {
      throw new NullPointerException("Cannot add a handler with a null type");
    }
    if (handler == null) {
      throw new NullPointerException("Cannot add a null handler");
    }

    if (firingDepth > 0) {
      enqueueAdd(type, source, handler);
    } else {
      doAddNow(type, source, handler);
    }

    return () -> doRemove(type, source, handler);
  }

  private <H> void doAddNow(Event.Type<H> type, Object source, H handler) {
    List<H> l = ensureHandlerList(type, source);
    l.add(handler);
  }

  private <H> void doFire(Event<H> event, Object source) {
    if (event == null) {
      throw new NullPointerException("Cannot fire null event");
    }
    try {
      firingDepth++;

      if (source != null) {
        setSourceOfEvent(event, source);
      }

      List<H> handlers = getDispatchList(event.getAssociatedType(), source);
      Set<Throwable> causes = null;

      for (H handler : handlers) {
        try {
          dispatchEvent(event, handler);
        } catch (Throwable e) {
          if (causes == null) {
            causes = new HashSet<>();
          }
          causes.add(e);
        }
      }

      if (causes != null) {
        throw new UmbrellaException(causes);
      }
    } finally {
      firingDepth--;
      if (firingDepth == 0) {
        handleQueuedAddsAndRemoves();
      }
    }
  }

  private <H> void doRemoveNow(Event.Type<H> type, Object source, H handler) {
    List<H> l = getHandlerList(type, source);

    boolean removed = l.remove(handler);

    if (removed && l.isEmpty()) {
      prune(type, source);
    }
  }

  private <H> void enqueueAdd(final Event.Type<H> type, final Object source, final H handler) {
    defer(() -> doAddNow(type, source, handler));
  }

  private <H> void enqueueRemove(final Event.Type<H> type, final Object source, final H handler) {
    defer(() -> doRemoveNow(type, source, handler));
  }

  private <H> List<H> ensureHandlerList(Event.Type<H> type, Object source) {
    Map<Object, List<?>> sourceMap = map.computeIfAbsent(type, k -> new HashMap<>());

    // safe, we control the puts.
    @SuppressWarnings("unchecked")
    List<H> handlers = (List<H>) sourceMap.get(source);
    if (handlers == null) {
      handlers = new ArrayList<>();
      sourceMap.put(source, handlers);
    }

    return handlers;
  }

  private <H> List<H> getDispatchList(Event.Type<H> type, Object source) {
    List<H> directHandlers = getHandlerList(type, source);
    if (source == null) {
      return directHandlers;
    }

    List<H> globalHandlers = getHandlerList(type, null);

    List<H> rtn = new ArrayList<>(directHandlers);
    rtn.addAll(globalHandlers);
    return rtn;
  }

  private <H> List<H> getHandlerList(Event.Type<H> type, Object source) {
    Map<Object, List<?>> sourceMap = map.get(type);
    if (sourceMap == null) {
      return Collections.emptyList();
    }

    // safe, we control the puts.
    @SuppressWarnings("unchecked")
    List<H> handlers = (List<H>) sourceMap.get(source);
    if (handlers == null) {
      return Collections.emptyList();
    }

    return handlers;
  }

  private void handleQueuedAddsAndRemoves() {
    if (deferredDeltas != null) {
      try {
        for (Command c : deferredDeltas) {
          c.execute();
        }
      } finally {
        deferredDeltas = null;
      }
    }
  }

  private void prune(Event.Type<?> type, Object source) {
    Map<Object, List<?>> sourceMap = map.get(type);

    List<?> pruned = sourceMap.remove(source);

    assert pruned != null : "Can't prune what wasn't there";
    assert pruned.isEmpty() : "Pruned unempty list!";

    if (sourceMap.isEmpty()) {
      map.remove(type);
    }
  }
}

