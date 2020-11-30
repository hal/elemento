goog.module('org.gwtproject.dom.builder.client.DomImageBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const ImageBuilder = goog.require('org.gwtproject.dom.builder.shared.ImageBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.ImageElement.$Overlay$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DomElementBuilderBase<ImageBuilder, Object>}
 * @implements {ImageBuilder}
  */
class DomImageBuilder extends DomElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DomImageBuilder} */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  DomImageBuilder.$clinit();
  let $instance = new DomImageBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomImageBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_client_DomImageBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl__boolean(delegate, true);
 }
 /** @override @return {ImageBuilder} */
 m_alt__java_lang_String(/** ?string */ alt) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).alt = alt;
  return this;
 }
 /** @override @return {ImageBuilder} */
 m_height__int(/** number */ height) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).height = height;
  return this;
 }
 /** @override @return {ImageBuilder} */
 m_isMap__() {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).isMap = true;
  return this;
 }
 /** @override @return {ImageBuilder} */
 m_src__java_lang_String(/** ?string */ src) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).src = src;
  return this;
 }
 /** @override @return {ImageBuilder} */
 m_width__int(/** number */ width) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).width = width;
  return this;
 }
 
 static $clinit() {
  DomImageBuilder.$clinit = () =>{};
  DomImageBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DomImageBuilder;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.ImageElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DomImageBuilder, 'org.gwtproject.dom.builder.client.DomImageBuilder');

ImageBuilder.$markImplementor(DomImageBuilder);

exports = DomImageBuilder; 
//# sourceMappingURL=DomImageBuilder.js.map
