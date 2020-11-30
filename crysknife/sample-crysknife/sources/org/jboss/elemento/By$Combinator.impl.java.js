goog.module('org.jboss.elemento.By.Combinator$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<Combinator>}
  */
class Combinator extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_operator__org_jboss_elemento_By_Combinator_;
 }
 /** @return {!Combinator} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ operator) {
  let $instance = new Combinator();
  $instance.$ctor__org_jboss_elemento_By_Combinator__java_lang_String__int__java_lang_String($name, $ordinal, operator);
  return $instance;
 }
 
 $ctor__org_jboss_elemento_By_Combinator__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ operator) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_operator__org_jboss_elemento_By_Combinator_ = operator;
 }
 /** @return {!Combinator} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Combinator.$clinit();
  if ($Equality.$same(Combinator.f_namesToValuesMap__org_jboss_elemento_By_Combinator_, null)) {
   Combinator.f_namesToValuesMap__org_jboss_elemento_By_Combinator_ = $Enums.createMapFromValues(Combinator.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Combinator.f_namesToValuesMap__org_jboss_elemento_By_Combinator_);
 }
 /** @return {!Array<!Combinator>} */
 static m_values__() {
  Combinator.$clinit();
  return /**@type {!Array<Combinator>}*/ ($Arrays.$init([Combinator.$f_AND__org_jboss_elemento_By_Combinator, Combinator.$f_DESCENDANT__org_jboss_elemento_By_Combinator, Combinator.$f_CHILD__org_jboss_elemento_By_Combinator, Combinator.$f_ADJACENT_SIBLING__org_jboss_elemento_By_Combinator, Combinator.$f_SIBLING__org_jboss_elemento_By_Combinator], Combinator));
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** Combinator */ arg0) {
  return super.compareTo(/**@type {Combinator}*/ ($Casts.$to(arg0, Combinator)));
 }
 /** @return {!Combinator} */
 static get f_AND__org_jboss_elemento_By_Combinator() {
  return (Combinator.$clinit(), Combinator.$f_AND__org_jboss_elemento_By_Combinator);
 }
 /** @return {!Combinator} */
 static get f_DESCENDANT__org_jboss_elemento_By_Combinator() {
  return (Combinator.$clinit(), Combinator.$f_DESCENDANT__org_jboss_elemento_By_Combinator);
 }
 /** @return {!Combinator} */
 static get f_CHILD__org_jboss_elemento_By_Combinator() {
  return (Combinator.$clinit(), Combinator.$f_CHILD__org_jboss_elemento_By_Combinator);
 }
 /** @return {!Combinator} */
 static get f_ADJACENT_SIBLING__org_jboss_elemento_By_Combinator() {
  return (Combinator.$clinit(), Combinator.$f_ADJACENT_SIBLING__org_jboss_elemento_By_Combinator);
 }
 /** @return {!Combinator} */
 static get f_SIBLING__org_jboss_elemento_By_Combinator() {
  return (Combinator.$clinit(), Combinator.$f_SIBLING__org_jboss_elemento_By_Combinator);
 }
 
 static $clinit() {
  Combinator.$clinit = () =>{};
  Combinator.$loadModules();
  Enum.$clinit();
  Combinator.$f_AND__org_jboss_elemento_By_Combinator = Combinator.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("AND"), Combinator.$ordinal$f_AND__org_jboss_elemento_By_Combinator, "");
  Combinator.$f_DESCENDANT__org_jboss_elemento_By_Combinator = Combinator.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DESCENDANT"), Combinator.$ordinal$f_DESCENDANT__org_jboss_elemento_By_Combinator, " ");
  Combinator.$f_CHILD__org_jboss_elemento_By_Combinator = Combinator.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CHILD"), Combinator.$ordinal$f_CHILD__org_jboss_elemento_By_Combinator, " > ");
  Combinator.$f_ADJACENT_SIBLING__org_jboss_elemento_By_Combinator = Combinator.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ADJACENT_SIBLING"), Combinator.$ordinal$f_ADJACENT_SIBLING__org_jboss_elemento_By_Combinator, " + ");
  Combinator.$f_SIBLING__org_jboss_elemento_By_Combinator = Combinator.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SIBLING"), Combinator.$ordinal$f_SIBLING__org_jboss_elemento_By_Combinator, " ~ ");
  Combinator.f_namesToValuesMap__org_jboss_elemento_By_Combinator_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Combinator;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(Combinator, 'org.jboss.elemento.By$Combinator');

/**@private {!Combinator}*/
Combinator.$f_AND__org_jboss_elemento_By_Combinator;
/**@private {!Combinator}*/
Combinator.$f_DESCENDANT__org_jboss_elemento_By_Combinator;
/**@private {!Combinator}*/
Combinator.$f_CHILD__org_jboss_elemento_By_Combinator;
/**@private {!Combinator}*/
Combinator.$f_ADJACENT_SIBLING__org_jboss_elemento_By_Combinator;
/**@private {!Combinator}*/
Combinator.$f_SIBLING__org_jboss_elemento_By_Combinator;
/**@type {Map<?string, !Combinator>}*/
Combinator.f_namesToValuesMap__org_jboss_elemento_By_Combinator_;
/**@const {number}*/
Combinator.$ordinal$f_AND__org_jboss_elemento_By_Combinator = 0;
/**@const {number}*/
Combinator.$ordinal$f_DESCENDANT__org_jboss_elemento_By_Combinator = 1;
/**@const {number}*/
Combinator.$ordinal$f_CHILD__org_jboss_elemento_By_Combinator = 2;
/**@const {number}*/
Combinator.$ordinal$f_ADJACENT_SIBLING__org_jboss_elemento_By_Combinator = 3;
/**@const {number}*/
Combinator.$ordinal$f_SIBLING__org_jboss_elemento_By_Combinator = 4;

exports = Combinator; 
//# sourceMappingURL=By$Combinator.js.map
