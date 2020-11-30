goog.module('elemental2.dom.VideoPlaybackQuality.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class VideoPlaybackQuality_$Overlay {
 /** @return {VideoPlaybackQuality} */
 static m_create__() {
  VideoPlaybackQuality_$Overlay.$clinit();
  return /**@type {VideoPlaybackQuality}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static $clinit() {
  VideoPlaybackQuality_$Overlay.$clinit = () =>{};
  VideoPlaybackQuality_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = VideoPlaybackQuality_$Overlay; 
//# sourceMappingURL=VideoPlaybackQuality$$Overlay.js.map
