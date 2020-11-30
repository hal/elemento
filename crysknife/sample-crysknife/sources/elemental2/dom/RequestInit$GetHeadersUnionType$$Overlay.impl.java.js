goog.module('elemental2.dom.RequestInit.GetHeadersUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.Headers.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class GetHeadersUnionType_$Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  GetHeadersUnionType_$Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {Headers} */
 static m_asHeaders__$devirt__elemental2_dom_RequestInit_GetHeadersUnionType(/** ? */ $thisArg) {
  GetHeadersUnionType_$Overlay.$clinit();
  return /**@type {Headers}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), $Overlay));
 }
 /** @return {Array<Array<?string>>} */
 static m_asJsArray__$devirt__elemental2_dom_RequestInit_GetHeadersUnionType(/** ? */ $thisArg) {
  GetHeadersUnionType_$Overlay.$clinit();
  return /**@type {Array<Array<?string>>}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), JsArray_$Overlay));
 }
 /** @return {Object<string, ?string>} */
 static m_asJsPropertyMap__$devirt__elemental2_dom_RequestInit_GetHeadersUnionType(/** ? */ $thisArg) {
  GetHeadersUnionType_$Overlay.$clinit();
  return /**@type {Object<string, ?string>}*/ (Js.m_cast__java_lang_Object($thisArg));
 }
 /** @return {boolean} */
 static m_isHeaders__$devirt__elemental2_dom_RequestInit_GetHeadersUnionType(/** ? */ $thisArg) {
  GetHeadersUnionType_$Overlay.$clinit();
  return $Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isJsArray__$devirt__elemental2_dom_RequestInit_GetHeadersUnionType(/** ? */ $thisArg) {
  GetHeadersUnionType_$Overlay.$clinit();
  return JsArray_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  GetHeadersUnionType_$Overlay.$clinit = () =>{};
  GetHeadersUnionType_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  JsArray_$Overlay = goog.module.get('elemental2.core.JsArray.$Overlay$impl');
  $Overlay = goog.module.get('elemental2.dom.Headers.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}

exports = GetHeadersUnionType_$Overlay; 
//# sourceMappingURL=RequestInit$GetHeadersUnionType$$Overlay.js.map
