goog.module('org.gwtproject.dom.style.shared.CssProperty.$18$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssProperty = goog.require('org.gwtproject.dom.style.shared.CssProperty$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $18 extends CssProperty {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$18} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $18.$clinit();
  let $instance = new $18();
  $instance.$ctor__org_gwtproject_dom_style_shared_CssProperty_18__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_CssProperty_18__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_CssProperty__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getJsName__() {
  return "marginTop";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** CssProperty */ arg0) {
  return super.compareTo(/**@type {CssProperty}*/ ($Casts.$to(arg0, CssProperty)));
 }
 
 static $clinit() {
  $18.$clinit = () =>{};
  $18.$loadModules();
  CssProperty.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $18;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($18, 'org.gwtproject.dom.style.shared.CssProperty$18');

exports = $18; 
//# sourceMappingURL=CssProperty$18.js.map
