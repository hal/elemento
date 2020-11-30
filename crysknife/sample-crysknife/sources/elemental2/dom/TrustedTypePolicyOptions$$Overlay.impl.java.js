goog.module('elemental2.dom.TrustedTypePolicyOptions.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class TrustedTypePolicyOptions_$Overlay {
 /** @return {TrustedTypePolicyOptions} */
 static m_create__() {
  TrustedTypePolicyOptions_$Overlay.$clinit();
  return /**@type {TrustedTypePolicyOptions}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  TrustedTypePolicyOptions_$Overlay.$clinit = () =>{};
  TrustedTypePolicyOptions_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = TrustedTypePolicyOptions_$Overlay; 
//# sourceMappingURL=TrustedTypePolicyOptions$$Overlay.js.map
