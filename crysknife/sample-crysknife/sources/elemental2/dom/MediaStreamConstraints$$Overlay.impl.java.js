goog.module('elemental2.dom.MediaStreamConstraints.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let GetAudioUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.MediaStreamConstraints.GetAudioUnionType.$Overlay$impl');
let GetVideoUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.MediaStreamConstraints.GetVideoUnionType.$Overlay$impl');
let MediaTrackConstraints_$Overlay = goog.forwardDeclare('elemental2.dom.MediaTrackConstraints.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class MediaStreamConstraints_$Overlay {
 /** @return {MediaStreamConstraints} */
 static m_create__() {
  MediaStreamConstraints_$Overlay.$clinit();
  return /**@type {MediaStreamConstraints}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static m_setAudio__$devirt__elemental2_dom_MediaStreamConstraints__elemental2_dom_MediaTrackConstraints(/** !MediaStreamConstraints */ $thisArg, /** MediaTrackConstraints */ audio) {
  MediaStreamConstraints_$Overlay.$clinit();
  $thisArg.audio = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(audio));
 }
 
 static m_setAudio__$devirt__elemental2_dom_MediaStreamConstraints__boolean(/** !MediaStreamConstraints */ $thisArg, /** boolean */ audio) {
  MediaStreamConstraints_$Overlay.$clinit();
  $thisArg.audio = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(audio));
 }
 
 static m_setVideo__$devirt__elemental2_dom_MediaStreamConstraints__elemental2_dom_MediaTrackConstraints(/** !MediaStreamConstraints */ $thisArg, /** MediaTrackConstraints */ video) {
  MediaStreamConstraints_$Overlay.$clinit();
  $thisArg.video = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(video));
 }
 
 static m_setVideo__$devirt__elemental2_dom_MediaStreamConstraints__boolean(/** !MediaStreamConstraints */ $thisArg, /** boolean */ video) {
  MediaStreamConstraints_$Overlay.$clinit();
  $thisArg.video = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(video));
 }
 
 static $clinit() {
  MediaStreamConstraints_$Overlay.$clinit = () =>{};
  MediaStreamConstraints_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = MediaStreamConstraints_$Overlay; 
//# sourceMappingURL=MediaStreamConstraints$$Overlay.js.map
