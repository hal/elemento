goog.module('org.gwtproject.dom.builder.shared.StylesBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

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
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');

/**
 * @interface
 */
class StylesBuilder {
 /** @abstract @return {StylesBuilder} */
 m_backgroundImage__org_gwtproject_safehtml_shared_SafeUri(/** SafeUri */ uri) {}
 /** @abstract @return {StylesBuilder} */
 m_borderStyle__org_gwtproject_dom_style_shared_BorderStyle(/** BorderStyle */ value) {}
 /** @abstract @return {StylesBuilder} */
 m_borderWidth__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {}
 /** @abstract @return {StylesBuilder} */
 m_bottom__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {}
 /** @abstract @return {StylesBuilder} */
 m_cursor__org_gwtproject_dom_style_shared_Cursor(/** Cursor */ value) {}
 /** @abstract @return {StylesBuilder} */
 m_display__org_gwtproject_dom_style_shared_Display(/** Display */ value) {}
 /** @abstract */
 m_endStyle__() {}
 /** @abstract @return {StylesBuilder} */
 m_floatprop__org_gwtproject_dom_style_shared_Float(/** Float */ value) {}
 /** @abstract @return {StylesBuilder} */
 m_fontSize__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {}
 /** @abstract @return {StylesBuilder} */
 m_fontStyle__org_gwtproject_dom_style_shared_FontStyle(/** FontStyle */ value) {}
 /** @abstract @return {StylesBuilder} */
 m_fontWeight__org_gwtproject_dom_style_shared_FontWeight(/** FontWeight */ value) {}
 /** @abstract @return {StylesBuilder} */
 m_height__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {}
 /** @abstract @return {StylesBuilder} */
 m_left__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {}
 /** @abstract @return {StylesBuilder} */
 m_lineHeight__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {}
 /** @abstract @return {StylesBuilder} */
 m_listStyleType__org_gwtproject_dom_style_shared_ListStyleType(/** ListStyleType */ value) {}
 /** @abstract @return {StylesBuilder} */
 m_margin__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {}
 /** @abstract @return {StylesBuilder} */
 m_marginBottom__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {}
 /** @abstract @return {StylesBuilder} */
 m_marginLeft__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {}
 /** @abstract @return {StylesBuilder} */
 m_marginRight__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {}
 /** @abstract @return {StylesBuilder} */
 m_marginTop__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {}
 /** @abstract @return {StylesBuilder} */
 m_opacity__double(/** number */ value) {}
 /** @abstract @return {StylesBuilder} */
 m_outlineStyle__org_gwtproject_dom_style_shared_OutlineStyle(/** OutlineStyle */ value) {}
 /** @abstract @return {StylesBuilder} */
 m_outlineWidth__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {}
 /** @abstract @return {StylesBuilder} */
 m_overflow__org_gwtproject_dom_style_shared_Overflow(/** Overflow */ value) {}
 /** @abstract @return {StylesBuilder} */
 m_overflowX__org_gwtproject_dom_style_shared_Overflow(/** Overflow */ value) {}
 /** @abstract @return {StylesBuilder} */
 m_overflowY__org_gwtproject_dom_style_shared_Overflow(/** Overflow */ value) {}
 /** @abstract @return {StylesBuilder} */
 m_padding__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {}
 /** @abstract @return {StylesBuilder} */
 m_paddingBottom__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {}
 /** @abstract @return {StylesBuilder} */
 m_paddingLeft__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {}
 /** @abstract @return {StylesBuilder} */
 m_paddingRight__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {}
 /** @abstract @return {StylesBuilder} */
 m_paddingTop__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {}
 /** @abstract @return {StylesBuilder} */
 m_position__org_gwtproject_dom_style_shared_Position(/** Position */ value) {}
 /** @abstract @return {StylesBuilder} */
 m_right__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {}
 /** @abstract @return {StylesBuilder} */
 m_tableLayout__org_gwtproject_dom_style_shared_TableLayout(/** TableLayout */ value) {}
 /** @abstract @return {StylesBuilder} */
 m_textAlign__org_gwtproject_dom_style_shared_TextAlign(/** TextAlign */ value) {}
 /** @abstract @return {StylesBuilder} */
 m_textDecoration__org_gwtproject_dom_style_shared_TextDecoration(/** TextDecoration */ value) {}
 /** @abstract @return {StylesBuilder} */
 m_textIndent__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {}
 /** @abstract @return {StylesBuilder} */
 m_textJustify__org_gwtproject_dom_style_shared_TextJustify(/** TextJustify */ value) {}
 /** @abstract @return {StylesBuilder} */
 m_textOverflow__org_gwtproject_dom_style_shared_TextOverflow(/** TextOverflow */ value) {}
 /** @abstract @return {StylesBuilder} */
 m_textTransform__org_gwtproject_dom_style_shared_TextTransform(/** TextTransform */ value) {}
 /** @abstract @return {StylesBuilder} */
 m_top__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {}
 /** @abstract @return {StylesBuilder} */
 m_trustedBackgroundColor__java_lang_String(/** ?string */ value) {}
 /** @abstract @return {StylesBuilder} */
 m_trustedBackgroundImage__java_lang_String(/** ?string */ value) {}
 /** @abstract @return {StylesBuilder} */
 m_trustedBorderColor__java_lang_String(/** ?string */ value) {}
 /** @abstract @return {StylesBuilder} */
 m_trustedColor__java_lang_String(/** ?string */ value) {}
 /** @abstract @return {StylesBuilder} */
 m_trustedOutlineColor__java_lang_String(/** ?string */ value) {}
 /** @abstract @return {StylesBuilder} */
 m_trustedProperty__java_lang_String__double__org_gwtproject_dom_style_shared_Unit(/** ?string */ name, /** number */ value, /** Unit */ unit) {}
 /** @abstract @return {StylesBuilder} */
 m_trustedProperty__java_lang_String__java_lang_String(/** ?string */ name, /** ?string */ value) {}
 /** @abstract @return {StylesBuilder} */
 m_verticalAlign__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {}
 /** @abstract @return {StylesBuilder} */
 m_verticalAlign__org_gwtproject_dom_style_shared_VerticalAlign(/** VerticalAlign */ value) {}
 /** @abstract @return {StylesBuilder} */
 m_visibility__org_gwtproject_dom_style_shared_Visibility(/** Visibility */ value) {}
 /** @abstract @return {StylesBuilder} */
 m_width__double__org_gwtproject_dom_style_shared_Unit(/** number */ value, /** Unit */ unit) {}
 /** @abstract @return {StylesBuilder} */
 m_zIndex__int(/** number */ value) {}
 
 static $clinit() {
  StylesBuilder.$clinit = () =>{};
  StylesBuilder.$loadModules();
 }
 
 static $markImplementor(/** Function*/ ctor)
 {
  ctor.prototype.$implements__org_gwtproject_dom_builder_shared_StylesBuilder = true;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance != null && !!instance.$implements__org_gwtproject_dom_builder_shared_StylesBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadataForInterface(StylesBuilder, 'org.gwtproject.dom.builder.shared.StylesBuilder');

StylesBuilder.$markImplementor(/** @type {Function} */ (StylesBuilder));

exports = StylesBuilder; 
//# sourceMappingURL=StylesBuilder.js.map
