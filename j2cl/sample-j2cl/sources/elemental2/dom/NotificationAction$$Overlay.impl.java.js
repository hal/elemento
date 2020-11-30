goog.module('elemental2.dom.NotificationAction.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class NotificationAction_$Overlay {
 /** @return {NotificationAction} */
 static m_create__() {
  NotificationAction_$Overlay.$clinit();
  return /**@type {NotificationAction}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  NotificationAction_$Overlay.$clinit = () =>{};
  NotificationAction_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = NotificationAction_$Overlay; 
//# sourceMappingURL=NotificationAction$$Overlay.js.map
