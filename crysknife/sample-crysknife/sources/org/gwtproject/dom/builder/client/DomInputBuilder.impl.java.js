goog.module('org.gwtproject.dom.builder.client.DomInputBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const InputBuilder = goog.require('org.gwtproject.dom.builder.shared.InputBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.InputElement.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DomElementBuilderBase<InputBuilder, Object>}
 * @implements {InputBuilder}
  */
class DomInputBuilder extends DomElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DomInputBuilder} */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  DomInputBuilder.$clinit();
  let $instance = new DomInputBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomInputBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_client_DomInputBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl__boolean(delegate, true);
 }
 /** @override @return {InputBuilder} */
 m_accept__java_lang_String(/** ?string */ accept) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).accept = accept;
  return this;
 }
 /** @override @return {InputBuilder} */
 m_accessKey__java_lang_String(/** ?string */ accessKey) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).accessKey = accessKey;
  return this;
 }
 /** @override @return {InputBuilder} */
 m_alt__java_lang_String(/** ?string */ alt) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).alt = alt;
  return this;
 }
 /** @override @return {InputBuilder} */
 m_checked__() {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).checked = true;
  return this;
 }
 /** @override @return {InputBuilder} */
 m_defaultChecked__() {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).defaultChecked = true;
  return this;
 }
 /** @override @return {InputBuilder} */
 m_defaultValue__java_lang_String(/** ?string */ defaultValue) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).defaultValue = defaultValue;
  return this;
 }
 /** @override @return {InputBuilder} */
 m_disabled__() {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).disabled = true;
  return this;
 }
 /** @override @return {InputBuilder} */
 m_maxLength__int(/** number */ maxLength) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).maxLength = maxLength;
  return this;
 }
 /** @override @return {InputBuilder} */
 m_name__java_lang_String(/** ?string */ name) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).name = name;
  return this;
 }
 /** @override @return {InputBuilder} */
 m_readOnly__() {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).readOnly = true;
  return this;
 }
 /** @override @return {InputBuilder} */
 m_size__int(/** number */ size) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).size = size;
  return this;
 }
 /** @override @return {InputBuilder} */
 m_src__java_lang_String(/** ?string */ src) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).src = src;
  return this;
 }
 /** @override @return {InputBuilder} */
 m_value__java_lang_String(/** ?string */ value) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).value = value;
  return this;
 }
 
 static $clinit() {
  DomInputBuilder.$clinit = () =>{};
  DomInputBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DomInputBuilder;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.InputElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DomInputBuilder, 'org.gwtproject.dom.builder.client.DomInputBuilder');

InputBuilder.$markImplementor(DomInputBuilder);

exports = DomInputBuilder; 
//# sourceMappingURL=DomInputBuilder.js.map
