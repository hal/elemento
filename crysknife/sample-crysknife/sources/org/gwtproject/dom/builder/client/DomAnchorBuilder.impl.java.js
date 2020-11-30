goog.module('org.gwtproject.dom.builder.client.DomAnchorBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const AnchorBuilder = goog.require('org.gwtproject.dom.builder.shared.AnchorBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.AnchorElement.$Overlay$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DomElementBuilderBase<AnchorBuilder, Object>}
 * @implements {AnchorBuilder}
  */
class DomAnchorBuilder extends DomElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DomAnchorBuilder} */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  DomAnchorBuilder.$clinit();
  let $instance = new DomAnchorBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomAnchorBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_client_DomAnchorBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
 }
 /** @override @return {AnchorBuilder} */
 m_accessKey__java_lang_String(/** ?string */ accessKey) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).accessKey = accessKey;
  return this;
 }
 /** @override @return {AnchorBuilder} */
 m_href__org_gwtproject_safehtml_shared_SafeUri(/** SafeUri */ href) {
  $Overlay.m_setHref__$devirt__org_gwtproject_dom_client_AnchorElement__org_gwtproject_safehtml_shared_SafeUri(/**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)), href);
  return this;
 }
 /** @override @return {AnchorBuilder} */
 m_href__java_lang_String(/** ?string */ href) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).href = href;
  return this;
 }
 /** @override @return {AnchorBuilder} */
 m_hreflang__java_lang_String(/** ?string */ hreflang) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).hreflang = hreflang;
  return this;
 }
 /** @override @return {AnchorBuilder} */
 m_name__java_lang_String(/** ?string */ name) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).name = name;
  return this;
 }
 /** @override @return {AnchorBuilder} */
 m_rel__java_lang_String(/** ?string */ rel) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).rel = rel;
  return this;
 }
 /** @override @return {AnchorBuilder} */
 m_target__java_lang_String(/** ?string */ target) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).target = target;
  return this;
 }
 /** @override @return {AnchorBuilder} */
 m_type__java_lang_String(/** ?string */ type) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).type = type;
  return this;
 }
 
 static $clinit() {
  DomAnchorBuilder.$clinit = () =>{};
  DomAnchorBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DomAnchorBuilder;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.AnchorElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DomAnchorBuilder, 'org.gwtproject.dom.builder.client.DomAnchorBuilder');

AnchorBuilder.$markImplementor(DomAnchorBuilder);

exports = DomAnchorBuilder; 
//# sourceMappingURL=DomAnchorBuilder.js.map
