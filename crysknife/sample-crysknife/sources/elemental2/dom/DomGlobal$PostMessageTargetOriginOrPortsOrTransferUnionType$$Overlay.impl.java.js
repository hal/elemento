goog.module('elemental2.dom.DomGlobal.PostMessageTargetOriginOrPortsOrTransferUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.core.JsArray.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class PostMessageTargetOriginOrPortsOrTransferUnionType_$Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  PostMessageTargetOriginOrPortsOrTransferUnionType_$Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {Array<*>} */
 static m_asJsArray__$devirt__elemental2_dom_DomGlobal_PostMessageTargetOriginOrPortsOrTransferUnionType(/** ? */ $thisArg) {
  PostMessageTargetOriginOrPortsOrTransferUnionType_$Overlay.$clinit();
  return /**@type {Array<*>}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), $Overlay));
 }
 /** @return {?string} */
 static m_asString__$devirt__elemental2_dom_DomGlobal_PostMessageTargetOriginOrPortsOrTransferUnionType(/** ? */ $thisArg) {
  PostMessageTargetOriginOrPortsOrTransferUnionType_$Overlay.$clinit();
  return Js.m_asString__java_lang_Object($thisArg);
 }
 /** @return {boolean} */
 static m_isJsArray__$devirt__elemental2_dom_DomGlobal_PostMessageTargetOriginOrPortsOrTransferUnionType(/** ? */ $thisArg) {
  PostMessageTargetOriginOrPortsOrTransferUnionType_$Overlay.$clinit();
  return $Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isString__$devirt__elemental2_dom_DomGlobal_PostMessageTargetOriginOrPortsOrTransferUnionType(/** ? */ $thisArg) {
  PostMessageTargetOriginOrPortsOrTransferUnionType_$Overlay.$clinit();
  return j_l_String.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  PostMessageTargetOriginOrPortsOrTransferUnionType_$Overlay.$clinit = () =>{};
  PostMessageTargetOriginOrPortsOrTransferUnionType_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.core.JsArray.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}

exports = PostMessageTargetOriginOrPortsOrTransferUnionType_$Overlay; 
//# sourceMappingURL=DomGlobal$PostMessageTargetOriginOrPortsOrTransferUnionType$$Overlay.js.map
