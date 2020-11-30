goog.module('org.gwtproject.dom.style.shared.Float.$2$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Float = goog.require('org.gwtproject.dom.style.shared.Float$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $2 extends Float {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$2} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_gwtproject_dom_style_shared_Float_2__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_Float_2__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_Float__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getCssName__() {
  return "right";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** Float */ arg0) {
  return super.compareTo(/**@type {Float}*/ ($Casts.$to(arg0, Float)));
 }
 
 static $clinit() {
  $2.$clinit = () =>{};
  $2.$loadModules();
  Float.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $2;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($2, 'org.gwtproject.dom.style.shared.Float$2');

exports = $2; 
//# sourceMappingURL=Float$2.js.map
