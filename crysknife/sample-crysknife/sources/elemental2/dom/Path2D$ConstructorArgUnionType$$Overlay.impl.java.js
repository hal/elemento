goog.module('elemental2.dom.Path2D.ConstructorArgUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.Path2D.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ConstructorArgUnionType_$Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  ConstructorArgUnionType_$Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {Path2D} */
 static m_asPath2D__$devirt__elemental2_dom_Path2D_ConstructorArgUnionType(/** ? */ $thisArg) {
  ConstructorArgUnionType_$Overlay.$clinit();
  return /**@type {Path2D}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), $Overlay));
 }
 /** @return {?string} */
 static m_asString__$devirt__elemental2_dom_Path2D_ConstructorArgUnionType(/** ? */ $thisArg) {
  ConstructorArgUnionType_$Overlay.$clinit();
  return Js.m_asString__java_lang_Object($thisArg);
 }
 /** @return {boolean} */
 static m_isPath2D__$devirt__elemental2_dom_Path2D_ConstructorArgUnionType(/** ? */ $thisArg) {
  ConstructorArgUnionType_$Overlay.$clinit();
  return $Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isString__$devirt__elemental2_dom_Path2D_ConstructorArgUnionType(/** ? */ $thisArg) {
  ConstructorArgUnionType_$Overlay.$clinit();
  return j_l_String.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  ConstructorArgUnionType_$Overlay.$clinit = () =>{};
  ConstructorArgUnionType_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.Path2D.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}

exports = ConstructorArgUnionType_$Overlay; 
//# sourceMappingURL=Path2D$ConstructorArgUnionType$$Overlay.js.map
