goog.module('org.gwtproject.dom.builder.shared.HtmlSourceBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');
const SourceBuilder = goog.require('org.gwtproject.dom.builder.shared.SourceBuilder$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {HtmlElementBuilderBase<SourceBuilder>}
 * @implements {SourceBuilder}
  */
class HtmlSourceBuilder extends HtmlElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HtmlSourceBuilder} */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  HtmlSourceBuilder.$clinit();
  let $instance = new HtmlSourceBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlSourceBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_shared_HtmlSourceBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl__boolean(delegate, true);
 }
 /** @override @return {SourceBuilder} */
 m_src__java_lang_String(/** ?string */ url) {
  return /**@type {SourceBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("url", url), SourceBuilder));
 }
 /** @override @return {SourceBuilder} */
 m_type__java_lang_String(/** ?string */ type) {
  return /**@type {SourceBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("type", type), SourceBuilder));
 }
 
 static $clinit() {
  HtmlSourceBuilder.$clinit = () =>{};
  HtmlSourceBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HtmlSourceBuilder;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HtmlSourceBuilder, 'org.gwtproject.dom.builder.shared.HtmlSourceBuilder');

SourceBuilder.$markImplementor(HtmlSourceBuilder);

exports = HtmlSourceBuilder; 
//# sourceMappingURL=HtmlSourceBuilder.js.map
