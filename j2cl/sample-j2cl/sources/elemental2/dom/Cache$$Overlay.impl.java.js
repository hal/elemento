goog.module('elemental2.dom.Cache.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let AddAllRequestsArrayUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.Cache.AddAllRequestsArrayUnionType.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.Cache.AddRequestUnionType.$Overlay$impl');
let DeleteRequestUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.Cache.DeleteRequestUnionType.$Overlay$impl');
let KeysRequestUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.Cache.KeysRequestUnionType.$Overlay$impl');
let MatchAllRequestUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.Cache.MatchAllRequestUnionType.$Overlay$impl');
let MatchRequestUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.Cache.MatchRequestUnionType.$Overlay$impl');
let PutRequestUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.Cache.PutRequestUnionType.$Overlay$impl');
let CacheQueryOptions_$Overlay = goog.forwardDeclare('elemental2.dom.CacheQueryOptions.$Overlay$impl');
let Request_$Overlay = goog.forwardDeclare('elemental2.dom.Request.$Overlay$impl');
let Response_$Overlay = goog.forwardDeclare('elemental2.dom.Response.$Overlay$impl');
let Promise_$Overlay = goog.forwardDeclare('elemental2.promise.Promise.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class Cache_$Overlay {
 /** @return {Promise<?void>} */
 static m_add__$devirt__elemental2_dom_Cache__elemental2_dom_Request(/** !Cache */ $thisArg, /** Request */ request) {
  Cache_$Overlay.$clinit();
  return $thisArg.add(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(request)));
 }
 /** @return {Promise<?void>} */
 static m_add__$devirt__elemental2_dom_Cache__java_lang_String(/** !Cache */ $thisArg, /** ?string */ request) {
  Cache_$Overlay.$clinit();
  return $thisArg.add(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(request)));
 }
 /** @return {Promise<?void>} */
 static m_addAll__$devirt__elemental2_dom_Cache__arrayOf_elemental2_dom_Cache_AddAllRequestsArrayUnionType(/** !Cache */ $thisArg, /** Array<?> */ requests) {
  Cache_$Overlay.$clinit();
  return $thisArg.addAll(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(requests)));
 }
 /** @return {Promise<?boolean>} */
 static m_delete__$devirt__elemental2_dom_Cache__elemental2_dom_Request__elemental2_dom_CacheQueryOptions(/** !Cache */ $thisArg, /** Request */ request, /** CacheQueryOptions */ options) {
  Cache_$Overlay.$clinit();
  return $thisArg.delete(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(request)), options);
 }
 /** @return {Promise<?boolean>} */
 static m_delete__$devirt__elemental2_dom_Cache__elemental2_dom_Request(/** !Cache */ $thisArg, /** Request */ request) {
  Cache_$Overlay.$clinit();
  return $thisArg.delete(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(request)));
 }
 /** @return {Promise<?boolean>} */
 static m_delete__$devirt__elemental2_dom_Cache__java_lang_String__elemental2_dom_CacheQueryOptions(/** !Cache */ $thisArg, /** ?string */ request, /** CacheQueryOptions */ options) {
  Cache_$Overlay.$clinit();
  return $thisArg.delete(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(request)), options);
 }
 /** @return {Promise<?boolean>} */
 static m_delete__$devirt__elemental2_dom_Cache__java_lang_String(/** !Cache */ $thisArg, /** ?string */ request) {
  Cache_$Overlay.$clinit();
  return $thisArg.delete(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(request)));
 }
 /** @return {Promise<Array<Request>>} */
 static m_keys__$devirt__elemental2_dom_Cache__elemental2_dom_Request__elemental2_dom_CacheQueryOptions(/** !Cache */ $thisArg, /** Request */ request, /** CacheQueryOptions */ options) {
  Cache_$Overlay.$clinit();
  return $thisArg.keys(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(request)), options);
 }
 /** @return {Promise<Array<Request>>} */
 static m_keys__$devirt__elemental2_dom_Cache__elemental2_dom_Request(/** !Cache */ $thisArg, /** Request */ request) {
  Cache_$Overlay.$clinit();
  return $thisArg.keys(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(request)));
 }
 /** @return {Promise<Array<Request>>} */
 static m_keys__$devirt__elemental2_dom_Cache__java_lang_String__elemental2_dom_CacheQueryOptions(/** !Cache */ $thisArg, /** ?string */ request, /** CacheQueryOptions */ options) {
  Cache_$Overlay.$clinit();
  return $thisArg.keys(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(request)), options);
 }
 /** @return {Promise<Array<Request>>} */
 static m_keys__$devirt__elemental2_dom_Cache__java_lang_String(/** !Cache */ $thisArg, /** ?string */ request) {
  Cache_$Overlay.$clinit();
  return $thisArg.keys(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(request)));
 }
 /** @return {Promise<Response>} */
 static m_match__$devirt__elemental2_dom_Cache__elemental2_dom_Request__elemental2_dom_CacheQueryOptions(/** !Cache */ $thisArg, /** Request */ request, /** CacheQueryOptions */ options) {
  Cache_$Overlay.$clinit();
  return $thisArg.match(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(request)), options);
 }
 /** @return {Promise<Response>} */
 static m_match__$devirt__elemental2_dom_Cache__elemental2_dom_Request(/** !Cache */ $thisArg, /** Request */ request) {
  Cache_$Overlay.$clinit();
  return $thisArg.match(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(request)));
 }
 /** @return {Promise<Response>} */
 static m_match__$devirt__elemental2_dom_Cache__java_lang_String__elemental2_dom_CacheQueryOptions(/** !Cache */ $thisArg, /** ?string */ request, /** CacheQueryOptions */ options) {
  Cache_$Overlay.$clinit();
  return $thisArg.match(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(request)), options);
 }
 /** @return {Promise<Response>} */
 static m_match__$devirt__elemental2_dom_Cache__java_lang_String(/** !Cache */ $thisArg, /** ?string */ request) {
  Cache_$Overlay.$clinit();
  return $thisArg.match(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(request)));
 }
 /** @return {Promise<Array<Response>>} */
 static m_matchAll__$devirt__elemental2_dom_Cache__elemental2_dom_Request__elemental2_dom_CacheQueryOptions(/** !Cache */ $thisArg, /** Request */ request, /** CacheQueryOptions */ options) {
  Cache_$Overlay.$clinit();
  return $thisArg.matchAll(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(request)), options);
 }
 /** @return {Promise<Array<Response>>} */
 static m_matchAll__$devirt__elemental2_dom_Cache__elemental2_dom_Request(/** !Cache */ $thisArg, /** Request */ request) {
  Cache_$Overlay.$clinit();
  return $thisArg.matchAll(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(request)));
 }
 /** @return {Promise<Array<Response>>} */
 static m_matchAll__$devirt__elemental2_dom_Cache__java_lang_String__elemental2_dom_CacheQueryOptions(/** !Cache */ $thisArg, /** ?string */ request, /** CacheQueryOptions */ options) {
  Cache_$Overlay.$clinit();
  return $thisArg.matchAll(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(request)), options);
 }
 /** @return {Promise<Array<Response>>} */
 static m_matchAll__$devirt__elemental2_dom_Cache__java_lang_String(/** !Cache */ $thisArg, /** ?string */ request) {
  Cache_$Overlay.$clinit();
  return $thisArg.matchAll(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(request)));
 }
 /** @return {Promise<?void>} */
 static m_put__$devirt__elemental2_dom_Cache__elemental2_dom_Request__elemental2_dom_Response(/** !Cache */ $thisArg, /** Request */ request, /** Response */ response) {
  Cache_$Overlay.$clinit();
  return $thisArg.put(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(request)), response);
 }
 /** @return {Promise<?void>} */
 static m_put__$devirt__elemental2_dom_Cache__java_lang_String__elemental2_dom_Response(/** !Cache */ $thisArg, /** ?string */ request, /** Response */ response) {
  Cache_$Overlay.$clinit();
  return $thisArg.put(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(request)), response);
 }
 
 static $clinit() {
  Cache_$Overlay.$clinit = () =>{};
  Cache_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}

exports = Cache_$Overlay; 
//# sourceMappingURL=Cache$$Overlay.js.map
