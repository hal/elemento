goog.module('elemental2.dom.RTCRtpCapabilities.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let RTCRtpCodecCapability_$Overlay = goog.forwardDeclare('elemental2.dom.RTCRtpCodecCapability.$Overlay$impl');
let RTCRtpHeaderExtensionCapability_$Overlay = goog.forwardDeclare('elemental2.dom.RTCRtpHeaderExtensionCapability.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class RTCRtpCapabilities_$Overlay {
 /** @return {RTCRtpCapabilities} */
 static m_create__() {
  RTCRtpCapabilities_$Overlay.$clinit();
  return /**@type {RTCRtpCapabilities}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static m_setCodecs__$devirt__elemental2_dom_RTCRtpCapabilities__arrayOf_elemental2_dom_RTCRtpCodecCapability(/** !RTCRtpCapabilities */ $thisArg, /** Array<RTCRtpCodecCapability> */ codecs) {
  RTCRtpCapabilities_$Overlay.$clinit();
  $thisArg.codecs = /**@type {Array<RTCRtpCodecCapability>}*/ (Js.m_uncheckedCast__java_lang_Object(codecs));
 }
 
 static m_setHeaderExtensions__$devirt__elemental2_dom_RTCRtpCapabilities__arrayOf_elemental2_dom_RTCRtpHeaderExtensionCapability(/** !RTCRtpCapabilities */ $thisArg, /** Array<RTCRtpHeaderExtensionCapability> */ headerExtensions) {
  RTCRtpCapabilities_$Overlay.$clinit();
  $thisArg.headerExtensions = /**@type {Array<RTCRtpHeaderExtensionCapability>}*/ (Js.m_uncheckedCast__java_lang_Object(headerExtensions));
 }
 
 static $clinit() {
  RTCRtpCapabilities_$Overlay.$clinit = () =>{};
  RTCRtpCapabilities_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = RTCRtpCapabilities_$Overlay; 
//# sourceMappingURL=RTCRtpCapabilities$$Overlay.js.map
