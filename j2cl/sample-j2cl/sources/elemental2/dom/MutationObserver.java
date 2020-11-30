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
import jsinterop.base.Js;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class MutationObserver {
  @JsFunction
  public interface MutationObserverCallbackFn {
    Object onInvoke(JsArray<MutationRecord> p0, MutationObserver p1);

    @JsOverlay
    default Object onInvoke(MutationRecord[] p0, MutationObserver p1) {
      return onInvoke(Js.<JsArray<MutationRecord>>uncheckedCast(p0), p1);
    }
  }

  public MutationObserver(MutationObserver.MutationObserverCallbackFn callback) {}

  public native Object disconnect();

  public native void observe(Node target, MutationObserverInit options);

  public native void observe(Node target);

  public native JsArray<MutationRecord> takeRecords();
}

