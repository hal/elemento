goog.module('elemental2.dom.XMLHttpRequest.SendDataUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.core.ArrayBuffer.$Overlay$impl');
let ArrayBufferView_$Overlay = goog.forwardDeclare('elemental2.core.ArrayBufferView.$Overlay$impl');
let Blob_$Overlay = goog.forwardDeclare('elemental2.dom.Blob.$Overlay$impl');
let Document_$Overlay = goog.forwardDeclare('elemental2.dom.Document.$Overlay$impl');
let FormData_$Overlay = goog.forwardDeclare('elemental2.dom.FormData.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class SendDataUnionType_$Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  SendDataUnionType_$Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {ArrayBuffer} */
 static m_asArrayBuffer__$devirt__elemental2_dom_XMLHttpRequest_SendDataUnionType(/** ? */ $thisArg) {
  SendDataUnionType_$Overlay.$clinit();
  return /**@type {ArrayBuffer}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), $Overlay));
 }
 /** @return {ArrayBufferView} */
 static m_asArrayBufferView__$devirt__elemental2_dom_XMLHttpRequest_SendDataUnionType(/** ? */ $thisArg) {
  SendDataUnionType_$Overlay.$clinit();
  return /**@type {ArrayBufferView}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), ArrayBufferView_$Overlay));
 }
 /** @return {Blob} */
 static m_asBlob__$devirt__elemental2_dom_XMLHttpRequest_SendDataUnionType(/** ? */ $thisArg) {
  SendDataUnionType_$Overlay.$clinit();
  return /**@type {Blob}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), Blob_$Overlay));
 }
 /** @return {Document} */
 static m_asDocument__$devirt__elemental2_dom_XMLHttpRequest_SendDataUnionType(/** ? */ $thisArg) {
  SendDataUnionType_$Overlay.$clinit();
  return /**@type {Document}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), Document_$Overlay));
 }
 /** @return {FormData} */
 static m_asFormData__$devirt__elemental2_dom_XMLHttpRequest_SendDataUnionType(/** ? */ $thisArg) {
  SendDataUnionType_$Overlay.$clinit();
  return /**@type {FormData}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), FormData_$Overlay));
 }
 /** @return {?string} */
 static m_asString__$devirt__elemental2_dom_XMLHttpRequest_SendDataUnionType(/** ? */ $thisArg) {
  SendDataUnionType_$Overlay.$clinit();
  return Js.m_asString__java_lang_Object($thisArg);
 }
 /** @return {boolean} */
 static m_isArrayBuffer__$devirt__elemental2_dom_XMLHttpRequest_SendDataUnionType(/** ? */ $thisArg) {
  SendDataUnionType_$Overlay.$clinit();
  return $Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isArrayBufferView__$devirt__elemental2_dom_XMLHttpRequest_SendDataUnionType(/** ? */ $thisArg) {
  SendDataUnionType_$Overlay.$clinit();
  return ArrayBufferView_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isBlob__$devirt__elemental2_dom_XMLHttpRequest_SendDataUnionType(/** ? */ $thisArg) {
  SendDataUnionType_$Overlay.$clinit();
  return Blob_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isDocument__$devirt__elemental2_dom_XMLHttpRequest_SendDataUnionType(/** ? */ $thisArg) {
  SendDataUnionType_$Overlay.$clinit();
  return Document_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isFormData__$devirt__elemental2_dom_XMLHttpRequest_SendDataUnionType(/** ? */ $thisArg) {
  SendDataUnionType_$Overlay.$clinit();
  return FormData_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isString__$devirt__elemental2_dom_XMLHttpRequest_SendDataUnionType(/** ? */ $thisArg) {
  SendDataUnionType_$Overlay.$clinit();
  return j_l_String.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  SendDataUnionType_$Overlay.$clinit = () =>{};
  SendDataUnionType_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.core.ArrayBuffer.$Overlay$impl');
  ArrayBufferView_$Overlay = goog.module.get('elemental2.core.ArrayBufferView.$Overlay$impl');
  Blob_$Overlay = goog.module.get('elemental2.dom.Blob.$Overlay$impl');
  Document_$Overlay = goog.module.get('elemental2.dom.Document.$Overlay$impl');
  FormData_$Overlay = goog.module.get('elemental2.dom.FormData.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}

exports = SendDataUnionType_$Overlay; 
//# sourceMappingURL=XMLHttpRequest$SendDataUnionType$$Overlay.js.map
