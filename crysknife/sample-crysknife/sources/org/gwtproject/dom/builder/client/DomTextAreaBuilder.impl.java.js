goog.module('org.gwtproject.dom.builder.client.DomTextAreaBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const TextAreaBuilder = goog.require('org.gwtproject.dom.builder.shared.TextAreaBuilder$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.TextAreaElement.$Overlay$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @extends {DomElementBuilderBase<TextAreaBuilder, Object>}
 * @implements {TextAreaBuilder}
  */
class DomTextAreaBuilder extends DomElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DomTextAreaBuilder} */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  DomTextAreaBuilder.$clinit();
  let $instance = new DomTextAreaBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomTextAreaBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_client_DomTextAreaBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
 }
 /** @override @return {TextAreaBuilder} */
 m_accessKey__java_lang_String(/** ?string */ accessKey) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).accessKey = accessKey;
  return this;
 }
 /** @override @return {TextAreaBuilder} */
 m_cols__int(/** number */ cols) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).cols = cols;
  return this;
 }
 /** @override @return {TextAreaBuilder} */
 m_defaultValue__java_lang_String(/** ?string */ defaultValue) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).defaultValue = defaultValue;
  return this;
 }
 /** @override @return {TextAreaBuilder} */
 m_disabled__() {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).disabled = true;
  return this;
 }
 /** @override @return {TextAreaBuilder} */
 m_html__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ html) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(TextAreaBuilder.f_UNSUPPORTED_HTML__org_gwtproject_dom_builder_shared_TextAreaBuilder));
 }
 /** @override @return {boolean} */
 m_isChildElementSupported__() {
  return false;
 }
 /** @override @return {TextAreaBuilder} */
 m_name__java_lang_String(/** ?string */ name) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).name = name;
  return this;
 }
 /** @override @return {TextAreaBuilder} */
 m_readOnly__() {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).readOnly = true;
  return this;
 }
 /** @override @return {TextAreaBuilder} */
 m_rows__int(/** number */ rows) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).rows = rows;
  return this;
 }
 /** @override @return {TextAreaBuilder} */
 m_value__java_lang_String(/** ?string */ value) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).value = value;
  return this;
 }
 
 static $clinit() {
  DomTextAreaBuilder.$clinit = () =>{};
  DomTextAreaBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DomTextAreaBuilder;
 }
 
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.TextAreaElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(DomTextAreaBuilder, 'org.gwtproject.dom.builder.client.DomTextAreaBuilder');

TextAreaBuilder.$markImplementor(DomTextAreaBuilder);

exports = DomTextAreaBuilder; 
//# sourceMappingURL=DomTextAreaBuilder.js.map
