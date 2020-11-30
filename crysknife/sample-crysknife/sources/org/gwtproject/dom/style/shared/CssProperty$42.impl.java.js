goog.module('org.gwtproject.dom.style.shared.CssProperty.$42$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssProperty = goog.require('org.gwtproject.dom.style.shared.CssProperty$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $42 extends CssProperty {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$42} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $42.$clinit();
  let $instance = new $42();
  $instance.$ctor__org_gwtproject_dom_style_shared_CssProperty_42__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_CssProperty_42__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_CssProperty__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getJsName__() {
  return "textIndent";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** CssProperty */ arg0) {
  return super.compareTo(/**@type {CssProperty}*/ ($Casts.$to(arg0, CssProperty)));
 }
 
 static $clinit() {
  $42.$clinit = () =>{};
  $42.$loadModules();
  CssProperty.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $42;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($42, 'org.gwtproject.dom.style.shared.CssProperty$42');

exports = $42; 
//# sourceMappingURL=CssProperty$42.js.map
