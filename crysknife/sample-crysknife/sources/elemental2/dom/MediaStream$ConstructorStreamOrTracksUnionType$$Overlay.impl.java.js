goog.module('elemental2.dom.MediaStream.ConstructorStreamOrTracksUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let MediaStream_$Overlay = goog.forwardDeclare('elemental2.dom.MediaStream.$Overlay$impl');
let MediaStreamTrack_$Overlay = goog.forwardDeclare('elemental2.dom.MediaStreamTrack.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ConstructorStreamOrTracksUnionType_$Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  ConstructorStreamOrTracksUnionType_$Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {Array<MediaStreamTrack>} */
 static m_asJsArray__$devirt__elemental2_dom_MediaStream_ConstructorStreamOrTracksUnionType(/** ? */ $thisArg) {
  ConstructorStreamOrTracksUnionType_$Overlay.$clinit();
  return /**@type {Array<MediaStreamTrack>}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), $Overlay));
 }
 /** @return {MediaStream} */
 static m_asMediaStream__$devirt__elemental2_dom_MediaStream_ConstructorStreamOrTracksUnionType(/** ? */ $thisArg) {
  ConstructorStreamOrTracksUnionType_$Overlay.$clinit();
  return /**@type {MediaStream}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), MediaStream_$Overlay));
 }
 /** @return {boolean} */
 static m_isJsArray__$devirt__elemental2_dom_MediaStream_ConstructorStreamOrTracksUnionType(/** ? */ $thisArg) {
  ConstructorStreamOrTracksUnionType_$Overlay.$clinit();
  return $Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isMediaStream__$devirt__elemental2_dom_MediaStream_ConstructorStreamOrTracksUnionType(/** ? */ $thisArg) {
  ConstructorStreamOrTracksUnionType_$Overlay.$clinit();
  return MediaStream_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  ConstructorStreamOrTracksUnionType_$Overlay.$clinit = () =>{};
  ConstructorStreamOrTracksUnionType_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.core.JsArray.$Overlay$impl');
  MediaStream_$Overlay = goog.module.get('elemental2.dom.MediaStream.$Overlay$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}

exports = ConstructorStreamOrTracksUnionType_$Overlay; 
//# sourceMappingURL=MediaStream$ConstructorStreamOrTracksUnionType$$Overlay.js.map
