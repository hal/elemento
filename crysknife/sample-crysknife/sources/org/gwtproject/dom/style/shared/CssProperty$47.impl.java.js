goog.module('org.gwtproject.dom.style.shared.CssProperty.$47$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssProperty = goog.require('org.gwtproject.dom.style.shared.CssProperty$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $47 extends CssProperty {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$47} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $47.$clinit();
  let $instance = new $47();
  $instance.$ctor__org_gwtproject_dom_style_shared_CssProperty_47__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_CssProperty_47__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_CssProperty__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getJsName__() {
  return "outlineStyle";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** CssProperty */ arg0) {
  return super.compareTo(/**@type {CssProperty}*/ ($Casts.$to(arg0, CssProperty)));
 }
 
 static $clinit() {
  $47.$clinit = () =>{};
  $47.$loadModules();
  CssProperty.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $47;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($47, 'org.gwtproject.dom.style.shared.CssProperty$47');

exports = $47; 
//# sourceMappingURL=CssProperty$47.js.map
