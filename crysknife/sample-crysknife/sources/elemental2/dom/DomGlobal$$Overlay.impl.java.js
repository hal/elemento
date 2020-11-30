goog.module('elemental2.dom.DomGlobal.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let Transferable_$Overlay = goog.forwardDeclare('elemental2.core.Transferable.$Overlay$impl');
let Blob_$Overlay = goog.forwardDeclare('elemental2.dom.Blob.$Overlay$impl');
let CanvasRenderingContext2D_$Overlay = goog.forwardDeclare('elemental2.dom.CanvasRenderingContext2D.$Overlay$impl');
let Database_$Overlay = goog.forwardDeclare('elemental2.dom.Database.$Overlay$impl');
let DatabaseCallback_$Overlay = goog.forwardDeclare('elemental2.dom.DatabaseCallback.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.CreateImageBitmapImageUnionType.$Overlay$impl');
let CreateImageBitmapSxOrOptionsUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.CreateImageBitmapSxOrOptionsUnionType.$Overlay$impl');
let FetchInputUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.FetchInputUnionType.$Overlay$impl');
let ImportScriptsVar__argsUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.ImportScriptsVar_argsUnionType.$Overlay$impl');
let OpenDatabaseCallbackUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.OpenDatabaseCallbackUnionType.$Overlay$impl');
let PostMessageTargetOriginOrPortsOrTransferUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.PostMessageTargetOriginOrPortsOrTransferUnionType.$Overlay$impl');
let PostMessageTargetOriginOrTransferUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.PostMessageTargetOriginOrTransferUnionType.$Overlay$impl');
let RequestIdleCallbackOptionsUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.RequestIdleCallbackOptionsUnionType.$Overlay$impl');
let SetIntervalCallbackUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.SetIntervalCallbackUnionType.$Overlay$impl');
let SetTimeoutCallbackUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.DomGlobal.SetTimeoutCallbackUnionType.$Overlay$impl');
let HTMLCanvasElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLCanvasElement.$Overlay$impl');
let HTMLDocument_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLDocument.$Overlay$impl');
let HTMLImageElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLImageElement.$Overlay$impl');
let HTMLVideoElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLVideoElement.$Overlay$impl');
let IdleCallbackOptions_$Overlay = goog.forwardDeclare('elemental2.dom.IdleCallbackOptions.$Overlay$impl');
let IdleDeadline_$Overlay = goog.forwardDeclare('elemental2.dom.IdleDeadline.$Overlay$impl');
let ImageBitmap_$Overlay = goog.forwardDeclare('elemental2.dom.ImageBitmap.$Overlay$impl');
let ImageBitmapOptions_$Overlay = goog.forwardDeclare('elemental2.dom.ImageBitmapOptions.$Overlay$impl');
let ImageData_$Overlay = goog.forwardDeclare('elemental2.dom.ImageData.$Overlay$impl');
let Location_$Overlay = goog.forwardDeclare('elemental2.dom.Location.$Overlay$impl');
let Navigator_$Overlay = goog.forwardDeclare('elemental2.dom.Navigator.$Overlay$impl');
let Request_$Overlay = goog.forwardDeclare('elemental2.dom.Request.$Overlay$impl');
let RequestInit_$Overlay = goog.forwardDeclare('elemental2.dom.RequestInit.$Overlay$impl');
let Response_$Overlay = goog.forwardDeclare('elemental2.dom.Response.$Overlay$impl');
let Screen_$Overlay = goog.forwardDeclare('elemental2.dom.Screen.$Overlay$impl');
let TrustedScript_$Overlay = goog.forwardDeclare('elemental2.dom.TrustedScript.$Overlay$impl');
let TrustedScriptURL_$Overlay = goog.forwardDeclare('elemental2.dom.TrustedScriptURL.$Overlay$impl');
let VisualViewport_$Overlay = goog.forwardDeclare('elemental2.dom.VisualViewport.$Overlay$impl');
let Window_$Overlay = goog.forwardDeclare('elemental2.dom.Window.$Overlay$impl');
let Promise_$Overlay = goog.forwardDeclare('elemental2.promise.Promise.$Overlay$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class DomGlobal_$Overlay {
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_Blob__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double__double__elemental2_dom_ImageBitmapOptions(/** Blob */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy, sw, sh, options);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_Blob__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double__double(/** Blob */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy, sw, sh);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_Blob__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double(/** Blob */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy, sw);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_Blob__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double(/** Blob */ image, /** ? */ sxOrOptions, /** number */ sy) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_Blob__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType(/** Blob */ image, /** ? */ sxOrOptions) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_Blob__elemental2_dom_ImageBitmapOptions__double__double__double__elemental2_dom_ImageBitmapOptions(/** Blob */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh, options);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_Blob__elemental2_dom_ImageBitmapOptions__double__double__double(/** Blob */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_Blob__elemental2_dom_ImageBitmapOptions__double__double(/** Blob */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_Blob__elemental2_dom_ImageBitmapOptions__double(/** Blob */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_Blob__elemental2_dom_ImageBitmapOptions(/** Blob */ image, /** ImageBitmapOptions */ sxOrOptions) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)));
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_Blob__double__double__double__double__elemental2_dom_ImageBitmapOptions(/** Blob */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh, options);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_Blob__double__double__double__double(/** Blob */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_Blob__double__double__double(/** Blob */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_Blob__double__double(/** Blob */ image, /** number */ sxOrOptions, /** number */ sy) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_Blob__double(/** Blob */ image, /** number */ sxOrOptions) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)));
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_Blob(/** Blob */ image) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)));
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_CanvasRenderingContext2D__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double__double__elemental2_dom_ImageBitmapOptions(/** CanvasRenderingContext2D */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy, sw, sh, options);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_CanvasRenderingContext2D__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double__double(/** CanvasRenderingContext2D */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy, sw, sh);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_CanvasRenderingContext2D__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double(/** CanvasRenderingContext2D */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy, sw);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_CanvasRenderingContext2D__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double(/** CanvasRenderingContext2D */ image, /** ? */ sxOrOptions, /** number */ sy) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_CanvasRenderingContext2D__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType(/** CanvasRenderingContext2D */ image, /** ? */ sxOrOptions) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_CanvasRenderingContext2D__elemental2_dom_ImageBitmapOptions__double__double__double__elemental2_dom_ImageBitmapOptions(/** CanvasRenderingContext2D */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh, options);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_CanvasRenderingContext2D__elemental2_dom_ImageBitmapOptions__double__double__double(/** CanvasRenderingContext2D */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_CanvasRenderingContext2D__elemental2_dom_ImageBitmapOptions__double__double(/** CanvasRenderingContext2D */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_CanvasRenderingContext2D__elemental2_dom_ImageBitmapOptions__double(/** CanvasRenderingContext2D */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_CanvasRenderingContext2D__elemental2_dom_ImageBitmapOptions(/** CanvasRenderingContext2D */ image, /** ImageBitmapOptions */ sxOrOptions) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)));
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_CanvasRenderingContext2D__double__double__double__double__elemental2_dom_ImageBitmapOptions(/** CanvasRenderingContext2D */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh, options);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_CanvasRenderingContext2D__double__double__double__double(/** CanvasRenderingContext2D */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_CanvasRenderingContext2D__double__double__double(/** CanvasRenderingContext2D */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_CanvasRenderingContext2D__double__double(/** CanvasRenderingContext2D */ image, /** number */ sxOrOptions, /** number */ sy) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_CanvasRenderingContext2D__double(/** CanvasRenderingContext2D */ image, /** number */ sxOrOptions) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)));
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_CanvasRenderingContext2D(/** CanvasRenderingContext2D */ image) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)));
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_DomGlobal_CreateImageBitmapImageUnionType__elemental2_dom_ImageBitmapOptions__double__double__double__elemental2_dom_ImageBitmapOptions(/** ? */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(image, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh, options);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_DomGlobal_CreateImageBitmapImageUnionType__elemental2_dom_ImageBitmapOptions__double__double__double(/** ? */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(image, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_DomGlobal_CreateImageBitmapImageUnionType__elemental2_dom_ImageBitmapOptions__double__double(/** ? */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(image, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_DomGlobal_CreateImageBitmapImageUnionType__elemental2_dom_ImageBitmapOptions__double(/** ? */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(image, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_DomGlobal_CreateImageBitmapImageUnionType__elemental2_dom_ImageBitmapOptions(/** ? */ image, /** ImageBitmapOptions */ sxOrOptions) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(image, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)));
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_DomGlobal_CreateImageBitmapImageUnionType__double__double__double__double__elemental2_dom_ImageBitmapOptions(/** ? */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(image, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh, options);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_DomGlobal_CreateImageBitmapImageUnionType__double__double__double__double(/** ? */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(image, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_DomGlobal_CreateImageBitmapImageUnionType__double__double__double(/** ? */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(image, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_DomGlobal_CreateImageBitmapImageUnionType__double__double(/** ? */ image, /** number */ sxOrOptions, /** number */ sy) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(image, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_DomGlobal_CreateImageBitmapImageUnionType__double(/** ? */ image, /** number */ sxOrOptions) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(image, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)));
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double__double__elemental2_dom_ImageBitmapOptions(/** HTMLCanvasElement */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy, sw, sh, options);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double__double(/** HTMLCanvasElement */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy, sw, sh);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double(/** HTMLCanvasElement */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy, sw);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double(/** HTMLCanvasElement */ image, /** ? */ sxOrOptions, /** number */ sy) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType(/** HTMLCanvasElement */ image, /** ? */ sxOrOptions) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__elemental2_dom_ImageBitmapOptions__double__double__double__elemental2_dom_ImageBitmapOptions(/** HTMLCanvasElement */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh, options);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__elemental2_dom_ImageBitmapOptions__double__double__double(/** HTMLCanvasElement */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__elemental2_dom_ImageBitmapOptions__double__double(/** HTMLCanvasElement */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__elemental2_dom_ImageBitmapOptions__double(/** HTMLCanvasElement */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__elemental2_dom_ImageBitmapOptions(/** HTMLCanvasElement */ image, /** ImageBitmapOptions */ sxOrOptions) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)));
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__double__double__double__double__elemental2_dom_ImageBitmapOptions(/** HTMLCanvasElement */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh, options);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__double__double__double__double(/** HTMLCanvasElement */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__double__double__double(/** HTMLCanvasElement */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__double__double(/** HTMLCanvasElement */ image, /** number */ sxOrOptions, /** number */ sy) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement__double(/** HTMLCanvasElement */ image, /** number */ sxOrOptions) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)));
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLCanvasElement(/** HTMLCanvasElement */ image) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)));
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double__double__elemental2_dom_ImageBitmapOptions(/** HTMLImageElement */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy, sw, sh, options);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double__double(/** HTMLImageElement */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy, sw, sh);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double(/** HTMLImageElement */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy, sw);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double(/** HTMLImageElement */ image, /** ? */ sxOrOptions, /** number */ sy) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType(/** HTMLImageElement */ image, /** ? */ sxOrOptions) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__elemental2_dom_ImageBitmapOptions__double__double__double__elemental2_dom_ImageBitmapOptions(/** HTMLImageElement */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh, options);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__elemental2_dom_ImageBitmapOptions__double__double__double(/** HTMLImageElement */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__elemental2_dom_ImageBitmapOptions__double__double(/** HTMLImageElement */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__elemental2_dom_ImageBitmapOptions__double(/** HTMLImageElement */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__elemental2_dom_ImageBitmapOptions(/** HTMLImageElement */ image, /** ImageBitmapOptions */ sxOrOptions) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)));
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__double__double__double__double__elemental2_dom_ImageBitmapOptions(/** HTMLImageElement */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh, options);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__double__double__double__double(/** HTMLImageElement */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__double__double__double(/** HTMLImageElement */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__double__double(/** HTMLImageElement */ image, /** number */ sxOrOptions, /** number */ sy) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement__double(/** HTMLImageElement */ image, /** number */ sxOrOptions) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)));
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLImageElement(/** HTMLImageElement */ image) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)));
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double__double__elemental2_dom_ImageBitmapOptions(/** HTMLVideoElement */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy, sw, sh, options);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double__double(/** HTMLVideoElement */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy, sw, sh);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double(/** HTMLVideoElement */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy, sw);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double(/** HTMLVideoElement */ image, /** ? */ sxOrOptions, /** number */ sy) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType(/** HTMLVideoElement */ image, /** ? */ sxOrOptions) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__elemental2_dom_ImageBitmapOptions__double__double__double__elemental2_dom_ImageBitmapOptions(/** HTMLVideoElement */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh, options);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__elemental2_dom_ImageBitmapOptions__double__double__double(/** HTMLVideoElement */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__elemental2_dom_ImageBitmapOptions__double__double(/** HTMLVideoElement */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__elemental2_dom_ImageBitmapOptions__double(/** HTMLVideoElement */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__elemental2_dom_ImageBitmapOptions(/** HTMLVideoElement */ image, /** ImageBitmapOptions */ sxOrOptions) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)));
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__double__double__double__double__elemental2_dom_ImageBitmapOptions(/** HTMLVideoElement */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh, options);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__double__double__double__double(/** HTMLVideoElement */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__double__double__double(/** HTMLVideoElement */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__double__double(/** HTMLVideoElement */ image, /** number */ sxOrOptions, /** number */ sy) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement__double(/** HTMLVideoElement */ image, /** number */ sxOrOptions) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)));
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_HTMLVideoElement(/** HTMLVideoElement */ image) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)));
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double__double__elemental2_dom_ImageBitmapOptions(/** ImageBitmap */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy, sw, sh, options);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double__double(/** ImageBitmap */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy, sw, sh);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double(/** ImageBitmap */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy, sw);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double(/** ImageBitmap */ image, /** ? */ sxOrOptions, /** number */ sy) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType(/** ImageBitmap */ image, /** ? */ sxOrOptions) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__elemental2_dom_ImageBitmapOptions__double__double__double__elemental2_dom_ImageBitmapOptions(/** ImageBitmap */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh, options);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__elemental2_dom_ImageBitmapOptions__double__double__double(/** ImageBitmap */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__elemental2_dom_ImageBitmapOptions__double__double(/** ImageBitmap */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__elemental2_dom_ImageBitmapOptions__double(/** ImageBitmap */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__elemental2_dom_ImageBitmapOptions(/** ImageBitmap */ image, /** ImageBitmapOptions */ sxOrOptions) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)));
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__double__double__double__double__elemental2_dom_ImageBitmapOptions(/** ImageBitmap */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh, options);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__double__double__double__double(/** ImageBitmap */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__double__double__double(/** ImageBitmap */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__double__double(/** ImageBitmap */ image, /** number */ sxOrOptions, /** number */ sy) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageBitmap__double(/** ImageBitmap */ image, /** number */ sxOrOptions) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)));
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageBitmap(/** ImageBitmap */ image) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)));
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageData__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double__double__elemental2_dom_ImageBitmapOptions(/** ImageData */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy, sw, sh, options);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageData__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double__double(/** ImageData */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy, sw, sh);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageData__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double__double(/** ImageData */ image, /** ? */ sxOrOptions, /** number */ sy, /** number */ sw) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy, sw);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageData__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType__double(/** ImageData */ image, /** ? */ sxOrOptions, /** number */ sy) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions, sy);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageData__elemental2_dom_DomGlobal_CreateImageBitmapSxOrOptionsUnionType(/** ImageData */ image, /** ? */ sxOrOptions) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), sxOrOptions);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageData__elemental2_dom_ImageBitmapOptions__double__double__double__elemental2_dom_ImageBitmapOptions(/** ImageData */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh, options);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageData__elemental2_dom_ImageBitmapOptions__double__double__double(/** ImageData */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageData__elemental2_dom_ImageBitmapOptions__double__double(/** ImageData */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy, /** number */ sw) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageData__elemental2_dom_ImageBitmapOptions__double(/** ImageData */ image, /** ImageBitmapOptions */ sxOrOptions, /** number */ sy) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageData__elemental2_dom_ImageBitmapOptions(/** ImageData */ image, /** ImageBitmapOptions */ sxOrOptions) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)));
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageData__double__double__double__double__elemental2_dom_ImageBitmapOptions(/** ImageData */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh, /** ImageBitmapOptions */ options) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh, options);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageData__double__double__double__double(/** ImageData */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw, /** number */ sh) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw, sh);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageData__double__double__double(/** ImageData */ image, /** number */ sxOrOptions, /** number */ sy, /** number */ sw) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy, sw);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageData__double__double(/** ImageData */ image, /** number */ sxOrOptions, /** number */ sy) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)), sy);
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageData__double(/** ImageData */ image, /** number */ sxOrOptions) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sxOrOptions)));
 }
 /** @return {Promise<ImageBitmap>} */
 static m_createImageBitmap__elemental2_dom_ImageData(/** ImageData */ image) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.createImageBitmap(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(image)));
 }
 /** @return {Promise<Response>} */
 static m_fetch__elemental2_dom_Request__elemental2_dom_RequestInit(/** Request */ input, /** RequestInit */ init) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.fetch(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(input)), init);
 }
 /** @return {Promise<Response>} */
 static m_fetch__elemental2_dom_Request(/** Request */ input) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.fetch(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(input)));
 }
 /** @return {Promise<Response>} */
 static m_fetch__java_lang_String__elemental2_dom_RequestInit(/** ?string */ input, /** RequestInit */ init) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.fetch(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(input)), init);
 }
 /** @return {Promise<Response>} */
 static m_fetch__java_lang_String(/** ?string */ input) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.fetch(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(input)));
 }
 
 static m_importScripts__arrayOf_java_lang_String(/** Array<?string> */ var_args) {
  DomGlobal_$Overlay.$clinit();
  goog.global.importScripts(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(var_args))));
 }
 
 static m_importScripts__arrayOf_elemental2_dom_TrustedScriptURL(/** Array<TrustedScriptURL> */ var_args) {
  DomGlobal_$Overlay.$clinit();
  goog.global.importScripts(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(var_args))));
 }
 /** @return {Database} */
 static m_openDatabase__java_lang_String__java_lang_String__java_lang_String__int__elemental2_dom_DatabaseCallback(/** ?string */ name, /** ?string */ version, /** ?string */ description, /** number */ size, /** DatabaseCallback */ callback) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.openDatabase(name, version, description, size, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(callback)));
 }
 /** @return {Database} */
 static m_openDatabase__java_lang_String__java_lang_String__java_lang_String__int__elemental2_dom_DomGlobal_OpenDatabaseCallbackFn(/** ?string */ name, /** ?string */ version, /** ?string */ description, /** number */ size, /** ?function(Database):* */ callback) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.openDatabase(name, version, description, size, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(callback)));
 }
 
 static m_postMessage__java_lang_Object__elemental2_core_JsArray__elemental2_core_JsArray(/** * */ message, /** Array<Transferable> */ targetOriginOrTransfer, /** Array<*> */ targetOriginOrPortsOrTransfer) {
  DomGlobal_$Overlay.$clinit();
  goog.global.postMessage(message, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrTransfer)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrPortsOrTransfer)));
 }
 
 static m_postMessage__java_lang_Object__elemental2_core_JsArray__elemental2_dom_DomGlobal_PostMessageTargetOriginOrPortsOrTransferUnionType(/** * */ message, /** Array<Transferable> */ targetOriginOrTransfer, /** ? */ targetOriginOrPortsOrTransfer) {
  DomGlobal_$Overlay.$clinit();
  goog.global.postMessage(message, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrTransfer)), targetOriginOrPortsOrTransfer);
 }
 
 static m_postMessage__java_lang_Object__elemental2_core_JsArray__java_lang_String(/** * */ message, /** Array<Transferable> */ targetOriginOrTransfer, /** ?string */ targetOriginOrPortsOrTransfer) {
  DomGlobal_$Overlay.$clinit();
  goog.global.postMessage(message, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrTransfer)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrPortsOrTransfer)));
 }
 
 static m_postMessage__java_lang_Object__elemental2_core_JsArray(/** * */ message, /** Array<Transferable> */ targetOriginOrTransfer) {
  DomGlobal_$Overlay.$clinit();
  goog.global.postMessage(message, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrTransfer)));
 }
 
 static m_postMessage__java_lang_Object__elemental2_dom_DomGlobal_PostMessageTargetOriginOrTransferUnionType__elemental2_core_JsArray(/** * */ message, /** ? */ targetOriginOrTransfer, /** Array<*> */ targetOriginOrPortsOrTransfer) {
  DomGlobal_$Overlay.$clinit();
  goog.global.postMessage(message, targetOriginOrTransfer, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrPortsOrTransfer)));
 }
 
 static m_postMessage__java_lang_Object__elemental2_dom_DomGlobal_PostMessageTargetOriginOrTransferUnionType__arrayOf_java_lang_Object(/** * */ message, /** ? */ targetOriginOrTransfer, /** Array<*> */ targetOriginOrPortsOrTransfer) {
  DomGlobal_$Overlay.$clinit();
  DomGlobal_$Overlay.m_postMessage__java_lang_Object__elemental2_dom_DomGlobal_PostMessageTargetOriginOrTransferUnionType__elemental2_core_JsArray(message, targetOriginOrTransfer, /**@type {Array<*>}*/ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrPortsOrTransfer)));
 }
 
 static m_postMessage__java_lang_Object__elemental2_dom_DomGlobal_PostMessageTargetOriginOrTransferUnionType__java_lang_String(/** * */ message, /** ? */ targetOriginOrTransfer, /** ?string */ targetOriginOrPortsOrTransfer) {
  DomGlobal_$Overlay.$clinit();
  goog.global.postMessage(message, targetOriginOrTransfer, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrPortsOrTransfer)));
 }
 
 static m_postMessage__java_lang_Object__java_lang_String__elemental2_core_JsArray(/** * */ message, /** ?string */ targetOriginOrTransfer, /** Array<*> */ targetOriginOrPortsOrTransfer) {
  DomGlobal_$Overlay.$clinit();
  goog.global.postMessage(message, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrTransfer)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrPortsOrTransfer)));
 }
 
 static m_postMessage__java_lang_Object__java_lang_String__arrayOf_java_lang_Object(/** * */ message, /** ?string */ targetOriginOrTransfer, /** Array<*> */ targetOriginOrPortsOrTransfer) {
  DomGlobal_$Overlay.$clinit();
  DomGlobal_$Overlay.m_postMessage__java_lang_Object__java_lang_String__elemental2_core_JsArray(message, targetOriginOrTransfer, /**@type {Array<*>}*/ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrPortsOrTransfer)));
 }
 
 static m_postMessage__java_lang_Object__java_lang_String__elemental2_dom_DomGlobal_PostMessageTargetOriginOrPortsOrTransferUnionType(/** * */ message, /** ?string */ targetOriginOrTransfer, /** ? */ targetOriginOrPortsOrTransfer) {
  DomGlobal_$Overlay.$clinit();
  goog.global.postMessage(message, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrTransfer)), targetOriginOrPortsOrTransfer);
 }
 
 static m_postMessage__java_lang_Object__java_lang_String__java_lang_String(/** * */ message, /** ?string */ targetOriginOrTransfer, /** ?string */ targetOriginOrPortsOrTransfer) {
  DomGlobal_$Overlay.$clinit();
  goog.global.postMessage(message, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrTransfer)), /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrPortsOrTransfer)));
 }
 
 static m_postMessage__java_lang_Object__java_lang_String(/** * */ message, /** ?string */ targetOriginOrTransfer) {
  DomGlobal_$Overlay.$clinit();
  goog.global.postMessage(message, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrTransfer)));
 }
 
 static m_postMessage__java_lang_Object__arrayOf_elemental2_core_Transferable__arrayOf_java_lang_Object(/** * */ message, /** Array<Transferable> */ targetOriginOrTransfer, /** Array<*> */ targetOriginOrPortsOrTransfer) {
  DomGlobal_$Overlay.$clinit();
  DomGlobal_$Overlay.m_postMessage__java_lang_Object__elemental2_core_JsArray__elemental2_core_JsArray(message, /**@type {Array<Transferable>}*/ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrTransfer)), /**@type {Array<*>}*/ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrPortsOrTransfer)));
 }
 
 static m_postMessage__java_lang_Object__arrayOf_elemental2_core_Transferable__elemental2_dom_DomGlobal_PostMessageTargetOriginOrPortsOrTransferUnionType(/** * */ message, /** Array<Transferable> */ targetOriginOrTransfer, /** ? */ targetOriginOrPortsOrTransfer) {
  DomGlobal_$Overlay.$clinit();
  DomGlobal_$Overlay.m_postMessage__java_lang_Object__elemental2_core_JsArray__elemental2_dom_DomGlobal_PostMessageTargetOriginOrPortsOrTransferUnionType(message, /**@type {Array<Transferable>}*/ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrTransfer)), targetOriginOrPortsOrTransfer);
 }
 
 static m_postMessage__java_lang_Object__arrayOf_elemental2_core_Transferable__java_lang_String(/** * */ message, /** Array<Transferable> */ targetOriginOrTransfer, /** ?string */ targetOriginOrPortsOrTransfer) {
  DomGlobal_$Overlay.$clinit();
  DomGlobal_$Overlay.m_postMessage__java_lang_Object__elemental2_core_JsArray__java_lang_String(message, /**@type {Array<Transferable>}*/ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrTransfer)), targetOriginOrPortsOrTransfer);
 }
 
 static m_postMessage__java_lang_Object__arrayOf_elemental2_core_Transferable(/** * */ message, /** Array<Transferable> */ targetOriginOrTransfer) {
  DomGlobal_$Overlay.$clinit();
  DomGlobal_$Overlay.m_postMessage__java_lang_Object__elemental2_core_JsArray(message, /**@type {Array<Transferable>}*/ (Js.m_uncheckedCast__java_lang_Object(targetOriginOrTransfer)));
 }
 /** @return {number} */
 static m_requestIdleCallback__elemental2_dom_DomGlobal_RequestIdleCallbackCallbackFn__elemental2_dom_IdleCallbackOptions(/** ?function(IdleDeadline):void */ callback, /** IdleCallbackOptions */ options) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.requestIdleCallback(callback, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(options)));
 }
 /** @return {number} */
 static m_requestIdleCallback__elemental2_dom_DomGlobal_RequestIdleCallbackCallbackFn__int(/** ?function(IdleDeadline):void */ callback, /** number */ options) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.requestIdleCallback(callback, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(options)));
 }
 /** @return {number} */
 static m_setInterval__elemental2_dom_DomGlobal_SetIntervalCallbackFn__double__arrayOf_java_lang_Object(/** ?function(...*):void */ callback, /** number */ delay, /** Array<*> */ callbackParams) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.setInterval(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(callback)), delay, ...InternalPreconditions.m_checkNotNull__java_lang_Object(callbackParams));
 }
 /** @return {number} */
 static m_setInterval__elemental2_dom_DomGlobal_SetIntervalCallbackFn(/** ?function(...*):void */ callback) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.setInterval(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(callback)));
 }
 /** @return {number} */
 static m_setInterval__java_lang_String__double__arrayOf_java_lang_Object(/** ?string */ callback, /** number */ delay, /** Array<*> */ callbackParams) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.setInterval(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(callback)), delay, ...InternalPreconditions.m_checkNotNull__java_lang_Object(callbackParams));
 }
 /** @return {number} */
 static m_setInterval__java_lang_String(/** ?string */ callback) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.setInterval(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(callback)));
 }
 /** @return {number} */
 static m_setInterval__elemental2_dom_TrustedScript__double__arrayOf_java_lang_Object(/** TrustedScript */ callback, /** number */ delay, /** Array<*> */ callbackParams) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.setInterval(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(callback)), delay, ...InternalPreconditions.m_checkNotNull__java_lang_Object(callbackParams));
 }
 /** @return {number} */
 static m_setInterval__elemental2_dom_TrustedScript(/** TrustedScript */ callback) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.setInterval(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(callback)));
 }
 /** @return {number} */
 static m_setTimeout__elemental2_dom_DomGlobal_SetTimeoutCallbackFn__double__arrayOf_java_lang_Object(/** ?function(...*):void */ callback, /** number */ delay, /** Array<*> */ callbackParams) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.setTimeout(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(callback)), delay, ...InternalPreconditions.m_checkNotNull__java_lang_Object(callbackParams));
 }
 /** @return {number} */
 static m_setTimeout__elemental2_dom_DomGlobal_SetTimeoutCallbackFn(/** ?function(...*):void */ callback) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.setTimeout(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(callback)));
 }
 /** @return {number} */
 static m_setTimeout__java_lang_String__double__arrayOf_java_lang_Object(/** ?string */ callback, /** number */ delay, /** Array<*> */ callbackParams) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.setTimeout(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(callback)), delay, ...InternalPreconditions.m_checkNotNull__java_lang_Object(callbackParams));
 }
 /** @return {number} */
 static m_setTimeout__java_lang_String(/** ?string */ callback) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.setTimeout(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(callback)));
 }
 /** @return {number} */
 static m_setTimeout__elemental2_dom_TrustedScript__double__arrayOf_java_lang_Object(/** TrustedScript */ callback, /** number */ delay, /** Array<*> */ callbackParams) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.setTimeout(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(callback)), delay, ...InternalPreconditions.m_checkNotNull__java_lang_Object(callbackParams));
 }
 /** @return {number} */
 static m_setTimeout__elemental2_dom_TrustedScript(/** TrustedScript */ callback) {
  DomGlobal_$Overlay.$clinit();
  return goog.global.setTimeout(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(callback)));
 }
 /** @return {HTMLDocument} */
 static get f_document__elemental2_dom_DomGlobal_$Overlay() {
  return (DomGlobal_$Overlay.$clinit(), DomGlobal_$Overlay.$f_document__elemental2_dom_DomGlobal_$Overlay);
 }
 /** @return {boolean} */
 static get f_isSecureContext__elemental2_dom_DomGlobal_$Overlay() {
  return (DomGlobal_$Overlay.$clinit(), DomGlobal_$Overlay.$f_isSecureContext__elemental2_dom_DomGlobal_$Overlay);
 }
 /** @return {Location} */
 static get f_location__elemental2_dom_DomGlobal_$Overlay() {
  return (DomGlobal_$Overlay.$clinit(), DomGlobal_$Overlay.$f_location__elemental2_dom_DomGlobal_$Overlay);
 }
 /** @return {Navigator} */
 static get f_navigator__elemental2_dom_DomGlobal_$Overlay() {
  return (DomGlobal_$Overlay.$clinit(), DomGlobal_$Overlay.$f_navigator__elemental2_dom_DomGlobal_$Overlay);
 }
 /** @return {Screen} */
 static get f_screen__elemental2_dom_DomGlobal_$Overlay() {
  return (DomGlobal_$Overlay.$clinit(), DomGlobal_$Overlay.$f_screen__elemental2_dom_DomGlobal_$Overlay);
 }
 /** @return {Window} */
 static get f_self__elemental2_dom_DomGlobal_$Overlay() {
  return (DomGlobal_$Overlay.$clinit(), DomGlobal_$Overlay.$f_self__elemental2_dom_DomGlobal_$Overlay);
 }
 /** @return {Window} */
 static get f_top__elemental2_dom_DomGlobal_$Overlay() {
  return (DomGlobal_$Overlay.$clinit(), DomGlobal_$Overlay.$f_top__elemental2_dom_DomGlobal_$Overlay);
 }
 /** @return {VisualViewport} */
 static get f_visualViewport__elemental2_dom_DomGlobal_$Overlay() {
  return (DomGlobal_$Overlay.$clinit(), DomGlobal_$Overlay.$f_visualViewport__elemental2_dom_DomGlobal_$Overlay);
 }
 
 static $clinit() {
  DomGlobal_$Overlay.$clinit = () =>{};
  DomGlobal_$Overlay.$loadModules();
  DomGlobal_$Overlay.$f_document__elemental2_dom_DomGlobal_$Overlay = goog.global.document;
  DomGlobal_$Overlay.$f_isSecureContext__elemental2_dom_DomGlobal_$Overlay = goog.global.isSecureContext;
  DomGlobal_$Overlay.$f_location__elemental2_dom_DomGlobal_$Overlay = goog.global.location;
  DomGlobal_$Overlay.$f_navigator__elemental2_dom_DomGlobal_$Overlay = goog.global.navigator;
  DomGlobal_$Overlay.$f_screen__elemental2_dom_DomGlobal_$Overlay = goog.global.screen;
  DomGlobal_$Overlay.$f_self__elemental2_dom_DomGlobal_$Overlay = goog.global.self;
  DomGlobal_$Overlay.$f_top__elemental2_dom_DomGlobal_$Overlay = goog.global.top;
  DomGlobal_$Overlay.$f_visualViewport__elemental2_dom_DomGlobal_$Overlay = goog.global.visualViewport;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof goog.global;
 }
 
 static $loadModules() {
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}
$Util.$setClassMetadata(DomGlobal_$Overlay, 'goog.global');

/**@private {HTMLDocument}*/
DomGlobal_$Overlay.$f_document__elemental2_dom_DomGlobal_$Overlay;
/**@private {boolean}*/
DomGlobal_$Overlay.$f_isSecureContext__elemental2_dom_DomGlobal_$Overlay = false;
/**@private {Location}*/
DomGlobal_$Overlay.$f_location__elemental2_dom_DomGlobal_$Overlay;
/**@private {Navigator}*/
DomGlobal_$Overlay.$f_navigator__elemental2_dom_DomGlobal_$Overlay;
/**@private {Screen}*/
DomGlobal_$Overlay.$f_screen__elemental2_dom_DomGlobal_$Overlay;
/**@private {Window}*/
DomGlobal_$Overlay.$f_self__elemental2_dom_DomGlobal_$Overlay;
/**@private {Window}*/
DomGlobal_$Overlay.$f_top__elemental2_dom_DomGlobal_$Overlay;
/**@private {VisualViewport}*/
DomGlobal_$Overlay.$f_visualViewport__elemental2_dom_DomGlobal_$Overlay;

exports = DomGlobal_$Overlay; 
//# sourceMappingURL=DomGlobal$$Overlay.js.map
