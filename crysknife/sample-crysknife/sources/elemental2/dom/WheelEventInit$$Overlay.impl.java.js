goog.module('elemental2.dom.WheelEventInit.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class WheelEventInit_$Overlay {
 /** @return {WheelEventInit} */
 static m_create__() {
  WheelEventInit_$Overlay.$clinit();
  return /**@type {WheelEventInit}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  WheelEventInit_$Overlay.$clinit = () =>{};
  WheelEventInit_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = WheelEventInit_$Overlay; 
//# sourceMappingURL=WheelEventInit$$Overlay.js.map
