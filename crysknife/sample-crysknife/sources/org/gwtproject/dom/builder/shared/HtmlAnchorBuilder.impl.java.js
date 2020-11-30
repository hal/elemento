goog.module('org.gwtproject.dom.builder.shared.HtmlAnchorBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const AnchorBuilder = goog.require('org.gwtproject.dom.builder.shared.AnchorBuilder$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let SafeUri = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeUri$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {HtmlElementBuilderBase<AnchorBuilder>}
 * @implements {AnchorBuilder}
  */
class HtmlAnchorBuilder extends HtmlElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HtmlAnchorBuilder} */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  HtmlAnchorBuilder.$clinit();
  let $instance = new HtmlAnchorBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlAnchorBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_shared_HtmlAnchorBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
 }
 /** @override @return {AnchorBuilder} */
 m_accessKey__java_lang_String(/** ?string */ accessKey) {
  return /**@type {AnchorBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("accessKey", accessKey), AnchorBuilder));
 }
 /** @override @return {AnchorBuilder} */
 m_href__org_gwtproject_safehtml_shared_SafeUri(/** SafeUri */ href) {
  return this.m_href__java_lang_String(href.m_asString__());
 }
 /** @override @return {AnchorBuilder} */
 m_href__java_lang_String(/** ?string */ href) {
  return /**@type {AnchorBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("href", href), AnchorBuilder));
 }
 /** @override @return {AnchorBuilder} */
 m_hreflang__java_lang_String(/** ?string */ hreflang) {
  return /**@type {AnchorBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("hreflang", hreflang), AnchorBuilder));
 }
 /** @override @return {AnchorBuilder} */
 m_name__java_lang_String(/** ?string */ name) {
  return /**@type {AnchorBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("name", name), AnchorBuilder));
 }
 /** @override @return {AnchorBuilder} */
 m_rel__java_lang_String(/** ?string */ rel) {
  return /**@type {AnchorBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("rel", rel), AnchorBuilder));
 }
 /** @override @return {AnchorBuilder} */
 m_target__java_lang_String(/** ?string */ target) {
  return /**@type {AnchorBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("target", target), AnchorBuilder));
 }
 /** @override @return {AnchorBuilder} */
 m_type__java_lang_String(/** ?string */ type) {
  return /**@type {AnchorBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("type", type), AnchorBuilder));
 }
 
 static $clinit() {
  HtmlAnchorBuilder.$clinit = () =>{};
  HtmlAnchorBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HtmlAnchorBuilder;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HtmlAnchorBuilder, 'org.gwtproject.dom.builder.shared.HtmlAnchorBuilder');

AnchorBuilder.$markImplementor(HtmlAnchorBuilder);

exports = HtmlAnchorBuilder; 
//# sourceMappingURL=HtmlAnchorBuilder.js.map
