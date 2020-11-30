goog.module('org.gwtproject.dom.builder.shared.HtmlHeadingBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HeadingBuilder = goog.require('org.gwtproject.dom.builder.shared.HeadingBuilder$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');

/**
 * @extends {HtmlElementBuilderBase<HeadingBuilder>}
 * @implements {HeadingBuilder}
  */
class HtmlHeadingBuilder extends HtmlElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HtmlHeadingBuilder} */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  HtmlHeadingBuilder.$clinit();
  let $instance = new HtmlHeadingBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlHeadingBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_shared_HtmlHeadingBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
 }
 
 static $clinit() {
  HtmlHeadingBuilder.$clinit = () =>{};
  HtmlHeadingBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HtmlHeadingBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HtmlHeadingBuilder, 'org.gwtproject.dom.builder.shared.HtmlHeadingBuilder');

HeadingBuilder.$markImplementor(HtmlHeadingBuilder);

exports = HtmlHeadingBuilder; 
//# sourceMappingURL=HtmlHeadingBuilder.js.map
