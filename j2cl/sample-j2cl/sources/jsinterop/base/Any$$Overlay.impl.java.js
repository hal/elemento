goog.module('jsinterop.base.Any.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsArrayLike_$Overlay = goog.forwardDeclare('jsinterop.base.JsArrayLike.$Overlay$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Long = goog.forwardDeclare('nativebootstrap.Long$impl');

class Any_$Overlay {
 /** @return {Object<string, *>} */
 static m_asPropertyMap__$devirt__jsinterop_base_Any(/** !* */ $thisArg) {
  Any_$Overlay.$clinit();
  return Js.m_asPropertyMap__java_lang_Object($thisArg);
 }
 /** @return {IArrayLike<*>} */
 static m_asArrayLike__$devirt__jsinterop_base_Any(/** !* */ $thisArg) {
  Any_$Overlay.$clinit();
  return Js.m_asArrayLike__java_lang_Object($thisArg);
 }
 /** @return {Array<*>} */
 static m_asArray__$devirt__jsinterop_base_Any(/** !* */ $thisArg) {
  Any_$Overlay.$clinit();
  return Js.m_asArray__java_lang_Object($thisArg);
 }
 /** @return {?string} */
 static m_asString__$devirt__jsinterop_base_Any(/** !* */ $thisArg) {
  Any_$Overlay.$clinit();
  return Js.m_asString__java_lang_Object($thisArg);
 }
 /** @return {boolean} */
 static m_asBoolean__$devirt__jsinterop_base_Any(/** !* */ $thisArg) {
  Any_$Overlay.$clinit();
  return Js.m_asBoolean__java_lang_Object($thisArg);
 }
 /** @return {number} */
 static m_asDouble__$devirt__jsinterop_base_Any(/** !* */ $thisArg) {
  Any_$Overlay.$clinit();
  return Js.m_asDouble__java_lang_Object($thisArg);
 }
 /** @return {number} */
 static m_asFloat__$devirt__jsinterop_base_Any(/** !* */ $thisArg) {
  Any_$Overlay.$clinit();
  return Js.m_asFloat__java_lang_Object($thisArg);
 }
 /** @return {!$Long} */
 static m_asLong__$devirt__jsinterop_base_Any(/** !* */ $thisArg) {
  Any_$Overlay.$clinit();
  return Js.m_asLong__java_lang_Object($thisArg);
 }
 /** @return {number} */
 static m_asInt__$devirt__jsinterop_base_Any(/** !* */ $thisArg) {
  Any_$Overlay.$clinit();
  return Js.m_asInt__java_lang_Object($thisArg);
 }
 /** @return {number} */
 static m_asShort__$devirt__jsinterop_base_Any(/** !* */ $thisArg) {
  Any_$Overlay.$clinit();
  return Js.m_asShort__java_lang_Object($thisArg);
 }
 /** @return {number} */
 static m_asChar__$devirt__jsinterop_base_Any(/** !* */ $thisArg) {
  Any_$Overlay.$clinit();
  return Js.m_asChar__java_lang_Object($thisArg);
 }
 /** @return {number} */
 static m_asByte__$devirt__jsinterop_base_Any(/** !* */ $thisArg) {
  Any_$Overlay.$clinit();
  return Js.m_asByte__java_lang_Object($thisArg);
 }
 /** @template T @return {T} */
 static m_cast__$devirt__jsinterop_base_Any(/** !* */ $thisArg) {
  Any_$Overlay.$clinit();
  return /**@type {T}*/ ($thisArg);
 }
 /** @template T @return {T} */
 static m_uncheckedCast__$devirt__jsinterop_base_Any(/** !* */ $thisArg) {
  Any_$Overlay.$clinit();
  return /**@type {T}*/ ($thisArg);
 }
 
 static $clinit() {
  Any_$Overlay.$clinit = () =>{};
  Any_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}

exports = Any_$Overlay; 
//# sourceMappingURL=Any$$Overlay.js.map
