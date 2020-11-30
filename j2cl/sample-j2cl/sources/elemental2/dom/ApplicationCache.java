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

import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class ApplicationCache implements EventTarget {
  @JsFunction
  public interface OncachedFn {
    void onInvoke(Event p0);
  }

  @JsFunction
  public interface OncheckingFn {
    void onInvoke(Event p0);
  }

  @JsFunction
  public interface OndownloadingFn {
    void onInvoke(Event p0);
  }

  @JsFunction
  public interface OnerrorFn {
    void onInvoke(Event p0);
  }

  @JsFunction
  public interface OnnoupdateFn {
    void onInvoke(Event p0);
  }

  @JsFunction
  public interface OnprogressFn {
    void onInvoke(Event p0);
  }

  @JsFunction
  public interface OnupdatereadyFn {
    void onInvoke(Event p0);
  }

  @JsOverlay public static final int CHECKING = ApplicationCache__Constants.CHECKING;
  @JsOverlay public static final int DOWNLOADING = ApplicationCache__Constants.DOWNLOADING;
  @JsOverlay public static final int IDLE = ApplicationCache__Constants.IDLE;
  @JsOverlay public static final int OBSOLETE = ApplicationCache__Constants.OBSOLETE;
  @JsOverlay public static final int UNCACHED = ApplicationCache__Constants.UNCACHED;
  @JsOverlay public static final int UPDATEREADY = ApplicationCache__Constants.UPDATEREADY;
  public ApplicationCache.OncachedFn oncached;
  public ApplicationCache.OncheckingFn onchecking;
  public ApplicationCache.OndownloadingFn ondownloading;
  public ApplicationCache.OnerrorFn onerror;
  public ApplicationCache.OnnoupdateFn onnoupdate;
  public ApplicationCache.OnprogressFn onprogress;
  public ApplicationCache.OnupdatereadyFn onupdateready;
  public int status;

  public native void addEventListener(
      String type, EventListener listener, EventTarget.AddEventListenerOptionsUnionType options);

  public native void addEventListener(String type, EventListener listener);

  public native boolean dispatchEvent(Event evt);

  public native void removeEventListener(
      String type, EventListener listener, EventTarget.RemoveEventListenerOptionsUnionType options);

  public native void removeEventListener(String type, EventListener listener);

  public native void swapCache();

  public native void update();
}

