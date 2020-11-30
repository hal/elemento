goog.module('elemental2.dom.RTCRemoteOutboundRtpStreamStats.GetRemoteTimestampUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.core.JsDate.$Overlay$impl');
let Double = goog.forwardDeclare('java.lang.Double$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class GetRemoteTimestampUnionType_$Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  GetRemoteTimestampUnionType_$Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {number} */
 static m_asDouble__$devirt__elemental2_dom_RTCRemoteOutboundRtpStreamStats_GetRemoteTimestampUnionType(/** ? */ $thisArg) {
  GetRemoteTimestampUnionType_$Overlay.$clinit();
  return Js.m_asDouble__java_lang_Object($thisArg);
 }
 /** @return {Date} */
 static m_asJsDate__$devirt__elemental2_dom_RTCRemoteOutboundRtpStreamStats_GetRemoteTimestampUnionType(/** ? */ $thisArg) {
  GetRemoteTimestampUnionType_$Overlay.$clinit();
  return /**@type {Date}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), $Overlay));
 }
 /** @return {boolean} */
 static m_isDouble__$devirt__elemental2_dom_RTCRemoteOutboundRtpStreamStats_GetRemoteTimestampUnionType(/** ? */ $thisArg) {
  GetRemoteTimestampUnionType_$Overlay.$clinit();
  return Double.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isJsDate__$devirt__elemental2_dom_RTCRemoteOutboundRtpStreamStats_GetRemoteTimestampUnionType(/** ? */ $thisArg) {
  GetRemoteTimestampUnionType_$Overlay.$clinit();
  return $Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  GetRemoteTimestampUnionType_$Overlay.$clinit = () =>{};
  GetRemoteTimestampUnionType_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.core.JsDate.$Overlay$impl');
  Double = goog.module.get('java.lang.Double$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}

exports = GetRemoteTimestampUnionType_$Overlay; 
//# sourceMappingURL=RTCRemoteOutboundRtpStreamStats$GetRemoteTimestampUnionType$$Overlay.js.map
