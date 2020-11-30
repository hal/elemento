goog.module('org.gwtproject.dom.style.shared.TextDecoration.$1$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const TextDecoration = goog.require('org.gwtproject.dom.style.shared.TextDecoration$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $1 extends TextDecoration {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$1} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_dom_style_shared_TextDecoration_1__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_TextDecoration_1__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_TextDecoration__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getCssName__() {
  return "blink";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** TextDecoration */ arg0) {
  return super.compareTo(/**@type {TextDecoration}*/ ($Casts.$to(arg0, TextDecoration)));
 }
 
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  TextDecoration.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.dom.style.shared.TextDecoration$1');

exports = $1; 
//# sourceMappingURL=TextDecoration$1.js.map
