goog.module('elemental2.dom.InstallEventInit.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class InstallEventInit_$Overlay {
 /** @return {InstallEventInit} */
 static m_create__() {
  InstallEventInit_$Overlay.$clinit();
  return /**@type {InstallEventInit}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  InstallEventInit_$Overlay.$clinit = () =>{};
  InstallEventInit_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = InstallEventInit_$Overlay; 
//# sourceMappingURL=InstallEventInit$$Overlay.js.map
