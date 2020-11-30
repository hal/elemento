goog.module('org.gwtproject.dom.style.shared.CssProperty.$40$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssProperty = goog.require('org.gwtproject.dom.style.shared.CssProperty$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $40 extends CssProperty {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$40} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $40.$clinit();
  let $instance = new $40();
  $instance.$ctor__org_gwtproject_dom_style_shared_CssProperty_40__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_CssProperty_40__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_CssProperty__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getJsName__() {
  return "tableLayout";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** CssProperty */ arg0) {
  return super.compareTo(/**@type {CssProperty}*/ ($Casts.$to(arg0, CssProperty)));
 }
 
 static $clinit() {
  $40.$clinit = () =>{};
  $40.$loadModules();
  CssProperty.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $40;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($40, 'org.gwtproject.dom.style.shared.CssProperty$40');

exports = $40; 
//# sourceMappingURL=CssProperty$40.js.map
