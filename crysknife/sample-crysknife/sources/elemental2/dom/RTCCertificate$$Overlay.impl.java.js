goog.module('elemental2.dom.RTCCertificate.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class RTCCertificate_$Overlay {
 /** @return {RTCCertificate} */
 static m_create__() {
  RTCCertificate_$Overlay.$clinit();
  return /**@type {RTCCertificate}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  RTCCertificate_$Overlay.$clinit = () =>{};
  RTCCertificate_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = RTCCertificate_$Overlay; 
//# sourceMappingURL=RTCCertificate$$Overlay.js.map
