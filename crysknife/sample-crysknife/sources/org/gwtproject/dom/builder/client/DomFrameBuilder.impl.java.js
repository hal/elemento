goog.module('org.gwtproject.dom.builder.client.DomFrameBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const FrameBuilder = goog.require('org.gwtproject.dom.builder.shared.FrameBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.FrameElement.$Overlay$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {DomElementBuilderBase<FrameBuilder, Object>}
 * @implements {FrameBuilder}
  */
class DomFrameBuilder extends DomElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DomFrameBuilder} */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  DomFrameBuilder.$clinit();
  let $instance = new DomFrameBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomFrameBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_client_DomFrameBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl__boolean(delegate, true);
 }
 /** @override @return {FrameBuilder} */
 m_frameBorder__int(/** number */ frameBorder) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).frameBorder = frameBorder;
  return this;
 }
 /** @override @return {FrameBuilder} */
 m_longDesc__org_gwtproject_safehtml_shared_SafeUri(/** SafeUri */ longDesc) {
  $Overlay.m_setLongDesc__$devirt__org_gwtproject_dom_client_FrameElement__org_gwtproject_safehtml_shared_SafeUri(/**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)), longDesc);
  return this;
 }
 /** @override @return {FrameBuilder} */
 m_longDesc__java_lang_String(/** ?string */ longDesc) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).longDesc = longDesc;
  return this;
 }
 /** @override @return {FrameBuilder} */
 m_marginHeight__int(/** number */ marginHeight) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).marginHeight = marginHeight;
  return this;
 }
 /** @override @return {FrameBuilder} */
 m_marginWidth__int(/** number */ marginWidth) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).marginWidth = marginWidth;
  return this;
 }
 /** @override @return {FrameBuilder} */
 m_name__java_lang_String(/** ?string */ name) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).name = name;
  return this;
 }
 /** @override @return {FrameBuilder} */
 m_noResize__() {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).noResize = true;
  return this;
 }
 /** @override @return {FrameBuilder} */
 m_scrolling__java_lang_String(/** ?string */ scrolling) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).scrolling = scrolling;
  return this;
 }
 /** @override @return {FrameBuilder} */
 m_src__org_gwtproject_safehtml_shared_SafeUri(/** SafeUri */ src) {
  $Overlay.m_setSrc__$devirt__org_gwtproject_dom_client_FrameElement__org_gwtproject_safehtml_shared_SafeUri(/**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)), src);
  return this;
 }
 /** @override @return {FrameBuilder} */
 m_src__java_lang_String(/** ?string */ src) {
  /**@type {Object}*/ ($Casts.$to(this.m_assertCanAddAttribute__(), $Overlay)).src = src;
  return this;
 }
 
 static $clinit() {
  DomFrameBuilder.$clinit = () =>{};
  DomFrameBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DomFrameBuilder;
 }
 
 static $loadModules() {
  $Overlay = goog.module.get('org.gwtproject.dom.client.FrameElement.$Overlay$impl');
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(DomFrameBuilder, 'org.gwtproject.dom.builder.client.DomFrameBuilder');

FrameBuilder.$markImplementor(DomFrameBuilder);

exports = DomFrameBuilder; 
//# sourceMappingURL=DomFrameBuilder.js.map
