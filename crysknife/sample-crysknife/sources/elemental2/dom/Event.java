/*
 * Copyright 2018 Google Inc.
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
package elemental2.dom;

import elemental2.core.JsArray;
import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class Event {
  @JsFunction
  public interface DeepPathFn {
    JsArray<EventTarget> onInvoke();
  }

  @JsOverlay public static final int AT_TARGET = Event__Constants.AT_TARGET;
  @JsOverlay public static final int BUBBLING_PHASE = Event__Constants.BUBBLING_PHASE;
  @JsOverlay public static final int CAPTURING_PHASE = Event__Constants.CAPTURING_PHASE;
  public boolean bubbles;
  public boolean cancelable;
  public boolean composed;
  public EventTarget currentTarget;
  public Event.DeepPathFn deepPath;
  public boolean defaultPrevented;
  public int eventPhase;
  public String namespaceURI;
  public JsArray<Element> path;
  public EventTarget target;
  public double timeStamp;
  public String type;

  public Event(String type, EventInit eventInitDict) {}

  public Event(String type) {}

  public native JsArray<EventTarget> composedPath();

  public native void initEvent(String eventTypeArg, boolean canBubbleArg, boolean cancelableArg);

  public native void initEvent(String eventTypeArg, boolean canBubbleArg);

  public native void initEvent(String eventTypeArg);

  public native void preventDefault();

  public native void stopImmediatePropagation();

  public native void stopPropagation();
}

