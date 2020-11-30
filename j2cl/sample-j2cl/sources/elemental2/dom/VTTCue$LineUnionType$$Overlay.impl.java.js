goog.module('elemental2.dom.VTTCue.LineUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class $Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  $Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {number} */
 static m_asDouble__$devirt__elemental2_dom_VTTCue_LineUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_asDouble__java_lang_Object($thisArg);
 }
 /** @return {?string} */
 static m_asString__$devirt__elemental2_dom_VTTCue_LineUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Js.m_asString__java_lang_Object($thisArg);
 }
 /** @return {boolean} */
 static m_isDouble__$devirt__elemental2_dom_VTTCue_LineUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return Double.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isString__$devirt__elemental2_dom_VTTCue_LineUnionType(/** ? */ $thisArg) {
  $Overlay.$clinit();
  return j_l_String.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  $Overlay.$clinit = () =>{};
  $Overlay.$loadModules();
 }
 
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}

exports = $Overlay; 
//# sourceMappingURL=VTTCue$LineUnionType$$Overlay.js.map
