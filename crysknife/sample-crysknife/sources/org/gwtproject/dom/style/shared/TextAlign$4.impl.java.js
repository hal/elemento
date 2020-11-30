goog.module('org.gwtproject.dom.style.shared.TextAlign.$4$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const TextAlign = goog.require('org.gwtproject.dom.style.shared.TextAlign$impl');

let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class $4 extends TextAlign {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!$4} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  $4.$clinit();
  let $instance = new $4();
  $instance.$ctor__org_gwtproject_dom_style_shared_TextAlign_4__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_style_shared_TextAlign_4__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.$ctor__org_gwtproject_dom_style_shared_TextAlign__java_lang_String__int($name, $ordinal);
 }
 /** @override @return {?string} */
 m_getCssName__() {
  return "right";
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** TextAlign */ arg0) {
  return super.compareTo(/**@type {TextAlign}*/ ($Casts.$to(arg0, TextAlign)));
 }
 
 static $clinit() {
  $4.$clinit = () =>{};
  $4.$loadModules();
  TextAlign.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof $4;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata($4, 'org.gwtproject.dom.style.shared.TextAlign$4');

exports = $4; 
//# sourceMappingURL=TextAlign$4.js.map
