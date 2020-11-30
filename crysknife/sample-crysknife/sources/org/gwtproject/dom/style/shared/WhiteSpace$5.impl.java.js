goog.module('org.gwtproject.dom.style.shared.WhiteSpace.$5$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const WhiteSpace = goog.require('org.gwtproject.dom.style.shared.WhiteSpace$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $5 extends WhiteSpace {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$5} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $5.$clinit();
  let $instance = new $5();
  $instance.$ctor__org_gwtproject_dom_style_shared_WhiteSpace_5__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_WhiteSpace_5__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_WhiteSpace__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getCssName__() {
  return "pre-wrap";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** WhiteSpace */ arg0) {
  return super.compareTo(/**@type {WhiteSpace}*/ ($Casts.$to(arg0, WhiteSpace)));
 }
 
 static $clinit() {
  $5.$clinit = () =>{};
  $5.$loadModules();
  WhiteSpace.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $5;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($5, 'org.gwtproject.dom.style.shared.WhiteSpace$5');

exports = $5; 
//# sourceMappingURL=WhiteSpace$5.js.map
