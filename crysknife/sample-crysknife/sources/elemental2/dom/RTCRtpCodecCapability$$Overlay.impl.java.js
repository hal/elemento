goog.module('elemental2.dom.RTCRtpCodecCapability.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class RTCRtpCodecCapability_$Overlay {
 /** @return {RTCRtpCodecCapability} */
 static m_create__() {
  RTCRtpCodecCapability_$Overlay.$clinit();
  return /**@type {RTCRtpCodecCapability}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  RTCRtpCodecCapability_$Overlay.$clinit = () =>{};
  RTCRtpCodecCapability_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = RTCRtpCodecCapability_$Overlay; 
//# sourceMappingURL=RTCRtpCodecCapability$$Overlay.js.map
