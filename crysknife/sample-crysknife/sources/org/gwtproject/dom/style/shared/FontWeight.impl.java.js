goog.module('org.gwtproject.dom.style.shared.FontWeight$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasCssName = goog.require('org.gwtproject.dom.style.shared.HasCssName$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $1 = goog.forwardDeclare('org.gwtproject.dom.style.shared.FontWeight.$1$impl');
let $2 = goog.forwardDeclare('org.gwtproject.dom.style.shared.FontWeight.$2$impl');
let $3 = goog.forwardDeclare('org.gwtproject.dom.style.shared.FontWeight.$3$impl');
let $4 = goog.forwardDeclare('org.gwtproject.dom.style.shared.FontWeight.$4$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @abstract
 * @extends {Enum<FontWeight>}
 * @implements {HasCssName}
  */
class FontWeight extends Enum {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_gwtproject_dom_style_shared_FontWeight__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /** @abstract @override @return {?string} */
 m_getCssName__() {}
 /** @return {!FontWeight} */
 static m_valueOf__java_lang_String(/** string */ name) {
  FontWeight.$clinit();
  if ($Equality.$same(FontWeight.f_namesToValuesMap__org_gwtproject_dom_style_shared_FontWeight_, null)) {
   FontWeight.f_namesToValuesMap__org_gwtproject_dom_style_shared_FontWeight_ = $Enums.createMapFromValues(FontWeight.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, FontWeight.f_namesToValuesMap__org_gwtproject_dom_style_shared_FontWeight_);
 }
 /** @return {!Array<!FontWeight>} */
 static m_values__() {
  FontWeight.$clinit();
  return /**@type {!Array<FontWeight>}*/ ($Arrays.$init([FontWeight.$f_NORMAL__org_gwtproject_dom_style_shared_FontWeight, FontWeight.$f_BOLD__org_gwtproject_dom_style_shared_FontWeight, FontWeight.$f_BOLDER__org_gwtproject_dom_style_shared_FontWeight, FontWeight.$f_LIGHTER__org_gwtproject_dom_style_shared_FontWeight], FontWeight));
 }
 /** @return {!FontWeight} */
 static get f_NORMAL__org_gwtproject_dom_style_shared_FontWeight() {
  return (FontWeight.$clinit(), FontWeight.$f_NORMAL__org_gwtproject_dom_style_shared_FontWeight);
 }
 /** @return {!FontWeight} */
 static get f_BOLD__org_gwtproject_dom_style_shared_FontWeight() {
  return (FontWeight.$clinit(), FontWeight.$f_BOLD__org_gwtproject_dom_style_shared_FontWeight);
 }
 /** @return {!FontWeight} */
 static get f_BOLDER__org_gwtproject_dom_style_shared_FontWeight() {
  return (FontWeight.$clinit(), FontWeight.$f_BOLDER__org_gwtproject_dom_style_shared_FontWeight);
 }
 /** @return {!FontWeight} */
 static get f_LIGHTER__org_gwtproject_dom_style_shared_FontWeight() {
  return (FontWeight.$clinit(), FontWeight.$f_LIGHTER__org_gwtproject_dom_style_shared_FontWeight);
 }
 
 static $clinit() {
  FontWeight.$clinit = () =>{};
  FontWeight.$loadModules();
  Enum.$clinit();
  FontWeight.$f_NORMAL__org_gwtproject_dom_style_shared_FontWeight = $1.$create__java_lang_String__int($Util.$makeEnumName("NORMAL"), FontWeight.$ordinal$f_NORMAL__org_gwtproject_dom_style_shared_FontWeight);
  FontWeight.$f_BOLD__org_gwtproject_dom_style_shared_FontWeight = $2.$create__java_lang_String__int($Util.$makeEnumName("BOLD"), FontWeight.$ordinal$f_BOLD__org_gwtproject_dom_style_shared_FontWeight);
  FontWeight.$f_BOLDER__org_gwtproject_dom_style_shared_FontWeight = $3.$create__java_lang_String__int($Util.$makeEnumName("BOLDER"), FontWeight.$ordinal$f_BOLDER__org_gwtproject_dom_style_shared_FontWeight);
  FontWeight.$f_LIGHTER__org_gwtproject_dom_style_shared_FontWeight = $4.$create__java_lang_String__int($Util.$makeEnumName("LIGHTER"), FontWeight.$ordinal$f_LIGHTER__org_gwtproject_dom_style_shared_FontWeight);
  FontWeight.f_namesToValuesMap__org_gwtproject_dom_style_shared_FontWeight_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FontWeight;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.gwtproject.dom.style.shared.FontWeight.$1$impl');
  $2 = goog.module.get('org.gwtproject.dom.style.shared.FontWeight.$2$impl');
  $3 = goog.module.get('org.gwtproject.dom.style.shared.FontWeight.$3$impl');
  $4 = goog.module.get('org.gwtproject.dom.style.shared.FontWeight.$4$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(FontWeight, 'org.gwtproject.dom.style.shared.FontWeight');

HasCssName.$markImplementor(FontWeight);

/**@private {!FontWeight}*/
FontWeight.$f_NORMAL__org_gwtproject_dom_style_shared_FontWeight;
/**@private {!FontWeight}*/
FontWeight.$f_BOLD__org_gwtproject_dom_style_shared_FontWeight;
/**@private {!FontWeight}*/
FontWeight.$f_BOLDER__org_gwtproject_dom_style_shared_FontWeight;
/**@private {!FontWeight}*/
FontWeight.$f_LIGHTER__org_gwtproject_dom_style_shared_FontWeight;
/**@type {Map<?string, !FontWeight>}*/
FontWeight.f_namesToValuesMap__org_gwtproject_dom_style_shared_FontWeight_;
/**@const {number}*/
FontWeight.$ordinal$f_NORMAL__org_gwtproject_dom_style_shared_FontWeight = 0;
/**@const {number}*/
FontWeight.$ordinal$f_BOLD__org_gwtproject_dom_style_shared_FontWeight = 1;
/**@const {number}*/
FontWeight.$ordinal$f_BOLDER__org_gwtproject_dom_style_shared_FontWeight = 2;
/**@const {number}*/
FontWeight.$ordinal$f_LIGHTER__org_gwtproject_dom_style_shared_FontWeight = 3;

exports = FontWeight; 
//# sourceMappingURL=FontWeight.js.map
