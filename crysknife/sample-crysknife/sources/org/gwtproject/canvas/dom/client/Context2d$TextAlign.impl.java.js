goog.module('org.gwtproject.canvas.dom.client.Context2d.TextAlign$impl');

const Enum = goog.require('java.lang.Enum$impl');
const $Util = goog.require('nativebootstrap.Util$impl');

let $Equality = goog.forwardDeclare('nativebootstrap.Equality$impl');
let $Arrays = goog.forwardDeclare('vmbootstrap.Arrays$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Enums = goog.forwardDeclare('vmbootstrap.Enums$impl');

/**
 * @extends {Enum<TextAlign>}
  */
class TextAlign extends Enum {
 /** @protected */
 constructor() {
  super();
  /**@type {?string}*/
  this.f_value__org_gwtproject_canvas_dom_client_Context2d_TextAlign_;
 }
 /** @return {!TextAlign} */
 static $create__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  let $instance = new TextAlign();
  $instance.$ctor__org_gwtproject_canvas_dom_client_Context2d_TextAlign__java_lang_String__int__java_lang_String($name, $ordinal, value);
  return $instance;
 }
 
 $ctor__org_gwtproject_canvas_dom_client_Context2d_TextAlign__java_lang_String__int__java_lang_String(/** ?string */ $name, /** number */ $ordinal, /** ?string */ value) {
  this.f_name__java_lang_Enum_ = $name;
  this.f_ordinal__java_lang_Enum_ = $ordinal;
  this.$ctor__java_lang_Enum__java_lang_String__int($name, $ordinal);
  this.f_value__org_gwtproject_canvas_dom_client_Context2d_TextAlign_ = value;
 }
 /** @return {?string} */
 m_getValue__() {
  return this.f_value__org_gwtproject_canvas_dom_client_Context2d_TextAlign_;
 }
 /** @return {!TextAlign} */
 static m_valueOf__java_lang_String(/** string */ name) {
  TextAlign.$clinit();
  if ($Equality.$same(TextAlign.f_namesToValuesMap__org_gwtproject_canvas_dom_client_Context2d_TextAlign_, null)) {
   TextAlign.f_namesToValuesMap__org_gwtproject_canvas_dom_client_Context2d_TextAlign_ = $Enums.createMapFromValues(TextAlign.m_values__());
  }
  return $Enums.getValueFromNameAndMap(name, TextAlign.f_namesToValuesMap__org_gwtproject_canvas_dom_client_Context2d_TextAlign_);
 }
 /** @return {!Array<!TextAlign>} */
 static m_values__() {
  TextAlign.$clinit();
  return /**@type {!Array<TextAlign>}*/ ($Arrays.$init([TextAlign.$f_CENTER__org_gwtproject_canvas_dom_client_Context2d_TextAlign, TextAlign.$f_END__org_gwtproject_canvas_dom_client_Context2d_TextAlign, TextAlign.$f_LEFT__org_gwtproject_canvas_dom_client_Context2d_TextAlign, TextAlign.$f_RIGHT__org_gwtproject_canvas_dom_client_Context2d_TextAlign, TextAlign.$f_START__org_gwtproject_canvas_dom_client_Context2d_TextAlign], TextAlign));
 }
 //Bridge method.
 /** @override @return {number} */
 m_compareTo__java_lang_Object(/** TextAlign */ arg0) {
  return super.compareTo(/**@type {TextAlign}*/ ($Casts.$to(arg0, TextAlign)));
 }
 /** @return {!TextAlign} */
 static get f_CENTER__org_gwtproject_canvas_dom_client_Context2d_TextAlign() {
  return (TextAlign.$clinit(), TextAlign.$f_CENTER__org_gwtproject_canvas_dom_client_Context2d_TextAlign);
 }
 /** @return {!TextAlign} */
 static get f_END__org_gwtproject_canvas_dom_client_Context2d_TextAlign() {
  return (TextAlign.$clinit(), TextAlign.$f_END__org_gwtproject_canvas_dom_client_Context2d_TextAlign);
 }
 /** @return {!TextAlign} */
 static get f_LEFT__org_gwtproject_canvas_dom_client_Context2d_TextAlign() {
  return (TextAlign.$clinit(), TextAlign.$f_LEFT__org_gwtproject_canvas_dom_client_Context2d_TextAlign);
 }
 /** @return {!TextAlign} */
 static get f_RIGHT__org_gwtproject_canvas_dom_client_Context2d_TextAlign() {
  return (TextAlign.$clinit(), TextAlign.$f_RIGHT__org_gwtproject_canvas_dom_client_Context2d_TextAlign);
 }
 /** @return {!TextAlign} */
 static get f_START__org_gwtproject_canvas_dom_client_Context2d_TextAlign() {
  return (TextAlign.$clinit(), TextAlign.$f_START__org_gwtproject_canvas_dom_client_Context2d_TextAlign);
 }
 
 static $clinit() {
  TextAlign.$clinit = () =>{};
  TextAlign.$loadModules();
  Enum.$clinit();
  TextAlign.$f_CENTER__org_gwtproject_canvas_dom_client_Context2d_TextAlign = TextAlign.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("CENTER"), TextAlign.$ordinal$f_CENTER__org_gwtproject_canvas_dom_client_Context2d_TextAlign, "center");
  TextAlign.$f_END__org_gwtproject_canvas_dom_client_Context2d_TextAlign = TextAlign.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("END"), TextAlign.$ordinal$f_END__org_gwtproject_canvas_dom_client_Context2d_TextAlign, "end");
  TextAlign.$f_LEFT__org_gwtproject_canvas_dom_client_Context2d_TextAlign = TextAlign.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("LEFT"), TextAlign.$ordinal$f_LEFT__org_gwtproject_canvas_dom_client_Context2d_TextAlign, "left");
  TextAlign.$f_RIGHT__org_gwtproject_canvas_dom_client_Context2d_TextAlign = TextAlign.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("RIGHT"), TextAlign.$ordinal$f_RIGHT__org_gwtproject_canvas_dom_client_Context2d_TextAlign, "right");
  TextAlign.$f_START__org_gwtproject_canvas_dom_client_Context2d_TextAlign = TextAlign.$create__java_lang_String__int__java_lang_String($Util.$makeEnumName("START"), TextAlign.$ordinal$f_START__org_gwtproject_canvas_dom_client_Context2d_TextAlign, "start");
  TextAlign.f_namesToValuesMap__org_gwtproject_canvas_dom_client_Context2d_TextAlign_ = null;
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof TextAlign;
 }
 
 static $loadModules() {
  $Equality = goog.module.get('nativebootstrap.Equality$impl');
  $Arrays = goog.module.get('vmbootstrap.Arrays$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Enums = goog.module.get('vmbootstrap.Enums$impl');
 }
 
}
$Util.$setClassMetadataForEnum(TextAlign, 'org.gwtproject.canvas.dom.client.Context2d$TextAlign');

