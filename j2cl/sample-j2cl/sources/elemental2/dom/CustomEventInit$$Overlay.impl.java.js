goog.module('elemental2.dom.CustomEventInit.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class CustomEventInit_$Overlay {
 /** @return {CustomEventInit} */
 static m_create__() {
  CustomEventInit_$Overlay.$clinit();
  return /**@type {CustomEventInit}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  CustomEventInit_$Overlay.$clinit = () =>{};
  CustomEventInit_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = CustomEventInit_$Overlay; 
//# sourceMappingURL=CustomEventInit$$Overlay.js.map
