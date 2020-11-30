goog.module('elemental2.dom.RTCRtpTransceiver.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let RTCRtpCodecCapability_$Overlay = goog.forwardDeclare('elemental2.dom.RTCRtpCodecCapability.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class RTCRtpTransceiver_$Overlay {
 /** @return {*} */
 static m_setCodecPreferences__$devirt__elemental2_dom_RTCRtpTransceiver__arrayOf_elemental2_dom_RTCRtpCodecCapability(/** !RTCRtpTransceiver */ $thisArg, /** Array<RTCRtpCodecCapability> */ codecs) {
  RTCRtpTransceiver_$Overlay.$clinit();
  return $thisArg.setCodecPreferences(/**@type {Array<RTCRtpCodecCapability>}*/ (Js.m_uncheckedCast__java_lang_Object(codecs)));
 }
 
 static $clinit() {
  RTCRtpTransceiver_$Overlay.$clinit = () =>{};
  RTCRtpTransceiver_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}

exports = RTCRtpTransceiver_$Overlay; 
//# sourceMappingURL=RTCRtpTransceiver$$Overlay.js.map
