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

/**
 * Registration objects returned when an event handler is bound (e.g. via {@link
 * EventBus#addHandler}), used to deregister.
 *
 * <p>To use {@code com.google.web.bindery.event.shared.HandlerRegistration} or {@code
 * com.google.gwt.event.shared.HandlerRegistration} in a context where a {@code
 * org.gwtproject.web.bindery.event.shared.HandlerRegistration} is needed, or the reverse, use
 * {@code handlerRegistration::removeHandler}.
 *
 * <p>A tip: to make a handler deregister itself try something like the following:
 *
 * <pre>new MyHandler() {
 *  HandlerRegistration reg = MyEvent.register(eventBus, this);
 *
 *  public void onMyThing(MyEvent event) {
 *    // do your thing
 *    reg.removeHandler();
 *  }
 * };
 * </pre>
 */
public interface HandlerRegistration {

  /**
   * Deregisters the handler associated with this registration object if the handler is still
   * attached to the event source. If the handler is no longer attached to the event source, this is
   * a no-op.
   */
  void removeHandler();
}

