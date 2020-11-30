goog.module('org.gwtproject.dom.style.shared.Display.$12$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Display = goog.require('org.gwtproject.dom.style.shared.Display$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $12 extends Display {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$12} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $12.$clinit();
  let $instance = new $12();
  $instance.$ctor__org_gwtproject_dom_style_shared_Display_12__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_Display_12__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_Display__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getCssName__() {
  return "table-footer-group";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** Display */ arg0) {
  return super.compareTo(/**@type {Display}*/ ($Casts.$to(arg0, Display)));
 }
 
 static $clinit() {
  $12.$clinit = () =>{};
  $12.$loadModules();
  Display.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $12;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($12, 'org.gwtproject.dom.style.shared.Display$12');

exports = $12; 
//# sourceMappingURL=Display$12.js.map
