goog.module('elemental2.dom.PushSubscriptionOptions.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class PushSubscriptionOptions_$Overlay {
 /** @return {PushSubscriptionOptions} */
 static m_create__() {
  PushSubscriptionOptions_$Overlay.$clinit();
  return /**@type {PushSubscriptionOptions}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  PushSubscriptionOptions_$Overlay.$clinit = () =>{};
  PushSubscriptionOptions_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = PushSubscriptionOptions_$Overlay; 
//# sourceMappingURL=PushSubscriptionOptions$$Overlay.js.map
