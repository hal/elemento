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
public interface WritableStreamDefaultWriter<VALUE> {
  Promise<Void> abort(Object reason);

  Promise<Void> close();

  @JsProperty
  Promise<Void> getClosed();

  @JsProperty
  int getDesiredSize();

  @JsProperty
  Promise<Double> getReady();

  void releaseLock();

  @JsProperty
  void setClosed(Promise<Void> closed);

  @JsProperty
  void setDesiredSize(int desiredSize);

  @JsProperty
  void setReady(Promise<Double> ready);

  Promise<Void> write(VALUE chunk);
}

