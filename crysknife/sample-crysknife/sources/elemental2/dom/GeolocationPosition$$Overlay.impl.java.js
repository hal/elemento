goog.module('elemental2.dom.GeolocationPosition.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class GeolocationPosition_$Overlay {
 /** @return {GeolocationPosition} */
 static m_create__() {
  GeolocationPosition_$Overlay.$clinit();
  return /**@type {GeolocationPosition}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  GeolocationPosition_$Overlay.$clinit = () =>{};
  GeolocationPosition_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = GeolocationPosition_$Overlay; 
//# sourceMappingURL=GeolocationPosition$$Overlay.js.map
