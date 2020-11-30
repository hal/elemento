goog.module('elemental2.dom.DOMPointInit.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class DOMPointInit_$Overlay {
 /** @return {DOMPointInit} */
 static m_create__() {
  DOMPointInit_$Overlay.$clinit();
  return /**@type {DOMPointInit}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  DOMPointInit_$Overlay.$clinit = () =>{};
  DOMPointInit_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = DOMPointInit_$Overlay; 
//# sourceMappingURL=DOMPointInit$$Overlay.js.map
