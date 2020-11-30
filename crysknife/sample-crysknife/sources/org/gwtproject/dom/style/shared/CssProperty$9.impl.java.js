goog.module('org.gwtproject.dom.style.shared.CssProperty.$9$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssProperty = goog.require('org.gwtproject.dom.style.shared.CssProperty$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $9 extends CssProperty {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$9} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $9.$clinit();
  let $instance = new $9();
  $instance.$ctor__org_gwtproject_dom_style_shared_CssProperty_9__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_CssProperty_9__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_CssProperty__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getJsName__() {
  return "paddingTop";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** CssProperty */ arg0) {
  return super.compareTo(/**@type {CssProperty}*/ ($Casts.$to(arg0, CssProperty)));
 }
 
 static $clinit() {
  $9.$clinit = () =>{};
  $9.$loadModules();
  CssProperty.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $9;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($9, 'org.gwtproject.dom.style.shared.CssProperty$9');

exports = $9; 
//# sourceMappingURL=CssProperty$9.js.map
