goog.module('org.gwtproject.dom.style.shared.VerticalAlign$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasCssName = goog.require('org.gwtproject.dom.style.shared.HasCssName$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $1 = goog.forwardDeclare('org.gwtproject.dom.style.shared.VerticalAlign.$1$impl');
let $2 = goog.forwardDeclare('org.gwtproject.dom.style.shared.VerticalAlign.$2$impl');
let $3 = goog.forwardDeclare('org.gwtproject.dom.style.shared.VerticalAlign.$3$impl');
let $4 = goog.forwardDeclare('org.gwtproject.dom.style.shared.VerticalAlign.$4$impl');
let $5 = goog.forwardDeclare('org.gwtproject.dom.style.shared.VerticalAlign.$5$impl');
let $6 = goog.forwardDeclare('org.gwtproject.dom.style.shared.VerticalAlign.$6$impl');
let $7 = goog.forwardDeclare('org.gwtproject.dom.style.shared.VerticalAlign.$7$impl');
let $8 = goog.forwardDeclare('org.gwtproject.dom.style.shared.VerticalAlign.$8$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @abstract
 * @extends {Enum<VerticalAlign>}
 * @implements {HasCssName}
  */
class VerticalAlign extends Enum {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_gwtproject_dom_style_shared_VerticalAlign__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /** @abstract @override @return {?string} */
 m_getCssName__() {}
 /** @return {!VerticalAlign} */
 static m_valueOf__java_lang_String(/** string */ name) {
  VerticalAlign.$clinit();
  if ($Equality.$same(VerticalAlign.f_namesToValuesMap__org_gwtproject_dom_style_shared_VerticalAlign_, null)) {
   VerticalAlign.f_namesToValuesMap__org_gwtproject_dom_style_shared_VerticalAlign_ = $Enums.createMapFromValues(VerticalAlign.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, VerticalAlign.f_namesToValuesMap__org_gwtproject_dom_style_shared_VerticalAlign_);
 }
 /** @return {!Array<!VerticalAlign>} */
 static m_values__() {
  VerticalAlign.$clinit();
  return /**@type {!Array<VerticalAlign>}*/ ($Arrays.$init([VerticalAlign.$f_BASELINE__org_gwtproject_dom_style_shared_VerticalAlign, VerticalAlign.$f_SUB__org_gwtproject_dom_style_shared_VerticalAlign, VerticalAlign.$f_SUPER__org_gwtproject_dom_style_shared_VerticalAlign, VerticalAlign.$f_TOP__org_gwtproject_dom_style_shared_VerticalAlign, VerticalAlign.$f_TEXT_TOP__org_gwtproject_dom_style_shared_VerticalAlign, VerticalAlign.$f_MIDDLE__org_gwtproject_dom_style_shared_VerticalAlign, VerticalAlign.$f_BOTTOM__org_gwtproject_dom_style_shared_VerticalAlign, VerticalAlign.$f_TEXT_BOTTOM__org_gwtproject_dom_style_shared_VerticalAlign], VerticalAlign));
 }
 /** @return {!VerticalAlign} */
 static get f_BASELINE__org_gwtproject_dom_style_shared_VerticalAlign() {
  return (VerticalAlign.$clinit(), VerticalAlign.$f_BASELINE__org_gwtproject_dom_style_shared_VerticalAlign);
 }
 /** @return {!VerticalAlign} */
 static get f_SUB__org_gwtproject_dom_style_shared_VerticalAlign() {
  return (VerticalAlign.$clinit(), VerticalAlign.$f_SUB__org_gwtproject_dom_style_shared_VerticalAlign);
 }
 /** @return {!VerticalAlign} */
 static get f_SUPER__org_gwtproject_dom_style_shared_VerticalAlign() {
  return (VerticalAlign.$clinit(), VerticalAlign.$f_SUPER__org_gwtproject_dom_style_shared_VerticalAlign);
 }
 /** @return {!VerticalAlign} */
 static get f_TOP__org_gwtproject_dom_style_shared_VerticalAlign() {
  return (VerticalAlign.$clinit(), VerticalAlign.$f_TOP__org_gwtproject_dom_style_shared_VerticalAlign);
 }
 /** @return {!VerticalAlign} */
 static get f_TEXT_TOP__org_gwtproject_dom_style_shared_VerticalAlign() {
  return (VerticalAlign.$clinit(), VerticalAlign.$f_TEXT_TOP__org_gwtproject_dom_style_shared_VerticalAlign);
 }
 /** @return {!VerticalAlign} */
 static get f_MIDDLE__org_gwtproject_dom_style_shared_VerticalAlign() {
  return (VerticalAlign.$clinit(), VerticalAlign.$f_MIDDLE__org_gwtproject_dom_style_shared_VerticalAlign);
 }
 /** @return {!VerticalAlign} */
 static get f_BOTTOM__org_gwtproject_dom_style_shared_VerticalAlign() {
  return (VerticalAlign.$clinit(), VerticalAlign.$f_BOTTOM__org_gwtproject_dom_style_shared_VerticalAlign);
 }
 /** @return {!VerticalAlign} */
 static get f_TEXT_BOTTOM__org_gwtproject_dom_style_shared_VerticalAlign() {
  return (VerticalAlign.$clinit(), VerticalAlign.$f_TEXT_BOTTOM__org_gwtproject_dom_style_shared_VerticalAlign);
 }
 
 static $clinit() {
  VerticalAlign.$clinit = () =>{};
  VerticalAlign.$loadModules();
  Enum.$clinit();
  VerticalAlign.$f_BASELINE__org_gwtproject_dom_style_shared_VerticalAlign = $1.$create__java_lang_String__int($Util.$makeEnumName("BASELINE"), VerticalAlign.$ordinal$f_BASELINE__org_gwtproject_dom_style_shared_VerticalAlign);
  VerticalAlign.$f_SUB__org_gwtproject_dom_style_shared_VerticalAlign = $2.$create__java_lang_String__int($Util.$makeEnumName("SUB"), VerticalAlign.$ordinal$f_SUB__org_gwtproject_dom_style_shared_VerticalAlign);
  VerticalAlign.$f_SUPER__org_gwtproject_dom_style_shared_VerticalAlign = $3.$create__java_lang_String__int($Util.$makeEnumName("SUPER"), VerticalAlign.$ordinal$f_SUPER__org_gwtproject_dom_style_shared_VerticalAlign);
  VerticalAlign.$f_TOP__org_gwtproject_dom_style_shared_VerticalAlign = $4.$create__java_lang_String__int($Util.$makeEnumName("TOP"), VerticalAlign.$ordinal$f_TOP__org_gwtproject_dom_style_shared_VerticalAlign);
  VerticalAlign.$f_TEXT_TOP__org_gwtproject_dom_style_shared_VerticalAlign = $5.$create__java_lang_String__int($Util.$makeEnumName("TEXT_TOP"), VerticalAlign.$ordinal$f_TEXT_TOP__org_gwtproject_dom_style_shared_VerticalAlign);
  VerticalAlign.$f_MIDDLE__org_gwtproject_dom_style_shared_VerticalAlign = $6.$create__java_lang_String__int($Util.$makeEnumName("MIDDLE"), VerticalAlign.$ordinal$f_MIDDLE__org_gwtproject_dom_style_shared_VerticalAlign);
  VerticalAlign.$f_BOTTOM__org_gwtproject_dom_style_shared_VerticalAlign = $7.$create__java_lang_String__int($Util.$makeEnumName("BOTTOM"), VerticalAlign.$ordinal$f_BOTTOM__org_gwtproject_dom_style_shared_VerticalAlign);
  VerticalAlign.$f_TEXT_BOTTOM__org_gwtproject_dom_style_shared_VerticalAlign = $8.$create__java_lang_String__int($Util.$makeEnumName("TEXT_BOTTOM"), VerticalAlign.$ordinal$f_TEXT_BOTTOM__org_gwtproject_dom_style_shared_VerticalAlign);
  VerticalAlign.f_namesToValuesMap__org_gwtproject_dom_style_shared_VerticalAlign_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof VerticalAlign;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.gwtproject.dom.style.shared.VerticalAlign.$1$impl');
  $2 = goog.module.get('org.gwtproject.dom.style.shared.VerticalAlign.$2$impl');
  $3 = goog.module.get('org.gwtproject.dom.style.shared.VerticalAlign.$3$impl');
  $4 = goog.module.get('org.gwtproject.dom.style.shared.VerticalAlign.$4$impl');
  $5 = goog.module.get('org.gwtproject.dom.style.shared.VerticalAlign.$5$impl');
  $6 = goog.module.get('org.gwtproject.dom.style.shared.VerticalAlign.$6$impl');
  $7 = goog.module.get('org.gwtproject.dom.style.shared.VerticalAlign.$7$impl');
  $8 = goog.module.get('org.gwtproject.dom.style.shared.VerticalAlign.$8$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(VerticalAlign, 'org.gwtproject.dom.style.shared.VerticalAlign');

HasCssName.$markImplementor(VerticalAlign);

/**@private {!VerticalAlign}*/
VerticalAlign.$f_BASELINE__org_gwtproject_dom_style_shared_VerticalAlign;
/**@private {!VerticalAlign}*/
VerticalAlign.$f_SUB__org_gwtproject_dom_style_shared_VerticalAlign;
/**@private {!VerticalAlign}*/
VerticalAlign.$f_SUPER__org_gwtproject_dom_style_shared_VerticalAlign;
/**@private {!VerticalAlign}*/
VerticalAlign.$f_TOP__org_gwtproject_dom_style_shared_VerticalAlign;
/**@private {!VerticalAlign}*/
VerticalAlign.$f_TEXT_TOP__org_gwtproject_dom_style_shared_VerticalAlign;
/**@private {!VerticalAlign}*/
VerticalAlign.$f_MIDDLE__org_gwtproject_dom_style_shared_VerticalAlign;
/**@private {!VerticalAlign}*/
VerticalAlign.$f_BOTTOM__org_gwtproject_dom_style_shared_VerticalAlign;
/**@private {!VerticalAlign}*/
VerticalAlign.$f_TEXT_BOTTOM__org_gwtproject_dom_style_shared_VerticalAlign;
/**@type {Map<?string, !VerticalAlign>}*/
VerticalAlign.f_namesToValuesMap__org_gwtproject_dom_style_shared_VerticalAlign_;
/**@const {number}*/
VerticalAlign.$ordinal$f_BASELINE__org_gwtproject_dom_style_shared_VerticalAlign = 0;
/**@const {number}*/
VerticalAlign.$ordinal$f_SUB__org_gwtproject_dom_style_shared_VerticalAlign = 1;
/**@const {number}*/
VerticalAlign.$ordinal$f_SUPER__org_gwtproject_dom_style_shared_VerticalAlign = 2;
/**@const {number}*/
VerticalAlign.$ordinal$f_TOP__org_gwtproject_dom_style_shared_VerticalAlign = 3;
/**@const {number}*/
VerticalAlign.$ordinal$f_TEXT_TOP__org_gwtproject_dom_style_shared_VerticalAlign = 4;
/**@const {number}*/
VerticalAlign.$ordinal$f_MIDDLE__org_gwtproject_dom_style_shared_VerticalAlign = 5;
/**@const {number}*/
VerticalAlign.$ordinal$f_BOTTOM__org_gwtproject_dom_style_shared_VerticalAlign = 6;
/**@const {number}*/
VerticalAlign.$ordinal$f_TEXT_BOTTOM__org_gwtproject_dom_style_shared_VerticalAlign = 7;

exports = VerticalAlign; 
//# sourceMappingURL=VerticalAlign.js.map
