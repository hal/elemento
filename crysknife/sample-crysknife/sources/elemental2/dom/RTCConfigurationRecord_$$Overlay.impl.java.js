goog.module('elemental2.dom.RTCConfigurationRecord_.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let GetIceServersArrayUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.RTCConfigurationRecord_.GetIceServersArrayUnionType.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class RTCConfigurationRecord___$Overlay {
 /** @return {RTCConfigurationRecord_} */
 static m_create__() {
  RTCConfigurationRecord___$Overlay.$clinit();
  return /**@type {RTCConfigurationRecord_}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static m_setIceServers__$devirt__elemental2_dom_RTCConfigurationRecord___arrayOf_elemental2_dom_RTCConfigurationRecord__GetIceServersArrayUnionType(/** !RTCConfigurationRecord_ */ $thisArg, /** Array<?> */ iceServers) {
  RTCConfigurationRecord___$Overlay.$clinit();
  $thisArg.iceServers = /**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(iceServers));
 }
 
 static $clinit() {
  RTCConfigurationRecord___$Overlay.$clinit = () =>{};
  RTCConfigurationRecord___$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = RTCConfigurationRecord___$Overlay; 
//# sourceMappingURL=RTCConfigurationRecord_$$Overlay.js.map
