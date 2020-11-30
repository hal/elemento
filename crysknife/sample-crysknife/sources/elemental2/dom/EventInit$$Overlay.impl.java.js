goog.module('elemental2.dom.EventInit.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class EventInit_$Overlay {
 /** @return {EventInit} */
 static m_create__() {
  EventInit_$Overlay.$clinit();
  return /**@type {EventInit}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  EventInit_$Overlay.$clinit = () =>{};
  EventInit_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = EventInit_$Overlay; 
//# sourceMappingURL=EventInit$$Overlay.js.map
