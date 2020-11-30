goog.module('org.gwtproject.dom.style.shared.CssProperty.$45$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssProperty = goog.require('org.gwtproject.dom.style.shared.CssProperty$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $45 extends CssProperty {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$45} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $45.$clinit();
  let $instance = new $45();
  $instance.$ctor__org_gwtproject_dom_style_shared_CssProperty_45__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_CssProperty_45__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_CssProperty__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getJsName__() {
  return "textTransform";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** CssProperty */ arg0) {
  return super.compareTo(/**@type {CssProperty}*/ ($Casts.$to(arg0, CssProperty)));
 }
 
 static $clinit() {
  $45.$clinit = () =>{};
  $45.$loadModules();
  CssProperty.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $45;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($45, 'org.gwtproject.dom.style.shared.CssProperty$45');

exports = $45; 
//# sourceMappingURL=CssProperty$45.js.map
