goog.module('org.gwtproject.dom.style.shared.TextOverflow.$1$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const TextOverflow = goog.require('org.gwtproject.dom.style.shared.TextOverflow$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $1 extends TextOverflow {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$1} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_dom_style_shared_TextOverflow_1__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_TextOverflow_1__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_TextOverflow__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getCssName__() {
  return "clip";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** TextOverflow */ arg0) {
  return super.compareTo(/**@type {TextOverflow}*/ ($Casts.$to(arg0, TextOverflow)));
 }
 
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  TextOverflow.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.dom.style.shared.TextOverflow$1');

exports = $1; 
//# sourceMappingURL=TextOverflow$1.js.map
