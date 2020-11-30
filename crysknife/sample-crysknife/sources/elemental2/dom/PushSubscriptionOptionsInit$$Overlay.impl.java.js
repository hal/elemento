goog.module('elemental2.dom.PushSubscriptionOptionsInit.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let ArrayBuffer_$Overlay = goog.forwardDeclare('elemental2.core.ArrayBuffer.$Overlay$impl');
let ArrayBufferView_$Overlay = goog.forwardDeclare('elemental2.core.ArrayBufferView.$Overlay$impl');
let GetApplicationServerKeyUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.PushSubscriptionOptionsInit.GetApplicationServerKeyUnionType.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class PushSubscriptionOptionsInit_$Overlay {
 /** @return {PushSubscriptionOptionsInit} */
 static m_create__() {
  PushSubscriptionOptionsInit_$Overlay.$clinit();
  return /**@type {PushSubscriptionOptionsInit}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static m_setApplicationServerKey__$devirt__elemental2_dom_PushSubscriptionOptionsInit__elemental2_core_ArrayBuffer(/** !PushSubscriptionOptionsInit */ $thisArg, /** ArrayBuffer */ applicationServerKey) {
  PushSubscriptionOptionsInit_$Overlay.$clinit();
  $thisArg.applicationServerKey = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(applicationServerKey));
 }
 
 static m_setApplicationServerKey__$devirt__elemental2_dom_PushSubscriptionOptionsInit__elemental2_core_ArrayBufferView(/** !PushSubscriptionOptionsInit */ $thisArg, /** ArrayBufferView */ applicationServerKey) {
  PushSubscriptionOptionsInit_$Overlay.$clinit();
  $thisArg.applicationServerKey = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(applicationServerKey));
 }
 
 static m_setApplicationServerKey__$devirt__elemental2_dom_PushSubscriptionOptionsInit__java_lang_String(/** !PushSubscriptionOptionsInit */ $thisArg, /** ?string */ applicationServerKey) {
  PushSubscriptionOptionsInit_$Overlay.$clinit();
  $thisArg.applicationServerKey = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(applicationServerKey));
 }
 
 static $clinit() {
  PushSubscriptionOptionsInit_$Overlay.$clinit = () =>{};
  PushSubscriptionOptionsInit_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = PushSubscriptionOptionsInit_$Overlay; 
//# sourceMappingURL=PushSubscriptionOptionsInit$$Overlay.js.map
