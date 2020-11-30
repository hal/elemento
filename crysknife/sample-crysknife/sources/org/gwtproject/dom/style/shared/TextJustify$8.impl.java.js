goog.module('org.gwtproject.dom.style.shared.TextJustify.$8$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const TextJustify = goog.require('org.gwtproject.dom.style.shared.TextJustify$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $8 extends TextJustify {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$8} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $8.$clinit();
  let $instance = new $8();
  $instance.$ctor__org_gwtproject_dom_style_shared_TextJustify_8__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_TextJustify_8__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_TextJustify__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getCssName__() {
  return "none";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** TextJustify */ arg0) {
  return super.compareTo(/**@type {TextJustify}*/ ($Casts.$to(arg0, TextJustify)));
 }
 
 static $clinit() {
  $8.$clinit = () =>{};
  $8.$loadModules();
  TextJustify.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $8;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($8, 'org.gwtproject.dom.style.shared.TextJustify$8');

exports = $8; 
//# sourceMappingURL=TextJustify$8.js.map
