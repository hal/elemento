goog.module('org.gwtproject.dom.style.shared.CssProperty.$17$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const CssProperty = goog.require('org.gwtproject.dom.style.shared.CssProperty$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $17 extends CssProperty {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$17} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $17.$clinit();
  let $instance = new $17();
  $instance.$ctor__org_gwtproject_dom_style_shared_CssProperty_17__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_CssProperty_17__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_CssProperty__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getJsName__() {
  return "opacity";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** CssProperty */ arg0) {
  return super.compareTo(/**@type {CssProperty}*/ ($Casts.$to(arg0, CssProperty)));
 }
 
 static $clinit() {
  $17.$clinit = () =>{};
  $17.$loadModules();
  CssProperty.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $17;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($17, 'org.gwtproject.dom.style.shared.CssProperty$17');

exports = $17; 
//# sourceMappingURL=CssProperty$17.js.map
