goog.module('org.gwtproject.dom.style.shared.VerticalAlign.$1$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const VerticalAlign = goog.require('org.gwtproject.dom.style.shared.VerticalAlign$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $1 extends VerticalAlign {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$1} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_dom_style_shared_VerticalAlign_1__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_VerticalAlign_1__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_VerticalAlign__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getCssName__() {
  return "baseline";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** VerticalAlign */ arg0) {
  return super.compareTo(/**@type {VerticalAlign}*/ ($Casts.$to(arg0, VerticalAlign)));
 }
 
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  VerticalAlign.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.dom.style.shared.VerticalAlign$1');

exports = $1; 
//# sourceMappingURL=VerticalAlign$1.js.map
