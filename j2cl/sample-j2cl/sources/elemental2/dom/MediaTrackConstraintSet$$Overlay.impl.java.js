goog.module('elemental2.dom.MediaTrackConstraintSet.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let JsArray_$Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let ConstrainBooleanParameters_$Overlay = goog.forwardDeclare('elemental2.dom.ConstrainBooleanParameters.$Overlay$impl');
let ConstrainDOMStringParameters_$Overlay = goog.forwardDeclare('elemental2.dom.ConstrainDOMStringParameters.$Overlay$impl');
let ConstrainDoubleRange_$Overlay = goog.forwardDeclare('elemental2.dom.ConstrainDoubleRange.$Overlay$impl');
let ConstrainLongRange_$Overlay = goog.forwardDeclare('elemental2.dom.ConstrainLongRange.$Overlay$impl');
let GetAspectRatioUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.MediaTrackConstraintSet.GetAspectRatioUnionType.$Overlay$impl');
let GetAutoGainControlUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.MediaTrackConstraintSet.GetAutoGainControlUnionType.$Overlay$impl');
let GetChannelCountUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.MediaTrackConstraintSet.GetChannelCountUnionType.$Overlay$impl');
let GetDeviceIdUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.MediaTrackConstraintSet.GetDeviceIdUnionType.$Overlay$impl');
let GetEchoCancellationUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.MediaTrackConstraintSet.GetEchoCancellationUnionType.$Overlay$impl');
let GetFacingModeUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.MediaTrackConstraintSet.GetFacingModeUnionType.$Overlay$impl');
let GetFrameRateUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.MediaTrackConstraintSet.GetFrameRateUnionType.$Overlay$impl');
let GetGroupIdUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.MediaTrackConstraintSet.GetGroupIdUnionType.$Overlay$impl');
let GetHeightUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.MediaTrackConstraintSet.GetHeightUnionType.$Overlay$impl');
let GetLatencyUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.MediaTrackConstraintSet.GetLatencyUnionType.$Overlay$impl');
let GetNoiseSuppressionUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.MediaTrackConstraintSet.GetNoiseSuppressionUnionType.$Overlay$impl');
let GetSampleRateUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.MediaTrackConstraintSet.GetSampleRateUnionType.$Overlay$impl');
let GetSampleSizeUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.MediaTrackConstraintSet.GetSampleSizeUnionType.$Overlay$impl');
let GetVolumeUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.MediaTrackConstraintSet.GetVolumeUnionType.$Overlay$impl');
let GetWidthUnionType_$Overlay = goog.forwardDeclare('elemental2.dom.MediaTrackConstraintSet.GetWidthUnionType.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');

class MediaTrackConstraintSet_$Overlay {
 /** @return {MediaTrackConstraintSet} */
 static m_create__() {
  MediaTrackConstraintSet_$Overlay.$clinit();
  return /**@type {MediaTrackConstraintSet}*/ (Js.m_uncheckedCast__java_lang_Object($Overlay.m_of__()));
 }
 
 static m_setAspectRatio__$devirt__elemental2_dom_MediaTrackConstraintSet__elemental2_dom_ConstrainDoubleRange(/** !MediaTrackConstraintSet */ $thisArg, /** ConstrainDoubleRange */ aspectRatio) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.aspectRatio = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(aspectRatio));
 }
 
 static m_setAspectRatio__$devirt__elemental2_dom_MediaTrackConstraintSet__double(/** !MediaTrackConstraintSet */ $thisArg, /** number */ aspectRatio) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.aspectRatio = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(aspectRatio));
 }
 
 static m_setAutoGainControl__$devirt__elemental2_dom_MediaTrackConstraintSet__elemental2_dom_ConstrainBooleanParameters(/** !MediaTrackConstraintSet */ $thisArg, /** ConstrainBooleanParameters */ autoGainControl) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.autoGainControl = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(autoGainControl));
 }
 
 static m_setAutoGainControl__$devirt__elemental2_dom_MediaTrackConstraintSet__boolean(/** !MediaTrackConstraintSet */ $thisArg, /** boolean */ autoGainControl) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.autoGainControl = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(autoGainControl));
 }
 
 static m_setChannelCount__$devirt__elemental2_dom_MediaTrackConstraintSet__elemental2_dom_ConstrainLongRange(/** !MediaTrackConstraintSet */ $thisArg, /** ConstrainLongRange */ channelCount) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.channelCount = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(channelCount));
 }
 
 static m_setChannelCount__$devirt__elemental2_dom_MediaTrackConstraintSet__int(/** !MediaTrackConstraintSet */ $thisArg, /** number */ channelCount) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.channelCount = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(channelCount));
 }
 
 static m_setDeviceId__$devirt__elemental2_dom_MediaTrackConstraintSet__elemental2_dom_ConstrainDOMStringParameters(/** !MediaTrackConstraintSet */ $thisArg, /** ConstrainDOMStringParameters */ deviceId) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.deviceId = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(deviceId));
 }
 
 static m_setDeviceId__$devirt__elemental2_dom_MediaTrackConstraintSet__elemental2_core_JsArray(/** !MediaTrackConstraintSet */ $thisArg, /** Array<?string> */ deviceId) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.deviceId = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(deviceId));
 }
 
 static m_setDeviceId__$devirt__elemental2_dom_MediaTrackConstraintSet__java_lang_String(/** !MediaTrackConstraintSet */ $thisArg, /** ?string */ deviceId) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.deviceId = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(deviceId));
 }
 
 static m_setDeviceId__$devirt__elemental2_dom_MediaTrackConstraintSet__arrayOf_java_lang_String(/** !MediaTrackConstraintSet */ $thisArg, /** Array<?string> */ deviceId) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  MediaTrackConstraintSet_$Overlay.m_setDeviceId__$devirt__elemental2_dom_MediaTrackConstraintSet__elemental2_core_JsArray($thisArg, /**@type {Array<?string>}*/ (Js.m_uncheckedCast__java_lang_Object(deviceId)));
 }
 
 static m_setEchoCancellation__$devirt__elemental2_dom_MediaTrackConstraintSet__elemental2_dom_ConstrainBooleanParameters(/** !MediaTrackConstraintSet */ $thisArg, /** ConstrainBooleanParameters */ echoCancellation) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.echoCancellation = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(echoCancellation));
 }
 
 static m_setEchoCancellation__$devirt__elemental2_dom_MediaTrackConstraintSet__boolean(/** !MediaTrackConstraintSet */ $thisArg, /** boolean */ echoCancellation) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.echoCancellation = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(echoCancellation));
 }
 
 static m_setFacingMode__$devirt__elemental2_dom_MediaTrackConstraintSet__elemental2_dom_ConstrainDOMStringParameters(/** !MediaTrackConstraintSet */ $thisArg, /** ConstrainDOMStringParameters */ facingMode) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.facingMode = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(facingMode));
 }
 
 static m_setFacingMode__$devirt__elemental2_dom_MediaTrackConstraintSet__elemental2_core_JsArray(/** !MediaTrackConstraintSet */ $thisArg, /** Array<?string> */ facingMode) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.facingMode = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(facingMode));
 }
 
 static m_setFacingMode__$devirt__elemental2_dom_MediaTrackConstraintSet__java_lang_String(/** !MediaTrackConstraintSet */ $thisArg, /** ?string */ facingMode) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.facingMode = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(facingMode));
 }
 
 static m_setFacingMode__$devirt__elemental2_dom_MediaTrackConstraintSet__arrayOf_java_lang_String(/** !MediaTrackConstraintSet */ $thisArg, /** Array<?string> */ facingMode) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  MediaTrackConstraintSet_$Overlay.m_setFacingMode__$devirt__elemental2_dom_MediaTrackConstraintSet__elemental2_core_JsArray($thisArg, /**@type {Array<?string>}*/ (Js.m_uncheckedCast__java_lang_Object(facingMode)));
 }
 
 static m_setFrameRate__$devirt__elemental2_dom_MediaTrackConstraintSet__elemental2_dom_ConstrainDoubleRange(/** !MediaTrackConstraintSet */ $thisArg, /** ConstrainDoubleRange */ frameRate) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.frameRate = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(frameRate));
 }
 
 static m_setFrameRate__$devirt__elemental2_dom_MediaTrackConstraintSet__double(/** !MediaTrackConstraintSet */ $thisArg, /** number */ frameRate) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.frameRate = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(frameRate));
 }
 
 static m_setGroupId__$devirt__elemental2_dom_MediaTrackConstraintSet__elemental2_dom_ConstrainDOMStringParameters(/** !MediaTrackConstraintSet */ $thisArg, /** ConstrainDOMStringParameters */ groupId) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.groupId = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(groupId));
 }
 
 static m_setGroupId__$devirt__elemental2_dom_MediaTrackConstraintSet__elemental2_core_JsArray(/** !MediaTrackConstraintSet */ $thisArg, /** Array<?string> */ groupId) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.groupId = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(groupId));
 }
 
 static m_setGroupId__$devirt__elemental2_dom_MediaTrackConstraintSet__java_lang_String(/** !MediaTrackConstraintSet */ $thisArg, /** ?string */ groupId) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.groupId = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(groupId));
 }
 
 static m_setGroupId__$devirt__elemental2_dom_MediaTrackConstraintSet__arrayOf_java_lang_String(/** !MediaTrackConstraintSet */ $thisArg, /** Array<?string> */ groupId) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  MediaTrackConstraintSet_$Overlay.m_setGroupId__$devirt__elemental2_dom_MediaTrackConstraintSet__elemental2_core_JsArray($thisArg, /**@type {Array<?string>}*/ (Js.m_uncheckedCast__java_lang_Object(groupId)));
 }
 
 static m_setHeight__$devirt__elemental2_dom_MediaTrackConstraintSet__elemental2_dom_ConstrainLongRange(/** !MediaTrackConstraintSet */ $thisArg, /** ConstrainLongRange */ height) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.height = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(height));
 }
 
 static m_setHeight__$devirt__elemental2_dom_MediaTrackConstraintSet__int(/** !MediaTrackConstraintSet */ $thisArg, /** number */ height) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.height = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(height));
 }
 
 static m_setLatency__$devirt__elemental2_dom_MediaTrackConstraintSet__elemental2_dom_ConstrainDoubleRange(/** !MediaTrackConstraintSet */ $thisArg, /** ConstrainDoubleRange */ latency) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.latency = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(latency));
 }
 
 static m_setLatency__$devirt__elemental2_dom_MediaTrackConstraintSet__double(/** !MediaTrackConstraintSet */ $thisArg, /** number */ latency) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.latency = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(latency));
 }
 
 static m_setNoiseSuppression__$devirt__elemental2_dom_MediaTrackConstraintSet__elemental2_dom_ConstrainBooleanParameters(/** !MediaTrackConstraintSet */ $thisArg, /** ConstrainBooleanParameters */ noiseSuppression) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.noiseSuppression = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(noiseSuppression));
 }
 
 static m_setNoiseSuppression__$devirt__elemental2_dom_MediaTrackConstraintSet__boolean(/** !MediaTrackConstraintSet */ $thisArg, /** boolean */ noiseSuppression) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.noiseSuppression = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(noiseSuppression));
 }
 
 static m_setSampleRate__$devirt__elemental2_dom_MediaTrackConstraintSet__elemental2_dom_ConstrainLongRange(/** !MediaTrackConstraintSet */ $thisArg, /** ConstrainLongRange */ sampleRate) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.sampleRate = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sampleRate));
 }
 
 static m_setSampleRate__$devirt__elemental2_dom_MediaTrackConstraintSet__int(/** !MediaTrackConstraintSet */ $thisArg, /** number */ sampleRate) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.sampleRate = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sampleRate));
 }
 
 static m_setSampleSize__$devirt__elemental2_dom_MediaTrackConstraintSet__elemental2_dom_ConstrainLongRange(/** !MediaTrackConstraintSet */ $thisArg, /** ConstrainLongRange */ sampleSize) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.sampleSize = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sampleSize));
 }
 
 static m_setSampleSize__$devirt__elemental2_dom_MediaTrackConstraintSet__int(/** !MediaTrackConstraintSet */ $thisArg, /** number */ sampleSize) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.sampleSize = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(sampleSize));
 }
 
 static m_setVolume__$devirt__elemental2_dom_MediaTrackConstraintSet__elemental2_dom_ConstrainDoubleRange(/** !MediaTrackConstraintSet */ $thisArg, /** ConstrainDoubleRange */ volume) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.volume = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(volume));
 }
 
 static m_setVolume__$devirt__elemental2_dom_MediaTrackConstraintSet__double(/** !MediaTrackConstraintSet */ $thisArg, /** number */ volume) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.volume = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(volume));
 }
 
 static m_setWidth__$devirt__elemental2_dom_MediaTrackConstraintSet__elemental2_dom_ConstrainLongRange(/** !MediaTrackConstraintSet */ $thisArg, /** ConstrainLongRange */ width) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.width = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(width));
 }
 
 static m_setWidth__$devirt__elemental2_dom_MediaTrackConstraintSet__int(/** !MediaTrackConstraintSet */ $thisArg, /** number */ width) {
  MediaTrackConstraintSet_$Overlay.$clinit();
  $thisArg.width = /**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(width));
 }
 
 static $clinit() {
  MediaTrackConstraintSet_$Overlay.$clinit = () =>{};
  MediaTrackConstraintSet_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
 }
 
}

exports = MediaTrackConstraintSet_$Overlay; 
//# sourceMappingURL=MediaTrackConstraintSet$$Overlay.js.map
