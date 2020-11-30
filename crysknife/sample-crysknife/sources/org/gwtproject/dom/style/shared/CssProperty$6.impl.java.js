goog.module('org.gwtproject.dom.style.shared.CssProperty.$6$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssProperty = goog.require('org.gwtproject.dom.style.shared.CssProperty$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $6 extends CssProperty {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$6} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $6.$clinit();
  let $instance = new $6();
  $instance.$ctor__org_gwtproject_dom_style_shared_CssProperty_6__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_CssProperty_6__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_CssProperty__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getJsName__() {
  return "textDecoration";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** CssProperty */ arg0) {
  return super.compareTo(/**@type {CssProperty}*/ ($Casts.$to(arg0, CssProperty)));
 }
 
 static $clinit() {
  $6.$clinit = () =>{};
  $6.$loadModules();
  CssProperty.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $6;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($6, 'org.gwtproject.dom.style.shared.CssProperty$6');

exports = $6; 
//# sourceMappingURL=CssProperty$6.js.map
