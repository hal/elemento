goog.module('elemental2.dom.EventTarget.RemoveEventListenerOptionsUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.EventListenerOptions.$Overlay$impl');
let Boolean = goog.forwardDeclare('java.lang.Boolean$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class RemoveEventListenerOptionsUnionType_$Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  RemoveEventListenerOptionsUnionType_$Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {boolean} */
 static m_asBoolean__$devirt__elemental2_dom_EventTarget_RemoveEventListenerOptionsUnionType(/** ? */ $thisArg) {
  RemoveEventListenerOptionsUnionType_$Overlay.$clinit();
  return Js.m_asBoolean__java_lang_Object($thisArg);
 }
 /** @return {EventListenerOptions} */
 static m_asEventListenerOptions__$devirt__elemental2_dom_EventTarget_RemoveEventListenerOptionsUnionType(/** ? */ $thisArg) {
  RemoveEventListenerOptionsUnionType_$Overlay.$clinit();
  return /**@type {EventListenerOptions}*/ (Js.m_cast__java_lang_Object($thisArg));
 }
 /** @return {boolean} */
 static m_isBoolean__$devirt__elemental2_dom_EventTarget_RemoveEventListenerOptionsUnionType(/** ? */ $thisArg) {
  RemoveEventListenerOptionsUnionType_$Overlay.$clinit();
  return Boolean.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  RemoveEventListenerOptionsUnionType_$Overlay.$clinit = () =>{};
  RemoveEventListenerOptionsUnionType_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Boolean = goog.module.get('java.lang.Boolean$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}

exports = RemoveEventListenerOptionsUnionType_$Overlay; 
//# sourceMappingURL=EventTarget$RemoveEventListenerOptionsUnionType$$Overlay.js.map
