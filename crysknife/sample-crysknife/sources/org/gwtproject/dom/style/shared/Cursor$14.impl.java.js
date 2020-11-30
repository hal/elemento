goog.module('org.gwtproject.dom.style.shared.Cursor.$14$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Cursor = goog.require('org.gwtproject.dom.style.shared.Cursor$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $14 extends Cursor {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$14} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $14.$clinit();
  let $instance = new $14();
  $instance.$ctor__org_gwtproject_dom_style_shared_Cursor_14__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_Cursor_14__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_Cursor__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getCssName__() {
  return "text";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** Cursor */ arg0) {
  return super.compareTo(/**@type {Cursor}*/ ($Casts.$to(arg0, Cursor)));
 }
 
 static $clinit() {
  $14.$clinit = () =>{};
  $14.$loadModules();
  Cursor.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $14;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($14, 'org.gwtproject.dom.style.shared.Cursor$14');

exports = $14; 
//# sourceMappingURL=Cursor$14.js.map
