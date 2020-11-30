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
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class MouseEvent extends UIEvent {
  public boolean altKey;
  public int button;
  public int buttons;
  public double clientX;
  public double clientY;
  public boolean ctrlKey;
  public DataTransfer dataTransfer;
  public boolean metaKey;
  public double offsetX;
  public double offsetY;
  public double pageX;
  public double pageY;
  public EventTarget relatedTarget;
  public double screenX;
  public double screenY;
  public boolean shiftKey;
  public InputDeviceCapabilities sourceCapabilities;
  public double x;
  public double y;

  public MouseEvent(String type, MouseEventInit eventInitDict) {
    // This super call is here only for the code to compile; it is never executed.
    super((String) null, (UIEventInit) null);
  }

  public MouseEvent(String type) {
    // This super call is here only for the code to compile; it is never executed.
    super((String) null, (UIEventInit) null);
  }

  public native boolean getModifierState(String keyIdentifierArg);
}

