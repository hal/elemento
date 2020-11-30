goog.module('org.gwtproject.dom.builder.shared.HtmlOListBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');
const OListBuilder = goog.require('org.gwtproject.dom.builder.shared.OListBuilder$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');

/**
 * @extends {HtmlElementBuilderBase<OListBuilder>}
 * @implements {OListBuilder}
  */
class HtmlOListBuilder extends HtmlElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HtmlOListBuilder} */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  HtmlOListBuilder.$clinit();
  let $instance = new HtmlOListBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlOListBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_shared_HtmlOListBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
 }
 
 static $clinit() {
  HtmlOListBuilder.$clinit = () =>{};
  HtmlOListBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HtmlOListBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HtmlOListBuilder, 'org.gwtproject.dom.builder.shared.HtmlOListBuilder');

OListBuilder.$markImplementor(HtmlOListBuilder);

exports = HtmlOListBuilder; 
//# sourceMappingURL=HtmlOListBuilder.js.map
