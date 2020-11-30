goog.module('org.gwtproject.dom.builder.client.DomTableColBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const TableColBuilder = goog.require('org.gwtproject.dom.builder.shared.TableColBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TableColElement.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DomElementBuilderBase<TableColBuilder, Object>}
 * @implements {TableColBuilder}
  */
class DomTableColBuilder extends DomElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DomTableColBuilder} */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl__boolean(/** DomBuilderImpl */ delegate, /** boolean */ group) {
  DomTableColBuilder.$clinit();
  let $instance = new DomTableColBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomTableColBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl__boolean(delegate, group);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_client_DomTableColBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl__boolean(/** DomBuilderImpl */ delegate, /** boolean */ group) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl__boolean(delegate, !group);
 }
 /** @override @return {TableColBuilder} */
 m_align__java_lang_String(/** ?string */ align) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).align = align;
  return this;
 }
 /** @override @return {TableColBuilder} */
 m_ch__java_lang_String(/** ?string */ ch) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).ch = ch;
  return this;
 }
 /** @override @return {TableColBuilder} */
 m_chOff__java_lang_String(/** ?string */ chOff) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).chOff = chOff;
  return this;
 }
 /** @override @return {TableColBuilder} */
 m_span__int(/** number */ span) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).span = span;
  return this;
 }
 /** @override @return {TableColBuilder} */
 m_vAlign__java_lang_String(/** ?string */ vAlign) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).VAlign = vAlign;
  return this;
 }
 /** @override @return {TableColBuilder} */
 m_width__java_lang_String(/** ?string */ width) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).width = width;
  return this;
 }
 
 static $clinit() {
  DomTableColBuilder.$clinit = () =>{};
  DomTableColBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DomTableColBuilder;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.TableColElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DomTableColBuilder, 'org.gwtproject.dom.builder.client.DomTableColBuilder');

TableColBuilder.$markImplementor(DomTableColBuilder);

exports = DomTableColBuilder; 
//# sourceMappingURL=DomTableColBuilder.js.map
