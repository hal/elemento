goog.module('org.gwtproject.dom.builder.client.DomFieldSetBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const FieldSetBuilder = goog.require('org.gwtproject.dom.builder.shared.FieldSetBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.FieldSetElement.$Overlay$impl');

/**
 * @extends {DomElementBuilderBase<FieldSetBuilder, Object>}
 * @implements {FieldSetBuilder}
  */
class DomFieldSetBuilder extends DomElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DomFieldSetBuilder} */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  DomFieldSetBuilder.$clinit();
  let $instance = new DomFieldSetBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomFieldSetBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_client_DomFieldSetBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
 }
 
 static $clinit() {
  DomFieldSetBuilder.$clinit = () =>{};
  DomFieldSetBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DomFieldSetBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DomFieldSetBuilder, 'org.gwtproject.dom.builder.client.DomFieldSetBuilder');

FieldSetBuilder.$markImplementor(DomFieldSetBuilder);

exports = DomFieldSetBuilder; 
//# sourceMappingURL=DomFieldSetBuilder.js.map
