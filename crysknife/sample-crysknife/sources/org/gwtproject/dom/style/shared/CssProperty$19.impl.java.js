goog.module('org.gwtproject.dom.style.shared.CssProperty.$19$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssProperty = goog.require('org.gwtproject.dom.style.shared.CssProperty$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $19 extends CssProperty {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$19} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $19.$clinit();
  let $instance = new $19();
  $instance.$ctor__org_gwtproject_dom_style_shared_CssProperty_19__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_CssProperty_19__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_CssProperty__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getJsName__() {
  return "marginRight";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** CssProperty */ arg0) {
  return super.compareTo(/**@type {CssProperty}*/ ($Casts.$to(arg0, CssProperty)));
 }
 
 static $clinit() {
  $19.$clinit = () =>{};
  $19.$loadModules();
  CssProperty.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $19;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($19, 'org.gwtproject.dom.style.shared.CssProperty$19');

exports = $19; 
//# sourceMappingURL=CssProperty$19.js.map
