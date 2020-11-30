goog.module('org.gwtproject.dom.builder.client.DomLegendBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const LegendBuilder = goog.require('org.gwtproject.dom.builder.shared.LegendBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.LegendElement.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DomElementBuilderBase<LegendBuilder, Object>}
 * @implements {LegendBuilder}
  */
class DomLegendBuilder extends DomElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DomLegendBuilder} */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  DomLegendBuilder.$clinit();
  let $instance = new DomLegendBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomLegendBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_client_DomLegendBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
 }
 /** @override @return {LegendBuilder} */
 m_accessKey__java_lang_String(/** ?string */ accessKey) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).accessKey = accessKey;
  return this;
 }
 
 static $clinit() {
  DomLegendBuilder.$clinit = () =>{};
  DomLegendBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DomLegendBuilder;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.LegendElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DomLegendBuilder, 'org.gwtproject.dom.builder.client.DomLegendBuilder');

LegendBuilder.$markImplementor(DomLegendBuilder);

exports = DomLegendBuilder; 
//# sourceMappingURL=DomLegendBuilder.js.map
