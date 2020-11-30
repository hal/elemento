goog.module('elemental2.dom.BaseRenderingContext2D.StrokeStyleUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.CanvasGradient.$Overlay$impl');
let CanvasPattern_$Overlay = goog.forwardDeclare('elemental2.dom.CanvasPattern.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class StrokeStyleUnionType_$Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  StrokeStyleUnionType_$Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {CanvasGradient} */
 static m_asCanvasGradient__$devirt__elemental2_dom_BaseRenderingContext2D_StrokeStyleUnionType(/** ? */ $thisArg) {
  StrokeStyleUnionType_$Overlay.$clinit();
  return /**@type {CanvasGradient}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), $Overlay));
 }
 /** @return {CanvasPattern} */
 static m_asCanvasPattern__$devirt__elemental2_dom_BaseRenderingContext2D_StrokeStyleUnionType(/** ? */ $thisArg) {
  StrokeStyleUnionType_$Overlay.$clinit();
  return /**@type {CanvasPattern}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), CanvasPattern_$Overlay));
 }
 /** @return {?string} */
 static m_asString__$devirt__elemental2_dom_BaseRenderingContext2D_StrokeStyleUnionType(/** ? */ $thisArg) {
  StrokeStyleUnionType_$Overlay.$clinit();
  return Js.m_asString__java_lang_Object($thisArg);
 }
 /** @return {boolean} */
 static m_isCanvasGradient__$devirt__elemental2_dom_BaseRenderingContext2D_StrokeStyleUnionType(/** ? */ $thisArg) {
  StrokeStyleUnionType_$Overlay.$clinit();
  return $Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isCanvasPattern__$devirt__elemental2_dom_BaseRenderingContext2D_StrokeStyleUnionType(/** ? */ $thisArg) {
  StrokeStyleUnionType_$Overlay.$clinit();
  return CanvasPattern_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isString__$devirt__elemental2_dom_BaseRenderingContext2D_StrokeStyleUnionType(/** ? */ $thisArg) {
  StrokeStyleUnionType_$Overlay.$clinit();
  return j_l_String.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  StrokeStyleUnionType_$Overlay.$clinit = () =>{};
  StrokeStyleUnionType_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.CanvasGradient.$Overlay$impl');
  CanvasPattern_$Overlay = goog.module.get('elemental2.dom.CanvasPattern.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}

exports = StrokeStyleUnionType_$Overlay; 
//# sourceMappingURL=BaseRenderingContext2D$StrokeStyleUnionType$$Overlay.js.map
