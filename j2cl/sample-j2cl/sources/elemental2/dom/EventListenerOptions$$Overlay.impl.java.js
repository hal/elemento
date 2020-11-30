goog.module('elemental2.dom.EventListenerOptions.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class EventListenerOptions_$Overlay {
 /** @return {EventListenerOptions} */
 static m_create__() {
  EventListenerOptions_$Overlay.$clinit();
  return /**@type {EventListenerOptions}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  EventListenerOptions_$Overlay.$clinit = () =>{};
  EventListenerOptions_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = EventListenerOptions_$Overlay; 
//# sourceMappingURL=EventListenerOptions$$Overlay.js.map
