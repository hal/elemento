goog.module('elemental2.dom.RegistrationOptions.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class RegistrationOptions_$Overlay {
 /** @return {RegistrationOptions} */
 static m_create__() {
  RegistrationOptions_$Overlay.$clinit();
  return /**@type {RegistrationOptions}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  RegistrationOptions_$Overlay.$clinit = () =>{};
  RegistrationOptions_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = RegistrationOptions_$Overlay; 
//# sourceMappingURL=RegistrationOptions$$Overlay.js.map
