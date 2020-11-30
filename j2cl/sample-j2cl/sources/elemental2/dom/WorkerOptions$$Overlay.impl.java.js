goog.module('elemental2.dom.WorkerOptions.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class WorkerOptions_$Overlay {
 /** @return {WorkerOptions} */
 static m_create__() {
  WorkerOptions_$Overlay.$clinit();
  return /**@type {WorkerOptions}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  WorkerOptions_$Overlay.$clinit = () =>{};
  WorkerOptions_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = WorkerOptions_$Overlay; 
//# sourceMappingURL=WorkerOptions$$Overlay.js.map
