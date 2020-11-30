goog.module('elemental2.dom.NotificationOptions.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let NotificationAction_$Overlay = goog.forwardDeclare('elemental2.dom.NotificationAction.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class NotificationOptions_$Overlay {
 /** @return {NotificationOptions} */
 static m_create__() {
  NotificationOptions_$Overlay.$clinit();
  return /**@type {NotificationOptions}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static m_setActions__$devirt__elemental2_dom_NotificationOptions__arrayOf_elemental2_dom_NotificationAction(/** !NotificationOptions */ $thisArg, /** Array<NotificationAction> */ actions) {
  NotificationOptions_$Overlay.$clinit();
  $thisArg.actions = /**@type {Array<NotificationAction>}*/ (Js.m_uncheckedCast__java_lang_Object(actions));
 }
 
 static m_setVibrate__$devirt__elemental2_dom_NotificationOptions__arrayOf_double(/** !NotificationOptions */ $thisArg, /** Array<number> */ vibrate) {
  NotificationOptions_$Overlay.$clinit();
  $thisArg.vibrate = /**@type {Array<?number>}*/ (Js.m_uncheckedCast__java_lang_Object(vibrate));
 }
 
 static $clinit() {
  NotificationOptions_$Overlay.$clinit = () =>{};
  NotificationOptions_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = NotificationOptions_$Overlay; 
//# sourceMappingURL=NotificationOptions$$Overlay.js.map
