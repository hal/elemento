goog.module('org.gwtproject.dom.style.shared.Cursor.$8$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Cursor = goog.require('org.gwtproject.dom.style.shared.Cursor$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $8 extends Cursor {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$8} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $8.$clinit();
  let $instance = new $8();
  $instance.$ctor__org_gwtproject_dom_style_shared_Cursor_8__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_Cursor_8__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_Cursor__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getCssName__() {
  return "nw-resize";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** Cursor */ arg0) {
  return super.compareTo(/**@type {Cursor}*/ ($Casts.$to(arg0, Cursor)));
 }
 
 static $clinit() {
  $8.$clinit = () =>{};
  $8.$loadModules();
  Cursor.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $8;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($8, 'org.gwtproject.dom.style.shared.Cursor$8');

exports = $8; 
//# sourceMappingURL=Cursor$8.js.map
