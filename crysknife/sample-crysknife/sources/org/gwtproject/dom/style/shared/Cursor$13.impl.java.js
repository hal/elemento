goog.module('org.gwtproject.dom.style.shared.Cursor.$13$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Cursor = goog.require('org.gwtproject.dom.style.shared.Cursor$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $13 extends Cursor {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$13} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $13.$clinit();
  let $instance = new $13();
  $instance.$ctor__org_gwtproject_dom_style_shared_Cursor_13__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_Cursor_13__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_Cursor__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getCssName__() {
  return "w-resize";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** Cursor */ arg0) {
  return super.compareTo(/**@type {Cursor}*/ ($Casts.$to(arg0, Cursor)));
 }
 
 static $clinit() {
  $13.$clinit = () =>{};
  $13.$loadModules();
  Cursor.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $13;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($13, 'org.gwtproject.dom.style.shared.Cursor$13');

exports = $13; 
//# sourceMappingURL=Cursor$13.js.map
