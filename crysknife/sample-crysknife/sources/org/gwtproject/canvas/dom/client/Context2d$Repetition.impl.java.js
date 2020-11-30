goog.module('org.gwtproject.canvas.dom.client.Context2d.Repetition$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<Repetition>}
  */
class Repetition extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_gwtproject_canvas_dom_client_Context2d_Repetition_;
 }
 /** @return {!Repetition} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Repetition();
  $instance.$ctor__org_gwtproject_canvas_dom_client_Context2d_Repetition__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_gwtproject_canvas_dom_client_Context2d_Repetition__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_gwtproject_canvas_dom_client_Context2d_Repetition_ = value;
 }
 /** @return {?string} */
 m_getValue__() {
  return this.f_value__org_gwtproject_canvas_dom_client_Context2d_Repetition_;
 }
 /** @return {!Repetition} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Repetition.$clinit();
  if ($Equality.$same(Repetition.f_namesToValuesMap__org_gwtproject_canvas_dom_client_Context2d_Repetition_, null)) {
   Repetition.f_namesToValuesMap__org_gwtproject_canvas_dom_client_Context2d_Repetition_ = $Enums.createMapFromValues(Repetition.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Repetition.f_namesToValuesMap__org_gwtproject_canvas_dom_client_Context2d_Repetition_);
 }
 /** @return {!Array<!Repetition>} */
 static m_values__() {
  Repetition.$clinit();
  return /**@type {!Array<Repetition>}*/ ($Arrays.$init([Repetition.$f_NO_REPEAT__org_gwtproject_canvas_dom_client_Context2d_Repetition, Repetition.$f_REPEAT__org_gwtproject_canvas_dom_client_Context2d_Repetition, Repetition.$f_REPEAT_X__org_gwtproject_canvas_dom_client_Context2d_Repetition, Repetition.$f_REPEAT_Y__org_gwtproject_canvas_dom_client_Context2d_Repetition], Repetition));
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** Repetition */ arg0) {
  return super.compareTo(/**@type {Repetition}*/ ($Casts.$to(arg0, Repetition)));
 }
 /** @return {!Repetition} */
 static get f_NO_REPEAT__org_gwtproject_canvas_dom_client_Context2d_Repetition() {
  return (Repetition.$clinit(), Repetition.$f_NO_REPEAT__org_gwtproject_canvas_dom_client_Context2d_Repetition);
 }
 /** @return {!Repetition} */
 static get f_REPEAT__org_gwtproject_canvas_dom_client_Context2d_Repetition() {
  return (Repetition.$clinit(), Repetition.$f_REPEAT__org_gwtproject_canvas_dom_client_Context2d_Repetition);
 }
 /** @return {!Repetition} */
 static get f_REPEAT_X__org_gwtproject_canvas_dom_client_Context2d_Repetition() {
  return (Repetition.$clinit(), Repetition.$f_REPEAT_X__org_gwtproject_canvas_dom_client_Context2d_Repetition);
 }
 /** @return {!Repetition} */
 static get f_REPEAT_Y__org_gwtproject_canvas_dom_client_Context2d_Repetition() {
  return (Repetition.$clinit(), Repetition.$f_REPEAT_Y__org_gwtproject_canvas_dom_client_Context2d_Repetition);
 }
 
 static $clinit() {
  Repetition.$clinit = () =>{};
  Repetition.$loadModules();
  Enum.$clinit();
  Repetition.$f_NO_REPEAT__org_gwtproject_canvas_dom_client_Context2d_Repetition = Repetition.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("NO_REPEAT"), Repetition.$ordinal$f_NO_REPEAT__org_gwtproject_canvas_dom_client_Context2d_Repetition, "no-repeat");
  Repetition.$f_REPEAT__org_gwtproject_canvas_dom_client_Context2d_Repetition = Repetition.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("REPEAT"), Repetition.$ordinal$f_REPEAT__org_gwtproject_canvas_dom_client_Context2d_Repetition, "repeat");
  Repetition.$f_REPEAT_X__org_gwtproject_canvas_dom_client_Context2d_Repetition = Repetition.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("REPEAT_X"), Repetition.$ordinal$f_REPEAT_X__org_gwtproject_canvas_dom_client_Context2d_Repetition, "repeat-x");
  Repetition.$f_REPEAT_Y__org_gwtproject_canvas_dom_client_Context2d_Repetition = Repetition.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("REPEAT_Y"), Repetition.$ordinal$f_REPEAT_Y__org_gwtproject_canvas_dom_client_Context2d_Repetition, "repeat-y");
  Repetition.f_namesToValuesMap__org_gwtproject_canvas_dom_client_Context2d_Repetition_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Repetition;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(Repetition, 'org.gwtproject.canvas.dom.client.Context2d$Repetition');

/**@private {!Repetition}*/
Repetition.$f_NO_REPEAT__org_gwtproject_canvas_dom_client_Context2d_Repetition;
/**@private {!Repetition}*/
Repetition.$f_REPEAT__org_gwtproject_canvas_dom_client_Context2d_Repetition;
/**@private {!Repetition}*/
Repetition.$f_REPEAT_X__org_gwtproject_canvas_dom_client_Context2d_Repetition;
/**@private {!Repetition}*/
Repetition.$f_REPEAT_Y__org_gwtproject_canvas_dom_client_Context2d_Repetition;
/**@type {Map<?string, !Repetition>}*/
Repetition.f_namesToValuesMap__org_gwtproject_canvas_dom_client_Context2d_Repetition_;
/**@const {number}*/
Repetition.$ordinal$f_NO_REPEAT__org_gwtproject_canvas_dom_client_Context2d_Repetition = 0;
/**@const {number}*/
Repetition.$ordinal$f_REPEAT__org_gwtproject_canvas_dom_client_Context2d_Repetition = 1;
/**@const {number}*/
Repetition.$ordinal$f_REPEAT_X__org_gwtproject_canvas_dom_client_Context2d_Repetition = 2;
/**@const {number}*/
Repetition.$ordinal$f_REPEAT_Y__org_gwtproject_canvas_dom_client_Context2d_Repetition = 3;

exports = Repetition; 
//# sourceMappingURL=Context2d$Repetition.js.map
