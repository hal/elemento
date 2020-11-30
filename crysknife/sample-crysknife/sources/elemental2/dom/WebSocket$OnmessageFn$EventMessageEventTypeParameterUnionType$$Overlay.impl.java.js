goog.module('elemental2.dom.WebSocket.OnmessageFn.EventMessageEventTypeParameterUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.core.ArrayBuffer.$Overlay$impl');
let Blob_$Overlay = goog.forwardDeclare('elemental2.dom.Blob.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class EventMessageEventTypeParameterUnionType_$Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  EventMessageEventTypeParameterUnionType_$Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {ArrayBuffer} */
 static m_asArrayBuffer__$devirt__elemental2_dom_WebSocket_OnmessageFn_EventMessageEventTypeParameterUnionType(/** ? */ $thisArg) {
  EventMessageEventTypeParameterUnionType_$Overlay.$clinit();
  return /**@type {ArrayBuffer}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), $Overlay));
 }
 /** @return {Blob} */
 static m_asBlob__$devirt__elemental2_dom_WebSocket_OnmessageFn_EventMessageEventTypeParameterUnionType(/** ? */ $thisArg) {
  EventMessageEventTypeParameterUnionType_$Overlay.$clinit();
  return /**@type {Blob}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), Blob_$Overlay));
 }
 /** @return {?string} */
 static m_asString__$devirt__elemental2_dom_WebSocket_OnmessageFn_EventMessageEventTypeParameterUnionType(/** ? */ $thisArg) {
  EventMessageEventTypeParameterUnionType_$Overlay.$clinit();
  return Js.m_asString__java_lang_Object($thisArg);
 }
 /** @return {boolean} */
 static m_isArrayBuffer__$devirt__elemental2_dom_WebSocket_OnmessageFn_EventMessageEventTypeParameterUnionType(/** ? */ $thisArg) {
  EventMessageEventTypeParameterUnionType_$Overlay.$clinit();
  return $Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isBlob__$devirt__elemental2_dom_WebSocket_OnmessageFn_EventMessageEventTypeParameterUnionType(/** ? */ $thisArg) {
  EventMessageEventTypeParameterUnionType_$Overlay.$clinit();
  return Blob_$Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isString__$devirt__elemental2_dom_WebSocket_OnmessageFn_EventMessageEventTypeParameterUnionType(/** ? */ $thisArg) {
  EventMessageEventTypeParameterUnionType_$Overlay.$clinit();
  return j_l_String.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  EventMessageEventTypeParameterUnionType_$Overlay.$clinit = () =>{};
  EventMessageEventTypeParameterUnionType_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.core.ArrayBuffer.$Overlay$impl');
  Blob_$Overlay = goog.module.get('elemental2.dom.Blob.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}

exports = EventMessageEventTypeParameterUnionType_$Overlay; 
//# sourceMappingURL=WebSocket$OnmessageFn$EventMessageEventTypeParameterUnionType$$Overlay.js.map
