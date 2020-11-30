goog.module('org.gwtproject.dom.builder.shared.HtmlLinkBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');
const LinkBuilder = goog.require('org.gwtproject.dom.builder.shared.LinkBuilder$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {HtmlElementBuilderBase<LinkBuilder>}
 * @implements {LinkBuilder}
  */
class HtmlLinkBuilder extends HtmlElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HtmlLinkBuilder} */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  HtmlLinkBuilder.$clinit();
  let $instance = new HtmlLinkBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlLinkBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_shared_HtmlLinkBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl__boolean(delegate, true);
 }
 /** @override @return {LinkBuilder} */
 m_disabled__() {
  return /**@type {LinkBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("disabled", "disabled"), LinkBuilder));
 }
 /** @override @return {LinkBuilder} */
 m_href__java_lang_String(/** ?string */ href) {
  return /**@type {LinkBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("href", href), LinkBuilder));
 }
 /** @override @return {LinkBuilder} */
 m_hreflang__java_lang_String(/** ?string */ hreflang) {
  return /**@type {LinkBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("hreflang", hreflang), LinkBuilder));
 }
 /** @override @return {LinkBuilder} */
 m_media__java_lang_String(/** ?string */ media) {
  return /**@type {LinkBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("media", media), LinkBuilder));
 }
 /** @override @return {LinkBuilder} */
 m_rel__java_lang_String(/** ?string */ rel) {
  return /**@type {LinkBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("rel", rel), LinkBuilder));
 }
 /** @override @return {LinkBuilder} */
 m_target__java_lang_String(/** ?string */ target) {
  return /**@type {LinkBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("target", target), LinkBuilder));
 }
 /** @override @return {LinkBuilder} */
 m_type__java_lang_String(/** ?string */ type) {
  return /**@type {LinkBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("type", type), LinkBuilder));
 }
 
 static $clinit() {
  HtmlLinkBuilder.$clinit = () =>{};
  HtmlLinkBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HtmlLinkBuilder;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HtmlLinkBuilder, 'org.gwtproject.dom.builder.shared.HtmlLinkBuilder');

LinkBuilder.$markImplementor(HtmlLinkBuilder);

exports = HtmlLinkBuilder; 
//# sourceMappingURL=HtmlLinkBuilder.js.map
