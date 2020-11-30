goog.module('org.gwtproject.dom.builder.shared.HtmlHeadBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HeadBuilder = goog.require('org.gwtproject.dom.builder.shared.HeadBuilder$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');

let UnsupportedOperationException = goog.forwardDeclare('java.lang.UnsupportedOperationException$impl');
let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');
let SafeHtml = goog.forwardDeclare('org.gwtproject.safehtml.shared.SafeHtml$impl');
let $Exceptions = goog.forwardDeclare('vmbootstrap.Exceptions$impl');

/**
 * @extends {HtmlElementBuilderBase<HeadBuilder>}
 * @implements {HeadBuilder}
  */
class HtmlHeadBuilder extends HtmlElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HtmlHeadBuilder} */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  HtmlHeadBuilder.$clinit();
  let $instance = new HtmlHeadBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlHeadBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_shared_HtmlHeadBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
 }
 /** @override @return {HeadBuilder} */
 m_html__org_gwtproject_safehtml_shared_SafeHtml(/** SafeHtml */ html) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 /** @override @return {HeadBuilder} */
 m_text__java_lang_String(/** ?string */ text) {
  throw $Exceptions.toJs(UnsupportedOperationException.$create__());
 }
 
 static $clinit() {
  HtmlHeadBuilder.$clinit = () =>{};
  HtmlHeadBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HtmlHeadBuilder;
 }
 
 static $loadModules() {
  UnsupportedOperationException = goog.module.get('java.lang.UnsupportedOperationException$impl');
  $Exceptions = goog.module.get('vmbootstrap.Exceptions$impl');
 }
 
}
$Util.$setClassMetadata(HtmlHeadBuilder, 'org.gwtproject.dom.builder.shared.HtmlHeadBuilder');

HeadBuilder.$markImplementor(HtmlHeadBuilder);

exports = HtmlHeadBuilder; 
//# sourceMappingURL=HtmlHeadBuilder.js.map
