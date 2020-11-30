goog.module('org.gwtproject.dom.style.shared.Clear$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasCssName = goog.require('org.gwtproject.dom.style.shared.HasCssName$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $1 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Clear.$1$impl');
let $2 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Clear.$2$impl');
let $3 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Clear.$3$impl');
let $4 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Clear.$4$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @abstract
 * @extends {Enum<Clear>}
 * @implements {HasCssName}
  */
class Clear extends Enum {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_gwtproject_dom_style_shared_Clear__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /** @abstract @override @return {?string} */
 m_getCssName__() {}
 /** @return {!Clear} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Clear.$clinit();
  if ($Equality.$same(Clear.f_namesToValuesMap__org_gwtproject_dom_style_shared_Clear_, null)) {
   Clear.f_namesToValuesMap__org_gwtproject_dom_style_shared_Clear_ = $Enums.createMapFromValues(Clear.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Clear.f_namesToValuesMap__org_gwtproject_dom_style_shared_Clear_);
 }
 /** @return {!Array<!Clear>} */
 static m_values__() {
  Clear.$clinit();
  return /**@type {!Array<Clear>}*/ ($Arrays.$init([Clear.$f_BOTH__org_gwtproject_dom_style_shared_Clear, Clear.$f_LEFT__org_gwtproject_dom_style_shared_Clear, Clear.$f_NONE__org_gwtproject_dom_style_shared_Clear, Clear.$f_RIGHT__org_gwtproject_dom_style_shared_Clear], Clear));
 }
 /** @return {!Clear} */
 static get f_BOTH__org_gwtproject_dom_style_shared_Clear() {
  return (Clear.$clinit(), Clear.$f_BOTH__org_gwtproject_dom_style_shared_Clear);
 }
 /** @return {!Clear} */
 static get f_LEFT__org_gwtproject_dom_style_shared_Clear() {
  return (Clear.$clinit(), Clear.$f_LEFT__org_gwtproject_dom_style_shared_Clear);
 }
 /** @return {!Clear} */
 static get f_NONE__org_gwtproject_dom_style_shared_Clear() {
  return (Clear.$clinit(), Clear.$f_NONE__org_gwtproject_dom_style_shared_Clear);
 }
 /** @return {!Clear} */
 static get f_RIGHT__org_gwtproject_dom_style_shared_Clear() {
  return (Clear.$clinit(), Clear.$f_RIGHT__org_gwtproject_dom_style_shared_Clear);
 }
 
 static $clinit() {
  Clear.$clinit = () =>{};
  Clear.$loadModules();
  Enum.$clinit();
  Clear.$f_BOTH__org_gwtproject_dom_style_shared_Clear = $1.$create__java_lang_String__int($Util.$makeEnumName("BOTH"), Clear.$ordinal$f_BOTH__org_gwtproject_dom_style_shared_Clear);
  Clear.$f_LEFT__org_gwtproject_dom_style_shared_Clear = $2.$create__java_lang_String__int($Util.$makeEnumName("LEFT"), Clear.$ordinal$f_LEFT__org_gwtproject_dom_style_shared_Clear);
  Clear.$f_NONE__org_gwtproject_dom_style_shared_Clear = $3.$create__java_lang_String__int($Util.$makeEnumName("NONE"), Clear.$ordinal$f_NONE__org_gwtproject_dom_style_shared_Clear);
  Clear.$f_RIGHT__org_gwtproject_dom_style_shared_Clear = $4.$create__java_lang_String__int($Util.$makeEnumName("RIGHT"), Clear.$ordinal$f_RIGHT__org_gwtproject_dom_style_shared_Clear);
  Clear.f_namesToValuesMap__org_gwtproject_dom_style_shared_Clear_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Clear;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.gwtproject.dom.style.shared.Clear.$1$impl');
  $2 = goog.module.get('org.gwtproject.dom.style.shared.Clear.$2$impl');
  $3 = goog.module.get('org.gwtproject.dom.style.shared.Clear.$3$impl');
  $4 = goog.module.get('org.gwtproject.dom.style.shared.Clear.$4$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(Clear, 'org.gwtproject.dom.style.shared.Clear');

HasCssName.$markImplementor(Clear);

/**@private {!Clear}*/
Clear.$f_BOTH__org_gwtproject_dom_style_shared_Clear;
/**@private {!Clear}*/
Clear.$f_LEFT__org_gwtproject_dom_style_shared_Clear;
/**@private {!Clear}*/
Clear.$f_NONE__org_gwtproject_dom_style_shared_Clear;
/**@private {!Clear}*/
Clear.$f_RIGHT__org_gwtproject_dom_style_shared_Clear;
/**@type {Map<?string, !Clear>}*/
Clear.f_namesToValuesMap__org_gwtproject_dom_style_shared_Clear_;
/**@const {number}*/
Clear.$ordinal$f_BOTH__org_gwtproject_dom_style_shared_Clear = 0;
/**@const {number}*/
Clear.$ordinal$f_LEFT__org_gwtproject_dom_style_shared_Clear = 1;
/**@const {number}*/
Clear.$ordinal$f_NONE__org_gwtproject_dom_style_shared_Clear = 2;
/**@const {number}*/
Clear.$ordinal$f_RIGHT__org_gwtproject_dom_style_shared_Clear = 3;

exports = Clear; 
//# sourceMappingURL=Clear.js.map
