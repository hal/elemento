goog.module('org.gwtproject.dom.style.shared.OutlineStyle.$9$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const OutlineStyle = goog.require('org.gwtproject.dom.style.shared.OutlineStyle$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $9 extends OutlineStyle {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$9} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $9.$clinit();
  let $instance = new $9();
  $instance.$ctor__org_gwtproject_dom_style_shared_OutlineStyle_9__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_OutlineStyle_9__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_OutlineStyle__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getCssName__() {
  return "solid";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** OutlineStyle */ arg0) {
  return super.compareTo(/**@type {OutlineStyle}*/ ($Casts.$to(arg0, OutlineStyle)));
 }
 
 static $clinit() {
  $9.$clinit = () =>{};
  $9.$loadModules();
  OutlineStyle.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $9;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($9, 'org.gwtproject.dom.style.shared.OutlineStyle$9');

exports = $9; 
//# sourceMappingURL=OutlineStyle$9.js.map
