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

import elemental2.core.JsObject;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class DOMError {
  @JsOverlay public static final int SEVERITY_ERROR = DOMError__Constants.SEVERITY_ERROR;

  @JsOverlay
  public static final int SEVERITY_FATAL_ERROR = DOMError__Constants.SEVERITY_FATAL_ERROR;

  @JsOverlay public static final int SEVERITY_WARNING = DOMError__Constants.SEVERITY_WARNING;
  public DOMLocator location;
  public String message;
  public String name;
  public JsObject relatedData;
  public JsObject relatedException;
  public double severity;
  public String type;
}

