goog.module('elemental2.dom.ExtendableEventInit.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class ExtendableEventInit_$Overlay {
 /** @return {ExtendableEventInit} */
 static m_create__() {
  ExtendableEventInit_$Overlay.$clinit();
  return /**@type {ExtendableEventInit}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  ExtendableEventInit_$Overlay.$clinit = () =>{};
  ExtendableEventInit_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = ExtendableEventInit_$Overlay; 
//# sourceMappingURL=ExtendableEventInit$$Overlay.js.map
