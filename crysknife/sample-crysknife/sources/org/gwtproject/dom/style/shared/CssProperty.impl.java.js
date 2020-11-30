goog.module('org.gwtproject.dom.style.shared.CssProperty$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $1 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$1$impl');
let $10 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$10$impl');
let $11 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$11$impl');
let $12 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$12$impl');
let $13 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$13$impl');
let $14 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$14$impl');
let $15 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$15$impl');
let $16 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$16$impl');
let $17 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$17$impl');
let $18 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$18$impl');
let $19 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$19$impl');
let $2 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$2$impl');
let $20 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$20$impl');
let $21 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$21$impl');
let $22 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$22$impl');
let $23 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$23$impl');
let $24 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$24$impl');
let $25 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$25$impl');
let $26 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$26$impl');
let $27 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$27$impl');
let $28 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$28$impl');
let $29 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$29$impl');
let $3 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$3$impl');
let $30 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$30$impl');
let $31 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$31$impl');
let $32 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$32$impl');
let $33 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$33$impl');
let $34 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$34$impl');
let $35 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$35$impl');
let $36 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$36$impl');
let $37 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$37$impl');
let $38 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$38$impl');
let $39 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$39$impl');
let $4 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$4$impl');
let $40 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$40$impl');
let $41 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$41$impl');
let $42 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$42$impl');
let $43 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$43$impl');
let $44 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$44$impl');
let $45 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$45$impl');
let $46 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$46$impl');
let $47 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$47$impl');
let $48 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$48$impl');
let $49 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$49$impl');
let $5 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$5$impl');
let $50 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$50$impl');
let $6 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$6$impl');
let $7 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$7$impl');
let $8 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$8$impl');
let $9 = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty.$9$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @abstract
 * @extends {Enum<CssProperty>}
  */
