goog.module('elemental2.dom.Console.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.core.JsObject.$Overlay$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');

class Console_$Overlay {
 
 static m_table__$devirt__elemental2_dom_Console__java_lang_Object__java_lang_Object(/** !Console */ $thisArg, /** * */ tabularData, /** * */ properties) {
  Console_$Overlay.$clinit();
  $thisArg.table(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(tabularData)), properties);
 }
 
 static m_table__$devirt__elemental2_dom_Console__java_lang_Object(/** !Console */ $thisArg, /** * */ tabularData) {
  Console_$Overlay.$clinit();
  $thisArg.table(/**@type {Object}*/ (Js.m_uncheckedCast__java_lang_Object(tabularData)));
 }
 
 static $clinit() {
  Console_$Overlay.$clinit = () =>{};
  Console_$Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Console;
 }
 
 static $loadModules() {
  Js = goog.module.get('jsinterop.base.Js$impl');
 }
 
}
$Util.$setClassMetadata(Console_$Overlay, 'Console');

exports = Console_$Overlay; 
//# sourceMappingURL=Console$$Overlay.js.map
