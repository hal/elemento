goog.module('org.gwtproject.dom.style.shared.CssProperty.$15$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssProperty = goog.require('org.gwtproject.dom.style.shared.CssProperty$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $15 extends CssProperty {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$15} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $15.$clinit();
  let $instance = new $15();
  $instance.$ctor__org_gwtproject_dom_style_shared_CssProperty_15__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_CssProperty_15__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_CssProperty__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getJsName__() {
  return "overflowX";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** CssProperty */ arg0) {
  return super.compareTo(/**@type {CssProperty}*/ ($Casts.$to(arg0, CssProperty)));
 }
 
 static $clinit() {
  $15.$clinit = () =>{};
  $15.$loadModules();
  CssProperty.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $15;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($15, 'org.gwtproject.dom.style.shared.CssProperty$15');

exports = $15; 
//# sourceMappingURL=CssProperty$15.js.map
