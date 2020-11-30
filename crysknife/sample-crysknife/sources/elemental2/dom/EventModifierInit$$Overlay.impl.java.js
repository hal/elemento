goog.module('elemental2.dom.EventModifierInit.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class EventModifierInit_$Overlay {
 /** @return {EventModifierInit} */
 static m_create__() {
  EventModifierInit_$Overlay.$clinit();
  return /**@type {EventModifierInit}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  EventModifierInit_$Overlay.$clinit = () =>{};
  EventModifierInit_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = EventModifierInit_$Overlay; 
//# sourceMappingURL=EventModifierInit$$Overlay.js.map
