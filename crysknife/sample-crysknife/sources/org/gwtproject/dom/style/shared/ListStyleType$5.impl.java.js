goog.module('org.gwtproject.dom.style.shared.ListStyleType.$5$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ListStyleType = goog.require('org.gwtproject.dom.style.shared.ListStyleType$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $5 extends ListStyleType {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$5} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $5.$clinit();
  let $instance = new $5();
  $instance.$ctor__org_gwtproject_dom_style_shared_ListStyleType_5__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_ListStyleType_5__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_ListStyleType__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getCssName__() {
  return "decimal";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** ListStyleType */ arg0) {
  return super.compareTo(/**@type {ListStyleType}*/ ($Casts.$to(arg0, ListStyleType)));
 }
 
 static $clinit() {
  $5.$clinit = () =>{};
  $5.$loadModules();
  ListStyleType.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $5;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($5, 'org.gwtproject.dom.style.shared.ListStyleType$5');

exports = $5; 
//# sourceMappingURL=ListStyleType$5.js.map
