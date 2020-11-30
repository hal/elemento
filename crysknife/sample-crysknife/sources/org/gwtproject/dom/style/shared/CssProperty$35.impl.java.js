goog.module('org.gwtproject.dom.style.shared.CssProperty.$35$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssProperty = goog.require('org.gwtproject.dom.style.shared.CssProperty$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $35 extends CssProperty {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$35} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $35.$clinit();
  let $instance = new $35();
  $instance.$ctor__org_gwtproject_dom_style_shared_CssProperty_35__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_CssProperty_35__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_CssProperty__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getJsName__() {
  return "borderStyle";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** CssProperty */ arg0) {
  return super.compareTo(/**@type {CssProperty}*/ ($Casts.$to(arg0, CssProperty)));
 }
 
 static $clinit() {
  $35.$clinit = () =>{};
  $35.$loadModules();
  CssProperty.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $35;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($35, 'org.gwtproject.dom.style.shared.CssProperty$35');

exports = $35; 
//# sourceMappingURL=CssProperty$35.js.map
