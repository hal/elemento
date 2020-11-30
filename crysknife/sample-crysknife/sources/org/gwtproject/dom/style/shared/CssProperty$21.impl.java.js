goog.module('org.gwtproject.dom.style.shared.CssProperty.$21$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssProperty = goog.require('org.gwtproject.dom.style.shared.CssProperty$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $21 extends CssProperty {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$21} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $21.$clinit();
  let $instance = new $21();
  $instance.$ctor__org_gwtproject_dom_style_shared_CssProperty_21__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_CssProperty_21__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_CssProperty__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getJsName__() {
  return "marginBottom";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** CssProperty */ arg0) {
  return super.compareTo(/**@type {CssProperty}*/ ($Casts.$to(arg0, CssProperty)));
 }
 
 static $clinit() {
  $21.$clinit = () =>{};
  $21.$loadModules();
  CssProperty.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $21;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($21, 'org.gwtproject.dom.style.shared.CssProperty$21');

exports = $21; 
//# sourceMappingURL=CssProperty$21.js.map
