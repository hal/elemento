goog.module('org.gwtproject.dom.builder.client.DomScriptBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const ScriptBuilder = goog.require('org.gwtproject.dom.builder.shared.ScriptBuilder$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.ScriptElement.$Overlay$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @extends {DomElementBuilderBase<ScriptBuilder, Object>}
 * @implements {ScriptBuilder}
  */
class DomScriptBuilder extends DomElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DomScriptBuilder} */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  DomScriptBuilder.$clinit();
  let $instance = new DomScriptBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomScriptBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_client_DomScriptBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
 }
 /** @override @return {ScriptBuilder} */
 m_defer__java_lang_String(/** ?string */ defer) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).defer = defer;
  return this;
 }
 /** @override @return {ScriptBuilder} */
 m_html__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ html) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__java_lang_String(ScriptBuilder.f_UNSUPPORTED_HTML__org_gwtproject_dom_builder_shared_ScriptBuilder));
 }
 /** @override @return {boolean} */
 m_isChildElementSupported__() {
  return false;
 }
 /** @override @return {ScriptBuilder} */
 m_src__java_lang_String(/** ?string */ src) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).src = src;
  return this;
 }
 /** @override @return {ScriptBuilder} */
 m_text__java_lang_String(/** ?string */ text) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).text = text;
  this.m_getDelegate___$pp_org_gwtproject_dom_builder_client().m_lockCurrentElement__();
  return this;
 }
 /** @override @return {ScriptBuilder} */
 m_type__java_lang_String(/** ?string */ type) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).type = type;
  return this;
 }
 
 static $clinit() {
  DomScriptBuilder.$clinit = () =>{};
  DomScriptBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DomScriptBuilder;
 }
 
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  $Overlay = goog.module.get('org.gwtproject.dom.client.ScriptElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(DomScriptBuilder, 'org.gwtproject.dom.builder.client.DomScriptBuilder');

ScriptBuilder.$markImplementor(DomScriptBuilder);

exports = DomScriptBuilder; 
//# sourceMappingURL=DomScriptBuilder.js.map
