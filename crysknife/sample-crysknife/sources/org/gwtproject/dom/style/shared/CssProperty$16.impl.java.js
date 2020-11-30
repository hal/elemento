goog.module('org.gwtproject.dom.style.shared.CssProperty.$16$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssProperty = goog.require('org.gwtproject.dom.style.shared.CssProperty$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $16 extends CssProperty {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$16} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $16.$clinit();
  let $instance = new $16();
  $instance.$ctor__org_gwtproject_dom_style_shared_CssProperty_16__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_CssProperty_16__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_CssProperty__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getJsName__() {
  return "overflowY";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** CssProperty */ arg0) {
  return super.compareTo(/**@type {CssProperty}*/ ($Casts.$to(arg0, CssProperty)));
 }
 
 static $clinit() {
  $16.$clinit = () =>{};
  $16.$loadModules();
  CssProperty.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $16;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($16, 'org.gwtproject.dom.style.shared.CssProperty$16');

exports = $16; 
//# sourceMappingURL=CssProperty$16.js.map
