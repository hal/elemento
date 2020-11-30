goog.module('elemental2.dom.Window.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let Transferable_$Overlay = goog.forwardDeclare('elemental2.core.Transferable.$Overlay$impl');
let Database_$Overlay = goog.forwardDeclare('elemental2.dom.Database.$Overlay$impl');
let DatabaseCallback_$Overlay = goog.forwardDeclare('elemental2.dom.DatabaseCallback.$Overlay$impl');
let Request_$Overlay = goog.forwardDeclare('elemental2.dom.Request.$Overlay$impl');
let RequestInit_$Overlay = goog.forwardDeclare('elemental2.dom.RequestInit.$Overlay$impl');
let Response_$Overlay = goog.forwardDeclare('elemental2.dom.Response.$Overlay$impl');
let ScrollToOptions_$Overlay = goog.forwardDeclare('elemental2.dom.ScrollToOptions.$Overlay$impl');
let TrustedScriptURL_$Overlay = goog.forwardDeclare('elemental2.dom.TrustedScriptURL.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.Window.FetchInputUnionType.$Overlay$impl');
let ImportScriptsVar__argsUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.Window.ImportScriptsVar_argsUnionType.$Overlay$impl');
let OpenDatabaseCallbackUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.Window.OpenDatabaseCallbackUnionType.$Overlay$impl');
let ScrollByScrollToOptionsOrXUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.Window.ScrollByScrollToOptionsOrXUnionType.$Overlay$impl');
let ScrollScrollToOptionsOrXUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.Window.ScrollScrollToOptionsOrXUnionType.$Overlay$impl');
let ScrollToScrollToOptionsOrXUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.Window.ScrollToScrollToOptionsOrXUnionType.$Overlay$impl');
let Promise_$Overlay = goog.forwardDeclare('elemental2.promise.Promise.$Overlay$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class Window_$Overlay {
 /** @return {Promise<Response>} */
 static m_fetch__$devirt__elemental2_dom_Window__elemental2_dom_Request__elemental2_dom_RequestInit(/** !Window */ $thisArg, /** Request */ input, /** RequestInit */ init) {
  Window_$Overlay.$clinit();
  return $thisArg.fetch(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(input)), init);
 }
 /** @return {Promise<Response>} */
 static m_fetch__$devirt__elemental2_dom_Window__elemental2_dom_Request(/** !Window */ $thisArg, /** Request */ input) {
  Window_$Overlay.$clinit();
  return $thisArg.fetch(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(input)));
 }
 /** @return {Promise<Response>} */
 static m_fetch__$devirt__elemental2_dom_Window__java_lang_String__elemental2_dom_RequestInit(/** !Window */ $thisArg, /** ?string */ input, /** RequestInit */ init) {
  Window_$Overlay.$clinit();
  return $thisArg.fetch(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(input)), init);
 }
 /** @return {Promise<Response>} */
 static m_fetch__$devirt__elemental2_dom_Window__java_lang_String(/** !Window */ $thisArg, /** ?string */ input) {
  Window_$Overlay.$clinit();
  return $thisArg.fetch(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(input)));
 }
 
 static m_importScripts__$devirt__elemental2_dom_Window__arrayOf_java_lang_String(/** !Window */ $thisArg, /** Array<?string> */ var_args) {
  Window_$Overlay.$clinit();
  $thisArg.importScripts(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(var_args))));
 }
 
 static m_importScripts__$devirt__elemental2_dom_Window__arrayOf_elemental2_dom_TrustedScriptURL(/** !Window */ $thisArg, /** Array<TrustedScriptURL> */ var_args) {
  Window_$Overlay.$clinit();
  $thisArg.importScripts(...InternalPreconditions.m_checkNotNull__java_lang_Object(/**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(var_args))));
 }
 /** @return {Database} */
 static m_openDatabase__$devirt__elemental2_dom_Window__java_lang_String__java_lang_String__java_lang_String__int__elemental2_dom_DatabaseCallback(/** !Window */ $thisArg, /** ?string */ name, /** ?string */ version, /** ?string */ description, /** number */ size, /** DatabaseCallback */ callback) {
  Window_$Overlay.$clinit();
  return $thisArg.openDatabase(name, version, description, size, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(callback)));
 }
 /** @return {Database} */
 static m_openDatabase__$devirt__elemental2_dom_Window__java_lang_String__java_lang_String__java_lang_String__int__elemental2_dom_Window_OpenDatabaseCallbackFn(/** !Window */ $thisArg, /** ?string */ name, /** ?string */ version, /** ?string */ description, /** number */ size, /** ?function(Database):* */ callback) {
  Window_$Overlay.$clinit();
  return $thisArg.openDatabase(name, version, description, size, /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(callback)));
 }
 
 static m_postMessage__$devirt__elemental2_dom_Window__java_lang_Object__java_lang_String__arrayOf_elemental2_core_Transferable(/** !Window */ $thisArg, /** * */ message, /** ?string */ targetOrigin, /** Array<Transferable> */ transfer) {
  Window_$Overlay.$clinit();
  $thisArg.postMessage(message, targetOrigin, /**@type {Array<Transferable>}*/ (Js.m_uncheckedCast__java_lang_Object(transfer)));
 }
 
 static m_scroll__$devirt__elemental2_dom_Window__elemental2_dom_ScrollToOptions__double(/** !Window */ $thisArg, /** ScrollToOptions */ scrollToOptionsOrX, /** number */ y) {
  Window_$Overlay.$clinit();
  $thisArg.scroll(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(scrollToOptionsOrX)), y);
 }
 
 static m_scroll__$devirt__elemental2_dom_Window__elemental2_dom_ScrollToOptions(/** !Window */ $thisArg, /** ScrollToOptions */ scrollToOptionsOrX) {
  Window_$Overlay.$clinit();
  $thisArg.scroll(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(scrollToOptionsOrX)));
 }
 
 static m_scroll__$devirt__elemental2_dom_Window__double__double(/** !Window */ $thisArg, /** number */ scrollToOptionsOrX, /** number */ y) {
  Window_$Overlay.$clinit();
  $thisArg.scroll(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(scrollToOptionsOrX)), y);
 }
 
 static m_scroll__$devirt__elemental2_dom_Window__double(/** !Window */ $thisArg, /** number */ scrollToOptionsOrX) {
  Window_$Overlay.$clinit();
  $thisArg.scroll(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(scrollToOptionsOrX)));
 }
 
 static m_scrollBy__$devirt__elemental2_dom_Window__elemental2_dom_ScrollToOptions__double(/** !Window */ $thisArg, /** ScrollToOptions */ scrollToOptionsOrX, /** number */ y) {
  Window_$Overlay.$clinit();
  $thisArg.scrollBy(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(scrollToOptionsOrX)), y);
 }
 
 static m_scrollBy__$devirt__elemental2_dom_Window__elemental2_dom_ScrollToOptions(/** !Window */ $thisArg, /** ScrollToOptions */ scrollToOptionsOrX) {
  Window_$Overlay.$clinit();
  $thisArg.scrollBy(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(scrollToOptionsOrX)));
 }
 
 static m_scrollBy__$devirt__elemental2_dom_Window__double__double(/** !Window */ $thisArg, /** number */ scrollToOptionsOrX, /** number */ y) {
  Window_$Overlay.$clinit();
  $thisArg.scrollBy(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(scrollToOptionsOrX)), y);
 }
 
 static m_scrollBy__$devirt__elemental2_dom_Window__double(/** !Window */ $thisArg, /** number */ scrollToOptionsOrX) {
  Window_$Overlay.$clinit();
  $thisArg.scrollBy(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(scrollToOptionsOrX)));
 }
 
 static m_scrollTo__$devirt__elemental2_dom_Window__elemental2_dom_ScrollToOptions__double(/** !Window */ $thisArg, /** ScrollToOptions */ scrollToOptionsOrX, /** number */ y) {
  Window_$Overlay.$clinit();
  $thisArg.scrollTo(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(scrollToOptionsOrX)), y);
 }
 
 static m_scrollTo__$devirt__elemental2_dom_Window__elemental2_dom_ScrollToOptions(/** !Window */ $thisArg, /** ScrollToOptions */ scrollToOptionsOrX) {
  Window_$Overlay.$clinit();
  $thisArg.scrollTo(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(scrollToOptionsOrX)));
 }
 
 static m_scrollTo__$devirt__elemental2_dom_Window__double__double(/** !Window */ $thisArg, /** number */ scrollToOptionsOrX, /** number */ y) {
  Window_$Overlay.$clinit();
  $thisArg.scrollTo(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(scrollToOptionsOrX)), y);
 }
 
 static m_scrollTo__$devirt__elemental2_dom_Window__double(/** !Window */ $thisArg, /** number */ scrollToOptionsOrX) {
  Window_$Overlay.$clinit();
  $thisArg.scrollTo(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(scrollToOptionsOrX)));
 }
 
 static $clinit() {
  Window_$Overlay.$clinit = () =>{};
  Window_$Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Window;
 }
 
 static $loadModules() {
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}
$Util.$setClassMetadata(Window_$Overlay, 'Window');

exports = Window_$Overlay; 
//# sourceMappingURL=Window$$Overlay.js.map
