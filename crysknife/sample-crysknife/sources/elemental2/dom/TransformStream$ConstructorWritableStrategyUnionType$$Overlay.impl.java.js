goog.module('elemental2.dom.TransformStream.ConstructorWritableStrategyUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.ByteLengthQueuingStrategy.$Overlay$impl');
let CountQueuingStrategy_$Overlay = goog.forwardDeclare('elemental2.dom.CountQueuingStrategy.$Overlay$impl');
let TransformStreamWritableStrategyType_$Overlay = goog.forwardDeclare('elemental2.dom.TransformStream.TransformStreamWritableStrategyType.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ConstructorWritableStrategyUnionType_$Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  ConstructorWritableStrategyUnionType_$Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {ByteLengthQueuingStrategy} */
 static m_asByteLengthQueuingStrategy__$devirt__elemental2_dom_TransformStream_ConstructorWritableStrategyUnionType(/** ? */ $thisArg) {
  ConstructorWritableStrategyUnionType_$Overlay.$clinit();
  return /**@type {ByteLengthQueuingStrategy}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), $Overlay));
 }
 /** @return {CountQueuingStrategy} */
 static m_asCountQueuingStrategy__$devirt__elemental2_dom_TransformStream_ConstructorWritableStrategyUnionType(/** ? */ $thisArg) {
  ConstructorWritableStrategyUnionType_$Overlay.$clinit();
  return /**@type {CountQueuingStrategy}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), CountQueuingStrategy_$Overlay));
 }
 /** @return {?} */
 static m_asTransformStreamWritableStrategyType__$devirt__elemental2_dom_TransformStream_ConstructorWritableStrategyUnionType(/** ? */ $thisArg) {
  ConstructorWritableStrategyUnionType_$Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object($thisArg));
 }
 /** @return {boolean} */
 static m_isByteLengthQueuingStrategy__$devirt__elemental2_dom_TransformStream_ConstructorWritableStrategyUnionType(/** ? */ $thisArg) {
  ConstructorWritableStrategyUnionType_$Overlay.$clinit();
  return $Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isCountQueuingStrategy__$devirt__elemental2_dom_TransformStream_ConstructorWritableStrategyUnionType(/** ? */ $thisArg) {
  ConstructorWritableStrategyUnionType_$Overlay.$clinit();
  return CountQueuingStrategy_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  ConstructorWritableStrategyUnionType_$Overlay.$clinit = () =>{};
  ConstructorWritableStrategyUnionType_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.ByteLengthQueuingStrategy.$Overlay$impl');
  CountQueuingStrategy_$Overlay = goog.module.get('elemental2.dom.CountQueuingStrategy.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}

exports = ConstructorWritableStrategyUnionType_$Overlay; 
//# sourceMappingURL=TransformStream$ConstructorWritableStrategyUnionType$$Overlay.js.map
