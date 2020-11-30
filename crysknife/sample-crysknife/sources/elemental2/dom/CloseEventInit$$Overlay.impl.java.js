goog.module('elemental2.dom.CloseEventInit.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class CloseEventInit_$Overlay {
 /** @return {CloseEventInit} */
 static m_create__() {
  CloseEventInit_$Overlay.$clinit();
  return /**@type {CloseEventInit}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  CloseEventInit_$Overlay.$clinit = () =>{};
  CloseEventInit_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = CloseEventInit_$Overlay; 
//# sourceMappingURL=CloseEventInit$$Overlay.js.map
