goog.module('org.gwtproject.dom.style.shared.CssProperty.$32$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssProperty = goog.require('org.gwtproject.dom.style.shared.CssProperty$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $32 extends CssProperty {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$32} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $32.$clinit();
  let $instance = new $32();
  $instance.$ctor__org_gwtproject_dom_style_shared_CssProperty_32__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_CssProperty_32__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_CssProperty__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getJsName__() {
  return "clear";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** CssProperty */ arg0) {
  return super.compareTo(/**@type {CssProperty}*/ ($Casts.$to(arg0, CssProperty)));
 }
 
 static $clinit() {
  $32.$clinit = () =>{};
  $32.$loadModules();
  CssProperty.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $32;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($32, 'org.gwtproject.dom.style.shared.CssProperty$32');

exports = $32; 
//# sourceMappingURL=CssProperty$32.js.map
