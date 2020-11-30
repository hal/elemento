goog.module('org.gwtproject.dom.style.shared.Unit.$6$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Unit = goog.require('org.gwtproject.dom.style.shared.Unit$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $6 extends Unit {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$6} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $6.$clinit();
  let $instance = new $6();
  $instance.$ctor__org_gwtproject_dom_style_shared_Unit_6__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_Unit_6__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_Unit__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getType__() {
  return "pc";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** Unit */ arg0) {
  return super.compareTo(/**@type {Unit}*/ ($Casts.$to(arg0, Unit)));
 }
 
 static $clinit() {
  $6.$clinit = () =>{};
  $6.$loadModules();
  Unit.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $6;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($6, 'org.gwtproject.dom.style.shared.Unit$6');

exports = $6; 
//# sourceMappingURL=Unit$6.js.map
