goog.module('org.gwtproject.dom.style.shared.Cursor.$16$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Cursor = goog.require('org.gwtproject.dom.style.shared.Cursor$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $16 extends Cursor {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$16} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $16.$clinit();
  let $instance = new $16();
  $instance.$ctor__org_gwtproject_dom_style_shared_Cursor_16__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_Cursor_16__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_Cursor__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getCssName__() {
  return "help";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** Cursor */ arg0) {
  return super.compareTo(/**@type {Cursor}*/ ($Casts.$to(arg0, Cursor)));
 }
 
 static $clinit() {
  $16.$clinit = () =>{};
  $16.$loadModules();
  Cursor.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $16;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($16, 'org.gwtproject.dom.style.shared.Cursor$16');

exports = $16; 
//# sourceMappingURL=Cursor$16.js.map
