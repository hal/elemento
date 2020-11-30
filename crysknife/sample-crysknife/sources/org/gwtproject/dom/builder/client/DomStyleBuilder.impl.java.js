goog.module('org.gwtproject.dom.builder.client.DomStyleBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const StyleBuilder = goog.require('org.gwtproject.dom.builder.shared.StyleBuilder$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.StyleElement.$Overlay$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @extends {DomElementBuilderBase<StyleBuilder, Object>}
 * @implements {StyleBuilder}
  */
class DomStyleBuilder extends DomElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DomStyleBuilder} */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  DomStyleBuilder.$clinit();
  let $instance = new DomStyleBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomStyleBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_client_DomStyleBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
 }
 /** @override @return {StyleBuilder} */
 m_cssText__java_lang_String(/** ?string */ cssText) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).cssText = cssText;
  this.m_getDelegate___$pp_org_gwtproject_dom_builder_client().m_lockCurrentElement__();
  return this;
 }
 /** @override @return {StyleBuilder} */
 m_disabled__() {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).disabled = true;
  return this;
 }
 /** @override @return {StyleBuilder} */
 m_html__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ html) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(StyleBuilder.f_UNSUPPORTED_HTML__org_gwtproject_dom_builder_shared_StyleBuilder));
 }
 /** @override @return {boolean} */
 m_isChildElementSupported__() {
  return false;
 }
 /** @override @return {StyleBuilder} */
 m_media__java_lang_String(/** ?string */ media) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).media = media;
  return this;
 }
 /** @override @return {StyleBuilder} */
 m_text__java_lang_String(/** ?string */ text) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(StyleBuilder.f_UNSUPPORTED_HTML__org_gwtproject_dom_builder_shared_StyleBuilder));
 }
 /** @override @return {StyleBuilder} */
 m_type__java_lang_String(/** ?string */ type) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).type = type;
  return this;
 }
 
 static $clinit() {
  DomStyleBuilder.$clinit = () =>{};
  DomStyleBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DomStyleBuilder;
 }
 
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.StyleElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(DomStyleBuilder, 'org.gwtproject.dom.builder.client.DomStyleBuilder');

StyleBuilder.$markImplementor(DomStyleBuilder);

exports = DomStyleBuilder; 
//# sourceMappingURL=DomStyleBuilder.js.map
