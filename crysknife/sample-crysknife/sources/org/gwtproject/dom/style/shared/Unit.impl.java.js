goog.module('org.gwtproject.dom.style.shared.Unit$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $1 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Unit.$1$impl');
let $2 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Unit.$2$impl');
let $3 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Unit.$3$impl');
let $4 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Unit.$4$impl');
let $5 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Unit.$5$impl');
let $6 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Unit.$6$impl');
let $7 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Unit.$7$impl');
let $8 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Unit.$8$impl');
let $9 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Unit.$9$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @abstract
 * @extends {Enum<Unit>}
  */
class Unit extends Enum {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_gwtproject_dom_style_shared_Unit__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /** @abstract @return {?string} */
 m_getType__() {}
 /** @return {!Unit} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Unit.$clinit();
  if ($Equality.$same(Unit.f_namesToValuesMap__org_gwtproject_dom_style_shared_Unit_, null)) {
   Unit.f_namesToValuesMap__org_gwtproject_dom_style_shared_Unit_ = $Enums.createMapFromValues(Unit.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Unit.f_namesToValuesMap__org_gwtproject_dom_style_shared_Unit_);
 }
 /** @return {!Array<!Unit>} */
 static m_values__() {
  Unit.$clinit();
  return /**@type {!Array<Unit>}*/ ($Arrays.$init([Unit.$f_PX__org_gwtproject_dom_style_shared_Unit, Unit.$f_PCT__org_gwtproject_dom_style_shared_Unit, Unit.$f_EM__org_gwtproject_dom_style_shared_Unit, Unit.$f_EX__org_gwtproject_dom_style_shared_Unit, Unit.$f_PT__org_gwtproject_dom_style_shared_Unit, Unit.$f_PC__org_gwtproject_dom_style_shared_Unit, Unit.$f_IN__org_gwtproject_dom_style_shared_Unit, Unit.$f_CM__org_gwtproject_dom_style_shared_Unit, Unit.$f_MM__org_gwtproject_dom_style_shared_Unit], Unit));
 }
 /** @return {!Unit} */
 static get f_PX__org_gwtproject_dom_style_shared_Unit() {
  return (Unit.$clinit(), Unit.$f_PX__org_gwtproject_dom_style_shared_Unit);
 }
 /** @return {!Unit} */
 static get f_PCT__org_gwtproject_dom_style_shared_Unit() {
  return (Unit.$clinit(), Unit.$f_PCT__org_gwtproject_dom_style_shared_Unit);
 }
 /** @return {!Unit} */
 static get f_EM__org_gwtproject_dom_style_shared_Unit() {
  return (Unit.$clinit(), Unit.$f_EM__org_gwtproject_dom_style_shared_Unit);
 }
 /** @return {!Unit} */
 static get f_EX__org_gwtproject_dom_style_shared_Unit() {
  return (Unit.$clinit(), Unit.$f_EX__org_gwtproject_dom_style_shared_Unit);
 }
 /** @return {!Unit} */
 static get f_PT__org_gwtproject_dom_style_shared_Unit() {
  return (Unit.$clinit(), Unit.$f_PT__org_gwtproject_dom_style_shared_Unit);
 }
 /** @return {!Unit} */
 static get f_PC__org_gwtproject_dom_style_shared_Unit() {
  return (Unit.$clinit(), Unit.$f_PC__org_gwtproject_dom_style_shared_Unit);
 }
 /** @return {!Unit} */
 static get f_IN__org_gwtproject_dom_style_shared_Unit() {
  return (Unit.$clinit(), Unit.$f_IN__org_gwtproject_dom_style_shared_Unit);
 }
 /** @return {!Unit} */
 static get f_CM__org_gwtproject_dom_style_shared_Unit() {
  return (Unit.$clinit(), Unit.$f_CM__org_gwtproject_dom_style_shared_Unit);
 }
 /** @return {!Unit} */
 static get f_MM__org_gwtproject_dom_style_shared_Unit() {
  return (Unit.$clinit(), Unit.$f_MM__org_gwtproject_dom_style_shared_Unit);
 }
 
