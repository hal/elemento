goog.module('org.gwtproject.dom.style.shared.Overflow$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasCssName = goog.require('org.gwtproject.dom.style.shared.HasCssName$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $1 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Overflow.$1$impl');
let $2 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Overflow.$2$impl');
let $3 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Overflow.$3$impl');
let $4 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Overflow.$4$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @abstract
 * @extends {Enum<Overflow>}
 * @implements {HasCssName}
  */
class Overflow extends Enum {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_gwtproject_dom_style_shared_Overflow__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /** @abstract @override @return {?string} */
 m_getCssName__() {}
 /** @return {!Overflow} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Overflow.$clinit();
  if ($Equality.$same(Overflow.f_namesToValuesMap__org_gwtproject_dom_style_shared_Overflow_, null)) {
   Overflow.f_namesToValuesMap__org_gwtproject_dom_style_shared_Overflow_ = $Enums.createMapFromValues(Overflow.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Overflow.f_namesToValuesMap__org_gwtproject_dom_style_shared_Overflow_);
 }
 /** @return {!Array<!Overflow>} */
 static m_values__() {
  Overflow.$clinit();
  return /**@type {!Array<Overflow>}*/ ($Arrays.$init([Overflow.$f_VISIBLE__org_gwtproject_dom_style_shared_Overflow, Overflow.$f_HIDDEN__org_gwtproject_dom_style_shared_Overflow, Overflow.$f_SCROLL__org_gwtproject_dom_style_shared_Overflow, Overflow.$f_AUTO__org_gwtproject_dom_style_shared_Overflow], Overflow));
 }
 /** @return {!Overflow} */
 static get f_VISIBLE__org_gwtproject_dom_style_shared_Overflow() {
  return (Overflow.$clinit(), Overflow.$f_VISIBLE__org_gwtproject_dom_style_shared_Overflow);
 }
 /** @return {!Overflow} */
 static get f_HIDDEN__org_gwtproject_dom_style_shared_Overflow() {
  return (Overflow.$clinit(), Overflow.$f_HIDDEN__org_gwtproject_dom_style_shared_Overflow);
 }
 /** @return {!Overflow} */
 static get f_SCROLL__org_gwtproject_dom_style_shared_Overflow() {
  return (Overflow.$clinit(), Overflow.$f_SCROLL__org_gwtproject_dom_style_shared_Overflow);
 }
 /** @return {!Overflow} */
 static get f_AUTO__org_gwtproject_dom_style_shared_Overflow() {
  return (Overflow.$clinit(), Overflow.$f_AUTO__org_gwtproject_dom_style_shared_Overflow);
 }
 
 static $clinit() {
  Overflow.$clinit = () =>{};
  Overflow.$loadModules();
  Enum.$clinit();
  Overflow.$f_VISIBLE__org_gwtproject_dom_style_shared_Overflow = $1.$create__java_lang_String__int($Util.$makeEnumName("VISIBLE"), Overflow.$ordinal$f_VISIBLE__org_gwtproject_dom_style_shared_Overflow);
  Overflow.$f_HIDDEN__org_gwtproject_dom_style_shared_Overflow = $2.$create__java_lang_String__int($Util.$makeEnumName("HIDDEN"), Overflow.$ordinal$f_HIDDEN__org_gwtproject_dom_style_shared_Overflow);
  Overflow.$f_SCROLL__org_gwtproject_dom_style_shared_Overflow = $3.$create__java_lang_String__int($Util.$makeEnumName("SCROLL"), Overflow.$ordinal$f_SCROLL__org_gwtproject_dom_style_shared_Overflow);
  Overflow.$f_AUTO__org_gwtproject_dom_style_shared_Overflow = $4.$create__java_lang_String__int($Util.$makeEnumName("AUTO"), Overflow.$ordinal$f_AUTO__org_gwtproject_dom_style_shared_Overflow);
  Overflow.f_namesToValuesMap__org_gwtproject_dom_style_shared_Overflow_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Overflow;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.gwtproject.dom.style.shared.Overflow.$1$impl');
  $2 = goog.module.get('org.gwtproject.dom.style.shared.Overflow.$2$impl');
  $3 = goog.module.get('org.gwtproject.dom.style.shared.Overflow.$3$impl');
  $4 = goog.module.get('org.gwtproject.dom.style.shared.Overflow.$4$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(Overflow, 'org.gwtproject.dom.style.shared.Overflow');

HasCssName.$markImplementor(Overflow);

/**@private {!Overflow}*/
Overflow.$f_VISIBLE__org_gwtproject_dom_style_shared_Overflow;
/**@private {!Overflow}*/
Overflow.$f_HIDDEN__org_gwtproject_dom_style_shared_Overflow;
/**@private {!Overflow}*/
Overflow.$f_SCROLL__org_gwtproject_dom_style_shared_Overflow;
/**@private {!Overflow}*/
Overflow.$f_AUTO__org_gwtproject_dom_style_shared_Overflow;
/**@type {Map<?string, !Overflow>}*/
Overflow.f_namesToValuesMap__org_gwtproject_dom_style_shared_Overflow_;
/**@const {number}*/
Overflow.$ordinal$f_VISIBLE__org_gwtproject_dom_style_shared_Overflow = 0;
/**@const {number}*/
Overflow.$ordinal$f_HIDDEN__org_gwtproject_dom_style_shared_Overflow = 1;
/**@const {number}*/
Overflow.$ordinal$f_SCROLL__org_gwtproject_dom_style_shared_Overflow = 2;
/**@const {number}*/
Overflow.$ordinal$f_AUTO__org_gwtproject_dom_style_shared_Overflow = 3;

exports = Overflow; 
//# sourceMappingURL=Overflow.js.map
