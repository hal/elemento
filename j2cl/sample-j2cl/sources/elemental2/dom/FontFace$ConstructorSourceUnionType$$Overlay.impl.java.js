goog.module('elemental2.dom.FontFace.ConstructorSourceUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.core.ArrayBuffer.$Overlay$impl');
let ArrayBufferView_$Overlay = goog.forwardDeclare('elemental2.core.ArrayBufferView.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ConstructorSourceUnionType_$Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  ConstructorSourceUnionType_$Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {ArrayBuffer} */
 static m_asArrayBuffer__$devirt__elemental2_dom_FontFace_ConstructorSourceUnionType(/** ? */ $thisArg) {
  ConstructorSourceUnionType_$Overlay.$clinit();
  return /**@type {ArrayBuffer}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), $Overlay));
 }
 /** @return {ArrayBufferView} */
 static m_asArrayBufferView__$devirt__elemental2_dom_FontFace_ConstructorSourceUnionType(/** ? */ $thisArg) {
  ConstructorSourceUnionType_$Overlay.$clinit();
  return /**@type {ArrayBufferView}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), ArrayBufferView_$Overlay));
 }
 /** @return {?string} */
 static m_asString__$devirt__elemental2_dom_FontFace_ConstructorSourceUnionType(/** ? */ $thisArg) {
  ConstructorSourceUnionType_$Overlay.$clinit();
  return Js.m_asString__java_lang_Object($thisArg);
 }
 /** @return {boolean} */
 static m_isArrayBuffer__$devirt__elemental2_dom_FontFace_ConstructorSourceUnionType(/** ? */ $thisArg) {
  ConstructorSourceUnionType_$Overlay.$clinit();
  return $Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isArrayBufferView__$devirt__elemental2_dom_FontFace_ConstructorSourceUnionType(/** ? */ $thisArg) {
  ConstructorSourceUnionType_$Overlay.$clinit();
  return ArrayBufferView_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isString__$devirt__elemental2_dom_FontFace_ConstructorSourceUnionType(/** ? */ $thisArg) {
  ConstructorSourceUnionType_$Overlay.$clinit();
  return j_l_String.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  ConstructorSourceUnionType_$Overlay.$clinit = () =>{};
  ConstructorSourceUnionType_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.core.ArrayBuffer.$Overlay$impl');
  ArrayBufferView_$Overlay = goog.module.get('elemental2.core.ArrayBufferView.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}

exports = ConstructorSourceUnionType_$Overlay; 
//# sourceMappingURL=FontFace$ConstructorSourceUnionType$$Overlay.js.map
