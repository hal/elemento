goog.module('org.gwtproject.dom.style.shared.VerticalAlign.$7$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const VerticalAlign = goog.require('org.gwtproject.dom.style.shared.VerticalAlign$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $7 extends VerticalAlign {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$7} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $7.$clinit();
  let $instance = new $7();
  $instance.$ctor__org_gwtproject_dom_style_shared_VerticalAlign_7__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_VerticalAlign_7__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_VerticalAlign__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getCssName__() {
  return "bottom";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** VerticalAlign */ arg0) {
  return super.compareTo(/**@type {VerticalAlign}*/ ($Casts.$to(arg0, VerticalAlign)));
 }
 
 static $clinit() {
  $7.$clinit = () =>{};
  $7.$loadModules();
  VerticalAlign.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $7;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($7, 'org.gwtproject.dom.style.shared.VerticalAlign$7');

exports = $7; 
//# sourceMappingURL=VerticalAlign$7.js.map
