goog.module('elemental2.dom.ServiceWorkerClient.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let Transferable_$Overlay = goog.forwardDeclare('elemental2.core.Transferable.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class ServiceWorkerClient_$Overlay {
 
 static m_postMessage__$devirt__elemental2_dom_ServiceWorkerClient__java_lang_Object__arrayOf_elemental2_core_Transferable(/** !ServiceWorkerClient */ $thisArg, /** * */ message, /** Array<Transferable> */ transfer) {
  ServiceWorkerClient_$Overlay.$clinit();
  $thisArg.postMessage(message, /**@type {Array<Transferable>}*/ (Js.m_uncheckedCast__java_lang_Object(transfer)));
 }
 
 static $clinit() {
  ServiceWorkerClient_$Overlay.$clinit = () =>{};
  ServiceWorkerClient_$Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ServiceWorkerClient;
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}
$Util.$setClassMetadata(ServiceWorkerClient_$Overlay, 'ServiceWorkerClient');

exports = ServiceWorkerClient_$Overlay; 
//# sourceMappingURL=ServiceWorkerClient$$Overlay.js.map
