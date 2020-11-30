goog.module('org.gwtproject.dom.style.shared.ListStyleType.$7$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const ListStyleType = goog.require('org.gwtproject.dom.style.shared.ListStyleType$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $7 extends ListStyleType {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$7} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $7.$clinit();
  let $instance = new $7();
  $instance.$ctor__org_gwtproject_dom_style_shared_ListStyleType_7__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_ListStyleType_7__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_ListStyleType__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getCssName__() {
  return "upper-alpha";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** ListStyleType */ arg0) {
  return super.compareTo(/**@type {ListStyleType}*/ ($Casts.$to(arg0, ListStyleType)));
 }
 
 static $clinit() {
  $7.$clinit = () =>{};
  $7.$loadModules();
  ListStyleType.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $7;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($7, 'org.gwtproject.dom.style.shared.ListStyleType$7');

exports = $7; 
//# sourceMappingURL=ListStyleType$7.js.map
