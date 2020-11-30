goog.module('org.gwtproject.dom.style.shared.Unit.$2$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Unit = goog.require('org.gwtproject.dom.style.shared.Unit$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $2 extends Unit {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$2} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_gwtproject_dom_style_shared_Unit_2__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_Unit_2__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_Unit__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getType__() {
  return "%";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** Unit */ arg0) {
  return super.compareTo(/**@type {Unit}*/ ($Casts.$to(arg0, Unit)));
 }
 
 static $clinit() {
  $2.$clinit = () =>{};
  $2.$loadModules();
  Unit.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $2;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($2, 'org.gwtproject.dom.style.shared.Unit$2');

exports = $2; 
//# sourceMappingURL=Unit$2.js.map
