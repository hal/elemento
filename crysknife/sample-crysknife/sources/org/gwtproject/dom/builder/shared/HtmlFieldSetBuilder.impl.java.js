goog.module('org.gwtproject.dom.builder.shared.HtmlFieldSetBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const FieldSetBuilder = goog.require('org.gwtproject.dom.builder.shared.FieldSetBuilder$impl');
const HtmlElementBuilderBase = goog.require('org.gwtproject.dom.builder.shared.HtmlElementBuilderBase$impl');

let HtmlBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.shared.HtmlBuilderImpl$impl');

/**
 * @extends {HtmlElementBuilderBase<FieldSetBuilder>}
 * @implements {FieldSetBuilder}
  */
class HtmlFieldSetBuilder extends HtmlElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!HtmlFieldSetBuilder} */
 static $create__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  HtmlFieldSetBuilder.$clinit();
  let $instance = new HtmlFieldSetBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_shared_HtmlFieldSetBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_shared_HtmlFieldSetBuilder__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(/** HtmlBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_shared_HtmlElementBuilderBase__org_gwtproject_dom_builder_shared_HtmlBuilderImpl(delegate);
 }
 
 static $clinit() {
  HtmlFieldSetBuilder.$clinit = () =>{};
  HtmlFieldSetBuilder.$loadModules();
  HtmlElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof HtmlFieldSetBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(HtmlFieldSetBuilder, 'org.gwtproject.dom.builder.shared.HtmlFieldSetBuilder');

FieldSetBuilder.$markImplementor(HtmlFieldSetBuilder);

exports = HtmlFieldSetBuilder; 
//# sourceMappingURL=HtmlFieldSetBuilder.js.map
