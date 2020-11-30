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
import elemental2.promise.Promise;
import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface ServiceWorkerRegistration extends EventTarget {
  @JsFunction
  public interface OnupdatefoundFn {
    Object onInvoke(Event p0);
  }

  @JsProperty
  ServiceWorker getActive();

  @JsProperty
  ServiceWorker getInstalling();

  @JsProperty
  NavigationPreloadManager getNavigationPreload();

  Promise<JsArray<Notification>> getNotifications();

  Promise<JsArray<Notification>> getNotifications(GetNotificationOptions filter);

  @JsProperty
  ServiceWorkerRegistration.OnupdatefoundFn getOnupdatefound();

  @JsProperty
  PushManager getPushManager();

  @JsProperty
  String getScope();

  @JsProperty
  SyncManager getSync();

  @JsProperty
  ServiceWorker getWaiting();

  @JsProperty
  void setActive(ServiceWorker active);

  @JsProperty
  void setInstalling(ServiceWorker installing);

  @JsProperty
  void setNavigationPreload(NavigationPreloadManager navigationPreload);

  @JsProperty
  void setOnupdatefound(ServiceWorkerRegistration.OnupdatefoundFn onupdatefound);

  @JsProperty
  void setPushManager(PushManager pushManager);

  @JsProperty
  void setScope(String scope);

  @JsProperty
  void setSync(SyncManager sync);

  @JsProperty
  void setWaiting(ServiceWorker waiting);

  Promise<Void> showNotification(String title, NotificationOptions options);

  Promise<Void> showNotification(String title);

  Promise<Boolean> unregister();

  Promise<Void> update();
}

