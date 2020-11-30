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
import elemental2.core.Transferable;
import elemental2.promise.Promise;
import jsinterop.annotations.JsFunction;
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, name = "goog.global", namespace = JsPackage.GLOBAL)
public class DomGlobal {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface CreateImageBitmapImageUnionType {
    @JsOverlay
    static DomGlobal.CreateImageBitmapImageUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default Blob asBlob() {
      return Js.cast(this);
    }

    @JsOverlay
    default CanvasRenderingContext2D asCanvasRenderingContext2D() {
      return Js.cast(this);
    }

    @JsOverlay
    default HTMLCanvasElement asHTMLCanvasElement() {
      return Js.cast(this);
    }

    @JsOverlay
    default HTMLImageElement asHTMLImageElement() {
      return Js.cast(this);
    }

    @JsOverlay
    default HTMLVideoElement asHTMLVideoElement() {
      return Js.cast(this);
    }

    @JsOverlay
    default ImageBitmap asImageBitmap() {
      return Js.cast(this);
    }

    @JsOverlay
    default ImageData asImageData() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isBlob() {
      return (Object) this instanceof Blob;
    }

    @JsOverlay
    default boolean isCanvasRenderingContext2D() {
      return (Object) this instanceof CanvasRenderingContext2D;
    }

    @JsOverlay
    default boolean isHTMLCanvasElement() {
      return (Object) this instanceof HTMLCanvasElement;
    }

    @JsOverlay
    default boolean isHTMLImageElement() {
      return (Object) this instanceof HTMLImageElement;
    }

    @JsOverlay
    default boolean isHTMLVideoElement() {
      return (Object) this instanceof HTMLVideoElement;
    }

