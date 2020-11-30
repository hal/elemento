goog.module('elemental2.dom.TrustTokenAttributeType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class TrustTokenAttributeType_$Overlay {
 /** @return {TrustTokenAttributeType} */
 static m_create__() {
  TrustTokenAttributeType_$Overlay.$clinit();
  return /**@type {TrustTokenAttributeType}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static m_setAdditionalSignedHeaders__$devirt__elemental2_dom_TrustTokenAttributeType__arrayOf_java_lang_String(/** !TrustTokenAttributeType */ $thisArg, /** Array<?string> */ additionalSignedHeaders) {
  TrustTokenAttributeType_$Overlay.$clinit();
  $thisArg.additionalSignedHeaders = /**@type {Array<?string>}*/ (Js.m_uncheckedCast__java_lang_Object(additionalSignedHeaders));
 }
 
 static $clinit() {
  TrustTokenAttributeType_$Overlay.$clinit = () =>{};
  TrustTokenAttributeType_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = TrustTokenAttributeType_$Overlay; 
//# sourceMappingURL=TrustTokenAttributeType$$Overlay.js.map
