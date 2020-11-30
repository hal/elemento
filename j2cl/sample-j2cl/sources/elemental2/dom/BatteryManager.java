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
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface BatteryManager extends EventTarget {
  @JsFunction
  public interface OnchargingchangeFn {
    void onInvoke(Event p0);
  }

  @JsFunction
  public interface OnchargingtimechangeFn {
    void onInvoke(Event p0);
  }

  @JsFunction
  public interface OndischargingtimechangeFn {
    void onInvoke(Event p0);
  }

  @JsFunction
  public interface OnlevelchangeFn {
    void onInvoke(Event p0);
  }

  @JsProperty
  double getChargingTime();

  @JsProperty
  double getDischargingTime();

  @JsProperty
  double getLevel();

  @JsProperty
  BatteryManager.OnchargingchangeFn getOnchargingchange();

  @JsProperty
  BatteryManager.OnchargingtimechangeFn getOnchargingtimechange();

  @JsProperty
  BatteryManager.OndischargingtimechangeFn getOndischargingtimechange();

  @JsProperty
  BatteryManager.OnlevelchangeFn getOnlevelchange();

  @JsProperty
  boolean isCharging();

  @JsProperty
  void setCharging(boolean charging);

  @JsProperty
  void setChargingTime(double chargingTime);

  @JsProperty
  void setDischargingTime(double dischargingTime);

  @JsProperty
  void setLevel(double level);

  @JsProperty
  void setOnchargingchange(BatteryManager.OnchargingchangeFn onchargingchange);

  @JsProperty
  void setOnchargingtimechange(BatteryManager.OnchargingtimechangeFn onchargingtimechange);

  @JsProperty
  void setOndischargingtimechange(BatteryManager.OndischargingtimechangeFn ondischargingtimechange);

  @JsProperty
  void setOnlevelchange(BatteryManager.OnlevelchangeFn onlevelchange);
}

