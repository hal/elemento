goog.module('org.gwtproject.dom.style.shared.CssProperty.$14$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssProperty = goog.require('org.gwtproject.dom.style.shared.CssProperty$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $14 extends CssProperty {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$14} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $14.$clinit();
  let $instance = new $14();
  $instance.$ctor__org_gwtproject_dom_style_shared_CssProperty_14__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_CssProperty_14__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_CssProperty__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getJsName__() {
  return "overflow";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** CssProperty */ arg0) {
  return super.compareTo(/**@type {CssProperty}*/ ($Casts.$to(arg0, CssProperty)));
 }
 
 static $clinit() {
  $14.$clinit = () =>{};
  $14.$loadModules();
  CssProperty.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $14;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($14, 'org.gwtproject.dom.style.shared.CssProperty$14');

exports = $14; 
//# sourceMappingURL=CssProperty$14.js.map
