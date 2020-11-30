goog.module('elemental2.dom.RTCRtpContributingSource.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let JsDate_$Overlay = goog.forwardDeclare('elemental2.core.JsDate.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.RTCRtpContributingSource.GetTimestampUnionType.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class RTCRtpContributingSource_$Overlay {
 
 static m_setTimestamp__$devirt__elemental2_dom_RTCRtpContributingSource__elemental2_core_JsDate(/** !RTCRtpContributingSource */ $thisArg, /** Date */ timestamp) {
  RTCRtpContributingSource_$Overlay.$clinit();
  $thisArg.timestamp = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(timestamp));
 }
 
 static m_setTimestamp__$devirt__elemental2_dom_RTCRtpContributingSource__double(/** !RTCRtpContributingSource */ $thisArg, /** number */ timestamp) {
  RTCRtpContributingSource_$Overlay.$clinit();
  $thisArg.timestamp = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(timestamp));
 }
 
 static $clinit() {
  RTCRtpContributingSource_$Overlay.$clinit = () =>{};
  RTCRtpContributingSource_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}

exports = RTCRtpContributingSource_$Overlay; 
//# sourceMappingURL=RTCRtpContributingSource$$Overlay.js.map
