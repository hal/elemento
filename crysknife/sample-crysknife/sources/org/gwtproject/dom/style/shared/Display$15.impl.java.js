goog.module('org.gwtproject.dom.style.shared.Display.$15$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Display = goog.require('org.gwtproject.dom.style.shared.Display$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $15 extends Display {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$15} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $15.$clinit();
  let $instance = new $15();
  $instance.$ctor__org_gwtproject_dom_style_shared_Display_15__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_Display_15__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_Display__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getCssName__() {
  return "table-column";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** Display */ arg0) {
  return super.compareTo(/**@type {Display}*/ ($Casts.$to(arg0, Display)));
 }
 
 static $clinit() {
  $15.$clinit = () =>{};
  $15.$loadModules();
  Display.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $15;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($15, 'org.gwtproject.dom.style.shared.Display$15');

exports = $15; 
//# sourceMappingURL=Display$15.js.map
