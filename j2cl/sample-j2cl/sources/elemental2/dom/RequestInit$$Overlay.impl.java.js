goog.module('elemental2.dom.RequestInit.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let ArrayBuffer_$Overlay = goog.forwardDeclare('elemental2.core.ArrayBuffer.$Overlay$impl');
let ArrayBufferView_$Overlay = goog.forwardDeclare('elemental2.core.ArrayBufferView.$Overlay$impl');
let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let Blob_$Overlay = goog.forwardDeclare('elemental2.dom.Blob.$Overlay$impl');
let FormData_$Overlay = goog.forwardDeclare('elemental2.dom.FormData.$Overlay$impl');
let Headers_$Overlay = goog.forwardDeclare('elemental2.dom.Headers.$Overlay$impl');
let ReadableStream_$Overlay = goog.forwardDeclare('elemental2.dom.ReadableStream.$Overlay$impl');
let GetBodyUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.RequestInit.GetBodyUnionType.$Overlay$impl');
let GetHeadersUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.RequestInit.GetHeadersUnionType.$Overlay$impl');
let URLSearchParams_$Overlay = goog.forwardDeclare('elemental2.dom.URLSearchParams.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class RequestInit_$Overlay {
 /** @return {RequestInit} */
 static m_create__() {
  RequestInit_$Overlay.$clinit();
  return /**@type {RequestInit}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static m_setBody__$devirt__elemental2_dom_RequestInit__elemental2_core_ArrayBuffer(/** !RequestInit */ $thisArg, /** ArrayBuffer */ body) {
  RequestInit_$Overlay.$clinit();
  $thisArg.body = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(body));
 }
 
 static m_setBody__$devirt__elemental2_dom_RequestInit__elemental2_core_ArrayBufferView(/** !RequestInit */ $thisArg, /** ArrayBufferView */ body) {
  RequestInit_$Overlay.$clinit();
  $thisArg.body = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(body));
 }
 
 static m_setBody__$devirt__elemental2_dom_RequestInit__elemental2_dom_Blob(/** !RequestInit */ $thisArg, /** Blob */ body) {
  RequestInit_$Overlay.$clinit();
  $thisArg.body = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(body));
 }
 
 static m_setBody__$devirt__elemental2_dom_RequestInit__elemental2_dom_FormData(/** !RequestInit */ $thisArg, /** FormData */ body) {
  RequestInit_$Overlay.$clinit();
  $thisArg.body = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(body));
 }
 
 static m_setBody__$devirt__elemental2_dom_RequestInit__elemental2_dom_ReadableStream(/** !RequestInit */ $thisArg, /** ReadableStream */ body) {
  RequestInit_$Overlay.$clinit();
  $thisArg.body = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(body));
 }
 
 static m_setBody__$devirt__elemental2_dom_RequestInit__java_lang_String(/** !RequestInit */ $thisArg, /** ?string */ body) {
  RequestInit_$Overlay.$clinit();
  $thisArg.body = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(body));
 }
 
 static m_setBody__$devirt__elemental2_dom_RequestInit__elemental2_dom_URLSearchParams(/** !RequestInit */ $thisArg, /** URLSearchParams */ body) {
  RequestInit_$Overlay.$clinit();
  $thisArg.body = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(body));
 }
 
 static m_setHeaders__$devirt__elemental2_dom_RequestInit__elemental2_dom_Headers(/** !RequestInit */ $thisArg, /** Headers */ headers) {
  RequestInit_$Overlay.$clinit();
  $thisArg.headers = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(headers));
 }
 
 static m_setHeaders__$devirt__elemental2_dom_RequestInit__elemental2_core_JsArray(/** !RequestInit */ $thisArg, /** Array<Array<?string>> */ headers) {
  RequestInit_$Overlay.$clinit();
  $thisArg.headers = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(headers));
 }
 
 static m_setHeaders__$devirt__elemental2_dom_RequestInit__jsinterop_base_JsPropertyMap(/** !RequestInit */ $thisArg, /** Object<string, ?string> */ headers) {
  RequestInit_$Overlay.$clinit();
  $thisArg.headers = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(headers));
 }
 
 static m_setHeaders__$devirt__elemental2_dom_RequestInit__arrayOf_arrayOf_java_lang_String(/** !RequestInit */ $thisArg, /** Array<Array<?string>> */ headers) {
  RequestInit_$Overlay.$clinit();
  RequestInit_$Overlay.m_setHeaders__$devirt__elemental2_dom_RequestInit__elemental2_core_JsArray($thisArg, /**@type {Array<Array<?string>>}*/ (Js.m_uncheckedCast__java_lang_Object(headers)));
 }
 
 static $clinit() {
  RequestInit_$Overlay.$clinit = () =>{};
  RequestInit_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = RequestInit_$Overlay; 
//# sourceMappingURL=RequestInit$$Overlay.js.map
