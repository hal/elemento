goog.module('org.gwtproject.dom.style.shared.Display.$5$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Display = goog.require('org.gwtproject.dom.style.shared.Display$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $5 extends Display {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$5} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $5.$clinit();
  let $instance = new $5();
  $instance.$ctor__org_gwtproject_dom_style_shared_Display_5__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_Display_5__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_Display__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getCssName__() {
  return "inline-table";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** Display */ arg0) {
  return super.compareTo(/**@type {Display}*/ ($Casts.$to(arg0, Display)));
 }
 
 static $clinit() {
  $5.$clinit = () =>{};
  $5.$loadModules();
  Display.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $5;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($5, 'org.gwtproject.dom.style.shared.Display$5');

exports = $5; 
//# sourceMappingURL=Display$5.js.map
