goog.module('org.gwtproject.dom.style.shared.CssProperty.$50$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssProperty = goog.require('org.gwtproject.dom.style.shared.CssProperty$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $50 extends CssProperty {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$50} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $50.$clinit();
  let $instance = new $50();
  $instance.$ctor__org_gwtproject_dom_style_shared_CssProperty_50__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_CssProperty_50__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_CssProperty__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getJsName__() {
  return "whiteSpace";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** CssProperty */ arg0) {
  return super.compareTo(/**@type {CssProperty}*/ ($Casts.$to(arg0, CssProperty)));
 }
 
 static $clinit() {
  $50.$clinit = () =>{};
  $50.$loadModules();
  CssProperty.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $50;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($50, 'org.gwtproject.dom.style.shared.CssProperty$50');

exports = $50; 
//# sourceMappingURL=CssProperty$50.js.map
