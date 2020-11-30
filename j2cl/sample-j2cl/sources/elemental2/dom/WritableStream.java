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
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class WritableStream<VALUE> {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ConstructorQueuingStrategyUnionType {
    @JsOverlay
    static WritableStream.ConstructorQueuingStrategyUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default ByteLengthQueuingStrategy asByteLengthQueuingStrategy() {
      return Js.cast(this);
    }

    @JsOverlay
    default CountQueuingStrategy asCountQueuingStrategy() {
      return Js.cast(this);
    }

    @JsOverlay
    default TransformStream.TransformStreamWritableStrategyType
        asTransformStreamWritableStrategyType() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isByteLengthQueuingStrategy() {
      return (Object) this instanceof ByteLengthQueuingStrategy;
    }

    @JsOverlay
    default boolean isCountQueuingStrategy() {
      return (Object) this instanceof CountQueuingStrategy;
    }
  }

  public boolean locked;

  public WritableStream() {}

  public WritableStream(
      WritableStreamSink<VALUE> underlyingSink, ByteLengthQueuingStrategy queuingStrategy) {}

  public WritableStream(
      WritableStreamSink<VALUE> underlyingSink,
      WritableStream.ConstructorQueuingStrategyUnionType queuingStrategy) {}

  public WritableStream(
      WritableStreamSink<VALUE> underlyingSink, CountQueuingStrategy queuingStrategy) {}

  public WritableStream(
      WritableStreamSink<VALUE> underlyingSink,
      TransformStream.TransformStreamWritableStrategyType queuingStrategy) {}

  public WritableStream(WritableStreamSink<VALUE> underlyingSink) {}

  public native Promise<Void> abort(Object reason);

  public native Promise<Void> close();

  public native WritableStreamDefaultWriter<VALUE> getWriter();
}

