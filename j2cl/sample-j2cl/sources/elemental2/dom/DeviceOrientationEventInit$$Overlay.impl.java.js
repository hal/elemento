goog.module('elemental2.dom.DeviceOrientationEventInit.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class DeviceOrientationEventInit_$Overlay {
 /** @return {DeviceOrientationEventInit} */
 static m_create__() {
  DeviceOrientationEventInit_$Overlay.$clinit();
  return /**@type {DeviceOrientationEventInit}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  DeviceOrientationEventInit_$Overlay.$clinit = () =>{};
  DeviceOrientationEventInit_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = DeviceOrientationEventInit_$Overlay; 
//# sourceMappingURL=DeviceOrientationEventInit$$Overlay.js.map
