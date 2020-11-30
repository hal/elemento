goog.module('org.gwtproject.dom.client.DataTransfer.DropEffect$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<DropEffect>}
  */
class DropEffect extends Enum {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DropEffect} */
 static $create__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  let $instance = new DropEffect();
  $instance.$ctor__org_gwtproject_dom_client_DataTransfer_DropEffect__java_lang_String__int($name, $ordinal);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_client_DataTransfer_DropEffect__java_lang_String__int(/** ?string */ $name, /** number */ $ordinal) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
 }
 /** @return {!DropEffect} */
 static m_valueOf__java_lang_String(/** string */ name) {
  DropEffect.$clinit();
  if ($Equality.$same(DropEffect.f_namesToValuesMap__org_gwtproject_dom_client_DataTransfer_DropEffect_, null)) {
   DropEffect.f_namesToValuesMap__org_gwtproject_dom_client_DataTransfer_DropEffect_ = $Enums.createMapFromValues(DropEffect.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, DropEffect.f_namesToValuesMap__org_gwtproject_dom_client_DataTransfer_DropEffect_);
 }
 /** @return {!Array<!DropEffect>} */
 static m_values__() {
  DropEffect.$clinit();
  return /**@type {!Array<DropEffect>}*/ ($Arrays.$init([DropEffect.$f_COPY__org_gwtproject_dom_client_DataTransfer_DropEffect, DropEffect.$f_MOVE__org_gwtproject_dom_client_DataTransfer_DropEffect, DropEffect.$f_LINK__org_gwtproject_dom_client_DataTransfer_DropEffect, DropEffect.$f_NONE__org_gwtproject_dom_client_DataTransfer_DropEffect], DropEffect));
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** DropEffect */ arg0) {
  return super.compareTo(/**@type {DropEffect}*/ ($Casts.$to(arg0, DropEffect)));
 }
 /** @return {!DropEffect} */
 static get f_COPY__org_gwtproject_dom_client_DataTransfer_DropEffect() {
  return (DropEffect.$clinit(), DropEffect.$f_COPY__org_gwtproject_dom_client_DataTransfer_DropEffect);
 }
 /** @return {!DropEffect} */
 static get f_MOVE__org_gwtproject_dom_client_DataTransfer_DropEffect() {
  return (DropEffect.$clinit(), DropEffect.$f_MOVE__org_gwtproject_dom_client_DataTransfer_DropEffect);
 }
 /** @return {!DropEffect} */
 static get f_LINK__org_gwtproject_dom_client_DataTransfer_DropEffect() {
  return (DropEffect.$clinit(), DropEffect.$f_LINK__org_gwtproject_dom_client_DataTransfer_DropEffect);
 }
 /** @return {!DropEffect} */
 static get f_NONE__org_gwtproject_dom_client_DataTransfer_DropEffect() {
  return (DropEffect.$clinit(), DropEffect.$f_NONE__org_gwtproject_dom_client_DataTransfer_DropEffect);
 }
 
 static $clinit() {
  DropEffect.$clinit = () =>{};
  DropEffect.$loadModules();
  Enum.$clinit();
  DropEffect.$f_COPY__org_gwtproject_dom_client_DataTransfer_DropEffect = DropEffect.$create__java_lang_String__int($Util.$makeEnumName("COPY"), DropEffect.$ordinal$f_COPY__org_gwtproject_dom_client_DataTransfer_DropEffect);
  DropEffect.$f_MOVE__org_gwtproject_dom_client_DataTransfer_DropEffect = DropEffect.$create__java_lang_String__int($Util.$makeEnumName("MOVE"), DropEffect.$ordinal$f_MOVE__org_gwtproject_dom_client_DataTransfer_DropEffect);
  DropEffect.$f_LINK__org_gwtproject_dom_client_DataTransfer_DropEffect = DropEffect.$create__java_lang_String__int($Util.$makeEnumName("LINK"), DropEffect.$ordinal$f_LINK__org_gwtproject_dom_client_DataTransfer_DropEffect);
  DropEffect.$f_NONE__org_gwtproject_dom_client_DataTransfer_DropEffect = DropEffect.$create__java_lang_String__int($Util.$makeEnumName("NONE"), DropEffect.$ordinal$f_NONE__org_gwtproject_dom_client_DataTransfer_DropEffect);
  DropEffect.f_namesToValuesMap__org_gwtproject_dom_client_DataTransfer_DropEffect_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DropEffect;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(DropEffect, 'org.gwtproject.dom.client.DataTransfer$DropEffect');

/**@private {!DropEffect}*/
DropEffect.$f_COPY__org_gwtproject_dom_client_DataTransfer_DropEffect;
/**@private {!DropEffect}*/
DropEffect.$f_MOVE__org_gwtproject_dom_client_DataTransfer_DropEffect;
/**@private {!DropEffect}*/
DropEffect.$f_LINK__org_gwtproject_dom_client_DataTransfer_DropEffect;
/**@private {!DropEffect}*/
DropEffect.$f_NONE__org_gwtproject_dom_client_DataTransfer_DropEffect;
/**@type {Map<?string, !DropEffect>}*/
DropEffect.f_namesToValuesMap__org_gwtproject_dom_client_DataTransfer_DropEffect_;
/**@const {number}*/
DropEffect.$ordinal$f_COPY__org_gwtproject_dom_client_DataTransfer_DropEffect = 0;
/**@const {number}*/
DropEffect.$ordinal$f_MOVE__org_gwtproject_dom_client_DataTransfer_DropEffect = 1;
/**@const {number}*/
DropEffect.$ordinal$f_LINK__org_gwtproject_dom_client_DataTransfer_DropEffect = 2;
/**@const {number}*/
DropEffect.$ordinal$f_NONE__org_gwtproject_dom_client_DataTransfer_DropEffect = 3;

exports = DropEffect; 
//# sourceMappingURL=DataTransfer$DropEffect.js.map
