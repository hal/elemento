goog.module('org.gwtproject.dom.client.MediaElement.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let HTMLMediaElement_$Overlay = goog.forwardDeclare('elemental2.dom.HTMLMediaElement.$Overlay$impl');
let Double = goog.forwardDeclare('java.lang.Double$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.Element.$Overlay$impl');
let MediaError_$Overlay = goog.forwardDeclare('org.gwtproject.media.dom.client.MediaError.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class MediaElement_$Overlay {
 /** @return {?string} */
 static m_canPlayType__$devirt__org_gwtproject_dom_client_MediaElement__java_lang_String(/** !Object */ $thisArg, /** ?string */ type) {
  MediaElement_$Overlay.$clinit();
  let canPlayType = /**@type {HTMLMediaElement}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).canPlayType(type);
  return $Equality.$same("no", canPlayType) ? MediaElement_$Overlay.f_CANNOT_PLAY__org_gwtproject_dom_client_MediaElement_$Overlay : canPlayType;
 }
 /** @return {number} */
 static m_getDefaultPlaybackRate__$devirt__org_gwtproject_dom_client_MediaElement(/** !Object */ $thisArg) {
  MediaElement_$Overlay.$clinit();
  return MediaElement_$Overlay.m_getDoubleAttr__$devirt__org_gwtproject_dom_client_MediaElement__java_lang_String__double($thisArg, "defaultPlaybackRate", 1.0);
 }
 /** @return {MediaError} */
 static m_getError__$devirt__org_gwtproject_dom_client_MediaElement(/** !Object */ $thisArg) {
  MediaElement_$Overlay.$clinit();
  return Js.m_isTruthy__java_lang_Object($thisArg.error) ? $thisArg.error : null;
 }
 /** @return {number} */
 static m_getInitialTime__$devirt__org_gwtproject_dom_client_MediaElement(/** !Object */ $thisArg) {
  MediaElement_$Overlay.$clinit();
  return MediaElement_$Overlay.m_getDoubleAttr__$devirt__org_gwtproject_dom_client_MediaElement__java_lang_String__double($thisArg, "initialTime", 0.0);
 }
 /** @return {number} */
 static m_getPlaybackRate__$devirt__org_gwtproject_dom_client_MediaElement(/** !Object */ $thisArg) {
  MediaElement_$Overlay.$clinit();
  let rate = $thisArg.playbackRate;
  if (!$Equality.$same(rate, null) && $Equality.$same("number", typeof(rate))) {
   return Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ ($Casts.$to(rate, Double)));
  }
  return 1.0;
 }
 /** @return {?string} */
 static m_getSrc__$devirt__org_gwtproject_dom_client_MediaElement(/** !Object */ $thisArg) {
  MediaElement_$Overlay.$clinit();
  return $Overlay.m_getAttribute__$devirt__org_gwtproject_dom_client_Element__java_lang_String($thisArg, "src");
 }
 /** @return {number} */
 static m_getStartOffsetTime__$devirt__org_gwtproject_dom_client_MediaElement(/** !Object */ $thisArg) {
  MediaElement_$Overlay.$clinit();
  return MediaElement_$Overlay.m_getDoubleAttr__$devirt__org_gwtproject_dom_client_MediaElement__java_lang_String__double($thisArg, "startOffsetTime", Double.f_NaN__java_lang_Double);
 }
 /** @return {boolean} */
 static m_hasControls__$devirt__org_gwtproject_dom_client_MediaElement(/** !Object */ $thisArg) {
  MediaElement_$Overlay.$clinit();
  return $Overlay.m_hasAttribute__$devirt__org_gwtproject_dom_client_Element__java_lang_String($thisArg, "controls");
 }
 /** @return {boolean} */
 static m_isAutoplay__$devirt__org_gwtproject_dom_client_MediaElement(/** !Object */ $thisArg) {
  MediaElement_$Overlay.$clinit();
  return $Overlay.m_hasAttribute__$devirt__org_gwtproject_dom_client_Element__java_lang_String($thisArg, "autoplay");
 }
 /** @return {boolean} */
 static m_isLoop__$devirt__org_gwtproject_dom_client_MediaElement(/** !Object */ $thisArg) {
  MediaElement_$Overlay.$clinit();
  return $Overlay.m_hasAttribute__$devirt__org_gwtproject_dom_client_Element__java_lang_String($thisArg, "loop");
 }
 /** @return {boolean} */
 static m_isMuted__$devirt__org_gwtproject_dom_client_MediaElement(/** !Object */ $thisArg) {
  MediaElement_$Overlay.$clinit();
  return Js.m_isTruthy__java_lang_Object(/**@type {HTMLMediaElement}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).muted);
 }
 /** @return {boolean} */
 static m_isPaused__$devirt__org_gwtproject_dom_client_MediaElement(/** !Object */ $thisArg) {
  MediaElement_$Overlay.$clinit();
  return Js.m_isTruthy__java_lang_Object(/**@type {HTMLMediaElement}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).paused);
 }
 /** @return {boolean} */
 static m_isSeeking__$devirt__org_gwtproject_dom_client_MediaElement(/** !Object */ $thisArg) {
  MediaElement_$Overlay.$clinit();
  return Js.m_isTruthy__java_lang_Object(/**@type {HTMLMediaElement}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).seeking);
 }
 
 static m_setAutoplay__$devirt__org_gwtproject_dom_client_MediaElement__boolean(/** !Object */ $thisArg, /** boolean */ autoplay) {
  MediaElement_$Overlay.$clinit();
  MediaElement_$Overlay.m_setBooleanAttr__$devirt__org_gwtproject_dom_client_MediaElement__java_lang_String__boolean($thisArg, "autoplay", autoplay);
 }
 
 static m_setControls__$devirt__org_gwtproject_dom_client_MediaElement__boolean(/** !Object */ $thisArg, /** boolean */ controls) {
  MediaElement_$Overlay.$clinit();
  MediaElement_$Overlay.m_setBooleanAttr__$devirt__org_gwtproject_dom_client_MediaElement__java_lang_String__boolean($thisArg, "controls", controls);
 }
 
 static m_setLoop__$devirt__org_gwtproject_dom_client_MediaElement__boolean(/** !Object */ $thisArg, /** boolean */ loop) {
  MediaElement_$Overlay.$clinit();
  MediaElement_$Overlay.m_setBooleanAttr__$devirt__org_gwtproject_dom_client_MediaElement__java_lang_String__boolean($thisArg, "loop", loop);
 }
 /** @return {number} */
 static m_getDoubleAttr__$devirt__org_gwtproject_dom_client_MediaElement__java_lang_String__double(/** !Object */ $thisArg, /** ?string */ name, /** number */ def) {
  let value = $Overlay.m_getAttribute__$devirt__org_gwtproject_dom_client_Element__java_lang_String($thisArg, name);
  if (!$Equality.$same("number", typeof(value))) {
   return def;
  }
  return Double.m_doubleValue__java_lang_Double(/**@type {?number}*/ (Js.m_uncheckedCast__java_lang_Object(value)));
 }
 
 static m_setBooleanAttr__$devirt__org_gwtproject_dom_client_MediaElement__java_lang_String__boolean(/** !Object */ $thisArg, /** ?string */ name, /** boolean */ value) {
  if (value) {
   $thisArg.setAttribute(name, "");
  } else {
   $thisArg.removeAttribute(name);
  }
 }
 
 static $clinit() {
  MediaElement_$Overlay.$clinit = () =>{};
  MediaElement_$Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Object;
 }
 
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.Element.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(MediaElement_$Overlay, 'Object');

/**@const {?string}*/
MediaElement_$Overlay.f_CAN_PLAY_PROBABLY__org_gwtproject_dom_client_MediaElement_$Overlay = "probably";
/**@const {?string}*/
MediaElement_$Overlay.f_CAN_PLAY_MAYBE__org_gwtproject_dom_client_MediaElement_$Overlay = "maybe";
/**@const {?string}*/
MediaElement_$Overlay.f_CANNOT_PLAY__org_gwtproject_dom_client_MediaElement_$Overlay = "";
/**@const {?string}*/
MediaElement_$Overlay.f_PRELOAD_AUTO__org_gwtproject_dom_client_MediaElement_$Overlay = "auto";
/**@const {?string}*/
MediaElement_$Overlay.f_PRELOAD_METADATA__org_gwtproject_dom_client_MediaElement_$Overlay = "metadata";
/**@const {?string}*/
MediaElement_$Overlay.f_PRELOAD_NONE__org_gwtproject_dom_client_MediaElement_$Overlay = "none";

exports = MediaElement_$Overlay; 
//# sourceMappingURL=MediaElement$$Overlay.js.map
