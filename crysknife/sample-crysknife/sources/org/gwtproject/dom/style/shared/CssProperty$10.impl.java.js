goog.module('org.gwtproject.dom.style.shared.CssProperty.$10$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssProperty = goog.require('org.gwtproject.dom.style.shared.CssProperty$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $10 extends CssProperty {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$10} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $10.$clinit();
  let $instance = new $10();
  $instance.$ctor__org_gwtproject_dom_style_shared_CssProperty_10__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_CssProperty_10__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_CssProperty__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getJsName__() {
  return "paddingRight";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** CssProperty */ arg0) {
  return super.compareTo(/**@type {CssProperty}*/ ($Casts.$to(arg0, CssProperty)));
 }
 
 static $clinit() {
  $10.$clinit = () =>{};
  $10.$loadModules();
  CssProperty.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $10;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($10, 'org.gwtproject.dom.style.shared.CssProperty$10');

exports = $10; 
//# sourceMappingURL=CssProperty$10.js.map
