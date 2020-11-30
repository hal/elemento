goog.module('org.gwtproject.dom.style.shared.Cursor$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasCssName = goog.require('org.gwtproject.dom.style.shared.HasCssName$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $1 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Cursor.$1$impl');
let $10 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Cursor.$10$impl');
let $11 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Cursor.$11$impl');
let $12 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Cursor.$12$impl');
let $13 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Cursor.$13$impl');
let $14 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Cursor.$14$impl');
let $15 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Cursor.$15$impl');
let $16 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Cursor.$16$impl');
let $17 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Cursor.$17$impl');
let $18 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Cursor.$18$impl');
let $2 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Cursor.$2$impl');
let $3 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Cursor.$3$impl');
let $4 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Cursor.$4$impl');
let $5 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Cursor.$5$impl');
let $6 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Cursor.$6$impl');
let $7 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Cursor.$7$impl');
let $8 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Cursor.$8$impl');
let $9 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Cursor.$9$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @abstract
 * @extends {Enum<Cursor>}
 * @implements {HasCssName}
  */
class Cursor extends Enum {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_gwtproject_dom_style_shared_Cursor__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /** @abstract @override @return {?string} */
 m_getCssName__() {}
 /** @return {!Cursor} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Cursor.$clinit();
  if ($Equality.$same(Cursor.f_namesToValuesMap__org_gwtproject_dom_style_shared_Cursor_, null)) {
   Cursor.f_namesToValuesMap__org_gwtproject_dom_style_shared_Cursor_ = $Enums.createMapFromValues(Cursor.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Cursor.f_namesToValuesMap__org_gwtproject_dom_style_shared_Cursor_);
 }
 /** @return {!Array<!Cursor>} */
 static m_values__() {
  Cursor.$clinit();
  return /**@type {!Array<Cursor>}*/ ($Arrays.$init([Cursor.$f_DEFAULT__org_gwtproject_dom_style_shared_Cursor, Cursor.$f_AUTO__org_gwtproject_dom_style_shared_Cursor, Cursor.$f_CROSSHAIR__org_gwtproject_dom_style_shared_Cursor, Cursor.$f_POINTER__org_gwtproject_dom_style_shared_Cursor, Cursor.$f_MOVE__org_gwtproject_dom_style_shared_Cursor, Cursor.$f_E_RESIZE__org_gwtproject_dom_style_shared_Cursor, Cursor.$f_NE_RESIZE__org_gwtproject_dom_style_shared_Cursor, Cursor.$f_NW_RESIZE__org_gwtproject_dom_style_shared_Cursor, Cursor.$f_N_RESIZE__org_gwtproject_dom_style_shared_Cursor, Cursor.$f_SE_RESIZE__org_gwtproject_dom_style_shared_Cursor, Cursor.$f_SW_RESIZE__org_gwtproject_dom_style_shared_Cursor, Cursor.$f_S_RESIZE__org_gwtproject_dom_style_shared_Cursor, Cursor.$f_W_RESIZE__org_gwtproject_dom_style_shared_Cursor, Cursor.$f_TEXT__org_gwtproject_dom_style_shared_Cursor, Cursor.$f_WAIT__org_gwtproject_dom_style_shared_Cursor, Cursor.$f_HELP__org_gwtproject_dom_style_shared_Cursor, Cursor.$f_COL_RESIZE__org_gwtproject_dom_style_shared_Cursor, Cursor.$f_ROW_RESIZE__org_gwtproject_dom_style_shared_Cursor], Cursor));
 }
 /** @return {!Cursor} */
 static get f_DEFAULT__org_gwtproject_dom_style_shared_Cursor() {
  return (Cursor.$clinit(), Cursor.$f_DEFAULT__org_gwtproject_dom_style_shared_Cursor);
 }
 /** @return {!Cursor} */
 static get f_AUTO__org_gwtproject_dom_style_shared_Cursor() {
  return (Cursor.$clinit(), Cursor.$f_AUTO__org_gwtproject_dom_style_shared_Cursor);
 }
 /** @return {!Cursor} */
 static get f_CROSSHAIR__org_gwtproject_dom_style_shared_Cursor() {
  return (Cursor.$clinit(), Cursor.$f_CROSSHAIR__org_gwtproject_dom_style_shared_Cursor);
 }
 /** @return {!Cursor} */
 static get f_POINTER__org_gwtproject_dom_style_shared_Cursor() {
  return (Cursor.$clinit(), Cursor.$f_POINTER__org_gwtproject_dom_style_shared_Cursor);
 }
 /** @return {!Cursor} */
 static get f_MOVE__org_gwtproject_dom_style_shared_Cursor() {
  return (Cursor.$clinit(), Cursor.$f_MOVE__org_gwtproject_dom_style_shared_Cursor);
 }
 /** @return {!Cursor} */
 static get f_E_RESIZE__org_gwtproject_dom_style_shared_Cursor() {
  return (Cursor.$clinit(), Cursor.$f_E_RESIZE__org_gwtproject_dom_style_shared_Cursor);
 }
 /** @return {!Cursor} */
 static get f_NE_RESIZE__org_gwtproject_dom_style_shared_Cursor() {
  return (Cursor.$clinit(), Cursor.$f_NE_RESIZE__org_gwtproject_dom_style_shared_Cursor);
 }
 /** @return {!Cursor} */
 static get f_NW_RESIZE__org_gwtproject_dom_style_shared_Cursor() {
  return (Cursor.$clinit(), Cursor.$f_NW_RESIZE__org_gwtproject_dom_style_shared_Cursor);
 }
 /** @return {!Cursor} */
 static get f_N_RESIZE__org_gwtproject_dom_style_shared_Cursor() {
  return (Cursor.$clinit(), Cursor.$f_N_RESIZE__org_gwtproject_dom_style_shared_Cursor);
 }
 /** @return {!Cursor} */
 static get f_SE_RESIZE__org_gwtproject_dom_style_shared_Cursor() {
  return (Cursor.$clinit(), Cursor.$f_SE_RESIZE__org_gwtproject_dom_style_shared_Cursor);
 }
 /** @return {!Cursor} */
 static get f_SW_RESIZE__org_gwtproject_dom_style_shared_Cursor() {
  return (Cursor.$clinit(), Cursor.$f_SW_RESIZE__org_gwtproject_dom_style_shared_Cursor);
 }
 /** @return {!Cursor} */
 static get f_S_RESIZE__org_gwtproject_dom_style_shared_Cursor() {
  return (Cursor.$clinit(), Cursor.$f_S_RESIZE__org_gwtproject_dom_style_shared_Cursor);
 }
 /** @return {!Cursor} */
 static get f_W_RESIZE__org_gwtproject_dom_style_shared_Cursor() {
  return (Cursor.$clinit(), Cursor.$f_W_RESIZE__org_gwtproject_dom_style_shared_Cursor);
 }
 /** @return {!Cursor} */
 static get f_TEXT__org_gwtproject_dom_style_shared_Cursor() {
  return (Cursor.$clinit(), Cursor.$f_TEXT__org_gwtproject_dom_style_shared_Cursor);
 }
 /** @return {!Cursor} */
 static get f_WAIT__org_gwtproject_dom_style_shared_Cursor() {
  return (Cursor.$clinit(), Cursor.$f_WAIT__org_gwtproject_dom_style_shared_Cursor);
 }
 /** @return {!Cursor} */
 static get f_HELP__org_gwtproject_dom_style_shared_Cursor() {
  return (Cursor.$clinit(), Cursor.$f_HELP__org_gwtproject_dom_style_shared_Cursor);
 }
 /** @return {!Cursor} */
 static get f_COL_RESIZE__org_gwtproject_dom_style_shared_Cursor() {
  return (Cursor.$clinit(), Cursor.$f_COL_RESIZE__org_gwtproject_dom_style_shared_Cursor);
 }
 /** @return {!Cursor} */
 static get f_ROW_RESIZE__org_gwtproject_dom_style_shared_Cursor() {
  return (Cursor.$clinit(), Cursor.$f_ROW_RESIZE__org_gwtproject_dom_style_shared_Cursor);
 }
 
 static $clinit() {
  Cursor.$clinit = () =>{};
  Cursor.$loadModules();
  Enum.$clinit();
  Cursor.$f_DEFAULT__org_gwtproject_dom_style_shared_Cursor = $1.$create__java_lang_String__int($Util.$makeEnumName("DEFAULT"), Cursor.$ordinal$f_DEFAULT__org_gwtproject_dom_style_shared_Cursor);
  Cursor.$f_AUTO__org_gwtproject_dom_style_shared_Cursor = $2.$create__java_lang_String__int($Util.$makeEnumName("AUTO"), Cursor.$ordinal$f_AUTO__org_gwtproject_dom_style_shared_Cursor);
  Cursor.$f_CROSSHAIR__org_gwtproject_dom_style_shared_Cursor = $3.$create__java_lang_String__int($Util.$makeEnumName("CROSSHAIR"), Cursor.$ordinal$f_CROSSHAIR__org_gwtproject_dom_style_shared_Cursor);
  Cursor.$f_POINTER__org_gwtproject_dom_style_shared_Cursor = $4.$create__java_lang_String__int($Util.$makeEnumName("POINTER"), Cursor.$ordinal$f_POINTER__org_gwtproject_dom_style_shared_Cursor);
  Cursor.$f_MOVE__org_gwtproject_dom_style_shared_Cursor = $5.$create__java_lang_String__int($Util.$makeEnumName("MOVE"), Cursor.$ordinal$f_MOVE__org_gwtproject_dom_style_shared_Cursor);
  Cursor.$f_E_RESIZE__org_gwtproject_dom_style_shared_Cursor = $6.$create__java_lang_String__int($Util.$makeEnumName("E_RESIZE"), Cursor.$ordinal$f_E_RESIZE__org_gwtproject_dom_style_shared_Cursor);
  Cursor.$f_NE_RESIZE__org_gwtproject_dom_style_shared_Cursor = $7.$create__java_lang_String__int($Util.$makeEnumName("NE_RESIZE"), Cursor.$ordinal$f_NE_RESIZE__org_gwtproject_dom_style_shared_Cursor);
  Cursor.$f_NW_RESIZE__org_gwtproject_dom_style_shared_Cursor = $8.$create__java_lang_String__int($Util.$makeEnumName("NW_RESIZE"), Cursor.$ordinal$f_NW_RESIZE__org_gwtproject_dom_style_shared_Cursor);
  Cursor.$f_N_RESIZE__org_gwtproject_dom_style_shared_Cursor = $9.$create__java_lang_String__int($Util.$makeEnumName("N_RESIZE"), Cursor.$ordinal$f_N_RESIZE__org_gwtproject_dom_style_shared_Cursor);
  Cursor.$f_SE_RESIZE__org_gwtproject_dom_style_shared_Cursor = $10.$create__java_lang_String__int($Util.$makeEnumName("SE_RESIZE"), Cursor.$ordinal$f_SE_RESIZE__org_gwtproject_dom_style_shared_Cursor);
  Cursor.$f_SW_RESIZE__org_gwtproject_dom_style_shared_Cursor = $11.$create__java_lang_String__int($Util.$makeEnumName("SW_RESIZE"), Cursor.$ordinal$f_SW_RESIZE__org_gwtproject_dom_style_shared_Cursor);
  Cursor.$f_S_RESIZE__org_gwtproject_dom_style_shared_Cursor = $12.$create__java_lang_String__int($Util.$makeEnumName("S_RESIZE"), Cursor.$ordinal$f_S_RESIZE__org_gwtproject_dom_style_shared_Cursor);
  Cursor.$f_W_RESIZE__org_gwtproject_dom_style_shared_Cursor = $13.$create__java_lang_String__int($Util.$makeEnumName("W_RESIZE"), Cursor.$ordinal$f_W_RESIZE__org_gwtproject_dom_style_shared_Cursor);
  Cursor.$f_TEXT__org_gwtproject_dom_style_shared_Cursor = $14.$create__java_lang_String__int($Util.$makeEnumName("TEXT"), Cursor.$ordinal$f_TEXT__org_gwtproject_dom_style_shared_Cursor);
  Cursor.$f_WAIT__org_gwtproject_dom_style_shared_Cursor = $15.$create__java_lang_String__int($Util.$makeEnumName("WAIT"), Cursor.$ordinal$f_WAIT__org_gwtproject_dom_style_shared_Cursor);
  Cursor.$f_HELP__org_gwtproject_dom_style_shared_Cursor = $16.$create__java_lang_String__int($Util.$makeEnumName("HELP"), Cursor.$ordinal$f_HELP__org_gwtproject_dom_style_shared_Cursor);
  Cursor.$f_COL_RESIZE__org_gwtproject_dom_style_shared_Cursor = $17.$create__java_lang_String__int($Util.$makeEnumName("COL_RESIZE"), Cursor.$ordinal$f_COL_RESIZE__org_gwtproject_dom_style_shared_Cursor);
  Cursor.$f_ROW_RESIZE__org_gwtproject_dom_style_shared_Cursor = $18.$create__java_lang_String__int($Util.$makeEnumName("ROW_RESIZE"), Cursor.$ordinal$f_ROW_RESIZE__org_gwtproject_dom_style_shared_Cursor);
  Cursor.f_namesToValuesMap__org_gwtproject_dom_style_shared_Cursor_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Cursor;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.gwtproject.dom.style.shared.Cursor.$1$impl');
  $10 = goog.module.get('org.gwtproject.dom.style.shared.Cursor.$10$impl');
  $11 = goog.module.get('org.gwtproject.dom.style.shared.Cursor.$11$impl');
  $12 = goog.module.get('org.gwtproject.dom.style.shared.Cursor.$12$impl');
  $13 = goog.module.get('org.gwtproject.dom.style.shared.Cursor.$13$impl');
  $14 = goog.module.get('org.gwtproject.dom.style.shared.Cursor.$14$impl');
  $15 = goog.module.get('org.gwtproject.dom.style.shared.Cursor.$15$impl');
  $16 = goog.module.get('org.gwtproject.dom.style.shared.Cursor.$16$impl');
  $17 = goog.module.get('org.gwtproject.dom.style.shared.Cursor.$17$impl');
  $18 = goog.module.get('org.gwtproject.dom.style.shared.Cursor.$18$impl');
  $2 = goog.module.get('org.gwtproject.dom.style.shared.Cursor.$2$impl');
  $3 = goog.module.get('org.gwtproject.dom.style.shared.Cursor.$3$impl');
  $4 = goog.module.get('org.gwtproject.dom.style.shared.Cursor.$4$impl');
  $5 = goog.module.get('org.gwtproject.dom.style.shared.Cursor.$5$impl');
  $6 = goog.module.get('org.gwtproject.dom.style.shared.Cursor.$6$impl');
  $7 = goog.module.get('org.gwtproject.dom.style.shared.Cursor.$7$impl');
  $8 = goog.module.get('org.gwtproject.dom.style.shared.Cursor.$8$impl');
  $9 = goog.module.get('org.gwtproject.dom.style.shared.Cursor.$9$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(Cursor, 'org.gwtproject.dom.style.shared.Cursor');

HasCssName.$markImplementor(Cursor);

/**@private {!Cursor}*/
Cursor.$f_DEFAULT__org_gwtproject_dom_style_shared_Cursor;
/**@private {!Cursor}*/
Cursor.$f_AUTO__org_gwtproject_dom_style_shared_Cursor;
/**@private {!Cursor}*/
Cursor.$f_CROSSHAIR__org_gwtproject_dom_style_shared_Cursor;
/**@private {!Cursor}*/
Cursor.$f_POINTER__org_gwtproject_dom_style_shared_Cursor;
/**@private {!Cursor}*/
Cursor.$f_MOVE__org_gwtproject_dom_style_shared_Cursor;
/**@private {!Cursor}*/
Cursor.$f_E_RESIZE__org_gwtproject_dom_style_shared_Cursor;
/**@private {!Cursor}*/
Cursor.$f_NE_RESIZE__org_gwtproject_dom_style_shared_Cursor;
/**@private {!Cursor}*/
Cursor.$f_NW_RESIZE__org_gwtproject_dom_style_shared_Cursor;
/**@private {!Cursor}*/
Cursor.$f_N_RESIZE__org_gwtproject_dom_style_shared_Cursor;
/**@private {!Cursor}*/
Cursor.$f_SE_RESIZE__org_gwtproject_dom_style_shared_Cursor;
/**@private {!Cursor}*/
Cursor.$f_SW_RESIZE__org_gwtproject_dom_style_shared_Cursor;
/**@private {!Cursor}*/
Cursor.$f_S_RESIZE__org_gwtproject_dom_style_shared_Cursor;
/**@private {!Cursor}*/
Cursor.$f_W_RESIZE__org_gwtproject_dom_style_shared_Cursor;
/**@private {!Cursor}*/
Cursor.$f_TEXT__org_gwtproject_dom_style_shared_Cursor;
/**@private {!Cursor}*/
Cursor.$f_WAIT__org_gwtproject_dom_style_shared_Cursor;
/**@private {!Cursor}*/
Cursor.$f_HELP__org_gwtproject_dom_style_shared_Cursor;
/**@private {!Cursor}*/
Cursor.$f_COL_RESIZE__org_gwtproject_dom_style_shared_Cursor;
/**@private {!Cursor}*/
Cursor.$f_ROW_RESIZE__org_gwtproject_dom_style_shared_Cursor;
/**@type {Map<?string, !Cursor>}*/
Cursor.f_namesToValuesMap__org_gwtproject_dom_style_shared_Cursor_;
/**@const {number}*/
Cursor.$ordinal$f_DEFAULT__org_gwtproject_dom_style_shared_Cursor = 0;
/**@const {number}*/
Cursor.$ordinal$f_AUTO__org_gwtproject_dom_style_shared_Cursor = 1;
/**@const {number}*/
Cursor.$ordinal$f_CROSSHAIR__org_gwtproject_dom_style_shared_Cursor = 2;
/**@const {number}*/
Cursor.$ordinal$f_POINTER__org_gwtproject_dom_style_shared_Cursor = 3;
/**@const {number}*/
Cursor.$ordinal$f_MOVE__org_gwtproject_dom_style_shared_Cursor = 4;
/**@const {number}*/
Cursor.$ordinal$f_E_RESIZE__org_gwtproject_dom_style_shared_Cursor = 5;
/**@const {number}*/
Cursor.$ordinal$f_NE_RESIZE__org_gwtproject_dom_style_shared_Cursor = 6;
/**@const {number}*/
Cursor.$ordinal$f_NW_RESIZE__org_gwtproject_dom_style_shared_Cursor = 7;
/**@const {number}*/
Cursor.$ordinal$f_N_RESIZE__org_gwtproject_dom_style_shared_Cursor = 8;
/**@const {number}*/
Cursor.$ordinal$f_SE_RESIZE__org_gwtproject_dom_style_shared_Cursor = 9;
/**@const {number}*/
Cursor.$ordinal$f_SW_RESIZE__org_gwtproject_dom_style_shared_Cursor = 10;
/**@const {number}*/
Cursor.$ordinal$f_S_RESIZE__org_gwtproject_dom_style_shared_Cursor = 11;
/**@const {number}*/
Cursor.$ordinal$f_W_RESIZE__org_gwtproject_dom_style_shared_Cursor = 12;
/**@const {number}*/
Cursor.$ordinal$f_TEXT__org_gwtproject_dom_style_shared_Cursor = 13;
/**@const {number}*/
Cursor.$ordinal$f_WAIT__org_gwtproject_dom_style_shared_Cursor = 14;
/**@const {number}*/
Cursor.$ordinal$f_HELP__org_gwtproject_dom_style_shared_Cursor = 15;
/**@const {number}*/
Cursor.$ordinal$f_COL_RESIZE__org_gwtproject_dom_style_shared_Cursor = 16;
/**@const {number}*/
Cursor.$ordinal$f_ROW_RESIZE__org_gwtproject_dom_style_shared_Cursor = 17;

exports = Cursor; 
//# sourceMappingURL=Cursor.js.map