/**@private {!TextAlign}*/
TextAlign.$f_CENTER__org_gwtproject_canvas_dom_client_Context2d_TextAlign;
/**@private {!TextAlign}*/
TextAlign.$f_END__org_gwtproject_canvas_dom_client_Context2d_TextAlign;
/**@private {!TextAlign}*/
TextAlign.$f_LEFT__org_gwtproject_canvas_dom_client_Context2d_TextAlign;
/**@private {!TextAlign}*/
TextAlign.$f_RIGHT__org_gwtproject_canvas_dom_client_Context2d_TextAlign;
/**@private {!TextAlign}*/
TextAlign.$f_START__org_gwtproject_canvas_dom_client_Context2d_TextAlign;
/**@type {Map<?string, !TextAlign>}*/
TextAlign.f_namesToValuesMap__org_gwtproject_canvas_dom_client_Context2d_TextAlign_;
/**@const {number}*/
TextAlign.$ordinal$f_CENTER__org_gwtproject_canvas_dom_client_Context2d_TextAlign = 0;
/**@const {number}*/
TextAlign.$ordinal$f_END__org_gwtproject_canvas_dom_client_Context2d_TextAlign = 1;
/**@const {number}*/
TextAlign.$ordinal$f_LEFT__org_gwtproject_canvas_dom_client_Context2d_TextAlign = 2;
/**@const {number}*/
TextAlign.$ordinal$f_RIGHT__org_gwtproject_canvas_dom_client_Context2d_TextAlign = 3;
/**@const {number}*/
TextAlign.$ordinal$f_START__org_gwtproject_canvas_dom_client_Context2d_TextAlign = 4;

exports = TextAlign; 
//# sourceMappingURL=Context2d$TextAlign.js.map
