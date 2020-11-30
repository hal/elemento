goog.module('elemental2.dom.InputEventInit.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class InputEventInit_$Overlay {
 /** @return {InputEventInit} */
 static m_create__() {
  InputEventInit_$Overlay.$clinit();
  return /**@type {InputEventInit}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  InputEventInit_$Overlay.$clinit = () =>{};
  InputEventInit_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = InputEventInit_$Overlay; 
//# sourceMappingURL=InputEventInit$$Overlay.js.map
