goog.module('elemental2.dom.ReadableStreamSource.PullFn.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let ReadableByteStreamController_$Overlay = goog.forwardDeclare('elemental2.dom.ReadableByteStreamController.$Overlay$impl');
let ReadableStreamDefaultController_$Overlay = goog.forwardDeclare('elemental2.dom.ReadableStreamDefaultController.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.ReadableStreamSource.PullFn.P0UnionType.$Overlay$impl');
let IThenable_$Overlay = goog.forwardDeclare('elemental2.promise.IThenable.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class PullFn_$Overlay {
 /** @template VALUE @return {IThenable<*>} */
 static m_onInvoke__$devirt__elemental2_dom_ReadableStreamSource_PullFn__elemental2_dom_ReadableByteStreamController(/** function(?):IThenable<*> */ $thisArg, /** ReadableByteStreamController */ p0) {
  PullFn_$Overlay.$clinit();
  return $thisArg(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(p0)));
 }
 /** @template VALUE @return {IThenable<*>} */
 static m_onInvoke__$devirt__elemental2_dom_ReadableStreamSource_PullFn__elemental2_dom_ReadableStreamDefaultController(/** function(?):IThenable<*> */ $thisArg, /** ReadableStreamDefaultController<VALUE> */ p0) {
  PullFn_$Overlay.$clinit();
  return $thisArg(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(p0)));
 }
 
 static $clinit() {
  PullFn_$Overlay.$clinit = () =>{};
  PullFn_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}

exports = PullFn_$Overlay; 
//# sourceMappingURL=ReadableStreamSource$PullFn$$Overlay.js.map
