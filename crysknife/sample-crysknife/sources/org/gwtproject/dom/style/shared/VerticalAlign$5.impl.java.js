goog.module('org.gwtproject.dom.style.shared.VerticalAlign.$5$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const VerticalAlign = goog.require('org.gwtproject.dom.style.shared.VerticalAlign$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $5 extends VerticalAlign {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$5} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $5.$clinit();
  let $instance = new $5();
  $instance.$ctor__org_gwtproject_dom_style_shared_VerticalAlign_5__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_VerticalAlign_5__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_VerticalAlign__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getCssName__() {
  return "text-top";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** VerticalAlign */ arg0) {
  return super.compareTo(/**@type {VerticalAlign}*/ ($Casts.$to(arg0, VerticalAlign)));
 }
 
 static $clinit() {
  $5.$clinit = () =>{};
  $5.$loadModules();
  VerticalAlign.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $5;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($5, 'org.gwtproject.dom.style.shared.VerticalAlign$5');

exports = $5; 
//# sourceMappingURL=VerticalAlign$5.js.map