class CssProperty extends Enum {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_gwtproject_dom_style_shared_CssProperty__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /** @abstract @return {?string} */
 m_getJsName__() {}
 /** @return {!CssProperty} */
 static m_valueOf__java_lang_String(/** string */ name) {
  CssProperty.$clinit();
  if ($Equality.$same(CssProperty.f_namesToValuesMap__org_gwtproject_dom_style_shared_CssProperty_, null)) {
   CssProperty.f_namesToValuesMap__org_gwtproject_dom_style_shared_CssProperty_ = $Enums.createMapFromValues(CssProperty.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, CssProperty.f_namesToValuesMap__org_gwtproject_dom_style_shared_CssProperty_);
 }
 /** @return {!Array<!CssProperty>} */
 static m_values__() {
  CssProperty.$clinit();
  return /**@type {!Array<CssProperty>}*/ ($Arrays.$init([CssProperty.$f_FLOAT__org_gwtproject_dom_style_shared_CssProperty, CssProperty.$f_Z_INDEX__org_gwtproject_dom_style_shared_CssProperty, CssProperty.$f_WIDTH__org_gwtproject_dom_style_shared_CssProperty, CssProperty.$f_VISIBILITY__org_gwtproject_dom_style_shared_CssProperty, CssProperty.$f_TOP__org_gwtproject_dom_style_shared_CssProperty, CssProperty.$f_TEXT_DECORATION__org_gwtproject_dom_style_shared_CssProperty, CssProperty.$f_RIGHT__org_gwtproject_dom_style_shared_CssProperty, CssProperty.$f_POSITION__org_gwtproject_dom_style_shared_CssProperty, CssProperty.$f_PADDING_TOP__org_gwtproject_dom_style_shared_CssProperty, CssProperty.$f_PADDING_RIGHT__org_gwtproject_dom_style_shared_CssProperty, CssProperty.$f_PADDING_LEFT__org_gwtproject_dom_style_shared_CssProperty, CssProperty.$f_PADDING_BOTTOM__org_gwtproject_dom_style_shared_CssProperty, CssProperty.$f_PADDING__org_gwtproject_dom_style_shared_CssProperty, CssProperty.$f_OVERFLOW__org_gwtproject_dom_style_shared_CssProperty, CssProperty.$f_OVERFLOW_X__org_gwtproject_dom_style_shared_CssProperty, CssProperty.$f_OVERFLOW_Y__org_gwtproject_dom_style_shared_CssProperty, CssProperty.$f_OPACITY__org_gwtproject_dom_style_shared_CssProperty, CssProperty.$f_MARGIN_TOP__org_gwtproject_dom_style_shared_CssProperty, CssProperty.$f_MARGIN_RIGHT__org_gwtproject_dom_style_shared_CssProperty, CssProperty.$f_MARGIN_LEFT__org_gwtproject_dom_style_shared_CssProperty, CssProperty.$f_MARGIN_BOTTOM__org_gwtproject_dom_style_shared_CssProperty, CssProperty.$f_MARGIN__org_gwtproject_dom_style_shared_CssProperty, CssProperty.$f_LIST_TYPE__org_gwtproject_dom_style_shared_CssProperty, CssProperty.$f_LEFT__org_gwtproject_dom_style_shared_CssProperty, CssProperty.$f_HEIGHT__org_gwtproject_dom_style_shared_CssProperty, CssProperty.$f_FONT_WEIGHT__org_gwtproject_dom_style_shared_CssProperty, CssProperty.$f_FONT_STYLE__org_gwtproject_dom_style_shared_CssProperty, CssProperty.$f_FONT_SIZE__org_gwtproject_dom_style_shared_CssProperty, CssProperty.$f_DISPLAY__org_gwtproject_dom_style_shared_CssProperty, CssProperty.$f_CURSOR__org_gwtproject_dom_style_shared_CssProperty, CssProperty.$f_COLOR__org_gwtproject_dom_style_shared_CssProperty, CssProperty.$f_CLEAR__org_gwtproject_dom_style_shared_CssProperty, CssProperty.$f_BOTTOM__org_gwtproject_dom_style_shared_CssProperty, CssProperty.$f_BORDER_WIDTH__org_gwtproject_dom_style_shared_CssProperty, CssProperty.$f_BORDER_STYLE__org_gwtproject_dom_style_shared_CssProperty, CssProperty.$f_BORDER_COLOR__org_gwtproject_dom_style_shared_CssProperty, CssProperty.$f_BACKGROUND_IMAGE__org_gwtproject_dom_style_shared_CssProperty, CssProperty.$f_BACKGROUND_COLOR__org_gwtproject_dom_style_shared_CssProperty, CssProperty.$f_VERTICAL_ALIGN__org_gwtproject_dom_style_shared_CssProperty, CssProperty.$f_TABLE_LAYOUT__org_gwtproject_dom_style_shared_CssProperty, CssProperty.$f_TEXT_ALIGN__org_gwtproject_dom_style_shared_CssProperty, CssProperty.$f_TEXT_INDENT__org_gwtproject_dom_style_shared_CssProperty, CssProperty.$f_TEXT_JUSTIFY__org_gwtproject_dom_style_shared_CssProperty, CssProperty.$f_TEXT_OVERFLOW__org_gwtproject_dom_style_shared_CssProperty, CssProperty.$f_TEXT_TRANSFORM__org_gwtproject_dom_style_shared_CssProperty, CssProperty.$f_OUTLINE_WIDTH__org_gwtproject_dom_style_shared_CssProperty, CssProperty.$f_OUTLINE_STYLE__org_gwtproject_dom_style_shared_CssProperty, CssProperty.$f_OUTLINE_COLOR__org_gwtproject_dom_style_shared_CssProperty, CssProperty.$f_LINE_HEIGHT__org_gwtproject_dom_style_shared_CssProperty, CssProperty.$f_WHITE_SPACE__org_gwtproject_dom_style_shared_CssProperty], CssProperty));
 }
 /** @return {!CssProperty} */
 static get f_FLOAT__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_FLOAT__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {!CssProperty} */
 static get f_Z_INDEX__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_Z_INDEX__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {!CssProperty} */
 static get f_WIDTH__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_WIDTH__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {!CssProperty} */
 static get f_VISIBILITY__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_VISIBILITY__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {!CssProperty} */
 static get f_TOP__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_TOP__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {!CssProperty} */
 static get f_TEXT_DECORATION__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_TEXT_DECORATION__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {!CssProperty} */
 static get f_RIGHT__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_RIGHT__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {!CssProperty} */
 static get f_POSITION__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_POSITION__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {!CssProperty} */
 static get f_PADDING_TOP__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_PADDING_TOP__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {!CssProperty} */
 static get f_PADDING_RIGHT__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_PADDING_RIGHT__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {!CssProperty} */
 static get f_PADDING_LEFT__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_PADDING_LEFT__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {!CssProperty} */
 static get f_PADDING_BOTTOM__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_PADDING_BOTTOM__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {!CssProperty} */
 static get f_PADDING__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_PADDING__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {!CssProperty} */
 static get f_OVERFLOW__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_OVERFLOW__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {!CssProperty} */
 static get f_OVERFLOW_X__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_OVERFLOW_X__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {!CssProperty} */
 static get f_OVERFLOW_Y__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_OVERFLOW_Y__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {!CssProperty} */
 static get f_OPACITY__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_OPACITY__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {!CssProperty} */
 static get f_MARGIN_TOP__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_MARGIN_TOP__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {!CssProperty} */
 static get f_MARGIN_RIGHT__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_MARGIN_RIGHT__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {!CssProperty} */
 static get f_MARGIN_LEFT__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_MARGIN_LEFT__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {!CssProperty} */
 static get f_MARGIN_BOTTOM__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_MARGIN_BOTTOM__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {!CssProperty} */
 static get f_MARGIN__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_MARGIN__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {!CssProperty} */
 static get f_LIST_TYPE__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_LIST_TYPE__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {!CssProperty} */
 static get f_LEFT__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_LEFT__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {!CssProperty} */
 static get f_HEIGHT__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_HEIGHT__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {!CssProperty} */
 static get f_FONT_WEIGHT__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_FONT_WEIGHT__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {!CssProperty} */
 static get f_FONT_STYLE__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_FONT_STYLE__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {!CssProperty} */
 static get f_FONT_SIZE__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_FONT_SIZE__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {!CssProperty} */
 static get f_DISPLAY__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_DISPLAY__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {!CssProperty} */
 static get f_CURSOR__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_CURSOR__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {!CssProperty} */
 static get f_COLOR__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_COLOR__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {!CssProperty} */
 static get f_CLEAR__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_CLEAR__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {!CssProperty} */
 static get f_BOTTOM__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_BOTTOM__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {!CssProperty} */
 static get f_BORDER_WIDTH__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_BORDER_WIDTH__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {!CssProperty} */
 static get f_BORDER_STYLE__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_BORDER_STYLE__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {!CssProperty} */
 static get f_BORDER_COLOR__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_BORDER_COLOR__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {!CssProperty} */
 static get f_BACKGROUND_IMAGE__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_BACKGROUND_IMAGE__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {!CssProperty} */
 static get f_BACKGROUND_COLOR__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_BACKGROUND_COLOR__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {!CssProperty} */
 static get f_VERTICAL_ALIGN__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_VERTICAL_ALIGN__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {!CssProperty} */
 static get f_TABLE_LAYOUT__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_TABLE_LAYOUT__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {!CssProperty} */
 static get f_TEXT_ALIGN__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_TEXT_ALIGN__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {!CssProperty} */
 static get f_TEXT_INDENT__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_TEXT_INDENT__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {!CssProperty} */
 static get f_TEXT_JUSTIFY__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_TEXT_JUSTIFY__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {!CssProperty} */
 static get f_TEXT_OVERFLOW__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_TEXT_OVERFLOW__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {!CssProperty} */
 static get f_TEXT_TRANSFORM__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_TEXT_TRANSFORM__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {!CssProperty} */
 static get f_OUTLINE_WIDTH__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_OUTLINE_WIDTH__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {!CssProperty} */
 static get f_OUTLINE_STYLE__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_OUTLINE_STYLE__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {!CssProperty} */
 static get f_OUTLINE_COLOR__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_OUTLINE_COLOR__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {!CssProperty} */
 static get f_LINE_HEIGHT__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_LINE_HEIGHT__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {!CssProperty} */
 static get f_WHITE_SPACE__org_gwtproject_dom_style_shared_CssProperty() {
  return (CssProperty.$clinit(), CssProperty.$f_WHITE_SPACE__org_gwtproject_dom_style_shared_CssProperty);
 }
 
 static $clinit() {
  CssProperty.$clinit = () =>{};
  CssProperty.$loadModules();
  Enum.$clinit();
  CssProperty.$f_FLOAT__org_gwtproject_dom_style_shared_CssProperty = $1.$create__java_lang_String__int($Util.$makeEnumName("FLOAT"), CssProperty.$ordinal$f_FLOAT__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.$f_Z_INDEX__org_gwtproject_dom_style_shared_CssProperty = $2.$create__java_lang_String__int($Util.$makeEnumName("Z_INDEX"), CssProperty.$ordinal$f_Z_INDEX__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.$f_WIDTH__org_gwtproject_dom_style_shared_CssProperty = $3.$create__java_lang_String__int($Util.$makeEnumName("WIDTH"), CssProperty.$ordinal$f_WIDTH__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.$f_VISIBILITY__org_gwtproject_dom_style_shared_CssProperty = $4.$create__java_lang_String__int($Util.$makeEnumName("VISIBILITY"), CssProperty.$ordinal$f_VISIBILITY__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.$f_TOP__org_gwtproject_dom_style_shared_CssProperty = $5.$create__java_lang_String__int($Util.$makeEnumName("TOP"), CssProperty.$ordinal$f_TOP__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.$f_TEXT_DECORATION__org_gwtproject_dom_style_shared_CssProperty = $6.$create__java_lang_String__int($Util.$makeEnumName("TEXT_DECORATION"), CssProperty.$ordinal$f_TEXT_DECORATION__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.$f_RIGHT__org_gwtproject_dom_style_shared_CssProperty = $7.$create__java_lang_String__int($Util.$makeEnumName("RIGHT"), CssProperty.$ordinal$f_RIGHT__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.$f_POSITION__org_gwtproject_dom_style_shared_CssProperty = $8.$create__java_lang_String__int($Util.$makeEnumName("POSITION"), CssProperty.$ordinal$f_POSITION__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.$f_PADDING_TOP__org_gwtproject_dom_style_shared_CssProperty = $9.$create__java_lang_String__int($Util.$makeEnumName("PADDING_TOP"), CssProperty.$ordinal$f_PADDING_TOP__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.$f_PADDING_RIGHT__org_gwtproject_dom_style_shared_CssProperty = $10.$create__java_lang_String__int($Util.$makeEnumName("PADDING_RIGHT"), CssProperty.$ordinal$f_PADDING_RIGHT__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.$f_PADDING_LEFT__org_gwtproject_dom_style_shared_CssProperty = $11.$create__java_lang_String__int($Util.$makeEnumName("PADDING_LEFT"), CssProperty.$ordinal$f_PADDING_LEFT__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.$f_PADDING_BOTTOM__org_gwtproject_dom_style_shared_CssProperty = $12.$create__java_lang_String__int($Util.$makeEnumName("PADDING_BOTTOM"), CssProperty.$ordinal$f_PADDING_BOTTOM__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.$f_PADDING__org_gwtproject_dom_style_shared_CssProperty = $13.$create__java_lang_String__int($Util.$makeEnumName("PADDING"), CssProperty.$ordinal$f_PADDING__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.$f_OVERFLOW__org_gwtproject_dom_style_shared_CssProperty = $14.$create__java_lang_String__int($Util.$makeEnumName("OVERFLOW"), CssProperty.$ordinal$f_OVERFLOW__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.$f_OVERFLOW_X__org_gwtproject_dom_style_shared_CssProperty = $15.$create__java_lang_String__int($Util.$makeEnumName("OVERFLOW_X"), CssProperty.$ordinal$f_OVERFLOW_X__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.$f_OVERFLOW_Y__org_gwtproject_dom_style_shared_CssProperty = $16.$create__java_lang_String__int($Util.$makeEnumName("OVERFLOW_Y"), CssProperty.$ordinal$f_OVERFLOW_Y__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.$f_OPACITY__org_gwtproject_dom_style_shared_CssProperty = $17.$create__java_lang_String__int($Util.$makeEnumName("OPACITY"), CssProperty.$ordinal$f_OPACITY__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.$f_MARGIN_TOP__org_gwtproject_dom_style_shared_CssProperty = $18.$create__java_lang_String__int($Util.$makeEnumName("MARGIN_TOP"), CssProperty.$ordinal$f_MARGIN_TOP__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.$f_MARGIN_RIGHT__org_gwtproject_dom_style_shared_CssProperty = $19.$create__java_lang_String__int($Util.$makeEnumName("MARGIN_RIGHT"), CssProperty.$ordinal$f_MARGIN_RIGHT__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.$f_MARGIN_LEFT__org_gwtproject_dom_style_shared_CssProperty = $20.$create__java_lang_String__int($Util.$makeEnumName("MARGIN_LEFT"), CssProperty.$ordinal$f_MARGIN_LEFT__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.$f_MARGIN_BOTTOM__org_gwtproject_dom_style_shared_CssProperty = $21.$create__java_lang_String__int($Util.$makeEnumName("MARGIN_BOTTOM"), CssProperty.$ordinal$f_MARGIN_BOTTOM__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.$f_MARGIN__org_gwtproject_dom_style_shared_CssProperty = $22.$create__java_lang_String__int($Util.$makeEnumName("MARGIN"), CssProperty.$ordinal$f_MARGIN__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.$f_LIST_TYPE__org_gwtproject_dom_style_shared_CssProperty = $23.$create__java_lang_String__int($Util.$makeEnumName("LIST_TYPE"), CssProperty.$ordinal$f_LIST_TYPE__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.$f_LEFT__org_gwtproject_dom_style_shared_CssProperty = $24.$create__java_lang_String__int($Util.$makeEnumName("LEFT"), CssProperty.$ordinal$f_LEFT__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.$f_HEIGHT__org_gwtproject_dom_style_shared_CssProperty = $25.$create__java_lang_String__int($Util.$makeEnumName("HEIGHT"), CssProperty.$ordinal$f_HEIGHT__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.$f_FONT_WEIGHT__org_gwtproject_dom_style_shared_CssProperty = $26.$create__java_lang_String__int($Util.$makeEnumName("FONT_WEIGHT"), CssProperty.$ordinal$f_FONT_WEIGHT__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.$f_FONT_STYLE__org_gwtproject_dom_style_shared_CssProperty = $27.$create__java_lang_String__int($Util.$makeEnumName("FONT_STYLE"), CssProperty.$ordinal$f_FONT_STYLE__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.$f_FONT_SIZE__org_gwtproject_dom_style_shared_CssProperty = $28.$create__java_lang_String__int($Util.$makeEnumName("FONT_SIZE"), CssProperty.$ordinal$f_FONT_SIZE__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.$f_DISPLAY__org_gwtproject_dom_style_shared_CssProperty = $29.$create__java_lang_String__int($Util.$makeEnumName("DISPLAY"), CssProperty.$ordinal$f_DISPLAY__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.$f_CURSOR__org_gwtproject_dom_style_shared_CssProperty = $30.$create__java_lang_String__int($Util.$makeEnumName("CURSOR"), CssProperty.$ordinal$f_CURSOR__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.$f_COLOR__org_gwtproject_dom_style_shared_CssProperty = $31.$create__java_lang_String__int($Util.$makeEnumName("COLOR"), CssProperty.$ordinal$f_COLOR__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.$f_CLEAR__org_gwtproject_dom_style_shared_CssProperty = $32.$create__java_lang_String__int($Util.$makeEnumName("CLEAR"), CssProperty.$ordinal$f_CLEAR__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.$f_BOTTOM__org_gwtproject_dom_style_shared_CssProperty = $33.$create__java_lang_String__int($Util.$makeEnumName("BOTTOM"), CssProperty.$ordinal$f_BOTTOM__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.$f_BORDER_WIDTH__org_gwtproject_dom_style_shared_CssProperty = $34.$create__java_lang_String__int($Util.$makeEnumName("BORDER_WIDTH"), CssProperty.$ordinal$f_BORDER_WIDTH__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.$f_BORDER_STYLE__org_gwtproject_dom_style_shared_CssProperty = $35.$create__java_lang_String__int($Util.$makeEnumName("BORDER_STYLE"), CssProperty.$ordinal$f_BORDER_STYLE__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.$f_BORDER_COLOR__org_gwtproject_dom_style_shared_CssProperty = $36.$create__java_lang_String__int($Util.$makeEnumName("BORDER_COLOR"), CssProperty.$ordinal$f_BORDER_COLOR__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.$f_BACKGROUND_IMAGE__org_gwtproject_dom_style_shared_CssProperty = $37.$create__java_lang_String__int($Util.$makeEnumName("BACKGROUND_IMAGE"), CssProperty.$ordinal$f_BACKGROUND_IMAGE__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.$f_BACKGROUND_COLOR__org_gwtproject_dom_style_shared_CssProperty = $38.$create__java_lang_String__int($Util.$makeEnumName("BACKGROUND_COLOR"), CssProperty.$ordinal$f_BACKGROUND_COLOR__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.$f_VERTICAL_ALIGN__org_gwtproject_dom_style_shared_CssProperty = $39.$create__java_lang_String__int($Util.$makeEnumName("VERTICAL_ALIGN"), CssProperty.$ordinal$f_VERTICAL_ALIGN__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.$f_TABLE_LAYOUT__org_gwtproject_dom_style_shared_CssProperty = $40.$create__java_lang_String__int($Util.$makeEnumName("TABLE_LAYOUT"), CssProperty.$ordinal$f_TABLE_LAYOUT__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.$f_TEXT_ALIGN__org_gwtproject_dom_style_shared_CssProperty = $41.$create__java_lang_String__int($Util.$makeEnumName("TEXT_ALIGN"), CssProperty.$ordinal$f_TEXT_ALIGN__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.$f_TEXT_INDENT__org_gwtproject_dom_style_shared_CssProperty = $42.$create__java_lang_String__int($Util.$makeEnumName("TEXT_INDENT"), CssProperty.$ordinal$f_TEXT_INDENT__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.$f_TEXT_JUSTIFY__org_gwtproject_dom_style_shared_CssProperty = $43.$create__java_lang_String__int($Util.$makeEnumName("TEXT_JUSTIFY"), CssProperty.$ordinal$f_TEXT_JUSTIFY__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.$f_TEXT_OVERFLOW__org_gwtproject_dom_style_shared_CssProperty = $44.$create__java_lang_String__int($Util.$makeEnumName("TEXT_OVERFLOW"), CssProperty.$ordinal$f_TEXT_OVERFLOW__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.$f_TEXT_TRANSFORM__org_gwtproject_dom_style_shared_CssProperty = $45.$create__java_lang_String__int($Util.$makeEnumName("TEXT_TRANSFORM"), CssProperty.$ordinal$f_TEXT_TRANSFORM__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.$f_OUTLINE_WIDTH__org_gwtproject_dom_style_shared_CssProperty = $46.$create__java_lang_String__int($Util.$makeEnumName("OUTLINE_WIDTH"), CssProperty.$ordinal$f_OUTLINE_WIDTH__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.$f_OUTLINE_STYLE__org_gwtproject_dom_style_shared_CssProperty = $47.$create__java_lang_String__int($Util.$makeEnumName("OUTLINE_STYLE"), CssProperty.$ordinal$f_OUTLINE_STYLE__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.$f_OUTLINE_COLOR__org_gwtproject_dom_style_shared_CssProperty = $48.$create__java_lang_String__int($Util.$makeEnumName("OUTLINE_COLOR"), CssProperty.$ordinal$f_OUTLINE_COLOR__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.$f_LINE_HEIGHT__org_gwtproject_dom_style_shared_CssProperty = $49.$create__java_lang_String__int($Util.$makeEnumName("LINE_HEIGHT"), CssProperty.$ordinal$f_LINE_HEIGHT__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.$f_WHITE_SPACE__org_gwtproject_dom_style_shared_CssProperty = $50.$create__java_lang_String__int($Util.$makeEnumName("WHITE_SPACE"), CssProperty.$ordinal$f_WHITE_SPACE__org_gwtproject_dom_style_shared_CssProperty);
  CssProperty.f_namesToValuesMap__org_gwtproject_dom_style_shared_CssProperty_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof CssProperty;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$1$impl');
  $10 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$10$impl');
  $11 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$11$impl');
  $12 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$12$impl');
  $13 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$13$impl');
  $14 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$14$impl');
  $15 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$15$impl');
  $16 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$16$impl');
  $17 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$17$impl');
  $18 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$18$impl');
  $19 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$19$impl');
  $2 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$2$impl');
  $20 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$20$impl');
  $21 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$21$impl');
  $22 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$22$impl');
  $23 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$23$impl');
  $24 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$24$impl');
  $25 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$25$impl');
  $26 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$26$impl');
  $27 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$27$impl');
  $28 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$28$impl');
  $29 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$29$impl');
  $3 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$3$impl');
  $30 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$30$impl');
  $31 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$31$impl');
  $32 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$32$impl');
  $33 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$33$impl');
  $34 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$34$impl');
  $35 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$35$impl');
  $36 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$36$impl');
  $37 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$37$impl');
  $38 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$38$impl');
  $39 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$39$impl');
  $4 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$4$impl');
  $40 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$40$impl');
  $41 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$41$impl');
  $42 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$42$impl');
  $43 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$43$impl');
  $44 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$44$impl');
  $45 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$45$impl');
  $46 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$46$impl');
  $47 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$47$impl');
  $48 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$48$impl');
  $49 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$49$impl');
  $5 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$5$impl');
  $50 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$50$impl');
  $6 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$6$impl');
  $7 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$7$impl');
  $8 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$8$impl');
  $9 = goog.module.get('org.gwtproject.dom.style.shared.CssProperty.$9$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(CssProperty, 'org.gwtproject.dom.style.shared.CssProperty');

/**@private {!CssProperty}*/
CssProperty.$f_FLOAT__org_gwtproject_dom_style_shared_CssProperty;
/**@private {!CssProperty}*/
CssProperty.$f_Z_INDEX__org_gwtproject_dom_style_shared_CssProperty;
/**@private {!CssProperty}*/
CssProperty.$f_WIDTH__org_gwtproject_dom_style_shared_CssProperty;
/**@private {!CssProperty}*/
CssProperty.$f_VISIBILITY__org_gwtproject_dom_style_shared_CssProperty;
/**@private {!CssProperty}*/
CssProperty.$f_TOP__org_gwtproject_dom_style_shared_CssProperty;
/**@private {!CssProperty}*/
CssProperty.$f_TEXT_DECORATION__org_gwtproject_dom_style_shared_CssProperty;
/**@private {!CssProperty}*/
CssProperty.$f_RIGHT__org_gwtproject_dom_style_shared_CssProperty;
/**@private {!CssProperty}*/
CssProperty.$f_POSITION__org_gwtproject_dom_style_shared_CssProperty;
/**@private {!CssProperty}*/
CssProperty.$f_PADDING_TOP__org_gwtproject_dom_style_shared_CssProperty;
/**@private {!CssProperty}*/
CssProperty.$f_PADDING_RIGHT__org_gwtproject_dom_style_shared_CssProperty;
/**@private {!CssProperty}*/
CssProperty.$f_PADDING_LEFT__org_gwtproject_dom_style_shared_CssProperty;
/**@private {!CssProperty}*/
CssProperty.$f_PADDING_BOTTOM__org_gwtproject_dom_style_shared_CssProperty;
/**@private {!CssProperty}*/
CssProperty.$f_PADDING__org_gwtproject_dom_style_shared_CssProperty;
/**@private {!CssProperty}*/
CssProperty.$f_OVERFLOW__org_gwtproject_dom_style_shared_CssProperty;
/**@private {!CssProperty}*/
CssProperty.$f_OVERFLOW_X__org_gwtproject_dom_style_shared_CssProperty;
/**@private {!CssProperty}*/
CssProperty.$f_OVERFLOW_Y__org_gwtproject_dom_style_shared_CssProperty;
/**@private {!CssProperty}*/
CssProperty.$f_OPACITY__org_gwtproject_dom_style_shared_CssProperty;
/**@private {!CssProperty}*/
CssProperty.$f_MARGIN_TOP__org_gwtproject_dom_style_shared_CssProperty;
/**@private {!CssProperty}*/
CssProperty.$f_MARGIN_RIGHT__org_gwtproject_dom_style_shared_CssProperty;
/**@private {!CssProperty}*/
CssProperty.$f_MARGIN_LEFT__org_gwtproject_dom_style_shared_CssProperty;
/**@private {!CssProperty}*/
CssProperty.$f_MARGIN_BOTTOM__org_gwtproject_dom_style_shared_CssProperty;
/**@private {!CssProperty}*/
CssProperty.$f_MARGIN__org_gwtproject_dom_style_shared_CssProperty;
/**@private {!CssProperty}*/
CssProperty.$f_LIST_TYPE__org_gwtproject_dom_style_shared_CssProperty;
/**@private {!CssProperty}*/
CssProperty.$f_LEFT__org_gwtproject_dom_style_shared_CssProperty;
/**@private {!CssProperty}*/
CssProperty.$f_HEIGHT__org_gwtproject_dom_style_shared_CssProperty;
/**@private {!CssProperty}*/
CssProperty.$f_FONT_WEIGHT__org_gwtproject_dom_style_shared_CssProperty;
/**@private {!CssProperty}*/
CssProperty.$f_FONT_STYLE__org_gwtproject_dom_style_shared_CssProperty;
/**@private {!CssProperty}*/
CssProperty.$f_FONT_SIZE__org_gwtproject_dom_style_shared_CssProperty;
/**@private {!CssProperty}*/
CssProperty.$f_DISPLAY__org_gwtproject_dom_style_shared_CssProperty;
/**@private {!CssProperty}*/
CssProperty.$f_CURSOR__org_gwtproject_dom_style_shared_CssProperty;
/**@private {!CssProperty}*/
CssProperty.$f_COLOR__org_gwtproject_dom_style_shared_CssProperty;
/**@private {!CssProperty}*/
CssProperty.$f_CLEAR__org_gwtproject_dom_style_shared_CssProperty;
/**@private {!CssProperty}*/
CssProperty.$f_BOTTOM__org_gwtproject_dom_style_shared_CssProperty;
/**@private {!CssProperty}*/
CssProperty.$f_BORDER_WIDTH__org_gwtproject_dom_style_shared_CssProperty;
/**@private {!CssProperty}*/
CssProperty.$f_BORDER_STYLE__org_gwtproject_dom_style_shared_CssProperty;
/**@private {!CssProperty}*/
CssProperty.$f_BORDER_COLOR__org_gwtproject_dom_style_shared_CssProperty;
/**@private {!CssProperty}*/
CssProperty.$f_BACKGROUND_IMAGE__org_gwtproject_dom_style_shared_CssProperty;
/**@private {!CssProperty}*/
CssProperty.$f_BACKGROUND_COLOR__org_gwtproject_dom_style_shared_CssProperty;
/**@private {!CssProperty}*/
CssProperty.$f_VERTICAL_ALIGN__org_gwtproject_dom_style_shared_CssProperty;
/**@private {!CssProperty}*/
CssProperty.$f_TABLE_LAYOUT__org_gwtproject_dom_style_shared_CssProperty;
/**@private {!CssProperty}*/
CssProperty.$f_TEXT_ALIGN__org_gwtproject_dom_style_shared_CssProperty;
/**@private {!CssProperty}*/
CssProperty.$f_TEXT_INDENT__org_gwtproject_dom_style_shared_CssProperty;
/**@private {!CssProperty}*/
CssProperty.$f_TEXT_JUSTIFY__org_gwtproject_dom_style_shared_CssProperty;
/**@private {!CssProperty}*/
CssProperty.$f_TEXT_OVERFLOW__org_gwtproject_dom_style_shared_CssProperty;
/**@private {!CssProperty}*/
CssProperty.$f_TEXT_TRANSFORM__org_gwtproject_dom_style_shared_CssProperty;
/**@private {!CssProperty}*/
CssProperty.$f_OUTLINE_WIDTH__org_gwtproject_dom_style_shared_CssProperty;
/**@private {!CssProperty}*/
CssProperty.$f_OUTLINE_STYLE__org_gwtproject_dom_style_shared_CssProperty;
/**@private {!CssProperty}*/
CssProperty.$f_OUTLINE_COLOR__org_gwtproject_dom_style_shared_CssProperty;
/**@private {!CssProperty}*/
CssProperty.$f_LINE_HEIGHT__org_gwtproject_dom_style_shared_CssProperty;
/**@private {!CssProperty}*/
CssProperty.$f_WHITE_SPACE__org_gwtproject_dom_style_shared_CssProperty;
/**@type {Map<?string, !CssProperty>}*/
CssProperty.f_namesToValuesMap__org_gwtproject_dom_style_shared_CssProperty_;
/**@const {number}*/
CssProperty.$ordinal$f_FLOAT__org_gwtproject_dom_style_shared_CssProperty = 0;
/**@const {number}*/
CssProperty.$ordinal$f_Z_INDEX__org_gwtproject_dom_style_shared_CssProperty = 1;
/**@const {number}*/
CssProperty.$ordinal$f_WIDTH__org_gwtproject_dom_style_shared_CssProperty = 2;
/**@const {number}*/
CssProperty.$ordinal$f_VISIBILITY__org_gwtproject_dom_style_shared_CssProperty = 3;
/**@const {number}*/
CssProperty.$ordinal$f_TOP__org_gwtproject_dom_style_shared_CssProperty = 4;
/**@const {number}*/
CssProperty.$ordinal$f_TEXT_DECORATION__org_gwtproject_dom_style_shared_CssProperty = 5;
/**@const {number}*/
CssProperty.$ordinal$f_RIGHT__org_gwtproject_dom_style_shared_CssProperty = 6;
/**@const {number}*/
CssProperty.$ordinal$f_POSITION__org_gwtproject_dom_style_shared_CssProperty = 7;
/**@const {number}*/
CssProperty.$ordinal$f_PADDING_TOP__org_gwtproject_dom_style_shared_CssProperty = 8;
/**@const {number}*/
CssProperty.$ordinal$f_PADDING_RIGHT__org_gwtproject_dom_style_shared_CssProperty = 9;
/**@const {number}*/
CssProperty.$ordinal$f_PADDING_LEFT__org_gwtproject_dom_style_shared_CssProperty = 10;
/**@const {number}*/
CssProperty.$ordinal$f_PADDING_BOTTOM__org_gwtproject_dom_style_shared_CssProperty = 11;
/**@const {number}*/
CssProperty.$ordinal$f_PADDING__org_gwtproject_dom_style_shared_CssProperty = 12;
/**@const {number}*/
CssProperty.$ordinal$f_OVERFLOW__org_gwtproject_dom_style_shared_CssProperty = 13;
/**@const {number}*/
CssProperty.$ordinal$f_OVERFLOW_X__org_gwtproject_dom_style_shared_CssProperty = 14;
/**@const {number}*/
CssProperty.$ordinal$f_OVERFLOW_Y__org_gwtproject_dom_style_shared_CssProperty = 15;
/**@const {number}*/
CssProperty.$ordinal$f_OPACITY__org_gwtproject_dom_style_shared_CssProperty = 16;
/**@const {number}*/
CssProperty.$ordinal$f_MARGIN_TOP__org_gwtproject_dom_style_shared_CssProperty = 17;
/**@const {number}*/
CssProperty.$ordinal$f_MARGIN_RIGHT__org_gwtproject_dom_style_shared_CssProperty = 18;
/**@const {number}*/
CssProperty.$ordinal$f_MARGIN_LEFT__org_gwtproject_dom_style_shared_CssProperty = 19;
/**@const {number}*/
CssProperty.$ordinal$f_MARGIN_BOTTOM__org_gwtproject_dom_style_shared_CssProperty = 20;
/**@const {number}*/
CssProperty.$ordinal$f_MARGIN__org_gwtproject_dom_style_shared_CssProperty = 21;
/**@const {number}*/
CssProperty.$ordinal$f_LIST_TYPE__org_gwtproject_dom_style_shared_CssProperty = 22;
/**@const {number}*/
CssProperty.$ordinal$f_LEFT__org_gwtproject_dom_style_shared_CssProperty = 23;
/**@const {number}*/
CssProperty.$ordinal$f_HEIGHT__org_gwtproject_dom_style_shared_CssProperty = 24;
/**@const {number}*/
CssProperty.$ordinal$f_FONT_WEIGHT__org_gwtproject_dom_style_shared_CssProperty = 25;
/**@const {number}*/
CssProperty.$ordinal$f_FONT_STYLE__org_gwtproject_dom_style_shared_CssProperty = 26;
/**@const {number}*/
CssProperty.$ordinal$f_FONT_SIZE__org_gwtproject_dom_style_shared_CssProperty = 27;
/**@const {number}*/
CssProperty.$ordinal$f_DISPLAY__org_gwtproject_dom_style_shared_CssProperty = 28;
/**@const {number}*/
CssProperty.$ordinal$f_CURSOR__org_gwtproject_dom_style_shared_CssProperty = 29;
/**@const {number}*/
CssProperty.$ordinal$f_COLOR__org_gwtproject_dom_style_shared_CssProperty = 30;
/**@const {number}*/
CssProperty.$ordinal$f_CLEAR__org_gwtproject_dom_style_shared_CssProperty = 31;
/**@const {number}*/
CssProperty.$ordinal$f_BOTTOM__org_gwtproject_dom_style_shared_CssProperty = 32;
/**@const {number}*/
CssProperty.$ordinal$f_BORDER_WIDTH__org_gwtproject_dom_style_shared_CssProperty = 33;
/**@const {number}*/
CssProperty.$ordinal$f_BORDER_STYLE__org_gwtproject_dom_style_shared_CssProperty = 34;
/**@const {number}*/
CssProperty.$ordinal$f_BORDER_COLOR__org_gwtproject_dom_style_shared_CssProperty = 35;
/**@const {number}*/
CssProperty.$ordinal$f_BACKGROUND_IMAGE__org_gwtproject_dom_style_shared_CssProperty = 36;
/**@const {number}*/
CssProperty.$ordinal$f_BACKGROUND_COLOR__org_gwtproject_dom_style_shared_CssProperty = 37;
/**@const {number}*/
CssProperty.$ordinal$f_VERTICAL_ALIGN__org_gwtproject_dom_style_shared_CssProperty = 38;
/**@const {number}*/
CssProperty.$ordinal$f_TABLE_LAYOUT__org_gwtproject_dom_style_shared_CssProperty = 39;
/**@const {number}*/
CssProperty.$ordinal$f_TEXT_ALIGN__org_gwtproject_dom_style_shared_CssProperty = 40;
/**@const {number}*/
CssProperty.$ordinal$f_TEXT_INDENT__org_gwtproject_dom_style_shared_CssProperty = 41;
/**@const {number}*/
CssProperty.$ordinal$f_TEXT_JUSTIFY__org_gwtproject_dom_style_shared_CssProperty = 42;
/**@const {number}*/
CssProperty.$ordinal$f_TEXT_OVERFLOW__org_gwtproject_dom_style_shared_CssProperty = 43;
/**@const {number}*/
CssProperty.$ordinal$f_TEXT_TRANSFORM__org_gwtproject_dom_style_shared_CssProperty = 44;
/**@const {number}*/
CssProperty.$ordinal$f_OUTLINE_WIDTH__org_gwtproject_dom_style_shared_CssProperty = 45;
/**@const {number}*/
CssProperty.$ordinal$f_OUTLINE_STYLE__org_gwtproject_dom_style_shared_CssProperty = 46;
/**@const {number}*/
CssProperty.$ordinal$f_OUTLINE_COLOR__org_gwtproject_dom_style_shared_CssProperty = 47;
/**@const {number}*/
CssProperty.$ordinal$f_LINE_HEIGHT__org_gwtproject_dom_style_shared_CssProperty = 48;
/**@const {number}*/
CssProperty.$ordinal$f_WHITE_SPACE__org_gwtproject_dom_style_shared_CssProperty = 49;

exports = CssProperty; 
//# sourceMappingURL=CssProperty.js.map
