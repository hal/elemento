goog.module('org.gwtproject.dom.style.shared.CssProperty.$28$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssProperty = goog.require('org.gwtproject.dom.style.shared.CssProperty$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $28 extends CssProperty {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$28} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $28.$clinit();
  let $instance = new $28();
  $instance.$ctor__org_gwtproject_dom_style_shared_CssProperty_28__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_CssProperty_28__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_CssProperty__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getJsName__() {
  return "fontSize";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** CssProperty */ arg0) {
  return super.compareTo(/**@type {CssProperty}*/ ($Casts.$to(arg0, CssProperty)));
 }
 
 static $clinit() {
  $28.$clinit = () =>{};
  $28.$loadModules();
  CssProperty.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $28;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($28, 'org.gwtproject.dom.style.shared.CssProperty$28');

exports = $28; 
//# sourceMappingURL=CssProperty$28.js.map
