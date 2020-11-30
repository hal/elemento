goog.module('org.gwtproject.dom.style.shared.Unit.$1$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Unit = goog.require('org.gwtproject.dom.style.shared.Unit$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $1 extends Unit {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$1} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_dom_style_shared_Unit_1__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_Unit_1__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_Unit__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getType__() {
  return "px";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** Unit */ arg0) {
  return super.compareTo(/**@type {Unit}*/ ($Casts.$to(arg0, Unit)));
 }
 
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  Unit.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.dom.style.shared.Unit$1');

exports = $1; 
//# sourceMappingURL=Unit$1.js.map
