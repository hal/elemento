goog.module('elemental2.dom.ConstrainDOMStringParameters.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let GetExactUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.ConstrainDOMStringParameters.GetExactUnionType.$Overlay$impl');
let GetIdealUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.ConstrainDOMStringParameters.GetIdealUnionType.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class ConstrainDOMStringParameters_$Overlay {
 /** @return {ConstrainDOMStringParameters} */
 static m_create__() {
  ConstrainDOMStringParameters_$Overlay.$clinit();
  return /**@type {ConstrainDOMStringParameters}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static m_setExact__$devirt__elemental2_dom_ConstrainDOMStringParameters__elemental2_core_JsArray(/** !ConstrainDOMStringParameters */ $thisArg, /** Array<?string> */ exact) {
  ConstrainDOMStringParameters_$Overlay.$clinit();
  $thisArg.exact = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(exact));
 }
 
 static m_setExact__$devirt__elemental2_dom_ConstrainDOMStringParameters__java_lang_String(/** !ConstrainDOMStringParameters */ $thisArg, /** ?string */ exact) {
  ConstrainDOMStringParameters_$Overlay.$clinit();
  $thisArg.exact = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(exact));
 }
 
 static m_setExact__$devirt__elemental2_dom_ConstrainDOMStringParameters__arrayOf_java_lang_String(/** !ConstrainDOMStringParameters */ $thisArg, /** Array<?string> */ exact) {
  ConstrainDOMStringParameters_$Overlay.$clinit();
  ConstrainDOMStringParameters_$Overlay.m_setExact__$devirt__elemental2_dom_ConstrainDOMStringParameters__elemental2_core_JsArray($thisArg, /**@type {Array<?string>}*/ (Js.m_uncheckedCast__java_lang_Object(exact)));
 }
 
 static m_setIdeal__$devirt__elemental2_dom_ConstrainDOMStringParameters__elemental2_core_JsArray(/** !ConstrainDOMStringParameters */ $thisArg, /** Array<?string> */ ideal) {
  ConstrainDOMStringParameters_$Overlay.$clinit();
  $thisArg.ideal = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(ideal));
 }
 
 static m_setIdeal__$devirt__elemental2_dom_ConstrainDOMStringParameters__java_lang_String(/** !ConstrainDOMStringParameters */ $thisArg, /** ?string */ ideal) {
  ConstrainDOMStringParameters_$Overlay.$clinit();
  $thisArg.ideal = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(ideal));
 }
 
 static m_setIdeal__$devirt__elemental2_dom_ConstrainDOMStringParameters__arrayOf_java_lang_String(/** !ConstrainDOMStringParameters */ $thisArg, /** Array<?string> */ ideal) {
  ConstrainDOMStringParameters_$Overlay.$clinit();
  ConstrainDOMStringParameters_$Overlay.m_setIdeal__$devirt__elemental2_dom_ConstrainDOMStringParameters__elemental2_core_JsArray($thisArg, /**@type {Array<?string>}*/ (Js.m_uncheckedCast__java_lang_Object(ideal)));
 }
 
 static $clinit() {
  ConstrainDOMStringParameters_$Overlay.$clinit = () =>{};
  ConstrainDOMStringParameters_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = ConstrainDOMStringParameters_$Overlay; 
//# sourceMappingURL=ConstrainDOMStringParameters$$Overlay.js.map
