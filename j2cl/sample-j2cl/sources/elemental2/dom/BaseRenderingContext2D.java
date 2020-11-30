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
import jsinterop.annotations.JsOverlay;
import jsinterop.annotations.JsPackage;
import jsinterop.annotations.JsProperty;
import jsinterop.annotations.JsType;
import jsinterop.base.Js;

@JsType(isNative = true, namespace = JsPackage.GLOBAL)
public class BaseRenderingContext2D implements CanvasDrawingStyles, CanvasPathMethods {
  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface CanvasUnionType {
    @JsOverlay
    static BaseRenderingContext2D.CanvasUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default HTMLCanvasElement asHTMLCanvasElement() {
      return Js.cast(this);
    }

    @JsOverlay
    default OffscreenCanvas asOffscreenCanvas() {
      return Js.cast(this);
    }

    @JsOverlay
    default boolean isHTMLCanvasElement() {
      return (Object) this instanceof HTMLCanvasElement;
    }

    @JsOverlay
    default boolean isOffscreenCanvas() {
      return (Object) this instanceof OffscreenCanvas;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface ClipOptFillRuleOrPathUnionType {
    @JsOverlay
    static BaseRenderingContext2D.ClipOptFillRuleOrPathUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default Path2D asPath2D() {
      return Js.cast(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isPath2D() {
      return (Object) this instanceof Path2D;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface CreatePatternImageUnionType {
    @JsOverlay
    static BaseRenderingContext2D.CreatePatternImageUnionType of(Object o) {
      return Js.cast(o);
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
    default OffscreenCanvas asOffscreenCanvas() {
      return Js.cast(this);
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
    default boolean isOffscreenCanvas() {
      return (Object) this instanceof OffscreenCanvas;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface DrawImageImageUnionType {
    @JsOverlay
    static BaseRenderingContext2D.DrawImageImageUnionType of(Object o) {
      return Js.cast(o);
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
    default OffscreenCanvas asOffscreenCanvas() {
      return Js.cast(this);
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
    default boolean isOffscreenCanvas() {
      return (Object) this instanceof OffscreenCanvas;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface FillOptFillRuleOrPathUnionType {
    @JsOverlay
    static BaseRenderingContext2D.FillOptFillRuleOrPathUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default Path2D asPath2D() {
      return Js.cast(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isPath2D() {
      return (Object) this instanceof Path2D;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface FillStyleUnionType {
    @JsOverlay
    static BaseRenderingContext2D.FillStyleUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default CanvasGradient asCanvasGradient() {
      return Js.cast(this);
    }

    @JsOverlay
    default CanvasPattern asCanvasPattern() {
      return Js.cast(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isCanvasGradient() {
      return (Object) this instanceof CanvasGradient;
    }

    @JsOverlay
    default boolean isCanvasPattern() {
      return (Object) this instanceof CanvasPattern;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface SetFillColorAUnionType {
    @JsOverlay
    static BaseRenderingContext2D.SetFillColorAUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default double asDouble() {
      return Js.asDouble(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isDouble() {
      return (Object) this instanceof Double;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface SetStrokeColorAUnionType {
    @JsOverlay
    static BaseRenderingContext2D.SetStrokeColorAUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default double asDouble() {
      return Js.asDouble(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isDouble() {
      return (Object) this instanceof Double;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  @JsType(isNative = true, name = "?", namespace = JsPackage.GLOBAL)
  public interface StrokeStyleUnionType {
    @JsOverlay
    static BaseRenderingContext2D.StrokeStyleUnionType of(Object o) {
      return Js.cast(o);
    }

    @JsOverlay
    default CanvasGradient asCanvasGradient() {
      return Js.cast(this);
    }

    @JsOverlay
    default CanvasPattern asCanvasPattern() {
      return Js.cast(this);
    }

    @JsOverlay
    default String asString() {
      return Js.asString(this);
    }

    @JsOverlay
    default boolean isCanvasGradient() {
      return (Object) this instanceof CanvasGradient;
    }

    @JsOverlay
    default boolean isCanvasPattern() {
      return (Object) this instanceof CanvasPattern;
    }

    @JsOverlay
    default boolean isString() {
      return (Object) this instanceof String;
    }
  }

  public BaseRenderingContext2D.CanvasUnionType canvas;
  public String fillColor;
  public BaseRenderingContext2D.FillStyleUnionType fillStyle;
  public String font;
  public double globalAlpha;
  public String globalCompositeOperation;
  public boolean imageSmoothingEnabled;
  public String lineCap;
  public double lineDashOffset;
  public String lineJoin;
  public double lineWidth;
  public double miterLimit;
  public double shadowBlur;
  public String shadowColor;
  public double shadowOffsetX;
  public double shadowOffsetY;
  public String strokeColor;
  public BaseRenderingContext2D.StrokeStyleUnionType strokeStyle;
  public String textAlign;
  public String textBaseline;

  public native void arc(
      double x, double y, double radius, double startAngle, double endAngle, boolean anticlockwise);

  public native void arc(double x, double y, double radius, double startAngle, double endAngle);

  public native void arcTo(double x1, double y1, double x2, double y2, double radius);

  public native void beginPath();

  public native void bezierCurveTo(
      double cp1x, double cp1y, double cp2x, double cp2y, double x, double y);

  public native void clearRect(double x, double y, double w, double h);

  public native void clip();

  public native void clip(
      BaseRenderingContext2D.ClipOptFillRuleOrPathUnionType optFillRuleOrPath, String optFillRule);

  public native void clip(BaseRenderingContext2D.ClipOptFillRuleOrPathUnionType optFillRuleOrPath);

  @JsOverlay
  public final void clip(Path2D optFillRuleOrPath, String optFillRule) {
    clip(
        Js.<BaseRenderingContext2D.ClipOptFillRuleOrPathUnionType>uncheckedCast(optFillRuleOrPath),
        optFillRule);
  }

  @JsOverlay
  public final void clip(Path2D optFillRuleOrPath) {
    clip(
        Js.<BaseRenderingContext2D.ClipOptFillRuleOrPathUnionType>uncheckedCast(optFillRuleOrPath));
  }

  @JsOverlay
  public final void clip(String optFillRuleOrPath, String optFillRule) {
    clip(
        Js.<BaseRenderingContext2D.ClipOptFillRuleOrPathUnionType>uncheckedCast(optFillRuleOrPath),
        optFillRule);
  }

  @JsOverlay
  public final void clip(String optFillRuleOrPath) {
    clip(
        Js.<BaseRenderingContext2D.ClipOptFillRuleOrPathUnionType>uncheckedCast(optFillRuleOrPath));
  }

  public native void closePath();

  public native ImageData createImageData(int sw, int sh);

  public native CanvasGradient createLinearGradient(double x0, double y0, double x1, double y1);

  public native CanvasPattern createPattern(
      BaseRenderingContext2D.CreatePatternImageUnionType image, String repetition);

  @JsOverlay
  public final CanvasPattern createPattern(HTMLCanvasElement image, String repetition) {
    return createPattern(
        Js.<BaseRenderingContext2D.CreatePatternImageUnionType>uncheckedCast(image), repetition);
  }

  @JsOverlay
  public final CanvasPattern createPattern(HTMLImageElement image, String repetition) {
    return createPattern(
        Js.<BaseRenderingContext2D.CreatePatternImageUnionType>uncheckedCast(image), repetition);
  }

  @JsOverlay
  public final CanvasPattern createPattern(HTMLVideoElement image, String repetition) {
    return createPattern(
        Js.<BaseRenderingContext2D.CreatePatternImageUnionType>uncheckedCast(image), repetition);
  }

  @JsOverlay
  public final CanvasPattern createPattern(ImageBitmap image, String repetition) {
    return createPattern(
        Js.<BaseRenderingContext2D.CreatePatternImageUnionType>uncheckedCast(image), repetition);
  }

  @JsOverlay
  public final CanvasPattern createPattern(OffscreenCanvas image, String repetition) {
    return createPattern(
        Js.<BaseRenderingContext2D.CreatePatternImageUnionType>uncheckedCast(image), repetition);
  }

  public native CanvasGradient createRadialGradient(
      double x0, double y0, double r0, double x1, double y1, double r1);

  public native void drawFocusIfNeeded(Element element);

  public native void drawImage(
      BaseRenderingContext2D.DrawImageImageUnionType image,
      double dx,
      double dy,
      double dw,
      double dh,
      double sx,
      double sy,
      double sw,
      double sh);

  public native void drawImage(
      BaseRenderingContext2D.DrawImageImageUnionType image,
      double dx,
      double dy,
      double dw,
      double dh,
      double sx,
      double sy,
      double sw);

  public native void drawImage(
      BaseRenderingContext2D.DrawImageImageUnionType image,
      double dx,
      double dy,
      double dw,
      double dh,
      double sx,
      double sy);

  public native void drawImage(
      BaseRenderingContext2D.DrawImageImageUnionType image,
      double dx,
      double dy,
      double dw,
      double dh,
      double sx);

  public native void drawImage(
      BaseRenderingContext2D.DrawImageImageUnionType image,
      double dx,
      double dy,
      double dw,
      double dh);

  public native void drawImage(
      BaseRenderingContext2D.DrawImageImageUnionType image, double dx, double dy, double dw);

  public native void drawImage(
      BaseRenderingContext2D.DrawImageImageUnionType image, double dx, double dy);

  @JsOverlay
  public final void drawImage(
      HTMLCanvasElement image,
      double dx,
      double dy,
      double dw,
      double dh,
      double sx,
      double sy,
      double sw,
      double sh) {
    drawImage(
        Js.<BaseRenderingContext2D.DrawImageImageUnionType>uncheckedCast(image),
        dx,
        dy,
        dw,
        dh,
        sx,
        sy,
        sw,
        sh);
  }

  @JsOverlay
  public final void drawImage(
      HTMLCanvasElement image,
      double dx,
      double dy,
      double dw,
      double dh,
      double sx,
      double sy,
      double sw) {
    drawImage(
        Js.<BaseRenderingContext2D.DrawImageImageUnionType>uncheckedCast(image),
        dx,
        dy,
        dw,
        dh,
        sx,
        sy,
        sw);
  }

  @JsOverlay
  public final void drawImage(
      HTMLCanvasElement image, double dx, double dy, double dw, double dh, double sx, double sy) {
    drawImage(
        Js.<BaseRenderingContext2D.DrawImageImageUnionType>uncheckedCast(image),
        dx,
        dy,
        dw,
        dh,
        sx,
        sy);
  }

  @JsOverlay
  public final void drawImage(
      HTMLCanvasElement image, double dx, double dy, double dw, double dh, double sx) {
    drawImage(
        Js.<BaseRenderingContext2D.DrawImageImageUnionType>uncheckedCast(image),
        dx,
        dy,
        dw,
        dh,
        sx);
  }

  @JsOverlay
  public final void drawImage(HTMLCanvasElement image, double dx, double dy, double dw, double dh) {
    drawImage(
        Js.<BaseRenderingContext2D.DrawImageImageUnionType>uncheckedCast(image), dx, dy, dw, dh);
  }

  @JsOverlay
  public final void drawImage(HTMLCanvasElement image, double dx, double dy, double dw) {
    drawImage(Js.<BaseRenderingContext2D.DrawImageImageUnionType>uncheckedCast(image), dx, dy, dw);
  }

  @JsOverlay
  public final void drawImage(HTMLCanvasElement image, double dx, double dy) {
    drawImage(Js.<BaseRenderingContext2D.DrawImageImageUnionType>uncheckedCast(image), dx, dy);
  }

  @JsOverlay
  public final void drawImage(
      HTMLImageElement image,
      double dx,
      double dy,
      double dw,
      double dh,
      double sx,
      double sy,
      double sw,
      double sh) {
    drawImage(
        Js.<BaseRenderingContext2D.DrawImageImageUnionType>uncheckedCast(image),
        dx,
        dy,
        dw,
        dh,
        sx,
        sy,
        sw,
        sh);
  }

  @JsOverlay
  public final void drawImage(
      HTMLImageElement image,
      double dx,
      double dy,
      double dw,
      double dh,
      double sx,
      double sy,
      double sw) {
    drawImage(
        Js.<BaseRenderingContext2D.DrawImageImageUnionType>uncheckedCast(image),
        dx,
        dy,
        dw,
        dh,
        sx,
        sy,
        sw);
  }

  @JsOverlay
  public final void drawImage(
      HTMLImageElement image, double dx, double dy, double dw, double dh, double sx, double sy) {
    drawImage(
        Js.<BaseRenderingContext2D.DrawImageImageUnionType>uncheckedCast(image),
        dx,
        dy,
        dw,
        dh,
        sx,
        sy);
  }

  @JsOverlay
  public final void drawImage(
      HTMLImageElement image, double dx, double dy, double dw, double dh, double sx) {
    drawImage(
        Js.<BaseRenderingContext2D.DrawImageImageUnionType>uncheckedCast(image),
        dx,
        dy,
        dw,
        dh,
        sx);
  }

  @JsOverlay
  public final void drawImage(HTMLImageElement image, double dx, double dy, double dw, double dh) {
    drawImage(
        Js.<BaseRenderingContext2D.DrawImageImageUnionType>uncheckedCast(image), dx, dy, dw, dh);
  }

  @JsOverlay
  public final void drawImage(HTMLImageElement image, double dx, double dy, double dw) {
    drawImage(Js.<BaseRenderingContext2D.DrawImageImageUnionType>uncheckedCast(image), dx, dy, dw);
  }

  @JsOverlay
  public final void drawImage(HTMLImageElement image, double dx, double dy) {
    drawImage(Js.<BaseRenderingContext2D.DrawImageImageUnionType>uncheckedCast(image), dx, dy);
  }

  @JsOverlay
  public final void drawImage(
      HTMLVideoElement image,
      double dx,
      double dy,
      double dw,
      double dh,
      double sx,
      double sy,
      double sw,
      double sh) {
    drawImage(
        Js.<BaseRenderingContext2D.DrawImageImageUnionType>uncheckedCast(image),
        dx,
        dy,
        dw,
        dh,
        sx,
        sy,
        sw,
        sh);
  }

  @JsOverlay
  public final void drawImage(
      HTMLVideoElement image,
      double dx,
      double dy,
      double dw,
      double dh,
      double sx,
      double sy,
      double sw) {
    drawImage(
        Js.<BaseRenderingContext2D.DrawImageImageUnionType>uncheckedCast(image),
        dx,
        dy,
        dw,
        dh,
        sx,
        sy,
        sw);
  }

  @JsOverlay
  public final void drawImage(
      HTMLVideoElement image, double dx, double dy, double dw, double dh, double sx, double sy) {
    drawImage(
        Js.<BaseRenderingContext2D.DrawImageImageUnionType>uncheckedCast(image),
        dx,
        dy,
        dw,
        dh,
        sx,
        sy);
  }

  @JsOverlay
  public final void drawImage(
      HTMLVideoElement image, double dx, double dy, double dw, double dh, double sx) {
    drawImage(
        Js.<BaseRenderingContext2D.DrawImageImageUnionType>uncheckedCast(image),
        dx,
        dy,
        dw,
        dh,
        sx);
  }

  @JsOverlay
  public final void drawImage(HTMLVideoElement image, double dx, double dy, double dw, double dh) {
    drawImage(
        Js.<BaseRenderingContext2D.DrawImageImageUnionType>uncheckedCast(image), dx, dy, dw, dh);
  }

  @JsOverlay
  public final void drawImage(HTMLVideoElement image, double dx, double dy, double dw) {
    drawImage(Js.<BaseRenderingContext2D.DrawImageImageUnionType>uncheckedCast(image), dx, dy, dw);
  }

  @JsOverlay
  public final void drawImage(HTMLVideoElement image, double dx, double dy) {
    drawImage(Js.<BaseRenderingContext2D.DrawImageImageUnionType>uncheckedCast(image), dx, dy);
  }

  @JsOverlay
  public final void drawImage(
      ImageBitmap image,
      double dx,
      double dy,
      double dw,
      double dh,
      double sx,
      double sy,
      double sw,
      double sh) {
    drawImage(
        Js.<BaseRenderingContext2D.DrawImageImageUnionType>uncheckedCast(image),
        dx,
        dy,
        dw,
        dh,
        sx,
        sy,
        sw,
        sh);
  }

  @JsOverlay
  public final void drawImage(
      ImageBitmap image,
      double dx,
      double dy,
      double dw,
      double dh,
      double sx,
      double sy,
      double sw) {
    drawImage(
        Js.<BaseRenderingContext2D.DrawImageImageUnionType>uncheckedCast(image),
        dx,
        dy,
        dw,
        dh,
        sx,
        sy,
        sw);
  }

  @JsOverlay
  public final void drawImage(
      ImageBitmap image, double dx, double dy, double dw, double dh, double sx, double sy) {
    drawImage(
        Js.<BaseRenderingContext2D.DrawImageImageUnionType>uncheckedCast(image),
        dx,
        dy,
        dw,
        dh,
        sx,
        sy);
  }

  @JsOverlay
  public final void drawImage(
      ImageBitmap image, double dx, double dy, double dw, double dh, double sx) {
    drawImage(
        Js.<BaseRenderingContext2D.DrawImageImageUnionType>uncheckedCast(image),
        dx,
        dy,
        dw,
        dh,
        sx);
  }

  @JsOverlay
  public final void drawImage(ImageBitmap image, double dx, double dy, double dw, double dh) {
    drawImage(
        Js.<BaseRenderingContext2D.DrawImageImageUnionType>uncheckedCast(image), dx, dy, dw, dh);
  }

  @JsOverlay
  public final void drawImage(ImageBitmap image, double dx, double dy, double dw) {
    drawImage(Js.<BaseRenderingContext2D.DrawImageImageUnionType>uncheckedCast(image), dx, dy, dw);
  }

  @JsOverlay
  public final void drawImage(ImageBitmap image, double dx, double dy) {
    drawImage(Js.<BaseRenderingContext2D.DrawImageImageUnionType>uncheckedCast(image), dx, dy);
  }

  @JsOverlay
  public final void drawImage(
      OffscreenCanvas image,
      double dx,
      double dy,
      double dw,
      double dh,
      double sx,
      double sy,
      double sw,
      double sh) {
    drawImage(
        Js.<BaseRenderingContext2D.DrawImageImageUnionType>uncheckedCast(image),
        dx,
        dy,
        dw,
        dh,
        sx,
        sy,
        sw,
        sh);
  }

  @JsOverlay
  public final void drawImage(
      OffscreenCanvas image,
      double dx,
      double dy,
      double dw,
      double dh,
      double sx,
      double sy,
      double sw) {
    drawImage(
        Js.<BaseRenderingContext2D.DrawImageImageUnionType>uncheckedCast(image),
        dx,
        dy,
        dw,
        dh,
        sx,
        sy,
        sw);
  }

  @JsOverlay
  public final void drawImage(
      OffscreenCanvas image, double dx, double dy, double dw, double dh, double sx, double sy) {
    drawImage(
        Js.<BaseRenderingContext2D.DrawImageImageUnionType>uncheckedCast(image),
        dx,
        dy,
        dw,
        dh,
        sx,
        sy);
  }

  @JsOverlay
  public final void drawImage(
      OffscreenCanvas image, double dx, double dy, double dw, double dh, double sx) {
    drawImage(
        Js.<BaseRenderingContext2D.DrawImageImageUnionType>uncheckedCast(image),
        dx,
        dy,
        dw,
        dh,
        sx);
  }

  @JsOverlay
  public final void drawImage(OffscreenCanvas image, double dx, double dy, double dw, double dh) {
    drawImage(
        Js.<BaseRenderingContext2D.DrawImageImageUnionType>uncheckedCast(image), dx, dy, dw, dh);
  }

  @JsOverlay
  public final void drawImage(OffscreenCanvas image, double dx, double dy, double dw) {
    drawImage(Js.<BaseRenderingContext2D.DrawImageImageUnionType>uncheckedCast(image), dx, dy, dw);
  }

  @JsOverlay
  public final void drawImage(OffscreenCanvas image, double dx, double dy) {
    drawImage(Js.<BaseRenderingContext2D.DrawImageImageUnionType>uncheckedCast(image), dx, dy);
  }

  public native void ellipse(
      double x,
      double y,
      double radiusX,
      double radiusY,
      double rotation,
      double startAngle,
      double endAngle,
      boolean anticlockwise);

  public native void ellipse(
      double x,
      double y,
      double radiusX,
      double radiusY,
      double rotation,
      double startAngle,
      double endAngle);

  public native void fill();

  public native void fill(
      BaseRenderingContext2D.FillOptFillRuleOrPathUnionType optFillRuleOrPath, String optFillRule);

  public native void fill(BaseRenderingContext2D.FillOptFillRuleOrPathUnionType optFillRuleOrPath);

  @JsOverlay
  public final void fill(Path2D optFillRuleOrPath, String optFillRule) {
    fill(
        Js.<BaseRenderingContext2D.FillOptFillRuleOrPathUnionType>uncheckedCast(optFillRuleOrPath),
        optFillRule);
  }

  @JsOverlay
  public final void fill(Path2D optFillRuleOrPath) {
    fill(
        Js.<BaseRenderingContext2D.FillOptFillRuleOrPathUnionType>uncheckedCast(optFillRuleOrPath));
  }

  @JsOverlay
  public final void fill(String optFillRuleOrPath, String optFillRule) {
    fill(
        Js.<BaseRenderingContext2D.FillOptFillRuleOrPathUnionType>uncheckedCast(optFillRuleOrPath),
        optFillRule);
  }

  @JsOverlay
  public final void fill(String optFillRuleOrPath) {
    fill(
        Js.<BaseRenderingContext2D.FillOptFillRuleOrPathUnionType>uncheckedCast(optFillRuleOrPath));
  }

  public native void fillRect(double x, double y, double w, double h);

  public native void fillText(String text, double x, double y, double maxWidth);

  public native void fillText(String text, double x, double y);

  @JsProperty
  public native String getFont();

  public native ImageData getImageData(int sx, int sy, int sw, int sh);

  @JsProperty
  public native String getLineCap();

  public native JsArray<Double> getLineDash();

  @JsProperty
  public native String getLineJoin();

  @JsProperty
  public native double getLineWidth();

  @JsProperty
  public native double getMiterLimit();

  @JsProperty
  public native String getTextAlign();

  @JsProperty
  public native String getTextBaseline();

  public native boolean isPointInPath(double x, double y, String fillRule);

  public native boolean isPointInPath(double x, double y);

  public native boolean isPointInStroke(double x, double y);

  public native void lineTo(double x, double y);

  public native TextMetrics measureText(String text);

  public native void moveTo(double x, double y);

  public native void putImageData(
      ImageData imagedata, int dx, int dy, int dirtyX, int dirtyY, int dirtyWidth, int dirtyHeight);

  public native void putImageData(
      ImageData imagedata, int dx, int dy, int dirtyX, int dirtyY, int dirtyWidth);

  public native void putImageData(ImageData imagedata, int dx, int dy, int dirtyX, int dirtyY);

  public native void putImageData(ImageData imagedata, int dx, int dy, int dirtyX);

  public native void putImageData(ImageData imagedata, int dx, int dy);

  public native void quadraticCurveTo(double cpx, double cpy, double x, double y);

  public native void rect(double x, double y, double w, double h);

  public native void restore();

  public native void rotate(double angle);

  public native void save();

  public native void scale(double x, double y);

  @Deprecated
  public native void setFillColor();

  @Deprecated
  public native void setFillColor(
      BaseRenderingContext2D.SetFillColorAUnionType a, double b, double c, double d, double e);

  @Deprecated
  public native void setFillColor(
      BaseRenderingContext2D.SetFillColorAUnionType a, double b, double c, double d);

  @Deprecated
  public native void setFillColor(
      BaseRenderingContext2D.SetFillColorAUnionType a, double b, double c);

  @Deprecated
  public native void setFillColor(BaseRenderingContext2D.SetFillColorAUnionType a, double b);

  @Deprecated
  public native void setFillColor(BaseRenderingContext2D.SetFillColorAUnionType a);

  @JsOverlay
  @Deprecated
  public final void setFillColor(String a, double b, double c, double d, double e) {
    setFillColor(Js.<BaseRenderingContext2D.SetFillColorAUnionType>uncheckedCast(a), b, c, d, e);
  }

  @JsOverlay
  @Deprecated
  public final void setFillColor(String a, double b, double c, double d) {
    setFillColor(Js.<BaseRenderingContext2D.SetFillColorAUnionType>uncheckedCast(a), b, c, d);
  }

  @JsOverlay
  @Deprecated
  public final void setFillColor(String a, double b, double c) {
    setFillColor(Js.<BaseRenderingContext2D.SetFillColorAUnionType>uncheckedCast(a), b, c);
  }

  @JsOverlay
  @Deprecated
  public final void setFillColor(String a, double b) {
    setFillColor(Js.<BaseRenderingContext2D.SetFillColorAUnionType>uncheckedCast(a), b);
  }

  @JsOverlay
  @Deprecated
  public final void setFillColor(String a) {
    setFillColor(Js.<BaseRenderingContext2D.SetFillColorAUnionType>uncheckedCast(a));
  }

  @JsOverlay
  @Deprecated
  public final void setFillColor(double a, double b, double c, double d, double e) {
    setFillColor(Js.<BaseRenderingContext2D.SetFillColorAUnionType>uncheckedCast(a), b, c, d, e);
  }

  @JsOverlay
  @Deprecated
  public final void setFillColor(double a, double b, double c, double d) {
    setFillColor(Js.<BaseRenderingContext2D.SetFillColorAUnionType>uncheckedCast(a), b, c, d);
  }

  @JsOverlay
  @Deprecated
  public final void setFillColor(double a, double b, double c) {
    setFillColor(Js.<BaseRenderingContext2D.SetFillColorAUnionType>uncheckedCast(a), b, c);
  }

  @JsOverlay
  @Deprecated
  public final void setFillColor(double a, double b) {
    setFillColor(Js.<BaseRenderingContext2D.SetFillColorAUnionType>uncheckedCast(a), b);
  }

  @JsOverlay
  @Deprecated
  public final void setFillColor(double a) {
    setFillColor(Js.<BaseRenderingContext2D.SetFillColorAUnionType>uncheckedCast(a));
  }

  @JsProperty
  public native void setFont(String font);

  @JsProperty
  public native void setLineCap(String lineCap);

  public native void setLineDash(JsArray<Double> segments);

  @JsProperty
  public native void setLineJoin(String lineJoin);

  @JsProperty
  public native void setLineWidth(double lineWidth);

  @JsProperty
  public native void setMiterLimit(double miterLimit);

  @Deprecated
  public native void setStrokeColor();

  @Deprecated
  public native void setStrokeColor(
      BaseRenderingContext2D.SetStrokeColorAUnionType a, double b, double c, double d, double e);

  @Deprecated
  public native void setStrokeColor(
      BaseRenderingContext2D.SetStrokeColorAUnionType a, double b, double c, double d);

  @Deprecated
  public native void setStrokeColor(
      BaseRenderingContext2D.SetStrokeColorAUnionType a, double b, double c);

  @Deprecated
  public native void setStrokeColor(BaseRenderingContext2D.SetStrokeColorAUnionType a, double b);

  @Deprecated
  public native void setStrokeColor(BaseRenderingContext2D.SetStrokeColorAUnionType a);

  @JsOverlay
  @Deprecated
  public final void setStrokeColor(String a, double b, double c, double d, double e) {
    setStrokeColor(
        Js.<BaseRenderingContext2D.SetStrokeColorAUnionType>uncheckedCast(a), b, c, d, e);
  }

  @JsOverlay
  @Deprecated
  public final void setStrokeColor(String a, double b, double c, double d) {
    setStrokeColor(Js.<BaseRenderingContext2D.SetStrokeColorAUnionType>uncheckedCast(a), b, c, d);
  }

  @JsOverlay
  @Deprecated
  public final void setStrokeColor(String a, double b, double c) {
    setStrokeColor(Js.<BaseRenderingContext2D.SetStrokeColorAUnionType>uncheckedCast(a), b, c);
  }

  @JsOverlay
  @Deprecated
  public final void setStrokeColor(String a, double b) {
    setStrokeColor(Js.<BaseRenderingContext2D.SetStrokeColorAUnionType>uncheckedCast(a), b);
  }

  @JsOverlay
  @Deprecated
  public final void setStrokeColor(String a) {
    setStrokeColor(Js.<BaseRenderingContext2D.SetStrokeColorAUnionType>uncheckedCast(a));
  }

  @JsOverlay
  @Deprecated
  public final void setStrokeColor(double a, double b, double c, double d, double e) {
    setStrokeColor(
        Js.<BaseRenderingContext2D.SetStrokeColorAUnionType>uncheckedCast(a), b, c, d, e);
  }

  @JsOverlay
  @Deprecated
  public final void setStrokeColor(double a, double b, double c, double d) {
    setStrokeColor(Js.<BaseRenderingContext2D.SetStrokeColorAUnionType>uncheckedCast(a), b, c, d);
  }

  @JsOverlay
  @Deprecated
  public final void setStrokeColor(double a, double b, double c) {
    setStrokeColor(Js.<BaseRenderingContext2D.SetStrokeColorAUnionType>uncheckedCast(a), b, c);
  }

  @JsOverlay
  @Deprecated
  public final void setStrokeColor(double a, double b) {
    setStrokeColor(Js.<BaseRenderingContext2D.SetStrokeColorAUnionType>uncheckedCast(a), b);
  }

  @JsOverlay
  @Deprecated
  public final void setStrokeColor(double a) {
    setStrokeColor(Js.<BaseRenderingContext2D.SetStrokeColorAUnionType>uncheckedCast(a));
  }

  @JsProperty
  public native void setTextAlign(String textAlign);

  @JsProperty
  public native void setTextBaseline(String textBaseline);

  public native void setTransform(
      double m11, double m12, double m21, double m22, double dx, double dy);

  public native void stroke();

  public native void stroke(Path2D optStroke);

  public native void strokeRect(double x, double y, double w, double h);

  public native void strokeText(String text, double x, double y, double maxWidth);

  public native void strokeText(String text, double x, double y);

  public native void transform(
      double m11, double m12, double m21, double m22, double dx, double dy);

  public native void translate(double x, double y);
}

