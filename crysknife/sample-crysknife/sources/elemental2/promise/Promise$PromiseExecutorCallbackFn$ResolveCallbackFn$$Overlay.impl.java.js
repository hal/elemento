goog.module('elemental2.promise.Promise.PromiseExecutorCallbackFn.ResolveCallbackFn.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let IThenable_$Overlay = goog.forwardDeclare('elemental2.promise.IThenable.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.promise.Promise.PromiseExecutorCallbackFn.ResolveCallbackFn.ResolveUnionType.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class ResolveCallbackFn_$Overlay {
 /** @template T */
 static m_onInvoke__$devirt__elemental2_promise_Promise_PromiseExecutorCallbackFn_ResolveCallbackFn__elemental2_promise_IThenable(/** function(?):void */ $thisArg, /** IThenable<T> */ value) {
  ResolveCallbackFn_$Overlay.$clinit();
  $thisArg(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(value)));
 }
 /** @template T */
 static m_onInvoke__$devirt__elemental2_promise_Promise_PromiseExecutorCallbackFn_ResolveCallbackFn__java_lang_Object(/** function(?):void */ $thisArg, /** T */ value) {
  ResolveCallbackFn_$Overlay.$clinit();
  $thisArg(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(value)));
 }
 
 static $clinit() {
  ResolveCallbackFn_$Overlay.$clinit = () =>{};
  ResolveCallbackFn_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}

exports = ResolveCallbackFn_$Overlay; 
//# sourceMappingURL=Promise$PromiseExecutorCallbackFn$ResolveCallbackFn$$Overlay.js.map
