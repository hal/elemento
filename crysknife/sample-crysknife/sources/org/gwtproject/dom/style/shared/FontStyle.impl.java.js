goog.module('org.gwtproject.dom.style.shared.FontStyle$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasCssName = goog.require('org.gwtproject.dom.style.shared.HasCssName$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $1 = goog.forwardDeclare('org.gwtproject.dom.style.shared.FontStyle.$1$impl');
let $2 = goog.forwardDeclare('org.gwtproject.dom.style.shared.FontStyle.$2$impl');
let $3 = goog.forwardDeclare('org.gwtproject.dom.style.shared.FontStyle.$3$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @abstract
 * @extends {Enum<FontStyle>}
 * @implements {HasCssName}
  */
class FontStyle extends Enum {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_gwtproject_dom_style_shared_FontStyle__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /** @abstract @override @return {?string} */
 m_getCssName__() {}
 /** @return {!FontStyle} */
 static m_valueOf__java_lang_String(/** string */ name) {
  FontStyle.$clinit();
  if ($Equality.$same(FontStyle.f_namesToValuesMap__org_gwtproject_dom_style_shared_FontStyle_, null)) {
   FontStyle.f_namesToValuesMap__org_gwtproject_dom_style_shared_FontStyle_ = $Enums.createMapFromValues(FontStyle.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, FontStyle.f_namesToValuesMap__org_gwtproject_dom_style_shared_FontStyle_);
 }
 /** @return {!Array<!FontStyle>} */
 static m_values__() {
  FontStyle.$clinit();
  return /**@type {!Array<FontStyle>}*/ ($Arrays.$init([FontStyle.$f_NORMAL__org_gwtproject_dom_style_shared_FontStyle, FontStyle.$f_ITALIC__org_gwtproject_dom_style_shared_FontStyle, FontStyle.$f_OBLIQUE__org_gwtproject_dom_style_shared_FontStyle], FontStyle));
 }
 /** @return {!FontStyle} */
 static get f_NORMAL__org_gwtproject_dom_style_shared_FontStyle() {
  return (FontStyle.$clinit(), FontStyle.$f_NORMAL__org_gwtproject_dom_style_shared_FontStyle);
 }
 /** @return {!FontStyle} */
 static get f_ITALIC__org_gwtproject_dom_style_shared_FontStyle() {
  return (FontStyle.$clinit(), FontStyle.$f_ITALIC__org_gwtproject_dom_style_shared_FontStyle);
 }
 /** @return {!FontStyle} */
 static get f_OBLIQUE__org_gwtproject_dom_style_shared_FontStyle() {
  return (FontStyle.$clinit(), FontStyle.$f_OBLIQUE__org_gwtproject_dom_style_shared_FontStyle);
 }
 
 static $clinit() {
  FontStyle.$clinit = () =>{};
  FontStyle.$loadModules();
  Enum.$clinit();
  FontStyle.$f_NORMAL__org_gwtproject_dom_style_shared_FontStyle = $1.$create__java_lang_String__int($Util.$makeEnumName("NORMAL"), FontStyle.$ordinal$f_NORMAL__org_gwtproject_dom_style_shared_FontStyle);
  FontStyle.$f_ITALIC__org_gwtproject_dom_style_shared_FontStyle = $2.$create__java_lang_String__int($Util.$makeEnumName("ITALIC"), FontStyle.$ordinal$f_ITALIC__org_gwtproject_dom_style_shared_FontStyle);
  FontStyle.$f_OBLIQUE__org_gwtproject_dom_style_shared_FontStyle = $3.$create__java_lang_String__int($Util.$makeEnumName("OBLIQUE"), FontStyle.$ordinal$f_OBLIQUE__org_gwtproject_dom_style_shared_FontStyle);
  FontStyle.f_namesToValuesMap__org_gwtproject_dom_style_shared_FontStyle_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof FontStyle;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.gwtproject.dom.style.shared.FontStyle.$1$impl');
  $2 = goog.module.get('org.gwtproject.dom.style.shared.FontStyle.$2$impl');
  $3 = goog.module.get('org.gwtproject.dom.style.shared.FontStyle.$3$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(FontStyle, 'org.gwtproject.dom.style.shared.FontStyle');

HasCssName.$markImplementor(FontStyle);

/**@private {!FontStyle}*/
FontStyle.$f_NORMAL__org_gwtproject_dom_style_shared_FontStyle;
/**@private {!FontStyle}*/
FontStyle.$f_ITALIC__org_gwtproject_dom_style_shared_FontStyle;
/**@private {!FontStyle}*/
FontStyle.$f_OBLIQUE__org_gwtproject_dom_style_shared_FontStyle;
/**@type {Map<?string, !FontStyle>}*/
FontStyle.f_namesToValuesMap__org_gwtproject_dom_style_shared_FontStyle_;
/**@const {number}*/
FontStyle.$ordinal$f_NORMAL__org_gwtproject_dom_style_shared_FontStyle = 0;
/**@const {number}*/
FontStyle.$ordinal$f_ITALIC__org_gwtproject_dom_style_shared_FontStyle = 1;
/**@const {number}*/
FontStyle.$ordinal$f_OBLIQUE__org_gwtproject_dom_style_shared_FontStyle = 2;

exports = FontStyle; 
//# sourceMappingURL=FontStyle.js.map
