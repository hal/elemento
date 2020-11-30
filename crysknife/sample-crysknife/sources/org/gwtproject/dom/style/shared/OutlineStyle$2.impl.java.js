goog.module('org.gwtproject.dom.style.shared.OutlineStyle.$2$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const OutlineStyle = goog.require('org.gwtproject.dom.style.shared.OutlineStyle$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $2 extends OutlineStyle {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$2} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_gwtproject_dom_style_shared_OutlineStyle_2__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_OutlineStyle_2__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_OutlineStyle__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getCssName__() {
  return "dashed";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** OutlineStyle */ arg0) {
  return super.compareTo(/**@type {OutlineStyle}*/ ($Casts.$to(arg0, OutlineStyle)));
 }
 
 static $clinit() {
  $2.$clinit = () =>{};
  $2.$loadModules();
  OutlineStyle.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $2;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($2, 'org.gwtproject.dom.style.shared.OutlineStyle$2');

exports = $2; 
//# sourceMappingURL=OutlineStyle$2.js.map
