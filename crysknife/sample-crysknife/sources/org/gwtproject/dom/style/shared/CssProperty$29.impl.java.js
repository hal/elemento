goog.module('org.gwtproject.dom.style.shared.CssProperty.$29$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssProperty = goog.require('org.gwtproject.dom.style.shared.CssProperty$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $29 extends CssProperty {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$29} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $29.$clinit();
  let $instance = new $29();
  $instance.$ctor__org_gwtproject_dom_style_shared_CssProperty_29__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_CssProperty_29__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_CssProperty__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getJsName__() {
  return "display";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** CssProperty */ arg0) {
  return super.compareTo(/**@type {CssProperty}*/ ($Casts.$to(arg0, CssProperty)));
 }
 
 static $clinit() {
  $29.$clinit = () =>{};
  $29.$loadModules();
  CssProperty.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $29;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($29, 'org.gwtproject.dom.style.shared.CssProperty$29');

exports = $29; 
//# sourceMappingURL=CssProperty$29.js.map
