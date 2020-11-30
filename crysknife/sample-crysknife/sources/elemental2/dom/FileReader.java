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

import elemental2.core.ArrayBuffer;
import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class FileReader implements EventTarget {
  @JsFunction
  public interface OnabortFn {
    Object onInvoke(ProgressEvent<FileReader> p0);
  }

  @JsFunction
  public interface OnerrorFn {
    Object onInvoke(ProgressEvent<FileReader> p0);
  }

  @JsFunction
  public interface OnloadFn {
    Object onInvoke(ProgressEvent<FileReader> p0);
  }

  @JsFunction
  public interface OnloadendFn {
    Object onInvoke(ProgressEvent<FileReader> p0);
  }

  @JsFunction
  public interface OnloadstartFn {
    Object onInvoke(ProgressEvent<FileReader> p0);
  }

  @JsFunction
  public interface OnprogressFn {
    Object onInvoke(ProgressEvent<FileReader> p0);
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ResultUnionType {
    @JsOverlay
    static FileReader.ResultUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default ArrayBuffer asArrayBuffer() {
      return Js.cast(this);
    }

    @JsOverlay
    default Blob asBlob() {
      return Js.cast(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isArrayBuffer() {
      return (Object) this instanceof ArrayBuffer;
    }

    @JsOverlay
    default boolean isBlob() {
      return (Object) this instanceof Blob;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  @JsOverlay public static final int DONE = FileReader__Constants.DONE;
  @JsOverlay public static final int EMPTY = FileReader__Constants.EMPTY;
  @JsOverlay public static final int LOADING = FileReader__Constants.LOADING;
  public DOMError error;
  public FileReader.OnabortFn onabort;
  public FileReader.OnerrorFn onerror;
  public FileReader.OnloadFn onload;
  public FileReader.OnloadendFn onloadend;
  public FileReader.OnloadstartFn onloadstart;
  public FileReader.OnprogressFn onprogress;
  public int readyState;
  public FileReader.ResultUnionType result;

  public native void abort();

  public native void addEventListener(
      String type, EventListener listener, EventTarget.AddEventListenerOptionsUnionType options);

  public native void addEventListener(String type, EventListener listener);

  public native boolean dispatchEvent(Event evt);

  public native void readAsArrayBuffer(Blob blob);

  public native void readAsBinaryString(Blob blob);

  public native void readAsDataURL(Blob blob);

  public native void readAsText(Blob blob, String encoding);

  public native void readAsText(Blob blob);

  public native void removeEventListener(
      String type, EventListener listener, EventTarget.RemoveEventListenerOptionsUnionType options);

  public native void removeEventListener(String type, EventListener listener);
}

