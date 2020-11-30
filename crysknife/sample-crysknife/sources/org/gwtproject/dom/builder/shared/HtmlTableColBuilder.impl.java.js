goog.module('org.gwtproject.dom.builder.shared.HtmlTableColBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');
const TableColBuilder = goog.require('org.gwtproject.dom.builder.shared.TableColBuilder$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {HtmlElementBuilderBase<TableColBuilder>}
 * @implements {TableColBuilder}
  */
class HtmlTableColBuilder extends HtmlElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HtmlTableColBuilder} */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl__boolean(/** HtmlBuilderImpl */ delegate, /** boolean */ group) {
  HtmlTableColBuilder.$clinit();
  let $instance = new HtmlTableColBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlTableColBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl__boolean(delegate, group);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_shared_HtmlTableColBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl__boolean(/** HtmlBuilderImpl */ delegate, /** boolean */ group) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl__boolean(delegate, !group);
 }
 /** @override @return {TableColBuilder} */
 m_align__java_lang_String(/** ?string */ align) {
  return /**@type {TableColBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("align", align), TableColBuilder));
 }
 /** @override @return {TableColBuilder} */
 m_ch__java_lang_String(/** ?string */ ch) {
  return /**@type {TableColBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("ch", ch), TableColBuilder));
 }
 /** @override @return {TableColBuilder} */
 m_chOff__java_lang_String(/** ?string */ chOff) {
  return /**@type {TableColBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("chOff", chOff), TableColBuilder));
 }
 /** @override @return {TableColBuilder} */
 m_span__int(/** number */ span) {
  return /**@type {TableColBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__int_$pp_org_gwtproject_dom_builder_shared("span", span), TableColBuilder));
 }
 /** @override @return {TableColBuilder} */
 m_vAlign__java_lang_String(/** ?string */ vAlign) {
  return /**@type {TableColBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("vAlign", vAlign), TableColBuilder));
 }
 /** @override @return {TableColBuilder} */
 m_width__java_lang_String(/** ?string */ width) {
  return /**@type {TableColBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("width", width), TableColBuilder));
 }
 
 static $clinit() {
  HtmlTableColBuilder.$clinit = () =>{};
  HtmlTableColBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HtmlTableColBuilder;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HtmlTableColBuilder, 'org.gwtproject.dom.builder.shared.HtmlTableColBuilder');

TableColBuilder.$markImplementor(HtmlTableColBuilder);

exports = HtmlTableColBuilder; 
//# sourceMappingURL=HtmlTableColBuilder.js.map
