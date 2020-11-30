goog.module('org.gwtproject.dom.builder.shared.HtmlLabelBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');
const LabelBuilder = goog.require('org.gwtproject.dom.builder.shared.LabelBuilder$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {HtmlElementBuilderBase<LabelBuilder>}
 * @implements {LabelBuilder}
  */
class HtmlLabelBuilder extends HtmlElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HtmlLabelBuilder} */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  HtmlLabelBuilder.$clinit();
  let $instance = new HtmlLabelBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlLabelBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_shared_HtmlLabelBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
 }
 /** @override @return {LabelBuilder} */
 m_accessKey__java_lang_String(/** ?string */ accessKey) {
  return /**@type {LabelBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("accessKey", accessKey), LabelBuilder));
 }
 /** @override @return {LabelBuilder} */
 m_htmlFor__java_lang_String(/** ?string */ htmlFor) {
  return /**@type {LabelBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("for", htmlFor), LabelBuilder));
 }
 
 static $clinit() {
  HtmlLabelBuilder.$clinit = () =>{};
  HtmlLabelBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HtmlLabelBuilder;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HtmlLabelBuilder, 'org.gwtproject.dom.builder.shared.HtmlLabelBuilder');

LabelBuilder.$markImplementor(HtmlLabelBuilder);

exports = HtmlLabelBuilder; 
//# sourceMappingURL=HtmlLabelBuilder.js.map
