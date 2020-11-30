goog.module('elemental2.dom.NavigationPreloadState.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class NavigationPreloadState_$Overlay {
 /** @return {NavigationPreloadState} */
 static m_create__() {
  NavigationPreloadState_$Overlay.$clinit();
  return /**@type {NavigationPreloadState}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  NavigationPreloadState_$Overlay.$clinit = () =>{};
  NavigationPreloadState_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = NavigationPreloadState_$Overlay; 
//# sourceMappingURL=NavigationPreloadState$$Overlay.js.map
