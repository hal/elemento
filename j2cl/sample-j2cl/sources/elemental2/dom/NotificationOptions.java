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
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface NotificationOptions {
  @JsOverlay
  static NotificationOptions create() {
    return Js.uncheckedCast(JsPropertyMap.of());
  }

  @JsProperty
  JsArray<NotificationAction> getActions();

  @JsProperty
  String getBadge();

  @JsProperty
  String getBody();

  @JsProperty
  Object getData();

  @JsProperty
  String getDir();

  @JsProperty
  String getIcon();

  @JsProperty
  String getImage();

  @JsProperty
  String getLang();

  @JsProperty
  String getTag();

  @JsProperty
  double getTimestamp();

  @JsProperty
  JsArray<Double> getVibrate();

  @JsProperty
  boolean isRenotify();

  @JsProperty
  boolean isRequireInteraction();

  @JsProperty
  boolean isSilent();

  @JsProperty
  void setActions(JsArray<NotificationAction> actions);

  @JsOverlay
  default void setActions(NotificationAction[] actions) {
    setActions(Js.<JsArray<NotificationAction>>uncheckedCast(actions));
  }

  @JsProperty
  void setBadge(String badge);

  @JsProperty
  void setBody(String body);

  @JsProperty
  void setData(Object data);

  @JsProperty
  void setDir(String dir);

  @JsProperty
  void setIcon(String icon);

  @JsProperty
  void setImage(String image);

  @JsProperty
  void setLang(String lang);

  @JsProperty
  void setRenotify(boolean renotify);

  @JsProperty
  void setRequireInteraction(boolean requireInteraction);

  @JsProperty
  void setSilent(boolean silent);

  @JsProperty
  void setTag(String tag);

  @JsProperty
  void setTimestamp(double timestamp);

  @JsProperty
  void setVibrate(JsArray<Double> vibrate);

  @JsOverlay
  default void setVibrate(double[] vibrate) {
    setVibrate(Js.<JsArray<Double>>uncheckedCast(vibrate));
  }
}

