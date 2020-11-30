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

import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;
import jsinterop.base.JsPropertyMap;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public interface EventModifierInit extends UIEventInit {
  @JsOverlay
  static EventModifierInit create() {
    return Js.uncheckedCast(JsPropertyMap.of());
  }

  @JsProperty
  boolean isAltKey();

  @JsProperty
  boolean isCtrlKey();

  @JsProperty
  boolean isMetaKey();

  @JsProperty
  boolean isModifierAltGraph();

  @JsProperty
  boolean isModifierCapsLock();

  @JsProperty
  boolean isModifierFn();

  @JsProperty
  boolean isModifierFnLock();

  @JsProperty
  boolean isModifierHyper();

  @JsProperty
  boolean isModifierNumLock();

  @JsProperty
  boolean isModifierScrollLock();

  @JsProperty
  boolean isModifierSuper();

  @JsProperty
  boolean isModifierSymbol();

  @JsProperty
  boolean isModifierSymbolLock();

  @JsProperty
  boolean isShiftKey();

  @JsProperty
  void setAltKey(boolean altKey);

  @JsProperty
  void setCtrlKey(boolean ctrlKey);

  @JsProperty
  void setMetaKey(boolean metaKey);

  @JsProperty
  void setModifierAltGraph(boolean modifierAltGraph);

  @JsProperty
  void setModifierCapsLock(boolean modifierCapsLock);

  @JsProperty
  void setModifierFn(boolean modifierFn);

  @JsProperty
  void setModifierFnLock(boolean modifierFnLock);

  @JsProperty
  void setModifierHyper(boolean modifierHyper);

  @JsProperty
  void setModifierNumLock(boolean modifierNumLock);

  @JsProperty
  void setModifierScrollLock(boolean modifierScrollLock);

  @JsProperty
  void setModifierSuper(boolean modifierSuper);

  @JsProperty
  void setModifierSymbol(boolean modifierSymbol);

  @JsProperty
  void setModifierSymbolLock(boolean modifierSymbolLock);

  @JsProperty
  void setShiftKey(boolean shiftKey);
}

