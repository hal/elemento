goog.module('org.gwtproject.dom.builder.client.DomIFrameBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const IFrameBuilder = goog.require('org.gwtproject.dom.builder.shared.IFrameBuilder$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let HtmlIFrameBuilder = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlIFrameBuilder$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.IFrameElement.$Overlay$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @extends {DomElementBuilderBase<IFrameBuilder, Object>}
 * @implements {IFrameBuilder}
  */
class DomIFrameBuilder extends DomElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DomIFrameBuilder} */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  DomIFrameBuilder.$clinit();
  let $instance = new DomIFrameBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomIFrameBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_client_DomIFrameBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
 }
 /** @override @return {IFrameBuilder} */
 m_frameBorder__int(/** number */ frameBorder) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).frameBorder = frameBorder;
  return this;
 }
 /** @override @return {HtmlIFrameBuilder} */
 m_html__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ html) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /** @override @return {boolean} */
 m_isChildElementSupported__() {
  return false;
 }
 /** @override @return {IFrameBuilder} */
 m_marginHeight__int(/** number */ marginHeight) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).marginHeight = marginHeight;
  return this;
 }
 /** @override @return {IFrameBuilder} */
 m_marginWidth__int(/** number */ marginWidth) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).marginWidth = marginWidth;
  return this;
 }
 /** @override @return {IFrameBuilder} */
 m_name__java_lang_String(/** ?string */ name) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).name = name;
  return this;
 }
 /** @override @return {IFrameBuilder} */
 m_noResize__() {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).noResize = true;
  return this;
 }
 /** @override @return {IFrameBuilder} */
 m_scrolling__java_lang_String(/** ?string */ scrolling) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).scrolling = scrolling;
  return this;
 }
 /** @override @return {IFrameBuilder} */
 m_src__org_gwtproject_safehtml_shared_SafeUri(/** SafeUri */ src) {
  $Overlay.m_setSrc__$devirt__org_gwtproject_dom_client_IFrameElement__org_gwtproject_safehtml_shared_SafeUri(/**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)), src);
  return this;
 }
 /** @override @return {IFrameBuilder} */
 m_src__java_lang_String(/** ?string */ src) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).src = src;
  return this;
 }
 /** @override @return {HtmlIFrameBuilder} */
 m_text__java_lang_String(/** ?string */ text) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 
 static $clinit() {
  DomIFrameBuilder.$clinit = () =>{};
  DomIFrameBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DomIFrameBuilder;
 }
 
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.IFrameElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(DomIFrameBuilder, 'org.gwtproject.dom.builder.client.DomIFrameBuilder');

IFrameBuilder.$markImplementor(DomIFrameBuilder);

exports = DomIFrameBuilder; 
//# sourceMappingURL=DomIFrameBuilder.js.map
