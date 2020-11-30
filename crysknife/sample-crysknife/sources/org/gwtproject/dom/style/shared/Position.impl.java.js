goog.module('org.gwtproject.dom.style.shared.Position$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasCssName = goog.require('org.gwtproject.dom.style.shared.HasCssName$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $1 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Position.$1$impl');
let $2 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Position.$2$impl');
let $3 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Position.$3$impl');
let $4 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Position.$4$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @abstract
 * @extends {Enum<Position>}
 * @implements {HasCssName}
  */
class Position extends Enum {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_gwtproject_dom_style_shared_Position__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /** @abstract @override @return {?string} */
 m_getCssName__() {}
 /** @return {!Position} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Position.$clinit();
  if ($Equality.$same(Position.f_namesToValuesMap__org_gwtproject_dom_style_shared_Position_, null)) {
   Position.f_namesToValuesMap__org_gwtproject_dom_style_shared_Position_ = $Enums.createMapFromValues(Position.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Position.f_namesToValuesMap__org_gwtproject_dom_style_shared_Position_);
 }
 /** @return {!Array<!Position>} */
 static m_values__() {
  Position.$clinit();
  return /**@type {!Array<Position>}*/ ($Arrays.$init([Position.$f_STATIC__org_gwtproject_dom_style_shared_Position, Position.$f_RELATIVE__org_gwtproject_dom_style_shared_Position, Position.$f_ABSOLUTE__org_gwtproject_dom_style_shared_Position, Position.$f_FIXED__org_gwtproject_dom_style_shared_Position], Position));
 }
 /** @return {!Position} */
 static get f_STATIC__org_gwtproject_dom_style_shared_Position() {
  return (Position.$clinit(), Position.$f_STATIC__org_gwtproject_dom_style_shared_Position);
 }
 /** @return {!Position} */
 static get f_RELATIVE__org_gwtproject_dom_style_shared_Position() {
  return (Position.$clinit(), Position.$f_RELATIVE__org_gwtproject_dom_style_shared_Position);
 }
 /** @return {!Position} */
 static get f_ABSOLUTE__org_gwtproject_dom_style_shared_Position() {
  return (Position.$clinit(), Position.$f_ABSOLUTE__org_gwtproject_dom_style_shared_Position);
 }
 /** @return {!Position} */
 static get f_FIXED__org_gwtproject_dom_style_shared_Position() {
  return (Position.$clinit(), Position.$f_FIXED__org_gwtproject_dom_style_shared_Position);
 }
 
 static $clinit() {
  Position.$clinit = () =>{};
  Position.$loadModules();
  Enum.$clinit();
  Position.$f_STATIC__org_gwtproject_dom_style_shared_Position = $1.$create__java_lang_String__int($Util.$makeEnumName("STATIC"), Position.$ordinal$f_STATIC__org_gwtproject_dom_style_shared_Position);
  Position.$f_RELATIVE__org_gwtproject_dom_style_shared_Position = $2.$create__java_lang_String__int($Util.$makeEnumName("RELATIVE"), Position.$ordinal$f_RELATIVE__org_gwtproject_dom_style_shared_Position);
  Position.$f_ABSOLUTE__org_gwtproject_dom_style_shared_Position = $3.$create__java_lang_String__int($Util.$makeEnumName("ABSOLUTE"), Position.$ordinal$f_ABSOLUTE__org_gwtproject_dom_style_shared_Position);
  Position.$f_FIXED__org_gwtproject_dom_style_shared_Position = $4.$create__java_lang_String__int($Util.$makeEnumName("FIXED"), Position.$ordinal$f_FIXED__org_gwtproject_dom_style_shared_Position);
  Position.f_namesToValuesMap__org_gwtproject_dom_style_shared_Position_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Position;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.gwtproject.dom.style.shared.Position.$1$impl');
  $2 = goog.module.get('org.gwtproject.dom.style.shared.Position.$2$impl');
  $3 = goog.module.get('org.gwtproject.dom.style.shared.Position.$3$impl');
  $4 = goog.module.get('org.gwtproject.dom.style.shared.Position.$4$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(Position, 'org.gwtproject.dom.style.shared.Position');

HasCssName.$markImplementor(Position);

/**@private {!Position}*/
Position.$f_STATIC__org_gwtproject_dom_style_shared_Position;
/**@private {!Position}*/
Position.$f_RELATIVE__org_gwtproject_dom_style_shared_Position;
/**@private {!Position}*/
Position.$f_ABSOLUTE__org_gwtproject_dom_style_shared_Position;
/**@private {!Position}*/
Position.$f_FIXED__org_gwtproject_dom_style_shared_Position;
/**@type {Map<?string, !Position>}*/
Position.f_namesToValuesMap__org_gwtproject_dom_style_shared_Position_;
/**@const {number}*/
Position.$ordinal$f_STATIC__org_gwtproject_dom_style_shared_Position = 0;
/**@const {number}*/
Position.$ordinal$f_RELATIVE__org_gwtproject_dom_style_shared_Position = 1;
/**@const {number}*/
Position.$ordinal$f_ABSOLUTE__org_gwtproject_dom_style_shared_Position = 2;
/**@const {number}*/
Position.$ordinal$f_FIXED__org_gwtproject_dom_style_shared_Position = 3;

exports = Position; 
//# sourceMappingURL=Position.js.map
