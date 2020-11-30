goog.module('org.gwtproject.dom.style.shared.TextTransform.$4$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const TextTransform = goog.require('org.gwtproject.dom.style.shared.TextTransform$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $4 extends TextTransform {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$4} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $4.$clinit();
  let $instance = new $4();
  $instance.$ctor__org_gwtproject_dom_style_shared_TextTransform_4__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_TextTransform_4__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_TextTransform__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getCssName__() {
  return "uppercase";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** TextTransform */ arg0) {
  return super.compareTo(/**@type {TextTransform}*/ ($Casts.$to(arg0, TextTransform)));
 }
 
 static $clinit() {
  $4.$clinit = () =>{};
  $4.$loadModules();
  TextTransform.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $4;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($4, 'org.gwtproject.dom.style.shared.TextTransform$4');

exports = $4; 
//# sourceMappingURL=TextTransform$4.js.map
