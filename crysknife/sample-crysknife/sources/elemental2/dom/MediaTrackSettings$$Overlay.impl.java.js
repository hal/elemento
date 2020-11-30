goog.module('elemental2.dom.MediaTrackSettings.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let PointsOfInterestFieldType_$Overlay = goog.forwardDeclare('elemental2.dom.MediaTrackSettings.PointsOfInterestFieldType.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class MediaTrackSettings_$Overlay {
 
 static m_setPointsOfInterest__$devirt__elemental2_dom_MediaTrackSettings__arrayOf_elemental2_dom_MediaTrackSettings_PointsOfInterestFieldType(/** !MediaTrackSettings */ $thisArg, /** Array<?> */ pointsOfInterest) {
  MediaTrackSettings_$Overlay.$clinit();
  $thisArg.pointsOfInterest = /**@type {Array<?>}*/ (Js.m_uncheckedCast__java_lang_Object(pointsOfInterest));
 }
 
 static $clinit() {
  MediaTrackSettings_$Overlay.$clinit = () =>{};
  MediaTrackSettings_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}

exports = MediaTrackSettings_$Overlay; 
//# sourceMappingURL=MediaTrackSettings$$Overlay.js.map
