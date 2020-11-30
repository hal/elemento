goog.module('org.gwtproject.dom.style.shared.CssProperty.$24$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssProperty = goog.require('org.gwtproject.dom.style.shared.CssProperty$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $24 extends CssProperty {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$24} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $24.$clinit();
  let $instance = new $24();
  $instance.$ctor__org_gwtproject_dom_style_shared_CssProperty_24__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_CssProperty_24__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_CssProperty__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getJsName__() {
  return "left";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** CssProperty */ arg0) {
  return super.compareTo(/**@type {CssProperty}*/ ($Casts.$to(arg0, CssProperty)));
 }
 
 static $clinit() {
  $24.$clinit = () =>{};
  $24.$loadModules();
  CssProperty.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $24;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($24, 'org.gwtproject.dom.style.shared.CssProperty$24');

exports = $24; 
//# sourceMappingURL=CssProperty$24.js.map
