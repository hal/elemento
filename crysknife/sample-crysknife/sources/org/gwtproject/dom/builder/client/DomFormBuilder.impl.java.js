goog.module('org.gwtproject.dom.builder.client.DomFormBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const FormBuilder = goog.require('org.gwtproject.dom.builder.shared.FormBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.FormElement.$Overlay$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DomElementBuilderBase<FormBuilder, Object>}
 * @implements {FormBuilder}
  */
class DomFormBuilder extends DomElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DomFormBuilder} */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  DomFormBuilder.$clinit();
  let $instance = new DomFormBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomFormBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_client_DomFormBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
 }
 /** @override @return {FormBuilder} */
 m_acceptCharset__java_lang_String(/** ?string */ acceptCharset) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).acceptCharset = acceptCharset;
  return this;
 }
 /** @override @return {FormBuilder} */
 m_action__org_gwtproject_safehtml_shared_SafeUri(/** SafeUri */ action) {
  $Overlay.m_setAction__$devirt__org_gwtproject_dom_client_FormElement__org_gwtproject_safehtml_shared_SafeUri(/**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)), action);
  return this;
 }
 /** @override @return {FormBuilder} */
 m_action__java_lang_String(/** ?string */ action) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).action = action;
  return this;
 }
 /** @override @return {FormBuilder} */
 m_enctype__java_lang_String(/** ?string */ enctype) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).enctype = enctype;
  return this;
 }
 /** @override @return {FormBuilder} */
 m_method__java_lang_String(/** ?string */ method) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).method = method;
  return this;
 }
 /** @override @return {FormBuilder} */
 m_name__java_lang_String(/** ?string */ name) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).name = name;
  return this;
 }
 /** @override @return {FormBuilder} */
 m_target__java_lang_String(/** ?string */ target) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).target = target;
  return this;
 }
 
 static $clinit() {
  DomFormBuilder.$clinit = () =>{};
  DomFormBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DomFormBuilder;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.FormElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DomFormBuilder, 'org.gwtproject.dom.builder.client.DomFormBuilder');

FormBuilder.$markImplementor(DomFormBuilder);

exports = DomFormBuilder; 
//# sourceMappingURL=DomFormBuilder.js.map
