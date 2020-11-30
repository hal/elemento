goog.module('org.gwtproject.canvas.dom.client.Context2d.Composite$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<Composite>}
  */
class Composite extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_gwtproject_canvas_dom_client_Context2d_Composite_;
 }
 /** @return {!Composite} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new Composite();
  $instance.$ctor__org_gwtproject_canvas_dom_client_Context2d_Composite__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_gwtproject_canvas_dom_client_Context2d_Composite__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_gwtproject_canvas_dom_client_Context2d_Composite_ = value;
 }
 /** @return {?string} */
 m_getValue__() {
  return this.f_value__org_gwtproject_canvas_dom_client_Context2d_Composite_;
 }
 /** @return {!Composite} */
 static m_valueOf__java_lang_String(/** string */ name) {
  Composite.$clinit();
  if ($Equality.$same(Composite.f_namesToValuesMap__org_gwtproject_canvas_dom_client_Context2d_Composite_, null)) {
   Composite.f_namesToValuesMap__org_gwtproject_canvas_dom_client_Context2d_Composite_ = $Enums.createMapFromValues(Composite.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, Composite.f_namesToValuesMap__org_gwtproject_canvas_dom_client_Context2d_Composite_);
 }
 /** @return {!Array<!Composite>} */
 static m_values__() {
  Composite.$clinit();
  return /**@type {!Array<Composite>}*/ ($Arrays.$init([Composite.$f_COPY__org_gwtproject_canvas_dom_client_Context2d_Composite, Composite.$f_DESTINATION_ATOP__org_gwtproject_canvas_dom_client_Context2d_Composite, Composite.$f_DESTINATION_IN__org_gwtproject_canvas_dom_client_Context2d_Composite, Composite.$f_DESTINATION_OUT__org_gwtproject_canvas_dom_client_Context2d_Composite, Composite.$f_DESTINATION_OVER__org_gwtproject_canvas_dom_client_Context2d_Composite, Composite.$f_LIGHTER__org_gwtproject_canvas_dom_client_Context2d_Composite, Composite.$f_SOURCE_ATOP__org_gwtproject_canvas_dom_client_Context2d_Composite, Composite.$f_SOURCE_IN__org_gwtproject_canvas_dom_client_Context2d_Composite, Composite.$f_SOURCE_OUT__org_gwtproject_canvas_dom_client_Context2d_Composite, Composite.$f_SOURCE_OVER__org_gwtproject_canvas_dom_client_Context2d_Composite, Composite.$f_XOR__org_gwtproject_canvas_dom_client_Context2d_Composite], Composite));
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** Composite */ arg0) {
  return super.compareTo(/**@type {Composite}*/ ($Casts.$to(arg0, Composite)));
 }
 /** @return {!Composite} */
 static get f_COPY__org_gwtproject_canvas_dom_client_Context2d_Composite() {
  return (Composite.$clinit(), Composite.$f_COPY__org_gwtproject_canvas_dom_client_Context2d_Composite);
 }
 /** @return {!Composite} */
 static get f_DESTINATION_ATOP__org_gwtproject_canvas_dom_client_Context2d_Composite() {
  return (Composite.$clinit(), Composite.$f_DESTINATION_ATOP__org_gwtproject_canvas_dom_client_Context2d_Composite);
 }
 /** @return {!Composite} */
 static get f_DESTINATION_IN__org_gwtproject_canvas_dom_client_Context2d_Composite() {
  return (Composite.$clinit(), Composite.$f_DESTINATION_IN__org_gwtproject_canvas_dom_client_Context2d_Composite);
 }
 /** @return {!Composite} */
 static get f_DESTINATION_OUT__org_gwtproject_canvas_dom_client_Context2d_Composite() {
  return (Composite.$clinit(), Composite.$f_DESTINATION_OUT__org_gwtproject_canvas_dom_client_Context2d_Composite);
 }
 /** @return {!Composite} */
 static get f_DESTINATION_OVER__org_gwtproject_canvas_dom_client_Context2d_Composite() {
  return (Composite.$clinit(), Composite.$f_DESTINATION_OVER__org_gwtproject_canvas_dom_client_Context2d_Composite);
 }
 /** @return {!Composite} */
 static get f_LIGHTER__org_gwtproject_canvas_dom_client_Context2d_Composite() {
  return (Composite.$clinit(), Composite.$f_LIGHTER__org_gwtproject_canvas_dom_client_Context2d_Composite);
 }
 /** @return {!Composite} */
 static get f_SOURCE_ATOP__org_gwtproject_canvas_dom_client_Context2d_Composite() {
  return (Composite.$clinit(), Composite.$f_SOURCE_ATOP__org_gwtproject_canvas_dom_client_Context2d_Composite);
 }
 /** @return {!Composite} */
 static get f_SOURCE_IN__org_gwtproject_canvas_dom_client_Context2d_Composite() {
  return (Composite.$clinit(), Composite.$f_SOURCE_IN__org_gwtproject_canvas_dom_client_Context2d_Composite);
 }
 /** @return {!Composite} */
 static get f_SOURCE_OUT__org_gwtproject_canvas_dom_client_Context2d_Composite() {
  return (Composite.$clinit(), Composite.$f_SOURCE_OUT__org_gwtproject_canvas_dom_client_Context2d_Composite);
 }
 /** @return {!Composite} */
 static get f_SOURCE_OVER__org_gwtproject_canvas_dom_client_Context2d_Composite() {
  return (Composite.$clinit(), Composite.$f_SOURCE_OVER__org_gwtproject_canvas_dom_client_Context2d_Composite);
 }
 /** @return {!Composite} */
 static get f_XOR__org_gwtproject_canvas_dom_client_Context2d_Composite() {
  return (Composite.$clinit(), Composite.$f_XOR__org_gwtproject_canvas_dom_client_Context2d_Composite);
 }
 
 static $clinit() {
  Composite.$clinit = () =>{};
  Composite.$loadModules();
  Enum.$clinit();
  Composite.$f_COPY__org_gwtproject_canvas_dom_client_Context2d_Composite = Composite.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("COPY"), Composite.$ordinal$f_COPY__org_gwtproject_canvas_dom_client_Context2d_Composite, "copy");
  Composite.$f_DESTINATION_ATOP__org_gwtproject_canvas_dom_client_Context2d_Composite = Composite.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DESTINATION_ATOP"), Composite.$ordinal$f_DESTINATION_ATOP__org_gwtproject_canvas_dom_client_Context2d_Composite, "destination-atop");
  Composite.$f_DESTINATION_IN__org_gwtproject_canvas_dom_client_Context2d_Composite = Composite.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DESTINATION_IN"), Composite.$ordinal$f_DESTINATION_IN__org_gwtproject_canvas_dom_client_Context2d_Composite, "destination-in");
  Composite.$f_DESTINATION_OUT__org_gwtproject_canvas_dom_client_Context2d_Composite = Composite.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DESTINATION_OUT"), Composite.$ordinal$f_DESTINATION_OUT__org_gwtproject_canvas_dom_client_Context2d_Composite, "destination-out");
  Composite.$f_DESTINATION_OVER__org_gwtproject_canvas_dom_client_Context2d_Composite = Composite.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("DESTINATION_OVER"), Composite.$ordinal$f_DESTINATION_OVER__org_gwtproject_canvas_dom_client_Context2d_Composite, "destination-over");
  Composite.$f_LIGHTER__org_gwtproject_canvas_dom_client_Context2d_Composite = Composite.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LIGHTER"), Composite.$ordinal$f_LIGHTER__org_gwtproject_canvas_dom_client_Context2d_Composite, "lighter");
  Composite.$f_SOURCE_ATOP__org_gwtproject_canvas_dom_client_Context2d_Composite = Composite.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SOURCE_ATOP"), Composite.$ordinal$f_SOURCE_ATOP__org_gwtproject_canvas_dom_client_Context2d_Composite, "source-atop");
  Composite.$f_SOURCE_IN__org_gwtproject_canvas_dom_client_Context2d_Composite = Composite.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SOURCE_IN"), Composite.$ordinal$f_SOURCE_IN__org_gwtproject_canvas_dom_client_Context2d_Composite, "source-in");
  Composite.$f_SOURCE_OUT__org_gwtproject_canvas_dom_client_Context2d_Composite = Composite.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SOURCE_OUT"), Composite.$ordinal$f_SOURCE_OUT__org_gwtproject_canvas_dom_client_Context2d_Composite, "source-out");
  Composite.$f_SOURCE_OVER__org_gwtproject_canvas_dom_client_Context2d_Composite = Composite.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("SOURCE_OVER"), Composite.$ordinal$f_SOURCE_OVER__org_gwtproject_canvas_dom_client_Context2d_Composite, "source-over");
  Composite.$f_XOR__org_gwtproject_canvas_dom_client_Context2d_Composite = Composite.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("XOR"), Composite.$ordinal$f_XOR__org_gwtproject_canvas_dom_client_Context2d_Composite, "xor");
  Composite.f_namesToValuesMap__org_gwtproject_canvas_dom_client_Context2d_Composite_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof Composite;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(Composite, 'org.gwtproject.canvas.dom.client.Context2d$Composite');

