goog.module('org.gwtproject.dom.style.shared.CssProperty.$27$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssProperty = goog.require('org.gwtproject.dom.style.shared.CssProperty$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $27 extends CssProperty {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$27} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $27.$clinit();
  let $instance = new $27();
  $instance.$ctor__org_gwtproject_dom_style_shared_CssProperty_27__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_CssProperty_27__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_CssProperty__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getJsName__() {
  return "fontStyle";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** CssProperty */ arg0) {
  return super.compareTo(/**@type {CssProperty}*/ ($Casts.$to(arg0, CssProperty)));
 }
 
 static $clinit() {
  $27.$clinit = () =>{};
  $27.$loadModules();
  CssProperty.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $27;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($27, 'org.gwtproject.dom.style.shared.CssProperty$27');

exports = $27; 
//# sourceMappingURL=CssProperty$27.js.map
