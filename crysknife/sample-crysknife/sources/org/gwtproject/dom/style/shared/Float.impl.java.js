goog.module('org.gwtproject.dom.style.shared.Float$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');
const HasCssName = goog.require('org.gwtproject.dom.style.shared.HasCssName$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $1 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Float.$1$impl');
let $2 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Float.$2$impl');
let $3 = goog.forwardDeclare('org.gwtproject.dom.style.shared.Float.$3$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @abstract
 * @extends {Enum<Float>}
 * @implements {HasCssName}
  */
class Float extends Enum {
 /** @protected */
 constructor() {
  super();
 }
 
 $ctor__org_gwtproject_dom_style_shared_Float__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /** @abstract @override @return {?string} */
 m_getCssName__() {}
 /** @return {!Float} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Float.$clinit();
  if ($Equality.$same(Float.f_namesToValuesMap__org_gwtproject_dom_style_shared_Float_, null)) {
   Float.f_namesToValuesMap__org_gwtproject_dom_style_shared_Float_ = $Enums.createMapFromValues(Float.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Float.f_namesToValuesMap__org_gwtproject_dom_style_shared_Float_);
 }
 /** @return {!Array<!Float>} */
 static m_values__() {
  Float.$clinit();
  return /**@type {!Array<Float>}*/ ($Arrays.$init([Float.$f_LEFT__org_gwtproject_dom_style_shared_Float, Float.$f_RIGHT__org_gwtproject_dom_style_shared_Float, Float.$f_NONE__org_gwtproject_dom_style_shared_Float], Float));
 }
 /** @return {!Float} */
 static get f_LEFT__org_gwtproject_dom_style_shared_Float() {
  return (Float.$clinit(), Float.$f_LEFT__org_gwtproject_dom_style_shared_Float);
 }
 /** @return {!Float} */
 static get f_RIGHT__org_gwtproject_dom_style_shared_Float() {
  return (Float.$clinit(), Float.$f_RIGHT__org_gwtproject_dom_style_shared_Float);
 }
 /** @return {!Float} */
 static get f_NONE__org_gwtproject_dom_style_shared_Float() {
  return (Float.$clinit(), Float.$f_NONE__org_gwtproject_dom_style_shared_Float);
 }
 
 static $clinit() {
  Float.$clinit = () =>{};
  Float.$loadModules();
  Enum.$clinit();
  Float.$f_LEFT__org_gwtproject_dom_style_shared_Float = $1.$create__java_lang_String__int($Util.$makeEnumName("LEFT"), Float.$ordinal$f_LEFT__org_gwtproject_dom_style_shared_Float);
  Float.$f_RIGHT__org_gwtproject_dom_style_shared_Float = $2.$create__java_lang_String__int($Util.$makeEnumName("RIGHT"), Float.$ordinal$f_RIGHT__org_gwtproject_dom_style_shared_Float);
  Float.$f_NONE__org_gwtproject_dom_style_shared_Float = $3.$create__java_lang_String__int($Util.$makeEnumName("NONE"), Float.$ordinal$f_NONE__org_gwtproject_dom_style_shared_Float);
  Float.f_namesToValuesMap__org_gwtproject_dom_style_shared_Float_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Float;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $1 = goog.module.get('org.gwtproject.dom.style.shared.Float.$1$impl');
  $2 = goog.module.get('org.gwtproject.dom.style.shared.Float.$2$impl');
  $3 = goog.module.get('org.gwtproject.dom.style.shared.Float.$3$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(Float, 'org.gwtproject.dom.style.shared.Float');

HasCssName.$markImplementor(Float);

/**@private {!Float}*/
Float.$f_LEFT__org_gwtproject_dom_style_shared_Float;
/**@private {!Float}*/
Float.$f_RIGHT__org_gwtproject_dom_style_shared_Float;
/**@private {!Float}*/
Float.$f_NONE__org_gwtproject_dom_style_shared_Float;
/**@type {Map<?string, !Float>}*/
Float.f_namesToValuesMap__org_gwtproject_dom_style_shared_Float_;
/**@const {number}*/
Float.$ordinal$f_LEFT__org_gwtproject_dom_style_shared_Float = 0;
/**@const {number}*/
Float.$ordinal$f_RIGHT__org_gwtproject_dom_style_shared_Float = 1;
/**@const {number}*/
Float.$ordinal$f_NONE__org_gwtproject_dom_style_shared_Float = 2;

exports = Float; 
//# sourceMappingURL=Float.js.map
