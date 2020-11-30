goog.module('org.gwtproject.dom.style.shared.CssProperty.$41$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssProperty = goog.require('org.gwtproject.dom.style.shared.CssProperty$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $41 extends CssProperty {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$41} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $41.$clinit();
  let $instance = new $41();
  $instance.$ctor__org_gwtproject_dom_style_shared_CssProperty_41__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_CssProperty_41__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_CssProperty__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getJsName__() {
  return "textAlign";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** CssProperty */ arg0) {
  return super.compareTo(/**@type {CssProperty}*/ ($Casts.$to(arg0, CssProperty)));
 }
 
 static $clinit() {
  $41.$clinit = () =>{};
  $41.$loadModules();
  CssProperty.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $41;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($41, 'org.gwtproject.dom.style.shared.CssProperty$41');

exports = $41; 
//# sourceMappingURL=CssProperty$41.js.map