    @JsOverlay
    default boolean isImageData() {
      return (Object) this instanceof ImageData;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface CreateImageBitmapSxOrOptionsUnionType {
    @JsOverlay
    static DomGlobal.CreateImageBitmapSxOrOptionsUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default double asDouble() {
      return Js.asDouble(this);
    }

    @JsOverlay
    default ImageBitmapOptions asImageBitmapOptions() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isDouble() {
      return (Object) this instanceof Double;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface FetchInputUnionType {
    @JsOverlay
    static DomGlobal.FetchInputUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default Request asRequest() {
      return Js.cast(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isRequest() {
      return (Object) this instanceof Request;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ImportScriptsVar_argsUnionType {
    @JsOverlay
    static DomGlobal.ImportScriptsVar_argsUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default TrustedScriptURL asTrustedScriptURL() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }

    @JsOverlay
    default boolean isTrustedScriptURL() {
      return (Object) this instanceof TrustedScriptURL;
    }
  }

  @JsFunction
  public interface OpenDatabaseCallbackFn {
    Object onInvoke(Database p0);
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface OpenDatabaseCallbackUnionType {
    @JsOverlay
    static DomGlobal.OpenDatabaseCallbackUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default DatabaseCallback asDatabaseCallback() {
      return Js.cast(this);
    }

    @JsOverlay
    default DomGlobal.OpenDatabaseCallbackFn asOpenDatabaseCallbackFn() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isOpenDatabaseCallbackFn() {
      return (Object) this instanceof DomGlobal.OpenDatabaseCallbackFn;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface PostMessageTargetOriginOrPortsOrTransferUnionType {
    @JsOverlay
    static DomGlobal.PostMessageTargetOriginOrPortsOrTransferUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default JsArray<Object> asJsArray() {
      return Js.cast(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isJsArray() {
      return (Object) this instanceof JsArray;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface PostMessageTargetOriginOrTransferUnionType {
    @JsOverlay
    static DomGlobal.PostMessageTargetOriginOrTransferUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default JsArray<Transferable> asJsArray() {
      return Js.cast(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isJsArray() {
      return (Object) this instanceof JsArray;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  @JsFunction
  public interface RequestIdleCallbackCallbackFn {
    void onInvoke(IdleDeadline deadline);
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface RequestIdleCallbackOptionsUnionType {
    @JsOverlay
    static DomGlobal.RequestIdleCallbackOptionsUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default IdleCallbackOptions asIdleCallbackOptions() {
      return Js.cast(this);
    }

    @JsOverlay
    default int asInt() {
      return Js.asInt(this);
    }

    @JsOverlay
    default boolean isInt() {
      return (Object) this instanceof Double;
    }
  }

  @JsFunction
  public interface SetImmediateCallbackFn {
    Object onInvoke();
  }

  @JsFunction
  public interface SetIntervalCallbackFn {
    void onInvoke(Object... p0);
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface SetIntervalCallbackUnionType {
    @JsOverlay
    static DomGlobal.SetIntervalCallbackUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default DomGlobal.SetIntervalCallbackFn asSetIntervalCallbackFn() {
      return Js.cast(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default TrustedScript asTrustedScript() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isSetIntervalCallbackFn() {
      return (Object) this instanceof DomGlobal.SetIntervalCallbackFn;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }

    @JsOverlay
    default boolean isTrustedScript() {
      return (Object) this instanceof TrustedScript;
    }
  }

  @JsFunction
  public interface SetTimeoutCallbackFn {
    void onInvoke(Object... p0);
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface SetTimeoutCallbackUnionType {
    @JsOverlay
    static DomGlobal.SetTimeoutCallbackUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default DomGlobal.SetTimeoutCallbackFn asSetTimeoutCallbackFn() {
      return Js.cast(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default TrustedScript asTrustedScript() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isSetTimeoutCallbackFn() {
      return (Object) this instanceof DomGlobal.SetTimeoutCallbackFn;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }

    @JsOverlay
    default boolean isTrustedScript() {
      return (Object) this instanceof TrustedScript;
    }
  }

  public static CSSInterface CSS;
  public static ApplicationCache applicationCache;
  public static Console console;
  public static CustomElementRegistry customElements;
  @JsOverlay public static final HTMLDocument document = DomGlobal__Constants.document;
  public static History history;
  @JsOverlay public static final boolean isSecureContext = DomGlobal__Constants.isSecureContext;
  @JsOverlay public static final Location location = DomGlobal__Constants.location;
  @JsOverlay public static final Navigator navigator = DomGlobal__Constants.navigator;
  public static Performance performance;
  @JsOverlay public static final Screen screen = DomGlobal__Constants.screen;
  @JsOverlay public static final Window self = DomGlobal__Constants.self;
  @JsOverlay public static final Window top = DomGlobal__Constants.top;
  public static TrustedTypePolicyFactory trustedTypes;

  @JsOverlay
  public static final VisualViewport visualViewport = DomGlobal__Constants.visualViewport;

  public static Window window;

  public static native void alert(Object message);

  public static native String atob(String encodedData);

  public static native String btoa(String stringToEncode);

  public static native void cancelAnimationFrame(int handle);

  public static native void cancelIdleCallback(int handle);

  public static native void cancelRequestAnimationFrame(double handle);

  public static native void clearImmediate();

  public static native void clearImmediate(double immediateID);

  public static native void clearInterval(double intervalID);

  public static native void clearTimeout(double timeoutID);

  public static native boolean confirm(Object message);

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      Blob image,
      DomGlobal.CreateImageBitmapSxOrOptionsUnionType sxOrOptions,
      double sy,
      double sw,
      double sh,
      ImageBitmapOptions options) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        sxOrOptions,
        sy,
        sw,
        sh,
        options);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      Blob image,
      DomGlobal.CreateImageBitmapSxOrOptionsUnionType sxOrOptions,
      double sy,
      double sw,
      double sh) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        sxOrOptions,
        sy,
        sw,
        sh);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      Blob image,
      DomGlobal.CreateImageBitmapSxOrOptionsUnionType sxOrOptions,
      double sy,
      double sw) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image), sxOrOptions, sy, sw);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      Blob image, DomGlobal.CreateImageBitmapSxOrOptionsUnionType sxOrOptions, double sy) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image), sxOrOptions, sy);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      Blob image, DomGlobal.CreateImageBitmapSxOrOptionsUnionType sxOrOptions) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image), sxOrOptions);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      Blob image,
      ImageBitmapOptions sxOrOptions,
      double sy,
      double sw,
      double sh,
      ImageBitmapOptions options) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy,
        sw,
        sh,
        options);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      Blob image, ImageBitmapOptions sxOrOptions, double sy, double sw, double sh) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy,
        sw,
        sh);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      Blob image, ImageBitmapOptions sxOrOptions, double sy, double sw) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy,
        sw);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      Blob image, ImageBitmapOptions sxOrOptions, double sy) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      Blob image, ImageBitmapOptions sxOrOptions) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions));
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      Blob image, double sxOrOptions, double sy, double sw, double sh, ImageBitmapOptions options) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy,
        sw,
        sh,
        options);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      Blob image, double sxOrOptions, double sy, double sw, double sh) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy,
        sw,
        sh);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      Blob image, double sxOrOptions, double sy, double sw) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy,
        sw);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      Blob image, double sxOrOptions, double sy) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(Blob image, double sxOrOptions) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions));
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(Blob image) {
    return createImageBitmap(Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image));
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      CanvasRenderingContext2D image,
      DomGlobal.CreateImageBitmapSxOrOptionsUnionType sxOrOptions,
      double sy,
      double sw,
      double sh,
      ImageBitmapOptions options) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        sxOrOptions,
        sy,
        sw,
        sh,
        options);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      CanvasRenderingContext2D image,
      DomGlobal.CreateImageBitmapSxOrOptionsUnionType sxOrOptions,
      double sy,
      double sw,
      double sh) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        sxOrOptions,
        sy,
        sw,
        sh);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      CanvasRenderingContext2D image,
      DomGlobal.CreateImageBitmapSxOrOptionsUnionType sxOrOptions,
      double sy,
      double sw) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image), sxOrOptions, sy, sw);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      CanvasRenderingContext2D image,
      DomGlobal.CreateImageBitmapSxOrOptionsUnionType sxOrOptions,
      double sy) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image), sxOrOptions, sy);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      CanvasRenderingContext2D image, DomGlobal.CreateImageBitmapSxOrOptionsUnionType sxOrOptions) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image), sxOrOptions);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      CanvasRenderingContext2D image,
      ImageBitmapOptions sxOrOptions,
      double sy,
      double sw,
      double sh,
      ImageBitmapOptions options) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy,
        sw,
        sh,
        options);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      CanvasRenderingContext2D image,
      ImageBitmapOptions sxOrOptions,
      double sy,
      double sw,
      double sh) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy,
        sw,
        sh);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      CanvasRenderingContext2D image, ImageBitmapOptions sxOrOptions, double sy, double sw) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy,
        sw);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      CanvasRenderingContext2D image, ImageBitmapOptions sxOrOptions, double sy) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      CanvasRenderingContext2D image, ImageBitmapOptions sxOrOptions) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions));
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      CanvasRenderingContext2D image,
      double sxOrOptions,
      double sy,
      double sw,
      double sh,
      ImageBitmapOptions options) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy,
        sw,
        sh,
        options);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      CanvasRenderingContext2D image, double sxOrOptions, double sy, double sw, double sh) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy,
        sw,
        sh);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      CanvasRenderingContext2D image, double sxOrOptions, double sy, double sw) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy,
        sw);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      CanvasRenderingContext2D image, double sxOrOptions, double sy) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      CanvasRenderingContext2D image, double sxOrOptions) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions));
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(CanvasRenderingContext2D image) {
    return createImageBitmap(Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image));
  }

  public static native Promise<ImageBitmap> createImageBitmap(
      DomGlobal.CreateImageBitmapImageUnionType image,
      DomGlobal.CreateImageBitmapSxOrOptionsUnionType sxOrOptions,
      double sy,
      double sw,
      double sh,
      ImageBitmapOptions options);

  public static native Promise<ImageBitmap> createImageBitmap(
      DomGlobal.CreateImageBitmapImageUnionType image,
      DomGlobal.CreateImageBitmapSxOrOptionsUnionType sxOrOptions,
      double sy,
      double sw,
      double sh);

  public static native Promise<ImageBitmap> createImageBitmap(
      DomGlobal.CreateImageBitmapImageUnionType image,
      DomGlobal.CreateImageBitmapSxOrOptionsUnionType sxOrOptions,
      double sy,
      double sw);

  public static native Promise<ImageBitmap> createImageBitmap(
      DomGlobal.CreateImageBitmapImageUnionType image,
      DomGlobal.CreateImageBitmapSxOrOptionsUnionType sxOrOptions,
      double sy);

  public static native Promise<ImageBitmap> createImageBitmap(
      DomGlobal.CreateImageBitmapImageUnionType image,
      DomGlobal.CreateImageBitmapSxOrOptionsUnionType sxOrOptions);

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      DomGlobal.CreateImageBitmapImageUnionType image,
      ImageBitmapOptions sxOrOptions,
      double sy,
      double sw,
      double sh,
      ImageBitmapOptions options) {
    return createImageBitmap(
        image,
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy,
        sw,
        sh,
        options);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      DomGlobal.CreateImageBitmapImageUnionType image,
      ImageBitmapOptions sxOrOptions,
      double sy,
      double sw,
      double sh) {
    return createImageBitmap(
        image,
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy,
        sw,
        sh);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      DomGlobal.CreateImageBitmapImageUnionType image,
      ImageBitmapOptions sxOrOptions,
      double sy,
      double sw) {
    return createImageBitmap(
        image,
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy,
        sw);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      DomGlobal.CreateImageBitmapImageUnionType image, ImageBitmapOptions sxOrOptions, double sy) {
    return createImageBitmap(
        image, Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions), sy);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      DomGlobal.CreateImageBitmapImageUnionType image, ImageBitmapOptions sxOrOptions) {
    return createImageBitmap(
        image, Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions));
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      DomGlobal.CreateImageBitmapImageUnionType image,
      double sxOrOptions,
      double sy,
      double sw,
      double sh,
      ImageBitmapOptions options) {
    return createImageBitmap(
        image,
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy,
        sw,
        sh,
        options);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      DomGlobal.CreateImageBitmapImageUnionType image,
      double sxOrOptions,
      double sy,
      double sw,
      double sh) {
    return createImageBitmap(
        image,
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy,
        sw,
        sh);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      DomGlobal.CreateImageBitmapImageUnionType image, double sxOrOptions, double sy, double sw) {
    return createImageBitmap(
        image,
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy,
        sw);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      DomGlobal.CreateImageBitmapImageUnionType image, double sxOrOptions, double sy) {
    return createImageBitmap(
        image, Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions), sy);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      DomGlobal.CreateImageBitmapImageUnionType image, double sxOrOptions) {
    return createImageBitmap(
        image, Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions));
  }

  public static native Promise<ImageBitmap> createImageBitmap(
      DomGlobal.CreateImageBitmapImageUnionType image);

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      HTMLCanvasElement image,
      DomGlobal.CreateImageBitmapSxOrOptionsUnionType sxOrOptions,
      double sy,
      double sw,
      double sh,
      ImageBitmapOptions options) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        sxOrOptions,
        sy,
        sw,
        sh,
        options);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      HTMLCanvasElement image,
      DomGlobal.CreateImageBitmapSxOrOptionsUnionType sxOrOptions,
      double sy,
      double sw,
      double sh) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        sxOrOptions,
        sy,
        sw,
        sh);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      HTMLCanvasElement image,
      DomGlobal.CreateImageBitmapSxOrOptionsUnionType sxOrOptions,
      double sy,
      double sw) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image), sxOrOptions, sy, sw);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      HTMLCanvasElement image,
      DomGlobal.CreateImageBitmapSxOrOptionsUnionType sxOrOptions,
      double sy) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image), sxOrOptions, sy);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      HTMLCanvasElement image, DomGlobal.CreateImageBitmapSxOrOptionsUnionType sxOrOptions) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image), sxOrOptions);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      HTMLCanvasElement image,
      ImageBitmapOptions sxOrOptions,
      double sy,
      double sw,
      double sh,
      ImageBitmapOptions options) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy,
        sw,
        sh,
        options);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      HTMLCanvasElement image, ImageBitmapOptions sxOrOptions, double sy, double sw, double sh) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy,
        sw,
        sh);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      HTMLCanvasElement image, ImageBitmapOptions sxOrOptions, double sy, double sw) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy,
        sw);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      HTMLCanvasElement image, ImageBitmapOptions sxOrOptions, double sy) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      HTMLCanvasElement image, ImageBitmapOptions sxOrOptions) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions));
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      HTMLCanvasElement image,
      double sxOrOptions,
      double sy,
      double sw,
      double sh,
      ImageBitmapOptions options) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy,
        sw,
        sh,
        options);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      HTMLCanvasElement image, double sxOrOptions, double sy, double sw, double sh) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy,
        sw,
        sh);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      HTMLCanvasElement image, double sxOrOptions, double sy, double sw) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy,
        sw);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      HTMLCanvasElement image, double sxOrOptions, double sy) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      HTMLCanvasElement image, double sxOrOptions) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions));
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(HTMLCanvasElement image) {
    return createImageBitmap(Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image));
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      HTMLImageElement image,
      DomGlobal.CreateImageBitmapSxOrOptionsUnionType sxOrOptions,
      double sy,
      double sw,
      double sh,
      ImageBitmapOptions options) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        sxOrOptions,
        sy,
        sw,
        sh,
        options);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      HTMLImageElement image,
      DomGlobal.CreateImageBitmapSxOrOptionsUnionType sxOrOptions,
      double sy,
      double sw,
      double sh) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        sxOrOptions,
        sy,
        sw,
        sh);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      HTMLImageElement image,
      DomGlobal.CreateImageBitmapSxOrOptionsUnionType sxOrOptions,
      double sy,
      double sw) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image), sxOrOptions, sy, sw);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      HTMLImageElement image,
      DomGlobal.CreateImageBitmapSxOrOptionsUnionType sxOrOptions,
      double sy) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image), sxOrOptions, sy);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      HTMLImageElement image, DomGlobal.CreateImageBitmapSxOrOptionsUnionType sxOrOptions) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image), sxOrOptions);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      HTMLImageElement image,
      ImageBitmapOptions sxOrOptions,
      double sy,
      double sw,
      double sh,
      ImageBitmapOptions options) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy,
        sw,
        sh,
        options);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      HTMLImageElement image, ImageBitmapOptions sxOrOptions, double sy, double sw, double sh) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy,
        sw,
        sh);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      HTMLImageElement image, ImageBitmapOptions sxOrOptions, double sy, double sw) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy,
        sw);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      HTMLImageElement image, ImageBitmapOptions sxOrOptions, double sy) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      HTMLImageElement image, ImageBitmapOptions sxOrOptions) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions));
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      HTMLImageElement image,
      double sxOrOptions,
      double sy,
      double sw,
      double sh,
      ImageBitmapOptions options) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy,
        sw,
        sh,
        options);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      HTMLImageElement image, double sxOrOptions, double sy, double sw, double sh) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy,
        sw,
        sh);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      HTMLImageElement image, double sxOrOptions, double sy, double sw) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy,
        sw);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      HTMLImageElement image, double sxOrOptions, double sy) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      HTMLImageElement image, double sxOrOptions) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions));
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(HTMLImageElement image) {
    return createImageBitmap(Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image));
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      HTMLVideoElement image,
      DomGlobal.CreateImageBitmapSxOrOptionsUnionType sxOrOptions,
      double sy,
      double sw,
      double sh,
      ImageBitmapOptions options) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        sxOrOptions,
        sy,
        sw,
        sh,
        options);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      HTMLVideoElement image,
      DomGlobal.CreateImageBitmapSxOrOptionsUnionType sxOrOptions,
      double sy,
      double sw,
      double sh) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        sxOrOptions,
        sy,
        sw,
        sh);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      HTMLVideoElement image,
      DomGlobal.CreateImageBitmapSxOrOptionsUnionType sxOrOptions,
      double sy,
      double sw) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image), sxOrOptions, sy, sw);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      HTMLVideoElement image,
      DomGlobal.CreateImageBitmapSxOrOptionsUnionType sxOrOptions,
      double sy) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image), sxOrOptions, sy);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      HTMLVideoElement image, DomGlobal.CreateImageBitmapSxOrOptionsUnionType sxOrOptions) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image), sxOrOptions);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      HTMLVideoElement image,
      ImageBitmapOptions sxOrOptions,
      double sy,
      double sw,
      double sh,
      ImageBitmapOptions options) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy,
        sw,
        sh,
        options);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      HTMLVideoElement image, ImageBitmapOptions sxOrOptions, double sy, double sw, double sh) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy,
        sw,
        sh);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      HTMLVideoElement image, ImageBitmapOptions sxOrOptions, double sy, double sw) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy,
        sw);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      HTMLVideoElement image, ImageBitmapOptions sxOrOptions, double sy) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      HTMLVideoElement image, ImageBitmapOptions sxOrOptions) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions));
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      HTMLVideoElement image,
      double sxOrOptions,
      double sy,
      double sw,
      double sh,
      ImageBitmapOptions options) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy,
        sw,
        sh,
        options);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      HTMLVideoElement image, double sxOrOptions, double sy, double sw, double sh) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy,
        sw,
        sh);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      HTMLVideoElement image, double sxOrOptions, double sy, double sw) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy,
        sw);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      HTMLVideoElement image, double sxOrOptions, double sy) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      HTMLVideoElement image, double sxOrOptions) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions));
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(HTMLVideoElement image) {
    return createImageBitmap(Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image));
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      ImageBitmap image,
      DomGlobal.CreateImageBitmapSxOrOptionsUnionType sxOrOptions,
      double sy,
      double sw,
      double sh,
      ImageBitmapOptions options) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        sxOrOptions,
        sy,
        sw,
        sh,
        options);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      ImageBitmap image,
      DomGlobal.CreateImageBitmapSxOrOptionsUnionType sxOrOptions,
      double sy,
      double sw,
      double sh) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        sxOrOptions,
        sy,
        sw,
        sh);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      ImageBitmap image,
      DomGlobal.CreateImageBitmapSxOrOptionsUnionType sxOrOptions,
      double sy,
      double sw) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image), sxOrOptions, sy, sw);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      ImageBitmap image, DomGlobal.CreateImageBitmapSxOrOptionsUnionType sxOrOptions, double sy) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image), sxOrOptions, sy);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      ImageBitmap image, DomGlobal.CreateImageBitmapSxOrOptionsUnionType sxOrOptions) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image), sxOrOptions);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      ImageBitmap image,
      ImageBitmapOptions sxOrOptions,
      double sy,
      double sw,
      double sh,
      ImageBitmapOptions options) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy,
        sw,
        sh,
        options);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      ImageBitmap image, ImageBitmapOptions sxOrOptions, double sy, double sw, double sh) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy,
        sw,
        sh);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      ImageBitmap image, ImageBitmapOptions sxOrOptions, double sy, double sw) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy,
        sw);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      ImageBitmap image, ImageBitmapOptions sxOrOptions, double sy) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      ImageBitmap image, ImageBitmapOptions sxOrOptions) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions));
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      ImageBitmap image,
      double sxOrOptions,
      double sy,
      double sw,
      double sh,
      ImageBitmapOptions options) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy,
        sw,
        sh,
        options);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      ImageBitmap image, double sxOrOptions, double sy, double sw, double sh) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy,
        sw,
        sh);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      ImageBitmap image, double sxOrOptions, double sy, double sw) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy,
        sw);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      ImageBitmap image, double sxOrOptions, double sy) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      ImageBitmap image, double sxOrOptions) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions));
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(ImageBitmap image) {
    return createImageBitmap(Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image));
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      ImageData image,
      DomGlobal.CreateImageBitmapSxOrOptionsUnionType sxOrOptions,
      double sy,
      double sw,
      double sh,
      ImageBitmapOptions options) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        sxOrOptions,
        sy,
        sw,
        sh,
        options);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      ImageData image,
      DomGlobal.CreateImageBitmapSxOrOptionsUnionType sxOrOptions,
      double sy,
      double sw,
      double sh) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        sxOrOptions,
        sy,
        sw,
        sh);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      ImageData image,
      DomGlobal.CreateImageBitmapSxOrOptionsUnionType sxOrOptions,
      double sy,
      double sw) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image), sxOrOptions, sy, sw);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      ImageData image, DomGlobal.CreateImageBitmapSxOrOptionsUnionType sxOrOptions, double sy) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image), sxOrOptions, sy);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      ImageData image, DomGlobal.CreateImageBitmapSxOrOptionsUnionType sxOrOptions) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image), sxOrOptions);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      ImageData image,
      ImageBitmapOptions sxOrOptions,
      double sy,
      double sw,
      double sh,
      ImageBitmapOptions options) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy,
        sw,
        sh,
        options);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      ImageData image, ImageBitmapOptions sxOrOptions, double sy, double sw, double sh) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy,
        sw,
        sh);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      ImageData image, ImageBitmapOptions sxOrOptions, double sy, double sw) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy,
        sw);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      ImageData image, ImageBitmapOptions sxOrOptions, double sy) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      ImageData image, ImageBitmapOptions sxOrOptions) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions));
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      ImageData image,
      double sxOrOptions,
      double sy,
      double sw,
      double sh,
      ImageBitmapOptions options) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy,
        sw,
        sh,
        options);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      ImageData image, double sxOrOptions, double sy, double sw, double sh) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy,
        sw,
        sh);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      ImageData image, double sxOrOptions, double sy, double sw) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy,
        sw);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(
      ImageData image, double sxOrOptions, double sy) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions),
        sy);
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(ImageData image, double sxOrOptions) {
    return createImageBitmap(
        Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image),
        Js.<DomGlobal.CreateImageBitmapSxOrOptionsUnionType>uncheckedCast(sxOrOptions));
  }

  @JsOverlay
  public static final Promise<ImageBitmap> createImageBitmap(ImageData image) {
    return createImageBitmap(Js.<DomGlobal.CreateImageBitmapImageUnionType>uncheckedCast(image));
  }

  public static native void dump(Object x);

  public static native Promise<Response> fetch(
      DomGlobal.FetchInputUnionType input, RequestInit init);

  public static native Promise<Response> fetch(DomGlobal.FetchInputUnionType input);

  @JsOverlay
  public static final Promise<Response> fetch(Request input, RequestInit init) {
    return fetch(Js.<DomGlobal.FetchInputUnionType>uncheckedCast(input), init);
  }

  @JsOverlay
  public static final Promise<Response> fetch(Request input) {
    return fetch(Js.<DomGlobal.FetchInputUnionType>uncheckedCast(input));
  }

  @JsOverlay
  public static final Promise<Response> fetch(String input, RequestInit init) {
    return fetch(Js.<DomGlobal.FetchInputUnionType>uncheckedCast(input), init);
  }

  @JsOverlay
  public static final Promise<Response> fetch(String input) {
    return fetch(Js.<DomGlobal.FetchInputUnionType>uncheckedCast(input));
  }

  public static native boolean hasOwnProperty(Object propertyName);

  public static native void importScripts(DomGlobal.ImportScriptsVar_argsUnionType... var_args);

  @JsOverlay
  public static final void importScripts(String... var_args) {
    importScripts(Js.<DomGlobal.ImportScriptsVar_argsUnionType[]>uncheckedCast(var_args));
  }

  @JsOverlay
  public static final void importScripts(TrustedScriptURL... var_args) {
    importScripts(Js.<DomGlobal.ImportScriptsVar_argsUnionType[]>uncheckedCast(var_args));
  }

  @JsOverlay
  public static final Database openDatabase(
      String name, String version, String description, int size, DatabaseCallback callback) {
    return openDatabase(
        name,
        version,
        description,
        size,
        Js.<DomGlobal.OpenDatabaseCallbackUnionType>uncheckedCast(callback));
  }

  @JsOverlay
  public static final Database openDatabase(
      String name,
      String version,
      String description,
      int size,
      DomGlobal.OpenDatabaseCallbackFn callback) {
    return openDatabase(
        name,
        version,
        description,
        size,
        Js.<DomGlobal.OpenDatabaseCallbackUnionType>uncheckedCast(callback));
  }

  public static native Database openDatabase(
      String name,
      String version,
      String description,
      int size,
      DomGlobal.OpenDatabaseCallbackUnionType callback);

  public static native Database openDatabase(
      String name, String version, String description, int size);

  @JsOverlay
  public static final void postMessage(
      Object message,
      JsArray<Transferable> targetOriginOrTransfer,
      JsArray<Object> targetOriginOrPortsOrTransfer) {
    postMessage(
        message,
        Js.<DomGlobal.PostMessageTargetOriginOrTransferUnionType>uncheckedCast(
            targetOriginOrTransfer),
        Js.<DomGlobal.PostMessageTargetOriginOrPortsOrTransferUnionType>uncheckedCast(
            targetOriginOrPortsOrTransfer));
  }

  @JsOverlay
  public static final void postMessage(
      Object message,
      JsArray<Transferable> targetOriginOrTransfer,
      DomGlobal.PostMessageTargetOriginOrPortsOrTransferUnionType targetOriginOrPortsOrTransfer) {
    postMessage(
        message,
        Js.<DomGlobal.PostMessageTargetOriginOrTransferUnionType>uncheckedCast(
            targetOriginOrTransfer),
        targetOriginOrPortsOrTransfer);
  }

  @JsOverlay
  public static final void postMessage(
      Object message,
      JsArray<Transferable> targetOriginOrTransfer,
      String targetOriginOrPortsOrTransfer) {
    postMessage(
        message,
        Js.<DomGlobal.PostMessageTargetOriginOrTransferUnionType>uncheckedCast(
            targetOriginOrTransfer),
        Js.<DomGlobal.PostMessageTargetOriginOrPortsOrTransferUnionType>uncheckedCast(
            targetOriginOrPortsOrTransfer));
  }

  @JsOverlay
  public static final void postMessage(
      Object message, JsArray<Transferable> targetOriginOrTransfer) {
    postMessage(
        message,
        Js.<DomGlobal.PostMessageTargetOriginOrTransferUnionType>uncheckedCast(
            targetOriginOrTransfer));
  }

  @JsOverlay
  public static final void postMessage(
      Object message,
      DomGlobal.PostMessageTargetOriginOrTransferUnionType targetOriginOrTransfer,
      JsArray<Object> targetOriginOrPortsOrTransfer) {
    postMessage(
        message,
        targetOriginOrTransfer,
        Js.<DomGlobal.PostMessageTargetOriginOrPortsOrTransferUnionType>uncheckedCast(
            targetOriginOrPortsOrTransfer));
  }

  @JsOverlay
  public static final void postMessage(
      Object message,
      DomGlobal.PostMessageTargetOriginOrTransferUnionType targetOriginOrTransfer,
      Object[] targetOriginOrPortsOrTransfer) {
    postMessage(
        message,
        targetOriginOrTransfer,
        Js.<JsArray<Object>>uncheckedCast(targetOriginOrPortsOrTransfer));
  }

  public static native void postMessage(
      Object message,
      DomGlobal.PostMessageTargetOriginOrTransferUnionType targetOriginOrTransfer,
      DomGlobal.PostMessageTargetOriginOrPortsOrTransferUnionType targetOriginOrPortsOrTransfer);

  @JsOverlay
  public static final void postMessage(
      Object message,
      DomGlobal.PostMessageTargetOriginOrTransferUnionType targetOriginOrTransfer,
      String targetOriginOrPortsOrTransfer) {
    postMessage(
        message,
        targetOriginOrTransfer,
        Js.<DomGlobal.PostMessageTargetOriginOrPortsOrTransferUnionType>uncheckedCast(
            targetOriginOrPortsOrTransfer));
  }

  public static native void postMessage(
      Object message, DomGlobal.PostMessageTargetOriginOrTransferUnionType targetOriginOrTransfer);

  @JsOverlay
  public static final void postMessage(
      Object message,
      String targetOriginOrTransfer,
      JsArray<Object> targetOriginOrPortsOrTransfer) {
    postMessage(
        message,
        Js.<DomGlobal.PostMessageTargetOriginOrTransferUnionType>uncheckedCast(
            targetOriginOrTransfer),
        Js.<DomGlobal.PostMessageTargetOriginOrPortsOrTransferUnionType>uncheckedCast(
            targetOriginOrPortsOrTransfer));
  }

  @JsOverlay
  public static final void postMessage(
      Object message, String targetOriginOrTransfer, Object[] targetOriginOrPortsOrTransfer) {
    postMessage(
        message,
        targetOriginOrTransfer,
        Js.<JsArray<Object>>uncheckedCast(targetOriginOrPortsOrTransfer));
  }

  @JsOverlay
  public static final void postMessage(
      Object message,
      String targetOriginOrTransfer,
      DomGlobal.PostMessageTargetOriginOrPortsOrTransferUnionType targetOriginOrPortsOrTransfer) {
    postMessage(
        message,
        Js.<DomGlobal.PostMessageTargetOriginOrTransferUnionType>uncheckedCast(
            targetOriginOrTransfer),
        targetOriginOrPortsOrTransfer);
  }

  @JsOverlay
  public static final void postMessage(
      Object message, String targetOriginOrTransfer, String targetOriginOrPortsOrTransfer) {
    postMessage(
        message,
        Js.<DomGlobal.PostMessageTargetOriginOrTransferUnionType>uncheckedCast(
            targetOriginOrTransfer),
        Js.<DomGlobal.PostMessageTargetOriginOrPortsOrTransferUnionType>uncheckedCast(
            targetOriginOrPortsOrTransfer));
  }

  @JsOverlay
  public static final void postMessage(Object message, String targetOriginOrTransfer) {
    postMessage(
        message,
        Js.<DomGlobal.PostMessageTargetOriginOrTransferUnionType>uncheckedCast(
            targetOriginOrTransfer));
  }

  @JsOverlay
  public static final void postMessage(
      Object message,
      Transferable[] targetOriginOrTransfer,
      Object[] targetOriginOrPortsOrTransfer) {
    postMessage(
        message,
        Js.<JsArray<Transferable>>uncheckedCast(targetOriginOrTransfer),
        Js.<JsArray<Object>>uncheckedCast(targetOriginOrPortsOrTransfer));
  }

  @JsOverlay
  public static final void postMessage(
      Object message,
      Transferable[] targetOriginOrTransfer,
      DomGlobal.PostMessageTargetOriginOrPortsOrTransferUnionType targetOriginOrPortsOrTransfer) {
    postMessage(
        message,
        Js.<JsArray<Transferable>>uncheckedCast(targetOriginOrTransfer),
        targetOriginOrPortsOrTransfer);
  }

  @JsOverlay
  public static final void postMessage(
      Object message, Transferable[] targetOriginOrTransfer, String targetOriginOrPortsOrTransfer) {
    postMessage(
        message,
        Js.<JsArray<Transferable>>uncheckedCast(targetOriginOrTransfer),
        targetOriginOrPortsOrTransfer);
  }

  @JsOverlay
  public static final void postMessage(Object message, Transferable[] targetOriginOrTransfer) {
    postMessage(message, Js.<JsArray<Transferable>>uncheckedCast(targetOriginOrTransfer));
  }

  public static native void postMessage(Object message);

  public static native String prompt(String message, String value);

  public static native String prompt(String message);

  public static native int requestAnimationFrame(FrameRequestCallback callback, Element element);

  public static native int requestAnimationFrame(FrameRequestCallback callback);

  @JsOverlay
  public static final int requestIdleCallback(
      DomGlobal.RequestIdleCallbackCallbackFn callback, IdleCallbackOptions options) {
    return requestIdleCallback(
        callback, Js.<DomGlobal.RequestIdleCallbackOptionsUnionType>uncheckedCast(options));
  }

  public static native int requestIdleCallback(
      DomGlobal.RequestIdleCallbackCallbackFn callback,
      DomGlobal.RequestIdleCallbackOptionsUnionType options);

  @JsOverlay
  public static final int requestIdleCallback(
      DomGlobal.RequestIdleCallbackCallbackFn callback, int options) {
    return requestIdleCallback(
        callback, Js.<DomGlobal.RequestIdleCallbackOptionsUnionType>uncheckedCast(options));
  }

  public static native int requestIdleCallback(DomGlobal.RequestIdleCallbackCallbackFn callback);

  public static native double setImmediate(
      DomGlobal.SetImmediateCallbackFn callback, Object... callbackParams);

  @JsOverlay
  public static final double setInterval(
      DomGlobal.SetIntervalCallbackFn callback, double delay, Object... callbackParams) {
    return setInterval(
        Js.<DomGlobal.SetIntervalCallbackUnionType>uncheckedCast(callback), delay, callbackParams);
  }

  @JsOverlay
  public static final double setInterval(DomGlobal.SetIntervalCallbackFn callback) {
    return setInterval(Js.<DomGlobal.SetIntervalCallbackUnionType>uncheckedCast(callback));
  }

  public static native double setInterval(
      DomGlobal.SetIntervalCallbackUnionType callback, double delay, Object... callbackParams);

  public static native double setInterval(DomGlobal.SetIntervalCallbackUnionType callback);

  @JsOverlay
  public static final double setInterval(String callback, double delay, Object... callbackParams) {
    return setInterval(
        Js.<DomGlobal.SetIntervalCallbackUnionType>uncheckedCast(callback), delay, callbackParams);
  }

  @JsOverlay
  public static final double setInterval(String callback) {
    return setInterval(Js.<DomGlobal.SetIntervalCallbackUnionType>uncheckedCast(callback));
  }

  @JsOverlay
  public static final double setInterval(
      TrustedScript callback, double delay, Object... callbackParams) {
    return setInterval(
        Js.<DomGlobal.SetIntervalCallbackUnionType>uncheckedCast(callback), delay, callbackParams);
  }

  @JsOverlay
  public static final double setInterval(TrustedScript callback) {
    return setInterval(Js.<DomGlobal.SetIntervalCallbackUnionType>uncheckedCast(callback));
  }

  @JsOverlay
  public static final double setTimeout(
      DomGlobal.SetTimeoutCallbackFn callback, double delay, Object... callbackParams) {
    return setTimeout(
        Js.<DomGlobal.SetTimeoutCallbackUnionType>uncheckedCast(callback), delay, callbackParams);
  }

  @JsOverlay
  public static final double setTimeout(DomGlobal.SetTimeoutCallbackFn callback) {
    return setTimeout(Js.<DomGlobal.SetTimeoutCallbackUnionType>uncheckedCast(callback));
  }

  public static native double setTimeout(
      DomGlobal.SetTimeoutCallbackUnionType callback, double delay, Object... callbackParams);

  public static native double setTimeout(DomGlobal.SetTimeoutCallbackUnionType callback);

  @JsOverlay
  public static final double setTimeout(String callback, double delay, Object... callbackParams) {
    return setTimeout(
        Js.<DomGlobal.SetTimeoutCallbackUnionType>uncheckedCast(callback), delay, callbackParams);
  }

  @JsOverlay
  public static final double setTimeout(String callback) {
    return setTimeout(Js.<DomGlobal.SetTimeoutCallbackUnionType>uncheckedCast(callback));
  }

  @JsOverlay
  public static final double setTimeout(
      TrustedScript callback, double delay, Object... callbackParams) {
    return setTimeout(
        Js.<DomGlobal.SetTimeoutCallbackUnionType>uncheckedCast(callback), delay, callbackParams);
  }

  @JsOverlay
  public static final double setTimeout(TrustedScript callback) {
    return setTimeout(Js.<DomGlobal.SetTimeoutCallbackUnionType>uncheckedCast(callback));
  }
}

