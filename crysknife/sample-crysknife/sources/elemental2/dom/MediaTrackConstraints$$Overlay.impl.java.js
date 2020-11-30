goog.module('elemental2.dom.MediaTrackConstraints.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let MediaTrackConstraintSet_$Overlay = goog.forwardDeclare('elemental2.dom.MediaTrackConstraintSet.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class MediaTrackConstraints_$Overlay {
 /** @return {MediaTrackConstraints} */
 static m_create__() {
  MediaTrackConstraints_$Overlay.$clinit();
  return /**@type {MediaTrackConstraints}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static m_setAdvanced__$devirt__elemental2_dom_MediaTrackConstraints__arrayOf_elemental2_dom_MediaTrackConstraintSet(/** !MediaTrackConstraints */ $thisArg, /** Array<MediaTrackConstraintSet> */ advanced) {
  MediaTrackConstraints_$Overlay.$clinit();
  $thisArg.advanced = /**@type {Array<MediaTrackConstraintSet>}*/ (Js.m_uncheckedCast__java_lang_Object(advanced));
 }
 
 static $clinit() {
  MediaTrackConstraints_$Overlay.$clinit = () =>{};
  MediaTrackConstraints_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = MediaTrackConstraints_$Overlay; 
//# sourceMappingURL=MediaTrackConstraints$$Overlay.js.map
