goog.module('org.gwtproject.dom.style.shared.Display.$16$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Display = goog.require('org.gwtproject.dom.style.shared.Display$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $16 extends Display {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$16} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $16.$clinit();
  let $instance = new $16();
  $instance.$ctor__org_gwtproject_dom_style_shared_Display_16__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_Display_16__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_Display__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getCssName__() {
  return "table-row";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** Display */ arg0) {
  return super.compareTo(/**@type {Display}*/ ($Casts.$to(arg0, Display)));
 }
 
 static $clinit() {
  $16.$clinit = () =>{};
  $16.$loadModules();
  Display.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $16;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($16, 'org.gwtproject.dom.style.shared.Display$16');

exports = $16; 
//# sourceMappingURL=Display$16.js.map
