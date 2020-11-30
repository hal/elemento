goog.module('org.gwtproject.dom.builder.client.DomPreBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const PreBuilder = goog.require('org.gwtproject.dom.builder.shared.PreBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.PreElement.$Overlay$impl');

/**
 * @extends {DomElementBuilderBase<PreBuilder, Object>}
 * @implements {PreBuilder}
  */
class DomPreBuilder extends DomElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DomPreBuilder} */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  DomPreBuilder.$clinit();
  let $instance = new DomPreBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomPreBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_client_DomPreBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
 }
 
 static $clinit() {
  DomPreBuilder.$clinit = () =>{};
  DomPreBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DomPreBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DomPreBuilder, 'org.gwtproject.dom.builder.client.DomPreBuilder');

PreBuilder.$markImplementor(DomPreBuilder);

exports = DomPreBuilder; 
//# sourceMappingURL=DomPreBuilder.js.map
