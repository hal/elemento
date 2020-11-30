goog.module('org.gwtproject.dom.builder.shared.HtmlTitleBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');
const TitleBuilder = goog.require('org.gwtproject.dom.builder.shared.TitleBuilder$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');

/**
 * @extends {HtmlElementBuilderBase<TitleBuilder>}
 * @implements {TitleBuilder}
  */
class HtmlTitleBuilder extends HtmlElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HtmlTitleBuilder} */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  HtmlTitleBuilder.$clinit();
  let $instance = new HtmlTitleBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlTitleBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_shared_HtmlTitleBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
 }
 
 static $clinit() {
  HtmlTitleBuilder.$clinit = () =>{};
  HtmlTitleBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HtmlTitleBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HtmlTitleBuilder, 'org.gwtproject.dom.builder.shared.HtmlTitleBuilder');

TitleBuilder.$markImplementor(HtmlTitleBuilder);

exports = HtmlTitleBuilder; 
//# sourceMappingURL=HtmlTitleBuilder.js.map
