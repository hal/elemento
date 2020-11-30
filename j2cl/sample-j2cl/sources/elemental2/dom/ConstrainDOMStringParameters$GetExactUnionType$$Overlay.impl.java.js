goog.module('elemental2.dom.ConstrainDOMStringParameters.GetExactUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class GetExactUnionType_$Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  GetExactUnionType_$Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {Array<?string>} */
 static m_asJsArray__$devirt__elemental2_dom_ConstrainDOMStringParameters_GetExactUnionType(/** ? */ $thisArg) {
  GetExactUnionType_$Overlay.$clinit();
  return /**@type {Array<?string>}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), $Overlay));
 }
 /** @return {?string} */
 static m_asString__$devirt__elemental2_dom_ConstrainDOMStringParameters_GetExactUnionType(/** ? */ $thisArg) {
  GetExactUnionType_$Overlay.$clinit();
  return Js.m_asString__java_lang_Object($thisArg);
 }
 /** @return {boolean} */
 static m_isJsArray__$devirt__elemental2_dom_ConstrainDOMStringParameters_GetExactUnionType(/** ? */ $thisArg) {
  GetExactUnionType_$Overlay.$clinit();
  return $Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isString__$devirt__elemental2_dom_ConstrainDOMStringParameters_GetExactUnionType(/** ? */ $thisArg) {
  GetExactUnionType_$Overlay.$clinit();
  return j_l_String.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  GetExactUnionType_$Overlay.$clinit = () =>{};
  GetExactUnionType_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.core.JsArray.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}

exports = GetExactUnionType_$Overlay; 
//# sourceMappingURL=ConstrainDOMStringParameters$GetExactUnionType$$Overlay.js.map
