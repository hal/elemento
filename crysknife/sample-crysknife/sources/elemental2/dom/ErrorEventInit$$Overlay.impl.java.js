goog.module('elemental2.dom.ErrorEventInit.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class ErrorEventInit_$Overlay {
 /** @return {ErrorEventInit} */
 static m_create__() {
  ErrorEventInit_$Overlay.$clinit();
  return /**@type {ErrorEventInit}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  ErrorEventInit_$Overlay.$clinit = () =>{};
  ErrorEventInit_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = ErrorEventInit_$Overlay; 
//# sourceMappingURL=ErrorEventInit$$Overlay.js.map
