goog.module('elemental2.dom.BaseRenderingContext2D.CanvasUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.HTMLCanvasElement.$Overlay$impl');
let OffscreenCanvas_$Overlay = goog.forwardDeclare('elemental2.dom.OffscreenCanvas.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class CanvasUnionType_$Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  CanvasUnionType_$Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {HTMLCanvasElement} */
 static m_asHTMLCanvasElement__$devirt__elemental2_dom_BaseRenderingContext2D_CanvasUnionType(/** ? */ $thisArg) {
  CanvasUnionType_$Overlay.$clinit();
  return /**@type {HTMLCanvasElement}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), $Overlay));
 }
 /** @return {OffscreenCanvas} */
 static m_asOffscreenCanvas__$devirt__elemental2_dom_BaseRenderingContext2D_CanvasUnionType(/** ? */ $thisArg) {
  CanvasUnionType_$Overlay.$clinit();
  return /**@type {OffscreenCanvas}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), OffscreenCanvas_$Overlay));
 }
 /** @return {boolean} */
 static m_isHTMLCanvasElement__$devirt__elemental2_dom_BaseRenderingContext2D_CanvasUnionType(/** ? */ $thisArg) {
  CanvasUnionType_$Overlay.$clinit();
  return $Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isOffscreenCanvas__$devirt__elemental2_dom_BaseRenderingContext2D_CanvasUnionType(/** ? */ $thisArg) {
  CanvasUnionType_$Overlay.$clinit();
  return OffscreenCanvas_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  CanvasUnionType_$Overlay.$clinit = () =>{};
  CanvasUnionType_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.HTMLCanvasElement.$Overlay$impl');
  OffscreenCanvas_$Overlay = goog.module.get('elemental2.dom.OffscreenCanvas.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}

exports = CanvasUnionType_$Overlay; 
//# sourceMappingURL=BaseRenderingContext2D$CanvasUnionType$$Overlay.js.map
