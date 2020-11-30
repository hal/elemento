goog.module('elemental2.dom.DomGlobal.CreateImageBitmapImageUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.Blob.$Overlay$impl');
let CanvasRenderingContext2D_$Overlay = goog.forwardDeclare('elemental2.dom.CanvasRenderingContext2D.$Overlay$impl');
let HTMLCanvasElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLCanvasElement.$Overlay$impl');
let HTMLImageElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLImageElement.$Overlay$impl');
let HTMLVideoElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLVideoElement.$Overlay$impl');
let ImageBitmap_$Overlay = goog.forwardDeclare('elemental2.dom.ImageBitmap.$Overlay$impl');
let ImageData_$Overlay = goog.forwardDeclare('elemental2.dom.ImageData.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class CreateImageBitmapImageUnionType_$Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  CreateImageBitmapImageUnionType_$Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {Blob} */
 static m_asBlob__$devirt__elemental2_dom_DomGlobal_CreateImageBitmapImageUnionType(/** ? */ $thisArg) {
  CreateImageBitmapImageUnionType_$Overlay.$clinit();
  return /**@type {Blob}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), $Overlay));
 }
 /** @return {CanvasRenderingContext2D} */
 static m_asCanvasRenderingContext2D__$devirt__elemental2_dom_DomGlobal_CreateImageBitmapImageUnionType(/** ? */ $thisArg) {
  CreateImageBitmapImageUnionType_$Overlay.$clinit();
  return /**@type {CanvasRenderingContext2D}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), CanvasRenderingContext2D_$Overlay));
 }
 /** @return {HTMLCanvasElement} */
 static m_asHTMLCanvasElement__$devirt__elemental2_dom_DomGlobal_CreateImageBitmapImageUnionType(/** ? */ $thisArg) {
  CreateImageBitmapImageUnionType_$Overlay.$clinit();
  return /**@type {HTMLCanvasElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), HTMLCanvasElement_$Overlay));
 }
 /** @return {HTMLImageElement} */
 static m_asHTMLImageElement__$devirt__elemental2_dom_DomGlobal_CreateImageBitmapImageUnionType(/** ? */ $thisArg) {
  CreateImageBitmapImageUnionType_$Overlay.$clinit();
  return /**@type {HTMLImageElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), HTMLImageElement_$Overlay));
 }
 /** @return {HTMLVideoElement} */
 static m_asHTMLVideoElement__$devirt__elemental2_dom_DomGlobal_CreateImageBitmapImageUnionType(/** ? */ $thisArg) {
  CreateImageBitmapImageUnionType_$Overlay.$clinit();
  return /**@type {HTMLVideoElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), HTMLVideoElement_$Overlay));
 }
 /** @return {ImageBitmap} */
 static m_asImageBitmap__$devirt__elemental2_dom_DomGlobal_CreateImageBitmapImageUnionType(/** ? */ $thisArg) {
  CreateImageBitmapImageUnionType_$Overlay.$clinit();
  return /**@type {ImageBitmap}*/ (Js.m_cast__java_lang_Object($thisArg));
 }
 /** @return {ImageData} */
 static m_asImageData__$devirt__elemental2_dom_DomGlobal_CreateImageBitmapImageUnionType(/** ? */ $thisArg) {
  CreateImageBitmapImageUnionType_$Overlay.$clinit();
  return /**@type {ImageData}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), ImageData_$Overlay));
 }
 /** @return {boolean} */
 static m_isBlob__$devirt__elemental2_dom_DomGlobal_CreateImageBitmapImageUnionType(/** ? */ $thisArg) {
  CreateImageBitmapImageUnionType_$Overlay.$clinit();
  return $Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isCanvasRenderingContext2D__$devirt__elemental2_dom_DomGlobal_CreateImageBitmapImageUnionType(/** ? */ $thisArg) {
  CreateImageBitmapImageUnionType_$Overlay.$clinit();
  return CanvasRenderingContext2D_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isHTMLCanvasElement__$devirt__elemental2_dom_DomGlobal_CreateImageBitmapImageUnionType(/** ? */ $thisArg) {
  CreateImageBitmapImageUnionType_$Overlay.$clinit();
  return HTMLCanvasElement_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isHTMLImageElement__$devirt__elemental2_dom_DomGlobal_CreateImageBitmapImageUnionType(/** ? */ $thisArg) {
  CreateImageBitmapImageUnionType_$Overlay.$clinit();
  return HTMLImageElement_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isHTMLVideoElement__$devirt__elemental2_dom_DomGlobal_CreateImageBitmapImageUnionType(/** ? */ $thisArg) {
  CreateImageBitmapImageUnionType_$Overlay.$clinit();
  return HTMLVideoElement_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isImageData__$devirt__elemental2_dom_DomGlobal_CreateImageBitmapImageUnionType(/** ? */ $thisArg) {
  CreateImageBitmapImageUnionType_$Overlay.$clinit();
  return ImageData_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  CreateImageBitmapImageUnionType_$Overlay.$clinit = () =>{};
  CreateImageBitmapImageUnionType_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.Blob.$Overlay$impl');
  CanvasRenderingContext2D_$Overlay = goog.module.get('elemental2.dom.CanvasRenderingContext2D.$Overlay$impl');
  HTMLCanvasElement_$Overlay = goog.module.get('elemental2.dom.HTMLCanvasElement.$Overlay$impl');
  HTMLImageElement_$Overlay = goog.module.get('elemental2.dom.HTMLImageElement.$Overlay$impl');
  HTMLVideoElement_$Overlay = goog.module.get('elemental2.dom.HTMLVideoElement.$Overlay$impl');
  ImageData_$Overlay = goog.module.get('elemental2.dom.ImageData.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}

exports = CreateImageBitmapImageUnionType_$Overlay; 
//# sourceMappingURL=DomGlobal$CreateImageBitmapImageUnionType$$Overlay.js.map
