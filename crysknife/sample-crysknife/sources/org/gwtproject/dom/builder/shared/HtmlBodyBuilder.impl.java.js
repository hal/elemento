goog.module('org.gwtproject.dom.builder.shared.HtmlBodyBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BodyBuilder = goog.require('org.gwtproject.dom.builder.shared.BodyBuilder$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');

/**
 * @extends {HtmlElementBuilderBase<BodyBuilder>}
 * @implements {BodyBuilder}
  */
class HtmlBodyBuilder extends HtmlElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HtmlBodyBuilder} */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  HtmlBodyBuilder.$clinit();
  let $instance = new HtmlBodyBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlBodyBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_shared_HtmlBodyBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
 }
 
 static $clinit() {
  HtmlBodyBuilder.$clinit = () =>{};
  HtmlBodyBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HtmlBodyBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HtmlBodyBuilder, 'org.gwtproject.dom.builder.shared.HtmlBodyBuilder');

BodyBuilder.$markImplementor(HtmlBodyBuilder);

exports = HtmlBodyBuilder; 
//# sourceMappingURL=HtmlBodyBuilder.js.map
