goog.module('org.gwtproject.dom.builder.client.DomOListBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const OListBuilder = goog.require('org.gwtproject.dom.builder.shared.OListBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.OListElement.$Overlay$impl');

/**
 * @extends {DomElementBuilderBase<OListBuilder, Object>}
 * @implements {OListBuilder}
  */
class DomOListBuilder extends DomElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DomOListBuilder} */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  DomOListBuilder.$clinit();
  let $instance = new DomOListBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomOListBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_client_DomOListBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
 }
 
 static $clinit() {
  DomOListBuilder.$clinit = () =>{};
  DomOListBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DomOListBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DomOListBuilder, 'org.gwtproject.dom.builder.client.DomOListBuilder');

OListBuilder.$markImplementor(DomOListBuilder);

exports = DomOListBuilder; 
//# sourceMappingURL=DomOListBuilder.js.map
