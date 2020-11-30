goog.module('elemental2.dom.EventSourceInit.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class EventSourceInit_$Overlay {
 /** @return {EventSourceInit} */
 static m_create__() {
  EventSourceInit_$Overlay.$clinit();
  return /**@type {EventSourceInit}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  EventSourceInit_$Overlay.$clinit = () =>{};
  EventSourceInit_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = EventSourceInit_$Overlay; 
//# sourceMappingURL=EventSourceInit$$Overlay.js.map
