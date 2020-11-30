goog.module('elemental2.dom.ImageData.ConstructorDataOrWidthUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.core.Uint8ClampedArray.$Overlay$impl');
let Double = goog.forwardDeclare('java.lang.Double$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ConstructorDataOrWidthUnionType_$Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  ConstructorDataOrWidthUnionType_$Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {number} */
 static m_asDouble__$devirt__elemental2_dom_ImageData_ConstructorDataOrWidthUnionType(/** ? */ $thisArg) {
  ConstructorDataOrWidthUnionType_$Overlay.$clinit();
  return Js.m_asDouble__java_lang_Object($thisArg);
 }
 /** @return {Uint8ClampedArray} */
 static m_asUint8ClampedArray__$devirt__elemental2_dom_ImageData_ConstructorDataOrWidthUnionType(/** ? */ $thisArg) {
  ConstructorDataOrWidthUnionType_$Overlay.$clinit();
  return /**@type {Uint8ClampedArray}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), $Overlay));
 }
 /** @return {boolean} */
 static m_isDouble__$devirt__elemental2_dom_ImageData_ConstructorDataOrWidthUnionType(/** ? */ $thisArg) {
  ConstructorDataOrWidthUnionType_$Overlay.$clinit();
  return Double.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isUint8ClampedArray__$devirt__elemental2_dom_ImageData_ConstructorDataOrWidthUnionType(/** ? */ $thisArg) {
  ConstructorDataOrWidthUnionType_$Overlay.$clinit();
  return $Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  ConstructorDataOrWidthUnionType_$Overlay.$clinit = () =>{};
  ConstructorDataOrWidthUnionType_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.core.Uint8ClampedArray.$Overlay$impl');
  Double = goog.module.get('java.lang.Double$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}

exports = ConstructorDataOrWidthUnionType_$Overlay; 
//# sourceMappingURL=ImageData$ConstructorDataOrWidthUnionType$$Overlay.js.map
