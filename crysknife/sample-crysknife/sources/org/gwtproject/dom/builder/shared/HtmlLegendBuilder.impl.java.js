goog.module('org.gwtproject.dom.builder.shared.HtmlLegendBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');
const LegendBuilder = goog.require('org.gwtproject.dom.builder.shared.LegendBuilder$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {HtmlElementBuilderBase<LegendBuilder>}
 * @implements {LegendBuilder}
  */
class HtmlLegendBuilder extends HtmlElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HtmlLegendBuilder} */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  HtmlLegendBuilder.$clinit();
  let $instance = new HtmlLegendBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlLegendBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_shared_HtmlLegendBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
 }
 /** @override @return {LegendBuilder} */
 m_accessKey__java_lang_String(/** ?string */ accessKey) {
  return /**@type {LegendBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("accessKey", accessKey), LegendBuilder));
 }
 
 static $clinit() {
  HtmlLegendBuilder.$clinit = () =>{};
  HtmlLegendBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HtmlLegendBuilder;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HtmlLegendBuilder, 'org.gwtproject.dom.builder.shared.HtmlLegendBuilder');

LegendBuilder.$markImplementor(HtmlLegendBuilder);

exports = HtmlLegendBuilder; 
//# sourceMappingURL=HtmlLegendBuilder.js.map
