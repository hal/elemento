goog.module('org.gwtproject.dom.builder.client.DomDListBuilder$impl');

const $Util = goog.require('nativebootstrap.Util$impl');
const DomElementBuilderBase = goog.require('org.gwtproject.dom.builder.client.DomElementBuilderBase$impl');
const DListBuilder = goog.require('org.gwtproject.dom.builder.shared.DListBuilder$impl');

let DomBuilderImpl = goog.forwardDeclare('org.gwtproject.dom.builder.client.DomBuilderImpl$impl');
let $Overlay = goog.forwardDeclare('org.gwtproject.dom.client.DListElement.$Overlay$impl');

/**
 * @extends {DomElementBuilderBase<DListBuilder, Object>}
 * @implements {DListBuilder}
  */
class DomDListBuilder extends DomElementBuilderBase {
 /** @protected */
 constructor() {
  super();
 }
 /** @return {!DomDListBuilder} */
 static $create__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  DomDListBuilder.$clinit();
  let $instance = new DomDListBuilder();
  $instance.$ctor__org_gwtproject_dom_builder_client_DomDListBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
  return $instance;
 }
 
 $ctor__org_gwtproject_dom_builder_client_DomDListBuilder__org_gwtproject_dom_builder_client_DomBuilderImpl(/** DomBuilderImpl */ delegate) {
  this.$ctor__org_gwtproject_dom_builder_client_DomElementBuilderBase__org_gwtproject_dom_builder_client_DomBuilderImpl(delegate);
 }
 
 static $clinit() {
  DomDListBuilder.$clinit = () =>{};
  DomDListBuilder.$loadModules();
  DomElementBuilderBase.$clinit();
 }
 /** @return {boolean} */
 static $isInstance(/** ? */ instance) {
  return instance instanceof DomDListBuilder;
 }
 
 static $loadModules() {}
 
}
$Util.$setClassMetadata(DomDListBuilder, 'org.gwtproject.dom.builder.client.DomDListBuilder');

DListBuilder.$markImplementor(DomDListBuilder);

exports = DomDListBuilder; 
//# sourceMappingURL=DomDListBuilder.js.map
