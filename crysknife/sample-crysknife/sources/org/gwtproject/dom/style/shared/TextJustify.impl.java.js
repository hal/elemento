goog.module('org.gwtproject.dom.style.shared.TextJustify$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasCssName = goog.require('org.gwtproject.dom.style.shared.HasCssName$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $1 = goog.forwardDeclare('org.gwtproject.dom.style.shared.TextJustify.$1$impl');
let $2 = goog.forwardDeclare('org.gwtproject.dom.style.shared.TextJustify.$2$impl');
let $3 = goog.forwardDeclare('org.gwtproject.dom.style.shared.TextJustify.$3$impl');
let $4 = goog.forwardDeclare('org.gwtproject.dom.style.shared.TextJustify.$4$impl');
let $5 = goog.forwardDeclare('org.gwtproject.dom.style.shared.TextJustify.$5$impl');
let $6 = goog.forwardDeclare('org.gwtproject.dom.style.shared.TextJustify.$6$impl');
let $7 = goog.forwardDeclare('org.gwtproject.dom.style.shared.TextJustify.$7$impl');
let $8 = goog.forwardDeclare('org.gwtproject.dom.style.shared.TextJustify.$8$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @abstract
 * @extends {Enum<TextJustify>}
 * @implements {HasCssName}
  */
class TextJustify extends Enum {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_gwtproject_dom_style_shared_TextJustify__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /** @abstract @override @return {?string} */
 m_getCssName__() {}
 /** @return {!TextJustify} */
 static m_valueOf__java_lang_String(/** string */ name) {
  TextJustify.$clinit();
  if ($Equality.$same(TextJustify.f_namesToValuesMap__org_gwtproject_dom_style_shared_TextJustify_, null)) {
   TextJustify.f_namesToValuesMap__org_gwtproject_dom_style_shared_TextJustify_ = $Enums.createMapFromValues(TextJustify.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, TextJustify.f_namesToValuesMap__org_gwtproject_dom_style_shared_TextJustify_);
 }
 /** @return {!Array<!TextJustify>} */
 static m_values__() {
  TextJustify.$clinit();
  return /**@type {!Array<TextJustify>}*/ ($Arrays.$init([TextJustify.$f_AUTO__org_gwtproject_dom_style_shared_TextJustify, TextJustify.$f_DISTRIBUTE__org_gwtproject_dom_style_shared_TextJustify, TextJustify.$f_INTER_CHARACTER__org_gwtproject_dom_style_shared_TextJustify, TextJustify.$f_INTER_CLUSTER__org_gwtproject_dom_style_shared_TextJustify, TextJustify.$f_INTER_IDEOGRAPH__org_gwtproject_dom_style_shared_TextJustify, TextJustify.$f_INTER_WORD__org_gwtproject_dom_style_shared_TextJustify, TextJustify.$f_KASHIDA__org_gwtproject_dom_style_shared_TextJustify, TextJustify.$f_NONE__org_gwtproject_dom_style_shared_TextJustify], TextJustify));
 }
 /** @return {!TextJustify} */
 static get f_AUTO__org_gwtproject_dom_style_shared_TextJustify() {
  return (TextJustify.$clinit(), TextJustify.$f_AUTO__org_gwtproject_dom_style_shared_TextJustify);
 }
 /** @return {!TextJustify} */
 static get f_DISTRIBUTE__org_gwtproject_dom_style_shared_TextJustify() {
  return (TextJustify.$clinit(), TextJustify.$f_DISTRIBUTE__org_gwtproject_dom_style_shared_TextJustify);
 }
 /** @return {!TextJustify} */
 static get f_INTER_CHARACTER__org_gwtproject_dom_style_shared_TextJustify() {
  return (TextJustify.$clinit(), TextJustify.$f_INTER_CHARACTER__org_gwtproject_dom_style_shared_TextJustify);
 }
 /** @return {!TextJustify} */
 static get f_INTER_CLUSTER__org_gwtproject_dom_style_shared_TextJustify() {
  return (TextJustify.$clinit(), TextJustify.$f_INTER_CLUSTER__org_gwtproject_dom_style_shared_TextJustify);
 }
 /** @return {!TextJustify} */
 static get f_INTER_IDEOGRAPH__org_gwtproject_dom_style_shared_TextJustify() {
  return (TextJustify.$clinit(), TextJustify.$f_INTER_IDEOGRAPH__org_gwtproject_dom_style_shared_TextJustify);
 }
 /** @return {!TextJustify} */
 static get f_INTER_WORD__org_gwtproject_dom_style_shared_TextJustify() {
  return (TextJustify.$clinit(), TextJustify.$f_INTER_WORD__org_gwtproject_dom_style_shared_TextJustify);
 }
 /** @return {!TextJustify} */
 static get f_KASHIDA__org_gwtproject_dom_style_shared_TextJustify() {
  return (TextJustify.$clinit(), TextJustify.$f_KASHIDA__org_gwtproject_dom_style_shared_TextJustify);
 }
 /** @return {!TextJustify} */
 static get f_NONE__org_gwtproject_dom_style_shared_TextJustify() {
  return (TextJustify.$clinit(), TextJustify.$f_NONE__org_gwtproject_dom_style_shared_TextJustify);
 }
 
 static $clinit() {
  TextJustify.$clinit = () =>{};
  TextJustify.$loadModules();
  Enum.$clinit();
  TextJustify.$f_AUTO__org_gwtproject_dom_style_shared_TextJustify = $1.$create__java_lang_String__int($Util.$makeEnumName("AUTO"), TextJustify.$ordinal$f_AUTO__org_gwtproject_dom_style_shared_TextJustify);
  TextJustify.$f_DISTRIBUTE__org_gwtproject_dom_style_shared_TextJustify = $2.$create__java_lang_String__int($Util.$makeEnumName("DISTRIBUTE"), TextJustify.$ordinal$f_DISTRIBUTE__org_gwtproject_dom_style_shared_TextJustify);
  TextJustify.$f_INTER_CHARACTER__org_gwtproject_dom_style_shared_TextJustify = $3.$create__java_lang_String__int($Util.$makeEnumName("INTER_CHARACTER"), TextJustify.$ordinal$f_INTER_CHARACTER__org_gwtproject_dom_style_shared_TextJustify);
  TextJustify.$f_INTER_CLUSTER__org_gwtproject_dom_style_shared_TextJustify = $4.$create__java_lang_String__int($Util.$makeEnumName("INTER_CLUSTER"), TextJustify.$ordinal$f_INTER_CLUSTER__org_gwtproject_dom_style_shared_TextJustify);
  TextJustify.$f_INTER_IDEOGRAPH__org_gwtproject_dom_style_shared_TextJustify = $5.$create__java_lang_String__int($Util.$makeEnumName("INTER_IDEOGRAPH"), TextJustify.$ordinal$f_INTER_IDEOGRAPH__org_gwtproject_dom_style_shared_TextJustify);
  TextJustify.$f_INTER_WORD__org_gwtproject_dom_style_shared_TextJustify = $6.$create__java_lang_String__int($Util.$makeEnumName("INTER_WORD"), TextJustify.$ordinal$f_INTER_WORD__org_gwtproject_dom_style_shared_TextJustify);
  TextJustify.$f_KASHIDA__org_gwtproject_dom_style_shared_TextJustify = $7.$create__java_lang_String__int($Util.$makeEnumName("KASHIDA"), TextJustify.$ordinal$f_KASHIDA__org_gwtproject_dom_style_shared_TextJustify);
  TextJustify.$f_NONE__org_gwtproject_dom_style_shared_TextJustify = $8.$create__java_lang_String__int($Util.$makeEnumName("NONE"), TextJustify.$ordinal$f_NONE__org_gwtproject_dom_style_shared_TextJustify);
  TextJustify.f_namesToValuesMap__org_gwtproject_dom_style_shared_TextJustify_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TextJustify;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.gwtproject.dom.style.shared.TextJustify.$1$impl');
  $2 = goog.module.get('org.gwtproject.dom.style.shared.TextJustify.$2$impl');
  $3 = goog.module.get('org.gwtproject.dom.style.shared.TextJustify.$3$impl');
  $4 = goog.module.get('org.gwtproject.dom.style.shared.TextJustify.$4$impl');
  $5 = goog.module.get('org.gwtproject.dom.style.shared.TextJustify.$5$impl');
  $6 = goog.module.get('org.gwtproject.dom.style.shared.TextJustify.$6$impl');
  $7 = goog.module.get('org.gwtproject.dom.style.shared.TextJustify.$7$impl');
  $8 = goog.module.get('org.gwtproject.dom.style.shared.TextJustify.$8$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(TextJustify, 'org.gwtproject.dom.style.shared.TextJustify');

HasCssName.$markImplementor(TextJustify);

/**@private {!TextJustify}*/
TextJustify.$f_AUTO__org_gwtproject_dom_style_shared_TextJustify;
/**@private {!TextJustify}*/
TextJustify.$f_DISTRIBUTE__org_gwtproject_dom_style_shared_TextJustify;
/**@private {!TextJustify}*/
TextJustify.$f_INTER_CHARACTER__org_gwtproject_dom_style_shared_TextJustify;
/**@private {!TextJustify}*/
TextJustify.$f_INTER_CLUSTER__org_gwtproject_dom_style_shared_TextJustify;
/**@private {!TextJustify}*/
TextJustify.$f_INTER_IDEOGRAPH__org_gwtproject_dom_style_shared_TextJustify;
/**@private {!TextJustify}*/
TextJustify.$f_INTER_WORD__org_gwtproject_dom_style_shared_TextJustify;
/**@private {!TextJustify}*/
TextJustify.$f_KASHIDA__org_gwtproject_dom_style_shared_TextJustify;
/**@private {!TextJustify}*/
TextJustify.$f_NONE__org_gwtproject_dom_style_shared_TextJustify;
/**@type {Map<?string, !TextJustify>}*/
TextJustify.f_namesToValuesMap__org_gwtproject_dom_style_shared_TextJustify_;
/**@const {number}*/
TextJustify.$ordinal$f_AUTO__org_gwtproject_dom_style_shared_TextJustify = 0;
/**@const {number}*/
TextJustify.$ordinal$f_DISTRIBUTE__org_gwtproject_dom_style_shared_TextJustify = 1;
/**@const {number}*/
TextJustify.$ordinal$f_INTER_CHARACTER__org_gwtproject_dom_style_shared_TextJustify = 2;
/**@const {number}*/
TextJustify.$ordinal$f_INTER_CLUSTER__org_gwtproject_dom_style_shared_TextJustify = 3;
/**@const {number}*/
TextJustify.$ordinal$f_INTER_IDEOGRAPH__org_gwtproject_dom_style_shared_TextJustify = 4;
/**@const {number}*/
TextJustify.$ordinal$f_INTER_WORD__org_gwtproject_dom_style_shared_TextJustify = 5;
/**@const {number}*/
TextJustify.$ordinal$f_KASHIDA__org_gwtproject_dom_style_shared_TextJustify = 6;
/**@const {number}*/
TextJustify.$ordinal$f_NONE__org_gwtproject_dom_style_shared_TextJustify = 7;

exports = TextJustify; 
//# sourceMappingURL=TextJustify.js.map
