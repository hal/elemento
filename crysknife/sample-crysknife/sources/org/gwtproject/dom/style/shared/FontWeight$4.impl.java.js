goog.module('org.gwtproject.dom.style.shared.FontWeight.$4$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const FontWeight = goog.require('org.gwtproject.dom.style.shared.FontWeight$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $4 extends FontWeight {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$4} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $4.$clinit();
  let $instance = new $4();
  $instance.$ctor__org_gwtproject_dom_style_shared_FontWeight_4__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_FontWeight_4__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_FontWeight__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getCssName__() {
  return "lighter";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** FontWeight */ arg0) {
  return super.compareTo(/**@type {FontWeight}*/ ($Casts.$to(arg0, FontWeight)));
 }
 
 static $clinit() {
  $4.$clinit = () =>{};
  $4.$loadModules();
  FontWeight.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $4;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($4, 'org.gwtproject.dom.style.shared.FontWeight$4');

exports = $4; 
//# sourceMappingURL=FontWeight$4.js.map
