goog.module('org.gwtproject.dom.style.shared.WhiteSpace$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasCssName = goog.require('org.gwtproject.dom.style.shared.HasCssName$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $1 = goog.forwardDeclare('org.gwtproject.dom.style.shared.WhiteSpace.$1$impl');
let $2 = goog.forwardDeclare('org.gwtproject.dom.style.shared.WhiteSpace.$2$impl');
let $3 = goog.forwardDeclare('org.gwtproject.dom.style.shared.WhiteSpace.$3$impl');
let $4 = goog.forwardDeclare('org.gwtproject.dom.style.shared.WhiteSpace.$4$impl');
let $5 = goog.forwardDeclare('org.gwtproject.dom.style.shared.WhiteSpace.$5$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @abstract
 * @extends {Enum<WhiteSpace>}
 * @implements {HasCssName}
  */
class WhiteSpace extends Enum {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_gwtproject_dom_style_shared_WhiteSpace__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /** @abstract @override @return {?string} */
 m_getCssName__() {}
 /** @return {!WhiteSpace} */
 static m_valueOf__java_lang_String(/** string */ name) {
  WhiteSpace.$clinit();
  if ($Equality.$same(WhiteSpace.f_namesToValuesMap__org_gwtproject_dom_style_shared_WhiteSpace_, null)) {
   WhiteSpace.f_namesToValuesMap__org_gwtproject_dom_style_shared_WhiteSpace_ = $Enums.createMapFromValues(WhiteSpace.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, WhiteSpace.f_namesToValuesMap__org_gwtproject_dom_style_shared_WhiteSpace_);
 }
 /** @return {!Array<!WhiteSpace>} */
 static m_values__() {
  WhiteSpace.$clinit();
  return /**@type {!Array<WhiteSpace>}*/ ($Arrays.$init([WhiteSpace.$f_NORMAL__org_gwtproject_dom_style_shared_WhiteSpace, WhiteSpace.$f_NOWRAP__org_gwtproject_dom_style_shared_WhiteSpace, WhiteSpace.$f_PRE__org_gwtproject_dom_style_shared_WhiteSpace, WhiteSpace.$f_PRE_LINE__org_gwtproject_dom_style_shared_WhiteSpace, WhiteSpace.$f_PRE_WRAP__org_gwtproject_dom_style_shared_WhiteSpace], WhiteSpace));
 }
 /** @return {!WhiteSpace} */
 static get f_NORMAL__org_gwtproject_dom_style_shared_WhiteSpace() {
  return (WhiteSpace.$clinit(), WhiteSpace.$f_NORMAL__org_gwtproject_dom_style_shared_WhiteSpace);
 }
 /** @return {!WhiteSpace} */
 static get f_NOWRAP__org_gwtproject_dom_style_shared_WhiteSpace() {
  return (WhiteSpace.$clinit(), WhiteSpace.$f_NOWRAP__org_gwtproject_dom_style_shared_WhiteSpace);
 }
 /** @return {!WhiteSpace} */
 static get f_PRE__org_gwtproject_dom_style_shared_WhiteSpace() {
  return (WhiteSpace.$clinit(), WhiteSpace.$f_PRE__org_gwtproject_dom_style_shared_WhiteSpace);
 }
 /** @return {!WhiteSpace} */
 static get f_PRE_LINE__org_gwtproject_dom_style_shared_WhiteSpace() {
  return (WhiteSpace.$clinit(), WhiteSpace.$f_PRE_LINE__org_gwtproject_dom_style_shared_WhiteSpace);
 }
 /** @return {!WhiteSpace} */
 static get f_PRE_WRAP__org_gwtproject_dom_style_shared_WhiteSpace() {
  return (WhiteSpace.$clinit(), WhiteSpace.$f_PRE_WRAP__org_gwtproject_dom_style_shared_WhiteSpace);
 }
 
 static $clinit() {
  WhiteSpace.$clinit = () =>{};
  WhiteSpace.$loadModules();
  Enum.$clinit();
  WhiteSpace.$f_NORMAL__org_gwtproject_dom_style_shared_WhiteSpace = $1.$create__java_lang_String__int($Util.$makeEnumName("NORMAL"), WhiteSpace.$ordinal$f_NORMAL__org_gwtproject_dom_style_shared_WhiteSpace);
  WhiteSpace.$f_NOWRAP__org_gwtproject_dom_style_shared_WhiteSpace = $2.$create__java_lang_String__int($Util.$makeEnumName("NOWRAP"), WhiteSpace.$ordinal$f_NOWRAP__org_gwtproject_dom_style_shared_WhiteSpace);
  WhiteSpace.$f_PRE__org_gwtproject_dom_style_shared_WhiteSpace = $3.$create__java_lang_String__int($Util.$makeEnumName("PRE"), WhiteSpace.$ordinal$f_PRE__org_gwtproject_dom_style_shared_WhiteSpace);
  WhiteSpace.$f_PRE_LINE__org_gwtproject_dom_style_shared_WhiteSpace = $4.$create__java_lang_String__int($Util.$makeEnumName("PRE_LINE"), WhiteSpace.$ordinal$f_PRE_LINE__org_gwtproject_dom_style_shared_WhiteSpace);
  WhiteSpace.$f_PRE_WRAP__org_gwtproject_dom_style_shared_WhiteSpace = $5.$create__java_lang_String__int($Util.$makeEnumName("PRE_WRAP"), WhiteSpace.$ordinal$f_PRE_WRAP__org_gwtproject_dom_style_shared_WhiteSpace);
  WhiteSpace.f_namesToValuesMap__org_gwtproject_dom_style_shared_WhiteSpace_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof WhiteSpace;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.gwtproject.dom.style.shared.WhiteSpace.$1$impl');
  $2 = goog.module.get('org.gwtproject.dom.style.shared.WhiteSpace.$2$impl');
  $3 = goog.module.get('org.gwtproject.dom.style.shared.WhiteSpace.$3$impl');
  $4 = goog.module.get('org.gwtproject.dom.style.shared.WhiteSpace.$4$impl');
  $5 = goog.module.get('org.gwtproject.dom.style.shared.WhiteSpace.$5$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(WhiteSpace, 'org.gwtproject.dom.style.shared.WhiteSpace');

HasCssName.$markImplementor(WhiteSpace);

/**@private {!WhiteSpace}*/
WhiteSpace.$f_NORMAL__org_gwtproject_dom_style_shared_WhiteSpace;
/**@private {!WhiteSpace}*/
WhiteSpace.$f_NOWRAP__org_gwtproject_dom_style_shared_WhiteSpace;
/**@private {!WhiteSpace}*/
WhiteSpace.$f_PRE__org_gwtproject_dom_style_shared_WhiteSpace;
/**@private {!WhiteSpace}*/
WhiteSpace.$f_PRE_LINE__org_gwtproject_dom_style_shared_WhiteSpace;
/**@private {!WhiteSpace}*/
WhiteSpace.$f_PRE_WRAP__org_gwtproject_dom_style_shared_WhiteSpace;
/**@type {Map<?string, !WhiteSpace>}*/
WhiteSpace.f_namesToValuesMap__org_gwtproject_dom_style_shared_WhiteSpace_;
/**@const {number}*/
WhiteSpace.$ordinal$f_NORMAL__org_gwtproject_dom_style_shared_WhiteSpace = 0;
/**@const {number}*/
WhiteSpace.$ordinal$f_NOWRAP__org_gwtproject_dom_style_shared_WhiteSpace = 1;
/**@const {number}*/
WhiteSpace.$ordinal$f_PRE__org_gwtproject_dom_style_shared_WhiteSpace = 2;
/**@const {number}*/
WhiteSpace.$ordinal$f_PRE_LINE__org_gwtproject_dom_style_shared_WhiteSpace = 3;
/**@const {number}*/
WhiteSpace.$ordinal$f_PRE_WRAP__org_gwtproject_dom_style_shared_WhiteSpace = 4;

exports = WhiteSpace; 
//# sourceMappingURL=WhiteSpace.js.map
