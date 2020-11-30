goog.module('org.gwtproject.dom.style.shared.WhiteSpace.$4$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const WhiteSpace = goog.require('org.gwtproject.dom.style.shared.WhiteSpace$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $4 extends WhiteSpace {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$4} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $4.$clinit();
  let $instance = new $4();
  $instance.$ctor__org_gwtproject_dom_style_shared_WhiteSpace_4__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_WhiteSpace_4__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_WhiteSpace__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getCssName__() {
  return "pre-line";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** WhiteSpace */ arg0) {
  return super.compareTo(/**@type {WhiteSpace}*/ ($Casts.$to(arg0, WhiteSpace)));
 }
 
 static $clinit() {
  $4.$clinit = () =>{};
  $4.$loadModules();
  WhiteSpace.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $4;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($4, 'org.gwtproject.dom.style.shared.WhiteSpace$4');

exports = $4; 
//# sourceMappingURL=WhiteSpace$4.js.map
