goog.module('org.gwtproject.dom.builder.shared.HtmlBRBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const BRBuilder = goog.require('org.gwtproject.dom.builder.shared.BRBuilder$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');

/**
 * @extends {HtmlElementBuilderBase<BRBuilder>}
 * @implements {BRBuilder}
  */
class HtmlBRBuilder extends HtmlElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HtmlBRBuilder} */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  HtmlBRBuilder.$clinit();
  let $instance = new HtmlBRBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlBRBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_shared_HtmlBRBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl__boolean(delegate, true);
 }
 
 static $clinit() {
  HtmlBRBuilder.$clinit = () =>{};
  HtmlBRBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HtmlBRBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HtmlBRBuilder, 'org.gwtproject.dom.builder.shared.HtmlBRBuilder');

BRBuilder.$markImplementor(HtmlBRBuilder);

exports = HtmlBRBuilder; 
//# sourceMappingURL=HtmlBRBuilder.js.map
