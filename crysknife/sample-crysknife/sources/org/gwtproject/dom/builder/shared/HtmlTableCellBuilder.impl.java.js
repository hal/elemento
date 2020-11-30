goog.module('org.gwtproject.dom.builder.shared.HtmlTableCellBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');
const TableCellBuilder = goog.require('org.gwtproject.dom.builder.shared.TableCellBuilder$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {HtmlElementBuilderBase<TableCellBuilder>}
 * @implements {TableCellBuilder}
  */
class HtmlTableCellBuilder extends HtmlElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HtmlTableCellBuilder} */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  HtmlTableCellBuilder.$clinit();
  let $instance = new HtmlTableCellBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlTableCellBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_shared_HtmlTableCellBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
 }
 /** @override @return {TableCellBuilder} */
 m_align__java_lang_String(/** ?string */ align) {
  return /**@type {TableCellBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("align", align), TableCellBuilder));
 }
 /** @override @return {TableCellBuilder} */
 m_ch__java_lang_String(/** ?string */ ch) {
  return /**@type {TableCellBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("ch", ch), TableCellBuilder));
 }
 /** @override @return {TableCellBuilder} */
 m_chOff__java_lang_String(/** ?string */ chOff) {
  return /**@type {TableCellBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("chOff", chOff), TableCellBuilder));
 }
 /** @override @return {TableCellBuilder} */
 m_colSpan__int(/** number */ colSpan) {
  return /**@type {TableCellBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__int_$pp_org_gwtproject_dom_builder_shared("colSpan", colSpan), TableCellBuilder));
 }
 /** @override @return {TableCellBuilder} */
 m_headers__java_lang_String(/** ?string */ headers) {
  return /**@type {TableCellBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("headers", headers), TableCellBuilder));
 }
 /** @override @return {TableCellBuilder} */
 m_rowSpan__int(/** number */ rowSpan) {
  return /**@type {TableCellBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__int_$pp_org_gwtproject_dom_builder_shared("rowSpan", rowSpan), TableCellBuilder));
 }
 /** @override @return {TableCellBuilder} */
 m_vAlign__java_lang_String(/** ?string */ vAlign) {
  return /**@type {TableCellBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("vAlign", vAlign), TableCellBuilder));
 }
 
 static $clinit() {
  HtmlTableCellBuilder.$clinit = () =>{};
  HtmlTableCellBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HtmlTableCellBuilder;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HtmlTableCellBuilder, 'org.gwtproject.dom.builder.shared.HtmlTableCellBuilder');

TableCellBuilder.$markImplementor(HtmlTableCellBuilder);

exports = HtmlTableCellBuilder; 
//# sourceMappingURL=HtmlTableCellBuilder.js.map
