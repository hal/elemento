goog.module('elemental2.dom.TouchEventInit.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let Touch_$Overlay = goog.forwardDeclare('elemental2.dom.Touch.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class TouchEventInit_$Overlay {
 /** @return {TouchEventInit} */
 static m_create__() {
  TouchEventInit_$Overlay.$clinit();
  return /**@type {TouchEventInit}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static m_setChangedTouches__$devirt__elemental2_dom_TouchEventInit__arrayOf_elemental2_dom_Touch(/** !TouchEventInit */ $thisArg, /** Array<Touch> */ changedTouches) {
  TouchEventInit_$Overlay.$clinit();
  $thisArg.changedTouches = /**@type {Array<Touch>}*/ (Js.m_uncheckedCast__java_lang_Object(changedTouches));
 }
 
 static m_setTargetTouches__$devirt__elemental2_dom_TouchEventInit__arrayOf_elemental2_dom_Touch(/** !TouchEventInit */ $thisArg, /** Array<Touch> */ targetTouches) {
  TouchEventInit_$Overlay.$clinit();
  $thisArg.targetTouches = /**@type {Array<Touch>}*/ (Js.m_uncheckedCast__java_lang_Object(targetTouches));
 }
 
 static m_setTouches__$devirt__elemental2_dom_TouchEventInit__arrayOf_elemental2_dom_Touch(/** !TouchEventInit */ $thisArg, /** Array<Touch> */ touches) {
  TouchEventInit_$Overlay.$clinit();
  $thisArg.touches = /**@type {Array<Touch>}*/ (Js.m_uncheckedCast__java_lang_Object(touches));
 }
 
 static $clinit() {
  TouchEventInit_$Overlay.$clinit = () =>{};
  TouchEventInit_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = TouchEventInit_$Overlay; 
//# sourceMappingURL=TouchEventInit$$Overlay.js.map
