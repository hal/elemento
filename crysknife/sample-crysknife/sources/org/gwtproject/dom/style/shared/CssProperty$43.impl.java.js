goog.module('org.gwtproject.dom.style.shared.CssProperty.$43$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssProperty = goog.require('org.gwtproject.dom.style.shared.CssProperty$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $43 extends CssProperty {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$43} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $43.$clinit();
  let $instance = new $43();
  $instance.$ctor__org_gwtproject_dom_style_shared_CssProperty_43__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_CssProperty_43__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_CssProperty__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getJsName__() {
  return "textJustify";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** CssProperty */ arg0) {
  return super.compareTo(/**@type {CssProperty}*/ ($Casts.$to(arg0, CssProperty)));
 }
 
 static $clinit() {
  $43.$clinit = () =>{};
  $43.$loadModules();
  CssProperty.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $43;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($43, 'org.gwtproject.dom.style.shared.CssProperty$43');

exports = $43; 
//# sourceMappingURL=CssProperty$43.js.map
