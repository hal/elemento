goog.module('elemental2.dom.MediaTrackCapabilities.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class MediaTrackCapabilities_$Overlay {
 
 static m_setEchoCancellation__$devirt__elemental2_dom_MediaTrackCapabilities__arrayOf_boolean(/** !MediaTrackCapabilities */ $thisArg, /** Array<boolean> */ echoCancellation) {
  MediaTrackCapabilities_$Overlay.$clinit();
  $thisArg.echoCancellation = /**@type {Array<?boolean>}*/ (Js.m_uncheckedCast__java_lang_Object(echoCancellation));
 }
 
 static m_setExposureMode__$devirt__elemental2_dom_MediaTrackCapabilities__arrayOf_java_lang_String(/** !MediaTrackCapabilities */ $thisArg, /** Array<?string> */ exposureMode) {
  MediaTrackCapabilities_$Overlay.$clinit();
  $thisArg.exposureMode = /**@type {Array<?string>}*/ (Js.m_uncheckedCast__java_lang_Object(exposureMode));
 }
 
 static m_setFacingMode__$devirt__elemental2_dom_MediaTrackCapabilities__arrayOf_java_lang_String(/** !MediaTrackCapabilities */ $thisArg, /** Array<?string> */ facingMode) {
  MediaTrackCapabilities_$Overlay.$clinit();
  $thisArg.facingMode = /**@type {Array<?string>}*/ (Js.m_uncheckedCast__java_lang_Object(facingMode));
 }
 
 static m_setFocusMode__$devirt__elemental2_dom_MediaTrackCapabilities__arrayOf_java_lang_String(/** !MediaTrackCapabilities */ $thisArg, /** Array<?string> */ focusMode) {
  MediaTrackCapabilities_$Overlay.$clinit();
  $thisArg.focusMode = /**@type {Array<?string>}*/ (Js.m_uncheckedCast__java_lang_Object(focusMode));
 }
 
 static m_setWhiteBalanceMode__$devirt__elemental2_dom_MediaTrackCapabilities__arrayOf_java_lang_String(/** !MediaTrackCapabilities */ $thisArg, /** Array<?string> */ whiteBalanceMode) {
  MediaTrackCapabilities_$Overlay.$clinit();
  $thisArg.whiteBalanceMode = /**@type {Array<?string>}*/ (Js.m_uncheckedCast__java_lang_Object(whiteBalanceMode));
 }
 
 static $clinit() {
  MediaTrackCapabilities_$Overlay.$clinit = () =>{};
  MediaTrackCapabilities_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}

exports = MediaTrackCapabilities_$Overlay; 
//# sourceMappingURL=MediaTrackCapabilities$$Overlay.js.map
