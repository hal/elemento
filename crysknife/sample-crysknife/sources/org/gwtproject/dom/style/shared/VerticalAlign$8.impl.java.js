goog.module('org.gwtproject.dom.style.shared.VerticalAlign.$8$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const VerticalAlign = goog.require('org.gwtproject.dom.style.shared.VerticalAlign$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $8 extends VerticalAlign {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$8} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $8.$clinit();
  let $instance = new $8();
  $instance.$ctor__org_gwtproject_dom_style_shared_VerticalAlign_8__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_VerticalAlign_8__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_VerticalAlign__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getCssName__() {
  return "text-bottom";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** VerticalAlign */ arg0) {
  return super.compareTo(/**@type {VerticalAlign}*/ ($Casts.$to(arg0, VerticalAlign)));
 }
 
 static $clinit() {
  $8.$clinit = () =>{};
  $8.$loadModules();
  VerticalAlign.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $8;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($8, 'org.gwtproject.dom.style.shared.VerticalAlign$8');

exports = $8; 
//# sourceMappingURL=VerticalAlign$8.js.map
