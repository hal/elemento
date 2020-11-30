goog.module('org.gwtproject.dom.builder.client.DomMetaBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const MetaBuilder = goog.require('org.gwtproject.dom.builder.shared.MetaBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.MetaElement.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DomElementBuilderBase<MetaBuilder, Object>}
 * @implements {MetaBuilder}
  */
class DomMetaBuilder extends DomElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DomMetaBuilder} */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  DomMetaBuilder.$clinit();
  let $instance = new DomMetaBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomMetaBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_client_DomMetaBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl__boolean(delegate, true);
 }
 /** @override @return {MetaBuilder} */
 m_content__java_lang_String(/** ?string */ content) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).content = content;
  return this;
 }
 /** @override @return {MetaBuilder} */
 m_httpEquiv__java_lang_String(/** ?string */ httpEquiv) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).httpEquiv = httpEquiv;
  return this;
 }
 /** @override @return {MetaBuilder} */
 m_name__java_lang_String(/** ?string */ name) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).name = name;
  return this;
 }
 
 static $clinit() {
  DomMetaBuilder.$clinit = () =>{};
  DomMetaBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DomMetaBuilder;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.MetaElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DomMetaBuilder, 'org.gwtproject.dom.builder.client.DomMetaBuilder');

MetaBuilder.$markImplementor(DomMetaBuilder);

exports = DomMetaBuilder; 
//# sourceMappingURL=DomMetaBuilder.js.map
