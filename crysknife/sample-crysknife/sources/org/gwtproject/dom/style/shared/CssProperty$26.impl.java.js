goog.module('org.gwtproject.dom.style.shared.CssProperty.$26$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssProperty = goog.require('org.gwtproject.dom.style.shared.CssProperty$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $26 extends CssProperty {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$26} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $26.$clinit();
  let $instance = new $26();
  $instance.$ctor__org_gwtproject_dom_style_shared_CssProperty_26__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_CssProperty_26__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_CssProperty__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getJsName__() {
  return "fontWeight";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** CssProperty */ arg0) {
  return super.compareTo(/**@type {CssProperty}*/ ($Casts.$to(arg0, CssProperty)));
 }
 
 static $clinit() {
  $26.$clinit = () =>{};
  $26.$loadModules();
  CssProperty.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $26;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($26, 'org.gwtproject.dom.style.shared.CssProperty$26');

exports = $26; 
//# sourceMappingURL=CssProperty$26.js.map
