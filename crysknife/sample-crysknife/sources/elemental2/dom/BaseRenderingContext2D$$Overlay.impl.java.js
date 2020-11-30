goog.module('elemental2.dom.BaseRenderingContext2D.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.BaseRenderingContext2D.ClipOptFillRuleOrPathUnionType.$Overlay$impl');
let CreatePatternImageUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.BaseRenderingContext2D.CreatePatternImageUnionType.$Overlay$impl');
let DrawImageImageUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.BaseRenderingContext2D.DrawImageImageUnionType.$Overlay$impl');
let FillOptFillRuleOrPathUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.BaseRenderingContext2D.FillOptFillRuleOrPathUnionType.$Overlay$impl');
let SetFillColorAUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.BaseRenderingContext2D.SetFillColorAUnionType.$Overlay$impl');
let SetStrokeColorAUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.BaseRenderingContext2D.SetStrokeColorAUnionType.$Overlay$impl');
let CanvasPattern_$Overlay = goog.forwardDeclare('elemental2.dom.CanvasPattern.$Overlay$impl');
let HTMLCanvasElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLCanvasElement.$Overlay$impl');
let HTMLImageElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLImageElement.$Overlay$impl');
let HTMLVideoElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLVideoElement.$Overlay$impl');
let ImageBitmap_$Overlay = goog.forwardDeclare('elemental2.dom.ImageBitmap.$Overlay$impl');
let OffscreenCanvas_$Overlay = goog.forwardDeclare('elemental2.dom.OffscreenCanvas.$Overlay$impl');
let Path2D_$Overlay = goog.forwardDeclare('elemental2.dom.Path2D.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class BaseRenderingContext2D_$Overlay {
 
 static m_clip__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_Path2D__java_lang_String(/** !BaseRenderingContext2D */ $thisArg, /** Path2D */ optFillRuleOrPath, /** ?string */ optFillRule) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.clip(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(optFillRuleOrPath)), optFillRule);
 }
 
 static m_clip__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_Path2D(/** !BaseRenderingContext2D */ $thisArg, /** Path2D */ optFillRuleOrPath) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.clip(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(optFillRuleOrPath)));
 }
 
 static m_clip__$devirt__elemental2_dom_BaseRenderingContext2D__java_lang_String__java_lang_String(/** !BaseRenderingContext2D */ $thisArg, /** ?string */ optFillRuleOrPath, /** ?string */ optFillRule) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.clip(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(optFillRuleOrPath)), optFillRule);
 }
 
 static m_clip__$devirt__elemental2_dom_BaseRenderingContext2D__java_lang_String(/** !BaseRenderingContext2D */ $thisArg, /** ?string */ optFillRuleOrPath) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.clip(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(optFillRuleOrPath)));
 }
 /** @return {CanvasPattern} */
 static m_createPattern__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_HTMLCanvasElement__java_lang_String(/** !BaseRenderingContext2D */ $thisArg, /** HTMLCanvasElement */ image, /** ?string */ repetition) {
  BaseRenderingContext2D_$Overlay.$clinit();
  return $thisArg.createPattern(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), repetition);
 }
 /** @return {CanvasPattern} */
 static m_createPattern__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_HTMLImageElement__java_lang_String(/** !BaseRenderingContext2D */ $thisArg, /** HTMLImageElement */ image, /** ?string */ repetition) {
  BaseRenderingContext2D_$Overlay.$clinit();
  return $thisArg.createPattern(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), repetition);
 }
 /** @return {CanvasPattern} */
 static m_createPattern__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_HTMLVideoElement__java_lang_String(/** !BaseRenderingContext2D */ $thisArg, /** HTMLVideoElement */ image, /** ?string */ repetition) {
  BaseRenderingContext2D_$Overlay.$clinit();
  return $thisArg.createPattern(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), repetition);
 }
 /** @return {CanvasPattern} */
 static m_createPattern__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_ImageBitmap__java_lang_String(/** !BaseRenderingContext2D */ $thisArg, /** ImageBitmap */ image, /** ?string */ repetition) {
  BaseRenderingContext2D_$Overlay.$clinit();
  return $thisArg.createPattern(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), repetition);
 }
 /** @return {CanvasPattern} */
 static m_createPattern__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_OffscreenCanvas__java_lang_String(/** !BaseRenderingContext2D */ $thisArg, /** OffscreenCanvas */ image, /** ?string */ repetition) {
  BaseRenderingContext2D_$Overlay.$clinit();
  return $thisArg.createPattern(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), repetition);
 }
 
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_HTMLCanvasElement__double__double__double__double__double__double__double__double(/** !BaseRenderingContext2D */ $thisArg, /** HTMLCanvasElement */ image, /** number */ dx, /** number */ dy, /** number */ dw, /** number */ dh, /** number */ sx, /** number */ sy, /** number */ sw, /** number */ sh) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh, sx, sy, sw, sh);
 }
 
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_HTMLCanvasElement__double__double__double__double__double__double__double(/** !BaseRenderingContext2D */ $thisArg, /** HTMLCanvasElement */ image, /** number */ dx, /** number */ dy, /** number */ dw, /** number */ dh, /** number */ sx, /** number */ sy, /** number */ sw) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh, sx, sy, sw);
 }
 
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_HTMLCanvasElement__double__double__double__double__double__double(/** !BaseRenderingContext2D */ $thisArg, /** HTMLCanvasElement */ image, /** number */ dx, /** number */ dy, /** number */ dw, /** number */ dh, /** number */ sx, /** number */ sy) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh, sx, sy);
 }
 
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_HTMLCanvasElement__double__double__double__double__double(/** !BaseRenderingContext2D */ $thisArg, /** HTMLCanvasElement */ image, /** number */ dx, /** number */ dy, /** number */ dw, /** number */ dh, /** number */ sx) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh, sx);
 }
 
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_HTMLCanvasElement__double__double__double__double(/** !BaseRenderingContext2D */ $thisArg, /** HTMLCanvasElement */ image, /** number */ dx, /** number */ dy, /** number */ dw, /** number */ dh) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh);
 }
 
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_HTMLCanvasElement__double__double__double(/** !BaseRenderingContext2D */ $thisArg, /** HTMLCanvasElement */ image, /** number */ dx, /** number */ dy, /** number */ dw) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw);
 }
 
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_HTMLCanvasElement__double__double(/** !BaseRenderingContext2D */ $thisArg, /** HTMLCanvasElement */ image, /** number */ dx, /** number */ dy) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy);
 }
 
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_HTMLImageElement__double__double__double__double__double__double__double__double(/** !BaseRenderingContext2D */ $thisArg, /** HTMLImageElement */ image, /** number */ dx, /** number */ dy, /** number */ dw, /** number */ dh, /** number */ sx, /** number */ sy, /** number */ sw, /** number */ sh) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh, sx, sy, sw, sh);
 }
 
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_HTMLImageElement__double__double__double__double__double__double__double(/** !BaseRenderingContext2D */ $thisArg, /** HTMLImageElement */ image, /** number */ dx, /** number */ dy, /** number */ dw, /** number */ dh, /** number */ sx, /** number */ sy, /** number */ sw) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh, sx, sy, sw);
 }
 
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_HTMLImageElement__double__double__double__double__double__double(/** !BaseRenderingContext2D */ $thisArg, /** HTMLImageElement */ image, /** number */ dx, /** number */ dy, /** number */ dw, /** number */ dh, /** number */ sx, /** number */ sy) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh, sx, sy);
 }
 
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_HTMLImageElement__double__double__double__double__double(/** !BaseRenderingContext2D */ $thisArg, /** HTMLImageElement */ image, /** number */ dx, /** number */ dy, /** number */ dw, /** number */ dh, /** number */ sx) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh, sx);
 }
 
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_HTMLImageElement__double__double__double__double(/** !BaseRenderingContext2D */ $thisArg, /** HTMLImageElement */ image, /** number */ dx, /** number */ dy, /** number */ dw, /** number */ dh) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh);
 }
 
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_HTMLImageElement__double__double__double(/** !BaseRenderingContext2D */ $thisArg, /** HTMLImageElement */ image, /** number */ dx, /** number */ dy, /** number */ dw) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw);
 }
 
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_HTMLImageElement__double__double(/** !BaseRenderingContext2D */ $thisArg, /** HTMLImageElement */ image, /** number */ dx, /** number */ dy) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy);
 }
 
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_HTMLVideoElement__double__double__double__double__double__double__double__double(/** !BaseRenderingContext2D */ $thisArg, /** HTMLVideoElement */ image, /** number */ dx, /** number */ dy, /** number */ dw, /** number */ dh, /** number */ sx, /** number */ sy, /** number */ sw, /** number */ sh) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh, sx, sy, sw, sh);
 }
 
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_HTMLVideoElement__double__double__double__double__double__double__double(/** !BaseRenderingContext2D */ $thisArg, /** HTMLVideoElement */ image, /** number */ dx, /** number */ dy, /** number */ dw, /** number */ dh, /** number */ sx, /** number */ sy, /** number */ sw) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh, sx, sy, sw);
 }
 
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_HTMLVideoElement__double__double__double__double__double__double(/** !BaseRenderingContext2D */ $thisArg, /** HTMLVideoElement */ image, /** number */ dx, /** number */ dy, /** number */ dw, /** number */ dh, /** number */ sx, /** number */ sy) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh, sx, sy);
 }
 
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_HTMLVideoElement__double__double__double__double__double(/** !BaseRenderingContext2D */ $thisArg, /** HTMLVideoElement */ image, /** number */ dx, /** number */ dy, /** number */ dw, /** number */ dh, /** number */ sx) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh, sx);
 }
 
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_HTMLVideoElement__double__double__double__double(/** !BaseRenderingContext2D */ $thisArg, /** HTMLVideoElement */ image, /** number */ dx, /** number */ dy, /** number */ dw, /** number */ dh) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh);
 }
 
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_HTMLVideoElement__double__double__double(/** !BaseRenderingContext2D */ $thisArg, /** HTMLVideoElement */ image, /** number */ dx, /** number */ dy, /** number */ dw) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw);
 }
 
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_HTMLVideoElement__double__double(/** !BaseRenderingContext2D */ $thisArg, /** HTMLVideoElement */ image, /** number */ dx, /** number */ dy) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy);
 }
 
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_ImageBitmap__double__double__double__double__double__double__double__double(/** !BaseRenderingContext2D */ $thisArg, /** ImageBitmap */ image, /** number */ dx, /** number */ dy, /** number */ dw, /** number */ dh, /** number */ sx, /** number */ sy, /** number */ sw, /** number */ sh) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh, sx, sy, sw, sh);
 }
 
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_ImageBitmap__double__double__double__double__double__double__double(/** !BaseRenderingContext2D */ $thisArg, /** ImageBitmap */ image, /** number */ dx, /** number */ dy, /** number */ dw, /** number */ dh, /** number */ sx, /** number */ sy, /** number */ sw) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh, sx, sy, sw);
 }
 
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_ImageBitmap__double__double__double__double__double__double(/** !BaseRenderingContext2D */ $thisArg, /** ImageBitmap */ image, /** number */ dx, /** number */ dy, /** number */ dw, /** number */ dh, /** number */ sx, /** number */ sy) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh, sx, sy);
 }
 
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_ImageBitmap__double__double__double__double__double(/** !BaseRenderingContext2D */ $thisArg, /** ImageBitmap */ image, /** number */ dx, /** number */ dy, /** number */ dw, /** number */ dh, /** number */ sx) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh, sx);
 }
 
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_ImageBitmap__double__double__double__double(/** !BaseRenderingContext2D */ $thisArg, /** ImageBitmap */ image, /** number */ dx, /** number */ dy, /** number */ dw, /** number */ dh) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh);
 }
 
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_ImageBitmap__double__double__double(/** !BaseRenderingContext2D */ $thisArg, /** ImageBitmap */ image, /** number */ dx, /** number */ dy, /** number */ dw) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw);
 }
 
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_ImageBitmap__double__double(/** !BaseRenderingContext2D */ $thisArg, /** ImageBitmap */ image, /** number */ dx, /** number */ dy) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy);
 }
 
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_OffscreenCanvas__double__double__double__double__double__double__double__double(/** !BaseRenderingContext2D */ $thisArg, /** OffscreenCanvas */ image, /** number */ dx, /** number */ dy, /** number */ dw, /** number */ dh, /** number */ sx, /** number */ sy, /** number */ sw, /** number */ sh) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh, sx, sy, sw, sh);
 }
 
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_OffscreenCanvas__double__double__double__double__double__double__double(/** !BaseRenderingContext2D */ $thisArg, /** OffscreenCanvas */ image, /** number */ dx, /** number */ dy, /** number */ dw, /** number */ dh, /** number */ sx, /** number */ sy, /** number */ sw) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh, sx, sy, sw);
 }
 
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_OffscreenCanvas__double__double__double__double__double__double(/** !BaseRenderingContext2D */ $thisArg, /** OffscreenCanvas */ image, /** number */ dx, /** number */ dy, /** number */ dw, /** number */ dh, /** number */ sx, /** number */ sy) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh, sx, sy);
 }
 
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_OffscreenCanvas__double__double__double__double__double(/** !BaseRenderingContext2D */ $thisArg, /** OffscreenCanvas */ image, /** number */ dx, /** number */ dy, /** number */ dw, /** number */ dh, /** number */ sx) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh, sx);
 }
 
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_OffscreenCanvas__double__double__double__double(/** !BaseRenderingContext2D */ $thisArg, /** OffscreenCanvas */ image, /** number */ dx, /** number */ dy, /** number */ dw, /** number */ dh) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw, dh);
 }
 
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_OffscreenCanvas__double__double__double(/** !BaseRenderingContext2D */ $thisArg, /** OffscreenCanvas */ image, /** number */ dx, /** number */ dy, /** number */ dw) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy, dw);
 }
 
 static m_drawImage__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_OffscreenCanvas__double__double(/** !BaseRenderingContext2D */ $thisArg, /** OffscreenCanvas */ image, /** number */ dx, /** number */ dy) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.drawImage(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), dx, dy);
 }
 
 static m_fill__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_Path2D__java_lang_String(/** !BaseRenderingContext2D */ $thisArg, /** Path2D */ optFillRuleOrPath, /** ?string */ optFillRule) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.fill(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(optFillRuleOrPath)), optFillRule);
 }
 
 static m_fill__$devirt__elemental2_dom_BaseRenderingContext2D__elemental2_dom_Path2D(/** !BaseRenderingContext2D */ $thisArg, /** Path2D */ optFillRuleOrPath) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.fill(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(optFillRuleOrPath)));
 }
 
 static m_fill__$devirt__elemental2_dom_BaseRenderingContext2D__java_lang_String__java_lang_String(/** !BaseRenderingContext2D */ $thisArg, /** ?string */ optFillRuleOrPath, /** ?string */ optFillRule) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.fill(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(optFillRuleOrPath)), optFillRule);
 }
 
 static m_fill__$devirt__elemental2_dom_BaseRenderingContext2D__java_lang_String(/** !BaseRenderingContext2D */ $thisArg, /** ?string */ optFillRuleOrPath) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.fill(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(optFillRuleOrPath)));
 }
 /** @deprecated */
 static m_setFillColor__$devirt__elemental2_dom_BaseRenderingContext2D__java_lang_String__double__double__double__double(/** !BaseRenderingContext2D */ $thisArg, /** ?string */ a, /** number */ b, /** number */ c, /** number */ d, /** number */ e) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.setFillColor(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(a)), b, c, d, e);
 }
 /** @deprecated */
 static m_setFillColor__$devirt__elemental2_dom_BaseRenderingContext2D__java_lang_String__double__double__double(/** !BaseRenderingContext2D */ $thisArg, /** ?string */ a, /** number */ b, /** number */ c, /** number */ d) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.setFillColor(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(a)), b, c, d);
 }
 /** @deprecated */
 static m_setFillColor__$devirt__elemental2_dom_BaseRenderingContext2D__java_lang_String__double__double(/** !BaseRenderingContext2D */ $thisArg, /** ?string */ a, /** number */ b, /** number */ c) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.setFillColor(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(a)), b, c);
 }
 /** @deprecated */
 static m_setFillColor__$devirt__elemental2_dom_BaseRenderingContext2D__java_lang_String__double(/** !BaseRenderingContext2D */ $thisArg, /** ?string */ a, /** number */ b) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.setFillColor(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(a)), b);
 }
 /** @deprecated */
 static m_setFillColor__$devirt__elemental2_dom_BaseRenderingContext2D__java_lang_String(/** !BaseRenderingContext2D */ $thisArg, /** ?string */ a) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.setFillColor(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(a)));
 }
 /** @deprecated */
 static m_setFillColor__$devirt__elemental2_dom_BaseRenderingContext2D__double__double__double__double__double(/** !BaseRenderingContext2D */ $thisArg, /** number */ a, /** number */ b, /** number */ c, /** number */ d, /** number */ e) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.setFillColor(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(a)), b, c, d, e);
 }
 /** @deprecated */
 static m_setFillColor__$devirt__elemental2_dom_BaseRenderingContext2D__double__double__double__double(/** !BaseRenderingContext2D */ $thisArg, /** number */ a, /** number */ b, /** number */ c, /** number */ d) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.setFillColor(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(a)), b, c, d);
 }
 /** @deprecated */
 static m_setFillColor__$devirt__elemental2_dom_BaseRenderingContext2D__double__double__double(/** !BaseRenderingContext2D */ $thisArg, /** number */ a, /** number */ b, /** number */ c) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.setFillColor(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(a)), b, c);
 }
 /** @deprecated */
 static m_setFillColor__$devirt__elemental2_dom_BaseRenderingContext2D__double__double(/** !BaseRenderingContext2D */ $thisArg, /** number */ a, /** number */ b) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.setFillColor(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(a)), b);
 }
 /** @deprecated */
 static m_setFillColor__$devirt__elemental2_dom_BaseRenderingContext2D__double(/** !BaseRenderingContext2D */ $thisArg, /** number */ a) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.setFillColor(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(a)));
 }
 /** @deprecated */
 static m_setStrokeColor__$devirt__elemental2_dom_BaseRenderingContext2D__java_lang_String__double__double__double__double(/** !BaseRenderingContext2D */ $thisArg, /** ?string */ a, /** number */ b, /** number */ c, /** number */ d, /** number */ e) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.setStrokeColor(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(a)), b, c, d, e);
 }
 /** @deprecated */
 static m_setStrokeColor__$devirt__elemental2_dom_BaseRenderingContext2D__java_lang_String__double__double__double(/** !BaseRenderingContext2D */ $thisArg, /** ?string */ a, /** number */ b, /** number */ c, /** number */ d) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.setStrokeColor(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(a)), b, c, d);
 }
 /** @deprecated */
 static m_setStrokeColor__$devirt__elemental2_dom_BaseRenderingContext2D__java_lang_String__double__double(/** !BaseRenderingContext2D */ $thisArg, /** ?string */ a, /** number */ b, /** number */ c) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.setStrokeColor(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(a)), b, c);
 }
 /** @deprecated */
 static m_setStrokeColor__$devirt__elemental2_dom_BaseRenderingContext2D__java_lang_String__double(/** !BaseRenderingContext2D */ $thisArg, /** ?string */ a, /** number */ b) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.setStrokeColor(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(a)), b);
 }
 /** @deprecated */
 static m_setStrokeColor__$devirt__elemental2_dom_BaseRenderingContext2D__java_lang_String(/** !BaseRenderingContext2D */ $thisArg, /** ?string */ a) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.setStrokeColor(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(a)));
 }
 /** @deprecated */
 static m_setStrokeColor__$devirt__elemental2_dom_BaseRenderingContext2D__double__double__double__double__double(/** !BaseRenderingContext2D */ $thisArg, /** number */ a, /** number */ b, /** number */ c, /** number */ d, /** number */ e) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.setStrokeColor(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(a)), b, c, d, e);
 }
 /** @deprecated */
 static m_setStrokeColor__$devirt__elemental2_dom_BaseRenderingContext2D__double__double__double__double(/** !BaseRenderingContext2D */ $thisArg, /** number */ a, /** number */ b, /** number */ c, /** number */ d) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.setStrokeColor(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(a)), b, c, d);
 }
 /** @deprecated */
 static m_setStrokeColor__$devirt__elemental2_dom_BaseRenderingContext2D__double__double__double(/** !BaseRenderingContext2D */ $thisArg, /** number */ a, /** number */ b, /** number */ c) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.setStrokeColor(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(a)), b, c);
 }
 /** @deprecated */
 static m_setStrokeColor__$devirt__elemental2_dom_BaseRenderingContext2D__double__double(/** !BaseRenderingContext2D */ $thisArg, /** number */ a, /** number */ b) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.setStrokeColor(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(a)), b);
 }
 /** @deprecated */
 static m_setStrokeColor__$devirt__elemental2_dom_BaseRenderingContext2D__double(/** !BaseRenderingContext2D */ $thisArg, /** number */ a) {
  BaseRenderingContext2D_$Overlay.$clinit();
  $thisArg.setStrokeColor(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(a)));
 }
 
 static $clinit() {
  BaseRenderingContext2D_$Overlay.$clinit = () =>{};
  BaseRenderingContext2D_$Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BaseRenderingContext2D;
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}
$Util.$setClassMetadata(BaseRenderingContext2D_$Overlay, 'BaseRenderingContext2D');

exports = BaseRenderingContext2D_$Overlay; 
//# sourceMappingURL=BaseRenderingContext2D$$Overlay.js.map
