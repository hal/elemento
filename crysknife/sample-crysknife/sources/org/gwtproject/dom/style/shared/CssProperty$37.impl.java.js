goog.module('org.gwtproject.dom.style.shared.CssProperty.$37$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssProperty = goog.require('org.gwtproject.dom.style.shared.CssProperty$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $37 extends CssProperty {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$37} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $37.$clinit();
  let $instance = new $37();
  $instance.$ctor__org_gwtproject_dom_style_shared_CssProperty_37__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_CssProperty_37__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_CssProperty__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getJsName__() {
  return "backgroundImage";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** CssProperty */ arg0) {
  return super.compareTo(/**@type {CssProperty}*/ ($Casts.$to(arg0, CssProperty)));
 }
 
 static $clinit() {
  $37.$clinit = () =>{};
  $37.$loadModules();
  CssProperty.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $37;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($37, 'org.gwtproject.dom.style.shared.CssProperty$37');

exports = $37; 
//# sourceMappingURL=CssProperty$37.js.map
