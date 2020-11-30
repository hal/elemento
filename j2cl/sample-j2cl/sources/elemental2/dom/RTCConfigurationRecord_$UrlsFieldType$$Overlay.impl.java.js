goog.module('elemental2.dom.RTCConfigurationRecord_.UrlsFieldType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class UrlsFieldType_$Overlay {
 /** @return {?} */
 static m_create__() {
  UrlsFieldType_$Overlay.$clinit();
  return /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static m_setUrls__$devirt__elemental2_dom_RTCConfigurationRecord__UrlsFieldType__arrayOf_java_lang_String(/** ? */ $thisArg, /** Array<?string> */ urls) {
  UrlsFieldType_$Overlay.$clinit();
  $thisArg.urls = /**@type {Array<?string>}*/ (Js.m_uncheckedCast__java_lang_Object(urls));
 }
 
 static $clinit() {
  UrlsFieldType_$Overlay.$clinit = () =>{};
  UrlsFieldType_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = UrlsFieldType_$Overlay; 
//# sourceMappingURL=RTCConfigurationRecord_$UrlsFieldType$$Overlay.js.map
