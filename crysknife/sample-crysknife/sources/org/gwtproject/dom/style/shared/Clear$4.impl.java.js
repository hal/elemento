goog.module('org.gwtproject.dom.style.shared.Clear.$4$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Clear = goog.require('org.gwtproject.dom.style.shared.Clear$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $4 extends Clear {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$4} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $4.$clinit();
  let $instance = new $4();
  $instance.$ctor__org_gwtproject_dom_style_shared_Clear_4__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_Clear_4__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_Clear__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getCssName__() {
  return "right";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** Clear */ arg0) {
  return super.compareTo(/**@type {Clear}*/ ($Casts.$to(arg0, Clear)));
 }
 
 static $clinit() {
  $4.$clinit = () =>{};
  $4.$loadModules();
  Clear.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $4;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($4, 'org.gwtproject.dom.style.shared.Clear$4');

exports = $4; 
//# sourceMappingURL=Clear$4.js.map
