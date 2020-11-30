goog.module('elemental2.dom.AbortSignal.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class AbortSignal_$Overlay {
 /** @return {AbortSignal} */
 static m_create__() {
  AbortSignal_$Overlay.$clinit();
  return /**@type {AbortSignal}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  AbortSignal_$Overlay.$clinit = () =>{};
  AbortSignal_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = AbortSignal_$Overlay; 
//# sourceMappingURL=AbortSignal$$Overlay.js.map
