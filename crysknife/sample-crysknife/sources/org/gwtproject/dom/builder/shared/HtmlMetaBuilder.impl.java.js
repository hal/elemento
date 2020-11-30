goog.module('org.gwtproject.dom.builder.shared.HtmlMetaBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');
const MetaBuilder = goog.require('org.gwtproject.dom.builder.shared.MetaBuilder$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {HtmlElementBuilderBase<MetaBuilder>}
 * @implements {MetaBuilder}
  */
class HtmlMetaBuilder extends HtmlElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HtmlMetaBuilder} */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  HtmlMetaBuilder.$clinit();
  let $instance = new HtmlMetaBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlMetaBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_shared_HtmlMetaBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl__boolean(delegate, true);
 }
 /** @override @return {MetaBuilder} */
 m_content__java_lang_String(/** ?string */ content) {
  return /**@type {MetaBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("content", content), MetaBuilder));
 }
 /** @override @return {MetaBuilder} */
 m_httpEquiv__java_lang_String(/** ?string */ httpEquiv) {
  return /**@type {MetaBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("httpEquiv", httpEquiv), MetaBuilder));
 }
 /** @override @return {MetaBuilder} */
 m_name__java_lang_String(/** ?string */ name) {
  return /**@type {MetaBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("name", name), MetaBuilder));
 }
 
 static $clinit() {
  HtmlMetaBuilder.$clinit = () =>{};
  HtmlMetaBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HtmlMetaBuilder;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HtmlMetaBuilder, 'org.gwtproject.dom.builder.shared.HtmlMetaBuilder');

MetaBuilder.$markImplementor(HtmlMetaBuilder);

exports = HtmlMetaBuilder; 
//# sourceMappingURL=HtmlMetaBuilder.js.map
