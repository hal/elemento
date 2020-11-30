goog.module('org.gwtproject.dom.style.shared.TextJustify.$7$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const TextJustify = goog.require('org.gwtproject.dom.style.shared.TextJustify$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $7 extends TextJustify {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$7} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $7.$clinit();
  let $instance = new $7();
  $instance.$ctor__org_gwtproject_dom_style_shared_TextJustify_7__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_TextJustify_7__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_TextJustify__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getCssName__() {
  return "kashida";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** TextJustify */ arg0) {
  return super.compareTo(/**@type {TextJustify}*/ ($Casts.$to(arg0, TextJustify)));
 }
 
 static $clinit() {
  $7.$clinit = () =>{};
  $7.$loadModules();
  TextJustify.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $7;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($7, 'org.gwtproject.dom.style.shared.TextJustify$7');

exports = $7; 
//# sourceMappingURL=TextJustify$7.js.map
