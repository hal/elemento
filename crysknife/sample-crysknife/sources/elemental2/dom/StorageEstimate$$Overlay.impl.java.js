goog.module('elemental2.dom.StorageEstimate.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class StorageEstimate_$Overlay {
 /** @return {StorageEstimate} */
 static m_create__() {
  StorageEstimate_$Overlay.$clinit();
  return /**@type {StorageEstimate}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  StorageEstimate_$Overlay.$clinit = () =>{};
  StorageEstimate_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = StorageEstimate_$Overlay; 
//# sourceMappingURL=StorageEstimate$$Overlay.js.map
