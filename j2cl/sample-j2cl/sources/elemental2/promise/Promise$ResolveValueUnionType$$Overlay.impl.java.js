goog.module('elemental2.promise.Promise.ResolveValueUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.promise.IThenable.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class ResolveValueUnionType_$Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  ResolveValueUnionType_$Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @template V @return {IThenable<V>} */
 static m_asIThenable__$devirt__elemental2_promise_Promise_ResolveValueUnionType(/** ? */ $thisArg) {
  ResolveValueUnionType_$Overlay.$clinit();
  return /**@type {IThenable<V>}*/ (Js.m_cast__java_lang_Object($thisArg));
 }
 /** @template V @return {V} */
 static m_asV__$devirt__elemental2_promise_Promise_ResolveValueUnionType(/** ? */ $thisArg) {
  ResolveValueUnionType_$Overlay.$clinit();
  return Js.m_cast__java_lang_Object($thisArg);
 }
 
 static $clinit() {
  ResolveValueUnionType_$Overlay.$clinit = () =>{};
  ResolveValueUnionType_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}

exports = ResolveValueUnionType_$Overlay; 
//# sourceMappingURL=Promise$ResolveValueUnionType$$Overlay.js.map
