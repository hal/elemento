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
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class Navigator implements NavigatorStorage {
  public String appCodeName;
  public String appName;
  public String appVersion;
  public boolean cookieEnabled;
  public double deviceMemory;
  public Geolocation geolocation;
  public int hardwareConcurrency;
  public String language;
  public MediaDevices mediaDevices;
  public MimeTypeArray mimeTypes;
  public boolean onLine;
  public String platform;
  public PluginArray plugins;
  public String product;
  public ServiceWorkerContainer serviceWorker;
  public StorageManager storage;
  public String userAgent;

  public native Promise<BatteryManager> getBattery();

  @JsProperty
  public native StorageManager getStorage();

  public native boolean javaEnabled();

  public native void registerContentHandler(String mimeType, String url, String title);

  public native void registerProtocolHandler(String scheme, String url, String title);

  @JsProperty
  public native void setStorage(StorageManager storage);

  public native Promise<Void> share();

  public native Promise<Void> share(ShareData data);

  public native boolean taintEnabled();

  public native void unregisterContentHandler(String mimeType, String url);

  public native void unregisterProtocolHandler(String scheme, String url);
}

