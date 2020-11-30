goog.module('elemental2.dom.TouchInitDict.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class TouchInitDict_$Overlay {
 /** @return {TouchInitDict} */
 static m_create__() {
  TouchInitDict_$Overlay.$clinit();
  return /**@type {TouchInitDict}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  TouchInitDict_$Overlay.$clinit = () =>{};
  TouchInitDict_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = TouchInitDict_$Overlay; 
//# sourceMappingURL=TouchInitDict$$Overlay.js.map
