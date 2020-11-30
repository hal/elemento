goog.module('org.gwtproject.dom.style.shared.BorderStyle$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasCssName = goog.require('org.gwtproject.dom.style.shared.HasCssName$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $1 = goog.forwardDeclare('org.gwtproject.dom.style.shared.BorderStyle.$1$impl');
let $2 = goog.forwardDeclare('org.gwtproject.dom.style.shared.BorderStyle.$2$impl');
let $3 = goog.forwardDeclare('org.gwtproject.dom.style.shared.BorderStyle.$3$impl');
let $4 = goog.forwardDeclare('org.gwtproject.dom.style.shared.BorderStyle.$4$impl');
let $5 = goog.forwardDeclare('org.gwtproject.dom.style.shared.BorderStyle.$5$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @abstract
 * @extends {Enum<BorderStyle>}
 * @implements {HasCssName}
  */
class BorderStyle extends Enum {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_gwtproject_dom_style_shared_BorderStyle__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /** @abstract @override @return {?string} */
 m_getCssName__() {}
 /** @return {!BorderStyle} */
 static m_valueOf__java_lang_String(/** string */ name) {
  BorderStyle.$clinit();
  if ($Equality.$same(BorderStyle.f_namesToValuesMap__org_gwtproject_dom_style_shared_BorderStyle_, null)) {
   BorderStyle.f_namesToValuesMap__org_gwtproject_dom_style_shared_BorderStyle_ = $Enums.createMapFromValues(BorderStyle.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, BorderStyle.f_namesToValuesMap__org_gwtproject_dom_style_shared_BorderStyle_);
 }
 /** @return {!Array<!BorderStyle>} */
 static m_values__() {
  BorderStyle.$clinit();
  return /**@type {!Array<BorderStyle>}*/ ($Arrays.$init([BorderStyle.$f_NONE__org_gwtproject_dom_style_shared_BorderStyle, BorderStyle.$f_DOTTED__org_gwtproject_dom_style_shared_BorderStyle, BorderStyle.$f_DASHED__org_gwtproject_dom_style_shared_BorderStyle, BorderStyle.$f_HIDDEN__org_gwtproject_dom_style_shared_BorderStyle, BorderStyle.$f_SOLID__org_gwtproject_dom_style_shared_BorderStyle], BorderStyle));
 }
 /** @return {!BorderStyle} */
 static get f_NONE__org_gwtproject_dom_style_shared_BorderStyle() {
  return (BorderStyle.$clinit(), BorderStyle.$f_NONE__org_gwtproject_dom_style_shared_BorderStyle);
 }
 /** @return {!BorderStyle} */
 static get f_DOTTED__org_gwtproject_dom_style_shared_BorderStyle() {
  return (BorderStyle.$clinit(), BorderStyle.$f_DOTTED__org_gwtproject_dom_style_shared_BorderStyle);
 }
 /** @return {!BorderStyle} */
 static get f_DASHED__org_gwtproject_dom_style_shared_BorderStyle() {
  return (BorderStyle.$clinit(), BorderStyle.$f_DASHED__org_gwtproject_dom_style_shared_BorderStyle);
 }
 /** @return {!BorderStyle} */
 static get f_HIDDEN__org_gwtproject_dom_style_shared_BorderStyle() {
  return (BorderStyle.$clinit(), BorderStyle.$f_HIDDEN__org_gwtproject_dom_style_shared_BorderStyle);
 }
 /** @return {!BorderStyle} */
 static get f_SOLID__org_gwtproject_dom_style_shared_BorderStyle() {
  return (BorderStyle.$clinit(), BorderStyle.$f_SOLID__org_gwtproject_dom_style_shared_BorderStyle);
 }
 
 static $clinit() {
  BorderStyle.$clinit = () =>{};
  BorderStyle.$loadModules();
  Enum.$clinit();
  BorderStyle.$f_NONE__org_gwtproject_dom_style_shared_BorderStyle = $1.$create__java_lang_String__int($Util.$makeEnumName("NONE"), BorderStyle.$ordinal$f_NONE__org_gwtproject_dom_style_shared_BorderStyle);
  BorderStyle.$f_DOTTED__org_gwtproject_dom_style_shared_BorderStyle = $2.$create__java_lang_String__int($Util.$makeEnumName("DOTTED"), BorderStyle.$ordinal$f_DOTTED__org_gwtproject_dom_style_shared_BorderStyle);
  BorderStyle.$f_DASHED__org_gwtproject_dom_style_shared_BorderStyle = $3.$create__java_lang_String__int($Util.$makeEnumName("DASHED"), BorderStyle.$ordinal$f_DASHED__org_gwtproject_dom_style_shared_BorderStyle);
  BorderStyle.$f_HIDDEN__org_gwtproject_dom_style_shared_BorderStyle = $4.$create__java_lang_String__int($Util.$makeEnumName("HIDDEN"), BorderStyle.$ordinal$f_HIDDEN__org_gwtproject_dom_style_shared_BorderStyle);
  BorderStyle.$f_SOLID__org_gwtproject_dom_style_shared_BorderStyle = $5.$create__java_lang_String__int($Util.$makeEnumName("SOLID"), BorderStyle.$ordinal$f_SOLID__org_gwtproject_dom_style_shared_BorderStyle);
  BorderStyle.f_namesToValuesMap__org_gwtproject_dom_style_shared_BorderStyle_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof BorderStyle;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.gwtproject.dom.style.shared.BorderStyle.$1$impl');
  $2 = goog.module.get('org.gwtproject.dom.style.shared.BorderStyle.$2$impl');
  $3 = goog.module.get('org.gwtproject.dom.style.shared.BorderStyle.$3$impl');
  $4 = goog.module.get('org.gwtproject.dom.style.shared.BorderStyle.$4$impl');
  $5 = goog.module.get('org.gwtproject.dom.style.shared.BorderStyle.$5$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(BorderStyle, 'org.gwtproject.dom.style.shared.BorderStyle');

HasCssName.$markImplementor(BorderStyle);

/**@private {!BorderStyle}*/
BorderStyle.$f_NONE__org_gwtproject_dom_style_shared_BorderStyle;
/**@private {!BorderStyle}*/
BorderStyle.$f_DOTTED__org_gwtproject_dom_style_shared_BorderStyle;
/**@private {!BorderStyle}*/
BorderStyle.$f_DASHED__org_gwtproject_dom_style_shared_BorderStyle;
/**@private {!BorderStyle}*/
BorderStyle.$f_HIDDEN__org_gwtproject_dom_style_shared_BorderStyle;
/**@private {!BorderStyle}*/
BorderStyle.$f_SOLID__org_gwtproject_dom_style_shared_BorderStyle;
/**@type {Map<?string, !BorderStyle>}*/
BorderStyle.f_namesToValuesMap__org_gwtproject_dom_style_shared_BorderStyle_;
/**@const {number}*/
BorderStyle.$ordinal$f_NONE__org_gwtproject_dom_style_shared_BorderStyle = 0;
/**@const {number}*/
BorderStyle.$ordinal$f_DOTTED__org_gwtproject_dom_style_shared_BorderStyle = 1;
/**@const {number}*/
BorderStyle.$ordinal$f_DASHED__org_gwtproject_dom_style_shared_BorderStyle = 2;
/**@const {number}*/
BorderStyle.$ordinal$f_HIDDEN__org_gwtproject_dom_style_shared_BorderStyle = 3;
/**@const {number}*/
BorderStyle.$ordinal$f_SOLID__org_gwtproject_dom_style_shared_BorderStyle = 4;

exports = BorderStyle; 
//# sourceMappingURL=BorderStyle.js.map
