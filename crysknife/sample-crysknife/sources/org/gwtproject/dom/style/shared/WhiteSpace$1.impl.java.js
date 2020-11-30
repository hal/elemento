goog.module('org.gwtproject.dom.style.shared.WhiteSpace.$1$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const WhiteSpace = goog.require('org.gwtproject.dom.style.shared.WhiteSpace$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $1 extends WhiteSpace {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$1} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $1.$clinit();
  let $instance = new $1();
  $instance.$ctor__org_gwtproject_dom_style_shared_WhiteSpace_1__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_WhiteSpace_1__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_WhiteSpace__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getCssName__() {
  return "normal";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** WhiteSpace */ arg0) {
  return super.compareTo(/**@type {WhiteSpace}*/ ($Casts.$to(arg0, WhiteSpace)));
 }
 
 static $clinit() {
  $1.$clinit = () =>{};
  $1.$loadModules();
  WhiteSpace.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $1;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($1, 'org.gwtproject.dom.style.shared.WhiteSpace$1');

exports = $1; 
//# sourceMappingURL=WhiteSpace$1.js.map