 static $clinit() {
  Unit.$clinit = () =>{};
  Unit.$loadModules();
  Enum.$clinit();
  Unit.$f_PX__org_gwtproject_dom_style_shared_Unit = $1.$create__java_lang_String__int($Util.$makeEnumName("PX"), Unit.$ordinal$f_PX__org_gwtproject_dom_style_shared_Unit);
  Unit.$f_PCT__org_gwtproject_dom_style_shared_Unit = $2.$create__java_lang_String__int($Util.$makeEnumName("PCT"), Unit.$ordinal$f_PCT__org_gwtproject_dom_style_shared_Unit);
  Unit.$f_EM__org_gwtproject_dom_style_shared_Unit = $3.$create__java_lang_String__int($Util.$makeEnumName("EM"), Unit.$ordinal$f_EM__org_gwtproject_dom_style_shared_Unit);
  Unit.$f_EX__org_gwtproject_dom_style_shared_Unit = $4.$create__java_lang_String__int($Util.$makeEnumName("EX"), Unit.$ordinal$f_EX__org_gwtproject_dom_style_shared_Unit);
  Unit.$f_PT__org_gwtproject_dom_style_shared_Unit = $5.$create__java_lang_String__int($Util.$makeEnumName("PT"), Unit.$ordinal$f_PT__org_gwtproject_dom_style_shared_Unit);
  Unit.$f_PC__org_gwtproject_dom_style_shared_Unit = $6.$create__java_lang_String__int($Util.$makeEnumName("PC"), Unit.$ordinal$f_PC__org_gwtproject_dom_style_shared_Unit);
  Unit.$f_IN__org_gwtproject_dom_style_shared_Unit = $7.$create__java_lang_String__int($Util.$makeEnumName("IN"), Unit.$ordinal$f_IN__org_gwtproject_dom_style_shared_Unit);
  Unit.$f_CM__org_gwtproject_dom_style_shared_Unit = $8.$create__java_lang_String__int($Util.$makeEnumName("CM"), Unit.$ordinal$f_CM__org_gwtproject_dom_style_shared_Unit);
  Unit.$f_MM__org_gwtproject_dom_style_shared_Unit = $9.$create__java_lang_String__int($Util.$makeEnumName("MM"), Unit.$ordinal$f_MM__org_gwtproject_dom_style_shared_Unit);
  Unit.f_namesToValuesMap__org_gwtproject_dom_style_shared_Unit_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Unit;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.gwtproject.dom.style.shared.Unit.$1$impl');
  $2 = goog.module.get('org.gwtproject.dom.style.shared.Unit.$2$impl');
  $3 = goog.module.get('org.gwtproject.dom.style.shared.Unit.$3$impl');
  $4 = goog.module.get('org.gwtproject.dom.style.shared.Unit.$4$impl');
  $5 = goog.module.get('org.gwtproject.dom.style.shared.Unit.$5$impl');
  $6 = goog.module.get('org.gwtproject.dom.style.shared.Unit.$6$impl');
  $7 = goog.module.get('org.gwtproject.dom.style.shared.Unit.$7$impl');
  $8 = goog.module.get('org.gwtproject.dom.style.shared.Unit.$8$impl');
  $9 = goog.module.get('org.gwtproject.dom.style.shared.Unit.$9$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(Unit, 'org.gwtproject.dom.style.shared.Unit');

/**@private {!Unit}*/
Unit.$f_PX__org_gwtproject_dom_style_shared_Unit;
/**@private {!Unit}*/
Unit.$f_PCT__org_gwtproject_dom_style_shared_Unit;
/**@private {!Unit}*/
Unit.$f_EM__org_gwtproject_dom_style_shared_Unit;
/**@private {!Unit}*/
Unit.$f_EX__org_gwtproject_dom_style_shared_Unit;
/**@private {!Unit}*/
Unit.$f_PT__org_gwtproject_dom_style_shared_Unit;
/**@private {!Unit}*/
Unit.$f_PC__org_gwtproject_dom_style_shared_Unit;
/**@private {!Unit}*/
Unit.$f_IN__org_gwtproject_dom_style_shared_Unit;
/**@private {!Unit}*/
Unit.$f_CM__org_gwtproject_dom_style_shared_Unit;
/**@private {!Unit}*/
Unit.$f_MM__org_gwtproject_dom_style_shared_Unit;
/**@type {Map<?string, !Unit>}*/
Unit.f_namesToValuesMap__org_gwtproject_dom_style_shared_Unit_;
/**@const {number}*/
Unit.$ordinal$f_PX__org_gwtproject_dom_style_shared_Unit = 0;
/**@const {number}*/
Unit.$ordinal$f_PCT__org_gwtproject_dom_style_shared_Unit = 1;
/**@const {number}*/
Unit.$ordinal$f_EM__org_gwtproject_dom_style_shared_Unit = 2;
/**@const {number}*/
Unit.$ordinal$f_EX__org_gwtproject_dom_style_shared_Unit = 3;
/**@const {number}*/
Unit.$ordinal$f_PT__org_gwtproject_dom_style_shared_Unit = 4;
/**@const {number}*/
Unit.$ordinal$f_PC__org_gwtproject_dom_style_shared_Unit = 5;
/**@const {number}*/
Unit.$ordinal$f_IN__org_gwtproject_dom_style_shared_Unit = 6;
/**@const {number}*/
Unit.$ordinal$f_CM__org_gwtproject_dom_style_shared_Unit = 7;
/**@const {number}*/
Unit.$ordinal$f_MM__org_gwtproject_dom_style_shared_Unit = 8;

exports = Unit; 
//# sourceMappingURL=Unit.js.map
