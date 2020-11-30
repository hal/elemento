goog.module('org.jboss.elemento.By.AttributeOperator$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<AttributeOperator>}
  */
class AttributeOperator extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_operator__org_jboss_elemento_By_AttributeOperator_;
 }
 /** @return {!AttributeOperator} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ operator) {
  let $instance = new AttributeOperator();
  $instance.$ctor__org_jboss_elemento_By_AttributeOperator__java_lang_String__int__java_lang_String($name, $ordinal, operator);
  return $instance;
 }
 
 $ctor__org_jboss_elemento_By_AttributeOperator__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ operator) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_operator__org_jboss_elemento_By_AttributeOperator_ = operator;
 }
 /** @return {!AttributeOperator} */
 static m_valueOf__java_lang_String(/** string */ name) {
  AttributeOperator.$clinit();
  if ($Equality.$same(AttributeOperator.f_namesToValuesMap__org_jboss_elemento_By_AttributeOperator_, null)) {
   AttributeOperator.f_namesToValuesMap__org_jboss_elemento_By_AttributeOperator_ = $Enums.createMapFromValues(AttributeOperator.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, AttributeOperator.f_namesToValuesMap__org_jboss_elemento_By_AttributeOperator_);
 }
 /** @return {!Array<!AttributeOperator>} */
 static m_values__() {
  AttributeOperator.$clinit();
  return /**@type {!Array<AttributeOperator>}*/ ($Arrays.$init([AttributeOperator.$f_STARTS_WITH__org_jboss_elemento_By_AttributeOperator, AttributeOperator.$f_ENDS_WITH__org_jboss_elemento_By_AttributeOperator, AttributeOperator.$f_CONTAINS__org_jboss_elemento_By_AttributeOperator, AttributeOperator.$f_CONTAINS_WORD__org_jboss_elemento_By_AttributeOperator, AttributeOperator.$f_CONTAINS_TOKEN__org_jboss_elemento_By_AttributeOperator], AttributeOperator));
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** AttributeOperator */ arg0) {
  return super.compareTo(/**@type {AttributeOperator}*/ ($Casts.$to(arg0, AttributeOperator)));
 }
 /** @return {!AttributeOperator} */
 static get f_STARTS_WITH__org_jboss_elemento_By_AttributeOperator() {
  return (AttributeOperator.$clinit(), AttributeOperator.$f_STARTS_WITH__org_jboss_elemento_By_AttributeOperator);
 }
 /** @return {!AttributeOperator} */
 static get f_ENDS_WITH__org_jboss_elemento_By_AttributeOperator() {
  return (AttributeOperator.$clinit(), AttributeOperator.$f_ENDS_WITH__org_jboss_elemento_By_AttributeOperator);
 }
 /** @return {!AttributeOperator} */
 static get f_CONTAINS__org_jboss_elemento_By_AttributeOperator() {
  return (AttributeOperator.$clinit(), AttributeOperator.$f_CONTAINS__org_jboss_elemento_By_AttributeOperator);
 }
 /** @return {!AttributeOperator} */
 static get f_CONTAINS_WORD__org_jboss_elemento_By_AttributeOperator() {
  return (AttributeOperator.$clinit(), AttributeOperator.$f_CONTAINS_WORD__org_jboss_elemento_By_AttributeOperator);
 }
 /** @return {!AttributeOperator} */
 static get f_CONTAINS_TOKEN__org_jboss_elemento_By_AttributeOperator() {
  return (AttributeOperator.$clinit(), AttributeOperator.$f_CONTAINS_TOKEN__org_jboss_elemento_By_AttributeOperator);
 }
 
 static $clinit() {
  AttributeOperator.$clinit = () =>{};
  AttributeOperator.$loadModules();
  Enum.$clinit();
  AttributeOperator.$f_STARTS_WITH__org_jboss_elemento_By_AttributeOperator = AttributeOperator.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("STARTS_WITH"), AttributeOperator.$ordinal$f_STARTS_WITH__org_jboss_elemento_By_AttributeOperator, "^");
  AttributeOperator.$f_ENDS_WITH__org_jboss_elemento_By_AttributeOperator = AttributeOperator.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ENDS_WITH"), AttributeOperator.$ordinal$f_ENDS_WITH__org_jboss_elemento_By_AttributeOperator, "$");
  AttributeOperator.$f_CONTAINS__org_jboss_elemento_By_AttributeOperator = AttributeOperator.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CONTAINS"), AttributeOperator.$ordinal$f_CONTAINS__org_jboss_elemento_By_AttributeOperator, "*");
  AttributeOperator.$f_CONTAINS_WORD__org_jboss_elemento_By_AttributeOperator = AttributeOperator.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CONTAINS_WORD"), AttributeOperator.$ordinal$f_CONTAINS_WORD__org_jboss_elemento_By_AttributeOperator, "~");
  AttributeOperator.$f_CONTAINS_TOKEN__org_jboss_elemento_By_AttributeOperator = AttributeOperator.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CONTAINS_TOKEN"), AttributeOperator.$ordinal$f_CONTAINS_TOKEN__org_jboss_elemento_By_AttributeOperator, "|");
  AttributeOperator.f_namesToValuesMap__org_jboss_elemento_By_AttributeOperator_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof AttributeOperator;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(AttributeOperator, 'org.jboss.elemento.By$AttributeOperator');

/**@private {!AttributeOperator}*/
AttributeOperator.$f_STARTS_WITH__org_jboss_elemento_By_AttributeOperator;
/**@private {!AttributeOperator}*/
AttributeOperator.$f_ENDS_WITH__org_jboss_elemento_By_AttributeOperator;
/**@private {!AttributeOperator}*/
AttributeOperator.$f_CONTAINS__org_jboss_elemento_By_AttributeOperator;
/**@private {!AttributeOperator}*/
AttributeOperator.$f_CONTAINS_WORD__org_jboss_elemento_By_AttributeOperator;
/**@private {!AttributeOperator}*/
AttributeOperator.$f_CONTAINS_TOKEN__org_jboss_elemento_By_AttributeOperator;
/**@type {Map<?string, !AttributeOperator>}*/
AttributeOperator.f_namesToValuesMap__org_jboss_elemento_By_AttributeOperator_;
/**@const {number}*/
AttributeOperator.$ordinal$f_STARTS_WITH__org_jboss_elemento_By_AttributeOperator = 0;
/**@const {number}*/
AttributeOperator.$ordinal$f_ENDS_WITH__org_jboss_elemento_By_AttributeOperator = 1;
/**@const {number}*/
AttributeOperator.$ordinal$f_CONTAINS__org_jboss_elemento_By_AttributeOperator = 2;
/**@const {number}*/
AttributeOperator.$ordinal$f_CONTAINS_WORD__org_jboss_elemento_By_AttributeOperator = 3;
/**@const {number}*/
AttributeOperator.$ordinal$f_CONTAINS_TOKEN__org_jboss_elemento_By_AttributeOperator = 4;

exports = AttributeOperator; 
//# sourceMappingURL=By$AttributeOperator.js.map
