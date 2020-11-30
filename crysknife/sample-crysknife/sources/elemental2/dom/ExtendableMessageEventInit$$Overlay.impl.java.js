goog.module('elemental2.dom.ExtendableMessageEventInit.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let GetSourceUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.ExtendableMessageEventInit.GetSourceUnionType.$Overlay$impl');
let MessagePort_$Overlay = goog.forwardDeclare('elemental2.dom.MessagePort.$Overlay$impl');
let ServiceWorker_$Overlay = goog.forwardDeclare('elemental2.dom.ServiceWorker.$Overlay$impl');
let ServiceWorkerClient_$Overlay = goog.forwardDeclare('elemental2.dom.ServiceWorkerClient.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class ExtendableMessageEventInit_$Overlay {
 /** @return {ExtendableMessageEventInit} */
 static m_create__() {
  ExtendableMessageEventInit_$Overlay.$clinit();
  return /**@type {ExtendableMessageEventInit}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 /** @template T */
 static m_setPorts__$devirt__elemental2_dom_ExtendableMessageEventInit__arrayOf_elemental2_dom_MessagePort(/** !ExtendableMessageEventInit<T> */ $thisArg, /** Array<MessagePort> */ ports) {
  ExtendableMessageEventInit_$Overlay.$clinit();
  $thisArg.ports = /**@type {Array<MessagePort>}*/ (Js.m_uncheckedCast__java_lang_Object(ports));
 }
 /** @template T */
 static m_setSource__$devirt__elemental2_dom_ExtendableMessageEventInit__elemental2_dom_MessagePort(/** !ExtendableMessageEventInit<T> */ $thisArg, /** MessagePort */ source) {
  ExtendableMessageEventInit_$Overlay.$clinit();
  $thisArg.source = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(source));
 }
 /** @template T */
 static m_setSource__$devirt__elemental2_dom_ExtendableMessageEventInit__elemental2_dom_ServiceWorker(/** !ExtendableMessageEventInit<T> */ $thisArg, /** ServiceWorker */ source) {
  ExtendableMessageEventInit_$Overlay.$clinit();
  $thisArg.source = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(source));
 }
 /** @template T */
 static m_setSource__$devirt__elemental2_dom_ExtendableMessageEventInit__elemental2_dom_ServiceWorkerClient(/** !ExtendableMessageEventInit<T> */ $thisArg, /** ServiceWorkerClient */ source) {
  ExtendableMessageEventInit_$Overlay.$clinit();
  $thisArg.source = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(source));
 }
 
 static $clinit() {
  ExtendableMessageEventInit_$Overlay.$clinit = () =>{};
  ExtendableMessageEventInit_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = ExtendableMessageEventInit_$Overlay; 
//# sourceMappingURL=ExtendableMessageEventInit$$Overlay.js.map
