goog.module('org.gwtproject.dom.style.shared.CssProperty.$31$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssProperty = goog.require('org.gwtproject.dom.style.shared.CssProperty$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $31 extends CssProperty {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$31} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $31.$clinit();
  let $instance = new $31();
  $instance.$ctor__org_gwtproject_dom_style_shared_CssProperty_31__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_CssProperty_31__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_CssProperty__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getJsName__() {
  return "color";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** CssProperty */ arg0) {
  return super.compareTo(/**@type {CssProperty}*/ ($Casts.$to(arg0, CssProperty)));
 }
 
 static $clinit() {
  $31.$clinit = () =>{};
  $31.$loadModules();
  CssProperty.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $31;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($31, 'org.gwtproject.dom.style.shared.CssProperty$31');

exports = $31; 
//# sourceMappingURL=CssProperty$31.js.map
