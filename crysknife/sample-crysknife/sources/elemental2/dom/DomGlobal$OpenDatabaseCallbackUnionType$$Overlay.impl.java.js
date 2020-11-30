goog.module('elemental2.dom.DomGlobal.OpenDatabaseCallbackUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let Database_$Overlay = goog.forwardDeclare('elemental2.dom.Database.$Overlay$impl');
let $Overlay = goog.forwardDeclare('elemental2.dom.DatabaseCallback.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $JavaScriptFunction = goog.forwardDeclare('vmbootstrap.JavaScriptFunction$impl');

class OpenDatabaseCallbackUnionType_$Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  OpenDatabaseCallbackUnionType_$Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {DatabaseCallback} */
 static m_asDatabaseCallback__$devirt__elemental2_dom_DomGlobal_OpenDatabaseCallbackUnionType(/** ? */ $thisArg) {
  OpenDatabaseCallbackUnionType_$Overlay.$clinit();
  return /**@type {DatabaseCallback}*/ (Js.m_cast__java_lang_Object($thisArg));
 }
 /** @return {?function(Database):*} */
 static m_asOpenDatabaseCallbackFn__$devirt__elemental2_dom_DomGlobal_OpenDatabaseCallbackUnionType(/** ? */ $thisArg) {
  OpenDatabaseCallbackUnionType_$Overlay.$clinit();
  return /**@type {?function(Database):*}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), $JavaScriptFunction));
 }
 /** @return {boolean} */
 static m_isOpenDatabaseCallbackFn__$devirt__elemental2_dom_DomGlobal_OpenDatabaseCallbackUnionType(/** ? */ $thisArg) {
  OpenDatabaseCallbackUnionType_$Overlay.$clinit();
  return $JavaScriptFunction.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  OpenDatabaseCallbackUnionType_$Overlay.$clinit = () =>{};
  OpenDatabaseCallbackUnionType_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $JavaScriptFunction = goog.module.get('vmbootstrap.JavaScriptFunction$impl');
 }
 
}

exports = OpenDatabaseCallbackUnionType_$Overlay; 
//# sourceMappingURL=DomGlobal$OpenDatabaseCallbackUnionType$$Overlay.js.map
