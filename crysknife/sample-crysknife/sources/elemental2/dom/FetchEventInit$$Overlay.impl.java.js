goog.module('elemental2.dom.FetchEventInit.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class FetchEventInit_$Overlay {
 /** @return {FetchEventInit} */
 static m_create__() {
  FetchEventInit_$Overlay.$clinit();
  return /**@type {FetchEventInit}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  FetchEventInit_$Overlay.$clinit = () =>{};
  FetchEventInit_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = FetchEventInit_$Overlay; 
//# sourceMappingURL=FetchEventInit$$Overlay.js.map
