goog.module('elemental2.dom.DomGlobal.SetIntervalCallbackUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.TrustedScript.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $JavaScriptFunction = goog.forwardDeclare('vmbootstrap.JavaScriptFunction$impl');

class SetIntervalCallbackUnionType_$Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  SetIntervalCallbackUnionType_$Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {?function(...*):void} */
 static m_asSetIntervalCallbackFn__$devirt__elemental2_dom_DomGlobal_SetIntervalCallbackUnionType(/** ? */ $thisArg) {
  SetIntervalCallbackUnionType_$Overlay.$clinit();
  return /**@type {?function(...*):void}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), $JavaScriptFunction));
 }
 /** @return {?string} */
 static m_asString__$devirt__elemental2_dom_DomGlobal_SetIntervalCallbackUnionType(/** ? */ $thisArg) {
  SetIntervalCallbackUnionType_$Overlay.$clinit();
  return Js.m_asString__java_lang_Object($thisArg);
 }
 /** @return {TrustedScript} */
 static m_asTrustedScript__$devirt__elemental2_dom_DomGlobal_SetIntervalCallbackUnionType(/** ? */ $thisArg) {
  SetIntervalCallbackUnionType_$Overlay.$clinit();
  return /**@type {TrustedScript}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), $Overlay));
 }
 /** @return {boolean} */
 static m_isSetIntervalCallbackFn__$devirt__elemental2_dom_DomGlobal_SetIntervalCallbackUnionType(/** ? */ $thisArg) {
  SetIntervalCallbackUnionType_$Overlay.$clinit();
  return $JavaScriptFunction.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isString__$devirt__elemental2_dom_DomGlobal_SetIntervalCallbackUnionType(/** ? */ $thisArg) {
  SetIntervalCallbackUnionType_$Overlay.$clinit();
  return j_l_String.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isTrustedScript__$devirt__elemental2_dom_DomGlobal_SetIntervalCallbackUnionType(/** ? */ $thisArg) {
  SetIntervalCallbackUnionType_$Overlay.$clinit();
  return $Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  SetIntervalCallbackUnionType_$Overlay.$clinit = () =>{};
  SetIntervalCallbackUnionType_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.TrustedScript.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $JavaScriptFunction = goog.module.get('vmbootstrap.JavaScriptFunction$impl');
 }
 
}

exports = SetIntervalCallbackUnionType_$Overlay; 
//# sourceMappingURL=DomGlobal$SetIntervalCallbackUnionType$$Overlay.js.map
