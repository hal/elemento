goog.module('org.gwtproject.dom.style.shared.OutlineStyle$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasCssName = goog.require('org.gwtproject.dom.style.shared.HasCssName$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $1 = goog.forwardDeclare('org.gwtproject.dom.style.shared.OutlineStyle.$1$impl');
let $2 = goog.forwardDeclare('org.gwtproject.dom.style.shared.OutlineStyle.$2$impl');
let $3 = goog.forwardDeclare('org.gwtproject.dom.style.shared.OutlineStyle.$3$impl');
let $4 = goog.forwardDeclare('org.gwtproject.dom.style.shared.OutlineStyle.$4$impl');
let $5 = goog.forwardDeclare('org.gwtproject.dom.style.shared.OutlineStyle.$5$impl');
let $6 = goog.forwardDeclare('org.gwtproject.dom.style.shared.OutlineStyle.$6$impl');
let $7 = goog.forwardDeclare('org.gwtproject.dom.style.shared.OutlineStyle.$7$impl');
let $8 = goog.forwardDeclare('org.gwtproject.dom.style.shared.OutlineStyle.$8$impl');
let $9 = goog.forwardDeclare('org.gwtproject.dom.style.shared.OutlineStyle.$9$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @abstract
 * @extends {Enum<OutlineStyle>}
 * @implements {HasCssName}
  */
class OutlineStyle extends Enum {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_gwtproject_dom_style_shared_OutlineStyle__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /** @abstract @override @return {?string} */
 m_getCssName__() {}
 /** @return {!OutlineStyle} */
 static m_valueOf__java_lang_String(/** string */ name) {
  OutlineStyle.$clinit();
  if ($Equality.$same(OutlineStyle.f_namesToValuesMap__org_gwtproject_dom_style_shared_OutlineStyle_, null)) {
   OutlineStyle.f_namesToValuesMap__org_gwtproject_dom_style_shared_OutlineStyle_ = $Enums.createMapFromValues(OutlineStyle.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, OutlineStyle.f_namesToValuesMap__org_gwtproject_dom_style_shared_OutlineStyle_);
 }
 /** @return {!Array<!OutlineStyle>} */
 static m_values__() {
  OutlineStyle.$clinit();
  return /**@type {!Array<OutlineStyle>}*/ ($Arrays.$init([OutlineStyle.$f_NONE__org_gwtproject_dom_style_shared_OutlineStyle, OutlineStyle.$f_DASHED__org_gwtproject_dom_style_shared_OutlineStyle, OutlineStyle.$f_DOTTED__org_gwtproject_dom_style_shared_OutlineStyle, OutlineStyle.$f_DOUBLE__org_gwtproject_dom_style_shared_OutlineStyle, OutlineStyle.$f_GROOVE__org_gwtproject_dom_style_shared_OutlineStyle, OutlineStyle.$f_INSET__org_gwtproject_dom_style_shared_OutlineStyle, OutlineStyle.$f_OUTSET__org_gwtproject_dom_style_shared_OutlineStyle, OutlineStyle.$f_RIDGE__org_gwtproject_dom_style_shared_OutlineStyle, OutlineStyle.$f_SOLID__org_gwtproject_dom_style_shared_OutlineStyle], OutlineStyle));
 }
 /** @return {!OutlineStyle} */
 static get f_NONE__org_gwtproject_dom_style_shared_OutlineStyle() {
  return (OutlineStyle.$clinit(), OutlineStyle.$f_NONE__org_gwtproject_dom_style_shared_OutlineStyle);
 }
 /** @return {!OutlineStyle} */
 static get f_DASHED__org_gwtproject_dom_style_shared_OutlineStyle() {
  return (OutlineStyle.$clinit(), OutlineStyle.$f_DASHED__org_gwtproject_dom_style_shared_OutlineStyle);
 }
 /** @return {!OutlineStyle} */
 static get f_DOTTED__org_gwtproject_dom_style_shared_OutlineStyle() {
  return (OutlineStyle.$clinit(), OutlineStyle.$f_DOTTED__org_gwtproject_dom_style_shared_OutlineStyle);
 }
 /** @return {!OutlineStyle} */
 static get f_DOUBLE__org_gwtproject_dom_style_shared_OutlineStyle() {
  return (OutlineStyle.$clinit(), OutlineStyle.$f_DOUBLE__org_gwtproject_dom_style_shared_OutlineStyle);
 }
 /** @return {!OutlineStyle} */
 static get f_GROOVE__org_gwtproject_dom_style_shared_OutlineStyle() {
  return (OutlineStyle.$clinit(), OutlineStyle.$f_GROOVE__org_gwtproject_dom_style_shared_OutlineStyle);
 }
 /** @return {!OutlineStyle} */
 static get f_INSET__org_gwtproject_dom_style_shared_OutlineStyle() {
  return (OutlineStyle.$clinit(), OutlineStyle.$f_INSET__org_gwtproject_dom_style_shared_OutlineStyle);
 }
 /** @return {!OutlineStyle} */
 static get f_OUTSET__org_gwtproject_dom_style_shared_OutlineStyle() {
  return (OutlineStyle.$clinit(), OutlineStyle.$f_OUTSET__org_gwtproject_dom_style_shared_OutlineStyle);
 }
 /** @return {!OutlineStyle} */
 static get f_RIDGE__org_gwtproject_dom_style_shared_OutlineStyle() {
  return (OutlineStyle.$clinit(), OutlineStyle.$f_RIDGE__org_gwtproject_dom_style_shared_OutlineStyle);
 }
 /** @return {!OutlineStyle} */
 static get f_SOLID__org_gwtproject_dom_style_shared_OutlineStyle() {
  return (OutlineStyle.$clinit(), OutlineStyle.$f_SOLID__org_gwtproject_dom_style_shared_OutlineStyle);
 }
 
 static $clinit() {
  OutlineStyle.$clinit = () =>{};
  OutlineStyle.$loadModules();
  Enum.$clinit();
  OutlineStyle.$f_NONE__org_gwtproject_dom_style_shared_OutlineStyle = $1.$create__java_lang_String__int($Util.$makeEnumName("NONE"), OutlineStyle.$ordinal$f_NONE__org_gwtproject_dom_style_shared_OutlineStyle);
  OutlineStyle.$f_DASHED__org_gwtproject_dom_style_shared_OutlineStyle = $2.$create__java_lang_String__int($Util.$makeEnumName("DASHED"), OutlineStyle.$ordinal$f_DASHED__org_gwtproject_dom_style_shared_OutlineStyle);
  OutlineStyle.$f_DOTTED__org_gwtproject_dom_style_shared_OutlineStyle = $3.$create__java_lang_String__int($Util.$makeEnumName("DOTTED"), OutlineStyle.$ordinal$f_DOTTED__org_gwtproject_dom_style_shared_OutlineStyle);
  OutlineStyle.$f_DOUBLE__org_gwtproject_dom_style_shared_OutlineStyle = $4.$create__java_lang_String__int($Util.$makeEnumName("DOUBLE"), OutlineStyle.$ordinal$f_DOUBLE__org_gwtproject_dom_style_shared_OutlineStyle);
  OutlineStyle.$f_GROOVE__org_gwtproject_dom_style_shared_OutlineStyle = $5.$create__java_lang_String__int($Util.$makeEnumName("GROOVE"), OutlineStyle.$ordinal$f_GROOVE__org_gwtproject_dom_style_shared_OutlineStyle);
  OutlineStyle.$f_INSET__org_gwtproject_dom_style_shared_OutlineStyle = $6.$create__java_lang_String__int($Util.$makeEnumName("INSET"), OutlineStyle.$ordinal$f_INSET__org_gwtproject_dom_style_shared_OutlineStyle);
  OutlineStyle.$f_OUTSET__org_gwtproject_dom_style_shared_OutlineStyle = $7.$create__java_lang_String__int($Util.$makeEnumName("OUTSET"), OutlineStyle.$ordinal$f_OUTSET__org_gwtproject_dom_style_shared_OutlineStyle);
  OutlineStyle.$f_RIDGE__org_gwtproject_dom_style_shared_OutlineStyle = $8.$create__java_lang_String__int($Util.$makeEnumName("RIDGE"), OutlineStyle.$ordinal$f_RIDGE__org_gwtproject_dom_style_shared_OutlineStyle);
  OutlineStyle.$f_SOLID__org_gwtproject_dom_style_shared_OutlineStyle = $9.$create__java_lang_String__int($Util.$makeEnumName("SOLID"), OutlineStyle.$ordinal$f_SOLID__org_gwtproject_dom_style_shared_OutlineStyle);
  OutlineStyle.f_namesToValuesMap__org_gwtproject_dom_style_shared_OutlineStyle_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof OutlineStyle;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.gwtproject.dom.style.shared.OutlineStyle.$1$impl');
  $2 = goog.module.get('org.gwtproject.dom.style.shared.OutlineStyle.$2$impl');
  $3 = goog.module.get('org.gwtproject.dom.style.shared.OutlineStyle.$3$impl');
  $4 = goog.module.get('org.gwtproject.dom.style.shared.OutlineStyle.$4$impl');
  $5 = goog.module.get('org.gwtproject.dom.style.shared.OutlineStyle.$5$impl');
  $6 = goog.module.get('org.gwtproject.dom.style.shared.OutlineStyle.$6$impl');
  $7 = goog.module.get('org.gwtproject.dom.style.shared.OutlineStyle.$7$impl');
  $8 = goog.module.get('org.gwtproject.dom.style.shared.OutlineStyle.$8$impl');
  $9 = goog.module.get('org.gwtproject.dom.style.shared.OutlineStyle.$9$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(OutlineStyle, 'org.gwtproject.dom.style.shared.OutlineStyle');

HasCssName.$markImplementor(OutlineStyle);

/**@private {!OutlineStyle}*/
OutlineStyle.$f_NONE__org_gwtproject_dom_style_shared_OutlineStyle;
/**@private {!OutlineStyle}*/
OutlineStyle.$f_DASHED__org_gwtproject_dom_style_shared_OutlineStyle;
/**@private {!OutlineStyle}*/
OutlineStyle.$f_DOTTED__org_gwtproject_dom_style_shared_OutlineStyle;
/**@private {!OutlineStyle}*/
OutlineStyle.$f_DOUBLE__org_gwtproject_dom_style_shared_OutlineStyle;
/**@private {!OutlineStyle}*/
OutlineStyle.$f_GROOVE__org_gwtproject_dom_style_shared_OutlineStyle;
/**@private {!OutlineStyle}*/
OutlineStyle.$f_INSET__org_gwtproject_dom_style_shared_OutlineStyle;
/**@private {!OutlineStyle}*/
OutlineStyle.$f_OUTSET__org_gwtproject_dom_style_shared_OutlineStyle;
/**@private {!OutlineStyle}*/
OutlineStyle.$f_RIDGE__org_gwtproject_dom_style_shared_OutlineStyle;
/**@private {!OutlineStyle}*/
OutlineStyle.$f_SOLID__org_gwtproject_dom_style_shared_OutlineStyle;
/**@type {Map<?string, !OutlineStyle>}*/
OutlineStyle.f_namesToValuesMap__org_gwtproject_dom_style_shared_OutlineStyle_;
/**@const {number}*/
OutlineStyle.$ordinal$f_NONE__org_gwtproject_dom_style_shared_OutlineStyle = 0;
/**@const {number}*/
OutlineStyle.$ordinal$f_DASHED__org_gwtproject_dom_style_shared_OutlineStyle = 1;
/**@const {number}*/
OutlineStyle.$ordinal$f_DOTTED__org_gwtproject_dom_style_shared_OutlineStyle = 2;
/**@const {number}*/
OutlineStyle.$ordinal$f_DOUBLE__org_gwtproject_dom_style_shared_OutlineStyle = 3;
/**@const {number}*/
OutlineStyle.$ordinal$f_GROOVE__org_gwtproject_dom_style_shared_OutlineStyle = 4;
/**@const {number}*/
OutlineStyle.$ordinal$f_INSET__org_gwtproject_dom_style_shared_OutlineStyle = 5;
/**@const {number}*/
OutlineStyle.$ordinal$f_OUTSET__org_gwtproject_dom_style_shared_OutlineStyle = 6;
/**@const {number}*/
OutlineStyle.$ordinal$f_RIDGE__org_gwtproject_dom_style_shared_OutlineStyle = 7;
/**@const {number}*/
OutlineStyle.$ordinal$f_SOLID__org_gwtproject_dom_style_shared_OutlineStyle = 8;

exports = OutlineStyle; 
//# sourceMappingURL=OutlineStyle.js.map
