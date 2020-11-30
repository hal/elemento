goog.module('org.gwtproject.dom.style.shared.Display.$14$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Display = goog.require('org.gwtproject.dom.style.shared.Display$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $14 extends Display {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$14} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $14.$clinit();
  let $instance = new $14();
  $instance.$ctor__org_gwtproject_dom_style_shared_Display_14__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_Display_14__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_Display__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getCssName__() {
  return "table-cell";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** Display */ arg0) {
  return super.compareTo(/**@type {Display}*/ ($Casts.$to(arg0, Display)));
 }
 
 static $clinit() {
  $14.$clinit = () =>{};
  $14.$loadModules();
  Display.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $14;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($14, 'org.gwtproject.dom.style.shared.Display$14');

exports = $14; 
//# sourceMappingURL=Display$14.js.map
