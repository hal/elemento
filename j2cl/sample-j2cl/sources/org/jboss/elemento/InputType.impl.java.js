goog.module('org.jboss.elemento.InputType$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<InputType>}
  */
class InputType extends Enum {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!InputType} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new InputType();
  $instance.$ctor__org_jboss_elemento_InputType__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_jboss_elemento_InputType__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /** @return {!InputType} */
 static m_valueOf__java_lang_String(/** string */ name) {
  InputType.$clinit();
  if ($Equality.$same(InputType.f_namesToValuesMap__org_jboss_elemento_InputType_, null)) {
   InputType.f_namesToValuesMap__org_jboss_elemento_InputType_ = $Enums.createMapFromValues(InputType.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, InputType.f_namesToValuesMap__org_jboss_elemento_InputType_);
 }
 /** @return {!Array<!InputType>} */
 static m_values__() {
  InputType.$clinit();
  return /**@type {!Array<InputType>}*/ ($Arrays.$init([InputType.$f_button__org_jboss_elemento_InputType, InputType.$f_checkbox__org_jboss_elemento_InputType, InputType.$f_color__org_jboss_elemento_InputType, InputType.$f_date__org_jboss_elemento_InputType, InputType.$f_datetime__org_jboss_elemento_InputType, InputType.$f_email__org_jboss_elemento_InputType, InputType.$f_file__org_jboss_elemento_InputType, InputType.$f_hidden__org_jboss_elemento_InputType, InputType.$f_image__org_jboss_elemento_InputType, InputType.$f_month__org_jboss_elemento_InputType, InputType.$f_number__org_jboss_elemento_InputType, InputType.$f_password__org_jboss_elemento_InputType, InputType.$f_radio__org_jboss_elemento_InputType, InputType.$f_range__org_jboss_elemento_InputType, InputType.$f_reset__org_jboss_elemento_InputType, InputType.$f_search__org_jboss_elemento_InputType, InputType.$f_select__org_jboss_elemento_InputType, InputType.$f_tel__org_jboss_elemento_InputType, InputType.$f_text__org_jboss_elemento_InputType, InputType.$f_textarea__org_jboss_elemento_InputType, InputType.$f_time__org_jboss_elemento_InputType, InputType.$f_url__org_jboss_elemento_InputType, InputType.$f_week__org_jboss_elemento_InputType], InputType));
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** InputType */ arg0) {
  return super.compareTo(/**@type {InputType}*/ ($Casts.$to(arg0, InputType)));
 }
 /** @return {!InputType} */
 static get f_button__org_jboss_elemento_InputType() {
  return (InputType.$clinit(), InputType.$f_button__org_jboss_elemento_InputType);
 }
 /** @return {!InputType} */
 static get f_checkbox__org_jboss_elemento_InputType() {
  return (InputType.$clinit(), InputType.$f_checkbox__org_jboss_elemento_InputType);
 }
 /** @return {!InputType} */
 static get f_color__org_jboss_elemento_InputType() {
  return (InputType.$clinit(), InputType.$f_color__org_jboss_elemento_InputType);
 }
 /** @return {!InputType} */
 static get f_date__org_jboss_elemento_InputType() {
  return (InputType.$clinit(), InputType.$f_date__org_jboss_elemento_InputType);
 }
 /** @return {!InputType} */
 static get f_datetime__org_jboss_elemento_InputType() {
  return (InputType.$clinit(), InputType.$f_datetime__org_jboss_elemento_InputType);
 }
 /** @return {!InputType} */
 static get f_email__org_jboss_elemento_InputType() {
  return (InputType.$clinit(), InputType.$f_email__org_jboss_elemento_InputType);
 }
 /** @return {!InputType} */
 static get f_file__org_jboss_elemento_InputType() {
  return (InputType.$clinit(), InputType.$f_file__org_jboss_elemento_InputType);
 }
 /** @return {!InputType} */
 static get f_hidden__org_jboss_elemento_InputType() {
  return (InputType.$clinit(), InputType.$f_hidden__org_jboss_elemento_InputType);
 }
 /** @return {!InputType} */
 static get f_image__org_jboss_elemento_InputType() {
  return (InputType.$clinit(), InputType.$f_image__org_jboss_elemento_InputType);
 }
 /** @return {!InputType} */
 static get f_month__org_jboss_elemento_InputType() {
  return (InputType.$clinit(), InputType.$f_month__org_jboss_elemento_InputType);
 }
 /** @return {!InputType} */
 static get f_number__org_jboss_elemento_InputType() {
  return (InputType.$clinit(), InputType.$f_number__org_jboss_elemento_InputType);
 }
 /** @return {!InputType} */
 static get f_password__org_jboss_elemento_InputType() {
  return (InputType.$clinit(), InputType.$f_password__org_jboss_elemento_InputType);
 }
 /** @return {!InputType} */
 static get f_radio__org_jboss_elemento_InputType() {
  return (InputType.$clinit(), InputType.$f_radio__org_jboss_elemento_InputType);
 }
 /** @return {!InputType} */
 static get f_range__org_jboss_elemento_InputType() {
  return (InputType.$clinit(), InputType.$f_range__org_jboss_elemento_InputType);
 }
 /** @return {!InputType} */
 static get f_reset__org_jboss_elemento_InputType() {
  return (InputType.$clinit(), InputType.$f_reset__org_jboss_elemento_InputType);
 }
 /** @return {!InputType} */
 static get f_search__org_jboss_elemento_InputType() {
  return (InputType.$clinit(), InputType.$f_search__org_jboss_elemento_InputType);
 }
 /** @return {!InputType} */
 static get f_select__org_jboss_elemento_InputType() {
  return (InputType.$clinit(), InputType.$f_select__org_jboss_elemento_InputType);
 }
 /** @return {!InputType} */
 static get f_tel__org_jboss_elemento_InputType() {
  return (InputType.$clinit(), InputType.$f_tel__org_jboss_elemento_InputType);
 }
 /** @return {!InputType} */
 static get f_text__org_jboss_elemento_InputType() {
  return (InputType.$clinit(), InputType.$f_text__org_jboss_elemento_InputType);
 }
 /** @return {!InputType} */
 static get f_textarea__org_jboss_elemento_InputType() {
  return (InputType.$clinit(), InputType.$f_textarea__org_jboss_elemento_InputType);
 }
 /** @return {!InputType} */
 static get f_time__org_jboss_elemento_InputType() {
  return (InputType.$clinit(), InputType.$f_time__org_jboss_elemento_InputType);
 }
 /** @return {!InputType} */
 static get f_url__org_jboss_elemento_InputType() {
  return (InputType.$clinit(), InputType.$f_url__org_jboss_elemento_InputType);
 }
 /** @return {!InputType} */
 static get f_week__org_jboss_elemento_InputType() {
  return (InputType.$clinit(), InputType.$f_week__org_jboss_elemento_InputType);
 }
 
 static $clinit() {
  InputType.$clinit = () =>{};
  InputType.$loadModules();
  Enum.$clinit();
  InputType.$f_button__org_jboss_elemento_InputType = InputType.$create__java_lang_String__int($Util.$makeEnumName("button"), InputType.$ordinal$f_button__org_jboss_elemento_InputType);
  InputType.$f_checkbox__org_jboss_elemento_InputType = InputType.$create__java_lang_String__int($Util.$makeEnumName("checkbox"), InputType.$ordinal$f_checkbox__org_jboss_elemento_InputType);
  InputType.$f_color__org_jboss_elemento_InputType = InputType.$create__java_lang_String__int($Util.$makeEnumName("color"), InputType.$ordinal$f_color__org_jboss_elemento_InputType);
  InputType.$f_date__org_jboss_elemento_InputType = InputType.$create__java_lang_String__int($Util.$makeEnumName("date"), InputType.$ordinal$f_date__org_jboss_elemento_InputType);
  InputType.$f_datetime__org_jboss_elemento_InputType = InputType.$create__java_lang_String__int($Util.$makeEnumName("datetime"), InputType.$ordinal$f_datetime__org_jboss_elemento_InputType);
  InputType.$f_email__org_jboss_elemento_InputType = InputType.$create__java_lang_String__int($Util.$makeEnumName("email"), InputType.$ordinal$f_email__org_jboss_elemento_InputType);
  InputType.$f_file__org_jboss_elemento_InputType = InputType.$create__java_lang_String__int($Util.$makeEnumName("file"), InputType.$ordinal$f_file__org_jboss_elemento_InputType);
  InputType.$f_hidden__org_jboss_elemento_InputType = InputType.$create__java_lang_String__int($Util.$makeEnumName("hidden"), InputType.$ordinal$f_hidden__org_jboss_elemento_InputType);
  InputType.$f_image__org_jboss_elemento_InputType = InputType.$create__java_lang_String__int($Util.$makeEnumName("image"), InputType.$ordinal$f_image__org_jboss_elemento_InputType);
  InputType.$f_month__org_jboss_elemento_InputType = InputType.$create__java_lang_String__int($Util.$makeEnumName("month"), InputType.$ordinal$f_month__org_jboss_elemento_InputType);
  InputType.$f_number__org_jboss_elemento_InputType = InputType.$create__java_lang_String__int($Util.$makeEnumName("number"), InputType.$ordinal$f_number__org_jboss_elemento_InputType);
  InputType.$f_password__org_jboss_elemento_InputType = InputType.$create__java_lang_String__int($Util.$makeEnumName("password"), InputType.$ordinal$f_password__org_jboss_elemento_InputType);
  InputType.$f_radio__org_jboss_elemento_InputType = InputType.$create__java_lang_String__int($Util.$makeEnumName("radio"), InputType.$ordinal$f_radio__org_jboss_elemento_InputType);
  InputType.$f_range__org_jboss_elemento_InputType = InputType.$create__java_lang_String__int($Util.$makeEnumName("range"), InputType.$ordinal$f_range__org_jboss_elemento_InputType);
  InputType.$f_reset__org_jboss_elemento_InputType = InputType.$create__java_lang_String__int($Util.$makeEnumName("reset"), InputType.$ordinal$f_reset__org_jboss_elemento_InputType);
  InputType.$f_search__org_jboss_elemento_InputType = InputType.$create__java_lang_String__int($Util.$makeEnumName("search"), InputType.$ordinal$f_search__org_jboss_elemento_InputType);
  InputType.$f_select__org_jboss_elemento_InputType = InputType.$create__java_lang_String__int($Util.$makeEnumName("select"), InputType.$ordinal$f_select__org_jboss_elemento_InputType);
  InputType.$f_tel__org_jboss_elemento_InputType = InputType.$create__java_lang_String__int($Util.$makeEnumName("tel"), InputType.$ordinal$f_tel__org_jboss_elemento_InputType);
  InputType.$f_text__org_jboss_elemento_InputType = InputType.$create__java_lang_String__int($Util.$makeEnumName("text"), InputType.$ordinal$f_text__org_jboss_elemento_InputType);
  InputType.$f_textarea__org_jboss_elemento_InputType = InputType.$create__java_lang_String__int($Util.$makeEnumName("textarea"), InputType.$ordinal$f_textarea__org_jboss_elemento_InputType);
  InputType.$f_time__org_jboss_elemento_InputType = InputType.$create__java_lang_String__int($Util.$makeEnumName("time"), InputType.$ordinal$f_time__org_jboss_elemento_InputType);
  InputType.$f_url__org_jboss_elemento_InputType = InputType.$create__java_lang_String__int($Util.$makeEnumName("url"), InputType.$ordinal$f_url__org_jboss_elemento_InputType);
  InputType.$f_week__org_jboss_elemento_InputType = InputType.$create__java_lang_String__int($Util.$makeEnumName("week"), InputType.$ordinal$f_week__org_jboss_elemento_InputType);
  InputType.f_namesToValuesMap__org_jboss_elemento_InputType_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof InputType;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(InputType, 'org.jboss.elemento.InputType');

/**@private {!InputType}*/
InputType.$f_button__org_jboss_elemento_InputType;
/**@private {!InputType}*/
InputType.$f_checkbox__org_jboss_elemento_InputType;
/**@private {!InputType}*/
InputType.$f_color__org_jboss_elemento_InputType;
/**@private {!InputType}*/
InputType.$f_date__org_jboss_elemento_InputType;
/**@private {!InputType}*/
InputType.$f_datetime__org_jboss_elemento_InputType;
/**@private {!InputType}*/
InputType.$f_email__org_jboss_elemento_InputType;
/**@private {!InputType}*/
InputType.$f_file__org_jboss_elemento_InputType;
/**@private {!InputType}*/
InputType.$f_hidden__org_jboss_elemento_InputType;
/**@private {!InputType}*/
InputType.$f_image__org_jboss_elemento_InputType;
/**@private {!InputType}*/
InputType.$f_month__org_jboss_elemento_InputType;
/**@private {!InputType}*/
InputType.$f_number__org_jboss_elemento_InputType;
/**@private {!InputType}*/
InputType.$f_password__org_jboss_elemento_InputType;
/**@private {!InputType}*/
InputType.$f_radio__org_jboss_elemento_InputType;
/**@private {!InputType}*/
InputType.$f_range__org_jboss_elemento_InputType;
/**@private {!InputType}*/
InputType.$f_reset__org_jboss_elemento_InputType;
/**@private {!InputType}*/
InputType.$f_search__org_jboss_elemento_InputType;
/**@private {!InputType}*/
InputType.$f_select__org_jboss_elemento_InputType;
/**@private {!InputType}*/
InputType.$f_tel__org_jboss_elemento_InputType;
/**@private {!InputType}*/
InputType.$f_text__org_jboss_elemento_InputType;
/**@private {!InputType}*/
InputType.$f_textarea__org_jboss_elemento_InputType;
/**@private {!InputType}*/
InputType.$f_time__org_jboss_elemento_InputType;
/**@private {!InputType}*/
InputType.$f_url__org_jboss_elemento_InputType;
/**@private {!InputType}*/
InputType.$f_week__org_jboss_elemento_InputType;
/**@type {Map<?string, !InputType>}*/
InputType.f_namesToValuesMap__org_jboss_elemento_InputType_;
/**@const {number}*/
InputType.$ordinal$f_button__org_jboss_elemento_InputType = 0;
/**@const {number}*/
InputType.$ordinal$f_checkbox__org_jboss_elemento_InputType = 1;
/**@const {number}*/
InputType.$ordinal$f_color__org_jboss_elemento_InputType = 2;
/**@const {number}*/
InputType.$ordinal$f_date__org_jboss_elemento_InputType = 3;
/**@const {number}*/
InputType.$ordinal$f_datetime__org_jboss_elemento_InputType = 4;
/**@const {number}*/
InputType.$ordinal$f_email__org_jboss_elemento_InputType = 5;
/**@const {number}*/
InputType.$ordinal$f_file__org_jboss_elemento_InputType = 6;
/**@const {number}*/
InputType.$ordinal$f_hidden__org_jboss_elemento_InputType = 7;
/**@const {number}*/
InputType.$ordinal$f_image__org_jboss_elemento_InputType = 8;
/**@const {number}*/
InputType.$ordinal$f_month__org_jboss_elemento_InputType = 9;
/**@const {number}*/
InputType.$ordinal$f_number__org_jboss_elemento_InputType = 10;
/**@const {number}*/
InputType.$ordinal$f_password__org_jboss_elemento_InputType = 11;
/**@const {number}*/
InputType.$ordinal$f_radio__org_jboss_elemento_InputType = 12;
/**@const {number}*/
InputType.$ordinal$f_range__org_jboss_elemento_InputType = 13;
/**@const {number}*/
InputType.$ordinal$f_reset__org_jboss_elemento_InputType = 14;
/**@const {number}*/
InputType.$ordinal$f_search__org_jboss_elemento_InputType = 15;
/**@const {number}*/
InputType.$ordinal$f_select__org_jboss_elemento_InputType = 16;
/**@const {number}*/
InputType.$ordinal$f_tel__org_jboss_elemento_InputType = 17;
/**@const {number}*/
InputType.$ordinal$f_text__org_jboss_elemento_InputType = 18;
/**@const {number}*/
InputType.$ordinal$f_textarea__org_jboss_elemento_InputType = 19;
/**@const {number}*/
InputType.$ordinal$f_time__org_jboss_elemento_InputType = 20;
/**@const {number}*/
InputType.$ordinal$f_url__org_jboss_elemento_InputType = 21;
/**@const {number}*/
InputType.$ordinal$f_week__org_jboss_elemento_InputType = 22;

exports = InputType; 
//# sourceMappingURL=InputType.js.map
