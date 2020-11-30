goog.module('org.gwtproject.dom.style.shared.Unit.$9$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Unit = goog.require('org.gwtproject.dom.style.shared.Unit$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $9 extends Unit {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$9} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $9.$clinit();
  let $instance = new $9();
  $instance.$ctor__org_gwtproject_dom_style_shared_Unit_9__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_Unit_9__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_Unit__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getType__() {
  return "mm";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** Unit */ arg0) {
  return super.compareTo(/**@type {Unit}*/ ($Casts.$to(arg0, Unit)));
 }
 
 static $clinit() {
  $9.$clinit = () =>{};
  $9.$loadModules();
  Unit.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $9;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($9, 'org.gwtproject.dom.style.shared.Unit$9');

exports = $9; 
//# sourceMappingURL=Unit$9.js.map
