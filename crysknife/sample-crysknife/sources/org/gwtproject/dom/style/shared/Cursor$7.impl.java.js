goog.module('org.gwtproject.dom.style.shared.Cursor.$7$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Cursor = goog.require('org.gwtproject.dom.style.shared.Cursor$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $7 extends Cursor {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$7} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $7.$clinit();
  let $instance = new $7();
  $instance.$ctor__org_gwtproject_dom_style_shared_Cursor_7__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_Cursor_7__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_Cursor__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getCssName__() {
  return "ne-resize";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** Cursor */ arg0) {
  return super.compareTo(/**@type {Cursor}*/ ($Casts.$to(arg0, Cursor)));
 }
 
 static $clinit() {
  $7.$clinit = () =>{};
  $7.$loadModules();
  Cursor.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $7;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($7, 'org.gwtproject.dom.style.shared.Cursor$7');

exports = $7; 
//# sourceMappingURL=Cursor$7.js.map
