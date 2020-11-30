goog.module('elemental2.dom.GeolocationCoordinates.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class GeolocationCoordinates_$Overlay {
 /** @return {GeolocationCoordinates} */
 static m_create__() {
  GeolocationCoordinates_$Overlay.$clinit();
  return /**@type {GeolocationCoordinates}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  GeolocationCoordinates_$Overlay.$clinit = () =>{};
  GeolocationCoordinates_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = GeolocationCoordinates_$Overlay; 
//# sourceMappingURL=GeolocationCoordinates$$Overlay.js.map
