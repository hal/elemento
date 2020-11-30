goog.module('org.gwtproject.dom.style.shared.Float.$3$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Float = goog.require('org.gwtproject.dom.style.shared.Float$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $3 extends Float {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$3} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $3.$clinit();
  let $instance = new $3();
  $instance.$ctor__org_gwtproject_dom_style_shared_Float_3__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_Float_3__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_Float__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getCssName__() {
  return "none";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** Float */ arg0) {
  return super.compareTo(/**@type {Float}*/ ($Casts.$to(arg0, Float)));
 }
 
 static $clinit() {
  $3.$clinit = () =>{};
  $3.$loadModules();
  Float.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $3;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($3, 'org.gwtproject.dom.style.shared.Float$3');

exports = $3; 
//# sourceMappingURL=Float$3.js.map
