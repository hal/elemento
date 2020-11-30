goog.module('org.gwtproject.dom.style.shared.Display.$13$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Display = goog.require('org.gwtproject.dom.style.shared.Display$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $13 extends Display {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$13} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $13.$clinit();
  let $instance = new $13();
  $instance.$ctor__org_gwtproject_dom_style_shared_Display_13__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_Display_13__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_Display__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getCssName__() {
  return "table-row-group";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** Display */ arg0) {
  return super.compareTo(/**@type {Display}*/ ($Casts.$to(arg0, Display)));
 }
 
 static $clinit() {
  $13.$clinit = () =>{};
  $13.$loadModules();
  Display.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $13;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($13, 'org.gwtproject.dom.style.shared.Display$13');

exports = $13; 
//# sourceMappingURL=Display$13.js.map
