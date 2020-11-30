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
package elemental2.webstorage;

import elemental2.dom.Event;
import elemental2.dom.EventInit;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class StorageEvent extends Event {
  public String key;
  public String newValue;
  public String oldValue;
  public Storage storageArea;
  public String url;

  public StorageEvent(String type, StorageEventInit eventInitDict) {
    // This super call is here only for the code to compile; it is never executed.
    super((String) null, (EventInit) null);
  }

  public StorageEvent(String type) {
    // This super call is here only for the code to compile; it is never executed.
    super((String) null, (EventInit) null);
  }

  public native void initStorageEvent(
      String typeArg,
      boolean canBubbleArg,
      boolean cancelableArg,
      String keyArg,
      String oldValueArg,
      String newValueArg,
      String urlArg,
      Storage storageAreaArg);
}

