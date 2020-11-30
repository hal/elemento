goog.module('org.gwtproject.dom.style.shared.CssProperty.$13$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssProperty = goog.require('org.gwtproject.dom.style.shared.CssProperty$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $13 extends CssProperty {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$13} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $13.$clinit();
  let $instance = new $13();
  $instance.$ctor__org_gwtproject_dom_style_shared_CssProperty_13__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_CssProperty_13__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_CssProperty__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getJsName__() {
  return "padding";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** CssProperty */ arg0) {
  return super.compareTo(/**@type {CssProperty}*/ ($Casts.$to(arg0, CssProperty)));
 }
 
 static $clinit() {
  $13.$clinit = () =>{};
  $13.$loadModules();
  CssProperty.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $13;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($13, 'org.gwtproject.dom.style.shared.CssProperty$13');

exports = $13; 
//# sourceMappingURL=CssProperty$13.js.map
