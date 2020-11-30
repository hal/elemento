goog.module('org.gwtproject.dom.style.shared.CssProperty.$22$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssProperty = goog.require('org.gwtproject.dom.style.shared.CssProperty$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $22 extends CssProperty {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$22} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $22.$clinit();
  let $instance = new $22();
  $instance.$ctor__org_gwtproject_dom_style_shared_CssProperty_22__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_CssProperty_22__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_CssProperty__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getJsName__() {
  return "margin";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** CssProperty */ arg0) {
  return super.compareTo(/**@type {CssProperty}*/ ($Casts.$to(arg0, CssProperty)));
 }
 
 static $clinit() {
  $22.$clinit = () =>{};
  $22.$loadModules();
  CssProperty.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $22;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($22, 'org.gwtproject.dom.style.shared.CssProperty$22');

exports = $22; 
//# sourceMappingURL=CssProperty$22.js.map
