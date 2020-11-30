goog.module('elemental2.dom.Cache.AddAllRequestsArrayUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.Request.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class AddAllRequestsArrayUnionType_$Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  AddAllRequestsArrayUnionType_$Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {Request} */
 static m_asRequest__$devirt__elemental2_dom_Cache_AddAllRequestsArrayUnionType(/** ? */ $thisArg) {
  AddAllRequestsArrayUnionType_$Overlay.$clinit();
  return /**@type {Request}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), $Overlay));
 }
 /** @return {?string} */
 static m_asString__$devirt__elemental2_dom_Cache_AddAllRequestsArrayUnionType(/** ? */ $thisArg) {
  AddAllRequestsArrayUnionType_$Overlay.$clinit();
  return Js.m_asString__java_lang_Object($thisArg);
 }
 /** @return {boolean} */
 static m_isRequest__$devirt__elemental2_dom_Cache_AddAllRequestsArrayUnionType(/** ? */ $thisArg) {
  AddAllRequestsArrayUnionType_$Overlay.$clinit();
  return $Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isString__$devirt__elemental2_dom_Cache_AddAllRequestsArrayUnionType(/** ? */ $thisArg) {
  AddAllRequestsArrayUnionType_$Overlay.$clinit();
  return j_l_String.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  AddAllRequestsArrayUnionType_$Overlay.$clinit = () =>{};
  AddAllRequestsArrayUnionType_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.Request.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}

exports = AddAllRequestsArrayUnionType_$Overlay; 
//# sourceMappingURL=Cache$AddAllRequestsArrayUnionType$$Overlay.js.map
