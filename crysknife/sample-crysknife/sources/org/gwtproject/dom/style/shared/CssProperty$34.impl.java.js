goog.module('org.gwtproject.dom.style.shared.CssProperty.$34$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssProperty = goog.require('org.gwtproject.dom.style.shared.CssProperty$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $34 extends CssProperty {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$34} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $34.$clinit();
  let $instance = new $34();
  $instance.$ctor__org_gwtproject_dom_style_shared_CssProperty_34__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_CssProperty_34__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_CssProperty__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getJsName__() {
  return "borderWidth";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** CssProperty */ arg0) {
  return super.compareTo(/**@type {CssProperty}*/ ($Casts.$to(arg0, CssProperty)));
 }
 
 static $clinit() {
  $34.$clinit = () =>{};
  $34.$loadModules();
  CssProperty.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $34;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($34, 'org.gwtproject.dom.style.shared.CssProperty$34');

exports = $34; 
//# sourceMappingURL=CssProperty$34.js.map