/**@private {!Composite}*/
Composite.$f_COPY__org_gwtproject_canvas_dom_client_Context2d_Composite;
/**@private {!Composite}*/
Composite.$f_DESTINATION_ATOP__org_gwtproject_canvas_dom_client_Context2d_Composite;
/**@private {!Composite}*/
Composite.$f_DESTINATION_IN__org_gwtproject_canvas_dom_client_Context2d_Composite;
/**@private {!Composite}*/
Composite.$f_DESTINATION_OUT__org_gwtproject_canvas_dom_client_Context2d_Composite;
/**@private {!Composite}*/
Composite.$f_DESTINATION_OVER__org_gwtproject_canvas_dom_client_Context2d_Composite;
/**@private {!Composite}*/
Composite.$f_LIGHTER__org_gwtproject_canvas_dom_client_Context2d_Composite;
/**@private {!Composite}*/
Composite.$f_SOURCE_ATOP__org_gwtproject_canvas_dom_client_Context2d_Composite;
/**@private {!Composite}*/
Composite.$f_SOURCE_IN__org_gwtproject_canvas_dom_client_Context2d_Composite;
/**@private {!Composite}*/
Composite.$f_SOURCE_OUT__org_gwtproject_canvas_dom_client_Context2d_Composite;
/**@private {!Composite}*/
Composite.$f_SOURCE_OVER__org_gwtproject_canvas_dom_client_Context2d_Composite;
/**@private {!Composite}*/
Composite.$f_XOR__org_gwtproject_canvas_dom_client_Context2d_Composite;
/**@type {Map<?string, !Composite>}*/
Composite.f_namesToValuesMap__org_gwtproject_canvas_dom_client_Context2d_Composite_;
/**@const {number}*/
Composite.$ordinal$f_COPY__org_gwtproject_canvas_dom_client_Context2d_Composite = 0;
/**@const {number}*/
Composite.$ordinal$f_DESTINATION_ATOP__org_gwtproject_canvas_dom_client_Context2d_Composite = 1;
/**@const {number}*/
Composite.$ordinal$f_DESTINATION_IN__org_gwtproject_canvas_dom_client_Context2d_Composite = 2;
/**@const {number}*/
Composite.$ordinal$f_DESTINATION_OUT__org_gwtproject_canvas_dom_client_Context2d_Composite = 3;
/**@const {number}*/
Composite.$ordinal$f_DESTINATION_OVER__org_gwtproject_canvas_dom_client_Context2d_Composite = 4;
/**@const {number}*/
Composite.$ordinal$f_LIGHTER__org_gwtproject_canvas_dom_client_Context2d_Composite = 5;
/**@const {number}*/
Composite.$ordinal$f_SOURCE_ATOP__org_gwtproject_canvas_dom_client_Context2d_Composite = 6;
/**@const {number}*/
Composite.$ordinal$f_SOURCE_IN__org_gwtproject_canvas_dom_client_Context2d_Composite = 7;
/**@const {number}*/
Composite.$ordinal$f_SOURCE_OUT__org_gwtproject_canvas_dom_client_Context2d_Composite = 8;
/**@const {number}*/
Composite.$ordinal$f_SOURCE_OVER__org_gwtproject_canvas_dom_client_Context2d_Composite = 9;
/**@const {number}*/
Composite.$ordinal$f_XOR__org_gwtproject_canvas_dom_client_Context2d_Composite = 10;

exports = Composite; 
//# sourceMappingURL=Context2d$Composite.js.map
