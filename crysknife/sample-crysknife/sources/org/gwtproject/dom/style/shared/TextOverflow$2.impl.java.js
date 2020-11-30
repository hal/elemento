goog.module('org.gwtproject.dom.style.shared.TextOverflow.$2$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const TextOverflow = goog.require('org.gwtproject.dom.style.shared.TextOverflow$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $2 extends TextOverflow {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$2} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_gwtproject_dom_style_shared_TextOverflow_2__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_TextOverflow_2__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_TextOverflow__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getCssName__() {
  return "ellipsis";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** TextOverflow */ arg0) {
  return super.compareTo(/**@type {TextOverflow}*/ ($Casts.$to(arg0, TextOverflow)));
 }
 
 static $clinit() {
  $2.$clinit = () =>{};
  $2.$loadModules();
  TextOverflow.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $2;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($2, 'org.gwtproject.dom.style.shared.TextOverflow$2');

exports = $2; 
//# sourceMappingURL=TextOverflow$2.js.map
