goog.module('org.gwtproject.dom.style.shared.FontStyle.$2$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const FontStyle = goog.require('org.gwtproject.dom.style.shared.FontStyle$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $2 extends FontStyle {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$2} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $2.$clinit();
  let $instance = new $2();
  $instance.$ctor__org_gwtproject_dom_style_shared_FontStyle_2__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_FontStyle_2__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_FontStyle__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getCssName__() {
  return "italic";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** FontStyle */ arg0) {
  return super.compareTo(/**@type {FontStyle}*/ ($Casts.$to(arg0, FontStyle)));
 }
 
 static $clinit() {
  $2.$clinit = () =>{};
  $2.$loadModules();
  FontStyle.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $2;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($2, 'org.gwtproject.dom.style.shared.FontStyle$2');

exports = $2; 
//# sourceMappingURL=FontStyle$2.js.map
