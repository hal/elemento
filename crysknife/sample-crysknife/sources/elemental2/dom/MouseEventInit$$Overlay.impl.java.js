goog.module('elemental2.dom.MouseEventInit.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class MouseEventInit_$Overlay {
 /** @return {MouseEventInit} */
 static m_create__() {
  MouseEventInit_$Overlay.$clinit();
  return /**@type {MouseEventInit}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  MouseEventInit_$Overlay.$clinit = () =>{};
  MouseEventInit_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = MouseEventInit_$Overlay; 
//# sourceMappingURL=MouseEventInit$$Overlay.js.map
