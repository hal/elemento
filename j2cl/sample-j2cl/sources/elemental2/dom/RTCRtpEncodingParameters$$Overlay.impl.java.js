goog.module('elemental2.dom.RTCRtpEncodingParameters.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let GetRidUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.RTCRtpEncodingParameters.GetRidUnionType.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class RTCRtpEncodingParameters_$Overlay {
 /** @return {RTCRtpEncodingParameters} */
 static m_create__() {
  RTCRtpEncodingParameters_$Overlay.$clinit();
  return /**@type {RTCRtpEncodingParameters}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static m_setRid__$devirt__elemental2_dom_RTCRtpEncodingParameters__java_lang_String(/** !RTCRtpEncodingParameters */ $thisArg, /** ?string */ rid) {
  RTCRtpEncodingParameters_$Overlay.$clinit();
  $thisArg.rid = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(rid));
 }
 
 static m_setRid__$devirt__elemental2_dom_RTCRtpEncodingParameters__double(/** !RTCRtpEncodingParameters */ $thisArg, /** number */ rid) {
  RTCRtpEncodingParameters_$Overlay.$clinit();
  $thisArg.rid = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(rid));
 }
 
 static $clinit() {
  RTCRtpEncodingParameters_$Overlay.$clinit = () =>{};
  RTCRtpEncodingParameters_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = RTCRtpEncodingParameters_$Overlay; 
//# sourceMappingURL=RTCRtpEncodingParameters$$Overlay.js.map
