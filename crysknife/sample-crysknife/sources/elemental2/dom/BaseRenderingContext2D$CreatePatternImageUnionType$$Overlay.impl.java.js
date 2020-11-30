goog.module('elemental2.dom.BaseRenderingContext2D.CreatePatternImageUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLCanvasElement.$Overlay$impl');
let HTMLImageElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLImageElement.$Overlay$impl');
let HTMLVideoElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLVideoElement.$Overlay$impl');
let ImageBitmap_$Overlay = goog.forwardDeclare('elemental2.dom.ImageBitmap.$Overlay$impl');
let OffscreenCanvas_$Overlay = goog.forwardDeclare('elemental2.dom.OffscreenCanvas.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class CreatePatternImageUnionType_$Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  CreatePatternImageUnionType_$Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {HTMLCanvasElement} */
 static m_asHTMLCanvasElement__$devirt__elemental2_dom_BaseRenderingContext2D_CreatePatternImageUnionType(/** ? */ $thisArg) {
  CreatePatternImageUnionType_$Overlay.$clinit();
  return /**@type {HTMLCanvasElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), $Overlay));
 }
 /** @return {HTMLImageElement} */
 static m_asHTMLImageElement__$devirt__elemental2_dom_BaseRenderingContext2D_CreatePatternImageUnionType(/** ? */ $thisArg) {
  CreatePatternImageUnionType_$Overlay.$clinit();
  return /**@type {HTMLImageElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), HTMLImageElement_$Overlay));
 }
 /** @return {HTMLVideoElement} */
 static m_asHTMLVideoElement__$devirt__elemental2_dom_BaseRenderingContext2D_CreatePatternImageUnionType(/** ? */ $thisArg) {
  CreatePatternImageUnionType_$Overlay.$clinit();
  return /**@type {HTMLVideoElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), HTMLVideoElement_$Overlay));
 }
 /** @return {ImageBitmap} */
 static m_asImageBitmap__$devirt__elemental2_dom_BaseRenderingContext2D_CreatePatternImageUnionType(/** ? */ $thisArg) {
  CreatePatternImageUnionType_$Overlay.$clinit();
  return /**@type {ImageBitmap}*/ (Js.m_cast__java_lang_Object($thisArg));
 }
 /** @return {OffscreenCanvas} */
 static m_asOffscreenCanvas__$devirt__elemental2_dom_BaseRenderingContext2D_CreatePatternImageUnionType(/** ? */ $thisArg) {
  CreatePatternImageUnionType_$Overlay.$clinit();
  return /**@type {OffscreenCanvas}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), OffscreenCanvas_$Overlay));
 }
 /** @return {boolean} */
 static m_isHTMLCanvasElement__$devirt__elemental2_dom_BaseRenderingContext2D_CreatePatternImageUnionType(/** ? */ $thisArg) {
  CreatePatternImageUnionType_$Overlay.$clinit();
  return $Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isHTMLImageElement__$devirt__elemental2_dom_BaseRenderingContext2D_CreatePatternImageUnionType(/** ? */ $thisArg) {
  CreatePatternImageUnionType_$Overlay.$clinit();
  return HTMLImageElement_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isHTMLVideoElement__$devirt__elemental2_dom_BaseRenderingContext2D_CreatePatternImageUnionType(/** ? */ $thisArg) {
  CreatePatternImageUnionType_$Overlay.$clinit();
  return HTMLVideoElement_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isOffscreenCanvas__$devirt__elemental2_dom_BaseRenderingContext2D_CreatePatternImageUnionType(/** ? */ $thisArg) {
  CreatePatternImageUnionType_$Overlay.$clinit();
  return OffscreenCanvas_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  CreatePatternImageUnionType_$Overlay.$clinit = () =>{};
  CreatePatternImageUnionType_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLCanvasElement.$Overlay$impl');
  HTMLImageElement_$Overlay = goog.module.get('elemental2.dom.HTMLImageElement.$Overlay$impl');
  HTMLVideoElement_$Overlay = goog.module.get('elemental2.dom.HTMLVideoElement.$Overlay$impl');
  OffscreenCanvas_$Overlay = goog.module.get('elemental2.dom.OffscreenCanvas.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}

exports = CreatePatternImageUnionType_$Overlay; 
//# sourceMappingURL=BaseRenderingContext2D$CreatePatternImageUnionType$$Overlay.js.map
