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

import elemental2.promise.Promise;
import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class Notification implements EventTarget {
  @JsFunction
  public interface OnclickFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OncloseFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OndisplayFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnerrorFn {
    Object onInvoke(Event p0);
  }

  @JsFunction
  public interface OnshowFn {
    Object onInvoke(Event p0);
  }

  public static String permission;

  public static native Promise<String> requestPermission();

  public static native Promise<String> requestPermission(NotificationPermissionCallback callback);

  public String body;
  public Object data;
  @Deprecated public String dir;
  public String icon;
  public Notification.OnclickFn onclick;
  public Notification.OncloseFn onclose;
  @Deprecated public Notification.OndisplayFn ondisplay;
  public Notification.OnerrorFn onerror;
  public Notification.OnshowFn onshow;
  @Deprecated public String replaceId;
  public String tag;
  public String title;

  public Notification(String title, NotificationOptions options) {}

  public Notification(String title) {}

  public native void addEventListener(
      String type, EventListener listener, EventTarget.AddEventListenerOptionsUnionType options);

  public native void addEventListener(String type, EventListener listener);

  public native void cancel();

  public native void close();

  public native boolean dispatchEvent(Event evt);

  public native void removeEventListener(
      String type, EventListener listener, EventTarget.RemoveEventListenerOptionsUnionType options);

  public native void removeEventListener(String type, EventListener listener);

  public native void show();
}

