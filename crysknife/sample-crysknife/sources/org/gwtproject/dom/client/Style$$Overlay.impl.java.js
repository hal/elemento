goog.module('org.gwtproject.dom.client.Style.$Overlay$impl');

const $Util = goog.require('nativebootstrap.Util$impl');

let $Overlay = goog.forwardDeclare('elemental2.dom.CSSProperties.OpacityUnionType.$Overlay$impl');
let CSSStyleDeclaration_$Overlay = goog.forwardDeclare('elemental2.dom.CSSStyleDeclaration.$Overlay$impl');
let j_l_String = goog.forwardDeclare('java.lang.String$impl');
let Js = goog.forwardDeclare('jsinterop.base.Js$impl');
let JsPropertyMap_$Overlay = goog.forwardDeclare('jsinterop.base.JsPropertyMap.$Overlay$impl');
let BorderStyle = goog.forwardDeclare('org.gwtproject.dom.style.shared.BorderStyle$impl');
let Clear = goog.forwardDeclare('org.gwtproject.dom.style.shared.Clear$impl');
let CssProperty = goog.forwardDeclare('org.gwtproject.dom.style.shared.CssProperty$impl');
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
let $Asserts = goog.forwardDeclare('vmbootstrap.Asserts$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

class Style_$Overlay {
 
 static m_clearBackgroundColor__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_BACKGROUND_COLOR__org_gwtproject_dom_style_shared_CssProperty);
 }
 
 static m_clearBackgroundImage__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_BACKGROUND_IMAGE__org_gwtproject_dom_style_shared_CssProperty);
 }
 
 static m_clearBorderColor__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_BORDER_COLOR__org_gwtproject_dom_style_shared_CssProperty);
 }
 
 static m_clearBorderStyle__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_BORDER_STYLE__org_gwtproject_dom_style_shared_CssProperty);
 }
 
 static m_clearBorderWidth__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_BORDER_WIDTH__org_gwtproject_dom_style_shared_CssProperty);
 }
 
 static m_clearBottom__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_BOTTOM__org_gwtproject_dom_style_shared_CssProperty);
 }
 
 static m_clearClear__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_CLEAR__org_gwtproject_dom_style_shared_CssProperty);
 }
 
 static m_clearColor__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_COLOR__org_gwtproject_dom_style_shared_CssProperty);
 }
 
 static m_clearCursor__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_CURSOR__org_gwtproject_dom_style_shared_CssProperty);
 }
 
 static m_clearDisplay__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_DISPLAY__org_gwtproject_dom_style_shared_CssProperty);
 }
 
 static m_clearFloat__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_FLOAT__org_gwtproject_dom_style_shared_CssProperty);
 }
 
 static m_clearFontSize__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_FONT_SIZE__org_gwtproject_dom_style_shared_CssProperty);
 }
 
 static m_clearFontStyle__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_FONT_STYLE__org_gwtproject_dom_style_shared_CssProperty);
 }
 
 static m_clearFontWeight__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_FONT_WEIGHT__org_gwtproject_dom_style_shared_CssProperty);
 }
 
 static m_clearHeight__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_HEIGHT__org_gwtproject_dom_style_shared_CssProperty);
 }
 
 static m_clearLeft__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_LEFT__org_gwtproject_dom_style_shared_CssProperty);
 }
 
 static m_clearLineHeight__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_LINE_HEIGHT__org_gwtproject_dom_style_shared_CssProperty);
 }
 
 static m_clearListStyleType__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_LIST_TYPE__org_gwtproject_dom_style_shared_CssProperty);
 }
 
 static m_clearMargin__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_MARGIN__org_gwtproject_dom_style_shared_CssProperty);
 }
 
 static m_clearMarginBottom__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_MARGIN_BOTTOM__org_gwtproject_dom_style_shared_CssProperty);
 }
 
 static m_clearMarginLeft__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_MARGIN_LEFT__org_gwtproject_dom_style_shared_CssProperty);
 }
 
 static m_clearMarginRight__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_MARGIN_RIGHT__org_gwtproject_dom_style_shared_CssProperty);
 }
 
 static m_clearMarginTop__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_MARGIN_TOP__org_gwtproject_dom_style_shared_CssProperty);
 }
 
 static m_clearOpacity__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  /**@type {CSSStyleDeclaration}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).opacity = $Overlay.m_of__java_lang_Object("");
 }
 
 static m_clearOutlineColor__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_OUTLINE_COLOR__org_gwtproject_dom_style_shared_CssProperty);
 }
 
 static m_clearOutlineStyle__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_OUTLINE_STYLE__org_gwtproject_dom_style_shared_CssProperty);
 }
 
 static m_clearOutlineWidth__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_OUTLINE_WIDTH__org_gwtproject_dom_style_shared_CssProperty);
 }
 
 static m_clearOverflow__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_OVERFLOW__org_gwtproject_dom_style_shared_CssProperty);
 }
 
 static m_clearOverflowX__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_OVERFLOW_X__org_gwtproject_dom_style_shared_CssProperty);
 }
 
 static m_clearOverflowY__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_OVERFLOW_Y__org_gwtproject_dom_style_shared_CssProperty);
 }
 
 static m_clearPadding__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_PADDING__org_gwtproject_dom_style_shared_CssProperty);
 }
 
 static m_clearPaddingBottom__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_PADDING_BOTTOM__org_gwtproject_dom_style_shared_CssProperty);
 }
 
 static m_clearPaddingLeft__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_PADDING_LEFT__org_gwtproject_dom_style_shared_CssProperty);
 }
 
 static m_clearPaddingRight__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_PADDING_RIGHT__org_gwtproject_dom_style_shared_CssProperty);
 }
 
 static m_clearPaddingTop__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_PADDING_TOP__org_gwtproject_dom_style_shared_CssProperty);
 }
 
 static m_clearPosition__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_POSITION__org_gwtproject_dom_style_shared_CssProperty);
 }
 
 static m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty(/** !Object */ $thisArg, /** CssProperty */ name) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String($thisArg, name.m_getJsName__(), "");
 }
 
 static m_clearProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String(/** !Object */ $thisArg, /** ?string */ name) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String($thisArg, name, "");
 }
 
 static m_clearRight__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_RIGHT__org_gwtproject_dom_style_shared_CssProperty);
 }
 
 static m_clearTableLayout__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_TABLE_LAYOUT__org_gwtproject_dom_style_shared_CssProperty);
 }
 
 static m_clearTextAlign__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_TEXT_ALIGN__org_gwtproject_dom_style_shared_CssProperty);
 }
 
 static m_clearTextDecoration__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_TEXT_DECORATION__org_gwtproject_dom_style_shared_CssProperty);
 }
 
 static m_clearTextIndent__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_TEXT_INDENT__org_gwtproject_dom_style_shared_CssProperty);
 }
 
 static m_clearTextJustify__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_TEXT_JUSTIFY__org_gwtproject_dom_style_shared_CssProperty);
 }
 
 static m_clearTextOverflow__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_TEXT_OVERFLOW__org_gwtproject_dom_style_shared_CssProperty);
 }
 
 static m_clearTextTransform__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_TEXT_TRANSFORM__org_gwtproject_dom_style_shared_CssProperty);
 }
 
 static m_clearTop__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_TOP__org_gwtproject_dom_style_shared_CssProperty);
 }
 
 static m_clearVisibility__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_VISIBILITY__org_gwtproject_dom_style_shared_CssProperty);
 }
 
 static m_clearWhiteSpace__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_WHITE_SPACE__org_gwtproject_dom_style_shared_CssProperty);
 }
 
 static m_clearWidth__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_WIDTH__org_gwtproject_dom_style_shared_CssProperty);
 }
 
 static m_clearZIndex__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_clearProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_Z_INDEX__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {?string} */
 static m_getBackgroundColor__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_BACKGROUND_COLOR__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {?string} */
 static m_getBackgroundImage__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_BACKGROUND_IMAGE__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {?string} */
 static m_getBorderColor__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_BORDER_COLOR__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {?string} */
 static m_getBorderStyle__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_BORDER_STYLE__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {?string} */
 static m_getBorderWidth__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_BORDER_WIDTH__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {?string} */
 static m_getBottom__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_BOTTOM__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {?string} */
 static m_getClear__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_CLEAR__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {?string} */
 static m_getColor__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_COLOR__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {?string} */
 static m_getCursor__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_CURSOR__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {?string} */
 static m_getDisplay__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_DISPLAY__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {?string} */
 static m_getFontSize__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_FONT_SIZE__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {?string} */
 static m_getFontStyle__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_FONT_STYLE__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {?string} */
 static m_getFontWeight__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_FONT_WEIGHT__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {?string} */
 static m_getHeight__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_HEIGHT__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {?string} */
 static m_getLeft__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_LEFT__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {?string} */
 static m_getLineHeight__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_LINE_HEIGHT__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {?string} */
 static m_getListStyleType__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_LIST_TYPE__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {?string} */
 static m_getMargin__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_MARGIN__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {?string} */
 static m_getMarginBottom__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_MARGIN_BOTTOM__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {?string} */
 static m_getMarginLeft__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_MARGIN_LEFT__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {?string} */
 static m_getMarginRight__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_MARGIN_RIGHT__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {?string} */
 static m_getMarginTop__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_MARGIN_TOP__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {?string} */
 static m_getOpacity__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_OPACITY__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {?string} */
 static m_getOverflow__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_OVERFLOW__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {?string} */
 static m_getOverflowX__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_OVERFLOW_X__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {?string} */
 static m_getOverflowY__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_OVERFLOW_Y__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {?string} */
 static m_getPadding__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_PADDING__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {?string} */
 static m_getPaddingBottom__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_PADDING_BOTTOM__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {?string} */
 static m_getPaddingLeft__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_PADDING_LEFT__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {?string} */
 static m_getPaddingRight__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_PADDING_RIGHT__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {?string} */
 static m_getPaddingTop__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_PADDING_TOP__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {?string} */
 static m_getPosition__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_POSITION__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {?string} */
 static m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty(/** !Object */ $thisArg, /** CssProperty */ name) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getPropertyImpl__$devirt__org_gwtproject_dom_client_Style__java_lang_String($thisArg, name.m_getJsName__());
 }
 /** @return {?string} */
 static m_getProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String(/** !Object */ $thisArg, /** ?string */ name) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_assertCamelCase__$devirt__org_gwtproject_dom_client_Style__java_lang_String($thisArg, name);
  return Style_$Overlay.m_getPropertyImpl__$devirt__org_gwtproject_dom_client_Style__java_lang_String($thisArg, name);
 }
 /** @return {?string} */
 static m_getRight__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_RIGHT__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {?string} */
 static m_getTableLayout__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_TABLE_LAYOUT__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {?string} */
 static m_getTextAlign__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_TEXT_ALIGN__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {?string} */
 static m_getTextDecoration__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_TEXT_DECORATION__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {?string} */
 static m_getTextIndent__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_TEXT_INDENT__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {?string} */
 static m_getTextJustify__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_TEXT_JUSTIFY__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {?string} */
 static m_getTextOverflow__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_TEXT_OVERFLOW__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {?string} */
 static m_getTextTransform__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_TEXT_TRANSFORM__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {?string} */
 static m_getTop__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_TOP__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {?string} */
 static m_getVerticalAlign__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_VERTICAL_ALIGN__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {?string} */
 static m_getVisibility__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_VISIBILITY__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {?string} */
 static m_getWhiteSpace__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_WHITE_SPACE__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {?string} */
 static m_getWidth__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_WIDTH__org_gwtproject_dom_style_shared_CssProperty);
 }
 /** @return {?string} */
 static m_getZIndex__$devirt__org_gwtproject_dom_client_Style(/** !Object */ $thisArg) {
  Style_$Overlay.$clinit();
  return Style_$Overlay.m_getProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty($thisArg, CssProperty.f_Z_INDEX__org_gwtproject_dom_style_shared_CssProperty);
 }
 
 static m_setBackgroundColor__$devirt__org_gwtproject_dom_client_Style__java_lang_String(/** !Object */ $thisArg, /** ?string */ value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_BACKGROUND_COLOR__org_gwtproject_dom_style_shared_CssProperty, value);
 }
 
 static m_setBackgroundImage__$devirt__org_gwtproject_dom_client_Style__java_lang_String(/** !Object */ $thisArg, /** ?string */ value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_BACKGROUND_IMAGE__org_gwtproject_dom_style_shared_CssProperty, value);
 }
 
 static m_setBorderColor__$devirt__org_gwtproject_dom_client_Style__java_lang_String(/** !Object */ $thisArg, /** ?string */ value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_BORDER_COLOR__org_gwtproject_dom_style_shared_CssProperty, value);
 }
 
 static m_setBorderStyle__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_BorderStyle(/** !Object */ $thisArg, /** BorderStyle */ value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_BORDER_STYLE__org_gwtproject_dom_style_shared_CssProperty, value.m_getCssName__());
 }
 
 static m_setBorderWidth__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(/** !Object */ $thisArg, /** number */ value, /** Unit */ unit) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__double__org_gwtproject_dom_style_shared_Unit($thisArg, CssProperty.f_BORDER_WIDTH__org_gwtproject_dom_style_shared_CssProperty, value, unit);
 }
 
 static m_setBottom__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(/** !Object */ $thisArg, /** number */ value, /** Unit */ unit) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__double__org_gwtproject_dom_style_shared_Unit($thisArg, CssProperty.f_BOTTOM__org_gwtproject_dom_style_shared_CssProperty, value, unit);
 }
 
 static m_setClear__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Clear(/** !Object */ $thisArg, /** Clear */ value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_CLEAR__org_gwtproject_dom_style_shared_CssProperty, value.m_getCssName__());
 }
 
 static m_setColor__$devirt__org_gwtproject_dom_client_Style__java_lang_String(/** !Object */ $thisArg, /** ?string */ value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_COLOR__org_gwtproject_dom_style_shared_CssProperty, value);
 }
 
 static m_setCursor__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Cursor(/** !Object */ $thisArg, /** Cursor */ value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_CURSOR__org_gwtproject_dom_style_shared_CssProperty, value.m_getCssName__());
 }
 
 static m_setDisplay__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Display(/** !Object */ $thisArg, /** Display */ value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_DISPLAY__org_gwtproject_dom_style_shared_CssProperty, value.m_getCssName__());
 }
 
 static m_setFloat__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Float(/** !Object */ $thisArg, /** Float */ value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_FLOAT__org_gwtproject_dom_style_shared_CssProperty, value.m_getCssName__());
 }
 
 static m_setFontSize__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(/** !Object */ $thisArg, /** number */ value, /** Unit */ unit) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__double__org_gwtproject_dom_style_shared_Unit($thisArg, CssProperty.f_FONT_SIZE__org_gwtproject_dom_style_shared_CssProperty, value, unit);
 }
 
 static m_setFontStyle__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_FontStyle(/** !Object */ $thisArg, /** FontStyle */ value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_FONT_STYLE__org_gwtproject_dom_style_shared_CssProperty, value.m_getCssName__());
 }
 
 static m_setFontWeight__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_FontWeight(/** !Object */ $thisArg, /** FontWeight */ value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_FONT_WEIGHT__org_gwtproject_dom_style_shared_CssProperty, value.m_getCssName__());
 }
 
 static m_setHeight__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(/** !Object */ $thisArg, /** number */ value, /** Unit */ unit) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__double__org_gwtproject_dom_style_shared_Unit($thisArg, CssProperty.f_HEIGHT__org_gwtproject_dom_style_shared_CssProperty, value, unit);
 }
 
 static m_setLeft__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(/** !Object */ $thisArg, /** number */ value, /** Unit */ unit) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__double__org_gwtproject_dom_style_shared_Unit($thisArg, CssProperty.f_LEFT__org_gwtproject_dom_style_shared_CssProperty, value, unit);
 }
 
 static m_setLineHeight__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(/** !Object */ $thisArg, /** number */ value, /** Unit */ unit) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__double__org_gwtproject_dom_style_shared_Unit($thisArg, CssProperty.f_LINE_HEIGHT__org_gwtproject_dom_style_shared_CssProperty, value, unit);
 }
 
 static m_setListStyleType__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_ListStyleType(/** !Object */ $thisArg, /** ListStyleType */ value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_LIST_TYPE__org_gwtproject_dom_style_shared_CssProperty, value.m_getCssName__());
 }
 
 static m_setMargin__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(/** !Object */ $thisArg, /** number */ value, /** Unit */ unit) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__double__org_gwtproject_dom_style_shared_Unit($thisArg, CssProperty.f_MARGIN__org_gwtproject_dom_style_shared_CssProperty, value, unit);
 }
 
 static m_setMarginBottom__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(/** !Object */ $thisArg, /** number */ value, /** Unit */ unit) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__double__org_gwtproject_dom_style_shared_Unit($thisArg, CssProperty.f_MARGIN_BOTTOM__org_gwtproject_dom_style_shared_CssProperty, value, unit);
 }
 
 static m_setMarginLeft__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(/** !Object */ $thisArg, /** number */ value, /** Unit */ unit) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__double__org_gwtproject_dom_style_shared_Unit($thisArg, CssProperty.f_MARGIN_LEFT__org_gwtproject_dom_style_shared_CssProperty, value, unit);
 }
 
 static m_setMarginRight__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(/** !Object */ $thisArg, /** number */ value, /** Unit */ unit) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__double__org_gwtproject_dom_style_shared_Unit($thisArg, CssProperty.f_MARGIN_RIGHT__org_gwtproject_dom_style_shared_CssProperty, value, unit);
 }
 
 static m_setMarginTop__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(/** !Object */ $thisArg, /** number */ value, /** Unit */ unit) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__double__org_gwtproject_dom_style_shared_Unit($thisArg, CssProperty.f_MARGIN_TOP__org_gwtproject_dom_style_shared_CssProperty, value, unit);
 }
 
 static m_setOpacity__$devirt__org_gwtproject_dom_client_Style__double(/** !Object */ $thisArg, /** number */ value) {
  Style_$Overlay.$clinit();
  /**@type {CSSStyleDeclaration}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)).opacity = $Overlay.m_of__java_lang_Object(value);
 }
 
 static m_setOutlineColor__$devirt__org_gwtproject_dom_client_Style__java_lang_String(/** !Object */ $thisArg, /** ?string */ value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_OUTLINE_COLOR__org_gwtproject_dom_style_shared_CssProperty, value);
 }
 
 static m_setOutlineStyle__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_OutlineStyle(/** !Object */ $thisArg, /** OutlineStyle */ value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_OUTLINE_STYLE__org_gwtproject_dom_style_shared_CssProperty, value.m_getCssName__());
 }
 
 static m_setOutlineWidth__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(/** !Object */ $thisArg, /** number */ value, /** Unit */ unit) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__double__org_gwtproject_dom_style_shared_Unit($thisArg, CssProperty.f_OUTLINE_WIDTH__org_gwtproject_dom_style_shared_CssProperty, value, unit);
 }
 
 static m_setOverflow__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Overflow(/** !Object */ $thisArg, /** Overflow */ value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_OVERFLOW__org_gwtproject_dom_style_shared_CssProperty, value.m_getCssName__());
 }
 
 static m_setOverflowX__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Overflow(/** !Object */ $thisArg, /** Overflow */ value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_OVERFLOW_X__org_gwtproject_dom_style_shared_CssProperty, value.m_getCssName__());
 }
 
 static m_setOverflowY__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Overflow(/** !Object */ $thisArg, /** Overflow */ value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_OVERFLOW_Y__org_gwtproject_dom_style_shared_CssProperty, value.m_getCssName__());
 }
 
 static m_setPadding__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(/** !Object */ $thisArg, /** number */ value, /** Unit */ unit) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__double__org_gwtproject_dom_style_shared_Unit($thisArg, CssProperty.f_PADDING__org_gwtproject_dom_style_shared_CssProperty, value, unit);
 }
 
 static m_setPaddingBottom__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(/** !Object */ $thisArg, /** number */ value, /** Unit */ unit) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__double__org_gwtproject_dom_style_shared_Unit($thisArg, CssProperty.f_PADDING_BOTTOM__org_gwtproject_dom_style_shared_CssProperty, value, unit);
 }
 
 static m_setPaddingLeft__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(/** !Object */ $thisArg, /** number */ value, /** Unit */ unit) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__double__org_gwtproject_dom_style_shared_Unit($thisArg, CssProperty.f_PADDING_LEFT__org_gwtproject_dom_style_shared_CssProperty, value, unit);
 }
 
 static m_setPaddingRight__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(/** !Object */ $thisArg, /** number */ value, /** Unit */ unit) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__double__org_gwtproject_dom_style_shared_Unit($thisArg, CssProperty.f_PADDING_RIGHT__org_gwtproject_dom_style_shared_CssProperty, value, unit);
 }
 
 static m_setPaddingTop__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(/** !Object */ $thisArg, /** number */ value, /** Unit */ unit) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__double__org_gwtproject_dom_style_shared_Unit($thisArg, CssProperty.f_PADDING_TOP__org_gwtproject_dom_style_shared_CssProperty, value, unit);
 }
 
 static m_setPosition__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Position(/** !Object */ $thisArg, /** Position */ value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_POSITION__org_gwtproject_dom_style_shared_CssProperty, value.m_getCssName__());
 }
 
 static m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String(/** !Object */ $thisArg, /** CssProperty */ name, /** ?string */ value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setPropertyImpl__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String($thisArg, name.m_getJsName__(), value);
 }
 
 static m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(/** !Object */ $thisArg, /** ?string */ name, /** ?string */ value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_assertCamelCase__$devirt__org_gwtproject_dom_client_Style__java_lang_String($thisArg, name);
  Style_$Overlay.m_setPropertyImpl__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String($thisArg, name, value);
 }
 
 static m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__double__org_gwtproject_dom_style_shared_Unit(/** !Object */ $thisArg, /** CssProperty */ name, /** number */ value, /** Unit */ unit) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setPropertyImpl__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String($thisArg, name.m_getJsName__(), value + j_l_String.m_valueOf__java_lang_Object(unit.m_getType__()));
 }
 
 static m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__double__org_gwtproject_dom_style_shared_Unit(/** !Object */ $thisArg, /** ?string */ name, /** number */ value, /** Unit */ unit) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_assertCamelCase__$devirt__org_gwtproject_dom_client_Style__java_lang_String($thisArg, name);
  Style_$Overlay.m_setPropertyImpl__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String($thisArg, name, value + j_l_String.m_valueOf__java_lang_Object(unit.m_getType__()));
 }
 
 static m_setPropertyPx__$devirt__org_gwtproject_dom_client_Style__java_lang_String__int(/** !Object */ $thisArg, /** ?string */ name, /** number */ value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__java_lang_String__double__org_gwtproject_dom_style_shared_Unit($thisArg, name, value, Unit.f_PX__org_gwtproject_dom_style_shared_Unit);
 }
 
 static m_setRight__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(/** !Object */ $thisArg, /** number */ value, /** Unit */ unit) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__double__org_gwtproject_dom_style_shared_Unit($thisArg, CssProperty.f_RIGHT__org_gwtproject_dom_style_shared_CssProperty, value, unit);
 }
 
 static m_setTableLayout__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_TableLayout(/** !Object */ $thisArg, /** TableLayout */ value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_TABLE_LAYOUT__org_gwtproject_dom_style_shared_CssProperty, value.m_getCssName__());
 }
 
 static m_setTextAlign__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_TextAlign(/** !Object */ $thisArg, /** TextAlign */ value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_TEXT_ALIGN__org_gwtproject_dom_style_shared_CssProperty, value.m_getCssName__());
 }
 
 static m_setTextDecoration__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_TextDecoration(/** !Object */ $thisArg, /** TextDecoration */ value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_TEXT_DECORATION__org_gwtproject_dom_style_shared_CssProperty, value.m_getCssName__());
 }
 
 static m_setTextIndent__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(/** !Object */ $thisArg, /** number */ value, /** Unit */ unit) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__double__org_gwtproject_dom_style_shared_Unit($thisArg, CssProperty.f_TEXT_INDENT__org_gwtproject_dom_style_shared_CssProperty, value, unit);
 }
 
 static m_setTextJustify__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_TextJustify(/** !Object */ $thisArg, /** TextJustify */ value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_TEXT_JUSTIFY__org_gwtproject_dom_style_shared_CssProperty, value.m_getCssName__());
 }
 
 static m_setTextOverflow__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_TextOverflow(/** !Object */ $thisArg, /** TextOverflow */ value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_TEXT_OVERFLOW__org_gwtproject_dom_style_shared_CssProperty, value.m_getCssName__());
 }
 
 static m_setTextTransform__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_TextTransform(/** !Object */ $thisArg, /** TextTransform */ value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_TEXT_TRANSFORM__org_gwtproject_dom_style_shared_CssProperty, value.m_getCssName__());
 }
 
 static m_setTop__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(/** !Object */ $thisArg, /** number */ value, /** Unit */ unit) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__double__org_gwtproject_dom_style_shared_Unit($thisArg, CssProperty.f_TOP__org_gwtproject_dom_style_shared_CssProperty, value, unit);
 }
 
 static m_setVerticalAlign__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_VerticalAlign(/** !Object */ $thisArg, /** VerticalAlign */ value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_VERTICAL_ALIGN__org_gwtproject_dom_style_shared_CssProperty, value.m_getCssName__());
 }
 
 static m_setVerticalAlign__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(/** !Object */ $thisArg, /** number */ value, /** Unit */ unit) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__double__org_gwtproject_dom_style_shared_Unit($thisArg, CssProperty.f_VERTICAL_ALIGN__org_gwtproject_dom_style_shared_CssProperty, value, unit);
 }
 
 static m_setVisibility__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_Visibility(/** !Object */ $thisArg, /** Visibility */ value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_VISIBILITY__org_gwtproject_dom_style_shared_CssProperty, value.m_getCssName__());
 }
 
 static m_setWhiteSpace__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_WhiteSpace(/** !Object */ $thisArg, /** WhiteSpace */ value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_WHITE_SPACE__org_gwtproject_dom_style_shared_CssProperty, value.m_getCssName__());
 }
 
 static m_setWidth__$devirt__org_gwtproject_dom_client_Style__double__org_gwtproject_dom_style_shared_Unit(/** !Object */ $thisArg, /** number */ value, /** Unit */ unit) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__double__org_gwtproject_dom_style_shared_Unit($thisArg, CssProperty.f_WIDTH__org_gwtproject_dom_style_shared_CssProperty, value, unit);
 }
 
 static m_setZIndex__$devirt__org_gwtproject_dom_client_Style__int(/** !Object */ $thisArg, /** number */ value) {
  Style_$Overlay.$clinit();
  Style_$Overlay.m_setProperty__$devirt__org_gwtproject_dom_client_Style__org_gwtproject_dom_style_shared_CssProperty__java_lang_String($thisArg, CssProperty.f_Z_INDEX__org_gwtproject_dom_style_shared_CssProperty, value + "");
 }
 
 static m_assertCamelCase__$devirt__org_gwtproject_dom_client_Style__java_lang_String(/** !Object */ $thisArg, /** ?string */ name) {
  $Asserts.$assertWithMessage(!j_l_String.m_contains__java_lang_String__java_lang_CharSequence(name, "-"), "The style name '" + j_l_String.m_valueOf__java_lang_Object(name) + "' should be in camelCase format");
 }
 /** @return {?string} */
 static m_getPropertyImpl__$devirt__org_gwtproject_dom_client_Style__java_lang_String(/** !Object */ $thisArg, /** ?string */ name) {
  return /**@type {?string}*/ ($Casts.$to(JsPropertyMap_$Overlay.m_get__$devirt__jsinterop_base_JsPropertyMap__java_lang_String(/**@type {Object<string, ?string>}*/ (Js.m_uncheckedCast__java_lang_Object($thisArg)), name), j_l_String));
 }
 
 static m_setPropertyImpl__$devirt__org_gwtproject_dom_client_Style__java_lang_String__java_lang_String(/** !Object */ $thisArg, /** ?string */ name, /** ?string */ value) {
  JsPropertyMap_$Overlay.m_set__$devirt__jsinterop_base_JsPropertyMap__java_lang_String__java_lang_Object(Js.m_asPropertyMap__java_lang_Object($thisArg), name, value);
 }
 
 static $clinit() {
  Style_$Overlay.$clinit = () =>{};
  Style_$Overlay.$loadModules();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Object;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('elemental2.dom.CSSProperties.OpacityUnionType.$Overlay$impl');
  j_l_String = goog.module.get('java.lang.String$impl');
  Js = goog.module.get('jsinterop.base.Js$impl');
  JsPropertyMap_$Overlay = goog.module.get('jsinterop.base.JsPropertyMap.$Overlay$impl');
  CssProperty = goog.module.get('org.gwtproject.dom.style.shared.CssProperty$impl');
  Unit = goog.module.get('org.gwtproject.dom.style.shared.Unit$impl');
  $Asserts = goog.module.get('vmbootstrap.Asserts$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(Style_$Overlay, 'Object');

exports = Style_$Overlay; 
//# sourceMappingURL=Style$$Overlay.js.map
