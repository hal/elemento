goog.module('org.gwtproject.dom.builder.client.DomTableSectionBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const TableSectionBuilder = goog.require('org.gwtproject.dom.builder.shared.TableSectionBuilder$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TableSectionElement.$Overlay$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @extends {DomElementBuilderBase<TableSectionBuilder, Object>}
 * @implements {TableSectionBuilder}
  */
class DomTableSectionBuilder extends DomElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DomTableSectionBuilder} */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  DomTableSectionBuilder.$clinit();
  let $instance = new DomTableSectionBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomTableSectionBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_client_DomTableSectionBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
 }
 /** @override @return {TableSectionBuilder} */
 m_align__java_lang_String(/** ?string */ align) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).align = align;
  return this;
 }
 /** @override @return {TableSectionBuilder} */
 m_ch__java_lang_String(/** ?string */ ch) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).ch = ch;
  return this;
 }
 /** @override @return {TableSectionBuilder} */
 m_chOff__java_lang_String(/** ?string */ chOff) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).chOff = chOff;
  return this;
 }
 /** @override @return {TableSectionBuilder} */
 m_html__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ html) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(TableSectionBuilder.f_UNSUPPORTED_HTML__org_gwtproject_dom_builder_shared_TableSectionBuilder));
 }
 /** @override @return {TableSectionBuilder} */
 m_text__java_lang_String(/** ?string */ text) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(TableSectionBuilder.f_UNSUPPORTED_HTML__org_gwtproject_dom_builder_shared_TableSectionBuilder));
 }
 /** @override @return {TableSectionBuilder} */
 m_vAlign__java_lang_String(/** ?string */ vAlign) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).VAlign = vAlign;
  return this;
 }
 
 static $clinit() {
  DomTableSectionBuilder.$clinit = () =>{};
  DomTableSectionBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DomTableSectionBuilder;
 }
 
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.TableSectionElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(DomTableSectionBuilder, 'org.gwtproject.dom.builder.client.DomTableSectionBuilder');

TableSectionBuilder.$markImplementor(DomTableSectionBuilder);

exports = DomTableSectionBuilder; 
//# sourceMappingURL=DomTableSectionBuilder.js.map
