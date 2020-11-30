goog.module('org.gwtproject.dom.builder.client.DomTableBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const TableBuilder = goog.require('org.gwtproject.dom.builder.shared.TableBuilder$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TableElement.$Overlay$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @extends {DomElementBuilderBase<TableBuilder, Object>}
 * @implements {TableBuilder}
  */
class DomTableBuilder extends DomElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DomTableBuilder} */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  DomTableBuilder.$clinit();
  let $instance = new DomTableBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomTableBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_client_DomTableBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl__boolean(delegate, false);
 }
 /** @override @return {TableBuilder} */
 m_border__int(/** number */ border) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).border = border;
  return this;
 }
 /** @override @return {TableBuilder} */
 m_cellPadding__int(/** number */ cellPadding) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).cellPadding = cellPadding;
  return this;
 }
 /** @override @return {TableBuilder} */
 m_cellSpacing__int(/** number */ cellSpacing) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).cellSpacing = cellSpacing;
  return this;
 }
 /** @override @return {TableBuilder} */
 m_frame__java_lang_String(/** ?string */ frame) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).frame = frame;
  return this;
 }
 /** @override @return {TableBuilder} */
 m_html__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ html) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(TableBuilder.f_UNSUPPORTED_HTML__org_gwtproject_dom_builder_shared_TableBuilder));
 }
 /** @override @return {TableBuilder} */
 m_rules__java_lang_String(/** ?string */ rules) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).rules = rules;
  return this;
 }
 /** @override @return {TableBuilder} */
 m_text__java_lang_String(/** ?string */ text) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(TableBuilder.f_UNSUPPORTED_HTML__org_gwtproject_dom_builder_shared_TableBuilder));
 }
 /** @override @return {TableBuilder} */
 m_width__java_lang_String(/** ?string */ width) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).width = width;
  return this;
 }
 
 static $clinit() {
  DomTableBuilder.$clinit = () =>{};
  DomTableBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DomTableBuilder;
 }
 
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.TableElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(DomTableBuilder, 'org.gwtproject.dom.builder.client.DomTableBuilder');

TableBuilder.$markImplementor(DomTableBuilder);

exports = DomTableBuilder; 
//# sourceMappingURL=DomTableBuilder.js.map
