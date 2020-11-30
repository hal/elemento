goog.module('elemental2.dom.FocusEventInit.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class FocusEventInit_$Overlay {
 /** @return {FocusEventInit} */
 static m_create__() {
  FocusEventInit_$Overlay.$clinit();
  return /**@type {FocusEventInit}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  FocusEventInit_$Overlay.$clinit = () =>{};
  FocusEventInit_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = FocusEventInit_$Overlay; 
//# sourceMappingURL=FocusEventInit$$Overlay.js.map
