goog.module('org.gwtproject.dom.builder.client.DomTableCellBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const TableCellBuilder = goog.require('org.gwtproject.dom.builder.shared.TableCellBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TableCellElement.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DomElementBuilderBase<TableCellBuilder, Object>}
 * @implements {TableCellBuilder}
  */
class DomTableCellBuilder extends DomElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DomTableCellBuilder} */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  DomTableCellBuilder.$clinit();
  let $instance = new DomTableCellBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomTableCellBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_client_DomTableCellBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
 }
 /** @override @return {TableCellBuilder} */
 m_align__java_lang_String(/** ?string */ align) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).align = align;
  return this;
 }
 /** @override @return {TableCellBuilder} */
 m_ch__java_lang_String(/** ?string */ ch) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).ch = ch;
  return this;
 }
 /** @override @return {TableCellBuilder} */
 m_chOff__java_lang_String(/** ?string */ chOff) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).chOff = chOff;
  return this;
 }
 /** @override @return {TableCellBuilder} */
 m_colSpan__int(/** number */ colSpan) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).colSpan = colSpan;
  return this;
 }
 /** @override @return {TableCellBuilder} */
 m_headers__java_lang_String(/** ?string */ headers) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).headers = headers;
  return this;
 }
 /** @override @return {TableCellBuilder} */
 m_rowSpan__int(/** number */ rowSpan) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).rowSpan = rowSpan;
  return this;
 }
 /** @override @return {TableCellBuilder} */
 m_vAlign__java_lang_String(/** ?string */ vAlign) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).VAlign = vAlign;
  return this;
 }
 
 static $clinit() {
  DomTableCellBuilder.$clinit = () =>{};
  DomTableCellBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DomTableCellBuilder;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.TableCellElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DomTableCellBuilder, 'org.gwtproject.dom.builder.client.DomTableCellBuilder');

TableCellBuilder.$markImplementor(DomTableCellBuilder);

exports = DomTableCellBuilder; 
//# sourceMappingURL=DomTableCellBuilder.js.map
