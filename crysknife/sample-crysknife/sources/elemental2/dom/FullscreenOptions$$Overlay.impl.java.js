goog.module('elemental2.dom.FullscreenOptions.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class FullscreenOptions_$Overlay {
 /** @return {FullscreenOptions} */
 static m_create__() {
  FullscreenOptions_$Overlay.$clinit();
  return /**@type {FullscreenOptions}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  FullscreenOptions_$Overlay.$clinit = () =>{};
  FullscreenOptions_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = FullscreenOptions_$Overlay; 
//# sourceMappingURL=FullscreenOptions$$Overlay.js.map
