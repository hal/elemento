goog.module('org.gwtproject.dom.style.shared.TextDecoration$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasCssName = goog.require('org.gwtproject.dom.style.shared.HasCssName$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $1 = goog.forwardDeclare('org.gwtproject.dom.style.shared.TextDecoration.$1$impl');
let $2 = goog.forwardDeclare('org.gwtproject.dom.style.shared.TextDecoration.$2$impl');
let $3 = goog.forwardDeclare('org.gwtproject.dom.style.shared.TextDecoration.$3$impl');
let $4 = goog.forwardDeclare('org.gwtproject.dom.style.shared.TextDecoration.$4$impl');
let $5 = goog.forwardDeclare('org.gwtproject.dom.style.shared.TextDecoration.$5$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @abstract
 * @extends {Enum<TextDecoration>}
 * @implements {HasCssName}
  */
class TextDecoration extends Enum {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_gwtproject_dom_style_shared_TextDecoration__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /** @abstract @override @return {?string} */
 m_getCssName__() {}
 /** @return {!TextDecoration} */
 static m_valueOf__java_lang_String(/** string */ name) {
  TextDecoration.$clinit();
  if ($Equality.$same(TextDecoration.f_namesToValuesMap__org_gwtproject_dom_style_shared_TextDecoration_, null)) {
   TextDecoration.f_namesToValuesMap__org_gwtproject_dom_style_shared_TextDecoration_ = $Enums.createMapFromValues(TextDecoration.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, TextDecoration.f_namesToValuesMap__org_gwtproject_dom_style_shared_TextDecoration_);
 }
 /** @return {!Array<!TextDecoration>} */
 static m_values__() {
  TextDecoration.$clinit();
  return /**@type {!Array<TextDecoration>}*/ ($Arrays.$init([TextDecoration.$f_BLINK__org_gwtproject_dom_style_shared_TextDecoration, TextDecoration.$f_LINE_THROUGH__org_gwtproject_dom_style_shared_TextDecoration, TextDecoration.$f_NONE__org_gwtproject_dom_style_shared_TextDecoration, TextDecoration.$f_OVERLINE__org_gwtproject_dom_style_shared_TextDecoration, TextDecoration.$f_UNDERLINE__org_gwtproject_dom_style_shared_TextDecoration], TextDecoration));
 }
 /** @return {!TextDecoration} */
 static get f_BLINK__org_gwtproject_dom_style_shared_TextDecoration() {
  return (TextDecoration.$clinit(), TextDecoration.$f_BLINK__org_gwtproject_dom_style_shared_TextDecoration);
 }
 /** @return {!TextDecoration} */
 static get f_LINE_THROUGH__org_gwtproject_dom_style_shared_TextDecoration() {
  return (TextDecoration.$clinit(), TextDecoration.$f_LINE_THROUGH__org_gwtproject_dom_style_shared_TextDecoration);
 }
 /** @return {!TextDecoration} */
 static get f_NONE__org_gwtproject_dom_style_shared_TextDecoration() {
  return (TextDecoration.$clinit(), TextDecoration.$f_NONE__org_gwtproject_dom_style_shared_TextDecoration);
 }
 /** @return {!TextDecoration} */
 static get f_OVERLINE__org_gwtproject_dom_style_shared_TextDecoration() {
  return (TextDecoration.$clinit(), TextDecoration.$f_OVERLINE__org_gwtproject_dom_style_shared_TextDecoration);
 }
 /** @return {!TextDecoration} */
 static get f_UNDERLINE__org_gwtproject_dom_style_shared_TextDecoration() {
  return (TextDecoration.$clinit(), TextDecoration.$f_UNDERLINE__org_gwtproject_dom_style_shared_TextDecoration);
 }
 
 static $clinit() {
  TextDecoration.$clinit = () =>{};
  TextDecoration.$loadModules();
  Enum.$clinit();
  TextDecoration.$f_BLINK__org_gwtproject_dom_style_shared_TextDecoration = $1.$create__java_lang_String__int($Util.$makeEnumName("BLINK"), TextDecoration.$ordinal$f_BLINK__org_gwtproject_dom_style_shared_TextDecoration);
  TextDecoration.$f_LINE_THROUGH__org_gwtproject_dom_style_shared_TextDecoration = $2.$create__java_lang_String__int($Util.$makeEnumName("LINE_THROUGH"), TextDecoration.$ordinal$f_LINE_THROUGH__org_gwtproject_dom_style_shared_TextDecoration);
  TextDecoration.$f_NONE__org_gwtproject_dom_style_shared_TextDecoration = $3.$create__java_lang_String__int($Util.$makeEnumName("NONE"), TextDecoration.$ordinal$f_NONE__org_gwtproject_dom_style_shared_TextDecoration);
  TextDecoration.$f_OVERLINE__org_gwtproject_dom_style_shared_TextDecoration = $4.$create__java_lang_String__int($Util.$makeEnumName("OVERLINE"), TextDecoration.$ordinal$f_OVERLINE__org_gwtproject_dom_style_shared_TextDecoration);
  TextDecoration.$f_UNDERLINE__org_gwtproject_dom_style_shared_TextDecoration = $5.$create__java_lang_String__int($Util.$makeEnumName("UNDERLINE"), TextDecoration.$ordinal$f_UNDERLINE__org_gwtproject_dom_style_shared_TextDecoration);
  TextDecoration.f_namesToValuesMap__org_gwtproject_dom_style_shared_TextDecoration_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TextDecoration;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.gwtproject.dom.style.shared.TextDecoration.$1$impl');
  $2 = goog.module.get('org.gwtproject.dom.style.shared.TextDecoration.$2$impl');
  $3 = goog.module.get('org.gwtproject.dom.style.shared.TextDecoration.$3$impl');
  $4 = goog.module.get('org.gwtproject.dom.style.shared.TextDecoration.$4$impl');
  $5 = goog.module.get('org.gwtproject.dom.style.shared.TextDecoration.$5$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(TextDecoration, 'org.gwtproject.dom.style.shared.TextDecoration');

HasCssName.$markImplementor(TextDecoration);

/**@private {!TextDecoration}*/
TextDecoration.$f_BLINK__org_gwtproject_dom_style_shared_TextDecoration;
/**@private {!TextDecoration}*/
TextDecoration.$f_LINE_THROUGH__org_gwtproject_dom_style_shared_TextDecoration;
/**@private {!TextDecoration}*/
TextDecoration.$f_NONE__org_gwtproject_dom_style_shared_TextDecoration;
/**@private {!TextDecoration}*/
TextDecoration.$f_OVERLINE__org_gwtproject_dom_style_shared_TextDecoration;
/**@private {!TextDecoration}*/
TextDecoration.$f_UNDERLINE__org_gwtproject_dom_style_shared_TextDecoration;
/**@type {Map<?string, !TextDecoration>}*/
TextDecoration.f_namesToValuesMap__org_gwtproject_dom_style_shared_TextDecoration_;
/**@const {number}*/
TextDecoration.$ordinal$f_BLINK__org_gwtproject_dom_style_shared_TextDecoration = 0;
/**@const {number}*/
TextDecoration.$ordinal$f_LINE_THROUGH__org_gwtproject_dom_style_shared_TextDecoration = 1;
/**@const {number}*/
TextDecoration.$ordinal$f_NONE__org_gwtproject_dom_style_shared_TextDecoration = 2;
/**@const {number}*/
TextDecoration.$ordinal$f_OVERLINE__org_gwtproject_dom_style_shared_TextDecoration = 3;
/**@const {number}*/
TextDecoration.$ordinal$f_UNDERLINE__org_gwtproject_dom_style_shared_TextDecoration = 4;

exports = TextDecoration; 
//# sourceMappingURL=TextDecoration.js.map
