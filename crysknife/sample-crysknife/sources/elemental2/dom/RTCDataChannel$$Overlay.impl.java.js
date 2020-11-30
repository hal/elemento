goog.module('elemental2.dom.RTCDataChannel.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let ArrayBuffer_$Overlay = goog.forwardDeclare('elemental2.core.ArrayBuffer.$Overlay$impl');
let ArrayBufferView_$Overlay = goog.forwardDeclare('elemental2.core.ArrayBufferView.$Overlay$impl');
let Blob_$Overlay = goog.forwardDeclare('elemental2.dom.Blob.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.RTCDataChannel.SendDataUnionType.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class RTCDataChannel_$Overlay {
 
 static m_send__$devirt__elemental2_dom_RTCDataChannel__elemental2_core_ArrayBuffer(/** !RTCDataChannel */ $thisArg, /** ArrayBuffer */ data) {
  RTCDataChannel_$Overlay.$clinit();
  $thisArg.send(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(data)));
 }
 
 static m_send__$devirt__elemental2_dom_RTCDataChannel__elemental2_core_ArrayBufferView(/** !RTCDataChannel */ $thisArg, /** ArrayBufferView */ data) {
  RTCDataChannel_$Overlay.$clinit();
  $thisArg.send(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(data)));
 }
 
 static m_send__$devirt__elemental2_dom_RTCDataChannel__elemental2_dom_Blob(/** !RTCDataChannel */ $thisArg, /** Blob */ data) {
  RTCDataChannel_$Overlay.$clinit();
  $thisArg.send(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(data)));
 }
 
 static m_send__$devirt__elemental2_dom_RTCDataChannel__java_lang_String(/** !RTCDataChannel */ $thisArg, /** ?string */ data) {
  RTCDataChannel_$Overlay.$clinit();
  $thisArg.send(/**@type {?}*/ (Js.m_uncheckedCast__java_lang_Object(data)));
 }
 
 static $clinit() {
  RTCDataChannel_$Overlay.$clinit = () =>{};
  RTCDataChannel_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}

exports = RTCDataChannel_$Overlay; 
//# sourceMappingURL=RTCDataChannel$$Overlay.js.map
