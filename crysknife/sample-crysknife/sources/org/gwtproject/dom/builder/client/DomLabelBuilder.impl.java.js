goog.module('org.gwtproject.dom.builder.client.DomLabelBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const LabelBuilder = goog.require('org.gwtproject.dom.builder.shared.LabelBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.LabelElement.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DomElementBuilderBase<LabelBuilder, Object>}
 * @implements {LabelBuilder}
  */
class DomLabelBuilder extends DomElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DomLabelBuilder} */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  DomLabelBuilder.$clinit();
  let $instance = new DomLabelBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomLabelBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_client_DomLabelBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
 }
 /** @override @return {LabelBuilder} */
 m_accessKey__java_lang_String(/** ?string */ accessKey) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).accessKey = accessKey;
  return this;
 }
 /** @override @return {LabelBuilder} */
 m_htmlFor__java_lang_String(/** ?string */ htmlFor) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).htmlFor = htmlFor;
  return this;
 }
 
 static $clinit() {
  DomLabelBuilder.$clinit = () =>{};
  DomLabelBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DomLabelBuilder;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.LabelElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DomLabelBuilder, 'org.gwtproject.dom.builder.client.DomLabelBuilder');

LabelBuilder.$markImplementor(DomLabelBuilder);

exports = DomLabelBuilder; 
//# sourceMappingURL=DomLabelBuilder.js.map
