goog.module('org.gwtproject.dom.style.shared.TextTransform$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasCssName = goog.require('org.gwtproject.dom.style.shared.HasCssName$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $1 = goog.forwardDeclare('org.gwtproject.dom.style.shared.TextTransform.$1$impl');
let $2 = goog.forwardDeclare('org.gwtproject.dom.style.shared.TextTransform.$2$impl');
let $3 = goog.forwardDeclare('org.gwtproject.dom.style.shared.TextTransform.$3$impl');
let $4 = goog.forwardDeclare('org.gwtproject.dom.style.shared.TextTransform.$4$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @abstract
 * @extends {Enum<TextTransform>}
 * @implements {HasCssName}
  */
class TextTransform extends Enum {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_gwtproject_dom_style_shared_TextTransform__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /** @abstract @override @return {?string} */
 m_getCssName__() {}
 /** @return {!TextTransform} */
 static m_valueOf__java_lang_String(/** string */ name) {
  TextTransform.$clinit();
  if ($Equality.$same(TextTransform.f_namesToValuesMap__org_gwtproject_dom_style_shared_TextTransform_, null)) {
   TextTransform.f_namesToValuesMap__org_gwtproject_dom_style_shared_TextTransform_ = $Enums.createMapFromValues(TextTransform.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, TextTransform.f_namesToValuesMap__org_gwtproject_dom_style_shared_TextTransform_);
 }
 /** @return {!Array<!TextTransform>} */
 static m_values__() {
  TextTransform.$clinit();
  return /**@type {!Array<TextTransform>}*/ ($Arrays.$init([TextTransform.$f_CAPITALIZE__org_gwtproject_dom_style_shared_TextTransform, TextTransform.$f_NONE__org_gwtproject_dom_style_shared_TextTransform, TextTransform.$f_LOWERCASE__org_gwtproject_dom_style_shared_TextTransform, TextTransform.$f_UPPERCASE__org_gwtproject_dom_style_shared_TextTransform], TextTransform));
 }
 /** @return {!TextTransform} */
 static get f_CAPITALIZE__org_gwtproject_dom_style_shared_TextTransform() {
  return (TextTransform.$clinit(), TextTransform.$f_CAPITALIZE__org_gwtproject_dom_style_shared_TextTransform);
 }
 /** @return {!TextTransform} */
 static get f_NONE__org_gwtproject_dom_style_shared_TextTransform() {
  return (TextTransform.$clinit(), TextTransform.$f_NONE__org_gwtproject_dom_style_shared_TextTransform);
 }
 /** @return {!TextTransform} */
 static get f_LOWERCASE__org_gwtproject_dom_style_shared_TextTransform() {
  return (TextTransform.$clinit(), TextTransform.$f_LOWERCASE__org_gwtproject_dom_style_shared_TextTransform);
 }
 /** @return {!TextTransform} */
 static get f_UPPERCASE__org_gwtproject_dom_style_shared_TextTransform() {
  return (TextTransform.$clinit(), TextTransform.$f_UPPERCASE__org_gwtproject_dom_style_shared_TextTransform);
 }
 
 static $clinit() {
  TextTransform.$clinit = () =>{};
  TextTransform.$loadModules();
  Enum.$clinit();
  TextTransform.$f_CAPITALIZE__org_gwtproject_dom_style_shared_TextTransform = $1.$create__java_lang_String__int($Util.$makeEnumName("CAPITALIZE"), TextTransform.$ordinal$f_CAPITALIZE__org_gwtproject_dom_style_shared_TextTransform);
  TextTransform.$f_NONE__org_gwtproject_dom_style_shared_TextTransform = $2.$create__java_lang_String__int($Util.$makeEnumName("NONE"), TextTransform.$ordinal$f_NONE__org_gwtproject_dom_style_shared_TextTransform);
  TextTransform.$f_LOWERCASE__org_gwtproject_dom_style_shared_TextTransform = $3.$create__java_lang_String__int($Util.$makeEnumName("LOWERCASE"), TextTransform.$ordinal$f_LOWERCASE__org_gwtproject_dom_style_shared_TextTransform);
  TextTransform.$f_UPPERCASE__org_gwtproject_dom_style_shared_TextTransform = $4.$create__java_lang_String__int($Util.$makeEnumName("UPPERCASE"), TextTransform.$ordinal$f_UPPERCASE__org_gwtproject_dom_style_shared_TextTransform);
  TextTransform.f_namesToValuesMap__org_gwtproject_dom_style_shared_TextTransform_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TextTransform;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.gwtproject.dom.style.shared.TextTransform.$1$impl');
  $2 = goog.module.get('org.gwtproject.dom.style.shared.TextTransform.$2$impl');
  $3 = goog.module.get('org.gwtproject.dom.style.shared.TextTransform.$3$impl');
  $4 = goog.module.get('org.gwtproject.dom.style.shared.TextTransform.$4$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(TextTransform, 'org.gwtproject.dom.style.shared.TextTransform');

HasCssName.$markImplementor(TextTransform);

/**@private {!TextTransform}*/
TextTransform.$f_CAPITALIZE__org_gwtproject_dom_style_shared_TextTransform;
/**@private {!TextTransform}*/
TextTransform.$f_NONE__org_gwtproject_dom_style_shared_TextTransform;
/**@private {!TextTransform}*/
TextTransform.$f_LOWERCASE__org_gwtproject_dom_style_shared_TextTransform;
/**@private {!TextTransform}*/
TextTransform.$f_UPPERCASE__org_gwtproject_dom_style_shared_TextTransform;
/**@type {Map<?string, !TextTransform>}*/
TextTransform.f_namesToValuesMap__org_gwtproject_dom_style_shared_TextTransform_;
/**@const {number}*/
TextTransform.$ordinal$f_CAPITALIZE__org_gwtproject_dom_style_shared_TextTransform = 0;
/**@const {number}*/
TextTransform.$ordinal$f_NONE__org_gwtproject_dom_style_shared_TextTransform = 1;
/**@const {number}*/
TextTransform.$ordinal$f_LOWERCASE__org_gwtproject_dom_style_shared_TextTransform = 2;
/**@const {number}*/
TextTransform.$ordinal$f_UPPERCASE__org_gwtproject_dom_style_shared_TextTransform = 3;

exports = TextTransform; 
//# sourceMappingURL=TextTransform.js.map
