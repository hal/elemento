goog.module('elemental2.dom.KeyboardEventInit.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class KeyboardEventInit_$Overlay {
 /** @return {KeyboardEventInit} */
 static m_create__() {
  KeyboardEventInit_$Overlay.$clinit();
  return /**@type {KeyboardEventInit}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  KeyboardEventInit_$Overlay.$clinit = () =>{};
  KeyboardEventInit_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = KeyboardEventInit_$Overlay; 
//# sourceMappingURL=KeyboardEventInit$$Overlay.js.map
