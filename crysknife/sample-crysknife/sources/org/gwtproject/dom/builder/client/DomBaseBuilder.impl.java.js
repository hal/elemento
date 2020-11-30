goog.module('org.gwtproject.dom.builder.client.DomBaseBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const BaseBuilder = goog.require('org.gwtproject.dom.builder.shared.BaseBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.BaseElement.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DomElementBuilderBase<BaseBuilder, Object>}
 * @implements {BaseBuilder}
  */
class DomBaseBuilder extends DomElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DomBaseBuilder} */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  DomBaseBuilder.$clinit();
  let $instance = new DomBaseBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomBaseBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_client_DomBaseBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl__boolean(delegate, true);
 }
 /** @override @return {BaseBuilder} */
 m_href__java_lang_String(/** ?string */ href) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).href = href;
  return this;
 }
 /** @override @return {BaseBuilder} */
 m_target__java_lang_String(/** ?string */ target) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).target = target;
  return this;
 }
 
 static $clinit() {
  DomBaseBuilder.$clinit = () =>{};
  DomBaseBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DomBaseBuilder;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.BaseElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DomBaseBuilder, 'org.gwtproject.dom.builder.client.DomBaseBuilder');

BaseBuilder.$markImplementor(DomBaseBuilder);

exports = DomBaseBuilder; 
//# sourceMappingURL=DomBaseBuilder.js.map
