goog.module('org.gwtproject.dom.style.shared.ListStyleType.$6$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ListStyleType = goog.require('org.gwtproject.dom.style.shared.ListStyleType$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $6 extends ListStyleType {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$6} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $6.$clinit();
  let $instance = new $6();
  $instance.$ctor__org_gwtproject_dom_style_shared_ListStyleType_6__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_ListStyleType_6__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_ListStyleType__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getCssName__() {
  return "lower-alpha";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** ListStyleType */ arg0) {
  return super.compareTo(/**@type {ListStyleType}*/ ($Casts.$to(arg0, ListStyleType)));
 }
 
 static $clinit() {
  $6.$clinit = () =>{};
  $6.$loadModules();
  ListStyleType.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $6;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($6, 'org.gwtproject.dom.style.shared.ListStyleType$6');

exports = $6; 
//# sourceMappingURL=ListStyleType$6.js.map
