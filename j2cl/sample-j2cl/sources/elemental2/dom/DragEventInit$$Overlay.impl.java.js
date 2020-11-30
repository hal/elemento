goog.module('elemental2.dom.DragEventInit.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class DragEventInit_$Overlay {
 /** @return {DragEventInit} */
 static m_create__() {
  DragEventInit_$Overlay.$clinit();
  return /**@type {DragEventInit}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  DragEventInit_$Overlay.$clinit = () =>{};
  DragEventInit_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = DragEventInit_$Overlay; 
//# sourceMappingURL=DragEventInit$$Overlay.js.map
