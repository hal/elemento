goog.module('org.gwtproject.safecss.shared.SafeStylesBuilder$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let StringBuilder = goog.forwardDeclare('java.lang.StringBuilder$impl');
let BorderStyle = goog.forwardDeclare('org.gwtproject.dom.style.shared.BorderStyle$impl');
let Clear = goog.forwardDeclare('org.gwtproject.dom.style.shared.Clear$impl');
let Cursor = goog.forwardDeclare('org.gwtproject.dom.style.shared.Cursor$impl');
let Display = goog.forwardDeclare('org.gwtproject.dom.style.shared.Display$impl');
let Float = goog.forwardDeclare('org.gwtproject.dom.style.shared.Float$impl');
let FontStyle = goog.forwardDeclare('org.gwtproject.dom.style.shared.FontStyle$impl');
let FontWeight = goog.forwardDeclare('org.gwtproject.dom.style.shared.FontWeight$impl');
let ListStyleType = goog.forwardDeclare('org.gwtproject.dom.style.shared.ListStyleType$impl');
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
let WhiteSpace = goog.forwardDeclare('org.gwtproject.dom.style.shared.WhiteSpace$impl');
let SafeStyles = goog.forwardDeclare('org.gwtproject.safecss.shared.SafeStyles$impl');
let SafeStylesString = goog.forwardDeclare('org.gwtproject.safecss.shared.SafeStylesString$impl');
let SafeStylesUtils = goog.forwardDeclare('org.gwtproject.safecss.shared.SafeStylesUtils$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');

class SafeStylesBuilder extends j_l_Object {
 /** @protected */
 constructor() {
  super();
  /**@type {StringBuilder}*/
  this.f_sb__org_gwtproject_safecss_shared_SafeStylesBuilder_;
 }
 /** @return {!SafeStylesBuilder} */
 static $create__() {
  SafeStylesBuilder.$clinit();
  let $instance = new SafeStylesBuilder();
  $instance.$ctor__org_gwtproject_safecss_shared_SafeStylesBuilder__();
  return $instance;
 }
 
 $ctor__org_gwtproject_safecss_shared_SafeStylesBuilder__() {
  this.$ctor__java_lang_Object__();
  this.$init___$p_org_gwtproject_safecss_shared_SafeStylesBuilder();
 }
 /** @return {SafeStylesBuilder} */
 m_appendTrustedString__java_lang_String(/** ?string */ styles) {
  SafeStylesUtils.m_verifySafeStylesConstraints__java_lang_String(styles);
  this.f_sb__org_gwtproject_safecss_shared_SafeStylesBuilder_.m_append__java_lang_String(styles);
  return this;
 }
 /** @return {SafeStylesBuilder} */
 m_backgroundImage__org_gwtproject_safehtml_shared_SafeUri(/** SafeUri */ uri) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forBackgroundImage__org_gwtproject_safehtml_shared_SafeUri(uri));
 }
 /** @return {SafeStylesBuilder} */
 m_append__org_gwtproject_safecss_shared_SafeStyles(/** SafeStyles */ styles) {
  this.f_sb__org_gwtproject_safecss_shared_SafeStylesBuilder_.m_append__java_lang_String(styles.m_asString__());
  return this;
 }
 /** @return {SafeStylesBuilder} */
 m_borderStyle__org_gwtproject_dom_style_shared_BorderStyle(/** BorderStyle */ value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forBorderStyle__org_gwtproject_dom_style_shared_BorderStyle(value));
 }
 /** @return {SafeStylesBuilder} */
 m_borderWidth__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forBorderWidth__double__org_gwtproject_dom_style_shared_Unit(value, unit));
 }
 /** @return {SafeStylesBuilder} */
 m_bottom__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forBottom__double__org_gwtproject_dom_style_shared_Unit(value, unit));
 }
 /** @return {SafeStylesBuilder} */
 m_clear__org_gwtproject_dom_style_shared_Clear(/** Clear */ value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forClear__org_gwtproject_dom_style_shared_Clear(value));
 }
 /** @return {SafeStylesBuilder} */
 m_cursor__org_gwtproject_dom_style_shared_Cursor(/** Cursor */ value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forCursor__org_gwtproject_dom_style_shared_Cursor(value));
 }
 /** @return {SafeStylesBuilder} */
 m_display__org_gwtproject_dom_style_shared_Display(/** Display */ value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forDisplay__org_gwtproject_dom_style_shared_Display(value));
 }
 /** @return {SafeStylesBuilder} */
 m_floatprop__org_gwtproject_dom_style_shared_Float(/** Float */ value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forFloat__org_gwtproject_dom_style_shared_Float(value));
 }
 /** @return {SafeStylesBuilder} */
 m_fontSize__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forFontSize__double__org_gwtproject_dom_style_shared_Unit(value, unit));
 }
 /** @return {SafeStylesBuilder} */
 m_fontStyle__org_gwtproject_dom_style_shared_FontStyle(/** FontStyle */ value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forFontStyle__org_gwtproject_dom_style_shared_FontStyle(value));
 }
 /** @return {SafeStylesBuilder} */
 m_fontWeight__org_gwtproject_dom_style_shared_FontWeight(/** FontWeight */ value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forFontWeight__org_gwtproject_dom_style_shared_FontWeight(value));
 }
 /** @return {SafeStylesBuilder} */
 m_height__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forHeight__double__org_gwtproject_dom_style_shared_Unit(value, unit));
 }
 /** @return {SafeStylesBuilder} */
 m_left__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forLeft__double__org_gwtproject_dom_style_shared_Unit(value, unit));
 }
 /** @return {SafeStylesBuilder} */
 m_listStyleType__org_gwtproject_dom_style_shared_ListStyleType(/** ListStyleType */ value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forListStyleType__org_gwtproject_dom_style_shared_ListStyleType(value));
 }
 /** @return {SafeStylesBuilder} */
 m_margin__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forMargin__double__org_gwtproject_dom_style_shared_Unit(value, unit));
 }
 /** @return {SafeStylesBuilder} */
 m_marginBottom__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forMarginBottom__double__org_gwtproject_dom_style_shared_Unit(value, unit));
 }
 /** @return {SafeStylesBuilder} */
 m_marginLeft__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forMarginLeft__double__org_gwtproject_dom_style_shared_Unit(value, unit));
 }
 /** @return {SafeStylesBuilder} */
 m_marginRight__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forMarginRight__double__org_gwtproject_dom_style_shared_Unit(value, unit));
 }
 /** @return {SafeStylesBuilder} */
 m_marginTop__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forMarginTop__double__org_gwtproject_dom_style_shared_Unit(value, unit));
 }
 /** @return {SafeStylesBuilder} */
 m_opacity__double(/** number */ value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forOpacity__double(value));
 }
 /** @return {SafeStylesBuilder} */
 m_overflow__org_gwtproject_dom_style_shared_Overflow(/** Overflow */ value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forOverflow__org_gwtproject_dom_style_shared_Overflow(value));
 }
 /** @return {SafeStylesBuilder} */
 m_overflowX__org_gwtproject_dom_style_shared_Overflow(/** Overflow */ value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forOverflowX__org_gwtproject_dom_style_shared_Overflow(value));
 }
 /** @return {SafeStylesBuilder} */
 m_overflowY__org_gwtproject_dom_style_shared_Overflow(/** Overflow */ value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forOverflowY__org_gwtproject_dom_style_shared_Overflow(value));
 }
 /** @return {SafeStylesBuilder} */
 m_padding__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forPadding__double__org_gwtproject_dom_style_shared_Unit(value, unit));
 }
 /** @return {SafeStylesBuilder} */
 m_paddingBottom__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forPaddingBottom__double__org_gwtproject_dom_style_shared_Unit(value, unit));
 }
 /** @return {SafeStylesBuilder} */
 m_paddingLeft__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forPaddingLeft__double__org_gwtproject_dom_style_shared_Unit(value, unit));
 }
 /** @return {SafeStylesBuilder} */
 m_paddingRight__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forPaddingRight__double__org_gwtproject_dom_style_shared_Unit(value, unit));
 }
 /** @return {SafeStylesBuilder} */
 m_paddingTop__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forPaddingTop__double__org_gwtproject_dom_style_shared_Unit(value, unit));
 }
 /** @return {SafeStylesBuilder} */
 m_position__org_gwtproject_dom_style_shared_Position(/** Position */ value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forPosition__org_gwtproject_dom_style_shared_Position(value));
 }
 /** @return {SafeStylesBuilder} */
 m_right__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forRight__double__org_gwtproject_dom_style_shared_Unit(value, unit));
 }
 /** @return {SafeStylesBuilder} */
 m_tableLayout__org_gwtproject_dom_style_shared_TableLayout(/** TableLayout */ value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forTableLayout__org_gwtproject_dom_style_shared_TableLayout(value));
 }
 /** @return {SafeStylesBuilder} */
 m_textAlign__org_gwtproject_dom_style_shared_TextAlign(/** TextAlign */ value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forTextAlign__org_gwtproject_dom_style_shared_TextAlign(value));
 }
 /** @return {SafeStylesBuilder} */
 m_textDecoration__org_gwtproject_dom_style_shared_TextDecoration(/** TextDecoration */ value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forTextDecoration__org_gwtproject_dom_style_shared_TextDecoration(value));
 }
 /** @return {SafeStylesBuilder} */
 m_textIndent__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forTextIndent__double__org_gwtproject_dom_style_shared_Unit(value, unit));
 }
 /** @return {SafeStylesBuilder} */
 m_textJustify__org_gwtproject_dom_style_shared_TextJustify(/** TextJustify */ value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forTextJustify__org_gwtproject_dom_style_shared_TextJustify(value));
 }
 /** @return {SafeStylesBuilder} */
 m_textOverflow__org_gwtproject_dom_style_shared_TextOverflow(/** TextOverflow */ value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forTextOverflow__org_gwtproject_dom_style_shared_TextOverflow(value));
 }
 /** @return {SafeStylesBuilder} */
 m_textTransform__org_gwtproject_dom_style_shared_TextTransform(/** TextTransform */ value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forTextTransform__org_gwtproject_dom_style_shared_TextTransform(value));
 }
 /** @return {SafeStylesBuilder} */
 m_top__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forTop__double__org_gwtproject_dom_style_shared_Unit(value, unit));
 }
 /** @return {SafeStyles} */
 m_toSafeStyles__() {
  return SafeStylesString.$create__java_lang_String(this.f_sb__org_gwtproject_safecss_shared_SafeStylesBuilder_.toString());
 }
 /** @return {SafeStylesBuilder} */
 m_trustedBackgroundColor__java_lang_String(/** ?string */ value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forTrustedBackgroundColor__java_lang_String(value));
 }
 /** @return {SafeStylesBuilder} */
 m_trustedBackgroundImage__java_lang_String(/** ?string */ value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forTrustedBackgroundImage__java_lang_String(value));
 }
 /** @return {SafeStylesBuilder} */
 m_trustedBorderColor__java_lang_String(/** ?string */ value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forTrustedBorderColor__java_lang_String(value));
 }
 /** @return {SafeStylesBuilder} */
 m_trustedColor__java_lang_String(/** ?string */ value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forTrustedColor__java_lang_String(value));
 }
 /** @return {SafeStylesBuilder} */
 m_trustedNameAndValue__java_lang_String__double__org_gwtproject_dom_style_shared_Unit(/** ?string */ name, /** number */ value, /** Unit */ unit) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__double__org_gwtproject_dom_style_shared_Unit(name, value, unit));
 }
 /** @return {SafeStylesBuilder} */
 m_trustedNameAndValue__java_lang_String__java_lang_String(/** ?string */ name, /** ?string */ value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String(name, value));
 }
 /** @return {SafeStylesBuilder} */
 m_verticalAlign__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forVerticalAlign__double__org_gwtproject_dom_style_shared_Unit(value, unit));
 }
 /** @return {SafeStylesBuilder} */
 m_verticalAlign__org_gwtproject_dom_style_shared_VerticalAlign(/** VerticalAlign */ value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forVerticalAlign__org_gwtproject_dom_style_shared_VerticalAlign(value));
 }
 /** @return {SafeStylesBuilder} */
 m_visibility__org_gwtproject_dom_style_shared_Visibility(/** Visibility */ value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forVisibility__org_gwtproject_dom_style_shared_Visibility(value));
 }
 /** @return {SafeStylesBuilder} */
 m_whiteSpace__org_gwtproject_dom_style_shared_WhiteSpace(/** WhiteSpace */ whiteSpace) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forWhiteSpace__org_gwtproject_dom_style_shared_WhiteSpace(whiteSpace));
 }
 /** @return {SafeStylesBuilder} */
 m_width__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forWidth__double__org_gwtproject_dom_style_shared_Unit(value, unit));
 }
 /** @return {SafeStylesBuilder} */
 m_zIndex__int(/** number */ value) {
  return this.m_append__org_gwtproject_safecss_shared_SafeStyles(SafeStylesUtils.m_forZIndex__int(value));
 }
 /** @private */
 $init___$p_org_gwtproject_safecss_shared_SafeStylesBuilder() {
  this.f_sb__org_gwtproject_safecss_shared_SafeStylesBuilder_ = StringBuilder.$create__();
 }
 
 static $clinit() {
  SafeStylesBuilder.$clinit = () =>{};
  SafeStylesBuilder.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SafeStylesBuilder;
 }
 
 static $loadModules() {
  StringBuilder = goog.module.get('java.lang.StringBuilder$impl');
  SafeStylesString = goog.module.get('org.gwtproject.safecss.shared.SafeStylesString$impl');
  SafeStylesUtils = goog.module.get('org.gwtproject.safecss.shared.SafeStylesUtils$impl');
 }
 
}
$Util.$setClassMetadata(SafeStylesBuilder, 'org.gwtproject.safecss.shared.SafeStylesBuilder');

exports = SafeStylesBuilder; 
//# sourceMappingURL=SafeStylesBuilder.js.map
