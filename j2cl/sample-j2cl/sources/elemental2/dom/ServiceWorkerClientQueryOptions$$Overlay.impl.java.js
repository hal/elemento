goog.module('elemental2.dom.ServiceWorkerClientQueryOptions.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class ServiceWorkerClientQueryOptions_$Overlay {
 /** @return {ServiceWorkerClientQueryOptions} */
 static m_create__() {
  ServiceWorkerClientQueryOptions_$Overlay.$clinit();
  return /**@type {ServiceWorkerClientQueryOptions}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  ServiceWorkerClientQueryOptions_$Overlay.$clinit = () =>{};
  ServiceWorkerClientQueryOptions_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = ServiceWorkerClientQueryOptions_$Overlay; 
//# sourceMappingURL=ServiceWorkerClientQueryOptions$$Overlay.js.map
