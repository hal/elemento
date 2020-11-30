goog.module('elemental2.dom.CacheStorage.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let CacheQueryOptions_$Overlay = goog.forwardDeclare('elemental2.dom.CacheQueryOptions.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.CacheStorage.MatchRequestUnionType.$Overlay$impl');
let Request_$Overlay = goog.forwardDeclare('elemental2.dom.Request.$Overlay$impl');
let Response_$Overlay = goog.forwardDeclare('elemental2.dom.Response.$Overlay$impl');
let Promise_$Overlay = goog.forwardDeclare('elemental2.promise.Promise.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class CacheStorage_$Overlay {
 /** @return {Promise<Response>} */
 static m_match__$devirt__elemental2_dom_CacheStorage__elemental2_dom_Request__elemental2_dom_CacheQueryOptions(/** !CacheStorage */ $thisArg, /** Request */ request, /** CacheQueryOptions */ options) {
  CacheStorage_$Overlay.$clinit();
  return $thisArg.match(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(request)), options);
 }
 /** @return {Promise<Response>} */
 static m_match__$devirt__elemental2_dom_CacheStorage__elemental2_dom_Request(/** !CacheStorage */ $thisArg, /** Request */ request) {
  CacheStorage_$Overlay.$clinit();
  return $thisArg.match(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(request)));
 }
 /** @return {Promise<Response>} */
 static m_match__$devirt__elemental2_dom_CacheStorage__java_lang_String__elemental2_dom_CacheQueryOptions(/** !CacheStorage */ $thisArg, /** ?string */ request, /** CacheQueryOptions */ options) {
  CacheStorage_$Overlay.$clinit();
  return $thisArg.match(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(request)), options);
 }
 /** @return {Promise<Response>} */
 static m_match__$devirt__elemental2_dom_CacheStorage__java_lang_String(/** !CacheStorage */ $thisArg, /** ?string */ request) {
  CacheStorage_$Overlay.$clinit();
  return $thisArg.match(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(request)));
 }
 
 static $clinit() {
  CacheStorage_$Overlay.$clinit = () =>{};
  CacheStorage_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}

exports = CacheStorage_$Overlay; 
//# sourceMappingURL=CacheStorage$$Overlay.js.map
