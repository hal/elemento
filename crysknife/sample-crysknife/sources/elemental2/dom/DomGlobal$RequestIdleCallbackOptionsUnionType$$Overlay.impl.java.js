goog.module('elemental2.dom.DomGlobal.RequestIdleCallbackOptionsUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.IdleCallbackOptions.$Overlay$impl');
let Double = goog.forwardDeclare('java.lang.Double$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class RequestIdleCallbackOptionsUnionType_$Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  RequestIdleCallbackOptionsUnionType_$Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {IdleCallbackOptions} */
 static m_asIdleCallbackOptions__$devirt__elemental2_dom_DomGlobal_RequestIdleCallbackOptionsUnionType(/** ? */ $thisArg) {
  RequestIdleCallbackOptionsUnionType_$Overlay.$clinit();
  return /**@type {IdleCallbackOptions}*/ (Js.m_cast__java_lang_Object($thisArg));
 }
 /** @return {number} */
 static m_asInt__$devirt__elemental2_dom_DomGlobal_RequestIdleCallbackOptionsUnionType(/** ? */ $thisArg) {
  RequestIdleCallbackOptionsUnionType_$Overlay.$clinit();
  return Js.m_asInt__java_lang_Object($thisArg);
 }
 /** @return {boolean} */
 static m_isInt__$devirt__elemental2_dom_DomGlobal_RequestIdleCallbackOptionsUnionType(/** ? */ $thisArg) {
  RequestIdleCallbackOptionsUnionType_$Overlay.$clinit();
  return Double.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  RequestIdleCallbackOptionsUnionType_$Overlay.$clinit = () =>{};
  RequestIdleCallbackOptionsUnionType_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}

exports = RequestIdleCallbackOptionsUnionType_$Overlay; 
//# sourceMappingURL=DomGlobal$RequestIdleCallbackOptionsUnionType$$Overlay.js.map
