/*
 * Copyright 2009 The GWT Project Authors
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
package org.gwtproject.event.legacy.shared;

import java.util.logging.Logger;
import org.gwtproject.event.shared.Event;

/**
 * Extends {@link Event} for legacy compatibility.
 *
 * @param <H> handler type
 * @deprecated This is only needed as a migration path from {@code com.google.gwt.event}. Use {@link
 *     Event} instead.
 */
@Deprecated
public abstract class GwtEvent<H> extends Event<H> {
  private static final Logger LOGGER = Logger.getLogger(GwtEvent.class.getName());

  /**
   * Extends {@link Event.Type} for legacy compatibility.
   *
   * @param <H> handler type
   * @deprecated This is only needed as a migration path from {@code com.google.gwt.event}. Use
   *     {@link Event.Type} instead.
   */
  @Deprecated
  public static class Type<H> extends Event.Type<H> {}

  protected GwtEvent() {}

  @Override
  public abstract GwtEvent.Type<H> getAssociatedType();

  protected void assertLive() {
    logDeprecation("assertLive is a no-op, and doesn't exist in Event.");
  }

  protected final boolean isLive() {
    logDeprecation("isLive always returns true, and doesn't exist in Event.");
    return true;
  }

  protected void kill() {
    logDeprecation("kill only resets the event's source, and doesn't exist in Event.");
    setSource(null);
  }

  protected void revive() {
    logDeprecation("revive only resets the event's source, and doesn't exist in Event.");
    setSource(null);
  }

  void overrideSource(Object source) {
    super.setSource(source);
  }

  private void logDeprecation(String msg) {
    LOGGER.warning("GwtEvent is deprecated; please migrate to Event. " + msg);
  }
}

