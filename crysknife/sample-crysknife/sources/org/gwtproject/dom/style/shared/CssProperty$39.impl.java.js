goog.module('org.gwtproject.dom.style.shared.CssProperty.$39$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssProperty = goog.require('org.gwtproject.dom.style.shared.CssProperty$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $39 extends CssProperty {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$39} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $39.$clinit();
  let $instance = new $39();
  $instance.$ctor__org_gwtproject_dom_style_shared_CssProperty_39__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_CssProperty_39__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_CssProperty__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getJsName__() {
  return "verticalAlign";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** CssProperty */ arg0) {
  return super.compareTo(/**@type {CssProperty}*/ ($Casts.$to(arg0, CssProperty)));
 }
 
 static $clinit() {
  $39.$clinit = () =>{};
  $39.$loadModules();
  CssProperty.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $39;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($39, 'org.gwtproject.dom.style.shared.CssProperty$39');

exports = $39; 
//# sourceMappingURL=CssProperty$39.js.map
