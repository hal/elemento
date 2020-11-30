goog.module('org.gwtproject.dom.builder.client.DomTableRowBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const TableRowBuilder = goog.require('org.gwtproject.dom.builder.shared.TableRowBuilder$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TableRowElement.$Overlay$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @extends {DomElementBuilderBase<TableRowBuilder, Object>}
 * @implements {TableRowBuilder}
  */
class DomTableRowBuilder extends DomElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DomTableRowBuilder} */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  DomTableRowBuilder.$clinit();
  let $instance = new DomTableRowBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomTableRowBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_client_DomTableRowBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
 }
 /** @override @return {TableRowBuilder} */
 m_align__java_lang_String(/** ?string */ align) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).align = align;
  return this;
 }
 /** @override @return {TableRowBuilder} */
 m_ch__java_lang_String(/** ?string */ ch) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).ch = ch;
  return this;
 }
 /** @override @return {TableRowBuilder} */
 m_chOff__java_lang_String(/** ?string */ chOff) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).chOff = chOff;
  return this;
 }
 /** @override @return {TableRowBuilder} */
 m_html__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ html) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(TableRowBuilder.f_UNSUPPORTED_HTML__org_gwtproject_dom_builder_shared_TableRowBuilder));
 }
 /** @override @return {TableRowBuilder} */
 m_text__java_lang_String(/** ?string */ text) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(TableRowBuilder.f_UNSUPPORTED_HTML__org_gwtproject_dom_builder_shared_TableRowBuilder));
 }
 /** @override @return {TableRowBuilder} */
 m_vAlign__java_lang_String(/** ?string */ vAlign) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).VAlign = vAlign;
  return this;
 }
 
 static $clinit() {
  DomTableRowBuilder.$clinit = () =>{};
  DomTableRowBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DomTableRowBuilder;
 }
 
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.TableRowElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(DomTableRowBuilder, 'org.gwtproject.dom.builder.client.DomTableRowBuilder');

TableRowBuilder.$markImplementor(DomTableRowBuilder);

exports = DomTableRowBuilder; 
//# sourceMappingURL=DomTableRowBuilder.js.map
