goog.module('org.gwtproject.dom.style.shared.Display$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasCssName = goog.require('org.gwtproject.dom.style.shared.HasCssName$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $1 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Display.$1$impl');
let $10 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Display.$10$impl');
let $11 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Display.$11$impl');
let $12 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Display.$12$impl');
let $13 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Display.$13$impl');
let $14 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Display.$14$impl');
let $15 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Display.$15$impl');
let $16 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Display.$16$impl');
let $17 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Display.$17$impl');
let $18 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Display.$18$impl');
let $19 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Display.$19$impl');
let $2 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Display.$2$impl');
let $3 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Display.$3$impl');
let $4 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Display.$4$impl');
let $5 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Display.$5$impl');
let $6 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Display.$6$impl');
let $7 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Display.$7$impl');
let $8 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Display.$8$impl');
let $9 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Display.$9$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @abstract
 * @extends {Enum<Display>}
 * @implements {HasCssName}
  */
class Display extends Enum {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_gwtproject_dom_style_shared_Display__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /** @abstract @override @return {?string} */
 m_getCssName__() {}
 /** @return {!Display} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Display.$clinit();
  if ($Equality.$same(Display.f_namesToValuesMap__org_gwtproject_dom_style_shared_Display_, null)) {
   Display.f_namesToValuesMap__org_gwtproject_dom_style_shared_Display_ = $Enums.createMapFromValues(Display.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Display.f_namesToValuesMap__org_gwtproject_dom_style_shared_Display_);
 }
 /** @return {!Array<!Display>} */
 static m_values__() {
  Display.$clinit();
  return /**@type {!Array<Display>}*/ ($Arrays.$init([Display.$f_NONE__org_gwtproject_dom_style_shared_Display, Display.$f_BLOCK__org_gwtproject_dom_style_shared_Display, Display.$f_INLINE__org_gwtproject_dom_style_shared_Display, Display.$f_INLINE_BLOCK__org_gwtproject_dom_style_shared_Display, Display.$f_INLINE_TABLE__org_gwtproject_dom_style_shared_Display, Display.$f_LIST_ITEM__org_gwtproject_dom_style_shared_Display, Display.$f_RUN_IN__org_gwtproject_dom_style_shared_Display, Display.$f_TABLE__org_gwtproject_dom_style_shared_Display, Display.$f_TABLE_CAPTION__org_gwtproject_dom_style_shared_Display, Display.$f_TABLE_COLUMN_GROUP__org_gwtproject_dom_style_shared_Display, Display.$f_TABLE_HEADER_GROUP__org_gwtproject_dom_style_shared_Display, Display.$f_TABLE_FOOTER_GROUP__org_gwtproject_dom_style_shared_Display, Display.$f_TABLE_ROW_GROUP__org_gwtproject_dom_style_shared_Display, Display.$f_TABLE_CELL__org_gwtproject_dom_style_shared_Display, Display.$f_TABLE_COLUMN__org_gwtproject_dom_style_shared_Display, Display.$f_TABLE_ROW__org_gwtproject_dom_style_shared_Display, Display.$f_INITIAL__org_gwtproject_dom_style_shared_Display, Display.$f_FLEX__org_gwtproject_dom_style_shared_Display, Display.$f_INLINE_FLEX__org_gwtproject_dom_style_shared_Display], Display));
 }
 /** @return {!Display} */
 static get f_NONE__org_gwtproject_dom_style_shared_Display() {
  return (Display.$clinit(), Display.$f_NONE__org_gwtproject_dom_style_shared_Display);
 }
 /** @return {!Display} */
 static get f_BLOCK__org_gwtproject_dom_style_shared_Display() {
  return (Display.$clinit(), Display.$f_BLOCK__org_gwtproject_dom_style_shared_Display);
 }
 /** @return {!Display} */
 static get f_INLINE__org_gwtproject_dom_style_shared_Display() {
  return (Display.$clinit(), Display.$f_INLINE__org_gwtproject_dom_style_shared_Display);
 }
 /** @return {!Display} */
 static get f_INLINE_BLOCK__org_gwtproject_dom_style_shared_Display() {
  return (Display.$clinit(), Display.$f_INLINE_BLOCK__org_gwtproject_dom_style_shared_Display);
 }
 /** @return {!Display} */
 static get f_INLINE_TABLE__org_gwtproject_dom_style_shared_Display() {
  return (Display.$clinit(), Display.$f_INLINE_TABLE__org_gwtproject_dom_style_shared_Display);
 }
 /** @return {!Display} */
 static get f_LIST_ITEM__org_gwtproject_dom_style_shared_Display() {
  return (Display.$clinit(), Display.$f_LIST_ITEM__org_gwtproject_dom_style_shared_Display);
 }
 /** @return {!Display} */
 static get f_RUN_IN__org_gwtproject_dom_style_shared_Display() {
  return (Display.$clinit(), Display.$f_RUN_IN__org_gwtproject_dom_style_shared_Display);
 }
 /** @return {!Display} */
 static get f_TABLE__org_gwtproject_dom_style_shared_Display() {
  return (Display.$clinit(), Display.$f_TABLE__org_gwtproject_dom_style_shared_Display);
 }
 /** @return {!Display} */
 static get f_TABLE_CAPTION__org_gwtproject_dom_style_shared_Display() {
  return (Display.$clinit(), Display.$f_TABLE_CAPTION__org_gwtproject_dom_style_shared_Display);
 }
 /** @return {!Display} */
 static get f_TABLE_COLUMN_GROUP__org_gwtproject_dom_style_shared_Display() {
  return (Display.$clinit(), Display.$f_TABLE_COLUMN_GROUP__org_gwtproject_dom_style_shared_Display);
 }
 /** @return {!Display} */
 static get f_TABLE_HEADER_GROUP__org_gwtproject_dom_style_shared_Display() {
  return (Display.$clinit(), Display.$f_TABLE_HEADER_GROUP__org_gwtproject_dom_style_shared_Display);
 }
 /** @return {!Display} */
 static get f_TABLE_FOOTER_GROUP__org_gwtproject_dom_style_shared_Display() {
  return (Display.$clinit(), Display.$f_TABLE_FOOTER_GROUP__org_gwtproject_dom_style_shared_Display);
 }
 /** @return {!Display} */
 static get f_TABLE_ROW_GROUP__org_gwtproject_dom_style_shared_Display() {
  return (Display.$clinit(), Display.$f_TABLE_ROW_GROUP__org_gwtproject_dom_style_shared_Display);
 }
 /** @return {!Display} */
 static get f_TABLE_CELL__org_gwtproject_dom_style_shared_Display() {
  return (Display.$clinit(), Display.$f_TABLE_CELL__org_gwtproject_dom_style_shared_Display);
 }
 /** @return {!Display} */
 static get f_TABLE_COLUMN__org_gwtproject_dom_style_shared_Display() {
  return (Display.$clinit(), Display.$f_TABLE_COLUMN__org_gwtproject_dom_style_shared_Display);
 }
 /** @return {!Display} */
 static get f_TABLE_ROW__org_gwtproject_dom_style_shared_Display() {
  return (Display.$clinit(), Display.$f_TABLE_ROW__org_gwtproject_dom_style_shared_Display);
 }
 /** @return {!Display} */
 static get f_INITIAL__org_gwtproject_dom_style_shared_Display() {
  return (Display.$clinit(), Display.$f_INITIAL__org_gwtproject_dom_style_shared_Display);
 }
 /** @return {!Display} */
 static get f_FLEX__org_gwtproject_dom_style_shared_Display() {
  return (Display.$clinit(), Display.$f_FLEX__org_gwtproject_dom_style_shared_Display);
 }
 /** @return {!Display} */
 static get f_INLINE_FLEX__org_gwtproject_dom_style_shared_Display() {
  return (Display.$clinit(), Display.$f_INLINE_FLEX__org_gwtproject_dom_style_shared_Display);
 }
 
 static $clinit() {
  Display.$clinit = () =>{};
  Display.$loadModules();
  Enum.$clinit();
  Display.$f_NONE__org_gwtproject_dom_style_shared_Display = $1.$create__java_lang_String__int($Util.$makeEnumName("NONE"), Display.$ordinal$f_NONE__org_gwtproject_dom_style_shared_Display);
  Display.$f_BLOCK__org_gwtproject_dom_style_shared_Display = $2.$create__java_lang_String__int($Util.$makeEnumName("BLOCK"), Display.$ordinal$f_BLOCK__org_gwtproject_dom_style_shared_Display);
  Display.$f_INLINE__org_gwtproject_dom_style_shared_Display = $3.$create__java_lang_String__int($Util.$makeEnumName("INLINE"), Display.$ordinal$f_INLINE__org_gwtproject_dom_style_shared_Display);
  Display.$f_INLINE_BLOCK__org_gwtproject_dom_style_shared_Display = $4.$create__java_lang_String__int($Util.$makeEnumName("INLINE_BLOCK"), Display.$ordinal$f_INLINE_BLOCK__org_gwtproject_dom_style_shared_Display);
  Display.$f_INLINE_TABLE__org_gwtproject_dom_style_shared_Display = $5.$create__java_lang_String__int($Util.$makeEnumName("INLINE_TABLE"), Display.$ordinal$f_INLINE_TABLE__org_gwtproject_dom_style_shared_Display);
  Display.$f_LIST_ITEM__org_gwtproject_dom_style_shared_Display = $6.$create__java_lang_String__int($Util.$makeEnumName("LIST_ITEM"), Display.$ordinal$f_LIST_ITEM__org_gwtproject_dom_style_shared_Display);
  Display.$f_RUN_IN__org_gwtproject_dom_style_shared_Display = $7.$create__java_lang_String__int($Util.$makeEnumName("RUN_IN"), Display.$ordinal$f_RUN_IN__org_gwtproject_dom_style_shared_Display);
  Display.$f_TABLE__org_gwtproject_dom_style_shared_Display = $8.$create__java_lang_String__int($Util.$makeEnumName("TABLE"), Display.$ordinal$f_TABLE__org_gwtproject_dom_style_shared_Display);
  Display.$f_TABLE_CAPTION__org_gwtproject_dom_style_shared_Display = $9.$create__java_lang_String__int($Util.$makeEnumName("TABLE_CAPTION"), Display.$ordinal$f_TABLE_CAPTION__org_gwtproject_dom_style_shared_Display);
  Display.$f_TABLE_COLUMN_GROUP__org_gwtproject_dom_style_shared_Display = $10.$create__java_lang_String__int($Util.$makeEnumName("TABLE_COLUMN_GROUP"), Display.$ordinal$f_TABLE_COLUMN_GROUP__org_gwtproject_dom_style_shared_Display);
  Display.$f_TABLE_HEADER_GROUP__org_gwtproject_dom_style_shared_Display = $11.$create__java_lang_String__int($Util.$makeEnumName("TABLE_HEADER_GROUP"), Display.$ordinal$f_TABLE_HEADER_GROUP__org_gwtproject_dom_style_shared_Display);
  Display.$f_TABLE_FOOTER_GROUP__org_gwtproject_dom_style_shared_Display = $12.$create__java_lang_String__int($Util.$makeEnumName("TABLE_FOOTER_GROUP"), Display.$ordinal$f_TABLE_FOOTER_GROUP__org_gwtproject_dom_style_shared_Display);
  Display.$f_TABLE_ROW_GROUP__org_gwtproject_dom_style_shared_Display = $13.$create__java_lang_String__int($Util.$makeEnumName("TABLE_ROW_GROUP"), Display.$ordinal$f_TABLE_ROW_GROUP__org_gwtproject_dom_style_shared_Display);
  Display.$f_TABLE_CELL__org_gwtproject_dom_style_shared_Display = $14.$create__java_lang_String__int($Util.$makeEnumName("TABLE_CELL"), Display.$ordinal$f_TABLE_CELL__org_gwtproject_dom_style_shared_Display);
  Display.$f_TABLE_COLUMN__org_gwtproject_dom_style_shared_Display = $15.$create__java_lang_String__int($Util.$makeEnumName("TABLE_COLUMN"), Display.$ordinal$f_TABLE_COLUMN__org_gwtproject_dom_style_shared_Display);
  Display.$f_TABLE_ROW__org_gwtproject_dom_style_shared_Display = $16.$create__java_lang_String__int($Util.$makeEnumName("TABLE_ROW"), Display.$ordinal$f_TABLE_ROW__org_gwtproject_dom_style_shared_Display);
  Display.$f_INITIAL__org_gwtproject_dom_style_shared_Display = $17.$create__java_lang_String__int($Util.$makeEnumName("INITIAL"), Display.$ordinal$f_INITIAL__org_gwtproject_dom_style_shared_Display);
  Display.$f_FLEX__org_gwtproject_dom_style_shared_Display = $18.$create__java_lang_String__int($Util.$makeEnumName("FLEX"), Display.$ordinal$f_FLEX__org_gwtproject_dom_style_shared_Display);
  Display.$f_INLINE_FLEX__org_gwtproject_dom_style_shared_Display = $19.$create__java_lang_String__int($Util.$makeEnumName("INLINE_FLEX"), Display.$ordinal$f_INLINE_FLEX__org_gwtproject_dom_style_shared_Display);
  Display.f_namesToValuesMap__org_gwtproject_dom_style_shared_Display_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Display;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.gwtproject.dom.style.shared.Display.$1$impl');
  $10 = goog.module.get('org.gwtproject.dom.style.shared.Display.$10$impl');
  $11 = goog.module.get('org.gwtproject.dom.style.shared.Display.$11$impl');
  $12 = goog.module.get('org.gwtproject.dom.style.shared.Display.$12$impl');
  $13 = goog.module.get('org.gwtproject.dom.style.shared.Display.$13$impl');
  $14 = goog.module.get('org.gwtproject.dom.style.shared.Display.$14$impl');
  $15 = goog.module.get('org.gwtproject.dom.style.shared.Display.$15$impl');
  $16 = goog.module.get('org.gwtproject.dom.style.shared.Display.$16$impl');
  $17 = goog.module.get('org.gwtproject.dom.style.shared.Display.$17$impl');
  $18 = goog.module.get('org.gwtproject.dom.style.shared.Display.$18$impl');
  $19 = goog.module.get('org.gwtproject.dom.style.shared.Display.$19$impl');
  $2 = goog.module.get('org.gwtproject.dom.style.shared.Display.$2$impl');
  $3 = goog.module.get('org.gwtproject.dom.style.shared.Display.$3$impl');
  $4 = goog.module.get('org.gwtproject.dom.style.shared.Display.$4$impl');
  $5 = goog.module.get('org.gwtproject.dom.style.shared.Display.$5$impl');
  $6 = goog.module.get('org.gwtproject.dom.style.shared.Display.$6$impl');
  $7 = goog.module.get('org.gwtproject.dom.style.shared.Display.$7$impl');
  $8 = goog.module.get('org.gwtproject.dom.style.shared.Display.$8$impl');
  $9 = goog.module.get('org.gwtproject.dom.style.shared.Display.$9$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(Display, 'org.gwtproject.dom.style.shared.Display');

HasCssName.$markImplementor(Display);

/**@private {!Display}*/
Display.$f_NONE__org_gwtproject_dom_style_shared_Display;
/**@private {!Display}*/
Display.$f_BLOCK__org_gwtproject_dom_style_shared_Display;
/**@private {!Display}*/
Display.$f_INLINE__org_gwtproject_dom_style_shared_Display;
/**@private {!Display}*/
Display.$f_INLINE_BLOCK__org_gwtproject_dom_style_shared_Display;
/**@private {!Display}*/
Display.$f_INLINE_TABLE__org_gwtproject_dom_style_shared_Display;
/**@private {!Display}*/
Display.$f_LIST_ITEM__org_gwtproject_dom_style_shared_Display;
/**@private {!Display}*/
Display.$f_RUN_IN__org_gwtproject_dom_style_shared_Display;
/**@private {!Display}*/
Display.$f_TABLE__org_gwtproject_dom_style_shared_Display;
/**@private {!Display}*/
Display.$f_TABLE_CAPTION__org_gwtproject_dom_style_shared_Display;
/**@private {!Display}*/
Display.$f_TABLE_COLUMN_GROUP__org_gwtproject_dom_style_shared_Display;
/**@private {!Display}*/
Display.$f_TABLE_HEADER_GROUP__org_gwtproject_dom_style_shared_Display;
/**@private {!Display}*/
Display.$f_TABLE_FOOTER_GROUP__org_gwtproject_dom_style_shared_Display;
/**@private {!Display}*/
Display.$f_TABLE_ROW_GROUP__org_gwtproject_dom_style_shared_Display;
/**@private {!Display}*/
Display.$f_TABLE_CELL__org_gwtproject_dom_style_shared_Display;
/**@private {!Display}*/
Display.$f_TABLE_COLUMN__org_gwtproject_dom_style_shared_Display;
/**@private {!Display}*/
Display.$f_TABLE_ROW__org_gwtproject_dom_style_shared_Display;
/**@private {!Display}*/
Display.$f_INITIAL__org_gwtproject_dom_style_shared_Display;
/**@private {!Display}*/
Display.$f_FLEX__org_gwtproject_dom_style_shared_Display;
/**@private {!Display}*/
Display.$f_INLINE_FLEX__org_gwtproject_dom_style_shared_Display;
/**@type {Map<?string, !Display>}*/
Display.f_namesToValuesMap__org_gwtproject_dom_style_shared_Display_;
/**@const {number}*/
Display.$ordinal$f_NONE__org_gwtproject_dom_style_shared_Display = 0;
/**@const {number}*/
Display.$ordinal$f_BLOCK__org_gwtproject_dom_style_shared_Display = 1;
/**@const {number}*/
Display.$ordinal$f_INLINE__org_gwtproject_dom_style_shared_Display = 2;
/**@const {number}*/
Display.$ordinal$f_INLINE_BLOCK__org_gwtproject_dom_style_shared_Display = 3;
/**@const {number}*/
Display.$ordinal$f_INLINE_TABLE__org_gwtproject_dom_style_shared_Display = 4;
/**@const {number}*/
Display.$ordinal$f_LIST_ITEM__org_gwtproject_dom_style_shared_Display = 5;
/**@const {number}*/
Display.$ordinal$f_RUN_IN__org_gwtproject_dom_style_shared_Display = 6;
/**@const {number}*/
Display.$ordinal$f_TABLE__org_gwtproject_dom_style_shared_Display = 7;
/**@const {number}*/
Display.$ordinal$f_TABLE_CAPTION__org_gwtproject_dom_style_shared_Display = 8;
/**@const {number}*/
Display.$ordinal$f_TABLE_COLUMN_GROUP__org_gwtproject_dom_style_shared_Display = 9;
/**@const {number}*/
Display.$ordinal$f_TABLE_HEADER_GROUP__org_gwtproject_dom_style_shared_Display = 10;
/**@const {number}*/
Display.$ordinal$f_TABLE_FOOTER_GROUP__org_gwtproject_dom_style_shared_Display = 11;
/**@const {number}*/
Display.$ordinal$f_TABLE_ROW_GROUP__org_gwtproject_dom_style_shared_Display = 12;
/**@const {number}*/
Display.$ordinal$f_TABLE_CELL__org_gwtproject_dom_style_shared_Display = 13;
/**@const {number}*/
Display.$ordinal$f_TABLE_COLUMN__org_gwtproject_dom_style_shared_Display = 14;
/**@const {number}*/
Display.$ordinal$f_TABLE_ROW__org_gwtproject_dom_style_shared_Display = 15;
/**@const {number}*/
Display.$ordinal$f_INITIAL__org_gwtproject_dom_style_shared_Display = 16;
/**@const {number}*/
Display.$ordinal$f_FLEX__org_gwtproject_dom_style_shared_Display = 17;
/**@const {number}*/
Display.$ordinal$f_INLINE_FLEX__org_gwtproject_dom_style_shared_Display = 18;

exports = Display; 
//# sourceMappingURL=Display.js.map
