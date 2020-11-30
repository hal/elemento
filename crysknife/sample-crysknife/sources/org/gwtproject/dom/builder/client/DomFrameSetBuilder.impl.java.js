goog.module('org.gwtproject.dom.builder.client.DomFrameSetBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const FrameSetBuilder = goog.require('org.gwtproject.dom.builder.shared.FrameSetBuilder$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.FrameSetElement.$Overlay$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @extends {DomElementBuilderBase<FrameSetBuilder, Object>}
 * @implements {FrameSetBuilder}
  */
class DomFrameSetBuilder extends DomElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DomFrameSetBuilder} */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  DomFrameSetBuilder.$clinit();
  let $instance = new DomFrameSetBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomFrameSetBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_client_DomFrameSetBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
 }
 /** @override @return {FrameSetBuilder} */
 m_cols__java_lang_String(/** ?string */ cols) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).cols = cols;
  return this;
 }
 /** @override @return {FrameSetBuilder} */
 m_html__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ html) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /** @override @return {FrameSetBuilder} */
 m_rows__java_lang_String(/** ?string */ rows) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).rows = rows;
  return this;
 }
 /** @override @return {FrameSetBuilder} */
 m_text__java_lang_String(/** ?string */ text) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 
 static $clinit() {
  DomFrameSetBuilder.$clinit = () =>{};
  DomFrameSetBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DomFrameSetBuilder;
 }
 
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.FrameSetElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(DomFrameSetBuilder, 'org.gwtproject.dom.builder.client.DomFrameSetBuilder');

FrameSetBuilder.$markImplementor(DomFrameSetBuilder);

exports = DomFrameSetBuilder; 
//# sourceMappingURL=DomFrameSetBuilder.js.map
