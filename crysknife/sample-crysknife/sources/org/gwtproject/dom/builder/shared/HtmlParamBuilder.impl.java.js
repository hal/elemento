goog.module('org.gwtproject.dom.builder.shared.HtmlParamBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');
const ParamBuilder = goog.require('org.gwtproject.dom.builder.shared.ParamBuilder$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let $Casts = goog.forwardDeclare('vmbootstrap.Casts$impl');

/**
 * @extends {HtmlElementBuilderBase<ParamBuilder>}
 * @implements {ParamBuilder}
  */
class HtmlParamBuilder extends HtmlElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HtmlParamBuilder} */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  HtmlParamBuilder.$clinit();
  let $instance = new HtmlParamBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlParamBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_shared_HtmlParamBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl__boolean(delegate, true);
 }
 /** @override @return {ParamBuilder} */
 m_name__java_lang_String(/** ?string */ name) {
  return /**@type {ParamBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("name", name), ParamBuilder));
 }
 /** @override @return {ParamBuilder} */
 m_value__java_lang_String(/** ?string */ value) {
  return /**@type {ParamBuilder}*/ ($Casts.$to(this.m_trustedAttribute__java_lang_String__java_lang_String_$pp_org_gwtproject_dom_builder_shared("value", value), ParamBuilder));
 }
 
 static $clinit() {
  HtmlParamBuilder.$clinit = () =>{};
  HtmlParamBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HtmlParamBuilder;
 }
 
 static $loadModules() {
  $Casts = goog.module.get('vmbootstrap.Casts$impl');
 }
 
}
$Util.$setClassMetadata(HtmlParamBuilder, 'org.gwtproject.dom.builder.shared.HtmlParamBuilder');

ParamBuilder.$markImplementor(HtmlParamBuilder);

exports = HtmlParamBuilder; 
//# sourceMappingURL=HtmlParamBuilder.js.map
