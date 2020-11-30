goog.module('org.gwtproject.dom.builder.client.DomAreaBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const AreaBuilder = goog.require('org.gwtproject.dom.builder.shared.AreaBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.AreaElement.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DomElementBuilderBase<AreaBuilder, Object>}
 * @implements {AreaBuilder}
  */
class DomAreaBuilder extends DomElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DomAreaBuilder} */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  DomAreaBuilder.$clinit();
  let $instance = new DomAreaBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomAreaBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_client_DomAreaBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl__boolean(delegate, true);
 }
 /** @override @return {AreaBuilder} */
 m_accessKey__java_lang_String(/** ?string */ accessKey) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).accessKey = accessKey;
  return this;
 }
 /** @override @return {AreaBuilder} */
 m_alt__java_lang_String(/** ?string */ alt) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).alt = alt;
  return this;
 }
 /** @override @return {AreaBuilder} */
 m_coords__java_lang_String(/** ?string */ coords) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).coords = coords;
  return this;
 }
 /** @override @return {AreaBuilder} */
 m_href__java_lang_String(/** ?string */ href) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).href = href;
  return this;
 }
 /** @override @return {AreaBuilder} */
 m_shape__java_lang_String(/** ?string */ shape) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).shape = shape;
  return this;
 }
 /** @override @return {AreaBuilder} */
 m_target__java_lang_String(/** ?string */ target) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).target = target;
  return this;
 }
 
 static $clinit() {
  DomAreaBuilder.$clinit = () =>{};
  DomAreaBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DomAreaBuilder;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.AreaElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DomAreaBuilder, 'org.gwtproject.dom.builder.client.DomAreaBuilder');

AreaBuilder.$markImplementor(DomAreaBuilder);

exports = DomAreaBuilder; 
//# sourceMappingURL=DomAreaBuilder.js.map
