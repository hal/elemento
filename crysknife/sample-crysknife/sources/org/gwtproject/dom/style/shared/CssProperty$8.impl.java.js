goog.module('org.gwtproject.dom.style.shared.CssProperty.$8$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssProperty = goog.require('org.gwtproject.dom.style.shared.CssProperty$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $8 extends CssProperty {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$8} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $8.$clinit();
  let $instance = new $8();
  $instance.$ctor__org_gwtproject_dom_style_shared_CssProperty_8__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_CssProperty_8__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_CssProperty__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getJsName__() {
  return "position";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** CssProperty */ arg0) {
  return super.compareTo(/**@type {CssProperty}*/ ($Casts.$to(arg0, CssProperty)));
 }
 
 static $clinit() {
  $8.$clinit = () =>{};
  $8.$loadModules();
  CssProperty.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $8;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($8, 'org.gwtproject.dom.style.shared.CssProperty$8');

exports = $8; 
//# sourceMappingURL=CssProperty$8.js.map
