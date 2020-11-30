goog.module('org.gwtproject.dom.style.shared.TextAlign$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasCssName = goog.require('org.gwtproject.dom.style.shared.HasCssName$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $1 = goog.forwardDeclare('org.gwtproject.dom.style.shared.TextAlign.$1$impl');
let $2 = goog.forwardDeclare('org.gwtproject.dom.style.shared.TextAlign.$2$impl');
let $3 = goog.forwardDeclare('org.gwtproject.dom.style.shared.TextAlign.$3$impl');
let $4 = goog.forwardDeclare('org.gwtproject.dom.style.shared.TextAlign.$4$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @abstract
 * @extends {Enum<TextAlign>}
 * @implements {HasCssName}
  */
class TextAlign extends Enum {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_gwtproject_dom_style_shared_TextAlign__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /** @abstract @override @return {?string} */
 m_getCssName__() {}
 /** @return {!TextAlign} */
 static m_valueOf__java_lang_String(/** string */ name) {
  TextAlign.$clinit();
  if ($Equality.$same(TextAlign.f_namesToValuesMap__org_gwtproject_dom_style_shared_TextAlign_, null)) {
   TextAlign.f_namesToValuesMap__org_gwtproject_dom_style_shared_TextAlign_ = $Enums.createMapFromValues(TextAlign.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, TextAlign.f_namesToValuesMap__org_gwtproject_dom_style_shared_TextAlign_);
 }
 /** @return {!Array<!TextAlign>} */
 static m_values__() {
  TextAlign.$clinit();
  return /**@type {!Array<TextAlign>}*/ ($Arrays.$init([TextAlign.$f_CENTER__org_gwtproject_dom_style_shared_TextAlign, TextAlign.$f_JUSTIFY__org_gwtproject_dom_style_shared_TextAlign, TextAlign.$f_LEFT__org_gwtproject_dom_style_shared_TextAlign, TextAlign.$f_RIGHT__org_gwtproject_dom_style_shared_TextAlign], TextAlign));
 }
 /** @return {!TextAlign} */
 static get f_CENTER__org_gwtproject_dom_style_shared_TextAlign() {
  return (TextAlign.$clinit(), TextAlign.$f_CENTER__org_gwtproject_dom_style_shared_TextAlign);
 }
 /** @return {!TextAlign} */
 static get f_JUSTIFY__org_gwtproject_dom_style_shared_TextAlign() {
  return (TextAlign.$clinit(), TextAlign.$f_JUSTIFY__org_gwtproject_dom_style_shared_TextAlign);
 }
 /** @return {!TextAlign} */
 static get f_LEFT__org_gwtproject_dom_style_shared_TextAlign() {
  return (TextAlign.$clinit(), TextAlign.$f_LEFT__org_gwtproject_dom_style_shared_TextAlign);
 }
 /** @return {!TextAlign} */
 static get f_RIGHT__org_gwtproject_dom_style_shared_TextAlign() {
  return (TextAlign.$clinit(), TextAlign.$f_RIGHT__org_gwtproject_dom_style_shared_TextAlign);
 }
 
 static $clinit() {
  TextAlign.$clinit = () =>{};
  TextAlign.$loadModules();
  Enum.$clinit();
  TextAlign.$f_CENTER__org_gwtproject_dom_style_shared_TextAlign = $1.$create__java_lang_String__int($Util.$makeEnumName("CENTER"), TextAlign.$ordinal$f_CENTER__org_gwtproject_dom_style_shared_TextAlign);
  TextAlign.$f_JUSTIFY__org_gwtproject_dom_style_shared_TextAlign = $2.$create__java_lang_String__int($Util.$makeEnumName("JUSTIFY"), TextAlign.$ordinal$f_JUSTIFY__org_gwtproject_dom_style_shared_TextAlign);
  TextAlign.$f_LEFT__org_gwtproject_dom_style_shared_TextAlign = $3.$create__java_lang_String__int($Util.$makeEnumName("LEFT"), TextAlign.$ordinal$f_LEFT__org_gwtproject_dom_style_shared_TextAlign);
  TextAlign.$f_RIGHT__org_gwtproject_dom_style_shared_TextAlign = $4.$create__java_lang_String__int($Util.$makeEnumName("RIGHT"), TextAlign.$ordinal$f_RIGHT__org_gwtproject_dom_style_shared_TextAlign);
  TextAlign.f_namesToValuesMap__org_gwtproject_dom_style_shared_TextAlign_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TextAlign;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.gwtproject.dom.style.shared.TextAlign.$1$impl');
  $2 = goog.module.get('org.gwtproject.dom.style.shared.TextAlign.$2$impl');
  $3 = goog.module.get('org.gwtproject.dom.style.shared.TextAlign.$3$impl');
  $4 = goog.module.get('org.gwtproject.dom.style.shared.TextAlign.$4$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(TextAlign, 'org.gwtproject.dom.style.shared.TextAlign');

HasCssName.$markImplementor(TextAlign);

/**@private {!TextAlign}*/
TextAlign.$f_CENTER__org_gwtproject_dom_style_shared_TextAlign;
/**@private {!TextAlign}*/
TextAlign.$f_JUSTIFY__org_gwtproject_dom_style_shared_TextAlign;
/**@private {!TextAlign}*/
TextAlign.$f_LEFT__org_gwtproject_dom_style_shared_TextAlign;
/**@private {!TextAlign}*/
TextAlign.$f_RIGHT__org_gwtproject_dom_style_shared_TextAlign;
/**@type {Map<?string, !TextAlign>}*/
TextAlign.f_namesToValuesMap__org_gwtproject_dom_style_shared_TextAlign_;
/**@const {number}*/
TextAlign.$ordinal$f_CENTER__org_gwtproject_dom_style_shared_TextAlign = 0;
/**@const {number}*/
TextAlign.$ordinal$f_JUSTIFY__org_gwtproject_dom_style_shared_TextAlign = 1;
/**@const {number}*/
TextAlign.$ordinal$f_LEFT__org_gwtproject_dom_style_shared_TextAlign = 2;
/**@const {number}*/
TextAlign.$ordinal$f_RIGHT__org_gwtproject_dom_style_shared_TextAlign = 3;

exports = TextAlign; 
//# sourceMappingURL=TextAlign.js.map
