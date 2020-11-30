goog.module('elemental2.dom.MutationObserverInit.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class MutationObserverInit_$Overlay {
 /** @return {MutationObserverInit} */
 static m_create__() {
  MutationObserverInit_$Overlay.$clinit();
  return /**@type {MutationObserverInit}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static m_setAttributeFilter__$devirt__elemental2_dom_MutationObserverInit__arrayOf_java_lang_String(/** !MutationObserverInit */ $thisArg, /** Array<?string> */ attributeFilter) {
  MutationObserverInit_$Overlay.$clinit();
  $thisArg.attributeFilter = /**@type {Array<?string>}*/ (Js.m_uncheckedCast__java_lang_Object(attributeFilter));
 }
 
 static $clinit() {
  MutationObserverInit_$Overlay.$clinit = () =>{};
  MutationObserverInit_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = MutationObserverInit_$Overlay; 
//# sourceMappingURL=MutationObserverInit$$Overlay.js.map
