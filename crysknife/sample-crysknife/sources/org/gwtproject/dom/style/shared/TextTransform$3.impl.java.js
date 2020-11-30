goog.module('org.gwtproject.dom.style.shared.TextTransform.$3$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const TextTransform = goog.require('org.gwtproject.dom.style.shared.TextTransform$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $3 extends TextTransform {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$3} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $3.$clinit();
  let $instance = new $3();
  $instance.$ctor__org_gwtproject_dom_style_shared_TextTransform_3__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_TextTransform_3__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_TextTransform__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getCssName__() {
  return "lowercase";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** TextTransform */ arg0) {
  return super.compareTo(/**@type {TextTransform}*/ ($Casts.$to(arg0, TextTransform)));
 }
 
 static $clinit() {
  $3.$clinit = () =>{};
  $3.$loadModules();
  TextTransform.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $3;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($3, 'org.gwtproject.dom.style.shared.TextTransform$3');

exports = $3; 
//# sourceMappingURL=TextTransform$3.js.map
