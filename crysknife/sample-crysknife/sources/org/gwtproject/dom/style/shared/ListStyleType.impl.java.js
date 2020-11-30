goog.module('org.gwtproject.dom.style.shared.ListStyleType$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasCssName = goog.require('org.gwtproject.dom.style.shared.HasCssName$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $1 = goog.forwardDeclare('org.gwtproject.dom.style.shared.ListStyleType.$1$impl');
let $2 = goog.forwardDeclare('org.gwtproject.dom.style.shared.ListStyleType.$2$impl');
let $3 = goog.forwardDeclare('org.gwtproject.dom.style.shared.ListStyleType.$3$impl');
let $4 = goog.forwardDeclare('org.gwtproject.dom.style.shared.ListStyleType.$4$impl');
let $5 = goog.forwardDeclare('org.gwtproject.dom.style.shared.ListStyleType.$5$impl');
let $6 = goog.forwardDeclare('org.gwtproject.dom.style.shared.ListStyleType.$6$impl');
let $7 = goog.forwardDeclare('org.gwtproject.dom.style.shared.ListStyleType.$7$impl');
let $8 = goog.forwardDeclare('org.gwtproject.dom.style.shared.ListStyleType.$8$impl');
let $9 = goog.forwardDeclare('org.gwtproject.dom.style.shared.ListStyleType.$9$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @abstract
 * @extends {Enum<ListStyleType>}
 * @implements {HasCssName}
  */
class ListStyleType extends Enum {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_gwtproject_dom_style_shared_ListStyleType__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /** @abstract @override @return {?string} */
 m_getCssName__() {}
 /** @return {!ListStyleType} */
 static m_valueOf__java_lang_String(/** string */ name) {
  ListStyleType.$clinit();
  if ($Equality.$same(ListStyleType.f_namesToValuesMap__org_gwtproject_dom_style_shared_ListStyleType_, null)) {
   ListStyleType.f_namesToValuesMap__org_gwtproject_dom_style_shared_ListStyleType_ = $Enums.createMapFromValues(ListStyleType.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, ListStyleType.f_namesToValuesMap__org_gwtproject_dom_style_shared_ListStyleType_);
 }
 /** @return {!Array<!ListStyleType>} */
 static m_values__() {
  ListStyleType.$clinit();
  return /**@type {!Array<ListStyleType>}*/ ($Arrays.$init([ListStyleType.$f_NONE__org_gwtproject_dom_style_shared_ListStyleType, ListStyleType.$f_DISC__org_gwtproject_dom_style_shared_ListStyleType, ListStyleType.$f_CIRCLE__org_gwtproject_dom_style_shared_ListStyleType, ListStyleType.$f_SQUARE__org_gwtproject_dom_style_shared_ListStyleType, ListStyleType.$f_DECIMAL__org_gwtproject_dom_style_shared_ListStyleType, ListStyleType.$f_LOWER_ALPHA__org_gwtproject_dom_style_shared_ListStyleType, ListStyleType.$f_UPPER_ALPHA__org_gwtproject_dom_style_shared_ListStyleType, ListStyleType.$f_LOWER_ROMAN__org_gwtproject_dom_style_shared_ListStyleType, ListStyleType.$f_UPPER_ROMAN__org_gwtproject_dom_style_shared_ListStyleType], ListStyleType));
 }
 /** @return {!ListStyleType} */
 static get f_NONE__org_gwtproject_dom_style_shared_ListStyleType() {
  return (ListStyleType.$clinit(), ListStyleType.$f_NONE__org_gwtproject_dom_style_shared_ListStyleType);
 }
 /** @return {!ListStyleType} */
 static get f_DISC__org_gwtproject_dom_style_shared_ListStyleType() {
  return (ListStyleType.$clinit(), ListStyleType.$f_DISC__org_gwtproject_dom_style_shared_ListStyleType);
 }
 /** @return {!ListStyleType} */
 static get f_CIRCLE__org_gwtproject_dom_style_shared_ListStyleType() {
  return (ListStyleType.$clinit(), ListStyleType.$f_CIRCLE__org_gwtproject_dom_style_shared_ListStyleType);
 }
 /** @return {!ListStyleType} */
 static get f_SQUARE__org_gwtproject_dom_style_shared_ListStyleType() {
  return (ListStyleType.$clinit(), ListStyleType.$f_SQUARE__org_gwtproject_dom_style_shared_ListStyleType);
 }
 /** @return {!ListStyleType} */
 static get f_DECIMAL__org_gwtproject_dom_style_shared_ListStyleType() {
  return (ListStyleType.$clinit(), ListStyleType.$f_DECIMAL__org_gwtproject_dom_style_shared_ListStyleType);
 }
 /** @return {!ListStyleType} */
 static get f_LOWER_ALPHA__org_gwtproject_dom_style_shared_ListStyleType() {
  return (ListStyleType.$clinit(), ListStyleType.$f_LOWER_ALPHA__org_gwtproject_dom_style_shared_ListStyleType);
 }
 /** @return {!ListStyleType} */
 static get f_UPPER_ALPHA__org_gwtproject_dom_style_shared_ListStyleType() {
  return (ListStyleType.$clinit(), ListStyleType.$f_UPPER_ALPHA__org_gwtproject_dom_style_shared_ListStyleType);
 }
 /** @return {!ListStyleType} */
 static get f_LOWER_ROMAN__org_gwtproject_dom_style_shared_ListStyleType() {
  return (ListStyleType.$clinit(), ListStyleType.$f_LOWER_ROMAN__org_gwtproject_dom_style_shared_ListStyleType);
 }
 /** @return {!ListStyleType} */
 static get f_UPPER_ROMAN__org_gwtproject_dom_style_shared_ListStyleType() {
  return (ListStyleType.$clinit(), ListStyleType.$f_UPPER_ROMAN__org_gwtproject_dom_style_shared_ListStyleType);
 }
 
 static $clinit() {
  ListStyleType.$clinit = () =>{};
  ListStyleType.$loadModules();
  Enum.$clinit();
  ListStyleType.$f_NONE__org_gwtproject_dom_style_shared_ListStyleType = $1.$create__java_lang_String__int($Util.$makeEnumName("NONE"), ListStyleType.$ordinal$f_NONE__org_gwtproject_dom_style_shared_ListStyleType);
  ListStyleType.$f_DISC__org_gwtproject_dom_style_shared_ListStyleType = $2.$create__java_lang_String__int($Util.$makeEnumName("DISC"), ListStyleType.$ordinal$f_DISC__org_gwtproject_dom_style_shared_ListStyleType);
  ListStyleType.$f_CIRCLE__org_gwtproject_dom_style_shared_ListStyleType = $3.$create__java_lang_String__int($Util.$makeEnumName("CIRCLE"), ListStyleType.$ordinal$f_CIRCLE__org_gwtproject_dom_style_shared_ListStyleType);
  ListStyleType.$f_SQUARE__org_gwtproject_dom_style_shared_ListStyleType = $4.$create__java_lang_String__int($Util.$makeEnumName("SQUARE"), ListStyleType.$ordinal$f_SQUARE__org_gwtproject_dom_style_shared_ListStyleType);
  ListStyleType.$f_DECIMAL__org_gwtproject_dom_style_shared_ListStyleType = $5.$create__java_lang_String__int($Util.$makeEnumName("DECIMAL"), ListStyleType.$ordinal$f_DECIMAL__org_gwtproject_dom_style_shared_ListStyleType);
  ListStyleType.$f_LOWER_ALPHA__org_gwtproject_dom_style_shared_ListStyleType = $6.$create__java_lang_String__int($Util.$makeEnumName("LOWER_ALPHA"), ListStyleType.$ordinal$f_LOWER_ALPHA__org_gwtproject_dom_style_shared_ListStyleType);
  ListStyleType.$f_UPPER_ALPHA__org_gwtproject_dom_style_shared_ListStyleType = $7.$create__java_lang_String__int($Util.$makeEnumName("UPPER_ALPHA"), ListStyleType.$ordinal$f_UPPER_ALPHA__org_gwtproject_dom_style_shared_ListStyleType);
  ListStyleType.$f_LOWER_ROMAN__org_gwtproject_dom_style_shared_ListStyleType = $8.$create__java_lang_String__int($Util.$makeEnumName("LOWER_ROMAN"), ListStyleType.$ordinal$f_LOWER_ROMAN__org_gwtproject_dom_style_shared_ListStyleType);
  ListStyleType.$f_UPPER_ROMAN__org_gwtproject_dom_style_shared_ListStyleType = $9.$create__java_lang_String__int($Util.$makeEnumName("UPPER_ROMAN"), ListStyleType.$ordinal$f_UPPER_ROMAN__org_gwtproject_dom_style_shared_ListStyleType);
  ListStyleType.f_namesToValuesMap__org_gwtproject_dom_style_shared_ListStyleType_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof ListStyleType;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.gwtproject.dom.style.shared.ListStyleType.$1$impl');
  $2 = goog.module.get('org.gwtproject.dom.style.shared.ListStyleType.$2$impl');
  $3 = goog.module.get('org.gwtproject.dom.style.shared.ListStyleType.$3$impl');
  $4 = goog.module.get('org.gwtproject.dom.style.shared.ListStyleType.$4$impl');
  $5 = goog.module.get('org.gwtproject.dom.style.shared.ListStyleType.$5$impl');
  $6 = goog.module.get('org.gwtproject.dom.style.shared.ListStyleType.$6$impl');
  $7 = goog.module.get('org.gwtproject.dom.style.shared.ListStyleType.$7$impl');
  $8 = goog.module.get('org.gwtproject.dom.style.shared.ListStyleType.$8$impl');
  $9 = goog.module.get('org.gwtproject.dom.style.shared.ListStyleType.$9$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(ListStyleType, 'org.gwtproject.dom.style.shared.ListStyleType');

HasCssName.$markImplementor(ListStyleType);

/**@private {!ListStyleType}*/
ListStyleType.$f_NONE__org_gwtproject_dom_style_shared_ListStyleType;
/**@private {!ListStyleType}*/
ListStyleType.$f_DISC__org_gwtproject_dom_style_shared_ListStyleType;
/**@private {!ListStyleType}*/
ListStyleType.$f_CIRCLE__org_gwtproject_dom_style_shared_ListStyleType;
/**@private {!ListStyleType}*/
ListStyleType.$f_SQUARE__org_gwtproject_dom_style_shared_ListStyleType;
/**@private {!ListStyleType}*/
ListStyleType.$f_DECIMAL__org_gwtproject_dom_style_shared_ListStyleType;
/**@private {!ListStyleType}*/
ListStyleType.$f_LOWER_ALPHA__org_gwtproject_dom_style_shared_ListStyleType;
/**@private {!ListStyleType}*/
ListStyleType.$f_UPPER_ALPHA__org_gwtproject_dom_style_shared_ListStyleType;
/**@private {!ListStyleType}*/
ListStyleType.$f_LOWER_ROMAN__org_gwtproject_dom_style_shared_ListStyleType;
/**@private {!ListStyleType}*/
ListStyleType.$f_UPPER_ROMAN__org_gwtproject_dom_style_shared_ListStyleType;
/**@type {Map<?string, !ListStyleType>}*/
ListStyleType.f_namesToValuesMap__org_gwtproject_dom_style_shared_ListStyleType_;
/**@const {number}*/
ListStyleType.$ordinal$f_NONE__org_gwtproject_dom_style_shared_ListStyleType = 0;
/**@const {number}*/
ListStyleType.$ordinal$f_DISC__org_gwtproject_dom_style_shared_ListStyleType = 1;
/**@const {number}*/
ListStyleType.$ordinal$f_CIRCLE__org_gwtproject_dom_style_shared_ListStyleType = 2;
/**@const {number}*/
ListStyleType.$ordinal$f_SQUARE__org_gwtproject_dom_style_shared_ListStyleType = 3;
/**@const {number}*/
ListStyleType.$ordinal$f_DECIMAL__org_gwtproject_dom_style_shared_ListStyleType = 4;
/**@const {number}*/
ListStyleType.$ordinal$f_LOWER_ALPHA__org_gwtproject_dom_style_shared_ListStyleType = 5;
/**@const {number}*/
ListStyleType.$ordinal$f_UPPER_ALPHA__org_gwtproject_dom_style_shared_ListStyleType = 6;
/**@const {number}*/
ListStyleType.$ordinal$f_LOWER_ROMAN__org_gwtproject_dom_style_shared_ListStyleType = 7;
/**@const {number}*/
ListStyleType.$ordinal$f_UPPER_ROMAN__org_gwtproject_dom_style_shared_ListStyleType = 8;

exports = ListStyleType; 
//# sourceMappingURL=ListStyleType.js.map
