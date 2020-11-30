goog.module('elemental2.dom.ProgressEventInit.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class ProgressEventInit_$Overlay {
 /** @return {ProgressEventInit} */
 static m_create__() {
  ProgressEventInit_$Overlay.$clinit();
  return /**@type {ProgressEventInit}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  ProgressEventInit_$Overlay.$clinit = () =>{};
  ProgressEventInit_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = ProgressEventInit_$Overlay; 
//# sourceMappingURL=ProgressEventInit$$Overlay.js.map
