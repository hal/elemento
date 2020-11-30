goog.module('org.gwtproject.canvas.dom.client.Context2d.LineJoin$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<LineJoin>}
  */
class LineJoin extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_gwtproject_canvas_dom_client_Context2d_LineJoin_;
 }
 /** @return {!LineJoin} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new LineJoin();
  $instance.$ctor__org_gwtproject_canvas_dom_client_Context2d_LineJoin__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_gwtproject_canvas_dom_client_Context2d_LineJoin__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_gwtproject_canvas_dom_client_Context2d_LineJoin_ = value;
 }
 /** @return {?string} */
 m_getValue__() {
  return this.f_value__org_gwtproject_canvas_dom_client_Context2d_LineJoin_;
 }
 /** @return {!LineJoin} */
 static m_valueOf__java_lang_String(/** string */ name) {
  LineJoin.$clinit();
  if ($Equality.$same(LineJoin.f_namesToValuesMap__org_gwtproject_canvas_dom_client_Context2d_LineJoin_, null)) {
   LineJoin.f_namesToValuesMap__org_gwtproject_canvas_dom_client_Context2d_LineJoin_ = $Enums.createMapFromValues(LineJoin.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, LineJoin.f_namesToValuesMap__org_gwtproject_canvas_dom_client_Context2d_LineJoin_);
 }
 /** @return {!Array<!LineJoin>} */
 static m_values__() {
  LineJoin.$clinit();
  return /**@type {!Array<LineJoin>}*/ ($Arrays.$init([LineJoin.$f_BEVEL__org_gwtproject_canvas_dom_client_Context2d_LineJoin, LineJoin.$f_MITER__org_gwtproject_canvas_dom_client_Context2d_LineJoin, LineJoin.$f_ROUND__org_gwtproject_canvas_dom_client_Context2d_LineJoin], LineJoin));
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** LineJoin */ arg0) {
  return super.compareTo(/**@type {LineJoin}*/ ($Casts.$to(arg0, LineJoin)));
 }
 /** @return {!LineJoin} */
 static get f_BEVEL__org_gwtproject_canvas_dom_client_Context2d_LineJoin() {
  return (LineJoin.$clinit(), LineJoin.$f_BEVEL__org_gwtproject_canvas_dom_client_Context2d_LineJoin);
 }
 /** @return {!LineJoin} */
 static get f_MITER__org_gwtproject_canvas_dom_client_Context2d_LineJoin() {
  return (LineJoin.$clinit(), LineJoin.$f_MITER__org_gwtproject_canvas_dom_client_Context2d_LineJoin);
 }
 /** @return {!LineJoin} */
 static get f_ROUND__org_gwtproject_canvas_dom_client_Context2d_LineJoin() {
  return (LineJoin.$clinit(), LineJoin.$f_ROUND__org_gwtproject_canvas_dom_client_Context2d_LineJoin);
 }
 
 static $clinit() {
  LineJoin.$clinit = () =>{};
  LineJoin.$loadModules();
  Enum.$clinit();
  LineJoin.$f_BEVEL__org_gwtproject_canvas_dom_client_Context2d_LineJoin = LineJoin.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("BEVEL"), LineJoin.$ordinal$f_BEVEL__org_gwtproject_canvas_dom_client_Context2d_LineJoin, "bevel");
  LineJoin.$f_MITER__org_gwtproject_canvas_dom_client_Context2d_LineJoin = LineJoin.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("MITER"), LineJoin.$ordinal$f_MITER__org_gwtproject_canvas_dom_client_Context2d_LineJoin, "miter");
  LineJoin.$f_ROUND__org_gwtproject_canvas_dom_client_Context2d_LineJoin = LineJoin.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("ROUND"), LineJoin.$ordinal$f_ROUND__org_gwtproject_canvas_dom_client_Context2d_LineJoin, "round");
  LineJoin.f_namesToValuesMap__org_gwtproject_canvas_dom_client_Context2d_LineJoin_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof LineJoin;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(LineJoin, 'org.gwtproject.canvas.dom.client.Context2d$LineJoin');

/**@private {!LineJoin}*/
LineJoin.$f_BEVEL__org_gwtproject_canvas_dom_client_Context2d_LineJoin;
/**@private {!LineJoin}*/
LineJoin.$f_MITER__org_gwtproject_canvas_dom_client_Context2d_LineJoin;
/**@private {!LineJoin}*/
LineJoin.$f_ROUND__org_gwtproject_canvas_dom_client_Context2d_LineJoin;
/**@type {Map<?string, !LineJoin>}*/
LineJoin.f_namesToValuesMap__org_gwtproject_canvas_dom_client_Context2d_LineJoin_;
/**@const {number}*/
LineJoin.$ordinal$f_BEVEL__org_gwtproject_canvas_dom_client_Context2d_LineJoin = 0;
/**@const {number}*/
LineJoin.$ordinal$f_MITER__org_gwtproject_canvas_dom_client_Context2d_LineJoin = 1;
/**@const {number}*/
LineJoin.$ordinal$f_ROUND__org_gwtproject_canvas_dom_client_Context2d_LineJoin = 2;

exports = LineJoin; 
//# sourceMappingURL=Context2d$LineJoin.js.map
