goog.module('org.gwtproject.dom.style.shared.Cursor.$18$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const Cursor = goog.require('org.gwtproject.dom.style.shared.Cursor$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $18 extends Cursor {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$18} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $18.$clinit();
  let $instance = new $18();
  $instance.$ctor__org_gwtproject_dom_style_shared_Cursor_18__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_Cursor_18__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_Cursor__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getCssName__() {
  return "row-resize";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** Cursor */ arg0) {
  return super.compareTo(/**@type {Cursor}*/ ($Casts.$to(arg0, Cursor)));
 }
 
 static $clinit() {
  $18.$clinit = () =>{};
  $18.$loadModules();
  Cursor.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $18;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($18, 'org.gwtproject.dom.style.shared.Cursor$18');

exports = $18; 
//# sourceMappingURL=Cursor$18.js.map
