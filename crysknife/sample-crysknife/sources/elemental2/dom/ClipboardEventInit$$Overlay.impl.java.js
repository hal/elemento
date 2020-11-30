goog.module('elemental2.dom.ClipboardEventInit.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class ClipboardEventInit_$Overlay {
 /** @return {ClipboardEventInit} */
 static m_create__() {
  ClipboardEventInit_$Overlay.$clinit();
  return /**@type {ClipboardEventInit}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  ClipboardEventInit_$Overlay.$clinit = () =>{};
  ClipboardEventInit_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = ClipboardEventInit_$Overlay; 
//# sourceMappingURL=ClipboardEventInit$$Overlay.js.map
