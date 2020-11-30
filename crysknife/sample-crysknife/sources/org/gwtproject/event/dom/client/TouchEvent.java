/*
 * Copyright © 2019 The GWT Project Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package org.gwtproject.event.dom.client;

import elemental2.dom.DomGlobal;
import elemental2.dom.HTMLDivElement;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import org.gwtproject.core.client.JsArray;
import org.gwtproject.dom.client.Touch;
import org.gwtproject.event.legacy.shared.EventHandler;

/**
 * Abstract class representing touch events.
 *
 * <p>See <a
 * href="http://developer.apple.com/library/safari/documentation/UserExperience/Reference/TouchEventClassReference/TouchEvent/TouchEvent.html">Safari
 * Touch Event Documentation</a>
 *
 * @param <H> handler type
 */
public abstract class TouchEvent<H extends EventHandler> extends HumanInputEvent<H> {

  /** The implementation singleton. */
  private static TouchSupportDetector impl;

  /**
   * Runtime check for whether touch scrolling is supported in this browser. Returns true if touch
   * events are supported but touch based scrolling is not natively supported.
   *
   * @return true if touch events are supported, false if not
   */
  public static boolean isSupported() {
    if (impl == null) {
      impl = new TouchSupportDetector();
    }
    return impl.isSupported;
  }

  /**
   * Get an array of {@link Touch touches} which have changed since the last touch event fired.
   * Note, that for {@link TouchEndEvent touch end events}, the touch which has just ended will not
   * be present in the array. Moreover, if the touch which just ended was the last remaining touch,
   * then a zero length array will be returned.
   *
   * @return an array of touches
   */
  public JsArray<Touch> getChangedTouches() {
    return getNativeEvent().getChangedTouches();
  }

  /**
   * Get an array of {@link Touch touches} all touch which originated at the same target as the
   * current touch event. Note, that for {@link TouchEndEvent touch end events}, the touch which has
   * just ended will not be present in the array. Moreover, if the touch which just ended was the
   * last remaining touch, then a zero length array will be returned.
   *
   * @return an array of touches
   */
  public JsArray<Touch> getTargetTouches() {
    return getNativeEvent().getTargetTouches();
  }

  /**
   * Get an array of all current {@link Touch touches}. Note, that for {@link TouchEndEvent touch
   * end events}, the touch which has just ended will not be present in the array. Moreover, if the
   * touch which just ended was the last remaining touch, then a zero length array will be returned.
   *
   * @return an array of touches
   */
  public JsArray<Touch> getTouches() {
    return getNativeEvent().getTouches();
  }

  //
  //  /**
  //   * Dectector for browser support for touch events.
  //   */
  //  private static class TouchSupportDetectorOld {
  //
  //    private final boolean isSupported = detectTouchSupport();
  //
  //    public boolean isSupported() {
  //      return isSupported;
  //    }
  //
  //    private native boolean detectTouchSupport() /*-{
  //      var elem = document.createElement('div');
  //      elem.setAttribute('ontouchstart', 'return;');
  //      return (typeof elem.ontouchstart) == "function";
  //    }-*/;
  //  }
  //
  //  /**
  //   * Detector for browsers that do not support touch events.
  //   */
  //  @SuppressWarnings("unused")
  //  private static class TouchSupportDetectorNo extends TouchSupportDetectorOld {
  //
  //    @Override
  //    public boolean isSupported() {
  //      return false;
  //    }
  //  }
  @JsType
  static class TouchSupportDetector {

    private boolean isSupported = detectTouchSupport();

    private boolean detectTouchSupport() {
      HTMLDivElement divElement = (HTMLDivElement) DomGlobal.document.createElement("div");
      divElement.setAttribute("ontouchstart", "return;");
      return "function".equals(Js.typeof(divElement.ontouchstart));
    }
  }
}

