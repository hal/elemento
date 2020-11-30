goog.module('elemental2.dom.UIEventInit.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class UIEventInit_$Overlay {
 /** @return {UIEventInit} */
 static m_create__() {
  UIEventInit_$Overlay.$clinit();
  return /**@type {UIEventInit}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  UIEventInit_$Overlay.$clinit = () =>{};
  UIEventInit_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = UIEventInit_$Overlay; 
//# sourceMappingURL=UIEventInit$$Overlay.js.map
