goog.module('elemental2.dom.Window.ImportScriptsVar_argsUnionType.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.TrustedScriptURL.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class ImportScriptsVar__argsUnionType_$Overlay {
 /** @return {?} */
 static m_of__java_lang_Object(/** * */ o) {
  ImportScriptsVar__argsUnionType_$Overlay.$clinit();
  return /**@type {?}*/ (Js.m_cast__java_lang_Object(o));
 }
 /** @return {?string} */
 static m_asString__$devirt__elemental2_dom_Window_ImportScriptsVar_argsUnionType(/** ? */ $thisArg) {
  ImportScriptsVar__argsUnionType_$Overlay.$clinit();
  return Js.m_asString__java_lang_Object($thisArg);
 }
 /** @return {TrustedScriptURL} */
 static m_asTrustedScriptURL__$devirt__elemental2_dom_Window_ImportScriptsVar_argsUnionType(/** ? */ $thisArg) {
  ImportScriptsVar__argsUnionType_$Overlay.$clinit();
  return /**@type {TrustedScriptURL}*/ ($Casts.$to(Js.m_cast__java_lang_Object($thisArg), $Overlay));
 }
 /** @return {boolean} */
 static m_isString__$devirt__elemental2_dom_Window_ImportScriptsVar_argsUnionType(/** ? */ $thisArg) {
  ImportScriptsVar__argsUnionType_$Overlay.$clinit();
  return j_l_String.$isInstance(/**@type {*}*/ ($thisArg));
 }
 /** @return {boolean} */
 static m_isTrustedScriptURL__$devirt__elemental2_dom_Window_ImportScriptsVar_argsUnionType(/** ? */ $thisArg) {
  ImportScriptsVar__argsUnionType_$Overlay.$clinit();
  return $Overlay.$isInstance(/**@type {*}*/ ($thisArg));
 }
 
 static $clinit() {
  ImportScriptsVar__argsUnionType_$Overlay.$clinit = () =>{};
  ImportScriptsVar__argsUnionType_$Overlay.$loadModules();
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.TrustedScriptURL.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}

exports = ImportScriptsVar__argsUnionType_$Overlay; 
//# sourceMappingURL=Window$ImportScriptsVar_argsUnionType$$Overlay.js.map
