goog.module('elemental2.dom.Document.RegisterOptionsType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class RegisterOptionsType_$Overlay {
 /** @return {?} */
 static m_create__() {
  RegisterOptionsType_$Overlay.$clinit();
  return /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  RegisterOptionsType_$Overlay.$clinit = () =>{};
  RegisterOptionsType_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = RegisterOptionsType_$Overlay; 
//# sourceMappingURL=Document$RegisterOptionsType$$Overlay.js.map
