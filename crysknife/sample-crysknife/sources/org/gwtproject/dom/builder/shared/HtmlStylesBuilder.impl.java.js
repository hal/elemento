goog.module('org.gwtproject.dom.builder.shared.HtmlStylesBuilder$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const StylesBuilder = goog.require('org.gwtproject.dom.builder.shared.StylesBuilder$impl');

let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let HashMap = goog.forwardDeclare('java.util.HashMap$impl');
let Locale = goog.forwardDeclare('java.util.Locale$impl');
let Map = goog.forwardDeclare('java.util.Map$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let BorderStyle = goog.forwardDeclare('org.gwtproject.dom.style.shared.BorderStyle$impl');
let Cursor = goog.forwardDeclare('org.gwtproject.dom.style.shared.Cursor$impl');
let Display = goog.forwardDeclare('org.gwtproject.dom.style.shared.Display$impl');
let Float = goog.forwardDeclare('org.gwtproject.dom.style.shared.Float$impl');
let FontStyle = goog.forwardDeclare('org.gwtproject.dom.style.shared.FontStyle$impl');
let FontWeight = goog.forwardDeclare('org.gwtproject.dom.style.shared.FontWeight$impl');
let ListStyleType = goog.forwardDeclare('org.gwtproject.dom.style.shared.ListStyleType$impl');
let OutlineStyle = goog.forwardDeclare('org.gwtproject.dom.style.shared.OutlineStyle$impl');
let Overflow = goog.forwardDeclare('org.gwtproject.dom.style.shared.Overflow$impl');
let Position = goog.forwardDeclare('org.gwtproject.dom.style.shared.Position$impl');
let TableLayout = goog.forwardDeclare('org.gwtproject.dom.style.shared.TableLayout$impl');
let TextAlign = goog.forwardDeclare('org.gwtproject.dom.style.shared.TextAlign$impl');
let TextDecoration = goog.forwardDeclare('org.gwtproject.dom.style.shared.TextDecoration$impl');
let TextJustify = goog.forwardDeclare('org.gwtproject.dom.style.shared.TextJustify$impl');
let TextOverflow = goog.forwardDeclare('org.gwtproject.dom.style.shared.TextOverflow$impl');
let TextTransform = goog.forwardDeclare('org.gwtproject.dom.style.shared.TextTransform$impl');
let Unit = goog.forwardDeclare('org.gwtproject.dom.style.shared.Unit$impl');
let VerticalAlign = goog.forwardDeclare('org.gwtproject.dom.style.shared.VerticalAlign$impl');
let Visibility = goog.forwardDeclare('org.gwtproject.dom.style.shared.Visibility$impl');
let MatchResult = goog.forwardDeclare('org.gwtproject.regexp.shared.MatchResult$impl');
let RegExp = goog.forwardDeclare('org.gwtproject.regexp.shared.RegExp$impl');
let SafeStylesUtils = goog.forwardDeclare('org.gwtproject.safecss.shared.SafeStylesUtils$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @implements {StylesBuilder}
  */
class HtmlStylesBuilder extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {HtmlBuilderImpl}*/
  this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_;
 }
 /** @return {?string} */
 static m_toHyphenatedForm__java_lang_String(/** ?string */ name) {
  HtmlStylesBuilder.$clinit();
  if ($Equality.$same(HtmlStylesBuilder.f_camelCaseWord__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_, null)) {
   HtmlStylesBuilder.f_camelCaseMap__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_ = /**@type {!HashMap<?string, ?string>}*/ (HashMap.$create__());
   HtmlStylesBuilder.f_camelCaseWord__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_ = RegExp.m_compile__java_lang_String__java_lang_String("([A-Za-z])([^A-Z]*)", "g");
   HtmlStylesBuilder.f_caseWord__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_ = RegExp.m_compile__java_lang_String("[A-Z]([^A-Z]*)");
  }
  if (j_l_String.m_contains__java_lang_String__java_lang_CharSequence(name, "-")) {
   return name;
  }
  let hyphenated = /**@type {?string}*/ ($Casts.$to(HtmlStylesBuilder.f_camelCaseMap__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.get(name), j_l_String));
  if ($Equality.$same(hyphenated, null)) {
   hyphenated = "";
   let /** MatchResult */ matches;
   while (!$Equality.$same((matches = HtmlStylesBuilder.f_camelCaseWord__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_exec__java_lang_String(name)), null)) {
    let word = matches.m_getGroup__int(0);
    if ($Equality.$same(HtmlStylesBuilder.f_caseWord__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_exec__java_lang_String(word), null)) {
     hyphenated = j_l_String.m_valueOf__java_lang_Object(hyphenated) + j_l_String.m_valueOf__java_lang_Object(word);
    } else {
     hyphenated = j_l_String.m_valueOf__java_lang_Object(hyphenated) + j_l_String.m_valueOf__java_lang_Object(("-" + j_l_String.m_valueOf__java_lang_Object(j_l_String.m_toLowerCase__java_lang_String__java_util_Locale(matches.m_getGroup__int(1), Locale.f_ROOT__java_util_Locale))));
     if (matches.m_getGroupCount__() > 1) {
      hyphenated = j_l_String.m_valueOf__java_lang_Object(hyphenated) + j_l_String.m_valueOf__java_lang_Object(matches.m_getGroup__int(2));
     }
    }
   }
   HtmlStylesBuilder.f_camelCaseMap__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.put(name, hyphenated);
  }
  return hyphenated;
 }
 /** @return {!HtmlStylesBuilder} */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  HtmlStylesBuilder.$clinit();
  let $instance = new HtmlStylesBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlStylesBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_shared_HtmlStylesBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  this.$ctor__java_lang_Object__();
  this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_ = delegate;
 }
 /** @override @return {StylesBuilder} */
 m_backgroundImage__org_gwtproject_safehtml_shared_SafeUri(/** SafeUri */ uri) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forBackgroundImage__org_gwtproject_safehtml_shared_SafeUri(uri));
 }
 /** @override @return {StylesBuilder} */
 m_borderStyle__org_gwtproject_dom_style_shared_BorderStyle(/** BorderStyle */ value) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("border-style", value.m_getCssName__()));
 }
 /** @override @return {StylesBuilder} */
 m_borderWidth__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("border-width", value + j_l_String.m_valueOf__java_lang_Object(unit.m_getType__())));
 }
 /** @override @return {StylesBuilder} */
 m_bottom__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("bottom", value + j_l_String.m_valueOf__java_lang_Object(unit.m_getType__())));
 }
 /** @override @return {StylesBuilder} */
 m_cursor__org_gwtproject_dom_style_shared_Cursor(/** Cursor */ value) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("cursor", value.m_getCssName__()));
 }
 /** @override @return {StylesBuilder} */
 m_display__org_gwtproject_dom_style_shared_Display(/** Display */ value) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("display", value.m_getCssName__()));
 }
 /** @override */
 m_endStyle__() {
  this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_endStyle__();
 }
 /** @override @return {StylesBuilder} */
 m_floatprop__org_gwtproject_dom_style_shared_Float(/** Float */ value) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("float", value.m_getCssName__()));
 }
 /** @override @return {StylesBuilder} */
 m_fontSize__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("font-size", value + j_l_String.m_valueOf__java_lang_Object(unit.m_getType__())));
 }
 /** @override @return {StylesBuilder} */
 m_fontStyle__org_gwtproject_dom_style_shared_FontStyle(/** FontStyle */ value) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("font-style", value.m_getCssName__()));
 }
 /** @override @return {StylesBuilder} */
 m_fontWeight__org_gwtproject_dom_style_shared_FontWeight(/** FontWeight */ value) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("font-weight", value.m_getCssName__()));
 }
 /** @override @return {StylesBuilder} */
 m_height__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("height", value + j_l_String.m_valueOf__java_lang_Object(unit.m_getType__())));
 }
 /** @override @return {StylesBuilder} */
 m_left__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("left", value + j_l_String.m_valueOf__java_lang_Object(unit.m_getType__())));
 }
 /** @override @return {StylesBuilder} */
 m_lineHeight__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("line-height", value + j_l_String.m_valueOf__java_lang_Object(unit.m_getType__())));
 }
 /** @override @return {StylesBuilder} */
 m_listStyleType__org_gwtproject_dom_style_shared_ListStyleType(/** ListStyleType */ value) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("list-style-type", value.m_getCssName__()));
 }
 /** @override @return {StylesBuilder} */
 m_margin__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("margin", value + j_l_String.m_valueOf__java_lang_Object(unit.m_getType__())));
 }
 /** @override @return {StylesBuilder} */
 m_marginBottom__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("margin-bottom", value + j_l_String.m_valueOf__java_lang_Object(unit.m_getType__())));
 }
 /** @override @return {StylesBuilder} */
 m_marginLeft__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("margin-left", value + j_l_String.m_valueOf__java_lang_Object(unit.m_getType__())));
 }
 /** @override @return {StylesBuilder} */
 m_marginRight__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("margin-right", value + j_l_String.m_valueOf__java_lang_Object(unit.m_getType__())));
 }
 /** @override @return {StylesBuilder} */
 m_marginTop__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("margin-top", value + j_l_String.m_valueOf__java_lang_Object(unit.m_getType__())));
 }
 /** @override @return {StylesBuilder} */
 m_opacity__double(/** number */ value) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forOpacity__double(value));
 }
 /** @override @return {StylesBuilder} */
 m_outlineStyle__org_gwtproject_dom_style_shared_OutlineStyle(/** OutlineStyle */ value) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("outline-style", value.m_getCssName__()));
 }
 /** @override @return {StylesBuilder} */
 m_outlineWidth__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("outline-width", value + j_l_String.m_valueOf__java_lang_Object(unit.m_getType__())));
 }
 /** @override @return {StylesBuilder} */
 m_overflow__org_gwtproject_dom_style_shared_Overflow(/** Overflow */ value) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("overflow", value.m_getCssName__()));
 }
 /** @override @return {StylesBuilder} */
 m_overflowX__org_gwtproject_dom_style_shared_Overflow(/** Overflow */ value) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("overflow-x", value.m_getCssName__()));
 }
 /** @override @return {StylesBuilder} */
 m_overflowY__org_gwtproject_dom_style_shared_Overflow(/** Overflow */ value) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("overflow-y", value.m_getCssName__()));
 }
 /** @override @return {StylesBuilder} */
 m_padding__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("padding", value + j_l_String.m_valueOf__java_lang_Object(unit.m_getType__())));
 }
 /** @override @return {StylesBuilder} */
 m_paddingBottom__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("padding-bottom", value + j_l_String.m_valueOf__java_lang_Object(unit.m_getType__())));
 }
 /** @override @return {StylesBuilder} */
 m_paddingLeft__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("padding-left", value + j_l_String.m_valueOf__java_lang_Object(unit.m_getType__())));
 }
 /** @override @return {StylesBuilder} */
 m_paddingRight__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("padding-right", value + j_l_String.m_valueOf__java_lang_Object(unit.m_getType__())));
 }
 /** @override @return {StylesBuilder} */
 m_paddingTop__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("padding-top", value + j_l_String.m_valueOf__java_lang_Object(unit.m_getType__())));
 }
 /** @override @return {StylesBuilder} */
 m_position__org_gwtproject_dom_style_shared_Position(/** Position */ value) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("position", value.m_getCssName__()));
 }
 /** @override @return {StylesBuilder} */
 m_right__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("right", value + j_l_String.m_valueOf__java_lang_Object(unit.m_getType__())));
 }
 /** @override @return {StylesBuilder} */
 m_tableLayout__org_gwtproject_dom_style_shared_TableLayout(/** TableLayout */ value) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("table-layout", value.m_getCssName__()));
 }
 /** @override @return {StylesBuilder} */
 m_textAlign__org_gwtproject_dom_style_shared_TextAlign(/** TextAlign */ value) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("text-align", value.m_getCssName__()));
 }
 /** @override @return {StylesBuilder} */
 m_textDecoration__org_gwtproject_dom_style_shared_TextDecoration(/** TextDecoration */ value) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("text-decoration", value.m_getCssName__()));
 }
 /** @override @return {StylesBuilder} */
 m_textIndent__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("text-indent", value + j_l_String.m_valueOf__java_lang_Object(unit.m_getType__())));
 }
 /** @override @return {StylesBuilder} */
 m_textJustify__org_gwtproject_dom_style_shared_TextJustify(/** TextJustify */ value) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("text-justify", value.m_getCssName__()));
 }
 /** @override @return {StylesBuilder} */
 m_textOverflow__org_gwtproject_dom_style_shared_TextOverflow(/** TextOverflow */ value) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("text-overflow", value.m_getCssName__()));
 }
 /** @override @return {StylesBuilder} */
 m_textTransform__org_gwtproject_dom_style_shared_TextTransform(/** TextTransform */ value) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("text-transform", value.m_getCssName__()));
 }
 /** @override @return {StylesBuilder} */
 m_top__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("top", value + j_l_String.m_valueOf__java_lang_Object(unit.m_getType__())));
 }
 /** @override @return {StylesBuilder} */
 m_trustedBackgroundColor__java_lang_String(/** ?string */ value) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forTrustedBackgroundColor__java_lang_String(value));
 }
 /** @override @return {StylesBuilder} */
 m_trustedBackgroundImage__java_lang_String(/** ?string */ value) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forTrustedBackgroundImage__java_lang_String(value));
 }
 /** @override @return {StylesBuilder} */
 m_trustedBorderColor__java_lang_String(/** ?string */ value) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forTrustedBorderColor__java_lang_String(value));
 }
 /** @override @return {StylesBuilder} */
 m_trustedColor__java_lang_String(/** ?string */ value) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forTrustedColor__java_lang_String(value));
 }
 /** @override @return {StylesBuilder} */
 m_trustedOutlineColor__java_lang_String(/** ?string */ value) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forTrustedOutlineColor__java_lang_String(value));
 }
 /** @override @return {StylesBuilder} */
 m_trustedProperty__java_lang_String__double__org_gwtproject_dom_style_shared_Unit(/** ?string */ name, /** number */ value, /** Unit */ unit) {
  name = HtmlStylesBuilder.m_toHyphenatedForm__java_lang_String(name);
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String(name, value + j_l_String.m_valueOf__java_lang_Object(unit.m_getType__())));
 }
 /** @override @return {StylesBuilder} */
 m_trustedProperty__java_lang_String__java_lang_String(/** ?string */ name, /** ?string */ value) {
  name = HtmlStylesBuilder.m_toHyphenatedForm__java_lang_String(name);
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String(name, value));
 }
 /** @override @return {StylesBuilder} */
 m_verticalAlign__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("vertical-align", value + j_l_String.m_valueOf__java_lang_Object(unit.m_getType__())));
 }
 /** @override @return {StylesBuilder} */
 m_verticalAlign__org_gwtproject_dom_style_shared_VerticalAlign(/** VerticalAlign */ value) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("vertical-align", value.m_getCssName__()));
 }
 /** @override @return {StylesBuilder} */
 m_visibility__org_gwtproject_dom_style_shared_Visibility(/** Visibility */ value) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("visibility", value.m_getCssName__()));
 }
 /** @override @return {StylesBuilder} */
 m_width__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("width", value + j_l_String.m_valueOf__java_lang_Object(unit.m_getType__())));
 }
 /** @override @return {StylesBuilder} */
 m_zIndex__int(/** number */ value) {
  return this.f_delegate__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_.m_styleProperty__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forZIndex__int(value));
 }
 
 static $clinit() {
  HtmlStylesBuilder.$clinit = () =>{};
  HtmlStylesBuilder.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HtmlStylesBuilder;
 }
 
 static $loadModules() {
  j_l_String = goog.module.get('java.lang.String$impl');
  HashMap = goog.module.get('java.util.HashMap$impl');
  Locale = goog.module.get('java.util.Locale$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  RegExp = goog.module.get('org.gwtproject.regexp.shared.RegExp$impl');
  SafeStylesUtils = goog.module.get('org.gwtproject.safecss.shared.SafeStylesUtils$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HtmlStylesBuilder, 'org.gwtproject.dom.builder.shared.HtmlStylesBuilder');

StylesBuilder.$markImplementor(HtmlStylesBuilder);

/**@type {Map<?string, ?string>}*/
HtmlStylesBuilder.f_camelCaseMap__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_;
/**@type {RegExp}*/
HtmlStylesBuilder.f_camelCaseWord__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_;
/**@type {RegExp}*/
HtmlStylesBuilder.f_caseWord__org_gwtproject_dom_builder_shared_HtmlStylesBuilder_;

exports = HtmlStylesBuilder; 
//# sourceMappingURL=HtmlStylesBuilder.js.map
