goog.module('org.gwtproject.safecss.shared.SafeStylesUtils$impl');

const j_l_Object = goog.require('java.lang.Object$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let Double = goog.forwardDeclare('java.lang.Double$impl');
let NullPointerException = goog.forwardDeclare('java.lang.NullPointerException$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let BorderStyle = goog.forwardDeclare('org.gwtproject.dom.style.shared.BorderStyle$impl');
let Clear = goog.forwardDeclare('org.gwtproject.dom.style.shared.Clear$impl');
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
let WhiteSpace = goog.forwardDeclare('org.gwtproject.dom.style.shared.WhiteSpace$impl');
let SafeStyles = goog.forwardDeclare('org.gwtproject.safecss.shared.SafeStyles$impl');
let SafeStylesHostedModeUtils = goog.forwardDeclare('org.gwtproject.safecss.shared.SafeStylesHostedModeUtils$impl');
let SafeStylesString = goog.forwardDeclare('org.gwtproject.safecss.shared.SafeStylesString$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

class SafeStylesUtils extends j_l_Object {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!SafeStylesUtils} */
 static $create__() {
  let $instance = new SafeStylesUtils();
  $instance.$ctor__org_gwtproject_safecss_shared_SafeStylesUtils__();
  return $instance;
 }
 
 $ctor__org_gwtproject_safecss_shared_SafeStylesUtils__() {
  this.$ctor__java_lang_Object__();
 }
 /** @return {SafeStyles} */
 static m_forBackgroundImage__org_gwtproject_safehtml_shared_SafeUri(/** SafeUri */ uri) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("background-image", "url(\"" + j_l_String.m_valueOf__java_lang_Object(uri.m_asString__()) + "\")");
 }
 /** @return {SafeStyles} */
 static m_fromTrustedNameAndValue__java_lang_String__java_lang_String(/** ?string */ name, /** ?string */ value) {
  SafeStylesUtils.$clinit();
  SafeStylesHostedModeUtils.m_maybeCheckValidStyleName__java_lang_String(name);
  SafeStylesHostedModeUtils.m_maybeCheckValidStyleValue__java_lang_String(value);
  return SafeStylesUtils.m_fromTrustedString__java_lang_String(j_l_String.m_valueOf__java_lang_Object(name) + ":" + j_l_String.m_valueOf__java_lang_Object(value) + ";");
 }
 /** @return {SafeStyles} */
 static m_fromTrustedString__java_lang_String(/** ?string */ s) {
  SafeStylesUtils.$clinit();
  return SafeStylesString.$create__java_lang_String(s);
 }
 /** @return {SafeStyles} */
 static m_forBorderStyle__org_gwtproject_dom_style_shared_BorderStyle(/** BorderStyle */ value) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("border-style", value.m_getCssName__());
 }
 /** @return {SafeStyles} */
 static m_forBorderWidth__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__double__org_gwtproject_dom_style_shared_Unit("border-width", value, unit);
 }
 /** @return {SafeStyles} */
 static m_fromTrustedNameAndValue__java_lang_String__double__org_gwtproject_dom_style_shared_Unit(/** ?string */ name, /** number */ value, /** Unit */ unit) {
  SafeStylesUtils.$clinit();
  SafeStylesHostedModeUtils.m_maybeCheckValidStyleName__java_lang_String(name);
  return SafeStylesString.$create__java_lang_String(j_l_String.m_valueOf__java_lang_Object(name) + ":" + value + j_l_String.m_valueOf__java_lang_Object(unit.m_getType__()) + ";");
 }
 /** @return {SafeStyles} */
 static m_forBottom__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__double__org_gwtproject_dom_style_shared_Unit("bottom", value, unit);
 }
 /** @return {SafeStyles} */
 static m_forClear__org_gwtproject_dom_style_shared_Clear(/** Clear */ value) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("clear", value.m_getCssName__());
 }
 /** @return {SafeStyles} */
 static m_forCursor__org_gwtproject_dom_style_shared_Cursor(/** Cursor */ value) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("cursor", value.m_getCssName__());
 }
 /** @return {SafeStyles} */
 static m_forDisplay__org_gwtproject_dom_style_shared_Display(/** Display */ value) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("display", value.m_getCssName__());
 }
 /** @return {SafeStyles} */
 static m_forFloat__org_gwtproject_dom_style_shared_Float(/** Float */ value) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("float", value.m_getCssName__());
 }
 /** @return {SafeStyles} */
 static m_forFontSize__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__double__org_gwtproject_dom_style_shared_Unit("font-size", value, unit);
 }
 /** @return {SafeStyles} */
 static m_forFontStyle__org_gwtproject_dom_style_shared_FontStyle(/** FontStyle */ value) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("font-style", value.m_getCssName__());
 }
 /** @return {SafeStyles} */
 static m_forFontWeight__org_gwtproject_dom_style_shared_FontWeight(/** FontWeight */ value) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("font-weight", value.m_getCssName__());
 }
 /** @return {SafeStyles} */
 static m_forHeight__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__double__org_gwtproject_dom_style_shared_Unit("height", value, unit);
 }
 /** @return {SafeStyles} */
 static m_forLeft__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__double__org_gwtproject_dom_style_shared_Unit("left", value, unit);
 }
 /** @return {SafeStyles} */
 static m_forLineHeight__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__double__org_gwtproject_dom_style_shared_Unit("line-height", value, unit);
 }
 /** @return {SafeStyles} */
 static m_forListStyleType__org_gwtproject_dom_style_shared_ListStyleType(/** ListStyleType */ value) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("list-style-type", value.m_getCssName__());
 }
 /** @return {SafeStyles} */
 static m_forMargin__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__double__org_gwtproject_dom_style_shared_Unit("margin", value, unit);
 }
 /** @return {SafeStyles} */
 static m_forMarginBottom__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__double__org_gwtproject_dom_style_shared_Unit("margin-bottom", value, unit);
 }
 /** @return {SafeStyles} */
 static m_forMarginLeft__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__double__org_gwtproject_dom_style_shared_Unit("margin-left", value, unit);
 }
 /** @return {SafeStyles} */
 static m_forMarginRight__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__double__org_gwtproject_dom_style_shared_Unit("margin-right", value, unit);
 }
 /** @return {SafeStyles} */
 static m_forMarginTop__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__double__org_gwtproject_dom_style_shared_Unit("margin-top", value, unit);
 }
 /** @return {SafeStyles} */
 static m_forOpacity__double(/** number */ value) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("opacity", Double.m_toString__double(value));
 }
 /** @return {SafeStyles} */
 static m_forOutlineStyle__org_gwtproject_dom_style_shared_OutlineStyle(/** OutlineStyle */ value) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("outline-style", value.m_getCssName__());
 }
 /** @return {SafeStyles} */
 static m_forOutlineWidth__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__double__org_gwtproject_dom_style_shared_Unit("outline-width", value, unit);
 }
 /** @return {SafeStyles} */
 static m_forOverflow__org_gwtproject_dom_style_shared_Overflow(/** Overflow */ value) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("overflow", value.m_getCssName__());
 }
 /** @return {SafeStyles} */
 static m_forOverflowX__org_gwtproject_dom_style_shared_Overflow(/** Overflow */ value) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("overflow-x", value.m_getCssName__());
 }
 /** @return {SafeStyles} */
 static m_forOverflowY__org_gwtproject_dom_style_shared_Overflow(/** Overflow */ value) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("overflow-y", value.m_getCssName__());
 }
 /** @return {SafeStyles} */
 static m_forPadding__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__double__org_gwtproject_dom_style_shared_Unit("padding", value, unit);
 }
 /** @return {SafeStyles} */
 static m_forPaddingBottom__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__double__org_gwtproject_dom_style_shared_Unit("padding-bottom", value, unit);
 }
 /** @return {SafeStyles} */
 static m_forPaddingLeft__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__double__org_gwtproject_dom_style_shared_Unit("padding-left", value, unit);
 }
 /** @return {SafeStyles} */
 static m_forPaddingRight__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__double__org_gwtproject_dom_style_shared_Unit("padding-right", value, unit);
 }
 /** @return {SafeStyles} */
 static m_forPaddingTop__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__double__org_gwtproject_dom_style_shared_Unit("padding-top", value, unit);
 }
 /** @return {SafeStyles} */
 static m_forPosition__org_gwtproject_dom_style_shared_Position(/** Position */ value) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("position", value.m_getCssName__());
 }
 /** @return {SafeStyles} */
 static m_forRight__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__double__org_gwtproject_dom_style_shared_Unit("right", value, unit);
 }
 /** @return {SafeStyles} */
 static m_forTableLayout__org_gwtproject_dom_style_shared_TableLayout(/** TableLayout */ value) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("table-layout", value.m_getCssName__());
 }
 /** @return {SafeStyles} */
 static m_forTextAlign__org_gwtproject_dom_style_shared_TextAlign(/** TextAlign */ value) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("text-align", value.m_getCssName__());
 }
 /** @return {SafeStyles} */
 static m_forTextDecoration__org_gwtproject_dom_style_shared_TextDecoration(/** TextDecoration */ value) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("text-decoration", value.m_getCssName__());
 }
 /** @return {SafeStyles} */
 static m_forTextIndent__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("text-indent", value + j_l_String.m_valueOf__java_lang_Object(unit.m_getType__()));
 }
 /** @return {SafeStyles} */
 static m_forTextJustify__org_gwtproject_dom_style_shared_TextJustify(/** TextJustify */ value) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("text-justify", value.m_getCssName__());
 }
 /** @return {SafeStyles} */
 static m_forTextOverflow__org_gwtproject_dom_style_shared_TextOverflow(/** TextOverflow */ value) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("text-overflow", value.m_getCssName__());
 }
 /** @return {SafeStyles} */
 static m_forTextTransform__org_gwtproject_dom_style_shared_TextTransform(/** TextTransform */ value) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("text-transform", value.m_getCssName__());
 }
 /** @return {SafeStyles} */
 static m_forTop__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__double__org_gwtproject_dom_style_shared_Unit("top", value, unit);
 }
 /** @return {SafeStyles} */
 static m_forTrustedBackgroundColor__java_lang_String(/** ?string */ value) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("background-color", value);
 }
 /** @return {SafeStyles} */
 static m_forTrustedBackgroundImage__java_lang_String(/** ?string */ value) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("background-image", value);
 }
 /** @return {SafeStyles} */
 static m_forTrustedBorderColor__java_lang_String(/** ?string */ value) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("border-color", value);
 }
 /** @return {SafeStyles} */
 static m_forTrustedColor__java_lang_String(/** ?string */ value) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("color", value);
 }
 /** @return {SafeStyles} */
 static m_forTrustedOutlineColor__java_lang_String(/** ?string */ value) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("outline-color", value);
 }
 /** @return {SafeStyles} */
 static m_forVerticalAlign__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__double__org_gwtproject_dom_style_shared_Unit("vertical-align", value, unit);
 }
 /** @return {SafeStyles} */
 static m_forVerticalAlign__org_gwtproject_dom_style_shared_VerticalAlign(/** VerticalAlign */ value) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("vertical-align", value.m_getCssName__());
 }
 /** @return {SafeStyles} */
 static m_forVisibility__org_gwtproject_dom_style_shared_Visibility(/** Visibility */ value) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("visibility", value.m_getCssName__());
 }
 /** @return {SafeStyles} */
 static m_forWhiteSpace__org_gwtproject_dom_style_shared_WhiteSpace(/** WhiteSpace */ value) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__java_lang_String("white-space", value.m_getCssName__());
 }
 /** @return {SafeStyles} */
 static m_forWidth__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {
  SafeStylesUtils.$clinit();
  return SafeStylesUtils.m_fromTrustedNameAndValue__java_lang_String__double__org_gwtproject_dom_style_shared_Unit("width", value, unit);
 }
 /** @return {SafeStyles} */
 static m_forZIndex__int(/** number */ value) {
  SafeStylesUtils.$clinit();
  return SafeStylesString.$create__java_lang_String("z-index: " + value + ";");
 }
 
 static m_verifySafeStylesConstraints__java_lang_String(/** ?string */ styles) {
  SafeStylesUtils.$clinit();
  if ($Equality.$same(styles, null)) {
   throw $Exceptions.toJs(NullPointerException.$create__java_lang_String("css is null"));
  }
  $Asserts.$assertWithMessage(((j_l_String.m_length__java_lang_String(j_l_String.m_trim__java_lang_String(styles)) == 0) || j_l_String.m_endsWith__java_lang_String__java_lang_String(styles, ";")), "Invalid CSS Property: '" + j_l_String.m_valueOf__java_lang_Object(styles) + "'. CSS properties must be an empty string or end with a semi-colon (;).");
  $Asserts.$assertWithMessage(!j_l_String.m_contains__java_lang_String__java_lang_CharSequence(styles, "<") && !j_l_String.m_contains__java_lang_String__java_lang_CharSequence(styles, ">"), "Invalid CSS Property: '" + j_l_String.m_valueOf__java_lang_Object(styles) + "'. CSS should not contain brackets (< or >).");
 }
 
 static $clinit() {
  SafeStylesUtils.$clinit = () =>{};
  SafeStylesUtils.$loadModules();
  j_l_Object.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof SafeStylesUtils;
 }
 
 static $loadModules() {
  Double = goog.module.get('java.lang.Double$impl');
  NullPointerException = goog.module.get('java.lang.NullPointerException$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  SafeStylesHostedModeUtils = goog.module.get('org.gwtproject.safecss.shared.SafeStylesHostedModeUtils$impl');
  SafeStylesString = goog.module.get('org.gwtproject.safecss.shared.SafeStylesString$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(SafeStylesUtils, 'org.gwtproject.safecss.shared.SafeStylesUtils');

exports = SafeStylesUtils; 
//# sourceMappingURL=SafeStylesUtils.js.map
