goog.module('org.gwtproject.dom.style.shared.Cursor.$17$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Cursor = goog.require('org.gwtproject.dom.style.shared.Cursor$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $17 extends Cursor {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$17} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $17.$clinit();
  let $instance = new $17();
  $instance.$ctor__org_gwtproject_dom_style_shared_Cursor_17__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_Cursor_17__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_Cursor__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getCssName__() {
  return "col-resize";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** Cursor */ arg0) {
  return super.compareTo(/**@type {Cursor}*/ ($Casts.$to(arg0, Cursor)));
 }
 
 static $clinit() {
  $17.$clinit = () =>{};
  $17.$loadModules();
  Cursor.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $17;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($17, 'org.gwtproject.dom.style.shared.Cursor$17');

exports = $17; 
//# sourceMappingURL=Cursor$17.js.map
