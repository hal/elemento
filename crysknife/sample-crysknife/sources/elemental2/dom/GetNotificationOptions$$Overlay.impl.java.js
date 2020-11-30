goog.module('elemental2.dom.GetNotificationOptions.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class GetNotificationOptions_$Overlay {
 /** @return {GetNotificationOptions} */
 static m_create__() {
  GetNotificationOptions_$Overlay.$clinit();
  return /**@type {GetNotificationOptions}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  GetNotificationOptions_$Overlay.$clinit = () =>{};
  GetNotificationOptions_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = GetNotificationOptions_$Overlay; 
//# sourceMappingURL=GetNotificationOptions$$Overlay.js.map
