goog.module('org.gwtproject.dom.style.shared.Display.$11$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Display = goog.require('org.gwtproject.dom.style.shared.Display$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $11 extends Display {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$11} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $11.$clinit();
  let $instance = new $11();
  $instance.$ctor__org_gwtproject_dom_style_shared_Display_11__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_Display_11__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_Display__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getCssName__() {
  return "table-header-group";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** Display */ arg0) {
  return super.compareTo(/**@type {Display}*/ ($Casts.$to(arg0, Display)));
 }
 
 static $clinit() {
  $11.$clinit = () =>{};
  $11.$loadModules();
  Display.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $11;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($11, 'org.gwtproject.dom.style.shared.Display$11');

exports = $11; 
//# sourceMappingURL=Display$11.js.map
