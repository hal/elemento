goog.module('elemental2.dom.RTCIceCandidateInit.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class RTCIceCandidateInit_$Overlay {
 /** @return {RTCIceCandidateInit} */
 static m_create__() {
  RTCIceCandidateInit_$Overlay.$clinit();
  return /**@type {RTCIceCandidateInit}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  RTCIceCandidateInit_$Overlay.$clinit = () =>{};
  RTCIceCandidateInit_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = RTCIceCandidateInit_$Overlay; 
//# sourceMappingURL=RTCIceCandidateInit$$Overlay.js.map
