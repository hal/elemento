goog.module('org.gwtproject.dom.style.shared.CssProperty.$38$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssProperty = goog.require('org.gwtproject.dom.style.shared.CssProperty$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $38 extends CssProperty {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$38} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $38.$clinit();
  let $instance = new $38();
  $instance.$ctor__org_gwtproject_dom_style_shared_CssProperty_38__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_CssProperty_38__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_CssProperty__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getJsName__() {
  return "backgroundColor";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** CssProperty */ arg0) {
  return super.compareTo(/**@type {CssProperty}*/ ($Casts.$to(arg0, CssProperty)));
 }
 
 static $clinit() {
  $38.$clinit = () =>{};
  $38.$loadModules();
  CssProperty.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $38;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($38, 'org.gwtproject.dom.style.shared.CssProperty$38');

exports = $38; 
//# sourceMappingURL=CssProperty$38.js.map
