goog.module('org.gwtproject.dom.builder.shared.HtmlBaseBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BaseBuilder = goog.require('org.gwtproject.dom.builder.shared.BaseBuilder$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {HtmlElementBuilderBase<BaseBuilder>}
 * @implements {BaseBuilder}
  */
class HtmlBaseBuilder extends HtmlElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HtmlBaseBuilder} */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  HtmlBaseBuilder.$clinit();
  let $instance = new HtmlBaseBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlBaseBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_shared_HtmlBaseBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl__boolean(delegate, true);
 }
 /** @override @return {BaseBuilder} */
 m_href__java_lang_String(/** ?string */ href) {
  return /**@type {BaseBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("href", href), BaseBuilder));
 }
 /** @override @return {BaseBuilder} */
 m_target__java_lang_String(/** ?string */ target) {
  return /**@type {BaseBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("target", target), BaseBuilder));
 }
 
 static $clinit() {
  HtmlBaseBuilder.$clinit = () =>{};
  HtmlBaseBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HtmlBaseBuilder;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HtmlBaseBuilder, 'org.gwtproject.dom.builder.shared.HtmlBaseBuilder');

BaseBuilder.$markImplementor(HtmlBaseBuilder);

exports = HtmlBaseBuilder; 
//# sourceMappingURL=HtmlBaseBuilder.js.map
