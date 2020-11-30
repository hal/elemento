goog.module('org.gwtproject.dom.style.shared.Display.$9$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Display = goog.require('org.gwtproject.dom.style.shared.Display$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $9 extends Display {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$9} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $9.$clinit();
  let $instance = new $9();
  $instance.$ctor__org_gwtproject_dom_style_shared_Display_9__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_Display_9__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_Display__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getCssName__() {
  return "table-caption";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** Display */ arg0) {
  return super.compareTo(/**@type {Display}*/ ($Casts.$to(arg0, Display)));
 }
 
 static $clinit() {
  $9.$clinit = () =>{};
  $9.$loadModules();
  Display.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $9;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($9, 'org.gwtproject.dom.style.shared.Display$9');

exports = $9; 
//# sourceMappingURL=Display$9.js.map
