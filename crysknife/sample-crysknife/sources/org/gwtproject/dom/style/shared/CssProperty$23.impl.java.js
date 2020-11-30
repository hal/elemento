goog.module('org.gwtproject.dom.style.shared.CssProperty.$23$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssProperty = goog.require('org.gwtproject.dom.style.shared.CssProperty$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $23 extends CssProperty {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$23} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $23.$clinit();
  let $instance = new $23();
  $instance.$ctor__org_gwtproject_dom_style_shared_CssProperty_23__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_CssProperty_23__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_CssProperty__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getJsName__() {
  return "listStyleType";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** CssProperty */ arg0) {
  return super.compareTo(/**@type {CssProperty}*/ ($Casts.$to(arg0, CssProperty)));
 }
 
 static $clinit() {
  $23.$clinit = () =>{};
  $23.$loadModules();
  CssProperty.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $23;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($23, 'org.gwtproject.dom.style.shared.CssProperty$23');

exports = $23; 
//# sourceMappingURL=CssProperty$23.js.map
