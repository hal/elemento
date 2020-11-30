goog.module('elemental2.dom.GeolocationPositionOptions.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class GeolocationPositionOptions_$Overlay {
 /** @return {GeolocationPositionOptions} */
 static m_create__() {
  GeolocationPositionOptions_$Overlay.$clinit();
  return /**@type {GeolocationPositionOptions}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  GeolocationPositionOptions_$Overlay.$clinit = () =>{};
  GeolocationPositionOptions_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = GeolocationPositionOptions_$Overlay; 
//# sourceMappingURL=GeolocationPositionOptions$$Overlay.js.map
