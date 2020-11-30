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

import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface NavigatorUserMediaError {
  @Deprecated
  @JsProperty
  double getCode();

  @JsProperty
  String getConstraintName();

  @JsProperty
  String getMessage();

  @JsProperty
  String getName();

  @Deprecated
  @JsProperty(name = "PERMISSION_DENIED")
  double getPERMISSION_DENIED();

  @Deprecated
  @JsProperty
  void setCode(double code);

  @JsProperty
  void setConstraintName(String constraintName);

  @JsProperty
  void setMessage(String message);

  @JsProperty
  void setName(String name);
}

