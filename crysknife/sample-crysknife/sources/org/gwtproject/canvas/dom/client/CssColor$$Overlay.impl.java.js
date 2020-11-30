goog.module('org.gwtproject.canvas.dom.client.CssColor.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class CssColor_$Overlay {
 /** @return {String} */
 static m_make__int__int__int(/** number */ r, /** number */ g, /** number */ b) {
  CssColor_$Overlay.$clinit();
  return CssColor_$Overlay.m_make__java_lang_String("rgb(" + r + "," + g + "," + b + ")");
 }
 /** @return {String} */
 static m_make__java_lang_String(/** ?string */ cssColor) {
  CssColor_$Overlay.$clinit();
  return /**@type {String}*/ (Js.m_uncheckedCast__java_lang_Object(cssColor));
 }
 /** @return {?string} */
 static m_value__$devirt__org_gwtproject_canvas_dom_client_CssColor(/** !String */ $thisArg) {
  CssColor_$Overlay.$clinit();
  return /**@type {?string}*/ ($Casts.$to($Overlay.m_cast__$devirt__org_gwtproject_core_client_JavaScriptObject($thisArg), j_l_String));
 }
 
 static $clinit() {
  CssColor_$Overlay.$clinit = () =>{};
  CssColor_$Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof String;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  $Overlay = goog.module.get('org.gwtproject.core.client.JavaScriptObject.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(CssColor_$Overlay, 'String');

exports = CssColor_$Overlay; 
//# sourceMappingURL=CssColor$$Overlay.js.map
