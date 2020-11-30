goog.module('org.gwtproject.dom.style.shared.CssProperty.$46$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssProperty = goog.require('org.gwtproject.dom.style.shared.CssProperty$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $46 extends CssProperty {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$46} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $46.$clinit();
  let $instance = new $46();
  $instance.$ctor__org_gwtproject_dom_style_shared_CssProperty_46__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_CssProperty_46__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_CssProperty__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getJsName__() {
  return "outlineWidth";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** CssProperty */ arg0) {
  return super.compareTo(/**@type {CssProperty}*/ ($Casts.$to(arg0, CssProperty)));
 }
 
 static $clinit() {
  $46.$clinit = () =>{};
  $46.$loadModules();
  CssProperty.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $46;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($46, 'org.gwtproject.dom.style.shared.CssProperty$46');

exports = $46; 
//# sourceMappingURL=CssProperty$46.js.map
