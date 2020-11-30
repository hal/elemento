goog.module('elemental2.dom.EventTarget.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let AddEventListenerOptions_$Overlay = goog.forwardDeclare('elemental2.dom.AddEventListenerOptions.$Overlay$impl');
let EventListener_$Overlay = goog.forwardDeclare('elemental2.dom.EventListener.$Overlay$impl');
let EventListenerOptions_$Overlay = goog.forwardDeclare('elemental2.dom.EventListenerOptions.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.EventTarget.AddEventListenerOptionsUnionType.$Overlay$impl');
let RemoveEventListenerOptionsUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.EventTarget.RemoveEventListenerOptionsUnionType.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class EventTarget_$Overlay {
 
 static m_addEventListener__$devirt__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__elemental2_dom_AddEventListenerOptions(/** !EventTarget */ $thisArg, /** ?string */ type, /** EventListener */ listener, /** AddEventListenerOptions */ options) {
  EventTarget_$Overlay.$clinit();
  $thisArg.addEventListener(type, listener, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(options)));
 }
 
 static m_addEventListener__$devirt__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__boolean(/** !EventTarget */ $thisArg, /** ?string */ type, /** EventListener */ listener, /** boolean */ options) {
  EventTarget_$Overlay.$clinit();
  $thisArg.addEventListener(type, listener, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(options)));
 }
 
 static m_removeEventListener__$devirt__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__elemental2_dom_EventListenerOptions(/** !EventTarget */ $thisArg, /** ?string */ type, /** EventListener */ listener, /** EventListenerOptions */ options) {
  EventTarget_$Overlay.$clinit();
  $thisArg.removeEventListener(type, listener, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(options)));
 }
 
 static m_removeEventListener__$devirt__elemental2_dom_EventTarget__java_lang_String__elemental2_dom_EventListener__boolean(/** !EventTarget */ $thisArg, /** ?string */ type, /** EventListener */ listener, /** boolean */ options) {
  EventTarget_$Overlay.$clinit();
  $thisArg.removeEventListener(type, listener, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(options)));
 }
 
 static $clinit() {
  EventTarget_$Overlay.$clinit = () =>{};
  EventTarget_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}

exports = EventTarget_$Overlay; 
//# sourceMappingURL=EventTarget$$Overlay.js.map
