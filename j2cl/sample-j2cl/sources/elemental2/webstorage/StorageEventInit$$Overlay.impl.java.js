goog.module('elemental2.webstorage.StorageEventInit.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class StorageEventInit_$Overlay {
 /** @return {StorageEventInit} */
 static m_create__() {
  StorageEventInit_$Overlay.$clinit();
  return /**@type {StorageEventInit}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  StorageEventInit_$Overlay.$clinit = () =>{};
  StorageEventInit_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = StorageEventInit_$Overlay; 
//# sourceMappingURL=StorageEventInit$$Overlay.js.map
