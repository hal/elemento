goog.module('elemental2.dom.CacheQueryOptions.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class CacheQueryOptions_$Overlay {
 /** @return {CacheQueryOptions} */
 static m_create__() {
  CacheQueryOptions_$Overlay.$clinit();
  return /**@type {CacheQueryOptions}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  CacheQueryOptions_$Overlay.$clinit = () =>{};
  CacheQueryOptions_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = CacheQueryOptions_$Overlay; 
//# sourceMappingURL=CacheQueryOptions$$Overlay.js.map
