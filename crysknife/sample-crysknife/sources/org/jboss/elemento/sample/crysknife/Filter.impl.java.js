goog.module('org.jboss.elemento.sample.crysknife.Filter$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let InternalPreconditions = goog.forwardDeclare('javaemul.internal.InternalPreconditions$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<Filter>}
  */
class Filter extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_fragment__org_jboss_elemento_sample_crysknife_Filter_;
 }
 /** @return {!Filter} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ fragment) {
  let $instance = new Filter();
  $instance.$ctor__org_jboss_elemento_sample_crysknife_Filter__java_lang_String__int__java_lang_String($name, $ordinal, fragment);
  return $instance;
 }
 
 $ctor__org_jboss_elemento_sample_crysknife_Filter__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ fragment) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_fragment__org_jboss_elemento_sample_crysknife_Filter_ = fragment;
 }
 /** @return {?string} */
 m_fragment__() {
  return this.f_fragment__org_jboss_elemento_sample_crysknife_Filter_;
 }
 /** @return {?string} */
 m_filter__() {
  return j_l_String.m_toLowerCase__java_lang_String(this.name());
 }
 /** @return {Filter} */
 static m_parseToken__java_lang_String(/** ?string */ token) {
  Filter.$clinit();
  if ($Equality.$same(token, null)) {
   return Filter.$f_ALL__org_jboss_elemento_sample_crysknife_Filter;
  } else {
   switch (InternalPreconditions.m_checkNotNull__java_lang_Object(token)) {
    case "#/active": 
     return Filter.$f_ACTIVE__org_jboss_elemento_sample_crysknife_Filter;
    case "#/completed": 
     return Filter.$f_COMPLETED__org_jboss_elemento_sample_crysknife_Filter;
    case "#/": 
    default: 
     return Filter.$f_ALL__org_jboss_elemento_sample_crysknife_Filter;
   }
  }
 }
 /** @return {!Filter} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Filter.$clinit();
  if ($Equality.$same(Filter.f_namesToValuesMap__org_jboss_elemento_sample_crysknife_Filter_, null)) {
   Filter.f_namesToValuesMap__org_jboss_elemento_sample_crysknife_Filter_ = $Enums.createMapFromValues(Filter.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Filter.f_namesToValuesMap__org_jboss_elemento_sample_crysknife_Filter_);
 }
 /** @return {!Array<!Filter>} */
 static m_values__() {
  Filter.$clinit();
  return /**@type {!Array<Filter>}*/ ($Arrays.$init([Filter.$f_ALL__org_jboss_elemento_sample_crysknife_Filter, Filter.$f_ACTIVE__org_jboss_elemento_sample_crysknife_Filter, Filter.$f_COMPLETED__org_jboss_elemento_sample_crysknife_Filter], Filter));
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** Filter */ arg0) {
  return super.compareTo(/**@type {Filter}*/ ($Casts.$to(arg0, Filter)));
 }
 /** @return {!Filter} */
 static get f_ALL__org_jboss_elemento_sample_crysknife_Filter() {
  return (Filter.$clinit(), Filter.$f_ALL__org_jboss_elemento_sample_crysknife_Filter);
 }
 /** @return {!Filter} */
 static get f_ACTIVE__org_jboss_elemento_sample_crysknife_Filter() {
  return (Filter.$clinit(), Filter.$f_ACTIVE__org_jboss_elemento_sample_crysknife_Filter);
 }
 /** @return {!Filter} */
 static get f_COMPLETED__org_jboss_elemento_sample_crysknife_Filter() {
  return (Filter.$clinit(), Filter.$f_COMPLETED__org_jboss_elemento_sample_crysknife_Filter);
 }
 
 static $clinit() {
  Filter.$clinit = () =>{};
  Filter.$loadModules();
  Enum.$clinit();
  Filter.$f_ALL__org_jboss_elemento_sample_crysknife_Filter = Filter.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ALL"), Filter.$ordinal$f_ALL__org_jboss_elemento_sample_crysknife_Filter, "#/");
  Filter.$f_ACTIVE__org_jboss_elemento_sample_crysknife_Filter = Filter.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ACTIVE"), Filter.$ordinal$f_ACTIVE__org_jboss_elemento_sample_crysknife_Filter, "#/active");
  Filter.$f_COMPLETED__org_jboss_elemento_sample_crysknife_Filter = Filter.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COMPLETED"), Filter.$ordinal$f_COMPLETED__org_jboss_elemento_sample_crysknife_Filter, "#/completed");
  Filter.f_namesToValuesMap__org_jboss_elemento_sample_crysknife_Filter_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Filter;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  InternalPreconditions = goog.module.get('javaemul.internal.InternalPreconditions$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(Filter, 'org.jboss.elemento.sample.crysknife.Filter');

/**@private {!Filter}*/
Filter.$f_ALL__org_jboss_elemento_sample_crysknife_Filter;
/**@private {!Filter}*/
Filter.$f_ACTIVE__org_jboss_elemento_sample_crysknife_Filter;
/**@private {!Filter}*/
Filter.$f_COMPLETED__org_jboss_elemento_sample_crysknife_Filter;
/**@type {Map<?string, !Filter>}*/
Filter.f_namesToValuesMap__org_jboss_elemento_sample_crysknife_Filter_;
/**@const {number}*/
Filter.$ordinal$f_ALL__org_jboss_elemento_sample_crysknife_Filter = 0;
/**@const {number}*/
Filter.$ordinal$f_ACTIVE__org_jboss_elemento_sample_crysknife_Filter = 1;
/**@const {number}*/
Filter.$ordinal$f_COMPLETED__org_jboss_elemento_sample_crysknife_Filter = 2;

exports = Filter; 
//# sourceMappingURL=Filter.js.map
