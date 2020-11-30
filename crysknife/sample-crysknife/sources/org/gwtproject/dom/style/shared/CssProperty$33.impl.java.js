goog.module('org.gwtproject.dom.style.shared.CssProperty.$33$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssProperty = goog.require('org.gwtproject.dom.style.shared.CssProperty$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $33 extends CssProperty {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$33} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $33.$clinit();
  let $instance = new $33();
  $instance.$ctor__org_gwtproject_dom_style_shared_CssProperty_33__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_CssProperty_33__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_CssProperty__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getJsName__() {
  return "bottom";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** CssProperty */ arg0) {
  return super.compareTo(/**@type {CssProperty}*/ ($Casts.$to(arg0, CssProperty)));
 }
 
 static $clinit() {
  $33.$clinit = () =>{};
  $33.$loadModules();
  CssProperty.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $33;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($33, 'org.gwtproject.dom.style.shared.CssProperty$33');

exports = $33; 
//# sourceMappingURL=CssProperty$33.js.map
