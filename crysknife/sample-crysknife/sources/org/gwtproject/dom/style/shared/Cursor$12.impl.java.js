goog.module('org.gwtproject.dom.style.shared.Cursor.$12$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Cursor = goog.require('org.gwtproject.dom.style.shared.Cursor$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $12 extends Cursor {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$12} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $12.$clinit();
  let $instance = new $12();
  $instance.$ctor__org_gwtproject_dom_style_shared_Cursor_12__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_Cursor_12__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_Cursor__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getCssName__() {
  return "s-resize";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** Cursor */ arg0) {
  return super.compareTo(/**@type {Cursor}*/ ($Casts.$to(arg0, Cursor)));
 }
 
 static $clinit() {
  $12.$clinit = () =>{};
  $12.$loadModules();
  Cursor.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $12;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($12, 'org.gwtproject.dom.style.shared.Cursor$12');

exports = $12; 
//# sourceMappingURL=Cursor$12.js.map
