goog.module('org.gwtproject.dom.style.shared.ListStyleType.$9$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ListStyleType = goog.require('org.gwtproject.dom.style.shared.ListStyleType$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $9 extends ListStyleType {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$9} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $9.$clinit();
  let $instance = new $9();
  $instance.$ctor__org_gwtproject_dom_style_shared_ListStyleType_9__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_ListStyleType_9__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_ListStyleType__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getCssName__() {
  return "upper-roman";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** ListStyleType */ arg0) {
  return super.compareTo(/**@type {ListStyleType}*/ ($Casts.$to(arg0, ListStyleType)));
 }
 
 static $clinit() {
  $9.$clinit = () =>{};
  $9.$loadModules();
  ListStyleType.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $9;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($9, 'org.gwtproject.dom.style.shared.ListStyleType$9');

exports = $9; 
//# sourceMappingURL=ListStyleType$9.js.map
