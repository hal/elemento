goog.module('elemental2.dom.PerformanceObserverInit.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class PerformanceObserverInit_$Overlay {
 /** @return {PerformanceObserverInit} */
 static m_create__() {
  PerformanceObserverInit_$Overlay.$clinit();
  return /**@type {PerformanceObserverInit}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static m_setEntryTypes__$devirt__elemental2_dom_PerformanceObserverInit__arrayOf_java_lang_String(/** !PerformanceObserverInit */ $thisArg, /** Array<?string> */ entryTypes) {
  PerformanceObserverInit_$Overlay.$clinit();
  $thisArg.entryTypes = /**@type {Array<?string>}*/ (Js.m_uncheckedCast__java_lang_Object(entryTypes));
 }
 
 static $clinit() {
  PerformanceObserverInit_$Overlay.$clinit = () =>{};
  PerformanceObserverInit_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = PerformanceObserverInit_$Overlay; 
//# sourceMappingURL=PerformanceObserverInit$$Overlay.js.map
