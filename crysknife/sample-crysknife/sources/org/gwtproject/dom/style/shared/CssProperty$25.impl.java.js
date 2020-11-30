goog.module('org.gwtproject.dom.style.shared.CssProperty.$25$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssProperty = goog.require('org.gwtproject.dom.style.shared.CssProperty$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $25 extends CssProperty {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$25} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $25.$clinit();
  let $instance = new $25();
  $instance.$ctor__org_gwtproject_dom_style_shared_CssProperty_25__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_CssProperty_25__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_CssProperty__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getJsName__() {
  return "height";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** CssProperty */ arg0) {
  return super.compareTo(/**@type {CssProperty}*/ ($Casts.$to(arg0, CssProperty)));
 }
 
 static $clinit() {
  $25.$clinit = () =>{};
  $25.$loadModules();
  CssProperty.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $25;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($25, 'org.gwtproject.dom.style.shared.CssProperty$25');

exports = $25; 
//# sourceMappingURL=CssProperty$25.js.map
