goog.module('elemental2.dom.MutationObserver.MutationObserverCallbackFn.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let MutationObserver_$Overlay = goog.forwardDeclare('elemental2.dom.MutationObserver.$Overlay$impl');
let MutationRecord_$Overlay = goog.forwardDeclare('elemental2.dom.MutationRecord.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class MutationObserverCallbackFn_$Overlay {
 /** @return {*} */
 static m_onInvoke__$devirt__elemental2_dom_MutationObserver_MutationObserverCallbackFn__arrayOf_elemental2_dom_MutationRecord__elemental2_dom_MutationObserver(/** function(Array<MutationRecord>, MutationObserver):* */ $thisArg, /** Array<MutationRecord> */ p0, /** MutationObserver */ p1) {
  MutationObserverCallbackFn_$Overlay.$clinit();
  return $thisArg(/**@type {Array<MutationRecord>}*/ (Js.m_uncheckedCast__java_lang_Object(p0)), p1);
 }
 
 static $clinit() {
  MutationObserverCallbackFn_$Overlay.$clinit = () =>{};
  MutationObserverCallbackFn_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}

exports = MutationObserverCallbackFn_$Overlay; 
//# sourceMappingURL=MutationObserver$MutationObserverCallbackFn$$Overlay.js.map
